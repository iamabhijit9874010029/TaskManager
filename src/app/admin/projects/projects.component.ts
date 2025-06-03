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
  editProject: Project = new Project();
  editIndex: number = -1;
  deleteProject: Project = new Project();
  deleteIndex: number = -1;
  searchBy: string = "projectName"; // default search by projectName
  searchText: string = "";

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
        let p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects.push(p);

        this.newProject.projectID = null;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = null;

      },
      (error) => {
        console.error('Error inserting project:', error);
      }
    )

    return this.newProject;
  }

  onEditClick(event: MouseEvent, index: number) {
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }

  onUpdateClick() {
    this.projectService.updateProject(this.editProject).subscribe((response) => {
      let p: Project = new Project();
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects[this.editIndex] = p;

      this.newProject.projectID = null;
      this.newProject.projectName = null;
      this.newProject.dateOfStart = null;
      this.newProject.teamSize = null;
    }, (error) => {
      console.error('Error updating project:', error);
    });
  }

  //the new way after Rxjs 7.5+
  // onUpdateClick() {
  //   this.projectService.updateProject(this.editProject).subscribe({
  //     next: (value) => {
  //       let p: Project = new Project();
  //       p.projectID = value.projectID;
  //       p.projectName = value.projectName;
  //       p.dateOfStart = value.dateOfStart;
  //       p.teamSize = value.teamSize;
  //       this.projects[this.editIndex] = p;

  //       this.newProject.projectID = null;
  //       this.newProject.projectName = null;
  //       this.newProject.dateOfStart = null;
  //       this.newProject.teamSize = null;
  //     },
  //     error: (error) => {
  //       console.error('Error updating project:', error);
  //     },
  //     complete: () => {
  //       this.editIndex = -1; // Reset edit index after update
  //     }
  //   })
  // }

  onDeleteClick(event: MouseEvent, index: number) {
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
    this.deleteIndex = index;
  }

  onDeleteConfrimClick() {
    this.projectService.deleteProject(this.deleteProject.projectID!).subscribe((response) => {
      this.projects.splice(this.deleteIndex, 1);

      this.deleteProject.projectID = null;
      this.deleteProject.projectName = null;
      this.deleteProject.dateOfStart = null;
      this.deleteProject.teamSize = null;
    },
      (error) => {
        console.error('Error deleting project:', error);
      }
    )
  }

  onSearchCLick() {
    this.projectService.searchProjects(this.searchBy, this.searchText).subscribe((response) => {
      this.projects = response;
    }, (error) => {
      console.error('Error searching projects:', error);
    })
  }
}
