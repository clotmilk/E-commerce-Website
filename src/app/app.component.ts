import { Component, OnInit } from '@angular/core';
declare var $: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    $ (function() {

  		$('#loginBtn').on('click', function() {
  			$('.lgModal').css('display', 'block');
  			$(document.body).css('background', 'rgba(0,0,0,0.55)')
  		})
  	})

  	$(function(){
  		$('#closeimg').on('click',function(){
  			$('.lgModal').css('display','none')
        $(document.body).css('background','rgba(0,0,0,0)')
  		})
  	})
  }


}

