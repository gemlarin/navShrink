(function($) {
    $.fn.navShrink = function( options ) {
        
        var scrolling = false;
		
        
        //Bug: ScrollY is not always read on page reload in Chrome, so here we force a scroll event so that the ScrollY position can be initialized and captured. 
        window.scrollTo(1, 0);
        var sy = $(window).scrollTop();

        // Establish our default settings
        var settings = $.extend({
            anchorFinalPadding : 30,
            anchorInitPadding  : 40,
            logoInitPadding    : 20,
            logoFinalPadding   : 12,
            logoInitHeight     : 72,
            logoFinalHeight    : 56,
            bgInitColor        : 'rgba(21,21,21,1)',
            anchorElem         : '.navbar-nav>li>a',
            navContainer       : '.navbar-default',
            logoElem           : 'a.navbar-brand img',
            logoParent         : 'a.navbar-brand',
            defaultOffset      : 80,
            speed              : 2
            
        }, options);
		var s_ = settings;
        
        //regex to extract the rgb values from the rgba string
        var str = s_.bgInitColor;
        var res = str.match(/rgba\((0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*),(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*),(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*),/g);
        var mod = String(res);

        //if page reloads and page is not scrolled to the top, then 
        //set the default appearance 
        if(sy > s_.defaultOffset && !scrolling){
            $(s_.anchorElem).css('padding-top', "'" + s_.anchorFinalPadding + "px'");
            $(s_.anchorElem).css('padding-bottom', "'" + s_.anchorFinalPadding + "px'");
            $(s_.navContainer).css('background', s_.bgInitColor);
            $(s_.logoElem).css('height', "'" + s_.logoFinalHeight + "px'");
            var pp = getLogoPadding();
            $(s_.logoParent).css('padding-top', pp);
        }
        
        function getLogoPadding(){
            //get and set the logo height
            var logoht = $(s_.logoElem).height();
            var navHeight = $(s_.navContainer).height();
            var calcPad = (navHeight - logoht)/2;
            var logoPadding = "'" + calcPad + "px !important'";
            return logoPadding;  
        }
        
        //autocalculate anchor offset padding
        var aoff = getAnchorOffset();
        //grab the value difference between Init and Final anchor padding
        function getAnchorOffset(){
            var aoffSet = s_.anchorInitPadding - s_.anchorFinalPadding;
            return aoffSet;
        }
        
        //autocalculate logo offset padding
        var loff = getLogoOffset();
        //grab the value difference between Init and Final logo padding
        function getLogoOffset(){
            var loffSet = s_.logoInitPadding - s_.logoFinalPadding;
            return loffSet;
        }
        
        //auto calculate the logos height offset
        var ldiff = getLogoDiff();
        //grab the value difference between Init and Final anchor height
        function getLogoDiff(){
            var logoHeightOffSet = s_.logoInitHeight - s_.logoFinalHeight;
            return logoHeightOffSet;
        };
        
        var $navcontain = $(s_.navContainer);
        //Update all CSS properties during scroll event
        window.addEventListener('scroll', function (event) {
            scrolling=true;
            var pos = window.scrollY;
            var h = window.innerHeight;
            
            var offset = (pos / (h) * s_.speed);
            
            //make sure that the number never exceeds 100%
            if (offset > 1) {
                offset = 1;
            }
            
            //adjust styles based on offset
            $(s_.anchorElem).css('padding-top', s_.anchorInitPadding - (aoff * offset));
            $(s_.anchorElem).css('padding-bottom', s_.anchorInitPadding - (aoff * offset));
            $(s_.navContainer).css('background', mod + (offset) + ' )');
            $(s_.logoElem).css('height', s_.logoInitHeight - (ldiff * offset));
            $(s_.logoParent).css('padding-top', s_.logoInitPadding - (loff * offset));
        });
    }
}(jQuery));