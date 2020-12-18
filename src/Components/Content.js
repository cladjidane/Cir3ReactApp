import React from "react";

const Content = () => (
  <main className="content">
    <h1>Bienvenue</h1>
    <p> Pour ce cours nous allons utiliser 2 outils : React-Router-Dom et JSON Server.
    </p>
    <p>
      <b>React-Router-Dom</b> qui va nous permettre de créer des "pages" (routeur)
    </p>
    <pre>
      # Installation<br />
    npm install react-router-dom
    </pre>
    <p>
      <b>JSON-Server</b> pour simuler rapidement une API. dans notre cas, nous développerons plutôt cette API avec Symfony.
    </p>

    <pre>
      # Installation<br />
    npm install -g json-server
    </pre>
  </main>
);
export default Content;
