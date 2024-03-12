import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray } from '@angular/cdk/drag-drop';

interface Widget { name: string, icon: string, widgetName: string, id?: string };

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() select = new EventEmitter<any>();

  widgets: Widget[] = [
    { name: 'Timer', icon: 'fas fa-clock', widgetName: 'TimerWidget' },
    { name: 'Title', icon: 'fas fa-heading', widgetName: 'TitleWidget' },
    { name: 'Text', icon: 'fas fa-font', widgetName: 'TextWidget' },
    { name: 'Thumbnail', icon: 'fas fa-image', widgetName: 'ThumbnailWidget' },
    { name: 'Divider', icon: 'fas fa-grip-lines', widgetName: 'DividerWidget' },
    { name: 'Card', icon: 'fas fa-square', widgetName: 'CardWidget' },
    { name: 'HTML', icon: 'fab fa-html5', widgetName: 'HTMLWidget' },
    { name: 'Jumbotron', icon: 'fas fa-bullhorn', widgetName: 'JumbotronWidget' },
    { name: 'Input', icon: 'fas fa-keyboard', widgetName: 'InputWidget' },
    { name: 'File Upload', icon: 'fas fa-upload', widgetName: 'FileUploadWidget' },
    { name: 'Text Area', icon: 'fas fa-align-justify', widgetName: 'TextAreaWidget' },
    { name: 'GroupPicker', icon: 'fas fa-users', widgetName: 'GroupPickerWidget' },
    { name: 'Number', icon: 'fas fa-sort-numeric-up', widgetName: 'NumberWidget' },
    { name: 'Table', icon: 'fas fa-table', widgetName: 'TableWidget' },
    { name: 'Radio Button', icon: 'fas fa-dot-circle', widgetName: 'RadioButtonWidget' },
    { name: 'Steps', icon: 'fas fa-shoe-prints', widgetName: 'StepsWidget' },
    { name: 'Checkbox', icon: 'fas fa-check-square', widgetName: 'CheckboxWidget' },
    { name: 'UserPicker', icon: 'fas fa-user-check', widgetName: 'UserPickerWidget' },
    { name: 'Time', icon: 'fas fa-clock', widgetName: 'TimeWidget' },
    { name: 'Widget History', icon: 'fas fa-history', widgetName: 'WidgetHistoryWidget' },
    { name: 'Date', icon: 'fas fa-calendar-alt', widgetName: 'DateWidget' },
    { name: 'Grid', icon: 'fas fa-th', widgetName: 'GridWidget' },
    { name: 'Dropdown', icon: 'fas fa-caret-square-down', widgetName: 'DropdownWidget' },
    { name: 'Section', icon: 'fas fa-object-group', widgetName: 'SectionWidget' },
    { name: 'Autocomplete', icon: 'fas fa-spell-check', widgetName: 'AutocompleteWidget' },
    { name: 'PopUp', icon: 'fas fa-window-restore', widgetName: 'PopUpWidget' },
    { name: 'Switch', icon: 'fas fa-toggle-on', widgetName: 'SwitchWidget' },
    { name: 'Drawer', icon: 'fas fa-bars', widgetName: 'DrawerWidget' },
    { name: 'Slider', icon: 'fas fa-sliders-h', widgetName: 'SliderWidget' },
    { name: 'Tabs', icon: 'fas fa-folder', widgetName: 'TabsWidget' },
    { name: 'Button', icon: 'fas fa-mouse-pointer', widgetName: 'ButtonWidget' },
    { name: 'QR code scanner', icon: 'fas fa-qrcode', widgetName: 'QRCodeScannerWidget' },
    { name: 'Rate', icon: 'fas fa-star', widgetName: 'RateWidget' },
    { name: 'Basic Charts', icon: 'fas fa-chart-bar', widgetName: 'BasicChartsWidget' },
  ];

  drop(event: CdkDragDrop<Widget[]>): void {
    console.log('drop', event)
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);// to move item in the same container
    
  }

  selectWidget(widget: any) {
    this.select.emit(widget);
  }
}
