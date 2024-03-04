import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/ide/navbar/navbar.component';
import { SidebarComponent } from '../../components/ide/sidebar/sidebar.component';
import { ConfigComponent } from '../../components/ide/config/config.component';

@Component({
  selector: 'app-ide',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, ConfigComponent],
  templateUrl: './ide.component.html',
  styleUrl: './ide.component.css'
})
export class IdeComponent {

  save(){
    console.log('save');
  }

  displayResult(){
    console.log('display result');
  }

}
