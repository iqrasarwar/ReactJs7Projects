//import App from "./App"

function Header(){
   return (
      <div className = "nav--bar">
         <img src="./images/trollFace.png" className = "nav--img" />
         <p className = "nav--title">Meme Generator</p>
         <p className = "nav--sub-title">React Project 5</p>
      </div>
   )
}

function Meme() {
   //creating state for the meme image component
    //its state changes on button click (new image fetched)
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    //creating state for all memes arr comming from api
    //its state chnges on loading images from api only on refresh bcz of [] dependencies
    const [allMemes, setAllMemes] = React.useState([])
//fetching all memes data and setting in state
//used "useEffect" to prevent side eeffects
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
//choose a meme image randomly and set state accordingly

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }
//handle every change by changing value in state
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
//input form
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}








function App(){
   return (
      <div>
         <Header />
         <Meme />
      </div>
   )
}

ReactDOM.render(<App />,document.getElementById("root"))
