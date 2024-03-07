import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: 'app-create-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-dialog.component.html',
  styleUrl: './create-dialog.component.scss'
})
export class CreateDialogComponent {
  @Output() isCloseDialog = new EventEmitter<boolean>();

  createProjectForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  get name(){
    return this.createProjectForm.controls['name'];
  }

  get description(){
    return this.createProjectForm.controls['description'];
  }

  closeDialog() {
    this.isCloseDialog.emit(true);
  }

  createProject(){
    const project = {...this.createProjectForm.value};
    console.log('Created project!');
    console.log(project);
  }


}
