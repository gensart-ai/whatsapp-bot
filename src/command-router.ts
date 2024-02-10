import { Client, Message } from "whatsapp-web.js"
import { commands } from "command-hive";

const routeCommand = async (client: Client, message: Message) => {

    const type: string = message.type;
    const command: string = message.body;

    const extractedCommand: string = command.split(' ')[0];

    if(extractedCommand in commands) {
        await commands[extractedCommand](client, message);
    } else {
        client.sendMessage(message.from, 'Saya tidak mengerti apa yang anda sampaikan :(');
    }
}

export default routeCommand