import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const DetailsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin: 10px;
`

export const ListItem = styled.li`
  display: flex;
  margin: 15px;
`
export const ThumbnailImage = styled.img`
  margin: 10px;
  width: 280px;
`

export const ProfileImage = styled.img`
  margin: 10px;
  width: 60px;
  height: 60px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 400;
`

export const Desc = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 300;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
`

export const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
`
export const RowAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
