import CryptoJS from 'crypto-js';

const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const encrypt = (text) => {
    let encrypted = CryptoJS.AES.encrypt(text,privateKey).toString();

    if(encrypted) return encrypted;
    return text;
}

const decrypt = (text) => {
    let decrypted = CryptoJS.AES.decrypt(text,privateKey);
    let originalText = decrypted.toString(CryptoJS.enc.Utf8);

    if(decrypted) return originalText;

    return text;
}

const checkTextStatus = (text) => {
     //if text already encrypted return value
    let isEncrypted = CryptoJS.AES.decrypt(text,privateKey).toString();

    return isEncrypted;
}

export default function useEncrypt(text){
    if(checkTextStatus(text)){
        return decrypt(text);
    }
    return encrypt(text);
}