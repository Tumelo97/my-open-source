import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourlorhomeComponent } from './pourlorhome.component';

describe('PourlorhomeComponent', () => {
  let component: PourlorhomeComponent;
  let fixture: ComponentFixture<PourlorhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PourlorhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PourlorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
