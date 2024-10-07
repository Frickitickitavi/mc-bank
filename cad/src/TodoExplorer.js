import TodoStats from './TodoStats';

export default function TodoExplorer({ floors, activeFloor, setActiveFloor, path, setPath }) {
    if (!path) return <span className="todo-explorer">Loading...</span>;

    function TodoItem({ room }) {
        return <div className="todo-item">
            <div className="todo-top">
                <span className="todo-name">
                    {room.name}
                </span>
                <span className="todo-buttons">
                    <button>Place</button>
                    { room.subrooms ?
                        <button onClick={() => {
                            setPath(path.concat(room));
                        }}>{">"}</button>
                        : []
                    }
                </span>
            </div>
            <br />
            <TodoStats floor="A" floors={floors} room={room} />
            <div>_____________________________________</div>
        </div>
    }

    

    return <span className="todo-explorer">
        <div className="todo-path-display"><button
            disabled={path.length <= 1}
            onClick={() =>
                {
                    setPath(path.slice(0, -1));
                }
            }>
            {"<"}
        </button> <span className="todo-path">{path.length > 1 ? path.map(r => r.name).join('/') : '/'}</span></div>
        <div>_____________________________________</div>
        {path[path.length-1].subrooms.map(room => <TodoItem room={room}/>) }
    </span>
}