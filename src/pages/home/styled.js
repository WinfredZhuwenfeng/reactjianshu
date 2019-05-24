import styled from 'styled-components';

export const HomeWrapper = styled.div` 
  width: 960px;
  margin: 0 auto;  
  overflow: hidden;
`
export const HomeLeft = styled.div` 
  width: 625px;
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div` 
  margin-top: 30px;
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div` 
  padding: 20px 0;
  overflow: hidden;
  margin-left: -10px;
`

export const TopicItem = styled.div` 
  float: left;
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

export const ListWrapper = styled.div` 
  padding: 20px 0;
  overflow: hidden;
`

export const ListItem = styled.div` 
  overflow: hidden;  
  padding-right: 10px;
  line-height: 20px; 
  font-size: 14px;
  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
  }
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #dcdcdc;
`

export const ListInfo = styled.div` 
  padding: 10px;
  h3 {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
  }
  p {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`
export const RecommendWrapper = styled.div` 
  width: 280px;
`

export const RecommendItem = styled.div` 
  width: 280px;
  height: 50px;
  background: url(${(props)=>props.imgUrl});
  background-size: contain;
  margin-bottom: 10px;
`

export const WriterWrapper = styled.div` 
  width: 280px;
`

export const WriterItem = styled.div` 
  width: 280px;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #dcdcdc;
`
