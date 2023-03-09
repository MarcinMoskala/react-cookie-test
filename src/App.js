import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
    useEffect(() => {
        (async () => {
          const res0 = await fetch("https://ktor-playground.herokuapp.com/respond_cookie", {
            "method": "GET",
            "credentials": "include"
          })
          console.log(await res0.text())
            const res1 = await fetch("https://ktor-playground.herokuapp.com/set_cookie", {
                "method": "GET",
                "credentials": "include",
                referrerPolicy: "unsafe-url"
            })
            console.log(res1)
            console.log(await res1.text())
            const res2 = await fetch("https://ktor-playground.herokuapp.com/respond_cookie", {
                "method": "GET",
                "credentials": "include"
            })
            console.log(res2)
            console.log(await res2.text())

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
