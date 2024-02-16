import { Client, Message } from 'whatsapp-web.js'
import { commands } from '@/command-hive'
import * as wweb from '@utils/wweb'
import config from '@/env'

const routeCommand = async (client: Client, message: Message) => {

    // Read the message
    await client.sendSeen(message.from);

    const type: string = message.type;
    const command: string = message.body;

    // 1.0, Currently only listen to text/chat or image messages, otherwise ignore it
    if (['chat', 'image', 'video'].includes(type) == false) {
        return 0;
    }

    const extractedCommand: string = command.split(' ')[0];

    if (extractedCommand in commands) {
        await commands[extractedCommand](client, message);
    } else {
        wweb.sendMessage(
            client,
            message.from,
            `${config.botShortName} tidak mengerti apa yang anda sampaikan :(. Harap ketik \`.help\` untuk mengetahui yang ${config.botShortName} pahami :)`
        )
    }
}

export default routeCommand