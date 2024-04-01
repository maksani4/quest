let start = document.getElementById("start");
let body = document.body;
let title;
let input;
let preTitle;

let image1;
let image2;

start.addEventListener("click", ()=> {
//удалить элемент со страницы    
    start.parentNode.removeChild(start);
    title = document.createElement("h1");
    input = document.createElement("input");
    input.autofocus = "autofocus";

    title.textContent = "Введите ваше Имя:";

    body.append(title);
    body.append(input);

    input.addEventListener("keyup", (event)=> {
        if ((event.code == 'Enter' && input.value != '') || event.code == 'NumpadEnter' && input.value != '') {
            title.textContent = `Добро пожаловать, ${input.value}!`;
            input.parentNode.removeChild(input);
            //запусть 1 уровень
            setTimeout(()=> {
                title.parentNode.removeChild(title);
                iLoveMath();
            }, 1300);
        }
    })
})

//вопрос, ответ, следующий уровень
function createTextLevel(question, answer, nextLevel) {
    title = document.createElement('h1');
    input = document.createElement('input');
    preTitle = document.createElement('p');

    title.textContent = question;
    body.append(title);
    body.append(input);
    body.append(preTitle);

    input.addEventListener("keyup", (event)=> {
        if ((event.code == 'Enter' && input.value != '') || event.code == 'NumpadEnter' && input.value != '') {
           if (input.value.toLowerCase() == answer) {
            input.parentNode.removeChild(input);
            preTitle.textContent = 'Верно!';
            //через время запускаем новый уровень
            setTimeout(()=> {
                title.parentNode.removeChild(title);
                preTitle.parentNode.removeChild(preTitle);
                if (nextLevel != null) {
                nextLevel();
                }
            }, 1300);

           }  else {
            preTitle.textContent = 'Неверно! Попробуй еще:)';
            input.value = '';
           }
        }
    })
}

function createImgLevel(question, trueLink, FalseLink, nextLevel) {
    title = document.createElement("h1");
    preTitle = document.createElement("p");
    image1 = document.createElement('img');
    image2 = document.createElement('img');
    title.textContent = question;

    body.append(title);
    body.append(preTitle);
    body.append(image1);
    body.append(image2);

    image1.src = trueLink;
    image2.src = FalseLink;

    image1.addEventListener('click', ()=> {
        image1.parentNode.removeChild(image1);
        image2.parentNode.removeChild(image2);
        preTitle.textContent = 'Верно!';
        setTimeout(()=> {
            title.parentNode.removeChild(title);
            preTitle.parentNode.removeChild(preTitle);
            if (nextLevel != null) {
            nextLevel();
            }
        }, 1300);
    })
    image2.addEventListener('click', ()=> {
        preTitle.textContent = 'Неверно! Попробуй еще:)';
    })
}

function iLoveMath() {
    createTextLevel('Сколько будет 2*8?', 16, iLoveGeography);
}

function iLoveGeography() {
    createTextLevel ('Назовите столицу Бразилии?', 'бразилиа', iLoveBioligy)
}

function iLoveBioligy() {
    createTextLevel ('Из какого дерева делают спички?', 'осина', iLoveMount)
}

function iLoveMount() {
    createImgLevel ('На какой картинки показан Эверест?', "./img/everest.jpg", "./img/elbrus.jpg", null )
}