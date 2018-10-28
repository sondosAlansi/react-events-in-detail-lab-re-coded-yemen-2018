// Code DelayedButton Component Here
export default class DelayedButton  extends React.Component{
  Clicking = (event) => {
    setTimeout(()=>{
      this.props.onDelayedClick(event)
    },
     this.props.delay
  )
    )
    }
render(){


  return(

    <button onClick={this.Clicking}>click</button>
  )
}

}
