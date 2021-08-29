export let count = 5
export let data = [
    {
        id: 1,
        desc: 'Zadatak broj 15',
        done: false
    },
    {
        id: 2,
        desc: 'Zadatak broj 16',
        done: true
    },
    {
        id: 3,
        desc: 'Zadatak broj 17',
        done: false
    },
    {
        id: 4,
        desc: 'Zadatak broj 18',
        done: true
    }
]

export function add(item) {
    item.id = count
    count++
    data.push(item)
}

export function deleteById(id) {
    let index = data.findIndex((item) => { return item.id == id })
    data.splice(index, 1)
}

export function changeById(id, noviItem) {
    data.splice(id, 1, noviItem)
}



// export function changeById(id, noviItem) {
//     let index = data.findIndex((item) => { return item.id == id })
//     data.splice(index, 1, noviItem)
// }
