import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-section',
    standalone: true,
    imports: [],
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

    scrollToCollection() {
        const element = document.getElementById('collection');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
