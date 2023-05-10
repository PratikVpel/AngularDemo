import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondproductComponent } from './secondproduct.component';

describe('SecondproductComponent', () => {
  let component: SecondproductComponent;
  let fixture: ComponentFixture<SecondproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
