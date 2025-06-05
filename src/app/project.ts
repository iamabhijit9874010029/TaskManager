export class Project {
    id?: string; // This is used for json-server, where "id" is the primary key
    projectID?: number | null;
    projectName?: string | null;
    dateOfStart?: string | null;
    teamSize?: number | null;

    constructor() { }
}
