const urlInputElement = document.querySelector("#url-input");
const nameInputElement = document.querySelector("#name-input");
const ITEMS_VISIBLE = 6;
let currentIndex = 0;
let numItems = 0;
const linksContainerElement = document.querySelector(".carousel__links");
const prevBtn = document.querySelector(".carousel__prev-btn");
const nextBtn = document.querySelector(".carousel__next-btn");
const form = document.querySelector(".dashboard__form");

const moveNext = () => {
    if(currentIndex < numItems - 6){
        currentIndex++;
        linksContainerElement.children[currentIndex + 5].style.display = 'inline';
        linksContainerElement.children[currentIndex - 1].style.display = 'none';
    }

}

const movePrev = () => {
    if(currentIndex > 0){
        currentIndex--;
        linksContainerElement.children[currentIndex].style.display = 'inline';
        linksContainerElement.children[currentIndex + ITEMS_VISIBLE].style.display = 'none';
    }
    
}

const add = (evt) => {
    evt.preventDefault();
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = urlInputElement.value;
    link.innerHTML = nameInputElement.value;
    link.classList.add("carousel__link");
    listItem.append(link);
    linksContainerElement.append(listItem);
    numItems++;

    if(numItems > ITEMS_VISIBLE){
        listItem.style.display = 'none';
        prevBtn.classList.add("carousel__controls_active");
        nextBtn.classList.add("carousel__controls_active");
    }
    urlInputElement.value = "";
    nameInputElement.value = "";    
}

form.addEventListener("submit", add);
prevBtn.addEventListener("click", movePrev);
nextBtn.addEventListener("click", moveNext);