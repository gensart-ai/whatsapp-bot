import { Client, LocalAuth } from 'whatsapp-web.js';
import QR from 'qrcode-terminal';
import routeCommand from 'command-router';

let qrAttempts: number = 0;
const client: Client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('Scan this QR Code using your WhatsApp App');
    QR.generate(qr, {
        small: true
    });
    qrAttempts++;

    if (qrAttempts > 3) {
        client.destroy()
    }
})

client.on('message', message => routeCommand(client, message))

client.on('ready', () => {
    console.log('System is online!')
})
client.on('disconnected', (message: string) => {
    console.log('Client is closed due to disconnecting', message);
})

client.initialize();