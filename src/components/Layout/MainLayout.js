import * as React from "react"
import { MainMenu } from "../"
import '@primer/react-brand/lib/css/main.css'
import '@primer/react-brand/fonts/fonts.css'
import {BaseStyles, ThemeProvider, PageLayout} from '@primer/react'

export const MainLayout = ({children}) => {

  return (
    <ThemeProvider>
      <BaseStyles>
        <PageLayout padding="none">
          <PageLayout.Header>
            <MainMenu />
          </PageLayout.Header>
          <PageLayout.Content>
            {children}
          </PageLayout.Content>
          {/* <PageLayout.Pane>
          </PageLayout.Pane> */}
          <PageLayout.Footer>
          </PageLayout.Footer>
        </PageLayout>
      </BaseStyles>
    </ThemeProvider>
  )
}