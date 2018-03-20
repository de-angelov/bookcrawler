'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "AuthorId" from table "Books"
 * addColumn "author" to table "Books"
 *
 **/

var info = {
    "revision": 2,
    "name": "noname",
    "created": "2018-03-12T23:06:19.939Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["Books", "AuthorId"]
    },
    {
        fn: "addColumn",
        params: [
            "Books",
            "author",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "SET NULL",
                "references": {
                    "model": "Authors",
                    "key": "id"
                },
                "allowNull": true
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
