function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">react-redux-guide</a>
        </div>
      </nav>

      <div className="container">

        <div className="row">
          <div className="col l12 m12 s12 center-align">
            <img src="https://cdn.discordapp.com/emojis/756650697793208391.gif" />
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-title">Getting started</div>
            <ol>
              <li>
                <a href="https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac">Install npm</a>
              </li>
              <li>
                Open Command Prompt
              </li>
              <ol>
                <li>
                  <code>npx create-react-app my-app</code>
                </li>
                <li>
                  <code>cd my-app</code>
                </li>
                <li>
                  <code>npm start</code>
                </li>
              </ol>
            </ol>
          </div>
          <div className="card-action">
            <a href="https://youtu.be/5QwNCX3UbXc?t=105">Complete React Tutorial (& Redux) #10 - Create React App</a>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-title">Adding CSS</div>
            <ol>
              <li>
                Open <code>/my-app/public/index.html</code>
              </li>
              <li>
                Paste this above <code>&lt;title&gt;React App&lt;/title&gt;</code>
                <div className="yellow">
                  <code>
                    <p>&lt;!-- Compiled and minified CSS --&gt;</p>
                    <p>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css&quot;&gt;</p>
                    <p>&lt;!-- Compiled and minified JavaScript --&gt;</p>
                    <p>&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js&quot;&gt;&lt;/script&gt;</p>
                  </code>
                </div>
              </li>
              <li>
                Open <code>/my-app/src/App.js</code>
              </li>
              <li>
                Create stylized elements (read documentation ex. <a href="https://materializecss.com/cards.html">Cards</a>, <a href="https://materializecss.com/helpers.html">Helpers</a>)
              </li>
            </ol>
          </div>
          <div className="card-action">
            <a href="https://youtu.be/r5b0spRlnlU?t=123">React, Redux & Firebase App Tutorial #3 - Setting Up</a>
            <a href="https://materializecss.com/getting-started.html" className="right">materialize</a>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l12 m12 s12">
              <span>Youtube Resources</span>
            </div>
          </div>
          <div className="row">
            <div className="col l4 m4 s4">
              <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3">React, Redux & Firebase App Tutorial</a>
            </div>
            <div className="col l4 m4 s4">
              <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG">Complete React Tutorial (with Redux)</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="footer-copyright">
            <div className="container">
              <div className="col l12 m12 s12">
                <span><a href="https://github.com/mitchellri">mitchellri</a> <a href="https://github.com/mitchellri/react-redux-guide">react-redux-guide</a></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
