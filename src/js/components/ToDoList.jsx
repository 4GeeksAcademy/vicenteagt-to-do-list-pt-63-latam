import React, { useState } from "react";

export const ToDoList = () => {
    let [task, setTask] = useState("");

    function addNewTask (event){
        setTask(event.target.value)
    
    }

    let [list, setList] = useState("")

    function addNewArrayElementToList () {    
        setList({task})
    }

    console.log(addNewArrayElementToList);

    return (
        <div>
            <form>
                <div className="row mt-4">
                    <div className="col-6 m-auto">
                        <input type="text" className="form-control" value={task} onChange={addNewTask}/>
                    </div>
                </div>
            </form>
            <div className="row mt-4">
                    <div className="col-6 m-auto">
            <h1>{list}</h1>
            </div>
            </div>
        </div>


    )


}

