console.log(`Hello World!`)

const url = `http://localhost:3000/notes`
const note = document.getElementById(`note`)

function notes() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let item of data){
            renderNoteItem(item)
        }
    })
}
function renderNoteItem(noteOnj) {
    const li = documtent.createElement(`li`)
    li.id = noteObj.id
    li.classlist.add(

    )
}
renderNoteText(li, noteObj)
note.appendChild(li)

function renderNoteText(li, noteObj) {
    li.innerHTML = `