import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
	
  	num = 0;
  	price =199;
  	total = 0;
  	
	add(){
  		this.num++;
  		this.total = this.num*this.price;
  	};
	delete(){
		if(this.num>0){
			this.num--;
		}else{
			this.num=0;
		};
		
		this.total = this.num*this.price;
	};
	clear(){
		this.num=0;
		this.total=0;
	};
	
};