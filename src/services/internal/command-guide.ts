import { Executor } from "@/command-hive";

const commandGuide: Executor = async (client, message) => {

    const commandListMessage: Array<string> = [
        'Hai, aku Sora Erlyana, siap membantu kamu untuk kegiatan harianmu',
        'Btw, dibawah ini list command yang tersedia: (Bisa ketik perintahnya aja untuk informasi setiap perintahnya ya)\n',
        '===== Quotes =====',
        '.quote\n',
        '===== Gambar jadi Stiker =====',
        '.s (kirim bersama dengan gambarnya)\n',
        '===== TextPro (Buat teks jadi gambar, dengan gaya) =====',
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
        'Aku masih tahap pengembangan, banyak perintah juga nantinya aku bisa lakuin loh >_<, stay tuned yaa. Oh iya, kamu juga bisa request ke creatorku. Bye bye~'
    ];

    client.sendMessage(message.from, commandListMessage.join('\n'))
}

export default commandGuide;