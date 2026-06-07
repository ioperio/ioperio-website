import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, company, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name und E-Mail sind erforderlich." },
        { status: 400 }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ioperio <noreply@ioperio.at>",
        to: ["office@ioperio.at"],
        subject: `Neue Demo-Anfrage von ${name}`,
        html: `
          <h2>Neue Demo-Anfrage über ioperio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Firma:</strong> ${company || "-"}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "-"}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message || "-"}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Serverfehler beim Senden." },
      { status: 500 }
    );
  }
}
