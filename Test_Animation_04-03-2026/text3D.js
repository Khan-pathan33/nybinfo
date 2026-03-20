document.querySelectorAll('.rotate-container').forEach((container)=>{

    const textElements = container.querySelectorAll('.rotate-text');

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: container,
            start:'top bottom',
            end: 'bottom top',
            scrub:1,
        }
    });

    tl.fromTo(
        textElements,
        {
            rotateY: "-40deg",
        },
        {
            rotateY: '80deg',
            stagger: 0.07,
            duration: 1,
            ease: 'power1.in'
        }
    )
    .to(
        textElements,
        {
            opacity: 1,
            stagger: 0.025,
            delay: 0.2,
            duration: 0.25,
        },
        0
    )
    .fromTo(
        container,
        {
            rotateX: '-43deg',
        },
        {
            rotateX: '43deg',
            duration:1,
            ease: 'none',
        },
        0 
    )

})