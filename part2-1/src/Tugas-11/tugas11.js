import React, {Component} from 'react'


class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 101,
      hour: new Date().toLocaleTimeString()
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }  
    this.timerID = setInterval(
        () => this.tick(),
        1000)
  }

  componentWillUnmount(){
        clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      hour: new Date().toLocaleTimeString()
    });
    if (this.state.time === 0) {
      
      let root = document.querySelector('#root')
      root.parentNode.removeChild(root)
    }
  }


  render(){
    return(
      <>
        <div style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
            <h1>Sekarang Jam : {this.state.hour}</h1>
            <h1>
              {`Hitung Mundur: ${this.state.time}`}
            </h1>
        </div>
      </>
    )
  }
}

export default Timer