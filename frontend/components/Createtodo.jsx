export function Createtodo() {
    return (
        <div>

            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="Title" />

            <br></br>
            <br></br>
            <input type="text" style={{
                padding:10,
                margin:10
            }} placeholder="Description" />
            <br></br>
            <br></br>
            <button style={{
                margin:10,padding:10,height:50
            }}>add task</button>


        </div>
    )
}

