(function (w) {
    const bopizize = char => `${char}op`;

    const consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

    const vowels = ["A", "E", "I", "O", "U"];

    const isConsonant = char => consonants
        .some(c => char.toUpperCase() === c);

    const isVowel = char => vowels
        .some(vowel => char.toUpperCase() === vowel);

    const toBop = (buffer) => buffer
        .split("")
        .reduce((acum, char) =>
            isVowel(char)
                ? `${acum} ${char}`
                : isConsonant(char)
                    ? (acum.length === 0 // trim leading space
                    || acum[acum.length - 1] === "\n") // and space following "\n"
                    && `${acum}${bopizize(char)}`
                    || `${acum} ${bopizize(char)}`
                    : `${acum}${char}`, "");

    const toHtml = bop => bop.replace(/\n/g, "<br>");

    w.boptalk = {toBop: toBop, toHtml: toHtml};
}(window));