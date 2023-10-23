var tl = gsap.timeline()
var a = 0
function time(){
    setInterval(function(){
        a = a + Math.floor(Math.random()*20)
        console.log(a)
        if(a<101){
        document.querySelector("#loader h1").innerHTML = a+"%"
        }else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
    },150)     
}

tl.to("#loader h1",{
    scale:1.5,
    delay:0.5,
    duration:1,
    onStart:time(),
})
tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:2,
})

gsap.to("#page1 h1",{
    transform: "translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        scroller:"body",
        trigger :"#page1",
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true,
    }
})