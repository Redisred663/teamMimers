const generateTem = (team) => {
    const html = [];

    const managGen = manager => {
        let managCard = ``;
        html.push(managCard);
    }

    const engGen = engineer => {
        let engCard = ``;
        html.push(engCard);
    }

    const inGen = intern => {
        let inCard = ``;
        html.push(inCard);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            managGen(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            engGen(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            inGen(team[i]);
        }
    }
    return html.join("");
}

module.exports = team => {
    return ``
}