import Objekat from "./Objekat.jsx";
import ObjekatRashoda from "./ObjekatRashoda.jsx";

const Mapiranje = ({ spisak, setSpisak }) => {

    let filterPrihoda = spisak.filter(objekat => objekat.vrsta === 'prihod')
    let filterRashoda = spisak.filter(objekat => objekat.vrsta === 'rashod')

    return (

        <div>

            <div style={{ display: "inline-block", width: '40 %' }}>
                <h1>Prihodi</h1>
                {filterPrihoda.map(objekat => <Objekat key={objekat.id} objekat={objekat} setSpisak={setSpisak} />)}
            </div>

            <div style={{ display: "inline-block", width: '40 %' }}>
                <h1>Rashodi</h1>
                {filterRashoda.map(objekat => <ObjekatRashoda key={objekat.id} objekat={objekat} setSpisak={setSpisak} spisak={spisak} />)}

            </div>

        </div >

    );
}

export default Mapiranje;







