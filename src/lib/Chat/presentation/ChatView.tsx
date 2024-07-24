import React from 'react';
import { ChatMessage } from '../domain/Chat';
import '../../../scss/ChatInput.scss'; 

interface ChatViewProps {
    messages: ChatMessage[];
}

const ChatView: React.FC<ChatViewProps> = ({ messages }) => {
    return (
        <div className="chat-view">
            {messages.map((message) => (
                <div key={message.id} className={`message ${message.isIncoming ? 'incoming' : 'outgoing'}`}>
                    <p className="message-text">{message.text}</p>
                    <span className="message-timestamp">{message.timestamp.toLocaleTimeString()}</span>
                </div>
            ))}
        </div>
    );
};

export default ChatView;
