import { Toolbar } from "./Toolbar";

export interface ToolbarRepository {
    getToolbar(): Promise<Toolbar>;
}
