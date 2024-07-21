// src/utils/sendEmail.ts

import nodemailer from 'nodemailer';
import { renderSubscriptionRenewalEmail } from './renderEmail';

const transporter = nodemailer.createTransport({
    host: 'smtp.your-email-provider.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
    },
});

interface SendSubscriptionRenewalEmailProps {
    to: string;
    name: string;
    renewalDate: string;
    renewalPrice: string;
    renewalPeriod: string;
    reviewSubscriptionLink: string;
    renewSubscriptionLink: string;
}

export const sendSubscriptionRenewalEmail = async ({
    to,
    name,
    renewalDate,
    renewalPrice,
    renewalPeriod,
    reviewSubscriptionLink,
    renewSubscriptionLink,
}: SendSubscriptionRenewalEmailProps) => {
    const html = renderSubscriptionRenewalEmail({ name, renewalDate, renewalPrice, renewalPeriod, reviewSubscriptionLink, renewSubscriptionLink });

    await transporter.sendMail({
        from: '"Your App" <no-reply@yourapp.com>',
        to,
        subject: 'Subscription Renewal Reminder',
        html,
    });
};
