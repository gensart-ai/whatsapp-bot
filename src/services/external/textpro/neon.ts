import { AxiosError } from 'axios';
import axiosInstance from 'utils/axios-instance';
import { warningNoTextMessage, createTextProImage, TextProImageObject } from 'utils/textpro-utils';

import { Executor } from 'command-hive';
import { Contact, MessageMedia } from 'whatsapp-web.js';

const url: string = 'https://textpro.me/neon-light-text-effect-online-882.html';

export const neon: Executor = async (client, message) => {
    try {
        const creatorName: Contact = await message.getContact();

        // Extract the text from the command
        let isSticker: boolean = false;
        let text: string | string[] = message.body.split(' ');
        if(text.includes('!sticker')) {
            isSticker = true;
        }

        const command: string = text[0];
        text = text.slice(isSticker ? 2 : 1);
        
        // If the user only input just ".neon" or ".neon !sticker" only.
        if(text.length === 0) {
            message.reply(warningNoTextMessage(command));
            return 0;
        }

        text = text.join(' ')

        const image: TextProImageObject = await createTextProImage(text, url, axiosInstance);

        if(isSticker) {
            console.log('isSticker')
            message.reply(new MessageMedia(image.mimetype, image.image), undefined, {
                sendMediaAsSticker: true,
                stickerAuthor: 'Made by ' + creatorName.pushname,
                stickerName: 'SoraErlyana'
            });
        } else {
            console.log('isNotSticker')
            message.reply(new MessageMedia(image.mimetype, image.image));
        }

    } catch (e) {
        const error = e as AxiosError | Error;

        console.log(error.name + ': ' + error.message);
        message.reply('Sorry, error is happening\n\n' + error.message);
    }
};