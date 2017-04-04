/* --------------------------------------------------------------------------
 * javascript handle initialization
      1. Post Slider
      2. Instagram
 *
 * -------------------------------------------------------------------------- */

(function($){

	"use strict";
	
	var themeApp = {
		
		//---------- 4. Post Slider -----------
        theme_post_slider: function() {
            var slideshow = UIkit.slideshow($('.idz-post-slider'), {
                height: "auto",
                autoplay: true,
            });
        },

        //---------- 5. Mediaelement  -----------
        theme_media: function() {
            var media = $('audio, video');

            media.mediaelementplayer();
        },

        //---------- 6. Instagram  -----------
    	theme_instafeed: function() {
			var feed = new Instafeed({
				get: 'tagged',
				tagName: 'workspace',
				clientId: '927223b32e4b4b9389520bdf8b04590e',
				accessToken: '4001179641.ba4c844.ae42b5f94f3647b9becd3fd3c3c6b1b9',
				template: '<li><a href="{{link}}"><img src="{{image}}" /></a></li>',
				limit: 9,
				sortBy: 'most-liked'
			});
			feed.run();
		},

		
		
		theme_init:function(){
			themeApp.theme_post_slider();
			themeApp.theme_media();
			themeApp.theme_instafeed();
		}
		
	}//end themeApp
	

	jQuery(document).ready(function($){
		themeApp.theme_init();
    });
	
})(jQuery);