import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-sekcja-kontakt',
  templateUrl: './sekcja-kontakt.component.html',
  styleUrls: ['./sekcja-kontakt.component.scss'],
})
export class SekcjaKontaktComponent {
  myForm = this.fb.group({
    imie: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    wiadomosc: ['', Validators.required],
  });
  mailWyslany: boolean = false;

  constructor(private fb: FormBuilder) {

  }

  onSubmit() {
    this.myForm.markAllAsTouched();
    if (this.myForm.valid) {
      console.log('Formularz został wysłany:', this.myForm.value);
      emailjs.init('buYlgySDnTWo7i2vt');
      emailjs.send("service_tkt0wsr", "template_bkxhbaj", {
        imie: this.myForm.value.imie,
        email: this.myForm.value.email,
        wiadomosc: this.myForm.value.wiadomosc
      }), (err: any) => {
        console.log('FAILED...', err);
      };
      this.myForm.reset();

      this.mailWyslany = true;
      setTimeout(() => {
        this.mailWyslany = false;
      }, 5000);
    }
  }
}