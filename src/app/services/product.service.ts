import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    sizes: string[];
    paperTypes: string[];
    coverTypes: string[];
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private jsonUrl = 'assets/products.json';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.jsonUrl);
    }
}
