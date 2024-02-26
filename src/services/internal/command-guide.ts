import { Executor } from '@/command-hive'
import * as wweb from '@utils/wweb'
import config from '@/env'

const commandGuide: Executor = async (client, message) => {

    const commandListMessage: Array<string> = [
        `Hai, aku ${config.botName}, siap membantu kamu untuk kegiatan harianmu`,
        'Btw, dibawah ini list command yang tersedia: (Bisa ketik perintahnya aja untuk informasi setiap perintahnya ya)\n',
        '🦜 *Quotes*',
        '.quotes - Quotes Formal',
        '.indoquotes - Quotes Slang Indonesia\n',
        '🎲 *Random*',
        '.ppcouple - Gambar PP couple random\n',
        '🤖 *Fitur AI*',
        '.gemini - *DALAM PENGEMBANGAN* - \n',
        '🌐 *Translate*',
        '.indotoeng [text indo] - Translate Indonesia ke Inggris',
        '.engtoindo [text inggris] - Translate Inggris ke Indonesia\n',
        '📷 *Gambar jadi Stiker*',
        '.s (kirim bersama dengan gambarnya)',
        '.st [teks] (kirim bersama dengan gambarnya)\n',
        '🖼 *TextPro (Buat teks jadi gambar, dengan gaya)*',
        '.neon',
        '.lunar',
        '.thunder',
        '.shadow',
        '.snow',
        '.winter',
        '.frozen',
        '.artistic-typography',
        '.gradient-neon',
        '.blackpink',
        '.sliced-effect',
        '.red-batman',
        '.neon-valentine',
        '.neon-cube',
        '.blackpink-logo\n',
        `${config.botShortName} masih tahap pengembangan, banyak perintah juga nantinya ${config.botShortName} bisa lakuin loh >_<, stay tuned yaa. Oh iya, kamu juga bisa request ke creator ${config.botName}. Bye bye~\n\n`,
        `Detail of ${config.botShortName} : https://gensart.notion.site/SoraErlyana-WhatsApp-Bot-7248504bbe18476e912912a9426b9bad`
    ];

    // Merge the array of strings to be as a message
    const commandMessage = commandListMessage.join('\n');

    // Send the message
    wweb.sendMessage(client, message.from, commandMessage);
}

export default commandGuide;