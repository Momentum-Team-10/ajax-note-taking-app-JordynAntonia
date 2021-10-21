console.log(`Hello World!`)

const url = 'http://localhost:3000/notes'
const note = document.getElementById(`note`)
notes()

function notes() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let item of data) {
                renderNoteItem(item)
            }
        })
}

function renderNoteItem(noteObj) {
    let li = document.createElement('li')
    li.id = noteObj.id
    // li.classlist.add(

    // )
}
// renderNoteText(li, noteObj)
// note.appendChild(li)

// function renderNoteText(li, noteObj) {
//     let li = document.createElement()

//     function createNote(noteEl)
//     fetch(url, {
//         method: 'POST',
//         headers: { `Content-Type` :`application/json` },
// body: JSON.stringfly({
//     title: noteText,
//     body: noteText,
//     created_at: moment().format(MM, DD, YYYY)
// }) 
//     })

// }

// function updateNote(noteEl) {
//     fetch(url, {
//         method: 'DELETE',
//         headers: { Content- Type : application/ json`},
//        body: JSON.stringfly({
//             title: noteText, 
//             body: noteText, 
//             created_at: moment().format(MM,DD,YYYY)
//        }) 
//     })
// }