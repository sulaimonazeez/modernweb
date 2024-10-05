import React from 'react';
import "../App.css";

const Invoice = ({header, content}) =>{
  return (
    <section className="business--profile bs--profile">
       <h2 className="business--handler">{header}</h2>
       <p className="bs--content ds--colors ct--color">{content}</p>
    </section>
    );
}

export default Invoice;