const generateTem = (team) => {
    const html = [];

    const managGen = manager => {
        let managCard = `<div class="col-4 mt-4">
        <div class="card h-100" id="manageCard">
            <div class="card-header" id="manageHead">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="fa-solid fa-mug-hot"></i>
            </div>
            <div class="card-body" id="manageBody">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.offiNumber}</p>
            </div>
        </div>
    </div>`;
        html.push(managCard);
    }

    const engGen = engineer => {
        let engCard = `<div class="col-4 mt-4">
        <div class="card h-100" id="enginCard">
            <div class="card-header" id="enginHead">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="fa-solid fa-glasses"></i>
            </div>
            <div class="card-body" id="enginBody">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.gitty}">${engineer.gitty}</a></p>
            </div>
        </div>
    </div>`;
        html.push(engCard);
    }

    const inGen = intern => {
        let inCard = `<div class="col-4 mt-4">
        <div class="card h-100" id="intCard">
            <div class="card-header" id="intHead">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div class="card-body" id="intBody">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>`;
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
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css"/>
    <title>Mimers Team</title>
    </head>
    <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger" id="header">
                <h1 class="text-center text-white">My Team of Mimers</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTem(team)}
            </div>
        </div>
    </div>
</body>
    </html>`
}