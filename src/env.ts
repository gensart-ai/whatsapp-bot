interface EnvironmentConfiguration {
    /**
     * Is sending any WhatsApp message allowed ?
     */
    isSendingMessageEnabled: boolean,

    /**
     * Bot full name
     */
    botName: string,

    /**
     * Bot short name
     */
    botShortName: string,

    /**
     * Bot codename
     */
    botCodeName: string,
}

const environmentConfiguration: EnvironmentConfiguration = {
    isSendingMessageEnabled: true,

    botName: 'Sora Erlyana',
    botShortName: 'Sora',
    botCodeName: 'SoraErlyana'
}

export default environmentConfiguration