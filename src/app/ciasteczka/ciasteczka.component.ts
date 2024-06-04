import { Component } from '@angular/core';

@Component({
  selector: 'app-ciasteczka',
  templateUrl: './ciasteczka.component.html',
  styleUrls: ['./ciasteczka.component.scss']
})
export class CiasteczkaComponent {
  czyCiasteczka: boolean = true;

  ngOnInit(){
    const cookies = localStorage.getItem("cookies");
    if(cookies){
      this.czyCiasteczka = false;
    }
  }

  ciasteczkaOK(){
    localStorage.setItem("cookies", "true");
    this.czyCiasteczka = false;
  }
}
