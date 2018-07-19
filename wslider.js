/* wslider
	author - mohammad wasim
	date - 19 July 2018
*/
(function( $ ) 
{

    $.fn.wslider=function(options)
	{
		var defaultSetting={
			slides:[],
			next_text:'Next',
			previous_text:'Previous',
			interval:5000,
			pause_on_hover:"hover",
			cycle:true
		};
		var slides=options.slides;
		var carouselID="wslider_"+Math.floor((Math.random() * 9999) + 1);
		if(Array.isArray(slides)==false)
		{
			options.slides=[];
		}
		var wslidersetting=$.extend({},defaultSetting,options);
		if(options.slides.length<=0)
		{
			console.log('wslider','no slides provided to display');
			return;
		}
		if(wslidersetting.pause_on_hover==true)
		{
			wslidersetting.pause_on_hover="hover";
		}
		else
		{
			wslidersetting.pause_on_hover=false;
		}
		
		this.each(function()
		{

				
				var wslider='<div id="'+carouselID+'" class="carousel slide" data-ride="carousel" data-pause="'+wslidersetting.pause+'" data-interval="'+wslidersetting.interval+'" data-wrap="'+wslidersetting.cycle+'">'
							  +'<!-- Indicators -->'
						   +'<ol class="carousel-indicators">';

			   for (var i = 0; i < wslidersetting.slides.length; i++) 
			   {
			   		if(i==0)
			   		{
			   			wslider+='<li data-target="#'+carouselID+'" data-slide-to="'+i+'" class="active"></li>';
			   		}
			   		else
			   		{
			   			wslider+='<li data-target="#'+carouselID+'" data-slide-to="'+i+'"></li>';
			   		}
			   		
			   }
				wslider+='</ol>'

			  +'<!-- Wrapper for slides -->'
			  +'<div class="carousel-inner">';

			  for (var i = 0; i < wslidersetting.slides.length; i++) 
			   {
			   		var slide= $.extend({image:'',title:'',description:'',alt:'wslide'},wslidersetting.slides[i]);
			   		if(i==0)
			   		{
			   			wslider+='<div class="item active">';
			   		}
			   		else
			   		{
			   			wslider+='<div class="item">';
			   		}

			   		wslider+=' <img src="'+slide.image+'" alt="'+slide.alt+'">'
			   				+'<div class="carousel-caption">'
						    +'    <h3>'+slide.title+'</h3>'
						    +'    <p>'+slide.description+'</p>'
						    +'  </div>'
			    			+'</div>';			   		
			   }
		  
			  wslider+='</div>'
			  +'<!-- Left and right controls -->'
			  +'<a class="left carousel-control" href="#'+carouselID+'" title='+wslidersetting.previous_text+' data-slide="prev">'
			  +'  <span class="glyphicon glyphicon-chevron-left"></span>'
			  +'  <span class="sr-only" >'+wslidersetting.previous_text+'</span>'
			  +'</a>'
			  +'<a class="right carousel-control" href="#'+carouselID+'" title='+wslidersetting.next_text+' data-slide="next">'
			  +'  <span class="glyphicon glyphicon-chevron-right"></span>'
			  +'  <span class="sr-only" >'+wslidersetting.next_text+'</span>'
			  +'</a>'
			+'</div>';
		  	$(this).html(wslider);

		});
		return this;
	}; 
		 
}( jQuery));

		