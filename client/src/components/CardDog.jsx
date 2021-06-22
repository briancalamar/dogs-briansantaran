import './Style/CardDog.css'

export default function CardDog({ name, temperaments, image }) {


    const divStyle = {
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
    };

    if(temperaments?.length > 5) {
        // let more = temperaments.length - 5
        temperaments = temperaments.slice(0,5)
        temperaments.push((`... more temperaments`))
    }

    return (
        <div className="cardDog" style={divStyle}>
            <div className="info-cd">
                <h2>{name}</h2>
                <div className="info-cd-temp">
                    <p>Temperaments</p>
                    <ul>
                        {
                            temperaments ? temperaments.map((e, i) => <li key={i} > {e} </li>) :
                                <li>No data</li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

// return (
//     <div className="cardDog" style={{background: 'url(' + image + ')'}}>
//         <h2>{name}</h2>
//         <div>
//         <p>Temperaments</p>
//             <ul>
//                 {
//                     temperaments ? temperaments.map((e, i)=> <li key={i} > {e} </li>) :
//                     <li>No data</li>
//                 }
//             </ul>
//         </div>
//     </div>
// )