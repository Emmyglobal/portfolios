// Grab the elements
const sendBtn = document.getElementById('send-btn');
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');

// Function to send message
sendBtn.addEventListener('click', () => {
    let messageText = messageInput.value;

    if (messageText.trim() !== '') {
        // Create a new message bubble
        let newMessage = document.createElement('div');
        newMessage.classList.add('message', 'you');

        let avatar = document.createElement('img');
        avatar.src = 'profile_pix.jpg';  // replace with your profile image URL
        avatar.classList.add('avatar');
        
        let messageContent = document.createElement('p');
        messageContent.textContent = messageText;

        newMessage.appendChild(messageContent);
        newMessage.appendChild(avatar);
        
        chatBox.appendChild(newMessage);

        // Scroll to the bottom of chatbox
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear the input field
        messageInput.value = '';
    }
});