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
        default:
            logFile = '';
    }

    const logs: string = logger.fetchLog(logFile);

    if (logs != '') {
        wweb.replyMessage(message, logs)
    } else {
        wweb.replyMessage(message, `${config.botShortName} tidak melihat ada log saat ini.`)
    }
}

export {
    log
}