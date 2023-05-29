import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininstitueComponent } from './admininstitue.component';

describe('AdmininstitueComponent', () => {
  let component: AdmininstitueComponent;
  let fixture: ComponentFixture<AdmininstitueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmininstitueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmininstitueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
