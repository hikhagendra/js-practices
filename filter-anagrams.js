let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares", "test", "etst", "REA"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(arr) {
    let arrSet = new Set(arr);

    for(let word of arrSet) {
        let lowerCasedWord = word.toLowerCase();
        let matchedMap = new Map();

        for(let i = 0; i < lowerCasedWord.length; i++) {
            let matchedWords = [];
            for(let innerWord of arrSet) {
                if(innerWord.toLowerCase().includes(lowerCasedWord[i]) && lowerCasedWord.length == innerWord.length) {
                    matchedWords.push(innerWord);
                }
            }

            matchedMap.set(lowerCasedWord[i], matchedWords);
        }

        let exactMatch = new Map();

        for(let entry of matchedMap.entries()) {
            let eMatchedWords = [];

            for(let item of entry[1]) {
                let remove = false;

                for(let i = 0; i < word.length; i++) {
                    if(!item.toLowerCase().includes(word[i].toLowerCase())) {
                        remove = true;
                    }
                }

                if(!remove) {
                    eMatchedWords.push(item);
                }
            }

            exactMatch.set(entry[0], eMatchedWords);
        }

        let valLen = [];
        let sameLen = false;

        for(let value of exactMatch.values()) {
            valLen.push(value.length);
        }

        for(let i = 1; i < valLen.length; i++) {
            if(valLen[i - 1] == valLen[i]) {
                sameLen = true;
            } else {
                sameLen = false;
                break;
            }
        }

        if(sameLen) {
            for(let value of exactMatch.values()) {
                for(let i = 1; i < value.length; i++) {
                    arrSet.delete(value[i]);
                }
            }
        }
    }

    return arrSet;
}
