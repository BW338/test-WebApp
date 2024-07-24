import { ToolbarRepository } from "../domain/ToolbarRepository";
import { Toolbar } from "../domain/Toolbar";

export class ToolbarRepositoryImpl implements ToolbarRepository {
    async getToolbar(): Promise<Toolbar> {
       
              
        return {
            title: "Web App",
            actions: ["campana", "carrito"]
        };
    }
}
