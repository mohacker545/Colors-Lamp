# COLORS LAMP App



## Description



This app was created with LAMP stack. It allows users to log provided they have credentials, and add colors to an already existing database. They can then search for colors to see whether or not they are currently stored.



The front-end part of this web app is accessible through a web browser. PHP API endpoints and a MySQL database stored on a remote Linux server are also used.



## Technologies Used



* Linux
* Apache
* MySQL
* PHP
* HTML
* CSS
* JavaScript
* Git
* GitHub



## Project Structure



```

colors-lamp/

├── api/

│   ├── AddColor.php

│   ├── Login.php

│   ├── SearchColors.php

│   └── config.example.php

├── public/

│   ├── index.html

│   ├── color.html

│   ├── css/

│   ├── images/

│   └── js/

├── .gitignore

├── README.md

└── LICENSE.md

```



## Setup



### Step 1: Lamp Droplet



Create a LAMP Droplet on the DigitalOcean website. Choose the plan that costs $6/month. Then, SSH into the server on your command prompt using this command: ssh root@YOUR\_SERVER\_IP.



### Step 2: Creating the MySQL Database



Type this command to access MySQL from your new Linux server: mysql -u root -p. 



Use MySQL commands on the command prompt to create a database that consists of 3 tables: Users, Contacts, and Colors. You can name the database "COP4311".



### Step 3: Create a user



Make a MySQL user that has permission to access this database. There are no credentials in this repo, so you can either create your own or use the example provided in the assignment instructions.



The username and password here should be separate from your MySQL root account from the PHP application.



### Step 4: Configure database credentials



You can copy the api/config.example.php file included here in this repo and paste into api/config.php. Next, use the new database credentials you just made to fill in these lines:

$dbHost = 'localhost';

$dbUser = 'your\_database\_username';

$dbPass = 'your\_database\_password';

$dbName = 'COP4331';



If you're making a public GitHub repo, do not commit api/config.php, as it is excluded through .gitignore, and includes your database credentials.



### Step 5: Create the server directories



If you haven't already, create the css, images, js, and LAMPAPI directories under the Apache web root /var/www/html/. Use mkdir commands.



### Step 6: Deploy the PHP API



Bring the API files from the repo's api/ directory to /var/www/html/LAMPAPI/



Ensure your server's directory has all of the following:

AddColor.php

Login.php

SearchColors.php

config.php



### Step 7: Test the API endpoints



To see if the endpoints function as they should, you can use a curl command on the command prompt to gauge whether their POST requests work:



curl -X POST \\

\-H "Content-Type: application/json" \\

\-d "{\\"login\\":\\"USERNAME\\",\\"password\\":\\"PASSWORD\\"}" \\

http://YOUR\_SERVER\_IP/LAMPAPI/Login.php



Repeat this for the other two endpoints. You can also test this with Postman, ARC, Swagger, or any other HTTP client.





### Step 8: Deploy frontend



Copy everything from the public/ directory into /var/www/html/



Ensure all of the following are present:

index.html

color.html

css/

images/

js/



The constant variable in the JavaScript file should read '/LAMPAPI', so the frontend can interact with the PHP API on your server.



## Running the Application



Open a web browser of your choosing. Paste this link into the search bar: http://YOUR\_SERVER\_IP/



or your personal domain if you've purchased one. This should take you to the login page, where you can log in provided you've already set up the credentials. The website should allow you to add a color to the logged-in user's database, and search for any colors on it.



## Assumptions

* The application is located on a LAMP environment that has Apache, MySQL, and PHP.
* The COP4331 database needs to have been set up for the application to function correctly.
* There needs to be at least one user in the "Users" table before you can login.
* API and the frontend must be on the same server.



## Limitations

* For educational use only.
* Does not have any functionality besides logging in, adding, and searching for colors.
* Database and new users need to be created manually; not from the frontend.
* Only HTTP can be used.



## AI Usage



ChatGPT was used to assist with the git and MySQL commands, as well as troubleshooting issues with frontend. Was also used to help organize the repo and document the project.



Any suggestions that it gave were revised first, and I manually tested the functionality of the application.





