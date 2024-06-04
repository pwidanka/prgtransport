import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiasteczkaComponent } from './ciasteczka.component';

describe('CiasteczkaComponent', () => {
  let component: CiasteczkaComponent;
  let fixture: ComponentFixture<CiasteczkaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiasteczkaComponent]
    });
    fixture = TestBed.createComponent(CiasteczkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
