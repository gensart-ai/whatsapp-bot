import { Client, Message } from "whatsapp-web.js"
import { commands } from "@/command-hive";

const routeCommand = async (client: Client, message: Message) => {

    // Read the message first
    await client.sendSeen(message.from);

    const type: string = message.type;
    const command: string = message.body;

    const extractedCommand: string = command.split(' ')[0];

    if(extractedCommand in commands) {
        await commands[extractedCommand](client, message);
    } else {
        client.sendMessage(message.from, 'Sora tidak mengerti apa yang anda sampaikan :(. Harap ketik `.help` untuk mengetahui yang Sora pahami :)');
    }
}

export default routeCommand