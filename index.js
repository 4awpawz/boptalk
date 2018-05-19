(function () {
    // api
    const bopizize = char => `${char}op`;

    const isConsonant = char => ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"].some(c => char.toUpperCase() === c);

    const isVowel = char => ["A", "E", "I", "O", "U"]
        .some(vowel => char.toUpperCase() === vowel);

    const toBop = (fnIsVowel, fnIsConsonant, buffer) => buffer.split("").reduce((acum, char) =>
        fnIsVowel(char)
            ? `${acum} ${char}`
            : fnIsConsonant(char)
                ? `${acum} ${bopizize(char)}`
                : `${acum}${char}`, "");

    const toHtml = bop => bop.replace(/\n/g, "<br>");

    // client
    const buttonToTextEl = document.getElementsByClassName("buttonToText")[0];
    const buttonToHtmlEl = document.getElementsByClassName("buttonToHtml")[0];
    const inputEl = document.getElementsByClassName("input")[0];
    const outputEl = document.getElementsByClassName("output")[0];

    const inputToTextClickHandler = (event => {
        outputEl.value = toBop(isVowel, isConsonant, inputEl.value);
    });

    const inputToHtmlClickHandler = (event => {
        outputEl.value = toHtml(toBop(isVowel, isConsonant, inputEl.value));
    });

    buttonToTextEl.addEventListener("click", inputToTextClickHandler);
    buttonToHtmlEl.addEventListener("click", inputToHtmlClickHandler);
}());