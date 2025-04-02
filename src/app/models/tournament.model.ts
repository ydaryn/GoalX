import { Team } from "./team.model";
export interface Tournament {
    id: number;
    name: string;
    teams: Team[];
    startDate: string;
    endDate: string;
}