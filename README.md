# perceptor-weblogger-integration-server

Weblogger server client integration for Perceptor Weblogger extension
[link](https://github.com/Rhinox-Training/perceptor-weblogger-integration)

# Dependencies

## Environment

[npm] (https://docs.npmjs.com/)

[phpmyadmin] (https://www.phpmyadmin.net/)

## React-dependencies

### Normal dependencies

[bootstrap] (https://www.npmjs.com/package/bootstrap)

[react] (https://www.npmjs.com/package/react)

[react-bootstrap] (https://www.npmjs.com/package/react-bootstrap)

[react-chartjs-2] (https://www.npmjs.com/package/react-chartjs-2)

[react-dom] (https://www.npmjs.com/package/react-dom)

[react-icon] (https://www.npmjs.com/package/react-icon)

[react-icons] (https://www.npmjs.com/package/react-icons)

[react-router-dom] (https://www.npmjs.com/package/react-router-dom)

[style-loader] (https://www.npmjs.com/package/style-loader)

### Dev dependencies

[@babel/core] (https://www.npmjs.com/package/react-router-dom)

[@babel/preset-env] (https://www.npmjs.com/package/@babel/preset-env)

[@babel/preset-react] https://www.npmjs.com/package/@babel/preset-react()

[babel-loader] (https://www.npmjs.com/package/babel-loader)

[css-loader] (https://www.npmjs.com/package/css-loader)

[html-webpack-plugin] (https://www.npmjs.com/package/html-webpack-plugin)

[webpack] (https://www.npmjs.com/package/webpack)

[webpack-cli] (https://www.npmjs.com/package/webpack-cli)

[webpack-dev-server] (https://www.npmjs.com/package/webpack-dev-server)


# Setup

## Local

### php database

-download xampp from  [xampp-download] (https://www.apachefriends.org/download.html)

-install xampp as close to your root folder on the drive as possible.

-after installing open ../xampp/htdocs.

-create folder in ../xampp/htdocs called perceptor-weblogger-integration.

-in this folder copy the .php files delivered in this project to create our database into an api-endpoint,

${name}data.php for retrieving data from database.
insert${name}.php for pushing data to database.

-copy config.example.ini rename to config.ini 

-change database info to the access information for your database (default install of xampp requires no changes needed).

-run xampp-control from ../xampp as administrator

-turn on Apache & MySql server from xampp-control ui.

-press the admin button from the MySql section in the xampp-control ui, this opens the phpmyadmin page.

-on this page go to import sectiotion in the nav-menu.

-import the file webdebugmaster.sql into mysql database with the standard settings.


### react-project

#### configuration

-open the rootfolder in command prompt.

-cd into /perceptor-weblogger-integration.

-run npm init

-copy the config.example.json and rename to config.json

-change the serverURL in config.json to your database entry point link.

#### run website

##### build to static website

-open rootfolder in command prompt. 

-cd into / perceptor-weblogger-integration

-run command npm run build

-website compiles into ../perceptor-weblogger-integration/dist folder.

-index.html in this folders opens the website

##### run with webpack web server

-open rootfolder in command prompt. 

-cd into / perceptor-weblogger-integration

-run command npm run dev


## hosted webserver


set up php my admin

add the php routes

set up the config files
copy config.example file 

build react project from in cd perceptor-weblogger-integration


add static html main.js to your www root

# License

Apache-2.0 © Rhinox NV