var app = angular.module("cartApp", []);
app.controller("cartCtrl", function ($scope) {
    $scope.cards = [
        { name: 'Andrea', type: "Business Cards", paperType: 'Classic Crest White 100lb', printStyle: '1 sided print, no UV coating', quantity: 50, cost: 100, img: 'assets/img/card1.jpg' },
        { name: 'John', type: "Business Cards", paperType: 'Classic Crest White 100lb', printStyle: '1 sided print, no UV coating', quantity: 50, cost: 100, img: 'assets/img/card2.jpg' },
        { name: 'Pamela', type: "Business Cards", paperType: 'Classic Crest White 100lb', printStyle: '1 sided print, no UV coating', quantity: 100, cost: 200, img: 'assets/img/card3.jpg' },
        { name: 'Rahul', type: "Business Cards", paperType: 'Classic Crest White 100lb', printStyle: '1 sided print, no UV coating', quantity: 50, cost: 100, img: 'assets/img/card4.jpg' },
        { name: 'Gui', type: "Business Cards", paperType: 'Classic Crest White 100lb', printStyle: '1 sided print, no UV coating', quantity: 50, cost: 100, img: 'assets/img/card1.jpg' }
    ];
    $scope.quantities = [{ "value": 50, "text": "50 cards ($100.00)" }, { "value": 100, "text": "100 cards ($200.00)" }, { "value": 200, "text": "200 cards ($400.00)" }];  
    $scope.taxes = [{
        value: '.000',
        label: 'Alaska (0.000%)'
    }, {
        value: '.056',
        label: 'Arizona (5.600%)'
    }, {
        value: '.065',
        label: 'Arkansas (6.500%)'
    }, {
        value: '.075',
        label: 'California (7.500%)'
    }, {
        value: '029',
        label: 'Colorado (2.900%)'
    }, {
        value: '.0635',
        label: 'Connecticut (6.350%)'
    }, {
        value: '.000',
        label: 'Delaware (0.000%)'
    }, {
        value: '.0575',
        label: 'District Of Columbia (5.750%)'
    }, {
        value: '.060',
        label: 'Florida (6.000%)'
    }, {
        value: '.040',
        label: 'Georgia (4.000%)'
    }, {
        value: '.040',
        label: 'Hawaii (4.000%)'
    }, {
        value: '.060',
        label: 'Idaho (6.000%)'
    }, {
        value: '.0625',
        label: 'Illinois (6.250%)'
    }, {
        value: '.070',
        label: 'Indiana (7.000%)'
    }, {
        value: '.060',
        label: 'Iowa (6.000%)'
    }, {
        value: '.065',
        label: 'Kansas (6.500%)'
    }, {
        value: '.060',
        label: 'Kentucky (6.000%)'
    }, {
        value: '.040',
        label: 'Louisiana (4.000%)'
    }, {
        value: '.055',
        label: 'Maine (5.500%)'
    }, {
        value: '.060',
        label: 'Maryland (6.000%)'
    }, {
        value: '.0625',
        label: 'Massachusetts (6.250%)'
    }, {
        value: '.060',
        label: 'Michigan (6.000%)'
    }, {
        value: '.060',
        label: 'Mississippi (7.000%)'
    }, {
        value: '.04225',
        label: 'Missouri (4.225%)'
    }, {
        value: '.00',
        label: 'Montana (0.000%)'
    }, {
        value: '.050',
        label: 'Nebraska (5.50%)'
    }, {
        value: '.0685',
        label: 'Nevada (6.85%)'
    }, {
        value: '.00',
        label: 'New Hampshire (0.000%)'
    }, {
        value: '.070',
        label: 'New Jersey (7.000%)'
    }, {
        value: '.05125',
        label: 'New Mexico (5.125%)'
    }, {
        value: '.040',
        label: 'New York (4.00%)'
    }, {
        value: '.0475',
        label: 'North Carolina (4.750%)'
    }, {
        value: '.050',
        label: 'North Dakota (5.000%)'
    }, {
        value: '.0575',
        label: 'Ohio (5.750%)'
    }, {
        value: '.045',
        label: 'Oklahoma (4.500%)'
    }, {
        value: '.00',
        label: 'Oregon (0.000%)'
    }, {
        value: '.600',
        label: 'Pennsylvania (6.000%)'
    }, {
        value: '.070',
        label: 'Rhode Island (7.000%)'
    }, {
        value: '.060',
        label: 'South Carolina (6.000%)'
    }, {
        value: '.040',
        label: 'South Dakota (4.000%)'
    }, {
        value: '.070',
        label: 'Tennessee (7.000%)'
    }, {
        value: '.0625',
        label: 'Texas (6.250%)'
    }, {
        value: '.0470',
        label: 'Utah (4.700%)'
    }, {
        value: '.060',
        label: 'Vermont (6.000%)'
    }, {
        value: '.043',
        label: 'Virginia (4.300%)'
    }, {
        value: '.065',
        label: 'Washington (6.500%)'
    }, {
        value: '.060',
        label: 'West Virginia (6.000%)'
    }, {
        value: '.050',
        label: 'Wisconsin (5.000%)'
    }, {
        value: '.040',
        label: 'Wyoming (4.000%)'
    }];
    $scope.totalCount = ($scope.cards.length + 1);
    $scope.currentTax = 0;
    $scope.getSubtotal = function () {
        var subtotal = 0;
        for (var i = 0; i < $scope.cards.length; i++) {
            var costs = $scope.cards[i].cost;
            subtotal += (costs);
        }
        return subtotal;
    }
    $scope.dupecard = function () {
        // Starting blank card for now; editing card out of scope of exercise
        window.location = "item-detail.html";
    }
    $scope.showSelectValue = function (mySelect) {
        var tax = mySelect.substring(mySelect.lastIndexOf("(") + 1, mySelect.lastIndexOf("%"));
        var taxNum = moveDecimal(tax);
        function moveDecimal(n) {
            var l = n.toString().length - 3;
            var v = n / Math.pow(10, l);
            return v;
        }
        $scope.currentTax = taxNum;
    }
    $scope.showQuantity = function (card, value, index) {
        $scope.cards[index].quantity = value;
        $scope.cards[index].cost = 2 * value;
    }
    $scope.remove = function (index) {
        console.log(index);
        $scope.cards.splice(index, 1);
    }
    $scope.edit = function (index) {
        var item = $scope.cards[index];
        console.log(index);
        console.log(item);
    }
    $scope.update = function (index, data) {
        $scope.object.objects[index] = data;
    };
    $scope.addIncoming = function (card, user) {
        var name = user.fullName;
        $scope.firstName = name.split(" ")[0];
        $scope.type = "Business Cards"
        $scope.paperType = card[0].paperType;
        $scope.printStyle = card[0].printStyle;
        $scope.quantity = card[0].quantity;
        $scope.cost = 100;
        $scope.img = card[0].frontSide;
        $scope.newCard = {
            name: $scope.firstName,
            type: $scope.type,
            paperType: $scope.paperType,
            printStyle: $scope.printStyle,
            quantity: $scope.quantity,
            cost: $scope.cost,
            img: $scope.img
        }
        $scope.cards.unshift($scope.newCard);
    }
    var init = function () {
        if ((localStorage.getItem("Saved Card") === null) || (localStorage.getItem("Saved User") === null)) {
            //user must be coming from item-detail page
            alert("Sorry, you must fill out data first! Redirecting...");
            setTimeout(function () {
                window.location = "item-detail.html";
            }, 500);
        }
        var cardIncoming = JSON.parse(localStorage.getItem("Saved Card"));
        var userIncoming = JSON.parse(localStorage.getItem("Saved User"));
        $scope.addIncoming(cardIncoming, userIncoming);
    };
    init();
});
app.filter('freeShip', function () {
    return function (total) {
        if (total >= 50) return '$0';
        else return 'Add more to get free shipping!';
    }
});
app.filter('selectQuantity', function () {
    return function (card, index, val) {
        console.log("------");
        console.log(card.quantity);
        console.log(index);
        console.log(val[index]);
        console.log("------");
        if (card.quantity == val[index]) {
            return 'selected';
        }
    }
});