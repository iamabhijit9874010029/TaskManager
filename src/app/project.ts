export class Project {
    projectID: number;
    projectName: string | null;
    dateOfStart: string | null;
    teamSize: number;

    constructor() {
        this.projectID = 0;
        this.projectName = "";
        this.dateOfStart = null;
        this.teamSize = 0;
    }
}
