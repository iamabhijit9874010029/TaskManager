import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './project';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  //with HttpHeaders
  // token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJkNmNkZWQxNi02ZTAzLTQwZjAtODIxZS1hZTcxYmI2ZWI4MmUiLCJ1bmlxdWVfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTc1MzUzNzM5OSwiZXhwIjoxNzUzNTY2MTk5LCJpYXQiOjE3NTM1MzczOTl9.HOSOG6WQcI8FMCh4HgNsmzJEvngPpRMi_i9bdUAYKls`;

  // getAllProjects(): Observable<Project[]> {
  //   // return this.httpClient.get<Project[]>('/api/projects'); //with proxy forwarding (need to create proxy.conf.json and add to angular.json, package.json)
  //   return this.httpClient.get<Project[]>('https://localhost:7062/api/projects', {headers: new HttpHeaders({'Authorization':`Bearer ${this.token}`}) ,responseType: 'json'}).pipe(
  //     map((data: Project[]) => {
  //       for (let i = 0; i < data.length; i++) {
  //         data[i].teamSize = Math.round(data[i].teamSize! * 100);
  //       }
  //       return data;
  //     })
  //   ); //with cross-origin


  // plain object with string key-value pairs (without HttpHeaders)
  token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJkNmNkZWQxNi02ZTAzLTQwZjAtODIxZS1hZTcxYmI2ZWI4MmUiLCJ1bmlxdWVfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTc1MzUzNzM5OSwiZXhwIjoxNzUzNTY2MTk5LCJpYXQiOjE3NTM1MzczOTl9.HOSOG6WQcI8FMCh4HgNsmzJEvngPpRMi_i9bdUAYKls`;

  getAllProjects(): Observable<Project[]> {
    // return this.httpClient.get<Project[]>('/api/projects'); //with proxy forwarding (need to create proxy.conf.json and add to angular.json, package.json)
    return this.httpClient.get<Project[]>('https://localhost:7062/api/projects', {headers: {'Authorization':`Bearer ${this.token}`} ,responseType: 'json'}).pipe(
      map((data: Project[]) => {
        for (let i = 0; i < data.length; i++) {
          data[i].teamSize = Math.round(data[i].teamSize! * 100);
        }
        return data;
      })
    ); //with cross-origin

    // return this.httpClient.get<Project[]>('http://localhost:3000/projects', { responseType: 'json' }).pipe(
    //   map((data: Project[]) => {
    //     for (let i = 0; i < data.length; i++) {
    //       data[i].teamSize = Math.round(data[i].teamSize! * 100);
    //     }
    //     return data;
    //   })
    // ); //for json-server //with cross-origin
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>('https://localhost:7062/api/projects', newProject, { responseType: 'json' });
    // newProject.id = String(newProject.projectID)//for json-server 
    // return this.httpClient.post<Project>('http://localhost:3000/projects', newProject, { responseType: 'json' });//for json-server 
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>('https://localhost:7062/api/projects', existingProject, { responseType: 'json' });
    // existingProject.id = String(existingProject.projectID);//for json-server 
    // return this.httpClient.put<Project>(`http://localhost:3000/projects/${existingProject.projectID}`, existingProject, { responseType: 'json' });//for json-server 
  }

  deleteProject(projectID: number): Observable<number> {
    return this.httpClient.delete<number>(`https://localhost:7062/api/projects/${projectID}`); //ProjectID as route parameter (path segment) in backend API
    // return this.httpClient.delete<number>('https://localhost:7062/api/projects?ProjectID=' + projectID); //ProjectID as a query parameter in backend API
    // return this.httpClient.delete<number>('http://localhost:3000/projects?ProjectID=' + projectID);//for json-server (this will not work with json-server, as it does not support dynamic routes like this)
    // Instead, you can filter the projects on the client side after fetching all projects
    // return this.httpClient.delete<number>(`http://localhost:3000/projects/${projectID}`);//for json-server, keep in mind that "id" in json-server should be equal to "projectID" in your Project model
  }

  searchProjects(searchBy: string, searchText: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`https://localhost:7062/api/projects/${searchBy}/${searchText}`, { responseType: 'json' });
    // return this.httpClient.get<Project[]>(`http://localhost:3000/projects/${searchBy}/${searchText}`, { responseType: 'json' });//for json-server (this will not work with json-server, as it does not support dynamic routes like this)
    // Instead, you can filter the projects on the client side after fetching all projects
  }
}
