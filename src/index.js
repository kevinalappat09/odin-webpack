import myName from "./myName";
import './styles.css'

function component() {
    const element = document.createElement('div');
    element.innerHTML = myName("Kevin");
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component())