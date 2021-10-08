import {withRouter} from 'react-router-dom'

import {HiOutlineLightBulb} from 'react-icons/hi'
import {BsMoon} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {ImProfile} from 'react-icons/im'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../Context'
import {
  HamburgerIconButton,
  ModalContainer,
  CloseButton,
  NavLinksList,
  NavbarLargeContainer,
  WebsiteLogo,
  NavLink,
  NavLinkItem,
  ProfileImg,
  AlignRow,
  NavbarSmallContainer,
  ConfirmButton,
  ModalDesc,
  AlignColumn,
  IconButton,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const websiteImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const bgColor = isDarkTheme ? 'black' : 'white'

      return (
        <>
          <NavbarLargeContainer background={bgColor}>
            <AlignRow>
              <NavLink to="/">
                <WebsiteLogo src={websiteImageURL} alt="website logo" />
              </NavLink>
              <NavLinksList>
                <NavLinkItem>
                  <IconButton
                    type="button"
                    onClick={onChangeTheme}
                    data-testid="theme"
                  >
                    {isDarkTheme ? (
                      <HiOutlineLightBulb size="30" color="white" />
                    ) : (
                      <BsMoon size="30" />
                    )}
                  </IconButton>
                </NavLinkItem>
                <NavLinkItem>
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavLinkItem>
                <NavLinkItem>
                  <Popup
                    modal
                    trigger={
                      <HamburgerIconButton
                        type="button"
                        data-testid="iconButton"
                      >
                        Logout
                      </HamburgerIconButton>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <ModalContainer>
                        <AlignColumn>
                          <ModalDesc>
                            Are you sure you want to logout?
                          </ModalDesc>
                          <AlignRow>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              onClick={() => close()}
                            >
                              Cancel
                            </CloseButton>

                            <ConfirmButton
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </AlignRow>
                        </AlignColumn>
                      </ModalContainer>
                    )}
                  </Popup>
                </NavLinkItem>
              </NavLinksList>
            </AlignRow>
          </NavbarLargeContainer>

          <NavbarSmallContainer background={bgColor}>
            <AlignRow>
              <NavLink to="/">
                <WebsiteLogo src={websiteImageURL} alt="website logo" />
              </NavLink>
              <NavLinksList>
                <NavLinkItem>
                  <IconButton type="button" onClick={onChangeTheme}>
                    {isDarkTheme ? (
                      <HiOutlineLightBulb size="30" color="white" />
                    ) : (
                      <BsMoon size="30" />
                    )}
                  </IconButton>
                </NavLinkItem>
                <NavLinkItem>
                  <ImProfile size="30" color="blue" />
                </NavLinkItem>
                <NavLinkItem>
                  <Popup
                    modal
                    trigger={
                      <HamburgerIconButton
                        data-testid="iconButton"
                        type="button"
                      >
                        <FiLogOut size="30" />
                      </HamburgerIconButton>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <ModalContainer>
                        <AlignColumn>
                          <ModalDesc>
                            {' '}
                            Are you sure you want to logout?
                          </ModalDesc>
                          <AlignRow>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              onClick={() => close()}
                            >
                              Cancel
                            </CloseButton>

                            <ConfirmButton
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </AlignRow>
                        </AlignColumn>
                      </ModalContainer>
                    )}
                  </Popup>
                </NavLinkItem>
              </NavLinksList>
            </AlignRow>
          </NavbarSmallContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default withRouter(Header)
