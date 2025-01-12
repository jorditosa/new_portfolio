import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

type TransportConfig = {
    host: string;
    port: number;
    secure: boolean;
    auth: {
        user: string;
        pass: string;
    };
};

const config = (): TransportConfig => {
    return {
        host: process.env.EMAIL_HOST || "smtp.gmail.com",
        port: Number(process.env.EMAIL_PORT) || 465,
        secure: Number(process.env.EMAIL_PORT) === 465,
        auth: {
            user: process.env.EMAIL_USER || "",
            pass: process.env.EMAIL_PASS || "",
        }
    };
};

export const transport = nodemailer.createTransport(config());