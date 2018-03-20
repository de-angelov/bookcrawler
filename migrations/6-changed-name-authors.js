'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "name" on table "Authors"
 * changeColumn "name" on table "Authors"
 *
 **/

var info = {
    "revision": 6,
    "name": "noname",
    "created": "2018-03-13T08:47:13.174Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "Authors",
            "name",
            {
                "type": Sequelize.STRING,
                "defaultValue": "unknown author",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Authors",
            "name",
            {
                "type": Sequelize.STRING,
                "defaultValue": "unknown author",
                "allowNull": false
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
