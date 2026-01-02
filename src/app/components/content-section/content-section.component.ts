import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.css'
})
export class ContentSectionComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() imageAlt: string = 'Section image';
  @Input() imagePosition: 'left' | 'right' = 'right';
  @Input() isFullWidth: boolean = false;
  @Input() isAboutSection: boolean = false;
}
