import { Logout, Login, Dashboard } from "./components";
import { useAuth0 } from "@auth0/auth0-react";
// styles
import "./App.css";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Login />
      <Dashboard />
      <h2>something completely unrelated to occupy the screen</h2>
      <Logout />
    </>
  );
}

export default App;
