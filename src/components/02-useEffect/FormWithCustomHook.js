import React from "react";
import useForm from "../../hooks/useForm";
import "./effects.css";
const FormWithCustomHook = () => {

   const [formValues, handleInputChange] = useForm({
      name: "",
      email: "",
      password: "",
   });
   const { name, email, password } = formValues;

   const handleSubmit   = (e) => {
      e.preventDefault();
      console.log(formValues);
   }
   // const handleInputChange = ({target}) => {
   //  setFormState({...formState,[target.name]:target.value})   
   // }
   return (
      <form onSubmit={handleSubmit}>
         <h1>FormWithCustomHook</h1>
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
         <br/>
         <div className="form-group">
            <input
               type="password"
               name="password"
               className="form-control"
               placeholder="Ingresa tu Password"
               value={password}
               onChange={handleInputChange}
            />
         </div>
         <br/>
         <button type="submit" className="btn btn-primary col-12">Guardar</button>
      </form>
   );
};

export default FormWithCustomHook;
