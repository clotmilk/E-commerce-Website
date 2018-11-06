import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
declare var $: any;
@Component({
  // tslint:disable-next-line:component-selector

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 300, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    $('.list_dt').on('click', function () {
      $('.list_dd').stop();
      $(this).siblings('dt').removeAttr('id');
      if ($(this).attr('id') === 'open') {
          $(this).removeAttr('id').siblings('dd').slideUp();
      } else {
          $(this).attr('id', 'open').next().slideDown().siblings('dd').slideUp();
      }
  });
  }
}
