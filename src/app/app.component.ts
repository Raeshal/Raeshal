import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNavbarVisible = false;
  title = 'Resume';
  remove:boolean=true
  ngAfterViewInit(): void {
    const navItems: NodeListOf<HTMLLIElement> = document.querySelectorAll(
      'nav ul li'
    );
    const closeButton: HTMLElement | null = document.querySelector('.fa-close');

   // Handle close button click
   if (closeButton) {
    closeButton.addEventListener('click', function () {
      navItems.forEach((nav) => nav.classList.remove('active')); // Remove all active classes
    });
  }


    navItems.forEach((item) => {
      item.addEventListener('click', function () {
        // Remove "active" class from all items
        navItems.forEach((nav) => nav.classList.remove('active'));

        // Add "active" class to the clicked item
        this.classList.add('active');
      });
    });
  }

}
