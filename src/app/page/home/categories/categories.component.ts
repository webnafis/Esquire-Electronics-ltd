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
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5", "subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5", "subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5", "subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5nnn"]
    },
    {
      name: "Category Name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    },
    {
      name: "Category Name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    },
    {
      name: "Category Name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    },
    {
      name: "Category Name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    },
    {
      name: "Category Name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    },
    {
      name: "Category Name",
      subcategories: ["subcategory1", "subcategory2", "subcategory3", "subcategory4", "subcategory5"]
    },
    {
      name: "See All",
      subcategories: [],
    }
  ];
}
