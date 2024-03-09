import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { ProjectComponent } from '@app/components/home/project/project.component';
import { CreateDialogComponent } from '@app/components/home/create-dialog/create-dialog.component';
import { CommonModule } from '@angular/common';
import { Project } from '@app/_interfaces/Project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ProjectComponent, CreateDialogComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showCreateDialog: boolean = false;
  @Output() projectCreated = new EventEmitter<Project>();

  displayCreateDialog(msg: boolean){
    if(msg){
      this.showCreateDialog = true;
    }
  }

  hideCreateDialog(msg: boolean){
    if(msg){
      this.showCreateDialog = false;
    }
  }

  onProjectCreated(project: Project){
    this.projectCreated.emit(project);
  }

}
