import {
  DetailsLink,
  ListItem,
  ThumbnailImage,
  ProfileImage,
  Heading,
  Desc,
  ContentSection,
  ColumnAlign,
  RowAlign,
} from './styledComponents'
import NxtWatchContext from '../../Context'

const VideoCard = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
      const {videos} = props

      const {
        id,
        name,
        profileImageUrl,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = videos

      return (
        <DetailsLink to={`/videos/${id}`}>
          <ListItem>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <ContentSection>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <ColumnAlign>
                <Heading textColor={textColor}>{title}</Heading>
                <Desc textColor={textColor}>{name}</Desc>
                <RowAlign>
                  <Desc textColor={textColor}>{viewCount}</Desc>
                  <Desc textColor={textColor}>{publishedAt}</Desc>
                </RowAlign>
              </ColumnAlign>
            </ContentSection>
          </ListItem>
        </DetailsLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default VideoCard
