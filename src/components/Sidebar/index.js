import {Component} from 'react'
import {
  NavLink,
  SidebarContainer,
  NavLinksList,
  NavLinkItem,
  SocialContainer,
  ImageContainer,
  Desc,
  LogosImage,
} from './styledComponents'
import NxtWatchContext from '../../Context'

class Sidebar extends Component {
  //   state = {
  //     isActive: false,
  //   }

  //   isHomeActive = () => {
  //     this.setState({isActive: true})
  //   }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? 'black' : '#fff'
          const linkColor = isDarkTheme ? '#fff' : 'black'

          return (
            <SidebarContainer bgColor={bgColor}>
              <NavLinksList>
                <NavLinkItem onClick={this.isHomeActive}>
                  <NavLink linkColor={linkColor} to="/">
                    Home
                  </NavLink>
                </NavLinkItem>

                <NavLinkItem>
                  <NavLink linkColor={linkColor} to="/trending">
                    Trending
                  </NavLink>
                </NavLinkItem>
                <NavLinkItem>
                  <NavLink linkColor={linkColor} to="/gaming">
                    Gaming
                  </NavLink>
                </NavLinkItem>
                <NavLinkItem>
                  <NavLink linkColor={linkColor} to="/saved-videos">
                    Saved Videos
                  </NavLink>
                </NavLinkItem>
              </NavLinksList>

              <SocialContainer>
                <Desc linkColor={linkColor}> Contact Us</Desc>
                <ImageContainer>
                  <LogosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <LogosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <LogosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ImageContainer>
                <Desc linkColor={linkColor}>
                  Enjoy! Now to see your channels and recommendations!
                </Desc>
              </SocialContainer>
            </SidebarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Sidebar
