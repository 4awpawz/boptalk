(function (w) {
    const buttonToTextEl = document.getElementsByClassName("buttonToText")[0];
    const buttonToHtmlEl = document.getElementsByClassName("buttonToHtml")[0];
    const inputEl = document.getElementsByClassName("input")[0];
    const outputEl = document.getElementsByClassName("output")[0];
    const toBop = w.boptalk.toBop;
    const toHtml = w.boptalk.toHtml;

    const inputToTextClickHandler = (event => {
        outputEl.value = toBop(inputEl.value);
    });

    const inputToHtmlClickHandler = (event => {
        outputEl.value = toHtml(toBop(inputEl.value));
    });

    buttonToTextEl.addEventListener("click", inputToTextClickHandler);
    buttonToHtmlEl.addEventListener("click", inputToHtmlClickHandler);
}(window));