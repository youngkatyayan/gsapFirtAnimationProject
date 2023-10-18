let tl=gsap.timeline();
tl.from(".nav .img, .nav .content,.nav .btn",{
y:-100,
duration:0.5,
delay:0.2,
stagger:0.3
})
tl.from("h1",{
    y:50,
    opacity:0,

})
tl.from("h1 span",{
    y:50,
    opacity:0,
    
})
