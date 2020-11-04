const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");

function manager() {
inquirer
  .prompt([
    {
      name: 'name',
      message: 'What is the name of the Manager?',
    },
    {
      name: 'officeNumber',
      message: 'What is his office Number?',
    },
    {
        name: 'id',
        message: 'What is his ID?',
      },
      {
        name: 'email',
        message: 'What is his email address?',
      },
  ])
  .then(answers => {
    const newManager= new Manager(answers.officeNumber, answers.name, answers.id, answers.email)
    const all_team= []
    all_team.push(newManager)
    addEmployee()
    function addEmployee() {
    inquirer
  .prompt([
      
    {
      type: 'list',
      name: 'option',
      message: 'Select an option for type of employee or to end adding employees',
      choices: [
        'engineer','intern', 'finished adding employees'
      ],
    },
  ])
  .then(answers => {
    console.log(answers)
    if (answers.option==='engineer') {
        console.log("engineer")
        inquirer
  .prompt([
    {
      name: 'name',
      message: 'What is the name of the Engineer?',
    },
    {
      name: 'github',
      message: 'What is his github username?',
    },
    {
        name: 'id',
        message: 'What is his ID?',
      },
      {
        name: 'email',
        message: 'What is his email address?',
      },
  ])
  .then(answers => {
    const newEngineer= new Engineer(answers.name, answers.id, answers.email, answers.github)
    all_team.push(newEngineer)

        console.log(all_team)
        addEmployee()
  })

    }

    else if (answers.option==='intern') {
        console.log("intern")
        inquirer
        .prompt([
          {
            name: 'name',
            message: 'What is the name of the Intern?',
          },
          {
            name: 'school',
            message: 'What is his School?',
          },
          {
              name: 'id',
              message: 'What is his ID?',
            },
            {
              name: 'email',
              message: 'What is his email address?',
            },
        ])
        .then(answers => {
          const newIntern= new Intern(answers.name, answers.id, answers.email, answers.school)
          all_team.push(newIntern)
      
              console.log(all_team)
              addEmployee()
        })

    }

    else if (answers.option==='finished adding employees') {

        writeOutput(all_team)
        
       
    }
        
    else {

        console.error("Fatal Error")
    }
  
    
  });
   }



  });
}


manager()


function writeOutput(all_team) {
const myHTML = render(all_team, "David's Team")


fs.writeFile("./output/output.html", myHTML, (err) => {
   
    if (err) throw err;

console.log("file successfully created...")
})
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
