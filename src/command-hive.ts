import { Client, Message } from 'whatsapp-web.js'
import { getQuote } from 'services/external/quote-v1'

type Commands = {
    [key: string] : (client: Client, message: Message) => any
}
type Executor = (client: Client, message: Message) => any

const commands: Commands = {
    ".quote": getQuote
}

export {
    Commands, Executor, commands
}