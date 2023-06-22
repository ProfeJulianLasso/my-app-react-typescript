import LoginPage from "../Login/Pages/Login";

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>App</h1>
      <LoginPage />
    </div>
  );
}

export default App;
