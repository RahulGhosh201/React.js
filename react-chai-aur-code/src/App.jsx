import Chai from "./chai";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

function App() {
  const userName = "Chai aur code";
  return (
    <>
      <h1>My userName: {userName}</h1>
      {/* inside the curly braces we write evaluated expression */}
      <MyApp />
    </>
  );
}

export default App;
