gsap.registerPlugin(ScrollTrigger)

function splitTextToChars(){
    const splitText = document.querySelectorAll('.scroll-text')
splitText.forEach((text)=> new SplitType(text, {types: 'chars'}))
}

function unhideText(){
    const hideText = document.querySelectorAll('.text-hidden')
    hideText.forEach((element)=>{
        element.classList.remove("text-hidden")
    })
}

function scrollAnimation(){

    const scrollSection = document.querySelector('.scroll-section')

    const chars = document.querySelectorAll('.char') 
    //tl time line 
    const tl = gsap.timeline({
        ScrollTrigger:{
            trigger: scrollSection, 
            start: 'top top',
            pin: true,
            scrub: 1, // Makes the animation more interactive and smooth during scrolling
            end: ()=> `+=${window.innerHeight * 2 }`,
             markers: true,
            ease: 'none'
        }
    })

    tl.fromTo(chars, 
    {
        rotateY: ()=> Math.random() * 180 + 180,
        yPercent: ()=> Math.random() * 100 - 50,
        xPercent: ()=> Math.random() * 100 - 50,
        scale: 0,

    }, 
    {
        rotateY: 0,
        yPercent: 0,
        xPercent: 0,
        scale: 1,
        stagger:{
            amount: 1,
            from : 'random'
        }
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    splitTextToChars()

    scrollAnimation()
    unhideText()
})