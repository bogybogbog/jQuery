// ! JQuery =====> effects, DOM, Travirsing
/**
 * $  ====> jquery
 * () ====> any css selector
 * ? effects:
 
 * hide()
 * show()  // d-none
 * toggle() ===> if it has d-none it will be d-block and the opposite is true
 
 * on()
 
 * slideUp()
 * slideDown() // d-none
 * slideToggle()
 
 * fadeOut()s
 * fadeIn()  // d-none
 * fadeToggle()
 * fadeTo(  ,   )
 
 * animate() // numeric propreties
 * stop(stopAll, goToTheEnd)
 
 * 
 */

// $(".test").hide(10000)
// $(".test").show(10000)
// $(".test").toggle(3000)
// let button1 = document
//   .getElementById("id")
//   .addEventListener("click", function () {
//     $(".test").toggle(3000);
//   });
// $("button").on("click", function () {
// on() equals addEventListener() and in on we can add more than one event on("click mouseleave")
//   $(".test").slideUp(3000);
//   $(".test").slideDown(3000);
//   $(".test").slideToggle(3000);
//   $(".test").fadeIn(3000);
//   $(".test").fadeToggle(3000);
//   $(".test").fadeTo(3000, 0.6);
//   $(".test").slideUp(2000).slideDown(1000).fadeOut(2500)    // cahining on the SAME element
//   $(".test").slideUp(3000, function () {
//     $("button").slideUp(2000);                  // call-back function if u wanna make sth to wait (on DIFF element)
//   });
// $(".test").animate({width: "+=50px", height: "500px"}, 1000)
// $(".test").animate({borderRadius: "50%"}, 1000)

// });

// $(window).on("load", function () {
//   $(".container-fluid").animate({ width: "100%" }, 1000);
//   $(".container-fluid").animate({ height: "100vh" }, 1000, function () {
//     $("h2").slideDown(1000, function () {
//       $("#demo").show(1000, function () {
//         $(".col-md-4").slideDown(1000, function () {
//           $(".col-md-4 p").slideDown(1000);
//         });
//       });
//     });
//   });
// });

/**
 * ! DOM ====> setter | getter :
 
 * ? html()  ==> innerHTML
 * ? text()  ==> innerText
 * ? css()   ==> .style ==> inline style, .css({cssText: `background-color:blue;....`}) or css({backgroundColor: blue,....})
 * ? attr()  ==> it works as setAttribute() or getAttribute() ===> .attr("src", "....")
 * ? val()   ==> __.value
 
 * ? addClass()
 * ? removeClass()
 * ? toggleClass()
 * ? hasClass()
 
 * ? remove() ===> removes the whole element
 * ? empty() 
 
 * ? append("")  ===> add on the text at the end
 * ? prepend("") ===> add on the text at the first
 * ? after() ===> add after the element 
 * ? before() ===> add b4 the element 
 
 * ? width()            ===> width
 * ? innerWidth()       ===> width + padding
 * ? outerWidth()       ===> width + padding + botder
 * ? outerWidth(true)   ===> width + padding + botder + margin

 */
