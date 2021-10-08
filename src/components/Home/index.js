import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import VideoCard from '../VideoCard'
import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../Context'
import {
  NavbarLargeContainer,
  MainContainer,
  InputContainer,
  Input,
  ColumnAlign,
  Button,
  LoaderContainer,
  Retry,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  NavLinksList,
  NavLink,
  CloseButton,
  ModalContainer,
  AlignRow,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

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
        publishedAt: eachItem.published_at,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
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

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  getSearchResults = () => {
    this.getVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderFailureView = () => (
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="jobs-failure-img"
      />
      <Heading>Oops! Something Went Wrong</Heading>
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

  renderJobsListView = () => {
    const {videosList} = this.state
    const shouldShowProductsList = videosList.length > 0

    return shouldShowProductsList ? (
      <NavLinksList>
        {videosList.map(eachVideo => (
          <VideoCard videos={eachVideo} key={eachVideo.id} />
        ))}
      </NavLinksList>
    ) : (
      <MainContainer>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          className="no-products-img"
          alt="no videos"
        />
        <Heading className="no-products-heading">
          No Search results found
        </Heading>
        <Desc className="no-products-description">
          Try different keywords or remove search.
        </Desc>

        <Retry className="button" type="button" onClick={this.getVideos}>
          Retry
        </Retry>
      </MainContainer>
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
    const {searchInput} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <MainContainer data-testid="home" bgColor={bgColor}>
              <Header />
              <NavbarLargeContainer>
                <Sidebar />
                <ColumnAlign>
                  <ModalContainer>
                    {close => (
                      <ModalContainer>
                        <AlignRow>
                          <CloseButton
                            type="button"
                            data-testid="close"
                            onClick={() => close()}
                          >
                            <IoMdClose size={20} color="#231f20" />
                          </CloseButton>
                          <Image
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
                            alt="banner"
                          />
                          <Image
                            src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                        </AlignRow>
                      </ModalContainer>
                    )}
                  </ModalContainer>
                  <InputContainer>
                    <Input
                      value={searchInput}
                      type="search"
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                      onKeyDown={this.onEnterSearchInput}
                    />
                    <Button
                      data-testid="searchButton"
                      type="button"
                      onClick={this.getSearchResults}
                    >
                      <BsSearch />
                    </Button>
                  </InputContainer>

                  {this.renderAllProducts()}
                </ColumnAlign>
              </NavbarLargeContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
