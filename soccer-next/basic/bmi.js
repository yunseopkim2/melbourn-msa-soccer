import React,{useState} from "react"
import Layout from "./components/Layout";

export default function Bmi(){
 
    const [inputs, setInputs] = useState({})
     const {name, weight, height} = inputs;
    
    const handleChange = e =>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })
    }
    const handleClick = e => {
        e.preventDefault()
        const calcRequest = {name, weight, height}
        alert(`계산: ${JSON.stringify(calcRequest)}`)
    }
    return <Layout>
    <h1>BMI 측정기</h1>
    <div>
    <label><b>Username</b></label><br/>
    <input  name="name" type="" onChange={handleChange}/><br/>
    <label><b>height(cm)</b></label><br/>
    <input  name="height" type="" onChange={handleChange}/><br/>
    <label><b>weight(kg)</b></label><br/>
    <input  name="weight" type="" onChange={handleChange}/><br/>
            <button onClick={handleClick}>BMI 측정</button>
    <div>결과: {name}, {height}cm, {weight}kg</div>
    </div>
    </Layout>
}