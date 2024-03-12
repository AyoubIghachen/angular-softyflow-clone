import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div [ngSwitch]="widget.widgetName">
      <input *ngSwitchCase="'InputWidget'" type="text" />
      <textarea *ngSwitchCase="'TextAreaWidget'"></textarea>
      <input *ngSwitchCase="'CheckboxWidget'" type="checkbox" />
      <input *ngSwitchCase="'FileUploadWidget'" type="file" />
    </div>
  `,
})
export class WidgetComponent {
  @Input() widget: any;
}