// Caesar Cipher Encryption/Decryption Tool
// This implements a Caesar cipher which shifts each letter by a fixed number of positions in the alphabet

// Configuration for the cipher
const CIPHER_SHIFT = 3; // Number of positions to shift (can be changed to 2 or 3)

// DOM elements
const textArea = document.querySelector('textarea');
const encryptButton = document.querySelector('.Buttons button:nth-child(1)');
const decryptButton = document.querySelector('.Buttons button:nth-child(2)');
const submitButton = document.querySelector('.Buttons button:nth-child(3)');

// Function to encrypt text using Caesar cipher
function encryptText(text, shift) {
    return text.split('').map(char => {
        // Only shift alphabetic characters
        if (char.match(/[a-z]/i)) {
            // Get the character code
            const code = char.charCodeAt(0);
            
            // Uppercase letters (A-Z: 65-90)
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            
            // Lowercase letters (a-z: 97-122)
            else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        
        // Return non-alphabetic characters unchanged
        return char;
    }).join('');
}

// Function to decrypt text using Caesar cipher
function decryptText(text, shift) {
    // Decrypting is just encrypting with the negative shift
    // We add 26 to handle negative results correctly
    return encryptText(text, 26 - shift);
}

// Function to update the text area with processed text
function updateTextArea(text) {
    textArea.value = text;
}

// Event listeners for buttons
encryptButton.addEventListener('click', () => {
    const originalText = textArea.value;
    const encryptedText = encryptText(originalText, CIPHER_SHIFT);
    updateTextArea(encryptedText);
    
    // Visual feedback
    encryptButton.style.backgroundColor = '#4CAF50';
    setTimeout(() => {
        encryptButton.style.backgroundColor = '';
    }, 300);
});

decryptButton.addEventListener('click', () => {
    const encryptedText = textArea.value;
    const decryptedText = decryptText(encryptedText, CIPHER_SHIFT);
    updateTextArea(decryptedText);
    
    // Visual feedback
    decryptButton.style.backgroundColor = '#4CAF50';
    setTimeout(() => {
        decryptButton.style.backgroundColor = '';
    }, 300);
});

// Submit button functionality (optional - could be used for other features)
submitButton.addEventListener('click', () => {
    alert('Text processed successfully!');
    
    // Visual feedback
    submitButton.style.backgroundColor = '#4CAF50';
    setTimeout(() => {
        submitButton.style.backgroundColor = '';
    }, 300);
});

// Background enhancement for better visual appeal
document.addEventListener('DOMContentLoaded', () => {
    // Add a subtle animated background
    document.body.style.background = `
        linear-gradient(135deg, 
        #667eea 0%, 
        #764ba2 100%)
    `;
    
    // Add some animation to the container
    const container = document.querySelector('.container');
    container.style.animation = 'fadeIn 1s ease-in';
    
    // Add CSS for the animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .boxes {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .boxes:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        
        button {
            transition: all 0.3s ease;
        }
        
        button:active {
            transform: scale(0.98);
        }
    `;
    document.head.appendChild(style);
});
