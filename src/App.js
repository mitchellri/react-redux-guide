function App() {
  return (
    <div className="App">
      <div className="container">

        <h1>react-redux-guide</h1>
        <span>Created by: <a href="https://github.com/mitchellri">mitchellri</a></span>

        <div className="card">
          <div className="card-content">
            <div className="card-title">Getting started</div>
            <ol>
              <li>
                <a href="https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac">Install npm</a>
              </li>
              <li>
                Create website template (<a href="https://youtu.be/5QwNCX3UbXc?t=105">Complete React Tutorial (& Redux) #10 - Create React App</a>)
                <ol>
                  <li>
                    <code>npx create-react-app my-app</code>
                  </li>
                  <li>
                    In the new project folder: <code>npm start</code>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-title">Adding tools</div>
            <ol>
              <li>
                <a href="https://materializecss.com/getting-started.html">Add preset style classes</a> (<a href="https://youtu.be/r5b0spRlnlU?t=123">React, Redux & Firebase App Tutorial #3 - Setting Up</a>)
              </li>
              <ul>
                <li>
                  Read the materialize website for tutorials, and create some stylized elements (ex. <a href="https://materializecss.com/cards.html">Cards</a>, <a href="https://materializecss.com/helpers.html">Helpers</a>)
                </li>
              </ul>
            </ol>
          </div>
        </div>

        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3">React, Redux & Firebase App Tutorial</a>
          </li>
          <li>
            <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG">Complete React Tutorial (with Redux)</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
