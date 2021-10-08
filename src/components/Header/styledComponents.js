import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 0px 1px #dcdcdc;
`

export const HamburgerIconButton = styled.button`
  background-color: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  border-radius: 15px;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const NavbarLargeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.background};
  }
`

export const NavbarSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  background-color: ${props => props.background};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  margin: 15px;
`
export const ProfileImg = styled.img`
  width: 40px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 80px;
  height: 50px;
  border: 1px solid grey;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  margin: 10px;
  color: grey;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  width: 80px;
  height: 50px;
  border: none;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`

export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: row;
  padding-inline-start: 0;
  list-style-type: none;
  padding: 15px;
  margin: 15px;
`

export const NavLinkItem = styled.li`
  margin-right: 18px;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`
