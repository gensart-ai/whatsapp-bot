interface EnvironmentConfiguration {
    isSendingMessageEnabled: boolean,

    botName: string,
    botShortName: string,
    botCodeName: string,

    imgBBKey: string, 
}

const environmentConfiguration: EnvironmentConfiguration = {
    isSendingMessageEnabled: true,

    botName: 'Sora Erlyana',
    botShortName: 'Sora',
    botCodeName: 'SoraErlyana',

    imgBBKey: '8ceb73c518129ab2ca63c8cf9f7ea8a6'
}

export default environmentConfiguration