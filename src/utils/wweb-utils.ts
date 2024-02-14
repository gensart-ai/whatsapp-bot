
const mediaStickerMetadata = (stickerCreatorName: string | null = null): object => {
    let metadata: object = {
        sendMediaAsSticker: true,
        stickerName: 'SoraErlyana'
    }

    if(stickerCreatorName) {
        metadata = {
            ...metadata,
            stickerAuthor: 'Made by ' + stickerCreatorName
        }
    } else {
        metadata = {
            ...metadata,
            stickerAuthor: 'Made by SoraErlyana'
        }
    }

    return metadata
}

export {
    mediaStickerMetadata
}