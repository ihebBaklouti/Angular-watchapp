import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWatchesComponent } from './admin-watches.component';

describe('AdminWatchesComponent', () => {
  let component: AdminWatchesComponent;
  let fixture: ComponentFixture<AdminWatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
