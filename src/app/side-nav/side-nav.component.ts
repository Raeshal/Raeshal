import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
navItems = [
  { label: 'Experience', link: '/experience' },
  { label: 'Education', link: '/education' },
  { label: 'Projects', link: '/projects' },
  { label: 'Expertise', link: '/expertise' },
  { label: 'Connect With Me', link: '/connect' }
];


  isNavbarVisible :boolean = false;
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
