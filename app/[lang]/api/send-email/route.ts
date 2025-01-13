import { transport } from '@/config/nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { sender, message } = await req.json();

    await transport.sendMail({
      from: sender,
      to: 'jordisato88@gmail.com',
      subject: 'Nuevo mensaje desde el formulario',
      html: `
        <h2>Has recibido un nuevo mensaje</h2>
        <p><strong>Email del remitente:</strong> ${sender}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Message sent, I will reply asap, thanks! ' }, { status: 200 });
  } catch (error) {
    console.error('Error sengind the message :', error);
    return NextResponse.json({ message: 'Error sending the message.' }, { status: 500 });
  }
}
