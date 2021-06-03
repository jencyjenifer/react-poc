import React from "react";
import "./App.css"
import Home from "./components/Home";
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import counterActionInc from "./action/counterActionInc"

class App extends React.Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      userName: props.userName
    };
    this.loginUser = this.loginUser.bind(this)
  }
  handleChange = (e) => {
    this.setState({
      userName : e.target.value
    });
    //console.log(this.state.userName);
  }

  loginUser = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
    this.props.history.push("/header/"+this.state.userName);
  };
  
  // handleInc = () => {
  //   this.props.counterAction(1);
  // }
  render() {
    const {result} = this.props;
    return (
      <div className = "App">
        <Home />
        <h>Enter Your Name </h>
        <input type="text"  name = "userName" onChange={this.handleChange}></input>
        <br></br>
        <br></br>
        <button onClick = {this.loginUser}> Login </button>
        
        {/* <button onClick = {this.handleInc}> Rate US </button>
        <div>
                {result}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  result:state.counter.data
})
const mapDispatchToProps = (dispatch) => ({
  counterAction: (payload) =>   dispatch(counterActionInc(payload))
})

//export default withRouter(App);
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));
