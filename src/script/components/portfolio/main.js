import React from "react"
import * as Style from "./style.js"
import * as Global from "../global/style"
import * as FontAwesome from 'react-icons/lib/fa'
import Portfolios from "./data"
import HomeButton from "../global/HomeButton"

export default class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.filter = this.filter.bind(this);
    this.isContain = this.isContain.bind(this);
    this.state = {init: false, hashtagSearch: ""};
  }

  filter(e){
    this.setState({
      hashtagSearch: e.target.value + ""
    });
  }

  isContain(arr){
    for (let i = 0 ; i < arr.length ; i++){
      if (arr[i].toUpperCase().indexOf(this.state.hashtagSearch.toUpperCase()) >= 0 ){
        return true;
      }
    }
    return false;
  }

  render(){
    return (
      <Global.Container type="large" active={this.state.init}>
        <HomeButton history={this.props.history} setActive={(init)=>this.setState({init})} />
        <Global.Title>
          <h2>Portfolio</h2>
          <Global.HR />
          <h3>These are my after-school projects And I'm proud of them <FontAwesome.FaHeart /></h3>
        </Global.Title>
        <Style.Filter>
          <Style.FilterInput onChange={this.filter.bind(this)} list="hashtags"/>
          <HashTagList />
        </Style.Filter>

        <Style.Portfolio>
          {
            Portfolios.map((portfolio, index)=>{

              if (this.state.hashtagSearch !== "" && !this.isContain(portfolio.keywords)){
                return null;
              }
              return(

                <div key={index}>
                  <Style.Title>
                    {FontAwesome[portfolio.icon]()}
                    <a href={portfolio.link}>{portfolio.title}</a>
                  </Style.Title>
                  {
                    portfolio.keywords.map((keyword, index)=><Style.Tag key={index}>{keyword}</Style.Tag>)
                  }
                  <Style.Description>
                  {
                    portfolio.description.map((intro, index)=><li key={index}>{intro}</li>)
                  }
                  </Style.Description>
                </div>
              );
            })
          }

        </Style.Portfolio>
      </Global.Container>
    );
  }
}


const HashTagList = function(props){
  var currentHashtags = {};
  return(
    <datalist id="hashtags">
      {
        Portfolios.map((portfolio)=>{
          return portfolio.keywords.map((keyword, index)=>{
            if (currentHashtags[keyword] == undefined){
              currentHashtags[keyword] = true;
              return <option key={index} label={keyword} value={keyword}></option>
            }
          })
        })
      }
    </datalist>
  );
}
