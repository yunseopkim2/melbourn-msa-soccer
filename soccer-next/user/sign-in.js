import React,{useState} from "react"

export default function Signin() {
    const [inputs, setInputs] = useState({})
 
     const { name, pw} = inputs;
    const handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value })
        
    }
    const handleClick = e => {
        
        e.preventDefault()
        const res = {name, pw}
        alert(`데이터셋 출력 :  ${ JSON.stringify(res) }` )
        
    }
   
     return <>
     <h1>로그인</h1>
     <div>
     <label><b>Username</b></label><br/>
     <input name="name" onChange={handleChange}/><br/>
     <label><b>Password</b></label><br/>
     <input name="pw" onChange={handleChange}/><br/>
     <button onClick={handleClick}>Login</button><br/>
     <label><input type = "checkbox"/>Remember me</label>
     </div>
     <div>
     <button>Cancel</button>
     </div>
     <span>Forgot <a>password?</a></span>
     
     <div>{name}님 비밀번호 {pw} 맞습니다</div>
     </>
  } 
