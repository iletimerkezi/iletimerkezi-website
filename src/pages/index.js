import * as React from "react"
import { MainLayout } from "../components"
import {Hero} from '@primer/react-brand'

const IndexPage = () => {
  return (
    <MainLayout>
      <Hero
        heading="This is my super sweet hero heading"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam luctus sed turpis felis nam pulvinar risus elementum."
        primaryAction={{
          text: 'Primary action',
          href: '#',
        }}
        secondaryAction={{
          text: 'Secondary action',
          href: '#',
        }}
        align="center"
      />
    </MainLayout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
