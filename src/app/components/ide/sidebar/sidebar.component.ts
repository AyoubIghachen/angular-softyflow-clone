import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isOpenWebInterface = false;
  @Output() openWebInterface = new EventEmitter<boolean>();

  onIconClick() {
    this.isOpenWebInterface = !this.isOpenWebInterface;
    this.openWebInterface.emit(this.isOpenWebInterface);
  }

}
