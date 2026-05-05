import "./App.css";
import { useState } from "react";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <main>
      <h1>Integration Test Login</h1>
      <Login onLogin={setUser} />
      {user && (
        <p role="status">
          Logged in as {user.email}
        </p>
      )}
    </main>
  );
}

export default App;
