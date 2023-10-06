import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalCodeEntryComponent } from './postal-code-entry.component';

describe('PostalCodeEntryComponent', () => {
  let component: PostalCodeEntryComponent;
  let fixture: ComponentFixture<PostalCodeEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostalCodeEntryComponent]
    });
    fixture = TestBed.createComponent(PostalCodeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
