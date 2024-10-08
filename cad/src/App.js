import { useState, useEffect } from 'react';
import './App.css';
import Beacon from './Beacon';
import Canvas from './Canvas';
import Options from './Options';
import Room from './Room';
import TodoExplorer from './TodoExplorer';


function App() {

    const [config, setConfig] = useState(
        {
            activeFloor: 0,
            showBeacons: true,
            showBeaconZones: true,
            showBlockGrid: true,
            showChunkGrid: true,
            layersAbove: 1,
            layersBelow: 1
        }
    );
    
    const [bankContents, setBankContents] = useState({
        floors: [
            [<Room x={5} y={10} w={15} h={20} room={{ name: "Main Lobby" }} />], // depth 0
            [<Room x={39} y={50} w={50} h={30} room={{ name: "Items" }} />], // depth 1
            [<Room x={100} y={100} w={40} h={20} room={{ name: "Brewing" }} />], // depth 2
            [], // depth 3 w/o 4
            [], // depth 3 w/ 4
            [], // depth 4
            [] // depth 5
        ],
        floorNameToNum: function (x) { return ["A", "B", "C", "D", "E", "F", "G"].indexOf(x) },
        floorNumToName: function (i) { return ["A", "B", "C", "D", "E", "F", "G"][i] },
        hallways: [],
        global: [<Beacon x={50} y={50} config={config} />]
    });

    const [path, setPath] = useState(null);

    useEffect(() => {
        fetch('2nb.json')
            .then(r => r.text())
            .then(t => {
                const data = JSON.parse(t);
                setPath([{ name: "", subrooms: [data] }]);
            })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <TodoExplorer bankContents={bankContents} path={path} setPath={setPath} config={config} />
                    <Canvas bankContents={bankContents} config={config} />
                    <Options floorNumToName={bankContents.floorNumToName} config={config} updateConfig={setConfig} />
                </div>
            </header>
        </div>
    );
}

export default App;
