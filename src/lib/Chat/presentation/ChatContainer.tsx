import React, { useState } from 'react';
import ChatInput from './ChatInput';
import { ChatUseCase } from '../application/ChatUseCase';
import { ChatRepositoryImpl } from '../infrastructure/ChatRepositoryImpl';
import ChatView from './ChatView'; 
import '../../../scss/ChatInput.scss'; 


const chatRepository = new ChatRepositoryImpl();
const chatUseCase = new ChatUseCase(chatRepository);

const ChatContainer: React.FC = () => {
    const [messages, setMessages] = useState(chatUseCase.getMessages());

    const handleSend = (text: string) => {
        chatUseCase.addMessage(text);
        setMessages(chatUseCase.getMessages());
    };

    return (
        <div className="chat-container">
            <ChatView messages={messages} />
            <ChatInput onSend={handleSend} />
        </div>
    );
};

export default ChatContainer;
