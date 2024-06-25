import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import "./Form.css";

const Form = ({ add }) => {

    let [myErrors, setMyErrors] = useState({})

    let [myCustomer, setMyCustomer] = useState({
        id: "",
        name: "",
        sum: "",
        delection: "",
        date: ""
})
    let navigate = useNavigate();
    const change = (e) => {
        let inputValue = e.target.value;
        let inputName = e.target.name;
        let inputValueSum = e.target.value;
        let inputSum = e.target.sum;
        let copy = { ...myCustomer, [inputName]: inputValue, [inputSum]: inputValueSum };
        setMyCustomer(copy);
    }
    const check = () => {
        let err = {};
        if (!myCustomer.name)
            err.name = 'שם זה שדה חובה'
        if (myCustomer.sum < 0)
            err.sum = 'נא להקיש סכום גבוה מ-0 שח'
        return err;
    }
    console.log(myCustomer)
    const mySubmit = (e) => {
        e.preventDefault();
        let resulrt = check();
        console.log("resulrt: " + resulrt)
        if (Object.keys(resulrt).length == 0) {
            JSON.stringify(myCustomer)
            add(myCustomer);
        }
        else
            alert(setMyErrors(resulrt))

        navigate("/all");
    }
 
    return (<> 
         <div className="form">           
        <form onSubmit={mySubmit}>            
            <input name="name" className={myErrors.name ? "not valid" : " "} type="text" onChange={change} placeholder="שם" /><br />
            {myErrors.name ? <span className="error-message">{myErrors.name}</span> : null}
            <input name="sum" className={myErrors.sum ? "not valid" : " "} type="text" onChange={change} placeholder=" סכום התרומה   " /><br />
            {myErrors.sum ? <span className="error-message">{myErrors.sum}</span> : null}
            <input name="delection" type="text" onChange={change} placeholder="  הקדשה" /><br />
            <input type="Submit" />
        </form> 
        </div> 
        </>);
}

export default Form;

