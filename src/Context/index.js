import React from 'react'

const NxtWatchContext = React.createContext({
  videoList: [],
  isDarkTheme: false,
  toggleTheme: () => {},
  addVideoItem: () => {},
  removeVideoItem: () => {},
})

export default NxtWatchContext
