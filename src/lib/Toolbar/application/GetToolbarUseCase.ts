import { ToolbarRepository } from "../domain/ToolbarRepository";
import { Toolbar } from "../domain/Toolbar";

export class GetToolbarUseCase {
    private toolbarRepository: ToolbarRepository;

    constructor(toolbarRepository: ToolbarRepository) {
        this.toolbarRepository = toolbarRepository;
    }

    async execute(): Promise<Toolbar> {
        return await this.toolbarRepository.getToolbar();
    }
}
