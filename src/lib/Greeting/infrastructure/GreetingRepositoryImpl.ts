import { GreetingRepository } from '../domain/GreetingRepository';

export class GreetingRepositoryImpl implements GreetingRepository {
    getGreetingMessage(): string {
        return "Webb-App | AI-Chatbot";
    }
}
