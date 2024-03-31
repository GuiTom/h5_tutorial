
function renderQuestionHeader(question) {
    let headerHtml = ` <h2>${question.id}.${question.desc}【${question.title}】 </h2>`;
    return headerHtml;
}
function renderQuestion(index) {
    let question = questions[index]
    let desc = document.querySelector('.desc');
    desc.innerHTML = renderQuestionHeader(question);
    let contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';
    //附件
    let attachmentContainerElement = document.querySelector('.desc_attachement_contaner');
    attachmentContainerElement.innerHTML = ''
    if (question.attachmentType == 'image') {
        let imgHtml = `<img class="attach_image" src="./assets/${question.id}/${question.attachment}"/>`

        attachmentContainerElement.innerHTML = imgHtml;
    } else if (question.attachmentType == 'code') {

        const preElement = document.createElement('pre');
        const codeElement = document.createElement('code');
        codeElement.textContent = question.attachment;
        preElement.appendChild(codeElement)

        attachmentContainerElement.appendChild(preElement)
    }
    //渲染选项
    for (let option in question.options) {
        if (question.option_type == 'txt') {
            let optionsHTML = `<div>${option}、${question.options[option]}</div>`
            contentElement.innerHTML += optionsHTML;
        } else if (question.option_type == 'code') {
            let optionsHTML = ''
            optionsHTML += question.options[option]
            const preElement = document.createElement('pre');
            const codeElement = document.createElement('code');
            codeElement.textContent = optionsHTML;
            preElement.appendChild(codeElement)
            contentElement.innerHTML += `<div><div>${option}、</div>${preElement.outerHTML}</div>`


        }
        else if (question.option_type == 'image') {
            let optionsHTML = `<img src="./assets/${question.id}/${question.options[option]}"/>`
            contentElement.innerHTML += optionsHTML;
        }
    }
}
function getSelected() {
    var radios = document.getElementsByName('myAnswer');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;

        }
    }
}
var currentQuestionIndex = 1;
function next(){
    if (currentQuestionIndex < questions.length - 1) {
        renderQuestion(++currentQuestionIndex);

    } else {
        document.querySelector('.pre_button').disabled = false;
        document.querySelector('.next_button').disabled = true;
        window.location.href = './result.html'
    }
}
window.onload = function () {

    renderQuestion(currentQuestionIndex)
    document.querySelector('.pre_button').addEventListener('click', function () {
        if (currentQuestionIndex > 0) {
            renderQuestion(--currentQuestionIndex);

        } else {
            document.querySelector('.pre_button').disabled = true;
            document.querySelector('.next_button').disabled = false;
        }
    })
    document.querySelector('.next_button').addEventListener('click', function () {
        next()
    })
    document.querySelector('.submit').addEventListener('click', function () {
        let answer = getSelected()
        let answerDataStr = localStorage.getItem('css_answer') ?? '{}';
        let answerData = JSON.parse(answerDataStr);
        let question = questions[currentQuestionIndex];
        answerData[`${question.id}`] = answer;
        localStorage.setItem('css_answer', JSON.stringify(answerData))
        next();
       
    });

}

