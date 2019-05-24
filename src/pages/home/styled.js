import styled from 'styled-components';

export const HomeWrapper = styled.div` 
  width: 960px;
  margin: 0 auto;  
  overflow: hidden;
  background-color: yellow;
`
export const HomeLeft = styled.div` 
  width: 625px;
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  background-color: red;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div` 
  width: 270px;
  float: right;
  background-color: green;
`

export const TopicWrapper = styled.div` 
  padding: 20px 0;
  overflow: hidden;
  margin-left: -10px;
`

export const TopicItem = styled.div` 
  float: left;
  background-color: red;
  padding-right: 10px;
  height: 32px;
  line-height: 32px;
  background-color: #f7f7f7;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 18px;
  .topic-pic {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`
