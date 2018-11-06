import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'demo-modal-service-static',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  /*item array */
  products: any [] = [
    {
      'id': 1,
      'title': 'Air1',
      'price': 100,
      'quantity': 0,
      'totalPrice': 0,
      'img': 'assets/img/cloth1.jpg',
      'img2': 'assets/img/cloth3.jpg'
    },
    {
      'id': 2,
      'title': 'Air2',
      'price': 200,
      'quantity': 0,
      'totalPrice': 0,
      'img': 'assets/img/cloth2.jpg',
      'img2': 'assets/img/cloth1.jpg'
    },
    {
      'id': 3,
      'title': 'Air3',
      'price': 300,
      'quantity': 0,
      'totalPrice': 0,
      'img': 'assets/img/cloth3.jpg',
      'img2': 'assets/img/cloth2.jpg'
    },
    {
      'id': 4,
      'title': 'Air4',
      'price': 400,
      'quantity': 0,
      'totalPrice': 0,
      'img': 'assets/img/cloth2.jpg',
      'img2': 'assets/img/cloth3.jpg'
    },
    {
      'id': 5,
      'title': 'Air5',
      'price': 500,
      'quantity': 0,
      'totalPrice': 0,
      'img': 'assets/img/cloth1.jpg',
      'img2': 'assets/img/cloth3.jpg'
    },
    {
      'id': 6,
      'title': 'Air6',
      'price': 600,
      'quantity': 0,
      'totalPrice': 0,
      'img': 'assets/img/cloth3.jpg',
      'img2': 'assets/img/cloth2.jpg'
    },
    {
      'id': 7,
      'title': 'Air7',
      'price': 700,
      'quantity': 0,
      'totalPrice': 0,
      'img': 'assets/img/cloth2.jpg',
      'img2': 'assets/img/cloth2.jpg'
    },
    {
      'id': 8,
      'title': 'Air8',
      'price': 800,
      'quantity': 0,
      'totalPrice': 0,
      'img': 'assets/img/cloth1.jpg',
      'img2': 'assets/img/cloth3.jpg'
    }
  ];
  /*varibles */
  total = 0;
  counter = 0;
  newArray = [];
  srchtext: string ;
  priceRange = 0;

 add(number) {
  for (let i = 0; i < this.products.length; i++) {
    if (this.products[i].id === number) {
    this.products[i].quantity += 1;
    this.products[i].totalPrice = this.products[i].price * this.products[i].quantity ;
    this.counter = i + 1;
    }

  }
  this.totalPrice();

}
  delete(number) {
  for (let i = 0; i < this.products.length; i++) {
    if (this.products[i].id === number) {
      if (this.products[i].quantity > 0) {
          this.products[i].quantity -= 1;
          this.products[i].totalPrice = this.products[i].price * this.products[i].quantity ;
       }
      }
    }
    this.totalPrice();

  }
  clear(number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === number) {
      this.products[i].quantity = 0;
      this.products[i].totalPrice = 0;

        }
      }
      this.totalPrice();

  }

  clearCart() {
    for (let i = 0; i < this.products.length; i++) {
      this.products[i].quantity = 0 ;
      this.products[i].totalPrice = 0;
      this.total = 0;
    }
  }

  onKey(event: any) {
    this.srchtext = event.target.value;
  }

  find() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].title === this.srchtext) {
        alert('find');
      }
    }
  }

  totalPrice() {
    this.total = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.total += (this.products[i].price * this.products[i].quantity);
    }
  }

  sortPriceI() {
    this.priceRange = 0 ;
  }
  sortPriceY() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].price <= 600 && this.products[i].price > 300) {
        this.priceRange = 2;
        break;
      }
    }
  }

  sortPriceZ() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].price > 600) {
        this.priceRange = 3;
        break;
      }
    }
  }
  sortPriceX() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].price <= 300) {
        this.priceRange = 1;
        break;
      }
    }
  }


  public ngOnInit() {
  }
}
