import { ChatMessage } from '../domain/Chat';
import { ChatRepository } from '../domain/ChatRepository';

export class ChatUseCase {
    constructor(private chatRepository: ChatRepository) {}

    addMessage(text: string): void {
        const newMessage: ChatMessage = {
            id: new Date().toISOString(),
            text,
            timestamp: new Date(),
            isIncoming: false, 


        };
        this.chatRepository.saveMessage(newMessage);
    }

    getMessages(): ChatMessage[] {
        return this.chatRepository.getMessages();
    }
}

