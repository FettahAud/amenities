gsap.registerPlugin(ScrollTrigger, Flip);

const lenis = new Lenis();

// Use Gsap ScrollTrigger.update on Lenis scroll event
lenis.on("scroll", ScrollTrigger.update);

// Use Gsap ticker to call lenis.raf with smoothed time
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Set up lag smoothing for Gsap ticker
gsap.ticker.lagSmoothing(0);

// Start the animation loop using requestAnimationFrame

const raf = (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};
requestAnimationFrame(raf);

const gridComponent = document.querySelector(".scale-grid_component");
const wrapper = document.querySelector(".scale-grid_wrapper");

const tl = gsap.timeline();

tl.add("start")
  .to(
    gridComponent,
    {
      scale: 3,
    },
    "start"
  )
  .to(
    ".scale-grid_item img",
    {
      scale: 1,
      y: -100,
    },
    "start"
  );

ScrollTrigger.create({
  trigger: wrapper,
  markers: true,
  pin: true,
  end: "+=1000",
  scrub: true,
  animation: tl,
});
