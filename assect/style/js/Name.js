var line = $('.line');
var line1 = $('.line-1');
var line2 = $('.line-2');
var text = $('.text');
var tl =  new TimelineMax();



tl.to(line, 2, {height:300, ease:  Power4.easeInOut})
    .to(line, 2, {rotation:35}, "-=0.5")
    .to(line2, 0.2, {top:-30}, "=-2")
    .to(line1, 2.5, {left:-950, ease: Power4.easeInOut})
    .to(line2, 2.5, {left:800, ease: Power3.easeInOut}, "-=2.5")
    .to(text, 2.5, { width:600, marginLeft:130, ease: Power4.easeInOut }, "=-2.5")
;