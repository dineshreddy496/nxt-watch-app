import VideoItemView from '../VideoItemView'
import NxtWatchContext from '../../Context'
import {NavLinksList} from './styledComponents'

const VideoListView = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {videoList} = value

      return (
        <NavLinksList className="cart-list">
          {videoList.map(eachCartItem => (
            <VideoItemView
              key={eachCartItem.id}
              videoItemDetails={eachCartItem}
            />
          ))}
        </NavLinksList>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default VideoListView
