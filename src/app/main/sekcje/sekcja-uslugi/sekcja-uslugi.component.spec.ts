import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaUslugiComponent } from './sekcja-uslugi.component';

describe('SekcjaUslugiComponent', () => {
  let component: SekcjaUslugiComponent;
  let fixture: ComponentFixture<SekcjaUslugiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjaUslugiComponent]
    });
    fixture = TestBed.createComponent(SekcjaUslugiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
