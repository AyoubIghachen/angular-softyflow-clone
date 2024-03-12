import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInterfaceComponent } from './navbar-interface.component';

describe('NavbarInterfaceComponent', () => {
  let component: NavbarInterfaceComponent;
  let fixture: ComponentFixture<NavbarInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
