const orm = require("../config/orm.js");

let burger = {
    all: (cb) => {
        orm.all("burgers", function(results) {
            cb(results);
        });
    },
    create: (name, cb) => {
        orm.create("burgers", [
            "burgerName", "devoured"
        ], 
        [
            name, false

        ], cb);
    },
    update: (id, cb) => {
        let condition = "id:" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;
