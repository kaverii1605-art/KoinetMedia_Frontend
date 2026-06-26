import { Component } from '@angular/core';

@Component({
  selector: 'app-experties',
  imports: [],
  templateUrl: './experties.html',
  styleUrl: './experties.css',
})
export class Experties {

  scrollToServices() {
  document.getElementById('servicess')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
}
