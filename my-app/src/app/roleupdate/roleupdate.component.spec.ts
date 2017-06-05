import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleupdateComponent } from './roleupdate.component';

describe('RoleupdateComponent', () => {
  let component: RoleupdateComponent;
  let fixture: ComponentFixture<RoleupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
