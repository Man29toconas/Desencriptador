document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (!validateInput(inputText)) {
        alert('El texto contiene mayúsculas o caracteres especiales no permitidos.');
        return;
    }
    const encryptedText = encryptText(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (!validateInput(inputText)) {
        alert('El texto contiene mayúsculas o caracteres especiales no permitidos.');
        return;
    }
    const decryptedText = decryptText(inputText);
    document.getElementById('outputText').value = decryptedText;
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

function validateInput(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function encryptText(text) {
    const cipher = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return text.replace(/[eioua]/g, letter => cipher[letter]);
}

function decryptText(text) {
    const cipher = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return text.replace(/enter|imes|ai|ober|ufat/g, code => cipher[code]);
}