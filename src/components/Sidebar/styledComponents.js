import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 15px;
  width: 20vw;
  background-color: ${props => props.bgColor};
`
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Desc = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin: 10px;
  color: ${props => props.linkColor};
`
export const LogosImage = styled.img`
  width: 40px;
  margin: 10px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 400;
  color: ${props => props.linkColor};
`

export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline-start: 0;
  margin: 10px;
  color: ${props => props.linkColor};
`

export const NavLinkItem = styled.li`
  list-style-type: none;
  margin: 10px;
  background-color: ${props => props.activeTab};
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${props => props.linkColor};
`
