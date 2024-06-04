import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaOpinieComponent } from './sekcja-opinie.component';

describe('SekcjaOpinieComponent', () => {
  let component: SekcjaOpinieComponent;
  let fixture: ComponentFixture<SekcjaOpinieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjaOpinieComponent]
    });
    fixture = TestBed.createComponent(SekcjaOpinieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
