const button = document.getElementsByClassName("input-button")[0]
const inputbox = document.getElementsByClassName("input-box")[0]
const listdiv = document.getElementsByClassName("list-item")[0]

function createitem () {
    const itemvalue = inputbox.value
    const listitem = document.createElement("li")
    const spanitem = document.createElement("span")
    const buttonitem = document.createElement("button")
    inputbox.value = ''

    spanitem.innerHTML = itemvalue + ' '
    buttonitem.innerHTML = 'Delete'

    spanitem.appendChild(buttonitem)
    listitem.appendChild(spanitem)

    listdiv.appendChild(listitem)

    function deleteitem() {
        listitem.remove()
    }

    inputbox.focus()
    buttonitem.addEventListener("click", deleteitem)

}

button.addEventListener("click", createitem)