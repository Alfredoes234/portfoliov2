import { Message, SMTPClient } from 'emailjs';

export async function mailing(name: string, body: string, from: string, to: string, subject: string) {
    const client = new SMTPClient({
        user: 'user',
        password: 'password',
        host: 'smtp.your-email.com',
        ssl: true,
    });
    try {
        const message = await client.sendAsync({
            text: `'i hope this works'`,
            from: `${name} <${from}>`,
            to: 'Alfie Rayner <alfie.rayner@tutamail.com>',
            subject: 'Portfolio Contact',
            attachment: [
                { data: `<html><body><p>${body}</p></body></html>`, alternative: true },
            ],
        });
        console.log(message);
    } catch (err) {
        console.log(err);
    }
    
}


