interface EnvironmentConfiguration {
    isSendingMessageEnabled: boolean,

    botName: string,
    botShortName: string,
    botCodeName: string,
}

const environmentConfiguration: EnvironmentConfiguration = {
    isSendingMessageEnabled: true,

    botName: 'Sora Erlyana',
    botShortName: 'Sora',
    botCodeName: 'SoraErlyana',
}

export default environmentConfiguration