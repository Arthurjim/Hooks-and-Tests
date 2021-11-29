import React from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "./exampe..css";
const MultipleCustomHooks = () => {
    const {counter, increment}=useCounter(1);
   const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   const { loading, data } = state;
   const { author, quote } = !!data && data[0];
   return (
      <div>
         <h1>Breaking Bad Quotes</h1>
         <hr />
         {loading ? (
            <div className="alert alert-info text-center">
               <p>Loading...</p>
            </div>
         ) : (
             
            <blockquote className="blockquote text-end">
               <p className="mb-2">{quote}</p>
               <footer className="blockquote-footer">{author}</footer>
            </blockquote>
         )}

         <button className="btn btn-primary" onClick={()=>{increment(1)}}>
             Next Quote
         </button>
      </div>
   );
};

export default MultipleCustomHooks;
