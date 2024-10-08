import TodoStats from './TodoStats';
import TodoItem from './TodoItem';


export default function TodoExplorer({ bankContents, config, path, setPath }) {
    if (!path) return <span className="todo-explorer">Loading...</span>;    

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
        {path[path.length - 1].subrooms.map(room => <TodoItem bankContents={bankContents} todoPath={path.concat(room)} setPath={setPath} />)  }
    </span>
}