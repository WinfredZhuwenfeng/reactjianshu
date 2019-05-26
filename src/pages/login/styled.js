import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
`
export const LoginBox = styled.div`
  width: 240px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  margin: 50px auto;
  padding: 20px 30px;
`

export const Input = styled.input` 
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  margin: 10px auto;
  color: #777;
`

export const Button = styled.div` 
  background-color: #3194d0;
  color: #fff;
  font-size: 18px;
  margin: 20px auto;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-radius: 15px;
  cursor: pointer;
`
