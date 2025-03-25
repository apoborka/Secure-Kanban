
# Secure-Kanban
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
A Kanban board application that utilizes bcrypt and JWT to implement user authentication and the local storage/revocation of user tokens (on logout or after 1 hour, whichever comes first). The Kanban board itself is designed to simulate a simple Todo -> In Progress -> Done workflow for tasks that can be assigned to a specific user and contain a title and task description.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Visit the URL:
[Deployed on Render](https://secure-kanban-yulx.onrender.com)



## Usage
Visit the deployment URL (above) to navigate to the login page.
Login using one of the pre-seeded user profiles.
( Username: JollyGuru | Password: password )

![Login Page screenshot](client\assets\LoginPage.jpg)

Once logged in, view the Kanban board's pre-seeded tickets.
These tickets may be edited or deleted as desired.
To add a new ticket to the board, click "New Ticket".

![Kanban board screenshot showing 3 columns: ToDo, In Progress, and Done](client\assets\KanbanBoard.jpg)

The Create Ticket page contains fields for Ticket Name, Ticket Status (which lane the ticket will be placed into), Ticket Description, and a dropdown containing users (one of which can be attached to the ticket).

![Create Ticket page](client\assets\CreateTicket.jpg)


## License
This project is licensed under the MIT license. For more details, see the license link: (https://opensource.org/licenses/MIT)

## Contributing
As this is a project strictly for educational purposes, no contributions will be accepted.

## Tests
There are currently no tests implemented in this program at this time.

## Questions
##### For any questions regarding this project, contact the project owner via: 
GitHub: [apoborka](https://github.com/apoborka)\
Email: alex.poborka@gmail.com

## Acknowledgments
This project utilized GitHub Copilot and EdX starter code.