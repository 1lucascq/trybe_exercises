"use strict";
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 2] = "Monday";
    weekDays[weekDays["Tuesday"] = 3] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 4] = "Wednesday";
    weekDays[weekDays["Thursday"] = 5] = "Thursday";
    weekDays[weekDays["Friday"] = 6] = "Friday";
})(weekDays || (weekDays = {}));
var rainbow;
(function (rainbow) {
    rainbow["blue"] = "azul";
    rainbow["yellow"] = "yellow";
    rainbow["pink"] = "rosa";
    rainbow["green"] = "verde";
    rainbow["black"] = "preto";
})(rainbow || (rainbow = {}));
var actions;
(function (actions) {
    actions["save"] = "save";
    actions["print"] = "print";
    actions["visualize"] = "visualize";
    actions["close"] = "close";
})(actions || (actions = {}));
var directions;
(function (directions) {
    directions["north"] = "n";
    directions["east"] = "e";
    directions["west"] = "w";
    directions["south"] = "s";
})(directions || (directions = {}));
