import * as React from "react"
import {ActionMenu, ActionList, Header, Avatar} from '@primer/react'
import {ArchiveIcon} from '@primer/octicons-react'

export const MainMenu = ({children}) => {

  return (
    <Header>
      <Header.Item>
        <Header.Link href="#" fontSize={2}>
          <span>İletiMerkezi</span>
        </Header.Link>
      </Header.Item>
      <Header.Item full>
      <ActionMenu>
        <ActionMenu.Button>Ürünler</ActionMenu.Button>
        <ActionMenu.Overlay>
          <ActionList showDividers>
            <ActionList.Group>
              <ActionList.Item>
                <ActionList.LeadingVisual>
                  <ArchiveIcon />
                </ActionList.LeadingVisual>
                Toplu SMS Paneli
                <ActionList.Description variant="block">
                  Kolay, hızlı, akıllı
                </ActionList.Description>
              </ActionList.Item>
            </ActionList.Group>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
      </Header.Item>
      <Header.Item mr={0}>

      </Header.Item>
    </Header>
  )
}