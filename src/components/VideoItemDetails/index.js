import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../Context'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  NavLink,
  Retry,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  MainContainer,
  NavbarLargeContainer,
  LoaderContainer,
  RowAlign,
  Button,
  ViewsAndIcons,
  ProfileImage,
  ColumnAlign,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    likeActive: false,
    dislikeActive: false,
    savedActive: false,
  }

  componentDidMount() {
    this.getVideos()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = this.formattedData(fetchedData)

      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  activeLiked = () => {
    this.setState(prevState => ({
      likeActive: !prevState.likeActive,
      dislikeActive: false,
    }))
  }

  activeDisLiked = () => {
    this.setState(prevState => ({
      dislikeActive: !prevState.dislikeActive,
      likeActive: false,
    }))
  }

  activeSaved = () => {
    this.setState(prevState => ({
      savedActive: !prevState.savedActive,
      dislikeActive: false,
      likeActive: false,
    }))
  }

  renderFailureView = () => (
    <NotFoundContainer className="jobs-error-view-container">
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="jobs-failure-img"
      />
      <Heading className="jobs-failure-heading-text">
        Oops! Something Went Wrong
      </Heading>
      <Desc className="jobs-failure-description">
        We are having some trouble to complete your request.Please try again.
      </Desc>
      <NavLink>
        <Retry className="button" type="button" onClick={this.getVideos}>
          Retry
        </Retry>
      </NavLink>
    </NotFoundContainer>
  )

  renderJobsListView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {videosList} = this.state
        const {
          title,
          videoUrl,
          viewCount,
          publishedAt,
          description,
          name,
          profileImageUrl,
          subscriberCount,
        } = videosList

        const {addVideoItem, isDarkTheme} = value
        const onAddToCart = () => {
          addVideoItem({...videosList})
        }

        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        const {likeActive, dislikeActive, savedActive} = this.state
        const likeColor = likeActive ? '#2563eb' : '#64748b'
        const dislikeColor = dislikeActive ? '#2563eb' : '#64748b'
        const savedColor = savedActive ? '#2563eb' : '#64748b'
        const savedText = savedActive ? 'Saved' : 'Save'

        return (
          <MainContainer data-testid="videoItemDetails" bgColor={bgColor}>
            <ReactPlayer url={videoUrl} controls />
            <Heading textColor={textColor}>{title}</Heading>

            <ViewsAndIcons>
              <RowAlign>
                <Desc textColor={textColor}>{viewCount}</Desc>
                <Desc textColor={textColor}>{publishedAt}</Desc>
              </RowAlign>
              <RowAlign>
                <Button type="button">
                  <AiOutlineLike
                    size="25"
                    onClick={this.activeLiked}
                    color={likeColor}
                  />
                  <Desc textColor={textColor}>Like</Desc>
                </Button>
                <Button type="button">
                  <AiOutlineDislike
                    size="25"
                    onClick={this.activeDisLiked}
                    color={dislikeColor}
                  />
                  <Desc textColor={textColor}>DisLike</Desc>
                </Button>
                <Button
                  type="button"
                  className="save-button"
                  onClick={onAddToCart}
                >
                  <BiListPlus
                    size="25"
                    onClick={this.activeSaved}
                    color={savedColor}
                  />
                  <Desc textColor={textColor}>{savedText}</Desc>
                </Button>
              </RowAlign>
            </ViewsAndIcons>
            <RowAlign>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <ColumnAlign>
                <Desc textColor={textColor}>{name}</Desc>
                <Desc textColor={textColor}>{subscriberCount}</Desc>
                <Desc textColor={textColor}>{description}</Desc>
              </ColumnAlign>
            </RowAlign>
          </MainContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderAllProducts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <MainContainer className="all-products-section">
        <Header />
        <NavbarLargeContainer className="nav-bar-large-container">
          <Sidebar />
          {this.renderAllProducts()}
        </NavbarLargeContainer>
      </MainContainer>
    )
  }
}

export default VideoItemDetails
