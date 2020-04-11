const App = () => {
    return React.createElement(
        "div",
        {
            id: "created-by-react"
        },
        React.createElement('h1', {}, "React BoookStore")
    )
}        

ReactDOM.render(React.createElement(App), document.getElementById('root'));