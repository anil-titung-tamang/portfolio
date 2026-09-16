import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { repoShowcase } from '../constants/index'
import GlowCard from '../components/GlowCard'

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
              <TitleHeader title="Open Source Work & Contributions"
              sub="🚀 Repos, Research & Hugging Face"
              />
              <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                  {repoShowcase.map(({ imgPath, name, mentions, review, link }) => (
                      <a href={link} target="_blank" rel="noopener noreferrer" key={name}>
                          <GlowCard card={{ review }} showRating={false}>
                              <div className="flex items-center gap-3">
                                  <div>
                                      <img src={ imgPath } alt={ name } />
                                  </div>
                                  <div>
                                      <p className="font-bold">{name}</p>
                                      <p className="text-white-50">{ mentions}</p>
                                  </div>
                              </div>
                          </GlowCard>
                      </a>
                  ))}
              </div>  
      </div>
    </section>
  )
}

export default Testimonials