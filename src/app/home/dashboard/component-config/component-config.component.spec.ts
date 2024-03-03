import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentConfigComponent } from './component-config.component';

describe('ComponentConfigComponent', () => {
  let component: ComponentConfigComponent;
  let fixture: ComponentFixture<ComponentConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
