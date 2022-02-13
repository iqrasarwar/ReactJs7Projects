//Information component
function Information(){
    return (
        <div className="infoDiv">
            <div className="info--img"></div>
            <div className="info">
                <p className="info--name">Iqra Sarwar</p>
                <p className="info--desig">Frontend Developer</p>
                <p className="info--website"><a href="https://www.linkedin.com/in/iqrasarwar/">IqraSarwar.com</a></p>
                <div className="info--buttons">
                    <button className="info--email info-btn"><img src="./images/email.png" className="info--icon" /><a href="mailto: iqrasarwarm012@gmail.com?subject=bussinessCard" >Email</a></button>
                    <button className="info--linkdin info-btn"><img src="./images/linkdin.png" className="info--icon"/><a href="https://www.linkedin.com/in/iqrasarwar/">Linkdin</a></button>
                </div>
            </div>
        </div>
    )
}

//Description component => About and Intreset
function Desc(){
    return (
        <div className="desc">
            <div>
                <p className="descH">About</p>
                <p className="text">
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
            </div>
            <div>
                <p  className="descH">Interests</p>
                <p className="text">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </div>
    )
}
function Footer(){
    return(
        <footer>
            <a href="https://github.com/iqrasarwar"><img src="./images/gitHub.png" /></a>
            <a href="https://www.instagram.com/iqra_sarwar_/"><img src="./images/insta.png" /></a>
            <a href="https://twitter.com/iqra_sarwar_"><img src="./images/twitter.png" /></a>
            <a href="https://www.codechef.com/users/iqrasarwar/"><img src="./images/codeChef.png" /> </a>
        </footer>
    )
}
//App wrapper of the components
function App(){
    return (
    <div className="wrapper">
        <Information />
        <Desc />
        <Footer />
    </div>
        )
 }

 ReactDOM.render(<App />, document.getElementById("root"))
