import {
  pgTable,
  serial,
  text,
  timestamp,
  boolean,
  jsonb,
} from "drizzle-orm/pg-core";

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  licenseKey: text("license_key").notNull().unique(),
  email: text("email").notNull(),
  stripeCustomerId: text("stripe_customer_id").notNull(),
  stripeSubscriptionId: text("stripe_subscription_id").notNull().unique(),
  status: text("status").notNull().default("active"),
  plan: text("plan").notNull().default("pro"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  canceledAt: timestamp("canceled_at"),
});

export const proSettings = pgTable("pro_settings", {
  id: serial("id").primaryKey(),
  licenseKey: text("license_key")
    .notNull()
    .references(() => subscriptions.licenseKey),
  customTheme: jsonb("custom_theme"),
  scheduledDarkMode: jsonb("scheduled_dark_mode"),
  perDocumentPrefs: jsonb("per_document_prefs"),
  updatedAt: timestamp("updated_at").defaultNow(),
});
