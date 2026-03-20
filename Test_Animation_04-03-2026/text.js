document.addEventListener('DOMContentLoaded', ()=>{
    const text = document.querySelectorAll('.text');
text.forEach((element)=>{
    const splitText = new SplitType(element, {types: 'words, chars', tagName: "span"})
        const words = document.querySelectorAll('.word');

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: element,
                start: 'top bottom-=15%',
                end:"bottom center+=15%",
                scrub: 1,
            }
        })

        tl.fromTo(
            words,
            {
                opacity: 0,
                skewX:-20,
                filter:'blur(8px)',
                willChange:'filter, transform'
            },
            {
                opacity: 1,
                skewX: 0,
                filter: 'blur(0px)',
                stagger: 0.04,
                ease: 'sine',
            }
        )
})
})