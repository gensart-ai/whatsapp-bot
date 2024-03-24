import { Client, Message } from 'whatsapp-web.js'
import { getForismaticQuotes } from '@services/external/quote-v1'
import { textProSingleTextRouter } from '@services/external/textpro'
import commandGuide from '@services/internal/command-guide'
import imageToSticker from '@services/internal/image-to-sticker'
import { translateEnglishToIndo, translateIndoToEnglish } from '@services/external/translate'
import { imageToStickerText } from '@services/external/image-to-sticker-meme'
import { log } from '@services/internal/log'
import { indoSlangQuote } from '@services/internal/quote-indo-slang'
import { getPpCouple } from '@services/internal/pp-couple'
import { ghola } from '@services/external/ghola'
import { requestInfo } from '@services/internal/request-info'
import { instagramDownloader } from '@services/external/instagram-downloader'

type Commands = {
    [key: string]: (client: Client, message: Message) => any
}
type Executor = (client: Client, message: Message) => void

const commands: Commands = {

    // ! Administrative commands
    '.log': log,

    // * Request Feature
    '.request': requestInfo,

    // * Help
    '.help': commandGuide,

    // * Quotes
    '.quotes': getForismaticQuotes,
    '.indoquotes': indoSlangQuote,


    // * Converter
    '.ig': instagramDownloader,

    // * Random Image
    '.ppcouple': getPpCouple,

    // * AI-generated
    '.tanya': ghola,

    // * Translation
    '.engtoindo': translateEnglishToIndo,
    '.indotoeng': translateIndoToEnglish,

    // * Image to sticker
    '.s': imageToSticker,
    '.st': imageToStickerText,

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