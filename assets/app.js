const addToDo = document.querySelector('.formAdd')
const toDolist = document.querySelector('.toDo-list')
const filterToDo = document.querySelector('.formFilter')

const clearAddForm = inputValue => {
    event.target.reset(inputValue)
}

const addLi = inputValue => {
    const li = `
    <li><i class="fa-solid fa-arrow-right"></i> 
        <span>${inputValue}</span> 
        <i class="fa-regular fa-trash-can"></i>
    </li>`

    if (inputValue.length) {
        toDolist.innerHTML += li
        clearAddForm(inputValue)
    }
}

addToDo.addEventListener('submit', event => {
    event.preventDefault()
    
    const inputValue = event.target.add.value.trim()
    addLi(inputValue)
    
})

toDolist.addEventListener('click', event => {
    const clickedElement = event.target
    
    if (clickedElement.classList.contains('fa-trash-can')) {
        clickedElement.parentElement.remove()
    }
})

const hideToDos = (toDos, inputValue) => {
    toDos
        .filter(toDo => !toDo.textContent.includes(inputValue))
        .forEach(toDo => {
            toDo.classList.add('hidden')
        })
}

const showToDos = (toDos, inputValue) => {
    toDos
        .filter(toDo => toDo.textContent.includes(inputValue))
        .forEach(toDo => {
            toDo.classList.remove('hidden')
        })
}

filterToDo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const toDos = Array.from(toDolist.children)
    
    hideToDos(toDos, inputValue)
    showToDos(toDos, inputValue)
})

