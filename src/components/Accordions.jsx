import React, { useState }   from "react";

const Accordions = ({ accordions }) => {
    const [accordionId, setAccordionid]=useState([])

  const handlerAccordian=(newId)=>{
    setAccordionid((prevAccid)=>{
        return accordionId.includes(newId) ? accordionId.filter((acc_id)=> acc_id !==newId) : [...prevAccid,newId]
    })
  }
  console.log(accordionId, "==accid")
  return (
    <div>
     
       {accordions?.map(({ id, title, body }) => (
          <div className=" accordion " key={id}>
            <div className="accordion-title" onClick={()=>handlerAccordian(id)}>
              <h1>{title}</h1>
            </div>

        { accordionId?.map((accid , index)=>(
            accid===id &&(
                <div className="accordion-body" key={index} >
                <h3> {body}</h3>
                 </div>
               ))
            )
          
        }
     
          </div>
        ))}
    </div>
  );
};

export default Accordions;
