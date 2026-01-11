import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-notebooks',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './notebooks.component.html',
  styleUrl: './notebooks.component.css'
})
export class NotebooksComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
