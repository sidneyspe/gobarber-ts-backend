# Go Barber 2020

## Setup

You will need to install:
* nodejs
* npm
* Yarn
* [Docker](https://www.docker.com/)
* [Postbird](https://www.electronjs.org/apps/postbird)
* [Insomnia](https://insomnia.rest/download/)

### Docker

- Please install docker and after run the following command:

````
docker run -d -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=postgres postgres
````

- This command will create a docker container with postgres installed.
The `user` and the `password` of this container is: `postgres`


#### After run the following command:

````
docker update --restart=always postgres
````

- This command will restart the container named postgres always the docker is started.


### Database
- Using the Postbird or other similar app, access the postgres and create a database named:

````
go_barber_2020
````
&nbsp;


## Useful Commands
List of useful commands for developers

### Project

- Please access the `gobarber-ts-backend` folder and run the following command: `yarn`

- Run the sequelize migrations to create the tables that will need: `yarn migrate`


### Create migrations

````
yarn typeorm migration:create -n <name_of_migration>
````

### Run migration
````
yarn migrate
````

### Undo migration

````
yarn migrate:undo
````


### Running the Backend Application

````
yarn dev:server
````
