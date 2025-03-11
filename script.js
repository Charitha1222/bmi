function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    if (userInput.trim() === '') return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Generate bot response
    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot';
    botMessage.textContent = getBotResponse(userInput);
    chatBox.appendChild(botMessage);

    // Clear input
    document.getElementById('user-input').value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes('crop') || input.includes('crops')) {
        return 'Popular crops include rice, wheat, maize, and pulses.';
    }
    if (input.includes('fertilizer')) {
        return 'Common fertilizers are Urea, DAP, and Potash.';
    }
    if (input.includes('weather')) {
        return 'You can check weather updates from local weather apps or websites.';
    }
    if (input.includes('pest control')) {
        return 'Use pesticides like Neem oil or organic solutions for pest control.';
    }
    if (input.includes('farming technique')) {
        return 'Crop rotation, mixed farming, and organic farming are popular techniques.';
    }
    return 'I am not sure about that. Can you ask something related to agriculture?';
}