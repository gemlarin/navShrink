
/* TEAM */
 
Web Dev - Danny Gibas
UX Design - Matt Kaminski
  
/* SITE */

http://cleanenergyco.com
 
Last update: 2017/5/26
Standards: HTML5, CSS3, SASS (original build only)
Components: Modernizr, jQuery, Bootstrap v3, Lightbox.js, Font-Awesome, Icomoon, JQuery Tablesorter, Bootstrap Select, Knockout.js.
Software: Brackets, SourceTree, CodeKit (original built only).

Original site was built using SASS, though we have deviated from SASS recently due to numerou CSS changes performed without using the SASS documents.

This site incorporates the main corporate web property, with subsections dedicated to specific departments and campaigns. Note that NOT ALL HEADERS AND FOOTERS ARE universal. Be careful to note which header and footer each page and section uses. The stylesheets used for the different content types are defined as:

1. font-awesome.min.css : self explainatory
2. lightgallery.min.css : CSS for the lightbox used sitewide.
3. interior.css : Use in conjuction with mystyles.min.css or mystyles-alt.min.css for any pages styles like the homepage. Implements the dark footer version.
4. interior-alt-footer.css : Use in conjuction with mystyles.min.css or mystyles-alt.min.css. Used for interior pages that implement the light footer (ie. Commercial section). 
5. mystyles.min.css : Main custom stylesheet. The only place this is used right now is the home page.
6. mystyles-alt.min.css : Main custom stylesheet. Used this one for internal pages.



The CSS document must stack in the following order when using multiple CSS docs.(Not all are required for all pages):

1. font-awesome.min.css
2. lightgallery.min.css
3. interior.css
4. interior-alt-footer.css
5. mystyles.min.css
6. mystyles-alt.min.css
7. Any page specific CSS. Example: project-page-style.css