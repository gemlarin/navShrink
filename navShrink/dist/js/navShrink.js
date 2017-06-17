/*!
 * navShrink jQuery Utility v1.4 -jQuery,-Bootstrap 3,-Navbar,-shrink,-fade,-effects
 * https://github.com/gemlarin/navShrink
 *
 * Requires jQuery.js v2.0+
 *
 * Copyright Danny Gibas
 * dfgibas@gmail.com
 * Released under the MIT license
 *
 * Date: 2017-06-17
 */

(function ($) {
    $.fn.navShrink = function (options) {

        //Bug: ScrollY is not always read on page reload in Chrome, so here we force a scroll event so that the ScrollY position can be initialized and captured. 
        window.scrollTo(1, 0);
        var sy = $(window).scrollTop();

        // Establish our default settings
        var settings = $.extend({
            anchorFinalPadding : 30,
            anchorInitPadding : 40,
            logoInitPadding : 20,
            logoFinalPadding : 12,
            logoInitHeight : 72,
            logoFinalHeight : 56,
            mobileBreakpoint : 765,
            logoMobilePadding : 10,
            logoMobileFinalHeight : 30,
            logoMobileInitHeight : 50,
            bgInitColor : 'rgba(21,21,21,1)',
            anchorElem  : '.navbar-nav>li>a',
            navContainer: '.navbar-default',
            logoElem : 'a.navbar-brand img',
            logoParent : 'a.navbar-brand',
            defaultOffset : 80,
            speed : 2,
            fadeEnable : true,
            responsiveEnable : true

        }, options);
        var s_ = settings,
            scrolling = false,
            $navcontain = $(s_.navContainer);

        //regex to extract the rgb values from the rgba string
        var str = s_.bgInitColor;
        var res = str.match(/rgba\((0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*),(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*),(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*),/g);
        var mod = String(res);

        //if page reloads and page is not scrolled to the top, then 
        //set the default appearance 
        if (sy > s_.defaultOffset && !scrolling || s_.fadeEnable === false) {
            $(s_.anchorElem).css('padding-top', "'" + s_.anchorFinalPadding + "px'");
            $(s_.anchorElem).css('padding-bottom', "'" + s_.anchorFinalPadding + "px'");
            $(s_.navContainer).css('background', s_.bgInitColor);

            if (!s_.responsiveEnable) {
                $(s_.logoElem).css('height', "'" + s_.logoFinalHeight + "px'");
                var pp = getLogoPadding();
                $(s_.logoParent).css('padding-top', pp);
            } else if (s_.responsiveEnable) {
                $(s_.logoElem).css('height', "'" + s_.logoMobileFinalHeight + "px'");
                var pp = getLogoPadding();
                $(s_.logoParent).css('padding-top', pp);
            }
        }

        function offset() {
            var pos = window.scrollY,
                h = window.innerHeight,
                off = (pos / (h) * s_.speed);
            //make sure that the offset never exceeds 100%
            if (off > 1) {
                off = 1;
            }
            return off;
        }

        function getLogoPadding() {
            //get and set the logo height
            var logoht = $(s_.logoElem).height(),
                navHeight = $(s_.navContainer).height(),
                calcPad = (navHeight - logoht) / 2,
                logoPadding = "'" + calcPad + "px !important'";
            return logoPadding;
        }

        //calculate anchor offset padding
        //grab the value difference between Init and Final anchor padding
        function getAnchorOffset() {
            var aoffSet = s_.anchorInitPadding - s_.anchorFinalPadding;
            return aoffSet;
        }

        //calculate logo offset padding
        //grab the value difference between Init and Final logo padding
        function getLogoOffset(initPadding, finalPadding) {
            var loffSet = initPadding - finalPadding;
            return loffSet;
        }

        //calculate the logos height offset
        //grab the value difference between Init and Final anchor height
        function getLogoDiff(initHeight, finalHeight) {
            var logoHeightOffSet = initHeight - finalHeight;
            return logoHeightOffSet;
        };

        function windowWidth() {
            var windowwidth = $(window).width();
            return windowwidth;
        }

        //handle cases where the window is resized and not at top of page
        $(window).resize(function () {
            if (windowWidth() > s_.mobileBreakpoint || !s_.responsiveEnable) {
                $(s_.logoElem).css('height', s_.logoInitHeight - (getLogoDiff(s_.logoInitHeight, s_.logoFinalHeight) * offset()));
                $(s_.logoParent).css('padding-top', s_.logoInitPadding - (getLogoOffset(s_.logoInitPadding, s_.logoFinalPadding) * offset()));
            }
            //if responsive
            else if (windowWidth() <= s_.mobileBreakpoint && s_.responsiveEnable) {
                $(s_.logoElem).css('height', s_.logoMobileInitHeight - (getLogoDiff(s_.logoMobileInitHeight, s_.logoMobileFinalHeight) * offset()));
            }
        });

        //Update all CSS properties during scroll event
        window.addEventListener('scroll', function (event) {
            scrolling = true;

            //style handlers
            $(s_.anchorElem).css('padding-top', s_.anchorInitPadding - (getAnchorOffset() * offset()));
            $(s_.anchorElem).css('padding-bottom', s_.anchorInitPadding - (getAnchorOffset() * offset()));
            if (s_.fadeEnable === true) {
                $(s_.navContainer).css('background', mod + (offset()) + ' )');
            } else if (s_.fadeEnable === false) {
                $(s_.navContainer).css('background', mod + '1)');
            }
            if (windowWidth() > s_.mobileBreakpoint || !s_.responsiveEnable) {
                $(s_.logoElem).css('height', s_.logoInitHeight - (getLogoDiff(s_.logoInitHeight, s_.logoFinalHeight) * offset()));
                $(s_.logoParent).css('padding-top', s_.logoInitPadding - (getLogoOffset(s_.logoInitPadding, s_.logoFinalPadding) * offset()));
            }
            //if responsive
            else if (windowWidth() <= s_.mobileBreakpoint && s_.responsiveEnable) {
                $(s_.logoElem).css('height', s_.logoMobileInitHeight - (getLogoDiff(s_.logoMobileInitHeight, s_.logoMobileFinalHeight) * offset()));
                $(s_.logoParent).css('padding-top', s_.logoMobilePadding);
            }
        });
    }
}(jQuery));