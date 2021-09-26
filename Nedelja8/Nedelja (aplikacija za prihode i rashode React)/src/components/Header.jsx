const Header = ({ spisak }) => {

    let ukupnoPrihoda = 0
    spisak.forEach(el => {
        if (el.vrsta === 'prihod') {
            ukupnoPrihoda += el.iznos
        }
    })

    let ukupnoRashoda = 0
    spisak.forEach(el => {
        if (el.vrsta === 'rashod') {
            ukupnoRashoda += el.iznos
        }
    })

    return (
        <div>

            <div>
                <button>Budzet</button>
                <button> {ukupnoPrihoda - ukupnoRashoda}</button>
            </div>

            <div>
                <button>UkupnoPrihoda</button>
                <button> {ukupnoPrihoda}</button>
            </div>

            <div>
                <button>UkupnoRashoda</button>
                <button> {ukupnoRashoda}</button>
                <button> {(100 / ukupnoPrihoda) * ukupnoRashoda} %</button>
            </div>

        </div>

    );
}
export default Header;