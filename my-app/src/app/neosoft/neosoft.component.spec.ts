import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeosoftComponent } from './neosoft.component';

describe('NeosoftComponent', () => {
  let component: NeosoftComponent;
  let fixture: ComponentFixture<NeosoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeosoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
