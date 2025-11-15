import React, { useState } from "react";

export const ToDoList = () => {
    let [task, setTask] = useState("");   //*String del input cambio de estado

    function addNewTask(event) {          //*recuperacion de string
        setTask(event.target.value)

    }

    let [list, setList] = useState([]) //* array cambio de estado


    function addNewArrayElementToList() {       //* agregar task al array
        setList([...list, task])
        setTask("")

    }

    let eliminateListElement = (indexRemove) => {
        let newList = list.filter((item, index) => {
            if (index !== indexRemove) {
                return true;
            } else {
                return false;
            }
        });
        setList(newList);
    };


    return (
        <div>

            <div className="row mt-4">
                <div className="col-6 m-auto">
                    <input type="text" className="form-control" value={task} onChange={addNewTask}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                addNewArrayElementToList();
                            }
                        }}

                    />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-6 m-auto">
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}> {item} <button onClick={() => eliminateListElement(index)}>borrar</button></li>

                        ))}
                    </ul>
                    <p>{list.length + " task"}</p>

                </div>
            </div>
        </div>


    )


}


