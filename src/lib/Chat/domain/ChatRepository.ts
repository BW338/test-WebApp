import { ChatMessage } from './Chat';

export interface ChatRepository {
    saveMessage(message: ChatMessage): void;
    getMessages(): ChatMessage[];
}