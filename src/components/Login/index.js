import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginFormContainer,
  FormContainer,
  Label,
  Input,
  LoginButton,
  ErrorMsg,
  WebsiteLogo,
  InputContainer,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  togglePassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      showPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginFormContainer>
        <FormContainer onSubmit={this.onFormSubmit}>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Label htmlFor="username">USERNAME</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={this.onChangeUsername}
            placeholder="Username"
          />
          <Label htmlFor="password">PASSWORD</Label>
          <Input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={this.onChangePassword}
            placeholder="Password"
          />
          <InputContainer>
            <Input type="checkbox" id="checkbox" value={password} />
            <Label htmlFor="checkbox" onClick={this.togglePassword}>
              Show Password
            </Label>
          </InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorMsg>* {errorMsg}</ErrorMsg>}
        </FormContainer>
      </LoginFormContainer>
    )
  }
}

export default Login
