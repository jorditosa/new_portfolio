"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail")
    const message = formData.get("message")

    if(!validateString(senderEmail, 200)) {
        return {
            error: "Invalid sender email"
        }
    } 
    if (!validateString(message, 1000)) {
        return {
            error: "Invalid message"
        }
    }

    try {
        await resend.emails.send({
            from: 'Portfolio form <onboarding@resend.dev>',
            to: 'pokalde@protonmail.com',
            subject: 'Message from contact form',
            replyTo: senderEmail as string,
            text: message as string
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
};