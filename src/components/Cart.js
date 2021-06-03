import React , { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import {table} from "react-bootstrap"

function Cart(props)  {
    let cartValue = [];
    let totalPrice;
    cartValue = (props.location.state.detail)? props.location.state.detail: "";
    const history = useHistory();
    
    const {data} = useSelector(state => state.counter)
    const [tableData, setTableData] = useState([]);
    // $(".classPrice").each(function(){
    //     totalPrice += parseInt($(this).html());
    //     //$(".someTotalPrice").html(totalPrice);
    // });

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:3000/Item')
            .then(
                
                response => response.json())
                .then(result => {
                    
                    const tableData = constructTableData(result);
                    setTableData(tableData);
                }
                )
         
    }, []);

    const getPriceByCartName = (name, apiData) => {
        // return apiData.map((data, key) => {
        //     if (data.name == name) {
        //         return data.price
        //     }
        // })
        let priceValue = apiData.find(x => (x. name == name)).price;
        return priceValue
    }

    const constructTableData = (apiData) => {
        let tableData = [];
        cartValue.map((each, key) => {
            const price = getPriceByCartName(each, apiData);
            tableData.push({name:each, price: price, quantity: data})
            
        })
        return tableData;
    }

    const handleOrder = () => {
        history.push({
            pathname: '/home',
            //search: '?query=abc',
            state: { detail: "Your order has been placed successfully"}
        });
    }
    
    return(
        <div >
            Your Cart has the following items
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th> Item </th>
                            <th> Quantity </th>
                            <th> Price (1 item) </th>
                            <th> Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((data, key) => (
                                <tr >
                                    <td>{data.name}</td>
                                    <td>{data.quantity}</td>
                                    <td>{data.price}</td>
                                    <td className="classPrice">{data.quantity * data.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={handleOrder}> Place Order </button>
            </div>
        </div>
     );
}

export default Cart;