var line = $('.line');
var line1 = $('.line-1');
var line2 = $('.line-2');
var text = $('.text');
var tl =  new TimelineMax();



tl.to(line, 2, {height:250, ease:  Power4.easeInOut})
    .to(line, 2, {rotation:30}, "-=0.5")
    .to(line2, 0.2, {top:-30}, "=-2")
    .to(line1, 2.5, {left:-850, ease: Power4.easeInOut})
    .to(line2, 2.5, {left:300, ease: Power3.easeInOut}, "-=2.5")
    .to(text, 2.5, { width:700, marginLeft:130, ease: Power4.easeInOut }, "=-2.5")
;
