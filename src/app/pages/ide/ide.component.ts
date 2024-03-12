import { Component } from '@angular/core';
import { SidebarComponent } from '@app/components/ide/sidebar/sidebar.component';
import { AuthService } from '@app/_services/auth.service';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { SidebarExtensionComponent } from '@app/components/ide/sidebar-extension/sidebar-extension.component';
import { CommonModule } from '@angular/common';
import { Interface, Project } from '@app/_interfaces/Project';
import { Router } from '@angular/router';
import { NavbarInterfaceComponent } from '@app/components/ide/navbar-interface/navbar-interface.component';
import { DashboardInterfaceComponent } from '@app/components/ide/dashboard-interface/dashboard-interface.component';

@Component({
  selector: 'app-ide',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, SidebarExtensionComponent, NavbarInterfaceComponent, DashboardInterfaceComponent],
  templateUrl: './ide.component.html',
  styleUrl: './ide.component.scss'
})
export class IdeComponent {
  showSidebarExtension: boolean = false;
  project: Project;
  selectedInterface: Interface | null = null;
  openDashboard: Interface | null = null;

  constructor(private router: Router, private authService: AuthService) {
    const navigation = this.router.getCurrentNavigation();
    this.project = navigation?.extras.state?.['project'];
  }

  save() {
    console.log('save');
    // console.log('Ayoub: ', this.project);
  }

  displayResult() {
    console.log('display result');
  }

  onShowSidebarExtention(msg: boolean) {
    this.showSidebarExtension = msg;
  }

  onInterfaceSelected(interfaceData: Interface) {
    this.selectedInterface = interfaceData;
  }

  onOpenDashboard(interfaceData: Interface) {
    this.openDashboard = interfaceData;
  }

}
