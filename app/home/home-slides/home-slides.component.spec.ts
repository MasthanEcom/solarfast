import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlidesComponent } from './home-slides.component';

describe('HomeSlidesComponent', () => {
  let component: HomeSlidesComponent;
  let fixture: ComponentFixture<HomeSlidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSlidesComponent]
    });
    fixture = TestBed.createComponent(HomeSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
