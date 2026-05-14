// todos will be an array from the render side so destructuring needed={todos}

export function Todos({ todos }) {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h3>{todo.description}</h3>
                        <button>mark as done</button>
                    </div>
                )
            })}
        </div>
    )
}