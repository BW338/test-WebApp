import React, { useState } from 'react';
import '../../../scss/ChatInput.scss';


interface ChatInputProps {
    onSend: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    return (
        <div className="chat-input-container">
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Type a message..." 
            />
            <button onClick={handleSend} className="chat-send-button">Send</button>
        </div>
    );
};

export default ChatInput;
