continente(america).
continente(europa).
continente(oceania).
continente(asia).
continente(africa).

europa(carpintero).
europa(buho).
europa(gaviota).
europa(babosa).
europa(sepia).
europa(caracol).
europa(ballena).
europa(loro).
europa(calamar).
europa(tortuga).
europa(pezglobo).
europa(anguila).

asia(sepia).
asia(pulpo).
asia(caracol).
asia(calamar).
asia(cocodrilo).
asia(ballena).
asia(buho).
asia(canario).
asia(pzglobo).
asia(pezpayaso).
asia(tiburon).
asia(tiburon).

america(cocodrilo).
america(lagartija).
america(tortuga).
america(caiman).
america(caracol).
america(pulpo).
america(babosa).
america(gaviota).
america(buho).
america(carpintero).
america(salmon).
america(tiburon).
america(anguila).
america(pezpayaso).
america(pezglobo).
america(anaconda).
america(loro).
america(ballena).
america(caballo).
america(gato).
america(nutria).

africa(caiman).
africa(cocodrilo).
africa(anaconda).
africa(jirafa).
africa(canario).
africa(pzglobo).

oceania(tiburon).

animales(X) :- moluscos(X,_,_,_,_,_,_,_).
animales(X) :- peces(X,_,_,_,_,_,_,_).
animales(X) :- reptiles(X,_,_,_,_,_,_,_).
animales(X) :- aves(X,_,_,_,_,_,_,_).
animales(X) :- mamiferos(X,_,_,_,_,_,_,_).

animales2(X) :- moluscos(X,_,_,_,Y,_,_,_), write(X), write(','), write(Y), write('@').
animales2(X) :- peces(X,_,_,_,Y,_,_,_), write(X), write(','), write(Y), write('@').
animales2(X) :- reptiles(X,_,_,_,Y,_,_,_), write(X), write(','), write(Y), write('@').
animales2(X) :- aves(X,_,_,_,Y,_,_,_), write(X), write(','), write(Y), write('@').
animales2(X) :- mamiferos(X,_,_,_,Y,_,_,_), write(X), write(','), write(Y), write('@').

moluscos(caracol, 0.02, 0.005, 7, "Cornu Aspersum", [america, asia, europa], 21500000, 0.013).
moluscos(sepia, 0.9, 25, 6, "Sepiida", [asia, europa], 965425, 20).
moluscos(calamar, 0.6, 750, 15, "Teuthida", [asia, europa], 12000000, 2.5).
moluscos(pulpo, 1.2, 50, 5, "Octopoda", [asia, america], 5036500, 9.4).
moluscos(babosa, 0.005, 0.015, 2, "Mollusca",[america, europa], 9665522, 0.015).

peces(tiburon,4.1,1100,27,"Carcharodon carcharias",[america, africa,asia,oceania],2000,15.55556).
peces(pezpayaso, 0.1, 0.005, 10, "Amphiprioninae", [asia,america], 1000000, 0.98).
peces(anguila,0.8,3.6,50,"Anguilla anguilla",[europa,america],10000,1.388889).
peces(pezglobo, 0.1, 0.010, 7, "Tetraodontidae", [asia,america,africa,europa], 5000000, 0.99).
peces(salmon,1.5,46.8,13,"Aalmo salar linnaeus",america,1200000,1.805556).

reptiles(cocodrilo, 5.2, 1000, 70, "Crocodylidae", [africa, asia, america], 67500, 8).
reptiles(tortuga, 1, 160, 150, "Chelonioidea", [america, europa], 1000000, 9.72).
reptiles(lagartija, 0.010, 0.005, 5, "Lacertilia", [america], 12000000, 2.7).
reptiles(caiman, 2.4, 7.6, 30, "Caiman", [america, africa], 50000, 4.72).
reptiles(anaconda, 4.6,80,20,"Eunectes marinus",[america, africa], 200000, 4).

aves(loro, 0.033, 0.04, 11, "Psittacoidea", [america,europa], 89000, 6.6).
aves(gaviota, 0.062, 0.96, 15, "Larus armenicus", [europa, america], 1200000, 12.5).
aves(canario, 0.017, 0.024, 10, "Aerinus canaria domestica", [africa, asia], 90000, 5.55).
aves(carpintero, 0.17, 0.075, 10, "Picidos ", [america,europa], 36000, 6.9).
aves(buho, 0.71, 2.7, 30, "Bubo bobo", [asia,america, europa], 28000, 22.22).

mamiferos(gato, 0.3, 4.5, 16, "Felis catus", [america], 3000000, 13.88).
mamiferos(ballena, 15, 23000, 70, "Balaenidae", [europa,america, asia], 15000, 13.33).
mamiferos(nutria, 0.95, 5.9, 9, "Lutrinae", [america], 1600000, 3.33).
mamiferos(jirafa, 6.1, 1600, 25, "Giraffidae", [africa], 1000000, 16.66).
mamiferos(caballo, 1.8, 1000, 30, "Equus caballus", [america], 89000, 24.44).

sangrefria(X) :- reptiles(X, _, _, _, _, _, _, _).

terrestre(caracol).
terrestre(babosa).
terrestre(cocodrilo).
terrestre(caiman).
terrestre(anaconda).
terrestre(lagartija).
terrestre(canario).
terrestre(gaviota).
terrestre(buho).
terrestre(carpintero).
terrestre(loro).
terrestre(caballo).
terrestre(gato).
terrestre(jirafa).
terrestre(nutria).

marino(pulpo).
marino(calamar).
marino(sepia).
marino(tortuga).
marino(ballena).
marino(X) :- peces(X, _, _, _, _, _, _, _).

escamas(X) :- reptiles(X, _, _, _, _, _, _, _).

cola(X) :- reptiles(X, _, _, _, _, _, _, _).
cola(X):- mamiferos(X, _, _, _, _, _, _, _).
cola(X) :- aves(X, _, _, _, _, _, _, _).

vivenenagua(X) :- peces(X, _, _, _, _, _, _, _).
vivenenagua(X) :- moluscos(X, _, _, _, _, _, _, _), X == calamar.
vivenenagua(X) :- moluscos(X, _, _, _, _, _, _, _), X == pulpo.

ponenhuevos(X) :- peces(X, _, _, _, _, _, _, _).
ponenhuevos(X) :- reptiles(X, _, _, _, _, _, _, _).
ponenhuevos(X) :- aves(X, _, _, _, _, _, _, _).
ponenhuevos(X) :- moluscos(X, _, _, _, _, _, _, _).

tienenalas(X) :- aves(X, _, _, _, _, _, _, _).
vuelan(X) :- aves(X, _, _, _, _, _, _, _).

novuelan(X) :- reptiles(X, _, _, _, _, _, _, _).
novuelan(X) :- moluscos(X, _, _, _, _, _, _, _).
novuelan(X) :- mamiferos(X, _, _, _, _, _, _, _).
novuelan(X) :- peces(X, _, _, _, _, _, _, _).

sangrecaliente(X) :- mamiferos(X, _, _, _, _, _, _, _).
sangrecaliente(X) :- aves(X, _, _, _, _, _, _, _).

tomanleche(X) :- mamiferos(X, _, _, _, _, _, _, _).

longevidadbaja(X) :- peces(X, _, _, Y, _, _, _, _), Y < 10.
longevidadbaja(X) :- moluscos(X, _, _, Y, _, _, _, _), Y < 10.
longevidadbaja(X) :- reptiles(X, _, _, Y, _, _, _, _), Y < 10.
longevidadbaja(X) :- aves(X, _, _, Y, _, _, _, _), Y < 10.
longevidadbaja(X) :- mamiferos(X, _, _, Y, _, _, _, _), Y < 10.

longevidadmedia(X) :- peces(X, _, _, Y, _, _, _, _), Y > 9, Y =< 60.
longevidadmedia(X) :- moluscos(X, _, _, Y, _, _, _, _), Y > 9, Y =< 60.
longevidadmedia(X) :- reptiles(X, _, _, Y, _, _, _, _), Y > 9, Y =< 60.
longevidadmedia(X) :- aves(X, _, _, Y, _, _, _, _), Y > 9, Y =< 60.
longevidadmedia(X) :- mamiferos(X, _, _, Y, _, _, _, _), Y > 9, Y =< 60.

longevidadalta(X) :- mamiferos(X, _, _, Y, _, _, _, _), Y > 60.
longevidadalta(X) :- aves(X, _, _, Y, _, _, _, _), Y > 60.
longevidadalta(X) :- peces(X, _, _, Y, _, _, _, _), Y > 60.
longevidadalta(X) :- reptiles(X, _, _, Y, _, _, _, _), Y > 60.
longevidadalta(X) :- moluscos(X, _, _, Y, _, _, _, _), Y > 60.

extinto(X) :- mamiferos(X, _, _, _, _, _, Y, _), Y == 0.
extinto(X) :- peces(X, _, _, _, _, _, Y, _), Y == 0.
extinto(X) :- aves(X, _, _, _, _, _, Y, _), Y == 0.
extinto(X) :- reptiles(X, _, _, _, _, _, Y, _), Y == 0.
extinto(X) :- moluscos(X, _, _, _, _, _, Y, _), Y == 0.

vulnerable(X) :- mamiferos(X, _, _, _, _, _, Y, _), Y < 5000.
vulnerable(X) :- peces(X, _, _, _, _, _, Y, _), Y < 5000.
vulnerable(X) :- aves(X, _, _, _, _, _, Y, _), Y < 5000.
vulnerable(X) :- reptiles(X, _, _, _, _, _, Y, _), Y < 5000.
vulnerable(X) :- moluscos(X, _, _, _, _, _, Y, _), Y < 5000.

novulnerable(X) :- mamiferos(X, _, _, _, _, _, Y, _), Y >= 5000.
novulnerable(X) :- peces(X, _, _, _, _, _, Y, _), Y >= 5000.
novulnerable(X) :- aves(X, _, _, _, _, _, Y, _), Y >= 5000.
novulnerable(X) :- reptiles(X, _, _, _, _, _, Y, _), Y >= 5000.
novulnerable(X) :- moluscos(X, _, _, _, _, _, Y, _), Y >= 5000.

animalgrande(X) :- peces(X,Y,_,_,_,_,_,_), Y>=1.
animalgrande(X) :- peces(X,_,Z,_,_,_,_,_), Z>=50.
animalgrande(X) :- mamiferos(X,Y,_,_,_,_,_,_), Y>=1.
animalgrande(X) :- mamiferos(X,_,Z,_,_,_,_,_), Z>=50.
animalgrande(X) :- reptiles(X,Y,_,_,_,_,_,_), Y>=1.
animalgrande(X) :- reptiles(X,_,Z,_,_,_,_,_), Z>=50.
animalgrande(X) :- moluscos(X,Y,_,_,_,_,_,_), Y>=1.
animalgrande(X) :- moluscos(X,_,Z,_,_,_,_,_), Z>=50.
animalgrande(X) :- aves(X,Y,_,_,_,_,_,_), Y>=1.
animalgrande(X) :- aves(X,_,Z,_,_,_,_,_),  Z>=50.

animalpequeno(X) :- peces(X,Y,Z,_,_,_,_,_), Y<1, Z<50.
animalpequeno(X) :- mamiferos(X,Y,Z,_,_,_,_,_), Y<1, Z<50.
animalpequeno(X) :- reptiles(X,Y,Z,_,_,_,_,_), Y<1, Z<50.
animalpequeno(X) :- moluscos(X,Y,Z,_,_,_,_,_), Y<1, Z<50.
animalpequeno(X) :- aves(X,Y,Z,_,_,_,_,_), Y<1,Z< 50.

animallento(X) :- aves(X,_,_,_,_,_,_,Y), Y<1.
animallento(X) :- mamiferos(X,_,_,_,_,_,_,Y), Y<1.
animallento(X) :- reptiles(X,_,_,_,_,_,_,Y), Y<1.
animallento(X) :- moluscos(X,_,_,_,_,_,_,Y), Y<1.
animallento(X) :- peces(X,_,_,_,_,_,_,Y), Y<1.

animalrapido(X) :- peces(X,_,_,_,_,_,_,Y), Y>10.
animalrapido(X) :- mamiferos(X,_,_,_,_,_,_,Y), Y>10.
animalrapido(X) :- reptiles(X,_,_,_,_,_,_,Y), Y>10.
animalrapido(X) :- moluscos(X,_,_,_,_,_,_,Y), Y>10.
animalrapido(X) :- aves(X,_,_,_,_,_,_,Y), Y>10.

velocidadnormal(X) :- peces(X,_,_,_,_,_,_,Y), Y>=1, Y< 11.
velocidadnormal(X) :- mamiferos(X,_,_,_,_,_,_,Y), Y>=1, Y<11.
velocidadnormal(X) :- reptiles(X,_,_,_,_,_,_,Y), Y>=1, Y<11.
velocidadnormal(X) :- moluscos(X,_,_,_,_,_,_,Y), Y>=1, Y<11.
velocidadnormal(X) :- aves(X,_,_,_,_,_,_,Y), Y>=1,Y<11.

tienenvida(X) :- aves(X,_,_,_,_,_,_,_) ;peces(X,_,_,_,_,_,_,_); mamiferos(X,_,_,_,_,_,_,_); moluscos(X,_,_,_,_,_,_,_); reptiles(X,_,_,_,_,_,_,_).

respiran(X) :- aves(X,_,_,_,_,_,_,_); peces(X,_,_,_,_,_,_,_);mamiferos(X,_,_,_,_,_,_,_);moluscos(X,_,_,_,_,_,_,_);reptiles(X,_,_,_,_,_,_,_).

invertebrados(X) :- moluscos(X,_,_,_,_,_,_,_).
invertebrados(X) :- reptiles(X,_,_,_,_,_,_,_), X == anaconda.

vertebrados(X) :- peces(X,_,_,_,_,_,_,_); aves(X,_,_,_,_,_,_,_); mamiferos(X,_,_,_,_,_,_,_).
vertebrados(X) :- reptiles(X,_,_,_,_,_,_,_), X \== anaconda.

sienten(X) :- aves(X,_,_,_,_,_,_,_); peces(X,_,_,_,_,_,_,_); mamiferos(X,_,_,_,_,_,_,_); moluscos(X,_,_,_,_,_,_,_); reptiles(X,_,_,_,_,_,_,_).

lista_animales([]) :- write('{}').
lista_animales([Primera|Personas]) :- animales2(Primera), lista_animales(Personas).