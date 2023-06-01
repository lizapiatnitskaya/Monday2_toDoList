import React, {useState} from 'react';
import './App.css';
import { FullInput } from './components/FullInput';

type MessageType={
    message:string
}



function App() {
    let [message, setMessage] = useState(Array<MessageType>)

    const addMessage =(title:string)=>{
        let newMessage={message:title}
        setMessage([...message,newMessage])
    }  

return(
    <div>
        <FullInput addMessage={addMessage}/>
        {message.map((el:MessageType,index:number) => {
            return(
              <div key="index">{el.message}</div>  
            )
        })}
    </div>
) 
}
export default App;