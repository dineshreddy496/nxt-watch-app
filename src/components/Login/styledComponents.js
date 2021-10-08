import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ffff;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  margin-bottom: 20px;
  align-self: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 1px 1px 1px 1px #f4f4f4;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  color: #616e7c;
  margin: 6px;
  font-weight: 500;
`
export const Input = styled.input`
  font-size: 16px;
  border: 1px solid #99bae2;
  background-color: transparent;
  color: #616e7c;
  border-radius: 2px;
  margin-bottom: 15px;
  padding: 8px 16px 8px 16px;
  outline: none;
  margin-top: 10px;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #3b82f6;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 20px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`
