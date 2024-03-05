import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/ide/navbar/navbar.component';
import { SidebarComponent } from '../../components/ide/sidebar/sidebar.component';
import { ConfigComponent } from '../../components/ide/config/config.component';
import { AuthService } from '../../_services/auth/auth.service';

@Component({
  selector: 'app-ide',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, ConfigComponent],
  templateUrl: './ide.component.html',
  styleUrl: './ide.component.css'
})
export class IdeComponent {

  constructor(private authService: AuthService) { }

  save() {
    console.log('save');
  }

  displayResult() {
    console.log('display result');
  }

}
