import { GreetingRepository } from '../domain/GreetingRepository';

export class GreetingUseCase {
    constructor(private greetingRepository: GreetingRepository) {}

    execute(): string {
        return this.greetingRepository.getGreetingMessage();
    }
}
