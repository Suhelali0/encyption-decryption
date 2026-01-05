// Encryption Logic
function handleEncrypt() {
    const msg = document.getElementById('encMessage').value;
    const key = document.getElementById('encKey').value;
    const result = document.getElementById('encResult');

    if(!msg || !key) return alert("Message aur Key dalo!");

    const encrypted = CryptoJS.AES.encrypt(msg, key).toString();
    result.innerText = encrypted;
}

// Decryption Logic
function handleDecrypt() {
    const cipher = document.getElementById('decMessage').value;
    const key = document.getElementById('decKey').value;
    const result = document.getElementById('decResult');

    if(!cipher || !key) return alert("Ciphertext aur Key dalo!");

    try {
        const bytes = CryptoJS.AES.decrypt(cipher, key);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        
        if (!originalText) throw new Error();
        result.innerText = originalText;
    } catch (e) {
        alert("Galat Key ya Data!");
        result.innerText = "Error!";
    }
}