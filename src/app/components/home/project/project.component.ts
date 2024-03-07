import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ProjectService } from '@app/_services/project.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [MenubarModule, CardModule, CommonModule, FormsModule, ButtonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {

  items: MenuItem[] = [];
  projects: any[] = [];
  searchTerm = '';
  filteredProjects: any[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Search',
        icon: 'pi pi-fw pi-search',
        command: () => {
          this.filteredProjects = this.projects.filter(project =>
            project.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        }
      }
    ];

    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }

  createNewProject() {
    console.log('Create new project');
  }
  
}

