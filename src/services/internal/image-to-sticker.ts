import { MessageMedia } from 'whatsapp-web.js'
import { Executor } from '@/command-hive'
import * as wweb from '@utils/wweb'
import config from '@/env'

const imageToSticker: Executor = async (client, message) => {
    const contact = await message.getContact();

    if (message.hasMedia == false) {
        wweb.replyMessage(
            message,
            `${config.botShortName} perlu gambar untuk dijadikan stikernya, ${contact.pushname ?? ''}`
        );
        return 0;
    }

    const media: MessageMedia | undefined = await message.downloadMedia();
    if (media == undefined) {
        wweb.replyMessage(
            message,
            `${config.botShortName} gagal memproses gambar yang anda tujukan, mohon coba lagi dengan mengirim gambar baru.`
        );
        return 0;
    }

    wweb.replyMessage(message, media, wweb.mediaStickerMetadata(contact.pushname));
}

export default imageToSticker