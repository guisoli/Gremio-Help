create database cedsa;

use cedsa;

create table Celular(
macCelular varchar(50) primary key,
dataVotacao varchar(10)
);


create table Voto(
idMusica int primary key auto_increment,

macCelular varchar(50),

nomeMusica varchar(50),
artista varchar(50),
genero varchar(20),
foreign key(macCelular) references Celular(macCelular)
);

select * from Celular;



select *	
	from Celular 
    inner join Voto on Voto.macCelular = Celular.macCelular;
    
    

/*
drop database cedsa;
*/