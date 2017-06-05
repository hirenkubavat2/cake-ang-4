import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolelistComponent } from './rolelist.component';

describe('RolelistComponent', () => {
  let component: RolelistComponent;
  let fixture: ComponentFixture<RolelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
