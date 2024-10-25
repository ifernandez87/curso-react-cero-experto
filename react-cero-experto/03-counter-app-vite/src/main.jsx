import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css'
import { CounterApp } from './CounterApp';
import { HelloWorldApp } from './HelloWorldApp';


// Del index.html
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <HelloWorldApp/>
//     </React.StrictMode>
// )



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title = 'Titulo' subtitle='Subtitulo' />
    </React.StrictMode>
)


// Del index.html
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <CounterApp value={0} />
//     </React.StrictMode>
// )



