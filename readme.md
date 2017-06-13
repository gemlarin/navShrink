# NavShrink

NavShrink is a jQuery plugin for your Bootstrap navbar. It works by evaluating scroll position to control the expansion and contraction of the navbar. On page load, the navbar will be in its expanded height state, but will shrink to a shorter height as the page is scrolled - freeing up additional space in the viewport for content.

It works in all modern browsers.

Tested with jQuery versions 2.0+

### Version
v1.1

### Dependancies

Bootstrap 3, jQuery

### Usage

If you are using the Bootstrap navbar component, you can simply include javascript file and init NavShrink with one line:

```javascript
$('.navbar').navShrink();
```

### Options

You're also able to use some of the options that let you customize it as you wish:

```javascript
$('.navbar').navShrink({
anchorFinalPadding : 30, //After scroll top and bottom padding for your anchors
anchorInitPadding  : 40, //Before scroll top and bottom padding for your anchors
logoInitPadding    : 20, //Before scroll padding for the top and bottom of logo
logoFinalPadding   : 12, //After scroll padding for top and bottom of logo
logoInitHeight     : 72, //Before scroll height of logo
logoFinalHeight    : 56, //After scroll height of logo
bgInitColor        : 'rgba(21,21,21,1)', //background color of post scroll navbar. MUST be in RGBA with an opacity of 1.
anchorElem         : '.navbar-nav>li>a', //anchor elements
navContainer       : '.navbar-default', //top level element of navbar
logoElem           : 'a.navbar-brand img', //the actual logo element
logoParent         : 'a.navbar-brand', //the logo container element
defaultOffset      : 80 //How far down the screen you want the trigger for the automatic navbar to occur
speed              : 2 //The speed at which the transition happens. Higher numbers means faster trasition. 
});

```

## Documentation

Here is the list of available navShrink options:

#### anchorFinalPadding - number | number, default: 30

Set final padding for top & bottom of your anchors

#### anchorInitPadding - number | number, default: 40

Set initial padding for top & bottom of your anchors

#### logoInitPadding - number | number, default: 20

Set initial padding for top & bottom of your logo

#### logoFinalPadding  - number | number, default: 12

Set final padding for top & bottom of your logo

#### logoInitHeight - number | number, default: 72

Set initial height for your logo

#### logoFinalHeight - number | number, default: 56

Set the final height for your logo

#### bgInitColor  - string | default, 'rgba(21,21,21,1)'

Set the background color for the navbar. This is the color it will be after scroll. Must be in RGBA format, and the opacity should be set to "1" if you want it fully opaque after scroll.

#### anchorElem  - string | string, default: '.navbar-nav>li>a'

Set the class for your anchor elements

#### navContainer  - string | string, default: '.navbar-default'

Set the class for the main navigation container

#### logoElem - string | string, default: 'a.navbar-brand img'

Set the class for your logo element

#### logoParent - string | string, default: 'a.navbar-brand'

Set the parent container of your logo element

#### defaultOffset - number | number, default: 80

Set the pixel value for the scroll position that the default navbar should display at if page is refreshed

#### speed - number | number, default: 2

The speed at which the transition occurs. Can be any positive number, including decimals.

## Demo

Check the example here: https://gemlarin.github.io/

## Troubleshooting

navShrink.js is intended to be used with Bootstrap 3's navbar component. If the plugin is not working properly, try the following:

1. Compare your navbar markup to the provided example. Ensure that the navbar is properly formatted.
2. DO NOT give your navbar a fixed height.  Height should be set by applying top and bottom margin to the navbars 'a' tags.
3. Presize the logo to match the height designated in the logoFinalHeight property.
4. Ensure that the classnames designated in the settings list match the classnames used in your navbar. Recommened to use the version in the demo as your base to ensure proper structure and naming. You can also use your own navbar and pass the propper class names during invocation. 

## Contribution

We still have some issues to fix and make navShrink better, if you have any suggestions raise them in [issues](https://github.com/gemlarin/shrinkNav/issues) please.

---

MIT Licensed

**enjoy!**