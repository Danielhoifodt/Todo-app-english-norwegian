window.addEventListener('load', function () {

    //Detect language
    let language =window.navigator.userLanguage || window.navigator.language;

    switch (language)
    {
        case 'no':
        case 'nb':
        case 'nn':
        case 'nb-NO':
        case 'nb-no':
        case 'nn-NO':
        case 'nn-no':
            break;

        default:
            document.querySelector("h1").innerHTML = "Todo list";
            let input = document.querySelector(".input");
            input.placeholder = "To do...";
            input.title = "Press enter or the &#43; button.";
            let label = this.document.querySelector("label");
            label.innerHTML = "Important";
            let del_button = document.querySelector(".del-button");
            del_button.innerHTML = "Delete all";
            break;
    }
});