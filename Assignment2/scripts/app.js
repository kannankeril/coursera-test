(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    //Controller 1 - To Buy
    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var itemBuyer = this;

        itemBuyer.items = ShoppingListCheckOffService.getToBuyItems();

        itemBuyer.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
    }

    //Controller 2 - Bought
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var itemBought = this;

        itemBought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var shoppingListService = this;

        //Lists to hold 'To Buy' and 'Bought' items
        var toBuyItems = [{ name: "boxes of cookies", quantity: 5 }
                         , { name: "bags of chips", quantity: 3 }
                         , { name: "bottles of peanut butter ", quantity: 2 }
                         , { name: "cans of soda ", quantity: 12 }
                         , { name: "strips of Alka Seltzer ", quantity: 1 }];
        var boughtItems = [];

        shoppingListService.buyItem = function (itemIndex) {
            //remove item from 'To Buy' list
            var item = toBuyItems.splice(itemIndex, 1);

            //insert item into 'Bought' list
            boughtItems.splice(0, 0, item[0]);
        };

        shoppingListService.getToBuyItems = function () {
            return toBuyItems;
        };

        shoppingListService.getBoughtItems = function () {
            return boughtItems;
        };
    }
})();
