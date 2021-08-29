import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CologinComponent } from './cologin.component';

describe('CologinComponent', () => {
  let component: CologinComponent;
  let fixture: ComponentFixture<CologinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CologinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
