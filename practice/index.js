// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
//  }

//  function MainContent() {
//     return (
//         <h1>This is my first react component</h1>
//     )
//  }

//  // Challenge: Create your own custom React component!
//  // Call it "MainContent", and have it return a simple
//  // h1 element that says "I'm learning React!"

//  // Afterward, render it below the Navbar (which
//  // you can do inside the ReactDOM.render call below)

//  ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
//  )

//  // const page = (
//  //     <div>
//  //         <h1 className="header">This is JSX</h1>
//  //         <p>This is a paragraph</p>
//  //     </div>
//  // )

//  /*
//  Challenge:

//  Create a navbar in JSX:
//      - Use the semantic `nav` element as the parent wrapper
//      - Have an h1 element with the brand name of your "website"
//      - Insert an unordered list for the other nav elements
//          - Inside the `ul`, have three `li`s for "Pricing",
//          "About", and "Contact"
//      - Don't worry about styling yet - it'll just be plain-looking HTML for now
//  */

//  let navbar = (
//     <nav>
//     <h1>MyLogo</h1>
//     <ul>
//     <li>Pricing</li>
//     <li>About</li>
//     <li>Contact</li>
//     </ul>
//     </nav>
//  )
//  let root= document.getElementById("root")
//  ReactDOM.render(
//     navbar,root
//  )
//  import React from "react"
//  import ReactDOM from "react-dom"

//  /**
//  Challenge: fix our code!

//  Don't forget, you're not using CDNs anymore, so there's no
//  global "ReactDOM" variable to use anymore.
//   */

//  const page = (
//      <div>
//          <h1>My awesome website in React</h1>
//          <h3>Reasons I love React</h3>
//          <ol>
//              <li>It's composable</li>
//              <li>It's declarative</li>
//              <li>It's a hireable skill</li>
//              <li>It's actively maintained by skilled people</li>
//          </ol>
//      </div>
//  )

//  ReactDOM.render(page, document.getElementById("root"))
//  // document.getElementById("root").append(JSON.stringify(page))

// /**
// Challenge:

// Part 1: Create a page of your own using a custom Page component

// It should return an ordered list with the reasons why you're
// excited to be learning React :)

// Render your list to the page

//  */

// function MyList()
// {
//     return (
//         <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//         </ul>
//     )
// }
// let root = document.getElementById("root");
// ReactDOM.render(<MyList/>,root);

// /**
// Challenge:

// Part 2:
// - Add a `header` element with a nested `nav` element. Inside the `nav`,
//   include a `img` element with the image of the React logo inside
//   (src="./react-logo.png") and make sure to set the width to something
//   more manageable so it doesn't take up the whole screen
// - Add an `h1` with some text describing the page. (E.g. "Reasons
//   I'm excited to learn React"). Place it above the ordered list.
// - Add a `footer` after the list that says:
//     "© 20xx <last name here> development. All rights reserved."
//  */
//     function Page() {
//         return (
//             <div>
//                 <header>
//                     <nav>
//                         <img src="./react-logo.png" width = "40px" />
//                     </nav>
//                 </header>
//                 <h1>
//                     Reasons I'm excited to learn React
//                 </h1>
//                 <ol>
//                     <li>It's a popular library, so I'll be
//                     able to fit in with the cool kids!</li>
//                     <li>I'm more likely to get a job as a developer
//                     if I know React</li>
//                 </ol>
//                 <footer>
//                 © 20xx Iqra sarwar development. All rights reserved.
//                 </footer>
//             </div>
//         )
//     }

//     ReactDOM.render(<Page />, document.getElementById("root"))
// /*Quiz!

// 1. What is a React component?
// A function that returns React elements. (UI)

// 2. What's wrong with this code?
// ```
// function MyComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```

// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }

// ReactDOM.render(<Header />, document.getElementById("root"))
// ```
// */
// /**
// Mini Challenge:
// Move the `header` element from Page into
// its own component called "Header"
// */
// function Header(){
//     return (
//         <header>
//                 <nav>
//                     <img src="./react-logo.png" width="40px" />
//                 </nav>
//             </header>
//     )
// }
// function Page() {
//     return (
//         <div>
//             <Header />
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's a popular library, so I'll be
//                 able to fit in with the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer
//                 if I know React</li>
//             </ol>
//             <footer>
//                 <small>© 2021 Ziroll development. All rights reserved.</small>
//             </footer>
//         </div>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))

// /**
// Challenge:

// - Move the `footer` into its own component called "Footer"
//   and render that component inside the Page component.
// - Move the `h1` and `ol` together into another component
//   called "MainContent" and render inside Page as well.
// */

// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }
// function Footer() {
//     return (
//         <footer>
//                 <small>© 2021 Ziroll development. All rights reserved.</small>
//             </footer>
//     )
// }
// function MainComponent() {
//     return (
//         <div>
//         <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's a popular library, so I'll be
//                 able to fit in with the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer
//                 if I know React</li>
//             </ol>
//             </div>
//     )
// }
// function Page() {
//     return (
//         <div>
//             <Header />
//             <MainComponent />
//             <Footer />
//         </div>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))
// /**
// Challenge:

// - Add an `ul` inside the Header's `nav` and create
//   the following `li`s: "Pricing", "About", & "Contact"
// - Using flexbox, line up the nav items horizontally, and
//   put them inline with the React logo.
// - Change the image styling to happen in CSS instead of in-line
//   For practice, add a new class to the image in order to style it
// */

// function Header() {
//     return (
//         <header>
//             <nav className="nav">
//                 <img src="./react-logo.png" className="logo" />
//                 <ul className="nav-items">
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }
// /*
// Challenge: Starting from scratch, build and render the
// HTML for our section project. Check the Google slide for
// what you're trying to build.

// We'll be adding styling to it later.

// Hints:
// * The React logo is a file in the project tree, so you can
//   access it by using `src="./react-logo.png" in your image
//   element
// * You can also set the `width` attribute of the image element
//   just like in HTML. In the slide, I have it set to 40px
//  */
// //   const funFacts = (
// //    <div>
// //      <img src="react-logo.png" alt="React Logo" height="40px" width="40px"/>
// //      <h1>Fun Facts About React</h1>
// //      <ul>
// //         <li>Was first released in 2013</li>
// //         <li>Was originally created by jordan walke</li>
// //         <li>Has well over 100k stars on GitHub</li>
// //         <li>Is maintained by FaceBook</li>
// //         <li>Powers thousdands of enterprise apps, including mobile apps</li>
// //      </ul>
// //   </div>
// // )
// // let root = document.getElementById("root");
// // ReactDOM.render(funFacts,root);

let boxes= [
    {
        id: 1,
        on: true
    },
    {
        id: 2,
        on: false
    },
    {
        id: 3,
        on: true
    },
    {
        id: 4,
        on: true
    },
    {
        id: 5,
        on: false
    },
    {
        id: 6,
        on: false
    },
]

//  TOGGGLE APP
function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    return (
        <div
            style={styles}
            className="box"
            onClick={props.toggle}
        >
        </div>
    )
}
function App() {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squareElements = squares.map(square => (
        <Box
            key={square.id}
            on={square.on}
            toggle={() => toggle(square.id)}
        />
    ))

    return (
        <main>
            {squareElements}
        </main>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))
