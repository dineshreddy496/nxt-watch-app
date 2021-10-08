import {
  DetailsLink,
  ListItem,
  ThumbnailImage,
  ContentSection,
  Heading,
  Desc,
  ColumnAlign,
  RowAlign,
} from './styledComponents'
import NxtWatchContext from '../../Context'

const TrendingVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
      const {trendingVideos} = props

      const {
        id,
        name,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = trendingVideos

      return (
        <DetailsLink to={`/videos/${id}`}>
          <ListItem>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <ContentSection>
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

export default TrendingVideoItem
