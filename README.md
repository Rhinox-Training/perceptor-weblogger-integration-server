# perceptor-weblogger-integration-server

Weblogger server client integration for Perceptor Weblogger extension  
[perceptor weblogger integration](https://github.com/Rhinox-Training/perceptor-weblogger-integration)

# Dependencies

## Environment

- [npm](https://docs.npmjs.com/)
- [phpmyadmin](https://www.phpmyadmin.net/)

## React-dependencies

### Normal dependencies

- [bootstrap](https://www.npmjs.com/package/bootstrap)
- [react](https://www.npmjs.com/package/react)
- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-icon](https://www.npmjs.com/package/react-icon)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [style-loader](https://www.npmjs.com/package/style-loader)

### Dev dependencies

- [@babel/core](https://www.npmjs.com/package/react-router-dom)
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)
- [babel-loader](https://www.npmjs.com/package/babel-loader)
- [css-loader](https://www.npmjs.com/package/css-loader)
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
- [webpack](https://www.npmjs.com/package/webpack)
- [webpack-cli](https://www.npmjs.com/package/webpack-cli)
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)


# Setup

## Local

### php database

- download xampp from [xampp-download](https://www.apachefriends.org/download.html).

- install xampp as close to your root folder on the drive as possible.  
after installing open `../xampp`.

- run `xampp-control` from `../xampp` as administrator.  

![image](https://user-images.githubusercontent.com/29233947/223738417-e90fecc8-a337-4afb-8e45-be8ce3d33247.png)

- turn on Apache & MySql server from xampp-control ui.  
press the `admin` button from the MySql section in the xampp-control ui, this opens the phpmyadmin-webportal.  
![image](https://user-images.githubusercontent.com/29233947/223738675-3fb42dca-fda3-4768-a8dc-e3d30c91a99a.png)

- on this page go to `import` button in the top-navigation.
![image](https://user-images.githubusercontent.com/29233947/223739974-dcba0b20-9a0c-45b6-85fa-60f9ea58f828.png)

- import the file `webdebugmaster.sql` into the database with the standard settings.

- create folder in `../xampp/htdocs` called `webdebugmaster`.
![image](https://user-images.githubusercontent.com/29233947/223740381-ed37d881-43a0-4af4-8cd3-8725fd79c02b.png)

- in this folder copy the `.php` files delivered in this project to create our api-routes for the database.

  - `${name}data.php` for retrieving data from database.  
    `insert${name}.php` for pushing data to database.

- copy config.example.ini and rename to config.ini.  
change database info to the access information for your database (default install of xampp requires no changes needed).


### react-project

#### configuration

- open the rootfolder of this project in command prompt.  
run command `cd perceptor-weblogger-integration` and `npm init` in cmd.

![image](https://user-images.githubusercontent.com/29233947/223737933-2f7e07cb-9f27-4af6-8633-b4b2dde8bb5f.png)

- copy the `config.example.json` and rename to `config.json`.  
change the `serverURL` in `config.json` to your database entry point link.

#### run website

##### build to static website

- open rootfolder from this project in command prompt. 

- run command `cd perceptor-weblogger-integration` and `npm run build`in cmd

- website compiles into `../perceptor-weblogger-integration/dist` folder.  
the file `index.html` in this folders opens the website

##### run with webpack web server

- open rootfolder in command prompt. 

- run command `cd perceptor-weblogger-integration`  
and `npm run dev` in cmd


## hosted webserver

# License

Apache-2.0 © Rhinox NV
