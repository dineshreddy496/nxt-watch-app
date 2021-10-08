import {
  DetailsLink,
  ListItem,
  ThumbnailImage,
  Heading,
  Desc,
} from './styledComponents'
import NxtWatchContext from '../../Context'

const GamingVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

      const {gamingVideos} = props

      const {id, thumbnailUrl, title, viewCount} = gamingVideos

      return (
        <DetailsLink to={`/videos/${id}`}>
          <ListItem>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />

            <Heading textColor={textColor}>{title}</Heading>

            <Desc textColor={textColor}>{viewCount}</Desc>
          </ListItem>
        </DetailsLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingVideoItem
