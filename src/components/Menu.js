import React, { useState } from "react";
import Select from 'react-select';
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import counterActionInc from "../action/counterActionInc"
import counterActionDec from "../action/counterActionDec";
import "../App.css";
import pizza from "../pizza.png"

function Menu(props) {
    
    //const [quantity, setQuantity] = useState(1);
    const [selectedValue, setSelectedValue] = useState([]);
    const [selectedBevarage,setSelectedBevarage] =  useState([]);
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.counter) 
    
    const history = useHistory();
    var cartArr = [];
    const options = [
        { value: 'Paneer Tika Pizza', label: 'Paneer Tika Pizza'},
        { value: 'Golden Corn Pizza', label: 'Golden Corn Pizza'},
        { value: 'Veg Supreme Pizza', label: 'Veg Supreme Pizza'},
        { value: 'chicken Tikka', label: 'Chicken Tika Pizza'},
        { value: 'chicken Keema', label: 'Chicken Keema Pizza'},
        { value: 'chicken Peparoni Pizza', label: 'Chicken Peparoni Pizza'},
        
    ];
       
    const beverageOptions = [
        { value: 'pepsi', label: 'Pepsi (200ml bottle)'},
        { value: 'coke', label: 'Coke (200ml bottle)'}
    ] 
    const handleOptionChange =(e) => {
        setSelectedBevarage(Array.isArray(e) ? e.map(x => x.value) : []);
    }
    const handleChange=(e) => {
        setSelectedValue(Array.isArray(e) ? e.map(y => y.value) : []);
    }
    
    function addToCart(props) {
        cartArr.push(selectedValue);
        selectedValue.push(selectedBevarage);
        console.log(cartArr);
        //history.push("/cart/" + selectedValue);
        history.push({
            pathname: '/cart',
            //search: '?query=abc',
            state: { detail: selectedValue}
        });
    }
    const handleInc = () => {
        dispatch(counterActionInc(1));
    }
    const handleDec = () => {
        dispatch(counterActionDec(1));
    }
    return(
        <div>
            <p>Menu list !</p>
            <hr></hr>
            <img src={pizza} width="250" height="150"/>
            <ul>
                <li className="Menu-width"> 
                    Pizza
                    <br></br>
                    
                    <Select
                        className="dropdown"
                        placeholder="Select Your favourite pizza"
                        value={options.filter(obj => selectedValue.includes(obj.value))} // set selected values
                        options={options} // set list of the data
                        onChange={handleChange} // assign onChange function
                        isMulti
                        isClearable
                    />
                    
                </li>
                <br></br>
                <br></br>
                <li className="Menu-width">
                    Beverages
                    <br></br>
                    <Select
                        className="dropdown"
                        placeholder="Select beverages"
                        value={beverageOptions.filter(obj => selectedBevarage.includes(obj.value))} // set selected values
                        options={beverageOptions} // set list of the data
                        onChange={handleOptionChange} // assign onChange function
                        isMulti
                        isClearable
                    />
                </li>
                <br></br>
                <br></br>
                <p>
                    <button  onClick={handleInc}> + </button>
                         <span>  Quantity : {data}  </span>
                    <button onClick={handleDec}> - </button>
                </p>
            </ul>
            <br></br>
            <br></br>
            <button onClick = {addToCart}> Add to Cart </button>
            
        </div>
     );
}

export default withRouter(Menu);