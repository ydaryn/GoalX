import { Player } from "./player.model";
export interface Team {
    id: number;
    name: string;
    players: Player[];
    coach: string;
    founded: number;
}