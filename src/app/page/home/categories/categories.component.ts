import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  public categories: any[] = [
    {
      name: "Category Name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    },
    {
      name: "category name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    },
    {
      name: "category name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    },
    {
      name: "category name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    },
    {
      name: "category name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    },
    {
      name: "category name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    },
    {
      name: "category name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    }
  ];
}
