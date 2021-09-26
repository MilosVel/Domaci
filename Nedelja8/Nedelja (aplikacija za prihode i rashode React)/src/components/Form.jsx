import { useState } from 'react'
import { v1 as uuidv1 } from "uuid"

const Form = ({ setSpisak }) => {

    const [inputOpis, setInputOpis] = useState('')
    const [inputIznos, setInputIznos] = useState('')
    const [inputSelect, setInputSelect] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if (inputOpis && inputSelect && inputIznos > 0) {


            let Nov = {
                id: uuidv1(),
                vrsta: inputSelect,
                opis: inputOpis,
                iznos: Number(inputIznos)
            }

            setSpisak((prev) => {
                return ([...prev, Nov])
            })

            setInputOpis('')
            setInputIznos('')
            setInputSelect('')
        }
    }



    return (
        <form onSubmit={onSubmit}>
            <hr></hr>
            <div>
                <select required onClick={(e) => setInputSelect(e.target.value)}>
                    <option defaultValue={inputSelect} disabled selected>Izabrati </option>
                    <option value="prihod">Prihod</option>
                    <option value="rashod">Rashod</option>
                </select>
            </div>

            <div >
                <label>Opis</label>
                <input
                    type='text'
                    placeholder='Opis'
                    value={inputOpis}
                    onChange={(e) => setInputOpis(e.target.value)}
                />
            </div>

            <div >
                <label>Iznos</label>
                <input
                    type='text'
                    placeholder='Iznos'
                    value={inputIznos}
                    onChange={(e) => setInputIznos(e.target.value)}
                />
            </div>

            <input type='submit' value='Potvrdi' />
            <hr></hr>
        </form>
    );
}
export default Form;




