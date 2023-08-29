var con = document.querySelector("#box")
var love = document.querySelector("i")

con.addEventListener("dblclick",function(){
    love.style.transform ="translate(-50%,-50%) scale(1)";
    love.style.opacity = 0.8;
    setTimeout(function () {
        love.style.opacity = 0;
    },1000);
    setTimeout(function () {
        love.style.transform = "translate(-50%,-50%) scale(0)";
    },2000);
});
gsap.from("#box",{
    // y:2000,
    scale:0,
    duration:1,
    delay:0.5,

})