//Importing the react library
import React from "react";

function Meme() {

     // Define state variables using the useState hook.

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    //Placeholder image
    randomImage: "http://i.imgflip.com/1bij.jpg", 
  });
  // allMemes is an array that will hold all the memes fetched from the API.
  const [allMemes, setAllMemes] = React.useState([]);

  //API fetching using useEffect to manage side-effects
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
      // Empty dependency array ensures this runs only once on mount.
  }, []);

// Function to get a new random meme image.
  function getMemeImage() {
    // Generates a random index based on the length of the allMemes array.
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
// Function to handle changes to the input fields.
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
// Return the JSX for rendering the Meme component.
  return (
    <main>
        {/* Form for input fields */}
      <div className="form">
        {/* Top Text field */}
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        {/* Bottom text field */}
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        {/* Random meme generator button */}
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      {/* Display section for the meme image and text. */}
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

//It is exported so that other parts of the application can have access to it
export default Meme;
