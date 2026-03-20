import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Text3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const textElements = container.querySelectorAll(".rotate-text");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.fromTo(
      textElements,
      {
        rotateY: "-40deg",
      },
      {
        rotateY: "80deg",
        stagger: 0.07,
        duration: 1,
        ease: "power1.in",
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
          rotateX: "-43deg",
        },
        {
          rotateX: "43deg",
          duration: 1,
          ease: "none",
        },
        0
      );
  }, []);

  return (
    <>
      <div className="container">
        <h2>Scroll down to view</h2>
      </div>

      <section>
        <div className="rotate-container" ref={containerRef}>
          <h1 className="rotate-text">Gsap</h1>
          <h1 className="rotate-text">3d text</h1>
          <h1 className="rotate-text">rotate</h1>
          <h1 className="rotate-text">looks</h1>
          <h1 className="rotate-text">damn good!</h1>
        </div>
      </section>

      <div className="container">
        <h2>Thank You...</h2>
      </div>
    </>
  );
};

export default Text3D;