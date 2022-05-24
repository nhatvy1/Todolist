const inputBox = document.querySelector('.inputField input')
const addBtn = document.querySelector('.inputField button')
const list = document.querySelector('.list')
const deleteBtn = document.querySelectorAll('.list__item span')
const footerSpan = document.querySelector('.footer span')
const clearAll = document.querySelector('.footer button')

inputBox.onkeyup =() => {
    let userData = inputBox.value
    if (userData != null) {
        addBtn.classList.add('active')
    } else {
        add.classList.remove('active')
    }
}

showTask()

addBtn.onclick = () => {
    let userData = inputBox.value.trim()
    let getLocalStorageData = localStorage.getItem('Todolist')

    if (getLocalStorageData == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorageData)
    }

    listArr.push(userData)
    localStorage.setItem('Todolist', JSON.stringify(listArr))

    inputBox.value = ''
    inputBox.focus()

    showTask()
}

function showTask() {
    let getLocalStorageData = localStorage.getItem('Todolist')

    if (getLocalStorageData == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorageData)
    }

    let newLiTag = ''
    listArr.map((element, index) => {
        newLiTag += `<li class="list__item">
                        ${element}
                        <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span>
                    </li>`
    })
    
    if (listArr.length == 0) {
        footerSpan.innerText = 0
    } else {
        footerSpan.innerText = listArr.length
    }

    list.innerHTML = newLiTag

}

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("Todolist")
    listArray = JSON.parse(getLocalStorage)
    listArray.splice(index, 1)
    localStorage.setItem("Todolist", JSON.stringify(listArray))
    showTask()
}

clearAll.onclick = () => {
    localStorage.removeItem('Todolist')
    showTask()
}
