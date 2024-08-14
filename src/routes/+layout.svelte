<script lang="ts">
    import '../app.scss';
    import { onMount } from 'svelte';
  
    let interBubble: HTMLDivElement;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
  
    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }
  
    onMount(() => {
      move();
  
      const handleMouseMove = (event: MouseEvent) => {
        tgX = event.clientX;
        tgY = event.clientY;
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    });
  </script>
  
  <div class="gradient-bg">
    <div class="z-20 w-full h-full absolute bg-[url('/noise.png')] opacity-10 mix-blend-luminosity ">

    </div>

    <div class="z-20 w-full h-full absolute">
      <slot/>
    </div>
    

    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div class="gradients-container">
      <div class="g1 rounded-full"> </div>
      <div class="g2 rounded-full"></div>
      <div class="g3 rounded-full"></div>
      <div class="g4 rounded-full"></div>
      <div class="g5 rounded-full"></div>
      <div bind:this={interBubble} class="interactive rounded-full"></div>
    </div>
  </div>
  