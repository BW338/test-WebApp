import { ChatRepository } from '../domain/ChatRepository';
import { ChatMessage } from '../domain/Chat';

export class ChatRepositoryImpl implements ChatRepository {
    private messages: ChatMessage[] = [];

    saveMessage(message: ChatMessage): void {
        this.messages.push(message);
    }

    getMessages(): ChatMessage[] {
        return this.messages;
    }
}
