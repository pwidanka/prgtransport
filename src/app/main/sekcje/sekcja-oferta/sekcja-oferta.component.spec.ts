import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaOfertaComponent } from './sekcja-oferta.component';

describe('SekcjaOfertaComponent', () => {
  let component: SekcjaOfertaComponent;
  let fixture: ComponentFixture<SekcjaOfertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjaOfertaComponent]
    });
    fixture = TestBed.createComponent(SekcjaOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
