import { Component } from '@angular/core';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { ProjectComponent } from '@app/components/home/project/project.component';
import { CreateDialogComponent } from '@app/components/home/create-dialog/create-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ProjectComponent, CreateDialogComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showCreateDialog: boolean = false;

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

}
