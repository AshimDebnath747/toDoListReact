import {useState,useEffect} from 'react'

const ToDoList = ()=>{
    const [list , setList] = useState([{task:"do", state:"none"}])
    useEffect(()=>{
         console.log(list)
    })
    const handleListAdd = ()=>{

        const newTask = document.getElementById('new-task').value
        if(newTask.trim()!= "")
        setList(l => [...l,{task:newTask,state:"none"}])
        document.getElementById('new-task').value = ""
    }
    const handleListRemove = (index)=>{
        setList(l => l.filter((_,i)=> i!= index))
    }
   const handleListDone = (index)=>{
      const update = [...list]
       update[index].state = 'line-through'
       setList(update)
       console.log(list[index])  
    }
    const handleListUp = (index)=>{
        if(index != 0){
        const update = [...list]
        let temp = update[index-1];
        update[index-1] = update[index];
        update[index] = temp;
        setList(update);
        }
    }
    const handleListDown = (index)=>{
        if(index != list.length-1){
            const update = [...list]
            let temp = update[index+1];
            update[index+1] = update[index];
            update[index] = temp;
            setList(update);
            }
    }
    
    return(<>
     <input type="text" placeholder='Enter the task' id='new-task'/>
     <button onClick={handleListAdd}>Add Task</button>
     <ul>
        {list.map((e,i) => <li key={i}>
            <p style={{textDecoration : e.state}}>{e.task}</p>
            <button onClick={()=> handleListDone(i)}>Done</button>
             <button onClick={() => handleListRemove(i)}>remove</button>
             <button onClick={() => handleListUp(i)}>👆</button>
             <button onClick={() => handleListDown(i)}>👇</button>
             </li>)}
     </ul>
    </>)
}
export default ToDoList