import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import GamingVideoItem from '../GamingVideoItem'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NavLink,
  Retry,
  NotFoundContainer,
  Heading,
  Desc,
  Image,
  NavLinksList,
  LoaderContainer,
  MainContainer,
  NavbarLargeContainer,
} from './styledComponents'
import NxtWatchContext from '../../Context'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/gaming`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
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

  renderFailureView = () => (
    <NotFoundContainer className="jobs-error-view-container">
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <Heading className="jobs-failure-heading-text">
        Oops! Something Went Wrong
      </Heading>
      <Desc className="jobs-failure-description">
        We are having some trouble to complete your request.Please try again.
      </Desc>
      <NavLink>
        <Retry onClick={this.getVideos} type="button">
          Retry
        </Retry>
      </NavLink>
    </NotFoundContainer>
  )

  renderJobsListView = () => {
    const {videosList} = this.state

    return (
      <NavLinksList>
        {videosList.map(eachVideo => (
          <GamingVideoItem gamingVideos={eachVideo} key={eachVideo.id} />
        ))}
      </NavLinksList>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer className="products-loader-container" data-testid="loader">
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
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <MainContainer data-testid="gaming" bgColor={bgColor}>
              <Header />
              <NavbarLargeContainer>
                <Sidebar />
                {this.renderAllProducts()}
              </NavbarLargeContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
