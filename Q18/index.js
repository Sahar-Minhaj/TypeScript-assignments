var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Turkey", "Bali", "Thiland", "Rome", "New York"];
console.log("Original Order:", placesToVisit);
var alphabetical_order = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", alphabetical_order);
console.log("Original Order:", placesToVisit);
var reverse_alpha = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Reverse Alphabetical Order:", reverse_alpha);
console.log("Original Order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
placesToVisit.reverse();
console.log("Original Order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted Alphabetical Order:", placesToVisit);
