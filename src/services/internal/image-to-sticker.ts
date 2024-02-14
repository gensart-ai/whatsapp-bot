import { Executor } from "@/command-hive";
import { mediaStickerMetadata } from "utils/wweb-utils";
import { MessageMedia } from "whatsapp-web.js";

const imageToSticker: Executor = async (client, message) => {
    const contact = await message.getContact();

    if (message.hasMedia == false) {
        message.reply('Sora perlu gambar untuk dijadikan stikernya, ' + contact.pushname + '.');
        return 0;
    }
    const media: MessageMedia | undefined = await message.downloadMedia();

    if (media == undefined) {
        message.reply('Sora tidak dapat memproses gambar yang anda tujukan, mohon coba lagi dengan mengirim gambar baru.');
        return 0;
    }

    message.reply(media, undefined, mediaStickerMetadata(contact.pushname))
}

export default imageToSticker