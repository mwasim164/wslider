# Wslider

A simple jQuery plugin to easily create bootstrap carousels

## Getting Started

You need to just download the zip file and extract it, then include wslider.js or wslider.min.js file into your html file and you are ready to go.

### Prerequisites

To use this plugin you must include bootstrap (bootstrap.css and bootstrap.js) and jQuery (jquery.js) files into your project.

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"> 
  <title>wslider demo</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>	
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

```

### Installing

Follow the following steps to use this plugin

#### 1. Include plugin into your html file

```
    <script src="wslider.js"></script>	

```


#### 2. Create a <div> in which you want to wrap your slider 

```
    <div id="wslider"></div>	

```

#### 3. Create a JSON array containing urls of images for your slider and pass it to wslider in order to intialize wslider plugin.
<br>
Below is the example of how to use plugin with minimum options

```
    <script type="text/javascript">
		$(document).ready(function(){
			var slides=
			[	
				{
					image:'slide1.jpg'
				},
				{
					image:'slide2.jpg'
				}
			];
			$('.slider').wslider({slides:slides});			
						
		});		 
	</script>	

```
<br>
Here is an example with all option

```
	<script type="text/javascript">
		$(document).ready(function(){
			var slides=
			[	
				{
					image:'slide1.jpg',
					alt:'wslide 1',
					title:'Slide 01',
					description:'This is slide no 01'
				},
				{
					image:'slide2.jpg',
					alt:'wslide 2',
					title:'Slide 02',
					description:'This is slide no 02'
				},
				
			];
			$('.slider').wslider(
			{
				slides:slides,
				next_text:'Next Slide',
				previous_text:'Prev Slide',
				interval:3000,
				pause_on_hover:true,
				cycle:true
			});			
						
		});		 
	</script>

```

### Details of options

**slides**(array)		- array containing urls of images to show in slider<br>
  	**image**(string) 		- url of image to display in slider<br>
	**alt**(string) 		- alternate text for image [optional]<br>
	**title**(string)		- heading or title of slide [optional]<br>
	**description**(string)	- sub heading or details about slide [optional]<br>

**next_text**(string)		- text to display for next slide control [optional]<br>
**previous_text**(string)	- text to display for previous slide control [optional]<br>
**interval**(number)			- number of milliseconds after which slide change [optional]<br>
**pause_on_hover**(boolean)	- whether the slider should pause on mouse hover or not [optional]<br>
**cycle**(boolean)			- whether the slider should go through all slides continuously, or stop at the last slide [optional]<br>


### Default values are as follows

```
	defaultSetting={
			slides:[],
			next_text:'Next',
			previous_text:'Previous',
			interval:5000,
			pause_on_hover:'hover',
			cycle:true
		}
```

## Built With

* [Bootstap](https://getbootstrap.com/) - Use to build responsive web app
* [jQuery](https://jquery.com/) - Javascript library

## Authors

* **Mohammad Wasim** - (https://github.com/mwasim164)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

