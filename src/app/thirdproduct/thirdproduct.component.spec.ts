import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdproductComponent } from './thirdproduct.component';

describe('ThirdproductComponent', () => {
  let component: ThirdproductComponent;
  let fixture: ComponentFixture<ThirdproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
