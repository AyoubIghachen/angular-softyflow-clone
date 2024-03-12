import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interface, Project } from '@app/_interfaces/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  createProject(project: Project) {
    return this.http.post(`${this.baseUrl}/projects`, project);
  }

  getProjects() {
    return this.http.get(`${this.baseUrl}/projects/user`);
  }

  getUserProject(projectId: string){
    return this.http.get(`${this.baseUrl}/projects/${projectId}/user`);
  }

  createInterface(projectId: string, interfaceProject: Interface){
    return this.http.post(`${this.baseUrl}/projects/${projectId}/interface`, interfaceProject);
  }

  // Not yet used
  updateInterface(projectId: string, interfaceId: string, widgetsData: any){
    return this.http.patch(`${this.baseUrl}/projects/${projectId}/interface/${interfaceId}`, widgetsData);
  }


}
