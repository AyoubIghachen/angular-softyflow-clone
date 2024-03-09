import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { Project } from '@app/_interfaces/Project';
import { ProjectService } from '@app/_services/project.service';
import { MessageService } from 'primeng/api';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, ToastModule],
  providers: [MessageService],
  templateUrl: './create-dialog.component.html',
  styleUrl: './create-dialog.component.scss'
})
export class CreateDialogComponent {
  @Output() isCloseDialog = new EventEmitter<boolean>();
  @Output() projectCreated = new EventEmitter<Project>();

  createProjectForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private messageService: MessageService
  ) { }

  get name() {
    return this.createProjectForm.controls['name'];
  }

  get description() {
    return this.createProjectForm.controls['description'];
  }

  closeDialog() {
    this.isCloseDialog.emit(true);
  }

  createProject() {
    const project = { ...this.createProjectForm.value };
    console.log('Created project!');
    console.log(project);
    this.projectService.createProject(project as Project).subscribe({
      next: (response: any) => {
        console.log(response);
        this.projectCreated.emit(project as Project);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Project created successfully' });
        setTimeout(() => {
          this.closeDialog();
        }, 1000);
      },
      error: (error: any) => {
        console.error(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    })
  }

}
