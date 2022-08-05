import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

//components
import { HomeSection, WhyKachiHealthSection } from '../components'

function MainPage() {
  const anchors = ['Home', 'WhyKachiHealth']
  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      scrollOverflowReset={true}
      onLeave={(origin, destination, direction) => {
        console.log('onLeave event', { origin, destination, direction })
      }}
      render={({ state, fullpageApi }) => {
        console.log('render prop change', state, fullpageApi) // eslint-disable-line no-console

        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <HomeSection />
            </div>
            <div className="section">
              <WhyKachiHealthSection />
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

export default MainPage
