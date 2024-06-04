import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  host: {'class': 'd-flex flex-column h-100 overflow-auto'},
})
export class MainComponent {

}
