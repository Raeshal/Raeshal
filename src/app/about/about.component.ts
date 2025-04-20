import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone:false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
   showSkill(skill: string): void {
    // Hide all descriptions
    const skillDescription: HTMLElement | null = document.getElementById('skillDescription');
    const reactDesc: HTMLElement | null = document.getElementById('reactDesc');
    const htmlDesc: HTMLElement | null = document.getElementById('htmlDesc');
    const cssDesc: HTMLElement | null = document.getElementById('cssDesc');
    const jsDesc: HTMLElement | null = document.getElementById('jsDesc');

    if (skillDescription) {
        skillDescription.style.display = 'block';
    }

    if (reactDesc) {
        reactDesc.style.display = 'none';
    }
    if (htmlDesc) {
        htmlDesc.style.display = 'none';
    }
    if (cssDesc) {
        cssDesc.style.display = 'none';
    }
    if (jsDesc) {
        jsDesc.style.display = 'none';
    }

    // Show the selected skill's description
    if (skill === 'react' && reactDesc) {
        reactDesc.style.display = 'block';
    } else if (skill === 'html' && htmlDesc) {
        htmlDesc.style.display = 'block';
    } else if (skill === 'css' && cssDesc) {
        cssDesc.style.display = 'block';
    } else if (skill === 'js' && jsDesc) {
        jsDesc.style.display = 'block';
    }
}


}
