import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondeventComponent } from './secondevent.component';

describe('SecondeventComponent', () => {
  let component: SecondeventComponent;
  let fixture: ComponentFixture<SecondeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
