import { Component } from '@angular/core';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { ProjectComponent } from '@app/components/home/project/project.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
