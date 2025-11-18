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
        <div className="row">
            <div className="col-6 bg-white m-auto mt-2 border border-secondary paper">
                <div className="row">
                    <div className="col-12 m-auto pb-2">
                        <div className="row">
                            <div className="col-12 m-auto mt-3 ps-5 pe-1">
                                <input type="text" className="form-control border border-0" placeholder="What needs to be done?"value={task} onChange={addNewTask}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            addNewArrayElementToList();
                                        }
                                    }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <>
                    {list.map((item, index) => (
<div className="row">
                
                    
                        <div className="col-12 p-3 border-top border-secondary styleTaskContainer" key={index}> 
                            <div className="row">
                                <div className="col-6">
                        <span className="ps-5 pe-1 listItemStyle">{item}</span>
                        </div>
                        <div className="col-2 ms-auto">
                       <span><i className="fa-solid fa-x text-danger showAndHiddenButton" onClick={() => eliminateListElement(index)}></i></span> 
                       </div>
                        </div>
                        </div>
                           
  </div>
            
                        ))}
            </>
            <div className="row">
                <div className="col-12  m-auto border-top border-secondary ">
                    <p className="itemBrandStyle">{list.length + " item left"}</p>
                </div>
            </div>

        </div>
            </div >


    )


}


