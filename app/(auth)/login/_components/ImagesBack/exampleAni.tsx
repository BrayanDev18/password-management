'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

export const AnimatedSVG = () => {
  useEffect(() => {
    gsap.registerPlugin(Draggable)

    const spin = gsap
      .timeline({ repeat: -1 })
      .set('#svg-stage', { opacity: 1 })
      .fromTo(
        '#clover',
        {
          transformOrigin: '50%',
          x: 30,
          y: 30
        },
        {
          duration: 50,
          rotation: 360,
          ease: 'none'
        }
      )

    Draggable.create('#clover', {
      type: 'rotation',
      trigger: '#svg-stage',
      inertia: true,
      onPressInit: () => spin.pause(),
      onDrag: function () {
        spin.progress(gsap.utils.wrap(0, 360, this.rotation) / 360)
      },
      onThrowUpdate: function () {
        spin.progress(gsap.utils.wrap(0, 360, this.rotation) / 360)
      },
      onThrowComplete: () => {
        spin.resume()
        gsap.fromTo(spin, { timeScale: 0 }, { timeScale: 1, ease: 'power1.in' })
      }
    })

  }, [])

  return (
    <svg
      id='svg-stage'
      width='100'
      height='100'
      viewBox='0 0 300 300'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g
        id='clover'
        clipPath='url(#clip0_119_300)'
      >
        <path
          d='M99.6778 105.287C99.6778 -81.6924 145.108 21.3021 98.3534 102.278C145.098 21.3021 257.091 9.12898 95.091 102.638C257.052 9.14845 190.528 99.9892 97.0387 99.9892C190.528 99.9892 257.062 190.859 95.091 97.3404C257.052 190.83 145.108 178.686 98.3534 97.7007C145.098 178.686 99.6778 281.759 99.6778 94.7012C99.6778 281.681 54.2379 178.686 100.993 97.7007C54.2477 178.686 -57.7451 190.859 104.255 97.3404C-57.7062 190.83 8.81757 99.9892 102.307 99.9892C8.81757 99.9892 -57.7159 9.12898 104.255 102.638C-57.7062 9.14845 54.2379 21.3021 100.993 102.278C54.2379 21.3021 99.6778 -81.7411 99.6778 105.287Z'
          fill='url(#paint0_linear_119_300)'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_119_300'
          x1='153.535'
          y1='32'
          x2='40.1477'
          y2='140.085'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset='0.0509862'
            stopColor='#FFB6E1'
          />
          <stop
            offset='1'
            stopColor='#FBE3EA'
          />
        </linearGradient>
        <clipPath id='clip0_119_300'>
          <rect
            width='200'
            height='200'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
