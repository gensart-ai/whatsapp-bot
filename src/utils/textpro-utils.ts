import * as cheerio from 'cheerio';
import { AxiosInstance } from 'axios';

type TextProToken = string;
type TextProImageUrl = string;

type TextProMetadata = {
    /**
     * URL of the TextPro text style page  
     * The URL should be look like `https://textpro.me/neon/.../online-882.html
     */
    textProUrl: string,

    /**
     * The text that will be rendered with the style
     */
    text: string,

    /**
     * The token you get from `textPro.getTokenFromTextProPage()`
     */
    token: string,

    /**
     * The shared instance. Remember :  
     * You should use the axios instance from `utils/axios-instance` for text pro image generation!  
     * Why ? Because text pro page have an enhanced CSRF, imo. It reads cookie.
     */
    axiosInstance: AxiosInstance
}

type TextProImageObject = {
    /**
     * Image, in a base64 string
     */
    image: string,

    /**
     * Mime type of the image
     */
    mimetype: string
}

/**
 * Retrieves an image from a given URL using the provided Axios instance.
 *
 * @param {string} imageUrl - the URL of the image
 * @param {AxiosInstance} axiosInstance - the Axios instance used to make the request
 * @return {object} an object containing the base64-encoded image and its mimetype
 */
const getImageFromTextPro = async (imageUrl: string, axiosInstance: AxiosInstance): Promise<TextProImageObject> => {
    const textProUrl = 'https://textpro.me';
    const imageResponse = await axiosInstance.get(textProUrl + imageUrl, {
        'responseType': 'arraybuffer'
    });

    const imageBase64: string = Buffer.from(imageResponse.data, 'binary').toString('base64');
    const imageMimeType: string | false = imageResponse.headers['content-type'] ?? false;

    if (imageMimeType == false) {
        throw new Error('Failed to get image extension');
    }

    return {
        'image': imageBase64,
        'mimetype': imageMimeType
    };
}

const getImageUrlFromTextPro = async (metadata: object, axiosInstance: AxiosInstance): Promise<TextProImageUrl> => {
    const textProImageHiveUrl = 'https://textpro.me/effect/create-image';

    const response = await axiosInstance.post(textProImageHiveUrl, metadata, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    });

    if (response.data.success ?? false) {
        return response.data.image;
    } else {
        throw new Error('Failed to get image url');
    }
}

const getImageMetadataFromTextPro = async (metadata: TextProMetadata): Promise<JSON> => {

    const response = await metadata.axiosInstance.post(metadata.textProUrl, {
        "text[]": metadata.text,
        "token": metadata.token,
        "build_server": "https://textpro.me",
        "build_server_id": "1"
    }, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });

    const $ = cheerio.load(response.data);

    const imageMetadata = $('#form_value').first().text();

    return JSON.parse(imageMetadata);
}

const getTokenFromTextProPage = async (textProUrl: string, axiosInstance: AxiosInstance): Promise<TextProToken> => {
    const response = await axiosInstance.get(textProUrl);

    if (response.status == 200) {
        const $ = cheerio.load(response.data);

        const textProToken = $('#token-element>input#token').val() as string;

        return textProToken;
    } else {
        throw new Error('Failed to get token');
    }
}

const createTextProImage = async (text: string, textProUrl: string, axiosInstance: AxiosInstance) => {
    const token: TextProToken = await getTokenFromTextProPage(textProUrl, axiosInstance);
    const metadata: JSON = await getImageMetadataFromTextPro({
        textProUrl: textProUrl,
        text: text,
        token: token,
        axiosInstance: axiosInstance
    });
    const imageUrl: TextProImageUrl = await getImageUrlFromTextPro(metadata, axiosInstance);
    const imageObject: TextProImageObject = await getImageFromTextPro(imageUrl, axiosInstance);

    return imageObject;
}

const warningNoTextMessage = (command: string) => {
    let helpText: Array<string> | string = [
        'Harap isikan teks juga',
        'Format : `' + command + ' [teks]`',
        'Contoh : `' + command + ' aku suka kamu`',
        'Contoh jadi stiker : `' + command + ' !sticker aku suka kamu`'
    ];
    return helpText.join('\n');
}

export {
    getTokenFromTextProPage,
    getImageMetadataFromTextPro,
    getImageUrlFromTextPro,
    getImageFromTextPro,
    warningNoTextMessage,
    createTextProImage,
    TextProToken,
    TextProImageUrl,
    TextProImageObject
}