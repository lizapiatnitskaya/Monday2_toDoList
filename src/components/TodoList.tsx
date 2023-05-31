import React, {useState} from 'react';
import type {FilterValuesType} from './../App';

type PropsType={
    title:string
    tasks:Array<TaskType>
    removeTask:(id: number)=>void
    changeFilter:(value: FilterValuesType)=>void
    removeAllTasks:()=>void
}

export type TaskType={
    id:number
    title:string
    isDone:boolean
}

export const TodoList=(props:PropsType)=>{
    return(
        <div>
            {props.title}
              {props.tasks.map((el:TaskType)=>{
                return(
                    <li key={el.id}>
                    <button onClick={()=>props.removeTask(el.id)}>X</button>
                       <input type="checkbox" checked={el.isDone}/>
                       <span>{el.title}</span>
                    </li>
                )
              })}
            <button onClick={()=>props.changeFilter("all")}>All</button>
            <button onClick={()=>props.changeFilter("active")}>Active</button>
            <button onClick={()=>props.changeFilter("completed")}>Completed</button>
            <button onClick={()=>props.changeFilter("three")}>Three tasks</button>
            <div>
            <button onClick={()=>props.removeAllTasks()}>Remove All</button>    
            </div>
        </div>
    )
}
