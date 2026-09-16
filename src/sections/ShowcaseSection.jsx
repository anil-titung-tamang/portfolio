import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { projects } from '../constants/index'

gsap.registerPlugin(ScrollTrigger)

const ROTATE_INTERVAL = 5000 // ms between auto-hops — adjust to taste

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const featuredRef = useRef(null)
    const listItem1Ref = useRef(null)
    const listItem2Ref = useRef(null)

    const [featuredIndex, setFeaturedIndex] = useState(0)

    // Auto-hop between the three projects
    useEffect(() => {
        const interval = setInterval(() => {
            setFeaturedIndex((prev) => (prev + 1) % projects.length)
        }, ROTATE_INTERVAL)
        return () => clearInterval(interval)
    }, [])

    const featured = projects[featuredIndex]
    const listOne = projects[(featuredIndex + 1) % projects.length]
    const listTwo = projects[(featuredIndex + 2) % projects.length]

    // Entrance animation on first scroll into view
    useGSAP(() => {
        const cards = [featuredRef.current, listItem1Ref.current, listItem2Ref.current]

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 })
    }, [])

    // Crossfade whenever the featured project hops
    useGSAP(() => {
        gsap.fromTo(
            featuredRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        )
    }, [featuredIndex])

  return (
      <section id="work" ref={sectionRef} className="app-showcase">
          <div className="w-full">
              <div className="showcaselayout">
                  {/*left */}
                  <div className="first-project-wrapper" ref={featuredRef}>
                      <div className="image-wrapper">
                          <img src={featured.image} alt={featured.alt}/>
                      </div>

                      <div className="text-content">
                          <h2>{featured.title}</h2>

                          <p className="text-white-50 md:text-xl">
                              {featured.description}
                          </p>
                          
                      </div>
                      
                  </div>



                  {/*right */}

                  <div className="project-list-wrapper overflow-hidden">
                      <div className="project" ref={listItem1Ref}>
                          
                          <div className={`image-wrapper ${listOne.bgColor}`}>
                              <img src={listOne.image} alt={listOne.alt}/>
                          </div>

                          <h2>
                              {listOne.title}
                          </h2>
                          
                      </div>

                      <div className="project" ref={listItem2Ref}>
                          
                          <div className={`image-wrapper ${listTwo.bgColor}`}>
                              <img src={listTwo.image} alt={listTwo.alt}/>
                          </div>

                          <h2>
                              {listTwo.title}
                          </h2>
                          
                      </div>
                      
                  </div>


                  
              </div>              
          </div>      
    </section>
  )
}

export default ShowcaseSection