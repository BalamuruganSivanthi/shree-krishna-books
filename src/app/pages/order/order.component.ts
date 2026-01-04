import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  paperTypes: string[];
  coverTypes: string[];
}

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  product: Product | undefined;
  selectedSize: string = '';
  selectedPaper: string = '';
  selectedCover: string = '';
  quantity: number = 1;
  activeImage: string = '';

  // Mock data - in a real app this would come from a service
  products: Product[] = [
    {
      id: 'classic-notebook',
      name: 'Classic Case Bound School Notebook',
      price: 1299,
      description: 'Experience the perfect blend of tradition and quality with our Classic Case Bound School Notebook. Designed for students who appreciate durability and a premium writing experience.',
      images: [
        '../../../assets/long-note-sqare-final.png',
        'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      sizes: ['Long Book', 'King Size'],
      paperTypes: ['Ruled', 'Unruled', '4 Line'],
      coverTypes: ['Hard Cover', 'Water Proof']
    },
    {
      id: 'spiral-notebook',
      name: 'Spiral Bound Notebooks',
      price: 899,
      description: 'Flexible, durable, and ready for your ideas. Our Spiral Bound Notebooks lay flat for easy writing and are perfect for quick notes, sketches, and classroom work.',
      images: [
        '../../../assets/long-book-wirebound-final.png',
        'https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      sizes: ['A4', 'A5'],
      paperTypes: ['One Line', 'Unruled'],
      coverTypes: ['Soft Cover', 'Plastic']
    },
    {
      id: 'executive-planner',
      name: 'Executive Planner',
      price: 1199,
      description: 'Organize your life with elegance. The Executive Planner features a sophisticated layout designed for professionals who need to stay on top of their game.',
      images: [
        '../../../assets/planner-1.png',
        'https://images.pexels.com/photos/5405596/pexels-photo-5405596.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      sizes: ['A5', 'B5'],
      paperTypes: ['Planner Layout'],
      coverTypes: ['Leather', 'Hard Cover']
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.product = this.products.find(p => p.id === id);
      if (this.product) {
        this.activeImage = this.product.images[0];
        this.selectedSize = this.product.sizes[0];
        this.selectedPaper = this.product.paperTypes[0];
        this.selectedCover = this.product.coverTypes[0];
      }
    });
  }

  setImage(image: string) {
    this.activeImage = image;
  }

  addToCart() {
    console.log('Added to cart:', {
      product: this.product?.name,
      size: this.selectedSize,
      paper: this.selectedPaper,
      cover: this.selectedCover,
      quantity: this.quantity
    });
    alert('Product added to cart!');
  }
}
