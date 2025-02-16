Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


var tl1 = gsap.timeline();
tl1.from(".sun",{
  duration:1,
  opacity:0,
})
tl1.from(".mountain",{
  duration:0.5,
  opacity:0,
  y:200
})
tl1.from(".wellcome",{
  duration:1,
  opacity:0,
})
tl1.from(".tree1",{
  duration:0.5,
  opacity:0,
  y:-200
})
tl1.from(".tree2",{
  duration:0.5,
  opacity:0,
  y:200
})

var tl2 = gsap.timeline();

tl2.from(".bt",{
  duration:1,
  opacity:0,
  y:200
})
tl2.from(".bmt",{
  duration:1,
  opacity:0,
  y:200
})
tl2.from(".blt",{
  duration:1,
  opacity:0,
  y:200
})

var tl3 = gsap.timeline();

tl3.from('nav',{
  duration:1,
  opacity:0,
  y:200
})
tl3.from('.nav-li',{
  duration:5,
  opacity:0,
  stagger:0.1
})