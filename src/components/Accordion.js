import { useState } from "react";

const Accordion = (props) => {
    
  const handleButton = () => {
    if(props.isVisible){
        props.changeShowDetails(-1)
    }else{

        props.changeShowDetails();
    }

  };
  const arrowDown = "transition-transform duration-500 transform rotate-180 cursor-pointer"
  const arrowUp = "transition-transform duration-500 transform rotate-0 cursor-pointer"
  return (
    <div className=" border-t border-x border-b-8 rounded-md">
      <div onClick={() => handleButton()} className="flex justify-between py-4 px-2 border rounded-t-md shadow-md">
        <div className="font-extrabold ">
          {props.title} ({props.item.length})
        </div>
        <div  className={`font-extrabold px-2 rounded-md ${props.isVisible?arrowDown:arrowUp}`}>^</div>
      </div>
      {props.isVisible && <div className="px-2">{props.children}</div>}
    </div>
  );
};

export default Accordion;
