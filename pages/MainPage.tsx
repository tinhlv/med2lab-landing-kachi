import React, { useEffect } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

//components
import { HomeSection, WhyKachiHealthSection } from '../components'

import AOS from 'aos'
import 'aos/dist/aos.css'

function MainPage() {
  const anchors = ['home', 'why-kachi-health']

  //AOS config
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'linear',
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
      onLeave={() => {
        document
          .querySelectorAll('.fp-table.active .aos-init')
          .forEach((el) => {
            el.classList.remove('aos-animate')
          })
      }}
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
      afterSlideLoad={() => {
        document
          .querySelectorAll('.fp-table.active .aos-init')
          .forEach((el) => {
            el.classList.remove('aos-animate')
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
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

export default MainPage
