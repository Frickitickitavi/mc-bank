import TodoStats from './TodoStats';

export default function TodoItem({ floors, todoPath, setPath }) {
    const room = todoPath[todoPath.length - 1];

    return <div className="todo-item">
        <div className="todo-top">
            <span className="todo-name">
                {room.name}
            </span>
            <span className="todo-buttons">
                <button>Place</button>
                {room.subrooms ?
                    <button onClick={() => {
                        setPath(todoPath);
                    }}>{">"}</button>
                    : []
                }
            </span>
        </div>
        <br />
        <TodoStats floors={floors} todoPath={todoPath} />
        <div>_____________________________________</div>
    </div>
}