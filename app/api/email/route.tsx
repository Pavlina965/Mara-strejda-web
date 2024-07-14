import { stat } from "fs";
import { type NextRequest, NextResponse } from "next/server";
import nodemailder from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();
  const transport = nodemailder.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_MY_EMAIL,
      pass: process.env.NEXT_PUBLIC_MY_PASSWORD,
    },
  });
  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Hello from ${name}(${email})`,
    text: message,
  };
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("email sent");
        } else {
          reject(err.message);
        }
      });
    });
  try {
    await sendMailPromise();
    return NextResponse.json({ message: "email sent" });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
