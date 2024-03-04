import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/home/navbar/navbar.component';
import { BodyComponent } from '../../components/home/body/body.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
