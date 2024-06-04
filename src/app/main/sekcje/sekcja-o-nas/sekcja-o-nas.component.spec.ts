import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaONasComponent } from './sekcja-o-nas.component';

describe('SekcjaONasComponent', () => {
  let component: SekcjaONasComponent;
  let fixture: ComponentFixture<SekcjaONasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjaONasComponent]
    });
    fixture = TestBed.createComponent(SekcjaONasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
