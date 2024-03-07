import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '@app/_services/project.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {

  projects: any[] = [];
  searchTerm = '';
  filteredProjects: any[] = [];
  @Output() showCreateDialog = new EventEmitter<boolean>();

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
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
}
