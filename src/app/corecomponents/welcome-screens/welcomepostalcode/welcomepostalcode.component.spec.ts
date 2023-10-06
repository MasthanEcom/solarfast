import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomepostalcodeComponent } from './welcomepostalcode.component';

describe('WelcomepostalcodeComponent', () => {
  let component: WelcomepostalcodeComponent;
  let fixture: ComponentFixture<WelcomepostalcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomepostalcodeComponent]
    });
    fixture = TestBed.createComponent(WelcomepostalcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
