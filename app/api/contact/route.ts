import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, email, message, phone, requestType, rating } =
      await req.json();

    // Validate required fields
    if (!fullName || !email || !message || !phone || !requestType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (requestType === "feedback" && (!rating || rating < 1 || rating > 5)) {
      return NextResponse.json(
        { error: "Valid rating is required for feedback" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USERNAME!,
        pass: process.env.SMTP_PASSWORD!,
      },
    });

    const isContactRequest = requestType === "contact";
    const subject = isContactRequest
      ? `New Contact Message from ${fullName}`
      : `New Feedback from ${fullName}`;

    // Build email content
    let emailContent = `
New ${requestType} form submission

Name: ${fullName}
Email: ${email}
Phone number: ${phone}`;

    if (!isContactRequest && rating) {
      const starRating = "★".repeat(rating) + "☆".repeat(5 - rating);
      emailContent += `
Rating: ${rating}/5 stars (${starRating})`;
    }

    emailContent += `

${isContactRequest ? "Message:" : "Feedback:"}
${message}
    `;

    await transporter.sendMail({
      from: `"Pachimon Attorneys Website ${requestType === "contact" ? "Contact" : "Feedback"}" <${process.env.SMTP_USERNAME!}>`,
      to: process.env.MAIL_RECEIVER_ADDRESS!,
      replyTo: email,
      subject: subject,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid ${requestType === "contact" ? "#093F61" : "#009CFF"}; padding-bottom: 10px;">
            New ${requestType === "contact" ? "Contact" : "Feedback"} Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${
              !isContactRequest && rating
                ? `
            <p><strong>Rating:</strong> 
              <span style="color: #ffa500; font-size: 18px;">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</span>
              (${rating}/5 stars)
            </p>
            `
                : ""
            }
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid ${requestType === "contact" ? "#093F61" : "#009CFF"}; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #333;">${requestType === "contact" ? "Message" : "Feedback"}:</h3>
            <p style="line-height: 1.6; margin-bottom: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666;">
            <p>This email was sent from your website ${requestType} form.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: `${requestType === "contact" ? "Message" : "Feedback"} sent successfully`,
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
