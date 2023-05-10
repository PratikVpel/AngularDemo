import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotheremployeeComponent } from './anotheremployee.component';

describe('AnotheremployeeComponent', () => {
  let component: AnotheremployeeComponent;
  let fixture: ComponentFixture<AnotheremployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotheremployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotheremployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
