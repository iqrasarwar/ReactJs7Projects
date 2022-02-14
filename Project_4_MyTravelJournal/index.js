let data = [
   {
      id:"1",
       title: "Mount Fuji",
       location: "J A P A N",
       googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
       startDate: "12 Jan, 2021",
       endDate: "24 Jan, 2021",
       description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
       imageUrl: "./images/mountain-fuji.png"
   },
   {
      id:"2",
      title: "Sydney Opera House",
      location: "A U S T R A L I A",
      googleMapsUrl: "https://goo.gl/maps/9wBfCuojYBVr3cVy5",
      startDate: "27 May, 2021",
      endDate: "8 Jun, 2021",
      description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
      imageUrl: "./images/sydney-opera-house.png"
  },
  {
     id:"3",
     title: "Geirangerfjord",
     location: "N O R W A Y",
     googleMapsUrl: "https://goo.gl/maps/7Y8igcrTC14wQG9c9",
     startDate: "01 Oct, 2021",
     endDate: "18 Nov, 2021",
     description: "The Geiranger Fjord is a fjord in the Sunnmore region of More og Romsdal country, Normay. It is located entirely in the Stranda Municipality.",
     imageUrl: "./images/geirangerfjord.png"
 }
]


function NavBar(){
   return(
      <div className="navbar">
         <img src="./images/worldIcon.png" className="nav---image" />
         <p>my travel journal.</p>
      </div>
   )
}

function Card(props){
   return (
      <div className="card">
         <img src={props.imageUrl} className="card--img"/>
         <div>
            <div className="google--flex">
               <img src="./images/locIcon.png" className="card--loc" />
               <p>
                  <span className="countryname">
                     {props.location}
                  </span>
                  <span className="googlemap--text">
                     <a href={props.googleMapsUrl}>View on Google Maps</a>
                  </span>
               </p>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--date">{props.startDate} - {props.endDate}</p>
            <p className="card--desc">
            {props.description}
            </p>
         </div>
      </div>
   )
}

function App() {
   const cards = data.map(item => {
       return (
           <Card
               key={item.id}
               {...item}
           />
       )
   })

   return (
      <div>
          <NavBar />
          <section className="cards-list">
              {cards}
          </section>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
