import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  newProject: Project = new Project();

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
        console.log(this.projects);
      }
    );
  }

  onSaveClick(): Project {
    this.projectService.insertProject(this.newProject).subscribe(
      (response) => {
        this.projects.push(response);

        // this.newProject.projectID = null;
        // this.newProject.projectName = null;
        // this.newProject.teamSize = null;
        // this.newProject.dateOfStart = null;
        this.newProject = new Project(); // Reset the newProject object

      },
      (error) => {
        console.error('Error inserting project:', error);
      }
    )

    return this.newProject;
  }
}
