import React, { useEffect, useState } from "react";
import  Message  from "./Message";
import "./effects.css";
const SimpleForm = () => {
   const [formState, setFormState] = useState({
      name: "",
      email: "",
   });
   const { name, email } = formState;
   useEffect(() => {
    //   console.log("Hey!");
   }, []);

   useEffect(() => {
    // console.log("Form se cambio");
 }, [formState]);
 useEffect(() => {
    // console.log("El email cambio");
 }, [email]);
  
 
   const handleInputChange = ({target}) => {
    setFormState({...formState,[target.name]:target.value})   
   }
   return (
      <>
         <h1>useEfffect</h1>
         <hr />
         <div className="form-group">
            <input
               type="text"
               name="name"
               className="form-control"
               placeholder="Ingresa tu nombre"
               autoComplete="off"
               value={name}
               onChange={handleInputChange}
            />  
         </div>
         <br/>
         <div className="form-group">
            <input
               type="text"
               name="email"
               className="form-control"
               placeholder="Ingresa tu email"
               autoComplete="off"
               value={email}
               onChange={handleInputChange}
            />
         </div>
         {name === '123' && <Message />}
      </>
   );
};

export default SimpleForm;
