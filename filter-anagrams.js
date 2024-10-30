let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares", "test", "etst", "REA"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(arr) {
    let map = new Map();

    for(let item of arr) {
        let sorted = item.toLowerCase().split('').sort().join('');

        map.set(sorted, item);
    }

    return Array.from(map.values());
}
