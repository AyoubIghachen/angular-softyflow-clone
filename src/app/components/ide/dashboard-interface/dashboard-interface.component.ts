import { Component, Input, OnInit } from '@angular/core';
import { Interface } from '@app/_interfaces/Project';
import { ProjectService } from '@app/_services/project.service';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { WidgetFormComponent } from './widget-form/widget-form.component';

import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface Widget { name: string, icon: string, widgetName: string, id?: string };


import { cloneDeep } from 'lodash';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './WidgetComponent';

@Component({
  selector: 'app-dashboard-interface',
  standalone: true,
  imports: [CommonModule, WidgetFormComponent, WidgetComponent, CommonModule, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './dashboard-interface.component.html',
  styleUrl: './dashboard-interface.component.scss'
})
export class DashboardInterfaceComponent implements OnInit {
  @Input() interfaceData: Interface | null = null;

  droppedWidgets: any[] = [];
  selectedWidget: any | null = null;
  widgetConfigs: any = {
    InputWidget: {
      name: 'Input',
      icon: 'fas fa-keyboard',
      widgetName: 'InputWidget',
      elementHtml: 'input',
      Global: {
        Name: 'Input',
        Model: '',
        ID: ''
      },
      Validation: {},
      Style: {},
      Rules: {},
      Columns: {},
      DataSource: {},
    },
    TextAreaWidget: {
      name: 'TextArea',
      icon: 'fas fa-align-left',
      widgetName: 'TextAreaWidget',
      elementHtml: 'textarea',
      Global: {
        Name: 'TextArea',
        Model: '',
        ID: ''
      },
      Validation: {},
      Style: {},
      Rules: {},
      Columns: {},
      DataSource: {},
    },
    // other widgets
  };

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

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.droppedWidgets = [];
  }


  // drop(event: CdkDragDrop<Widget[]>) {
  //   console.log('drop', event)
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }
  // }
  drop(event: CdkDragDrop<Widget[]>) {
    console.log('drop', event)
    if (event.previousContainer.id === 'droppedWidgets' && event.container.id === 'widgets') {
      return;
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Clone the widget and add a unique id to it
      const droppedWidget = { ...event.previousContainer.data[event.previousIndex], id: new Date().toISOString() };
      // Remove the widget from the previous container
      // event.previousContainer.data.splice(event.previousIndex, 1);
      // Add the cloned widget to the new container
      event.container.data.splice(event.currentIndex, 0, droppedWidget);
    }
  }


  selectWidget(widget: any) {
    this.selectedWidget = cloneDeep(widget);
  }

  updateWidget(updatedWidget: any) {
    const widgetIndex = this.droppedWidgets.findIndex(widget => widget.id === this.selectedWidget.id);
    if (widgetIndex !== -1) {
      this.droppedWidgets[widgetIndex].Global = updatedWidget.Global;
    }
    console.log(JSON.stringify(this.droppedWidgets));
    console.log('Dropped Widgets: ', this.droppedWidgets);
  }

  save() {
    const data = this.droppedWidgets.map(widget => ({
      elementHtml: widget.elementHtml,
      Global: widget.Global
    }));

    const widgets = { widget: data };

    console.log(JSON.stringify(widgets));

    this.projectService.updateInterface("projectId", "interfaceId", widgets).subscribe({
      next: (response: any) => {
        console.log(response.data);
        // console.log(response);
      },
      error: (error: any) => { console.error(error); }
    });
  }

  displayResult() {
    const projectId = ""; // need to get it from the interfaceId or from a @Output and @Input : passing the object project
    const interfaceId = this.interfaceData?._id;
    window.location.href = `http://localhost:3000/projects/${projectId}/interface/${interfaceId}/view`;
  }

}
