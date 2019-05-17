import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  margin: 0 auto;
  min-width: 768px;
  max-width: 1440px;
`;

export const Logo = styled.a.attrs({href: '/'})`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  &.left {
    float: left;
    color: #333;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  line-height: 26px;
  padding: 15px;
  font-size: 17px;
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  background-color: #eee;
  border-radius: 19px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  height: 38px;
  margin-top: 9px;
  border: none;
  outline: none;
  color: #777;
  width: 170px;
  &.focused {
    width: 220px;
  }
`;


export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`;

export const Button = styled.div`
  font-size: 15px;
  text-align: center;
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  &.reg {
    border: 1px solid rgba(236,97,73,.7);
    color: #ea6f5a;
  }
  &.writting {
    background-color: #ea6f5a;
    color: #fff;
  }
  padding: 0 20px;
  box-sizing: border-box;
  margin-left: 20px;
`;

export const NavSerarchWrapper = styled.div`
  position: relative;
  float: left;
  .enter {
    transition: all .2s ease-out;
  } 
  .enter-active {
    width: 220px;
  }
  .enter-done {
    width: 220px; 
  }
  .exit {
    transition: all .2s ease-out;
  }
  .exit-active, .exit-done {
    width: 160px;
  } 
  .iconiconfontzhizuobiaozhun22 {
    position: absolute;
    right: 0;
    top: 9px;
    text-align: center;
    display: inline-block;
    width: 38px;
    height: 38px;
    line-height: 38px;
    border-radius: 50%;
  }
  .iconfont {
    &.focused {
      color: #fff;
      background-color: #666;
    }
  }
`;
