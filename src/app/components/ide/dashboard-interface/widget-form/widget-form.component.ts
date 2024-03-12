import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Widget } from '@app/_interfaces/Project';

@Component({
  selector: 'app-widget-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './widget-form.component.html',
  styleUrl: './widget-form.component.scss'
})
export class WidgetFormComponent {
  @Input() selectedWidget: Widget | null = null;
  @Output() update = new EventEmitter();

  updateWidget() {
    this.update.emit(this.selectedWidget);
  }

  getObjectKeys(item: any) {
    return item ? Object.keys(item.Global) : [];
  }
}
