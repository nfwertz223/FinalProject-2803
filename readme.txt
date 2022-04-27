Note that the files in the example require a table called registeredUsers within the database CS2803

Use the following queries:

create database project;
use project;
create table registeredUsers(
    username varchar(60) primary key,
    password varchar(60) not null,
    numfacts int default '0'
)

Don't forget to use npm install to install all dependencies