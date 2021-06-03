import React from "react";
import "./App.css"
import Home from "./components/Home";
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types";
import { connect, useDispatch, useSelector} from "react-redux";
import counterActionInc from "./action/counterActionInc";
import { useRouter } from "found"

const AppLatest = ({router}) => { 

  const dispatch = useDispatch();
  const {data} = useSelector(state => state.counter)
  const {match} = useRouter()

  console.log(match.location);
  
  const handleInc = () => {
    dispatch(counterActionInc(1));
  }
  
  const  handleRoute = () => {
    router.push("/cart")
  }
    return (
      <div className = "App">
        
        <div>
                {data}
        </div>
        <button onClick = {handleInc}> Increment </button>
        <button onClick = {handleRoute}> route </button>
      </div>
    );
  
}

// const mapStateToProps = (state) => ({
//   result:state.counter.data
// })
// const mapDispatchToProps = (dispatch) => ({
//   counterAction: (payload) =>   dispatch(counterActionInc(payload))
// })

// AppLatest.PropTypes = {
//   router: PropTypes.object.isRequired
// }
// AppLatest.defaultProps = {}
export default AppLatest;
//export default connect(mapStateToProps,null)(withRouter(AppLatest));

