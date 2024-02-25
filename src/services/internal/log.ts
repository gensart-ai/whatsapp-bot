import { Executor } from '@/command-hive'
import * as logger from '@utils/logger'
import * as wweb from '@utils/wweb'
import config from '@/env'

const log: Executor = async (client, message) => {
    // Extract the commands
    const text = message.body.split(' ');
    const logType: string = text[1];
    let logFile: string;

    switch (logType) {
        case 'error':
            logFile = logger.ERROR_LOG_FILE;
            break;
        default:
            wweb.replyMessage(message, 'Gunakan `error` sebagai argumen untuk `.log [argument]`')
            return 0;
    }

    try {
        const logs: string = logger.fetchLog(logFile);

        if (logs != '') {
            wweb.replyMessage(message, logs)
        } else {
            wweb.replyMessage(message, `${config.botShortName} tidak melihat ada log saat ini.`)
        }
    } catch (error) {
        wweb.replyMessage(message, 'Terjadi kesalahan saat memuat log.\n\n' + (error as Error).message)
    }
}

export {
    log
}