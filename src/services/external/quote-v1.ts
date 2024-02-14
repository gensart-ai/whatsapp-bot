import axios from 'axios';
import { Executor } from '@/command-hive';

const RESPONSE_SUCCESS: number = 200;

export const getQuote: Executor = async (client, message) => {
    try {
        const response = await axios.get('https://rest-api.akuari.my.id/randomtext/katabijak');
        
        if (response.status == RESPONSE_SUCCESS) {
            const data = response.data.hasil;
            const quoteMessage = await message.reply(data.quotes ?? '-');
            quoteMessage.reply(`by ${data.author ?? '-'}`);
        } else {
            message.reply('Gagal mengambil quotes, maaf :(');
        }
    } catch (e) {
        message.reply('Maaf, Sora mengalami masalah saat mengambil quotesnya :(');
    }
}