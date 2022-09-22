import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-einkaufsliste',
  templateUrl: './einkaufsliste.component.html',
  styleUrls: ['./einkaufsliste.component.css']
})
export class EinkaufslisteComponent implements OnInit {

  constructor() {

    
   }

  ngOnInit(): void {

    //class that takes callbackfunction in its constructor!!!
    // observes multiple elements (here entries) at the same time
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }

        //multiple or once?? ->
        else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    
  }

}
