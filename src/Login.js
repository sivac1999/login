import React,{useState} from "react"
import { useForm, SubmitHandler } from "react-hook-form"
function Login(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log(register);
    return(
        <div>
            <section id="form-section">
     <div class="form-container">
          <div class="from-head">    
            <h1>login Form</h1>
         </div>
   <form name="login-form" onSubmit={handleSubmit((data)=>{
      console.log(data);
   }
      )}>
      <div class="from-row">
           <div class="form-col">
            <div class="input-filed">
               <i class="fa fa-id-badge" aria-hidden="true"></i>
               <input type="text" {...register("name",{required:"Name is requries"})} class="first-name" id="loginname" placeholder="Name"/>
               {errors.name &&<p>{errors.name.message}</p>}
             </div>
             <div class="input-filed">
                <i class="fa fa-lock" aria-hidden="true"></i>
                <input for="reg-email"  {...register("psw",{required:"Password is requried",minLength:{value:8, message:"Length should be 8 character"}})} class="first-name" id="loginpass"type="Password" placeholder="Password"></input>
                {errors.psw &&<p>{errors.psw.message}</p>}
             </div>
             
           </div>
       </div>
       <div class="btn">
         <button id="log-btn" type="submit"></button>
      </div>
        
      </form>
      
     </div>
 </section>


 </div>
    )
}
export default Login