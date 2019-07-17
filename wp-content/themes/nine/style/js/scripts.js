jQuery(document).ready(function () {
"use strict";
	/*-----------------------------------------------------------------------------------*/
	/*	VIDEO
	/*-----------------------------------------------------------------------------------*/
    jQuery('.player').fitVids();
	/*-----------------------------------------------------------------------------------*/
	/*	REVOLUTION
	/*-----------------------------------------------------------------------------------*/
    jQuery('.fullscreenbanner').revolution(
    {
        delay: 9000,
        startwidth: 1170,
        startheight: 550,
        hideThumbs: 200,
        fullWidth: "off",
        fullScreen: "on"
    });
	/*-----------------------------------------------------------------------------------*/
	/*	PRETTIFY
	/*-----------------------------------------------------------------------------------*/
    window.prettyPrint && prettyPrint()   

	/*-----------------------------------------------------------------------------------*/
	/*	SLIDER PRO
	/*-----------------------------------------------------------------------------------*/
jQuery( '.portfolio-slider' ).sliderPro({
			width: 1070,
			height: 600,
			fade: true,
			arrows: true,
			buttons: false,
			autoHeight: true,
			autoScaleLayers: true,
			thumbnailArrows: false,
			autoplay: false,
			slideDistance: 0,
			thumbnailWidth: 125,
			thumbnailHeight: 80
		});
	/*-----------------------------------------------------------------------------------*/
	/*	RETINA
	/*-----------------------------------------------------------------------------------*/
	jQuery('.retina').retinise();
	/*-----------------------------------------------------------------------------------*/
	/*	IMAGE ICON HOVER
	/*-----------------------------------------------------------------------------------*/
    jQuery('.icon-overlay a').prepend('<span class="icn-more"></span>');
	/*-----------------------------------------------------------------------------------*/
	/*	FANCYBOX
	/*-----------------------------------------------------------------------------------*/
    jQuery(".fancybox-media").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: {
                width: 50,
                height: 50
            },
            title: {
                type: 'over'
            }
        },
        beforeLoad: function () {
            var el, id = jQuery(this.element).data('title-id');
            if (id) {
                el = jQuery('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });
    jQuery(".fancybox-inline").fancybox({
	    arrows: false,
        padding: 20,
        closeBtn: false,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        autoSize : false,
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false
        },
		beforeLoad : function() {         
            this.width  = parseInt(this.element.data('fancybox-width'), 10);  
            this.height = parseInt(this.element.data('fancybox-height'), 10);
        }
	});
	/*-----------------------------------------------------------------------------------*/
	/*	DATA REL
	/*-----------------------------------------------------------------------------------*/
	jQuery('a[data-rel]').each(function () {
	    jQuery(this).attr('rel', jQuery(this).data('rel'));
	});
	/*-----------------------------------------------------------------------------------*/
	/*	TOOLTIP
	/*-----------------------------------------------------------------------------------*/
    if (jQuery("[rel=tooltip]").length) {
        jQuery("[rel=tooltip]").tooltip();
    }
	/*-----------------------------------------------------------------------------------*/
	/*	FORM
	/*-----------------------------------------------------------------------------------*/
    jQuery('.forms').dcSlickForms();

    jQuery('.comment-form input[title], .comment-form textarea, .forms textarea').each(function () {
        if (jQuery(this).val() === '') {
            jQuery(this).val(jQuery(this).attr('title'));
        }

        jQuery(this).focus(function () {
            if (jQuery(this).val() == jQuery(this).attr('title')) {
                jQuery(this).val('').addClass('focused');
            }
        });
        jQuery(this).blur(function () {
            if (jQuery(this).val() === '') {
                jQuery(this).val(jQuery(this).attr('title')).removeClass('focused');
            }
        });
    });
	/*-----------------------------------------------------------------------------------*/
	/*	TABS & TOGGLE
	/*-----------------------------------------------------------------------------------*/
    jQuery('.tabs.tabs-top').easytabs({
        animationSpeed: 300,
        updateHash: false
    });
	jQuery('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');
	jQuery('.panel-group').on('shown.bs.collapse', function (e) {
	   jQuery(e.target).closest('.panel-default').addClass(' panel-active');
	}).on('hidden.bs.collapse', function (e) {
	   jQuery(e.target).closest('.panel-default').removeClass(' panel-active');
	});
	/*-----------------------------------------------------------------------------------*/
	/*	MENU
	/*-----------------------------------------------------------------------------------*/
    jQuery('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();
    jQuery('.dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input').click(function (e) {
        e.stopPropagation();
    });
	jQuery('.btn.responsive-menu').on('click', function() {
	    jQuery(this).toggleClass('opn');
	});
    jQuery('.navbar .nav li a').on('click', function() {
        jQuery('.navbar .navbar-collapse.in').collapse('hide');
        jQuery('.btn.responsive-menu').removeClass('opn');
    });
    /*-----------------------------------------------------------------------------------*/
	/*	LOCALSCROLL
	/*-----------------------------------------------------------------------------------*/
    jQuery('.navbar, .smooth').localScroll({
	    hash: true
    });
});
/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function() { // makes sure the whole site is loaded
		jQuery('#status').fadeOut(); // will first fade out the loading animation
		jQuery('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		jQuery('body').delay(350).css({'overflow':'visible'});
})
/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER
/*-----------------------------------------------------------------------------------*/
function init() {
"use strict";
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 50,
                header = document.querySelector(".navbar");
            if (distanceY > shrinkOn) {
                classie.add(header,"fixed");
            } else {
                if (classie.has(header,"fixed")) {
                    classie.remove(header,"fixed");
                }
            }
        });
    }
    window.onload = init();

/*-----------------------------------------------------------------------------------*/
/*	SCROLL NAVIGATION HIGHLIGHT
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	headerWrapper = parseInt(jQuery('.navbar').height(), 10);
	var shrinked_header_height = 64,
	header_height = jQuery('.navbar').height(),
	navItems = jQuery('.navbar ul a[href^="#"]').not('.navbar ul a[href="#"], .navbar ul a.fancybox-inline');
	jQuery('.offset').css('padding-top', header_height + 'px');
	jQuery('.anchor').css('padding-top', shrinked_header_height + 'px');  
	jQuery('.anchor').css('margin-top', -(shrinked_header_height) + 'px');    
	offsetTolerance = -(header_height);
	//Detecting user's scroll
	jQuery(window).scroll(function() {
		//Check scroll position
		scrollPosition = parseInt(jQuery(this).scrollTop(), 10);
		//Move trough each menu and check its position with scroll position then add current class
		navItems.each(function() {
		var thisHref = jQuery(this).attr('href');
		if( jQuery(thisHref).length ){
			thisTruePosition = parseInt(jQuery(thisHref).offset().top, 10);
			thisPosition = thisTruePosition - headerWrapper - offsetTolerance;
			if(scrollPosition >= thisPosition) {
				jQuery('.current').removeClass('current');
				jQuery('.navbar ul a[href='+ thisHref +']').parent('li').addClass('current');
			}
		}
		});
		//If we're at the bottom of the page, move pointer to the last section
		bottomPage = parseInt(jQuery(document).height(), 10) - parseInt(jQuery(window).height(), 10);
		if(scrollPosition == bottomPage || scrollPosition >= bottomPage) {
			jQuery('.current').removeClass('current');
			navItems.last().parent('li').addClass('current');
		}
	});
});
/*-----------------------------------------------------------------------------------*/
/*	CUBE PORTFOLIO
/*-----------------------------------------------------------------------------------*/			
(function(jQuery, window, document, undefined) {
    'use strict';
    var gridContainer = jQuery('#grid-container'),
        filtersContainer = jQuery('#filters-container'),
        wrap, filtersCallback;
    /*********************************
        init cubeportfolio
     *********************************/
    gridContainer.cubeportfolio({
        layoutMode: 'grid',
        rewindNav: true,
        scrollByPage: false,
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 500,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'fadeIn',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            
            
			jQuery('a[data-rel]').each(function () {
    jQuery(this).attr('rel', jQuery(this).data('rel'));
});

            var t = this;

            jQuery.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 5000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage("Error! Please refresh the page!");
                });
        }
    });


    /*********************************
        add listener for filters
     *********************************/
    if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
        wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');

        wrap.on({
            'mouseover.cbp': function() {
                wrap.addClass('cbp-l-filters-dropdownWrap-open');
            },
            'mouseleave.cbp': function() {
                wrap.removeClass('cbp-l-filters-dropdownWrap-open');
            }
        });

        filtersCallback = function(me) {
            wrap.find('.cbp-filter-item-custom').removeClass('cbp-filter-item-custom-active');
            wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());
            me.addClass('cbp-filter-item-custom-active');
            wrap.trigger('mouseleave.cbp');
        };
    } else {
        filtersCallback = function(me) {
            me.addClass('cbp-filter-item-custom-active').siblings().removeClass('cbp-filter-item-custom-active');
        };
    }

    filtersContainer.on('click.cbp', '.cbp-filter-item-custom', function() {
        var me = jQuery(this);

        if (me.hasClass('cbp-filter-item-custom-active')) {
            return;
        }

        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!jQuery.data(gridContainer[0], 'cubeportfolio').isAnimating) {
            filtersCallback.call(null, me);
        }

        // filter the items
        gridContainer.cubeportfolio('filter', me.data('filter'), function() {});
    });


    /*********************************
        activate counter for filters
     *********************************/
    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item-custom'), function() {
        // read from url and change filter active
        var match = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href),
            item;
        if (match !== null) {
            item = filtersContainer.find('.cbp-filter-item-custom').filter('[data-filter="' + match[1] + '"]');
            if (item.length) {
                filtersCallback.call(null, item);
            }
        }
    });


    /*********************************
        add listener for load more
     *********************************/
    jQuery('.cbp-l-loadMore-button-link').on('click.cbp', function(e) {
        e.preventDefault();
        var clicks, me = jQuery(this),
            oMsg;

        if (me.hasClass('cbp-l-loadMore-button-stop')) {
            return;
        }

        // get the number of times the loadMore link has been clicked
        clicks = jQuery.data(this, 'numberOfClicks');
        clicks = (clicks) ? ++clicks : 1;
        jQuery.data(this, 'numberOfClicks', clicks);

        // set loading status
        oMsg = me.text();
        me.text('LOADING...');

        // perform ajax request
        jQuery.ajax({
            url: me.attr('href'),
            type: 'GET',
            dataType: 'HTML'
        }).done(function(result) {
            var items, itemsNext;

            // find current container
            items = jQuery(result).filter(function() {
                return jQuery(this).is('div' + '.cbp-loadMore-block' + clicks);
            });

            gridContainer.cubeportfolio('appendItems', items.html(),
                function() {
                    // put the original message back
                    me.text(oMsg);

                    // check if we have more works
                    itemsNext = jQuery(result).filter(function() {
                        return jQuery(this).is('div' + '.cbp-loadMore-block' + (clicks + 1));
                    });

                    if (itemsNext.length === 0) {
                        me.text('NO MORE WORKS');
                        me.addClass('cbp-l-loadMore-button-stop');
                    }

                });

        }).fail(function() {
            // error
        });

    });

})(jQuery, window, document);
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE
/*-----------------------------------------------------------------------------------*/
jQuery( function() {
  // init Isotope
  var $container = jQuery('.isotope');
  
  $container.isotope({
    itemSelector: '.post-grid',
    transitionDuration: '0.6s',
    masonry: { columnWidth: '.col-md-6.col-sm-12' },
    layoutMode: 'masonry'
  });
  
  jQuery(window).resize(function(){
  	$container.isotope({
  		masonry: { columnWidth: '.col-md-6.col-sm-12' }
  	});
  });
  // layout Isotope again after all images have loaded
$container.imagesLoaded( function() {
  $container.isotope('layout');
});
});
/*-----------------------------------------------------------------------------------*/
/*	INSTAGRAM
/*-----------------------------------------------------------------------------------*/
var instagramFeed = new Instafeed({
    get: 'user',
    userId: 1215763826,
    accessToken: '1215763826.f1627ea.dad6ca96bd7642519b573d52c3ef467f',
    resolution: 'low_resolution',
    template: '<div class="item"><figure class="frame"><img src="{{image}}" /><a href="{{link}}" class="ins-link" target="_blank"><i class="icon-link"></i></a></figure></div>',
    after: function () {
        jQuery('.swiper-container.instagram').each(function(){
			  jQuery(this).swiper({
			     grabCursor: true,
			    slidesPerView: 'auto',
			    wrapperClass: 'swiper',
			    slideClass: 'item',
			    offsetPxBefore: 0,
			     offsetPxAfter: 0
			  });
			
			  var $swipers = $(this);
			
			  $swipers.siblings('.arrow-left').click(function(){
			$swipers.data('swiper').swipeTo($swipers.data('swiper').activeIndex-1);
			return false;
			});
			$swipers.siblings('.arrow-right').click(function(){
			$swipers.data('swiper').swipeTo($swipers.data('swiper').activeIndex+1);
			return false;
			});
		});
    }
});
jQuery('#instafeed').each(function() {
    instagramFeed.run();
});
