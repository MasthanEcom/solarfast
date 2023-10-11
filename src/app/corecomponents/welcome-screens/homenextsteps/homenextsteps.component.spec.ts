import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenextstepsComponent } from './homenextsteps.component';

describe('HomenextstepsComponent', () => {
  let component: HomenextstepsComponent;
  let fixture: ComponentFixture<HomenextstepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomenextstepsComponent]
    });
    fixture = TestBed.createComponent(HomenextstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
