const Objekat = ({ objekat, setSpisak }) => {

    return (

        <ul>
            {/* <li>{objekat.vrsta} </li> */}
            <li>{objekat.opis} = <span>{objekat.iznos} RSD</span>
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

export default Objekat;