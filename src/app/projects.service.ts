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
    return this.httpClient.get<Project[]>('https://localhost:7062/api/projects'); //with cross-origin
  }
}
