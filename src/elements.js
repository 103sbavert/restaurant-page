export function loadPageContent(pageElements) {
    for (let i = 0; i < pageElements.length; i++) {
        let element = pageElements[i]

        if (!(element instanceof HTMLElement)) {
            return false
        }
    }

    let contentContainer = document.querySelector("div.content")
    contentContainer.replaceChildren()
    insertElement(contentContainer, pageElements)
    return true
}

export function createElement(emmet) {
    const validEmmetRe = /^[\w|\d]+(\.[\w|\d]+)*(#[\w|\d]+)?$/g
    const elementRe = /^(?<!\.)[\w|\d]+/
    const classRe = /(?<=\.)([\w|\d]+-?)+/g
    const idRe = /(?<=#)[\w|\d]+$/

    if (emmet.match(validEmmetRe))
        return null

    let tag = emmet.match(elementRe)
    let classList = emmet.match(classRe)
    let id = emmet.match(idRe)

    let elem = document.createElement(tag)

    for (let i = 0; i < classList.length; i++) {
        let className = classList[i]
        elem.classList.add(className)
    }

    if (id)
        elem.id = id

    return elem
}

export function toggleClass(element, classNames) {
    const classRe = /(?<=^\.?)([\w|\d]+-?)+$/g
    let classList = classNames.match(classRe)

    if (!(element instanceof HTMLElement)) {
        return false
    } else if (classRe.length == 0) {
        return false
    }

    for (let i = 0; i < classList.length; i++) {
        let className = classList[i]
        if (element.classList.contains(className))
            element.classList.remove(className)
        else element.classList.add(className)
    }

    return true
}

export function insertElement(parent, elements) {
    if (!(parent instanceof HTMLElement)) {
        return false
    }

    if (!(elements instanceof Array)) {
        parent.appendChild(elements)
        return
    }

    for (let i = 0; i < elements.length; i++) {
        let elem = elements[i]
        let temp = elem instanceof Node
        
        parent.appendChild(elem)
    }

    return true
}
