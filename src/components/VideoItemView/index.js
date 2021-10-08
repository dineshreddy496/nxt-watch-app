import {
  DetailsLink,
  ListItem,
  Heading,
  ThumbnailImage,
  ContentSection,
  ColumnAlign,
  RowAlign,
  Desc,
} from './styledComponents'

const VideoItemView = props => {
  const {videoItemDetails} = props

  const {
    id,
    name,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoItemDetails
  return (
    <DetailsLink to={`/videos/${id}`}>
      <ListItem>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <ContentSection>
          <ColumnAlign>
            <Heading>{title}</Heading>
            <Desc>{name}</Desc>
            <RowAlign>
              <Desc>{viewCount}</Desc>
              <Desc>{publishedAt}</Desc>
            </RowAlign>
          </ColumnAlign>
        </ContentSection>
      </ListItem>
    </DetailsLink>
  )
}

export default VideoItemView
