import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'

import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import NxtWatchContext from './Context'
import './App.css'

class App extends Component {
  state = {
    videoList: [],
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addVideoItem = product => {
    const {videoList} = this.state
    const productObject = videoList.find(eachItem => eachItem.id === product.id)
    if (productObject) {
      this.setState(prevState => ({
        videoList: prevState.videoList.map(eachItem => {
          if (productObject.id === eachItem.id) {
            return {...eachItem}
          }
          return eachItem
        }),
      }))
    } else {
      const updatedCartList = [...videoList, product]
      this.setState({videoList: updatedCartList})
    }
  }

  render() {
    const {videoList, isDarkTheme} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          videoList,
          isDarkTheme,
          toogleTheme: this.toggleTheme,
          addVideoItem: this.addVideoItem,
          removeVideoItem: this.removeVideoItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
