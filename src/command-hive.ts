import { Client, Message } from 'whatsapp-web.js'
import { getQuote } from 'services/external/quote-v1'
import { neon } from 'services/external/textpro/neon'

type Commands = {
    [key: string] : (client: Client, message: Message) => any
}
type Executor = (client: Client, message: Message) => any

const commands: Commands = {
    ".quote": getQuote,
    ".neon": neon,
}

export {
    Commands, Executor, commands
}