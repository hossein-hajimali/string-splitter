// string-splitter, a jquery & css3 plugin
// Publisher: Hossein Haji Mali
// Website: http://hajimali.com/string-spliter
// github: https://github.com/hossein-haijmali/string-splitter
//------------------------------------------------------------------
(function($){
	$.fn.stringSplitter = function(options){
		function animation(object, time, ease){
			object.css({
				"transition": "all "+ time +"s "+ ease,
				"-o-transition": "all "+ time +"s "+ ease,
				"-ms-transition": "all "+ time +"s "+ ease,
				"-moz-transition": "all "+ time +"s "+ ease,
				"-webkit-transition": "all "+ time +"s "+ ease
			});
		}
		var settings = $.extend({
			effect: "none", // effect type
			actionTimeout : 100, // the time between each letter to act
			direction: "ltr",
			transitionTime: "0.2",
			transitionEase: "linear" // direction of animat
		}, options),
			str = this.html(),
			strLength = str.length,
			container = this,
			each;
		// kill previews container if exists
		$('.letters-wrapper').remove();

		// create a container next to the original container
		container.after('<ul class="letters-wrapper"></ul>').hide();

		// make a loop as long as the string length
		for(var i=0; i<strLength;i++){

			// creat element with "each-letter" className
			// for each letter and push them into that element
			$('.letters-wrapper').append('<li class="each-letter">'+ str[i] +'</li>');

			// if we have space character in the string we find it
			// and create an empty element for it
			if(str[i] == " "){
				$('.letters-wrapper').append('<li class="each-letter">'+ '&nbsp;' +'</li>');
			}

			// push element in a variable for ease
			each = $('.each-letter');

			// add transition to each element
			animation(each, settings.transitionTime, settings.transitionEase);

			// make a switch-case statement for each effect
			// and set the default settings and style for
			// each effect
			switch(settings.effect){
				case("fadeIn"):
					each.addClass('fadeIn'); break;
				case("fadeOut"):
					each.addClass('fadeOut fade-in'); break;
				case("fromTop"):
					each.addClass('fromTop is-top'); break;
				case("toTop"):
					each.addClass('toTop'); break;
				case("fromBottom"):
					each.addClass('fromBottom is-bottom'); break;
				case("toBottom"):
					each.addClass('fromBottom'); break;
				case("fromRight"):
					each.addClass('fromRight is-right'); break;
				case("toRight"):
					each.addClass('toRight'); break;
				case("fromLeft"):
					each.addClass('fromLeft is-left'); break;
				case("toLeft"):
					each.addClass('toLeft'); break;
				case("fromTopRight"):
					each.addClass('fromTopRight is-right is-top'); break;
				case("fromTopLeft"):
					each.addClass('fromTopLeft is-left is-top'); break;
				case("fromBottomRight"):
					each.addClass('fromBottomRight is-bottom is-right'); break;
				case("fromBottomLeft"):
					each.addClass('fromBottomLeft is-bottom is-left'); break;
				case("toTopRight"):
					each.addClass('toTopRight'); break;
				case("toTopLeft"):
					each.addClass('toTopLeft'); break;
				case("toBottomRight"):
					each.addClass('toBottomRight'); break;
				case("toBottomLeft"):
					each.addClass('toBottomLeft'); break;
			}
		}

		// now call each element and do the effects on each of them
		// we have "i" index from first element to last element
		each.each(function(i){

			// we create "j" index from last element to first element
			// we use this index for "direction: rtl" in options
			var j = strLength - i;

			// we set a timeout to make a delay for adding effects
			// between each element
			setTimeout(function() {

				// if option direction sets to rtl
				if(settings.direction == "rtl"){
					var eachRtl = each.eq(j); // put each element by j index in a variable
					switch(settings.effect){
						case("fadeIn"):
							eachRtl.addClass('fade-in'); break;
						case("fadeOut"):
							eachRtl.removeClass('fade-in'); break;
						case("fromTop"):
							eachRtl.removeClass('fromTop is-top'); break;
						case("toTop"):
							eachRtl.addClass('is-top'); break;
						case("fromBottom"):
							eachRtl.removeClass('fromBottom is-bottom'); break;
						case("toBottom"):
							eachRtl.addClass('is-bottom'); break;
						case("fromRight"):
							eachRtl.removeClass('fromRight is-right'); break;
						case("toRight"):
							eachRtl.addClass('is-right'); break;
						case("fromLeft"):
							eachRtl.removeClass('fromLeft is-left'); break;
						case("toLeft"):
							eachRtl.addClass('is-left'); break;
						case("fromTopRight"):
							eachRtl.removeClass('fromTopRight is-right is-top'); break;
						case("fromTopLeft"):
							eachRtl.removeClass('fromTopLeft is-left is-top'); break;
						case("fromBottomRight"):
							eachRtl.removeClass('fromBottomRight is-bottom is-right'); break;
						case("fromBottomLeft"):
							eachRtl.removeClass('fromBottomLeft is-bottom is-left'); break;
						case("toTopRight"):
							eachRtl.addClass('is-top is-right'); break;
						case("toTopLeft"):
							eachRtl.addClass('is-top is-left'); break;
						case("toBottomRight"):
							eachRtl.addClass('is-bottom is-right'); break;
						case("toBottomLeft"):
							eachRtl.addClass('is-bottom is-left'); break;
					}

				// if option direction sets to ltr or nothing
				} else {
					var eachLtr = each.eq(i); // put each element by i index in a variable
					switch(settings.effect){
						case("fadeIn"):
							eachLtr.addClass('fade-in'); break;
						case("fadeOut"):
							eachLtr.removeClass('fade-in'); break;
						case("fromTop"):
							eachLtr.removeClass('fromTop is-top'); break;
						case("toTop"):
							eachLtr.addClass('is-top'); break;
						case("fromBottom"):
							eachLtr.removeClass('fromBottom is-bottom'); break;
						case("toBottom"):
							eachLtr.addClass('is-bottom'); break;
						case("fromRight"):
							eachLtr.removeClass('fromRight is-right'); break;
						case("toRight"):
							eachLtr.addClass('is-right'); break;
						case("fromLeft"):
							eachLtr.removeClass('fromLeft is-left'); break;
						case("toLeft"):
							eachLtr.addClass('is-left'); break;
						case("fromTopRight"):
							eachLtr.removeClass('fromTopRight is-right is-top'); break;
						case("fromTopLeft"):
							eachLtr.removeClass('fromTopLeft is-left is-top'); break;
						case("fromBottomRight"):
							eachLtr.removeClass('fromBottomRight is-bottom is-right'); break;
						case("fromBottomLeft"):
							eachLtr.removeClass('fromBottomLeft is-bottom is-left'); break;
						case("toTopRight"):
							eachLtr.addClass('is-top is-right'); break;
						case("toTopLeft"):
							eachLtr.addClass('is-top is-left'); break;
						case("toBottomRight"):
							eachLtr.addClass('is-bottom is-right'); break;	
						case("toBottomLeft"):
							eachLtr.addClass('is-bottom is-left'); break;
					}
				}
			}, i*settings.actionTimeout);
		});
		
	}
}( jQuery ));