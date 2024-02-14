import { Client, Message } from 'whatsapp-web.js'
import { getQuote } from 'services/external/quote-v1'
import textProSingleTextRouter from 'services/external/textpro'
import commandGuide from 'services/internal/command-guide'
import imageToSticker from 'services/internal/image-to-sticker'

type Commands = {
    [key: string] : (client: Client, message: Message) => any
}
type Executor = (client: Client, message: Message) => any

const commands: Commands = {
    // * Help
    '.help': commandGuide,

    // * Quotes
    '.quote': getQuote,

    // * Image to sticker
    '.s': imageToSticker,

    // * Text Pro Image Generation
    '.neon': textProSingleTextRouter,
    '.lunar': textProSingleTextRouter,
    '.thunder': textProSingleTextRouter,
    '.shadow': textProSingleTextRouter,
    '.snow': textProSingleTextRouter,
    '.winter': textProSingleTextRouter,
    '.frozen': textProSingleTextRouter,
    '.artistic-typography': textProSingleTextRouter,
    '.gradient-neon': textProSingleTextRouter,
    '.blackpink': textProSingleTextRouter,
    '.sliced-effect': textProSingleTextRouter,
    '.red-batman': textProSingleTextRouter,
    '.neon-valentine': textProSingleTextRouter,
    '.neon-cube': textProSingleTextRouter,
    '.blackpink-logo': textProSingleTextRouter,
}

export {
    Commands, Executor, commands
}