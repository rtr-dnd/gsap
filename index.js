import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
console.log('loaded')

window.onload = function() {
  gsap.from("#fv-title", {
    duration: 1.0,
    ease: "power1.out",
    y: 20,
    opacity: 0
  })

  gsap.from("#fv-copy", {
    // delay: 0.3,
    duration: 1.0,
    ease: "power1.out",
    y: 20,
    opacity: 0
  })


  gsap.to("#box", {
    scrollTrigger: {
      trigger: "#box",
      start: "top 70%",
      end: "top 30%",
      scrub: true,
    },
    duration: 0.2,
    ease: "power1.inOut",
    x: 200,
    rotation: 360
  })

  gsap.to("#box", {
    scrollTrigger: {
      trigger: "#box",
      start: "top 30%",
      end: "top 20%",
      scrub: true,
    },
    duration: 0.2,
    ease: "power1.inOut",
    scale: 0.5,
    xPercent: -35,
    yPercent: -50
  })

  gsap.to("#hide", {
    scrollTrigger: {
      trigger: "#hide",
      start: "top 70%",
      end: "top 30%",
      scrub: true,
    },
    duration: 0.2,
    ease: "power1.inOut",
    x: 200,
  })

  gsap.from(".second-copy", {
    scrollTrigger: {
      trigger: ".second-copy",
      start: "top center",
      end: "top 40%",
      scrub: true,
    },
    duration: 0.2,
    ease: "power1.inOut",
    opacity: 0
  })

  gsap.to("#rectangle", {
    scrollTrigger: {
      trigger: ".third",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: "#rectangle"
    },
    duration: 0.2,
    ease: "power1.inOut",
    rotation: 720
  })

  gsap.to(".third-title", {
    scrollTrigger: {
      trigger: ".third",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: ".third-title"
    },
  })

  gsap.to(".third-copy", {
    scrollTrigger: {
      trigger: ".third",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: ".third-copy"
    },
  })

  gsap.from(".third-copy", {
    scrollTrigger: {
      trigger: ".third",
      start: "center center",
      end: "center 20%",
      scrub: true,
    },
    duration: 1,
    ease: "power1.inOut",
    opacity: 0,
  })


}

