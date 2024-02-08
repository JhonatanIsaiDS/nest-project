DROP DATABASE Pruebas;

CREATE DATABASE Pruebas;

USE Pruebas;

DROP TABLE IF EXISTS EventosUsuarios;

DROP TABLE IF EXISTS Usuarios;

DROP TABLE IF EXISTS Eventos;

CREATE TABLE Usuarios (
    IdUsuario int not null auto_increment, Nombre varchar(100) not null, Edad int not null, Telefono varchar(15) null, PRIMARY KEY (IdUsuario)
);

CREATE TABLE Eventos (
    IdEvento int not null auto_increment, NombreEvento varchar(100) not null, DescripcionEvento mediumtext null, PRIMARY KEY (IdEvento)
);

CREATE TABLE EventosUsuarios (
    IdEventosUsuarios int not null auto_increment, IdUsuario int not null, IdEvento int not null, PRIMARY KEY (IdEventosUsuarios), KEY IdUsuario_fk1 (IdUsuario), KEY IdEvento_fk2 (IdEvento), CONSTRAINT IdUsuario_fk1 FOREIGN KEY (IdUsuario) REFERENCES Usuarios (IdUsuario), CONSTRAINT IdEvento_fk2 FOREIGN KEY (IdEvento) REFERENCES Eventos (IdEvento)
);

INSERT INTO
    Usuarios (Nombre, Edad, Telefono)
VALUES ('Nombre', 27, '123123123');

INSERT INTO
    Eventos (
        NombreEvento, DescripcionEvento
    )
VALUES (
        'Evento primero', 'Este es un evento'
    );

INSERT INTO EventosUsuarios (IdUsuario, IdEvento) VALUES (1, 1);