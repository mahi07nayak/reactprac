// import React from "react";

// function App() {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//       <p>Welcome to your first React app.</p>
//     </div>
//   );
// }

// export default App;





import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your first React app.</p>
    </div>
  );
}

// Render App component into the root div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
