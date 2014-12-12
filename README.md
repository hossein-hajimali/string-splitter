##String Splitter
This repository takes your string and split its letters, append to a seperated container right after the string container. this plugin uses css3 for animation so it works only on modern browsers.

###Browsers support
* Firefox 4.0+
* Chrome 4.0+
* Safari 3.1+
* IE 10.0+

###Version
1.0

###[Demo]

###Installation
First add css and js files to your page
```sh
<script type="text/javascript" src="library/js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="library/js/min/jquery.string.splitter.min.js"></script>
<link rel="stylesheet" type="text/css" media="all" href="library/css/jquery.string.splitter.css">
```
Now you can create your html very simple 
```sh
<div id="myString">Jquery String Splitter</div>
```
At the end just select your string container with string-splitter plugin
```sh
$('#myString').stringSplitter();
```
And how to pass options?
```sh
$('#myString').stringSplitter({
  effect: "fade",
  direction: "rtl",
  transitionTime: 0.8
});
```
That's it!

###Options
All effects applies letter after letter. if you want just split your string run plugin without any options.
  - ***effect:*** "fadeIn" , "fadeOut" , "fromTop" , "toTop" , "fromBottom" , "toBottom" , "fromRight" , "fromLeft" , "toLeft" , "fromTopRight" , "fromTopLeft" , "fromBottomRight" , "fromBottomLeft" , "toTopRight" , "toTopLeft" , "toBottomRight" , "toBottomLeft"
  - ***direction:*** "ltr" , "rtl" , default is "ltr"
  - ***actionTimeout:*** milliseconds number default is 100, this option defines the time delay between each letter action
  - ***transitionTime:*** seconds or milliseconds number, transition time. default is 0.2s
  - ***transitionEase:*** any css3 transition type could be use, for example "ease-out", default is "linear"


[Demo]: http://hajimali.com/string-splitter
 
