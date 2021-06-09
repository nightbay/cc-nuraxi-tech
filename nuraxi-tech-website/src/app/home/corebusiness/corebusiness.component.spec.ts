import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorebusinessComponent } from './corebusiness.component';

describe('CorebusinessComponent', () => {
  let component: CorebusinessComponent;
  let fixture: ComponentFixture<CorebusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorebusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorebusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
