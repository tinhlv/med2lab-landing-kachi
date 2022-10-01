import React, { useEffect } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

//components
import { 
  HomeSection,
  WhyKachiHealthSection,
  ContactForm,
  FormRegister
} from '../components'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function MainPage() {
  const anchors = ['home', 'why-kachi-health', 'why-kachi-health-content-1', 'why-kachi-health-content-2', 'why-kachi-health-content-3', 'contact']

  //AOS config
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in',
      animatedClassName: 'aos-animate',
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      disable: function () {
        var maxWidth = 1024
        return window.innerWidth < maxWidth
      },
    })
  }, [])

  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      scrollOverflowReset={true}
      scrollingSpeed={1000}
      onSlideLeave={() => {
        document
          .querySelectorAll('.fp-table.active .aos-init')
          .forEach((el) => {
            el.classList.remove('aos-animate')
          })
      }}
      afterLoad={() => {
        document
          .querySelectorAll('.fp-table.active .aos-init')
          .forEach((el) => {
            el.classList.add('aos-animate')
          })
      }}
      render={({ state, fullpageApi }) => {
        console.log('render prop change', state, fullpageApi) // eslint-disable-line no-console
        return (
          <ReactFullpage.Wrapper>
            <div className="section" data-anchor="home">
              <HomeSection />
            </div>
            <WhyKachiHealthSection />
            <FormRegister />
            <ContactForm />
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}
