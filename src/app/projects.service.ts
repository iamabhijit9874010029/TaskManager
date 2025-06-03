import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    // return this.httpClient.get<Project[]>('/api/projects'); //with proxy forwarding (need to create proxy.conf.json and add to angular.json, package.json)
    return this.httpClient.get<Project[]>('https://localhost:7062/api/projects', { responseType: 'json' }); //with cross-origin
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>('https://localhost:7062/api/projects', newProject, { responseType: 'json' });
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>('https://localhost:7062/api/projects', existingProject, { responseType: 'json' });
  }

  deleteProject(projectID: number): Observable<number> {
    // return this.httpClient.delete<number>(`https://localhost:7062/api/projects/${projectID}`); //ProjectID as route parameter (path segment) in backend API
    return this.httpClient.delete<number>('https://localhost:7062/api/projects?ProjectID=' + projectID); //ProjectID as a query parameter in backend API
  }

  searchProjects(searchBy: string, searchText: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`https://localhost:7062/api/projects/${searchBy}/${searchText}`, { responseType: 'json' });
  }
}
