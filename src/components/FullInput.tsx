import React, {ChangeEvent, useState} from 'react';
 
type  fullInputType={
    addMessage:(title:string)=>void
}

export const FullInput =(props:fullInputType)=>{
    
let [title,setTitle] = useState('')



const onChangeInputHandler=(event: ChangeEvent<HTMLInputElement>)=>{
      setTitle(event.currentTarget.value)
}

const onButtonClickHandler=()=>{
     props.addMessage(title)
     setTitle('')
}

    return(
        <div>
        <input value={title} onChange={onChangeInputHandler}/>
        <button onClick={onButtonClickHandler}>X</button>
        </div>
    )
}