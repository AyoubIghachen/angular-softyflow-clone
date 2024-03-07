import { Component } from '@angular/core';
import { SidebarComponent } from '@app/components/ide/sidebar/sidebar.component';
import { ConfigComponent } from '@app/components/ide/config/config.component';
import { AuthService } from '@app/_services/auth.service';
import { NavbarComponent } from '@app/components/navbar/navbar.component';

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
