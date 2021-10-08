import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
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
  font-size: 30px;
  margin: 15px;
  color: ${props => props.textColor};
`

export const Desc = styled.p`
  color: black;
  font-size: 20px;
  margin-left: 15px;
`

export const NavbarLargeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
