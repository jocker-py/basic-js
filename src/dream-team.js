const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    let dreamTeam = "";
    if (Array.isArray(members)) {
        let result = members.filter((member) => typeof member === "string");
        if (result) {
            result = result.map((member) => member.trim().toUpperCase());
            result.sort();
            for (let i of result) {
                dreamTeam += i[0];
            }
            return dreamTeam;
        }
    } else {
        return false;
    }
}
module.exports = {
    createDreamTeam,
};
