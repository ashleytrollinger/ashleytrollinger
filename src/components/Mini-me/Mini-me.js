'use client';
import './Mini-me.css';
import gsap from 'gsap';
import { useEffect, useState } from 'react';

function MiniMe() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  useEffect(() => {
    // Check if 'window' is defined before using it
    if (typeof window === 'undefined') {
      return;
    }

    const safeToAnimate = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches;

    if (!safeToAnimate) return;

    // Get the elements that we need
    const dom = {
      face: document.querySelector(".face"),
      eye: document.querySelectorAll(".eye"),
      innerFace: document.querySelector(".inner-face"),
      hairFront: document.querySelector(".hair-front"),
      hairBack: document.querySelector(".hair-back"),
      ear: document.querySelectorAll(".ear"),
      eyebrowLeft: document.querySelector(".eyebrow-left"),
      eyebrowRight: document.querySelector(".eyebrow-right"),
      screenlog: document.querySelector(".screen-log")
    };
    let x;
    let y;
    let xPosition;
    let yPosition;

    let storedXPosition;
    let storedYPosition;

    // Set up our coordinate mapping with GSAP utils!
    let mapWidth;
    let mapHeight;
    const screenLogElement = document.querySelector(".screen-log");

    function setMaps() {
      mapWidth = gsap.utils.mapRange(0, window.innerWidth, -50, 50);
      mapHeight = gsap.utils.mapRange(0, window.innerHeight, -50, 50);
    }
    window.addEventListener("resize", setMaps);
    setMaps();

    function moveSVG() {
      // only recalculating if the value changes
      if (storedXPosition === xPosition && storedYPosition === yPosition) return;
      x = xPosition;
      y = yPosition;

      if (xPosition && yPosition) {
        if (screenLogElement) {
          screenLogElement.innerHTML = `
                <p> x: ${Math.round(x)}</p>
                <p> y: ${Math.round(y)} </p>`;
        }
      }

      gsap.to(dom.face, {
        yPercent: y / 30,
        xPercent: x / 30
      });
      gsap.to(dom.eye, {
        yPercent: y / 3,
        xPercent: x / 2
      });
      gsap.to(dom.innerFace, {
        yPercent: y / 6,
        xPercent: x / 6
      });
      gsap.to(dom.hairFront, {
        yPercent: y / 15,
        xPercent: x / 22
      });
      gsap.to(dom.hairBack, {
        yPercent: (y / 20) * -1,
        xPercent: (x / 20) * -1
      });
      gsap.to(dom.ear, {
        yPercent: (y / 1.5) * -1,
        xPercent: (x / 10) * -1
      });
      gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
        yPercent: y * 2.5
      });

      // update the stored positions with the current positions
      storedXPosition = xPosition;
      storedYPosition = yPosition;
    }
    // gsap's RAF, falls back to set timeout
    gsap.ticker.add(moveSVG);

    // updating the mouse coordinates
    function updateMouseCoords(event) {
      xPosition = mapWidth(event.clientX);
      yPosition = mapHeight(event.clientY);
    }

    const createBlinkTimeline = () => {
      const blink = gsap.timeline({
        repeat: -1,        // Repeat indefinitely
        repeatDelay: 5,    // Delay between blinks
        paused: true       // Start paused
      });

      blink
        .to(
          ".eye-left, .eye-right",
          {
            duration: 0.01,
            opacity: 0
          },
          0
        )
        .to(
          ".eye-left-2, .eye-right-2",
          {
            duration: 0.01,
            opacity: 1
          },
          0
        )
        .to(
          ".eye-left, .eye-right",
          {
            duration: 0.01,
            opacity: 1
          },
          0.15
        )
        .to(
          ".eye-left-2, .eye-right-2",
          {
            duration: 0.01,
            opacity: 0
          },
          0.15
        );

      return blink;
    };

    const blinkTimeline = createBlinkTimeline();
    blinkTimeline.play();

    window.addEventListener("mousemove", updateMouseCoords);

    const toggleSwitch = () => {
      setIsSwitchOn(!isSwitchOn);
    };

    // Add event listener for the switch click

  },);
  return (
    <section id="Mini-me">
      <svg viewBox="0 10 211.73 180" stroke-linecap="round" stroke-linejoin="round">
        <defs>
          <clipPath id="background-clip">
            <path d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-8.82-80.28-33.59-86.29C136.84-6.57 114.13-5.82 88-2.82S34.73 11.45 16.71 48.24C-1.5 66.64-4.88 125.2 39 153.73z" fill="none" />
          </clipPath>

          <linearGradient id="linear-gradient" x1="102.94" y1="154.47" x2="102.94" y2="36.93" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff5cc" />
            <stop offset="0.01" stop-color="#faf0c8" />
            <stop offset="0.19" stop-color="#c2b599" />
            <stop offset="0.35" stop-color="#998977" />
            <stop offset="0.47" stop-color="#806f62" />
            <stop offset="0.54" stop-color="#77655a" />
            <stop offset="0.6" stop-color="#77655a" />
            <stop offset="1" stop-color="#77655a" />
          </linearGradient>
        </defs>
        <path class="bg" d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-10.51-57-35.28-63-50.22 17-76.31 20-60.12-15.88-78.32 2.51S-4.88 125.2 39 153.73z" fill='#FDFDFD' />
        <g clip-path="url(#background-clip)">
          <g class="me">
            <g class="body">
              <path class="hair-back hair" d="M127.63,45.17c2.65,1.35,11.15,4.2,16.07,23.12,2.88,20.58,3.79,26.07,4.68,30.6s1.2,11.6,6.3,21.15.85,14.65.85,14.65l-7.63,7.08s3.45-12.65-2.63-18.13c0,0,2,14,0,17s-8.75,6.92-8.75,6.92-2.48-4.53-5.06-9.64,2.78,11,.08,12.09-18.82,6.25-30.6,3.86-21.53-5-24-5.79c0,0,2.75-1.37.77-7.62s-1-7.59-1.52-7-2.1,3-1,7.49a7.45,7.45,0,0,1-1.92,7.18s-7.11-4.65-12.77-5.21A51.35,51.35,0,0,1,51,141.14s-5-11.43-.4-23.56S58,104.1,58.32,88.87s2.41-34.66,20.41-45S116.87,35.4,127.63,45.17Z" fill="#795c34" />

              <path class="neck" d="M114.26 143.16v-14a9.22 9.22 0 10-18.43 0v14c-15.27 2.84-24.74 15.08-24.74 27.33H139c0-12.24-9.5-24.49-24.74-27.33z" fill="#f1c27d" />
              <path class="top" d="M 103 167 c -37 -58 -16.9067 10.56 -25.36 15.84 h 25.35 l 25 -2.14 c -3.99 -72.7 5.17 -13.7 -37.99 -29.7 z" fill="#435334" />
              <path class="shoulder" d="m 95.82 142.87 c -48.82 4.13 -29.37 19.5 -29.37 40 h 29.37 z" fill="#435334" />
              <path class="shoulder" d="M 114.23 142.67 c 42.77 3.33 29 19.6 29 40.2 h -29 z" fill="#435334" />
            </g>
            <g class="head">
              <g class="ear-left ear">
                <path d="M63.52 105.14A8.21 8.21 0 0072 113.2a8.36 8.36 0 008.51-8.1A8.21 8.21 0 0072 97a8.36 8.36 0 00-8.48 8.14z" fill="#f1c27d" />
                <circle cx="72" cy="110" r="2" fill="#d4af37" />
                <path d="M68.54 104.48a17 17 0 014.14.41c1.07.31 1.94 1 3 1.31a.39.39 0 00.43-.57c-1.15-2.38-5.49-1.86-7.58-1.67a.26.26 0 000 .52z" fill="#000000" />
              </g>
              <g class="ear-right ear">
                <path d="M144.37 105.24a8.2 8.2 0 01-8.37 8.06 8.35 8.35 0 01-8.51-8.1 8.21 8.21 0 018.42-8.06 8.35 8.35 0 018.46 8.1z" fill="#f1c27d" />
                <circle cx="137" cy="110" r="2" fill="#d4af37" />
                <path d="M139.6 104c-2.1-.19-6.43-.72-7.59 1.67a.39.39 0 00.44.57c1.07-.26 1.92-1 3-1.31a17.51 17.51 0 014.15-.41.26.26 0 000-.52z" fill="#000000" />
              </g>
              <g class="face">
                <rect x="73.99" y="48.26" width="61.54" height="80.49" rx="26.08" transform="rotate(180 104.76 88.5)" fill="#f1c27d" />
                <g class="inner-face">
                  <path class="eyebrow-right" d="M120.73 79a9 9 0 00-4-1.22 9.8 9.8 0 00-4.19.87" fill="none" stroke="#795c34" stroke-width="1.04" />
                  <path class="eyebrow-left" d="M97.12 79.41a9.53 9.53 0 00-4-1.11 10.58 10.58 0 00-4.2.76" fill="none" stroke="#795c34" stroke-width="1.04" />
                  <path class="mouth" d="M97 107.52s7.06 4.62 14 1.59" fill="none" stroke="#000000" stroke-width="1.04" />
                  <path class="oh" opacity="0" d="M105.56,117.06c4-.14,5-2.89,4.7-5.64s-1.88-6.7-4.84-6.62-4.73,4.36-4.9,6.72S101.57,117.19,105.56,117.06Z" fill="#262528" />
                  <g class="eyes">
                    <path class="eye-left eye" d="M89.48 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#042209" />
                    <path class="eye-right eye" d="M113.67 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#042209" />
                    <path class="eye-right-2 eye" d="M114.11 88a5.72 5.72 0 002.48.72 6.46 6.46 0 002.59-.45" opacity="0" fill="none" stroke="#282828" stroke-width="1.04" />
                    <path class="eye-left-2 eye" d="M89.85 88a5.77 5.77 0 002.56.3 6.48 6.48 0 002.49-.87" fill="none" opacity="0" stroke="#282828" stroke-width="1.04" />
                  </g>
                  <path class="dizzy dizzy-1" opacity="0" d="M113.61,87.6c.54-2.66,2.66-3.84,4.63-3.37A3.3,3.3,0,0,1,117,90.71a2.53,2.53,0,0,1-2-3,2.48,2.48,0,0,1,2.73-1.92A1.71,1.71,0,0,1,119.32,88a1.59,1.59,0,0,1-1.75,1.34c-.79-.1-1.41-.59-1-1.42s1-.72,1.22-.24" fill="none" stroke="#000" stroke-width="0.75" />
                  <path class="dizzy dizzy-2" opacity="0" d="M96.15,87.27c-.54-2.66-2.66-3.84-4.63-3.37s-2.89,1.9-2.46,4a3.11,3.11,0,0,0,3.68,2.45,2.53,2.53,0,0,0,2-3A2.49,2.49,0,0,0,92,85.49a1.71,1.71,0,0,0-1.57,2.13A1.57,1.57,0,0,0,92.19,89c.79-.11,1.41-.6,1-1.43s-1-.72-1.22-.23" fill="none" stroke="#000" stroke-width="0.75" />
                  <path class="nose" d="M102.39 98.13s3.09 1.55 5.78 0" fill="none" stroke="#000000" />

                </g>
                <path class="hair-front" d="M 134.1 57.61 C 129.22 51.79 118 45 115.33 44.84 s -13 -1.87 -20.65 0 s -16 4.51 -18.77 8.26 s -6.17 18 -1.91 44.9 C 75 48 97 70 104 62 C 108 69 128 53 134 75 S 139 63 134 58" fill="#795c34" />

              </g>
            </g>
          </g>
        </g>
      </svg>
      <div class="screen-log">transform: translate(0,0)</div>

    </section>
  )
}

export default MiniMe;