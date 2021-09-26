const ObjekatRashoda = ({ objekat, setSpisak, spisak }) => {

    let ukupnoPrihoda = 0
    spisak.forEach(el => {
        if (el.vrsta === 'prihod') {
            ukupnoPrihoda += el.iznos
        }
    })

    return (

        <ul>
            {/* <li>{objekat.vrsta} </li> */}
            <li>{objekat.opis} = <span>{objekat.iznos} RSD ( {(100 / ukupnoPrihoda) * objekat.iznos}%)</span>
                <button onClick={() => {
                    // console.log('radi')
                    setSpisak((previ) => {
                        let kopija = [...previ]
                        let index = kopija.indexOf(objekat)

                        kopija.splice(index, 1)
                        return kopija
                    })
                }
                }>Obrisi</button> </li>

        </ul>
    );
}

export default ObjekatRashoda;