import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@app/_interfaces/Project';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'http://localhost:3000';

  static projects: Project[] = [
    { name: 'Demo Ayoub', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.', date: '2022-02-01' },
    { name: 'Demo Yassine', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.', date: '2022-01-01' },
    { name: 'Project 1', description: 'This is project 1', date: '2022-01-01' },
    { name: 'Project 12', description: 'This is project 2', date: '2022-02-01' },
    { name: 'Project 32', description: 'This is project 3', date: '2022-01-01' },
    { name: 'Project 14', description: 'This is project 4', date: '2022-02-01' },
    { name: 'Project 15', description: 'This is project 5', date: '2022-01-01' },
    { name: 'Project 6', description: 'This is project 6', date: '2022-02-01' },
    { name: 'Project 1', description: 'This is project 1', date: '2022-01-01' },
    { name: 'Project 12', description: 'This is project 2', date: '2022-02-01' },
    { name: 'Project 32', description: 'This is project 3', date: '2022-01-01' },
    { name: 'Project 1', description: 'This is project 1', date: '2022-01-01' },
    { name: 'Project 12', description: 'This is project 2', date: '2022-02-01' },
    { name: 'Project 32', description: 'This is project 3', date: '2022-01-01' },
    { name: 'Project 14', description: 'This is project 4', date: '2022-02-01' },
    { name: 'Project 15', description: 'This is project 5', date: '2022-01-01' },
    { name: 'Project 6', description: 'This is project 6', date: '2022-02-01' },
    { name: 'Project 1', description: 'This is project 1', date: '2022-01-01' },
    { name: 'Project 12', description: 'This is project 2', date: '2022-02-01' },
    { name: 'Project 32', description: 'This is project 3', date: '2022-01-01' },
    { name: 'Project 32', description: 'This is project 3', date: '2022-01-01' },
  ];

  constructor(private http: HttpClient) { }

  getProjects() {
    // return this.http.get(`${this.baseUrl}/project`);

    return of(ProjectService.projects);
  }

  createProject(project: Project) {
    // return this.http.post(`${this.baseUrl}/project`, project);
    ProjectService.projects.unshift(project);
    return of(project);
  }

}
