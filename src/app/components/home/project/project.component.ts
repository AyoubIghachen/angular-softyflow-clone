import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '@app/_services/project.service';
import { FormsModule } from '@angular/forms';
import { Project } from '@app/_interfaces/Project';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {

  p: number = 1;

  projects: any[] = [];
  searchTerm = '';
  filteredProjects: any[] = [];
  @Output() showCreateDialog = new EventEmitter<boolean>();
  @Input() projectCreated!: EventEmitter<Project>;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects: any) => {
      this.projects = projects.reverse();
      this.filteredProjects = [...this.projects];
    });

    if (this.projectCreated) {
      this.projectCreated.subscribe((project: Project) => {
        this.projects.unshift(project);
        this.filteredProjects.unshift(project);
      });
    }
  }

  displayCreateDialog() {
    console.log('Create new project');
    this.showCreateDialog.emit(true);
  }

  searchProjects() {
    if (this.searchTerm) {
      this.filteredProjects = this.projects.filter(project =>
        project.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredProjects = this.projects;
    }
  }


  // project options:
  toggleOptions(project: Project, event: Event) {
    project.showOptions = !project.showOptions;
    event.stopPropagation();
  }

  updateProject(project: Project) {
    console.log('Project updated : ', project);
  }

  deleteProject(project: Project) {
    console.log('Project deleted : ', project);
  }

  openProject(project: Project) {
    this.router.navigate(['ide'], { state: { project: project } });
  }

}
