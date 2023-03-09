import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

const BASE_URL = "https://ktor-playground.herokuapp.com"
const WS_BASE_URL = "wss://ktor-playground.herokuapp.com"

function App() {
    useEffect(() => {
        (async () => {
            const res0 = await fetch(BASE_URL + "/respond_cookie", {
                "method": "GET",
                "credentials": "include"
            })
            console.log(await res0.text())
            const res1 = await fetch(BASE_URL + "/set_cookie", {
                "method": "GET",
                "credentials": "include",
            })
            console.log(res1)
            console.log(await res1.text())
            const res2 = await fetch(BASE_URL + "/respond_cookie", {
                "method": "GET",
                "credentials": "include"
            })
            console.log(res2)
            console.log(await res2.text())
            const socket = new WebSocket(WS_BASE_URL + "/sample_socket")
            socket.onmessage = (event) => {
                console.log(event.data);
            }
            socket.onopen = function (e) {
                console.log("Connection established");
                console.log(e);
            };
            socket.onclose = function (e) {
                console.log("Connection closed");
                console.log(e);
            };
            socket.onerror = function (e) {
                console.log("Error");
                console.log(e);
            };
        })()
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
