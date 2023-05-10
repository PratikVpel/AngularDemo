import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecthistoryComponent } from './projecthistory.component';

describe('ProjecthistoryComponent', () => {
  let component: ProjecthistoryComponent;
  let fixture: ComponentFixture<ProjecthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjecthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
