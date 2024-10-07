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
            showBeacons: true,
            showBeaconZones: true,
            showBlockGrid: true,
            showChunkGrid: true
        }
    );

    // A-G contain Rooms and Hallways
    // Global contains Beacons and Districts
    const [floors, setFloors] = useState({
        A: [<Room x={5} y={10} w={15} h={20} room={{ name: "Main Lobby" }} />], // depth 0
        B: [<Room x={39} y={50} w={50} h={30} room={{ name: "Items" }} /> ], // depth 1
        C: [], // depth 2
        D: [], // depth 3 w/o 4
        E: [], // depth 3 w/ 4
        F: [], // depth 4
        G: [], // depth 5
        Global: [<Beacon x={50} y={50} config={config} />]
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

    const [activeFloor, setActiveFloor] = useState("A");

    


    const boxes = [];
    for (const structure of floors[activeFloor]) {
      boxes.push(structure);
    }
    for (const structure of floors.Global) {
        boxes.push(structure);
    }

  return (
    <div className="App">
        <header className="App-header">
              <div>
                <TodoExplorer floors={floors} activeFloor={activeFloor} setActiveFloor={setActiveFloor} path={path} setPath={setPath} config={config} />
                <Canvas boxes={boxes} config={config} />
                <Options config={config} updateConfig={setConfig} activeFloor={activeFloor} setActiveFloor={setActiveFloor} />
            </div>
      </header>
    </div>
  );
}

export default App;
