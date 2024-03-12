import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarExtensionComponent } from './sidebar-extension.component';

describe('SidebarExtensionComponent', () => {
  let component: SidebarExtensionComponent;
  let fixture: ComponentFixture<SidebarExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarExtensionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
