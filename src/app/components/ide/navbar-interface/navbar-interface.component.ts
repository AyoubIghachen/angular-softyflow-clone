import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Interface } from '@app/_interfaces/Project';

@Component({
  selector: 'app-navbar-interface',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-interface.component.html',
  styleUrl: './navbar-interface.component.scss'
})
export class NavbarInterfaceComponent implements OnChanges {
  interfaces: Interface[] = [];
  activeInterface!: Interface;
  @Output() openDashboard = new EventEmitter<Interface>();

  @Input() interfaceData: Interface | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.['interfaceData'] && this.interfaceData) {
      const isInterfaceExistInArray = this.interfaces.find(i => i._id === this.interfaceData!._id);
      if (!isInterfaceExistInArray) {
        this.interfaces.push(this.interfaceData);
      }
    }
  }

  onOpenDashboard(interfaceProject: Interface) {
    this.activeInterface = interfaceProject;
    console.log('Open interface: ', interfaceProject);
    this.openDashboard.emit(interfaceProject);
  }

  onDeleteInterface(interfaceProject: Interface) {
    this.interfaces = this.interfaces.filter(i => i._id !== interfaceProject._id);
  }

}
