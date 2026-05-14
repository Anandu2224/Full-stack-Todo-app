import { useState } from "react";


export function Createtodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");



    return (
        <div>

            <input id="title" style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="Title" onChange={(v) => {
                const value = v.target.value;
                setTitle(value);
            }} />


            <br></br>
            <br></br>


            <input id="description" type="text" style={{
                padding: 10,
                margin: 10
            }} placeholder="Description" onChange={(v) => {
                const value = v.target.value;
                console.log(value)
                setDescription(value);
            }} />
            <br></br>
            <br></br>


            <button style={{
                margin: 10, padding: 10, height: 50
            }} onClick={() => {


                fetch('http://localhost:4000/addtask', {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(async (res) => {

                    const json = await res.json();
                    alert("Todo added");

                })
            }}>add task</button>


        </div>
    )
}

