import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaKontaktComponent } from './sekcja-kontakt.component';

describe('SekcjaKontaktComponent', () => {
  let component: SekcjaKontaktComponent;
  let fixture: ComponentFixture<SekcjaKontaktComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjaKontaktComponent]
    });
    fixture = TestBed.createComponent(SekcjaKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
