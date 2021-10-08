import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarLargeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  //   align-self: center;
  margin-left: 10vh;
`
export const Input = styled.input`
  padding: 12px;
  color: grey;
  border: 1px solid grey;
  outline: none;
  height: 12px;
`
export const Button = styled.button`
  height: 26px;
  cursor: pointer;
`
export const Retry = styled.button`
  padding: 15px;
  color: blue;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: #fff;
`

export const Image = styled.img`
  width: 250px;
  margin: 10px;
`

export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
`

export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 20px;
`
export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: row;
  padding-inline-start: 0;
  flex-wrap: wrap;
  list-style-type: none;
  margin-left: 15px;
  width: 80vw;
`

export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`
