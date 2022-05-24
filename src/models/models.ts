import { useReducer } from "react";

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// type TodoActions = {type:"add" ,payload:string} |{type:"add" ,payload:number }  |{type:"add" ,payload:number}

// const TodoReducer = (state: Todo[], actions: ()) => {}

// const TodoConsumer = () => {
//   const [state, dispatch] = useReducer()
// }
