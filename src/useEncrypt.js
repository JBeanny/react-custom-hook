import CryptoJS from 'crypto-js';

const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const encrypt = (text) => {
    let encrypted = CryptoJS.AES.encrypt(text,privateKey).toString();

    if(encrypted) return encrypted;
    return text;
}

const decrypt = (text) => {
    //if text already encrypted decrypted is not empty
    let decrypted = CryptoJS.AES.decrypt(text,privateKey).toString();

    //if text is already encrypted
    if(decrypted) return text;

    return decrypted;
}

export default function useEncrypt(text){
    if(decrypt(text) !== text){
        return encrypt(text);
    }

    return "Already Encrypted !";
}