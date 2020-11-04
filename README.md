Below is a simple explanation of the process followed:

1. the employee class was created, and the engineer, manager and intern classes extended this employee class. All were then exported.
2. the main app.js file imported all these classes, and imported the inquirer, path and fs modules as well as the render function from the HTML renderer.
3. A function was run which prompted the user to input the name, officeNumber, id and email of the manager. These answers were then pushed to a new Manager class, which 
  was then pushed to an array called all_team. 
4. Another function called addemployee was then run inside the manager function, immediately after pushing the manager to the array. This function prompted for a type of employee
  as either an engineer or an intern, and also had a third option to finish adding employees. 
5. Once the type of employee was selected, an if statement was run depending on the type of employee. For the engineer, inquirer.prompt prompted the questions relevant to engineers
  and the same if an intern was selected. The answers were created into an engineer or intern class, and pushed to the array. At the end of that process, the function addEmployee was called
  where the User would return to the beginning of the function, and select another employee type to add. 
6. If the User had finished adding employees, they could select the third option: finish adding employees. This was passed into an if statement which called a function called writeOutput and passed the array
  all_team with all of the employee objects to it. 
7. The writeOutput function called the render function from HTMLrenderer, and returned the HTML string to a constant. 
8. This constant was then writtten to an HTML file in the outputs folder. 