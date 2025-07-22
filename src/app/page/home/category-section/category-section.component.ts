import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.scss'
})
export class CategorySectionComponent {
  @Input() category: any = null;
  @Input() index!: number;
}
