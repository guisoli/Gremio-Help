create database cedsa;

use cedsa;

create table Celular(
idCelular int primary key auto_increment,
ipCelular varchar(50),
dataVotacao varchar(10)
);


create table Voto(
idMusica int primary key auto_increment,

idCelular int,

nomeMusica varchar(50),
artista varchar(50),
genero varchar(20),
foreign key(idCelular) references Celular(idCelular)
);
