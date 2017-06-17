# NavShrink

NavShrink is a jQuery plugin for your Bootstrap navbar. It works by evaluating scroll position to control the expansion, contraction and color/opacity of the navbar background.

It works in all modern browsers.

Tested with jQuery versions 2.0+

### VERSION
v1.4

### DEPENDANCIES

Bootstrap 3, jQuery

### USAGE

If you are using the Bootstrap navbar component, you can simply include javascript file and init NavShrink with one line:

```javascript
$('.navbar').navShrink();
```

Important Note: It is recommended to use the default Bootstrap fixed-top nav structure for this plugin - as seen below. 

#### THE HTML

```javascript
       <header class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                   <a class="navbar-brand" href="#"><img src="img/logo.png" alt="logo"></a>
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <nav id="bs-navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Our Products</a></li>
                        <li><a href="#">Who We Are</a></li>
                        <li><a href="#">Get Started</a></li>
                        <li><a class="hamburger hidden-xs" href="#">
                                <span class="bar top"></span>
                                <span class="bar middle"></span>
                                <span class="bar bottom"></span></a>
                        </li>
                        <li><a class="telephone hidden-sm" href="tel:8882225555"><i style="font-size:14px;padding-right:5px;" class="fa fa-phone hidden-lg hidden-md hidden-sm" aria-hidden="true"></i>888-222-5555</a></li>               
                    </ul>
                </nav>
            </div>
        </header>
```

### THE CSS
The CSS is up to you, however, it is strongly recommended that you give your elements default values. In the event that the script does not fire, the nav will fall back on this default state. 

```
a.navbar-brand{
    padding-top:20px; //should match the value used in logoInitPadding
}

a.navbar-brand img {
    height: 74px; //should match the value used in logoInitHeight 
    width: auto;
}

@media (max-width: 768px) {
    a.navbar-brand{
        padding-top:10px;  //should match value used in logoMobilePadding  
    }
    a.navbar-brand img {
        width: auto;
        height:50px; //should match value used in logoMobileInitHeight
    }
} 
```

### NPM
To add navShrink to your project using npm, use the following command:
#### $ npm install navshrink

### OPTIONS

You're also able to use some of the options that let you customize it as you wish:

```javascript
$('.navbar').navShrink({
anchorInitPadding  : 40, // Before scroll - initial top and bottom padding for your anchors
anchorFinalPadding : 30, // After scroll  - final top and bottom padding for your anchors
logoInitPadding    : 20, // Before scroll - initial padding for the top and bottom of logo
logoFinalPadding   : 12, // After scroll  - final padding for top and bottom of logo
logoInitHeight     : 72, // Before scroll - initial height of logo
logoFinalHeight    : 56, // After scroll  - final height of logo
mobileBreakpoint : 765, // Breakpoint of mobile nav
logoMobilePadding : 10, //Mobile logo top padding
logoMobileFinalHeight : 30, //Before scroll - initial mobile logo height
logoMobileInitHeight : 50, //After scroll - final mobile logo height
bgInitColor        : 'rgba(21,21,21,1)',   // final background color of nav navbar. MUST be in RGBA format.
anchorElem         : '.navbar-nav>li>a',   // anchor elements
navContainer       : '.navbar-default',    // top level element of navbar
logoElem           : 'a.navbar-brand img', // the actual logo element
logoParent         : 'a.navbar-brand',     // the logo container element
defaultOffset      : 80,    // How far down the screen (px) you want the trigger the on reload behavior
speed              : 2,     // The speed at which the transition happens. Higher numbers means faster trasition. 
fadeEnable         : true   // Enables or disables the fade transition effect on the navbar
responsiveEnable : true // Enables or disables responsive mode
});

```

## DOCUMENTATION

Here is the list of available navShrink options:

#### anchorInitPadding - number | number, default: 40

_Set initial padding for top & bottom of your anchors_


#### anchorFinalPadding - number | number, default: 30

_Set final padding for top & bottom of your anchors_


#### logoMobilePadding  - number | number, default: 10

_Set padding for top of your logo on mobile_


#### logoMobileFinalHeight - number | number, default: 30

_Set initial height for your logo on mobile_


#### logoMobileInitHeight - number | number, default: 50

_Set the final height for your logo on mobile_

 
#### responsiveEnable - bool | bool, default: true

_Breakpoint of the mobile nav. Should match your Bootstrap small breakpoint_


#### mobileBreakpoint - number | number, default: 765

_Breakpoint of the mobile nav. Should match your Bootstrap small breakpoint_


#### logoInitPadding - number | number, default: 20

_Set initial padding for top & bottom of your logo_


#### logoFinalPadding  - number | number, default: 12

_Set final padding for top & bottom of your logo_


#### logoInitHeight - number | number, default: 72

_Set initial height for your logo_


#### logoFinalHeight - number | number, default: 56

_Set the final height for your logo_


#### bgInitColor  - string | default, 'rgba(21,21,21,1)'

_Set the background color for the navbar. This is the color the navbar background will be after scroll completes. Must be in RGBA format._


#### anchorElem  - string | string, default: '.navbar-nav>li>a'

_Set the class for your anchor elements_


#### navContainer  - string | string, default: '.navbar-default'

_Set the class for the main navigation container_


#### logoElem - string | string, default: 'a.navbar-brand img'

_Set the class for your logo element_


#### logoParent - string | string, default: 'a.navbar-brand'

_Set the parent container of your logo element_


#### defaultOffset - number | number, default: 80

_This should typically be the same as the final height of your navbar. Should the page refresh or reload while the scrollbar is not at top of page, this will force the navbar into its final scroll appearance to prevent style conflicts._


#### speed - number | number, default: 2

_The speed at which the transition occurs. Can be any positive number, including decimals._


#### fadeEnable - bool | bool, default: true

_Set to false to disable the nav fade effect._


## DEMO

Check the example here: https://gemlarin.github.io/index.html

## TROUBLESHOOTING

navShrink.js is intended to be used with Bootstrap 3's navbar component. If the plugin is not working properly, try the following:

1. Compare your navbar markup to the provided example. Ensure that the navbar is properly formatted.
2. IMPORTANT: DO NOT give your navbar a fixed height.  Height should be set by applying top and bottom padding to the navbars 'a' tags.
3. Be sure to presize the logo to match the height designated in the 'logoInitHeight' property. Trying to scale from an oversized image is problematic.
4. Ensure that the classnames designated in the settings list match the classnames used in your navbar. Recommened to use the navbar version in the demo as your base to ensure proper structure and naming. You can also use your own navbar and pass the correct class names during invocation.
5. For the logo to shrink, the logo image must be wrapped in a container. It is not necessary to apply any styles to the container, but the container class name that you use must be updated in the settings.

## CONTRIBUTION

We still have some issues to fix and make navShrink better, if you have any suggestions raise them in [issues](https://github.com/gemlarin/shrinkNav/issues) please.

---

MIT Licensed

**enjoy!**
