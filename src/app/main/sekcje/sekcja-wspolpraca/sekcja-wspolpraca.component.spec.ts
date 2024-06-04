import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaWspolpracaComponent } from './sekcja-wspolpraca.component';

describe('SekcjaWspolpracaComponent', () => {
  let component: SekcjaWspolpracaComponent;
  let fixture: ComponentFixture<SekcjaWspolpracaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjaWspolpracaComponent]
    });
    fixture = TestBed.createComponent(SekcjaWspolpracaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
