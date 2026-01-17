import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product, ProductService } from '../../services/product.service';

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
  quantity: number = 100;
  activeImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.productService.getProducts().subscribe(products => {
        this.product = products.find(p => p.id === id);
        if (this.product) {
          this.activeImage = this.product.images[0];
          this.selectedSize = this.product.sizes[0];
          this.selectedPaper = this.product.paperTypes[0];
          this.selectedCover = this.product.coverTypes[0];
        }
      });
    });
  }

  setImage(image: string) {
    this.activeImage = image;
  }

  // Modal state
  showModal: boolean = false;
  customerName: string = '';
  customerEmail: string = '';
  customerPhone: string = '';

  contactToOrder() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitInquiry() {
    if (!this.product) return;

    if (!this.customerName || !this.customerEmail || !this.customerPhone) {
      alert('Please fill in all details');
      return;
    }

    const subject = `Order Inquiry: ${this.product.name}`;
    const body = `Hello,

I am interested in ordering the following:
Product: ${this.product.name}
Size: ${this.selectedSize}
Paper Type: ${this.selectedPaper}
Cover Type: ${this.selectedCover}
Quantity: ${this.quantity}

My Contact Details:
Name: ${this.customerName}
Email: ${this.customerEmail}
Phone: ${this.customerPhone}

Please get back to me regarding pricing and availability.`;

    const mailtoLink = `mailto:shreekrishnabookswpt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    this.closeModal();
  }
}
