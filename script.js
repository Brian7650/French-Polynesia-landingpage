//rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second. 
// gsap.to("h1", {rotation: 360, x: 0, duration: 2});


// var tl = gsap.timeline();
// tl.to("h1", {duration: 2, x: 100, opacity: 0.5});


//WITH Timelines (cleaner, more versatile)
var tl = gsap.timeline({repeat: 2, repeatDelay: 1});
tl.to("h1", {x: 100, duration: 1});
tl.to("h1", {y: 50, duration: 1});
tl.to("h1", {opacity: 0, duration: 1});

// then we can control the whole thing easily...
tl.pause();
tl.resume();
tl.seek(1.5);
tl.reverse();