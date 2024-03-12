import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Interface, Project } from '@app/_interfaces/Project';
import { ProjectService } from '@app/_services/project.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-sidebar-extension',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './sidebar-extension.component.html',
  styleUrl: './sidebar-extension.component.scss'
})
export class SidebarExtensionComponent implements OnInit {
  IsCreateInterface: boolean = false;
  project!: Project;
  interfaces: Interface[] = [];
  @Input() idProject!: string;
  @Output() interfaceSelected = new EventEmitter<Interface>();


  CreateInterfaceForm = this.fb.group({
    name: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getUserProject(this.idProject).subscribe((project: any) => {
      this.project = project;
      this.interfaces = [...project.interface.reverse()];
    })
  }

  get name() {
    return this.CreateInterfaceForm.controls['name'];
  }

  displayCreateInterface() {
    console.log('Display create interface: ', this.idProject);
    this.IsCreateInterface = true;
  }

  createInterface() {
    const onCreatedInterface: any = { ...this.CreateInterfaceForm.value, widget: [] };
    console.log('Created interface: ', onCreatedInterface);
    this.projectService.createInterface(this.idProject, onCreatedInterface as Interface).subscribe({
      next: (updatedProject: any) => { 
        console.log(updatedProject);
        const newInterface = updatedProject.interface[updatedProject.interface.length - 1];
        this.interfaces.unshift(newInterface);
      },
      error: (error: any) => { console.error(error); }
    })
    this.IsCreateInterface = false;
  }

  onClickInterface(interfaceProject: Interface) {
    console.log('Interface: ', interfaceProject);
    this.interfaceSelected.emit(interfaceProject);
  }

}
