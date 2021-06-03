import React from "react"

function Home(props)  {

    const summary= (props.location)? props.location.state.detail : "";
    return(
        <div>
            <p>Welcome to Food App !</p>
            <p>Order your tasty foods</p>
            <hr></hr>
            <div>
             {summary}
            </div>
        </div>
     );
}

export default Home;