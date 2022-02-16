import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSwitchComponent } from './panel-switch.component';

describe('PanelSwitchComponent', () => {
  let component: PanelSwitchComponent;
  let fixture: ComponentFixture<PanelSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
