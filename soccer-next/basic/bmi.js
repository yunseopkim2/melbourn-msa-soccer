import axios from "axios";
import React,{useState} from "react"
import Layout from "./components/Layout";

export default function Bmi(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})
    
    
    const handleChange = e =>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })
    }
     const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy+'/api/basic/bmi', inputs)
        .then(res => {
            const bmi = res.data
            document.getElementById('result-span').innerHTML = `
            <h3>이름 : ${bmi.name}</h3>
            <h3>키 : ${bmi.height} cm</h3>
            <h3>몸무게 : ${bmi.weight}kg</h3>
            <h3>BMI결과 : ${bmi.bmi}</h3>
            `
        })
        .catch(err => alert(err))
    }
       
    return (<div>
        <form action="" onSubmit={handleSubmit} >
            <h1>BMI</h1>
            <div>
                <label htmlFor="">이름</label>
                <input type="text" name="name" onChange={handleChange} /><br />

                <label htmlFor="">키</label>
                <input type="text" name="height" onChange={handleChange} /><br />

                <label htmlFor="">몸무게</label>
                <input type="text" name="weight" onChange={handleChange} /><br />
                <input type="submit" value="BMI 체크" /><br />
            </div>
        </form>
        <div> 결과 : <span id="result-span"></span></div>
    </div>)
}