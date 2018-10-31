import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  public ngOnInit(){
  	$('#kkk').on('click',function(){
  		alert('123');
  	});

  	$(function(){
  		var $hour = $('#hours');
  		var $min =$('#minutes');
  		var $second =$('#seconds');

  		function update(){
  			var date = new Date();
  			var hour = date.getHours()<10 ? '0' + date.getHours():date.getHours();
  			var min = date.getMinutes()<10 ? '0' + date.getMinutes():date.getMinutes();
  			var sec =date.getSeconds() <10 ? '0' + date.getSeconds():date.getSeconds();
  			$hour.text(hour+ ':');
  			$min.text(min + ':');
  			$second.text(sec);

  		}
  		update();
  		window.setInterval(update,1000);
  	})


  	$(function(){
  		$('#loginBtn').on('click',function(){
  			$('.lgModal').css('display','block');
  			$(document.body).css('background','rgba(0,0,0,0.55)')
  		})
  	})

  	$(function(){
  		$('#closeimg').on('click',function(){
  			$('.lgModal').css('display','none')
        $(document.body).css('background','rgba(0,0,0,0)')
  		})
  	})


  	$(function(){
	    $(".col-md-4>a").click(function() {
	        $("#ul").append("<li>" + 'cloth x 1' + "</li>");
	        $('.col-md-4>li').innerTEXT == 'Jacket';
	    });
	});

	$(function(){
	    $("#clear").click(function() {
	        $("#ul>li").remove();
	    });
	});

	$(function(){
	    $("#delete").click(function() {
	        $("#ul>li").last().remove();
	    });
	});

  $(".list_dt").on("click",function () {
      $('.list_dd').stop();
      $(this).siblings("dt").removeAttr("id");
      if($(this).attr("id")=="open"){
          $(this).removeAttr("id").siblings("dd").slideUp();
      }else{
          $(this).attr("id","open").next().slideDown().siblings("dd").slideUp();
      }
  });
 }
};
