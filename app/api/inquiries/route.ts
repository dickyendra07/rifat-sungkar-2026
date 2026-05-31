import { NextResponse } from "next/server";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fullName = String(body.fullName || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const inquiryType = String(body.inquiryType || "general-inquiry").trim();
    const message = String(body.message || "").trim();

    if (!fullName) {
      return NextResponse.json(
        { success: false, message: "Full name is required." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Valid email is required." },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { success: false, message: "Message is required." },
        { status: 400 }
      );
    }

    const res = await fetch(`${cmsUrl}/api/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        inquiryType,
        message,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to submit inquiry." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unexpected server error." },
      { status: 500 }
    );
  }
}
