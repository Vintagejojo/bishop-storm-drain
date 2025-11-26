import nodemailer from "nodemailer";

// ✅ CORRECT: Named export
export async function POST(request) {
  try {
    const { name, phone, address, email, service, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "russel@bishopsdrain.com",
      subject: `New Contact Form - ${service || "General Inquiry"}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #DC2626; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #DC2626; }
            .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              ${address ? `
              <div class="field">
                <div class="label">Address:</div>
                <div class="value">${address}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Service Needed:</div>
                <div class="value">${service}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message || 'No message provided'}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Phone: ${phone}
Email: ${email}
${address ? `Address: ${address}` : ''}
Service Needed: ${service}
Message: ${message || 'No message provided'}
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}