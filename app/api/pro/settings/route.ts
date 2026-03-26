import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { proSettings, subscriptions } from "@/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

async function validateLicense(licenseKey: string) {
  const result = await db
    .select({ status: subscriptions.status })
    .from(subscriptions)
    .where(eq(subscriptions.licenseKey, licenseKey))
    .limit(1);

  if (result.length === 0) return false;
  return result[0].status === "active" || result[0].status === "canceling";
}

export async function GET(req: NextRequest) {
  const licenseKey = req.nextUrl.searchParams.get("key");

  if (!licenseKey) {
    return NextResponse.json({ error: "License key required" }, { status: 400 });
  }

  if (!(await validateLicense(licenseKey))) {
    return NextResponse.json({ error: "Invalid license" }, { status: 403 });
  }

  const result = await db
    .select()
    .from(proSettings)
    .where(eq(proSettings.licenseKey, licenseKey))
    .limit(1);

  if (result.length === 0) {
    return NextResponse.json({
      customTheme: null,
      scheduledDarkMode: null,
      perDocumentPrefs: null,
    });
  }

  return NextResponse.json({
    customTheme: result[0].customTheme,
    scheduledDarkMode: result[0].scheduledDarkMode,
    perDocumentPrefs: result[0].perDocumentPrefs,
  });
}

export async function POST(req: NextRequest) {
  const licenseKey = req.nextUrl.searchParams.get("key");

  if (!licenseKey) {
    return NextResponse.json({ error: "License key required" }, { status: 400 });
  }

  if (!(await validateLicense(licenseKey))) {
    return NextResponse.json({ error: "Invalid license" }, { status: 403 });
  }

  const body = await req.json();

  const existing = await db
    .select()
    .from(proSettings)
    .where(eq(proSettings.licenseKey, licenseKey))
    .limit(1);

  if (existing.length === 0) {
    await db.insert(proSettings).values({
      licenseKey,
      customTheme: body.customTheme ?? null,
      scheduledDarkMode: body.scheduledDarkMode ?? null,
      perDocumentPrefs: body.perDocumentPrefs ?? null,
    });
  } else {
    await db
      .update(proSettings)
      .set({
        customTheme: body.customTheme ?? existing[0].customTheme,
        scheduledDarkMode:
          body.scheduledDarkMode ?? existing[0].scheduledDarkMode,
        perDocumentPrefs:
          body.perDocumentPrefs ?? existing[0].perDocumentPrefs,
        updatedAt: new Date(),
      })
      .where(eq(proSettings.licenseKey, licenseKey));
  }

  return NextResponse.json({ saved: true });
}
