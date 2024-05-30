// Importing the React library
import React from "react";
// Importing the Header component from the components directory
import Header from "./components/Header";
// Importing the Meme component from the components directory.
import Meme from "./components/Meme";

// Define the functional component named App.
function App() {

  return (
    // React fragments (<> </>) are used here to wrap the components without adding extra nodes to the DOM.
    <>
    {/* Renders Header component */}
      <Header />
      {/* Renders Meme component */}
      <Meme />
    </>
  );
}
// Export the App component to be used in the entry point of the application.
export default App;
