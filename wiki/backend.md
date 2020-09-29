# Backend Express

# Iniciar 
`npm init`
`nodemon index.js`

# Agregando Express
`npm install express --save`

# Instalando moongodb
`npm install mongoose-unique-validator --save`

# Base de datos

``` json
db.animals.insert({ "nombre": "tiburon" ,"altura": "4.1 m","peso": "1100 kg","anio": 27,"nombre_cientifico": "Carcharodon carcharias","continente":"america, africa, oceania","poblacion": 2000,"velocidad": "15.55556 m/s"});
db.animals.insert({ "nombre": "pezpayaso" ,"altura": "0.1 m","peso": "0.005 kg","anio": 10,"nombre_cientifico": "Amphiprioninae","continente":"asia, asia","poblacion": 1000000,"velocidad": "0.98 m/s"});
db.animals.insert({ "nombre": "anguila" ,"altura": "0.8 m","peso": "3.6 kg","anio": 50,"nombre_cientifico": "Anguilla anguilla","continente":"america, europa","poblacion": 10000,"velocidad": "1.388889 m/s"});
db.animals.insert({ "nombre": "pezglobo" ,"altura": "0.1 m","peso": "0.010 kg","anio": 7,"nombre_cientifico": "Tetraodontidae","continente":"america, asia, africa, europa","poblacion": 5000000,"velocidad": "0.99 m/s"});
db.animals.insert({ "nombre": "salmon" ,"altura": "1.5 m","peso": "46.8 kg","anio": 13,"nombre_cientifico": "Aalmo salar linnaeus","continente":"america","poblacion": 1200000,"velocidad": "1.805556 m/s"});

db.animals.insert({ "nombre": "caracol" ,"altura": "0.02 m","peso": "0.005 kg","anio": 7,"nombre_cientifico": "Cornu Aspersum","continente":"america, asia, europa","poblacion": 21500000,"velocidad": "0.013 m/s"});
db.animals.insert({ "nombre": "sepia" ,"altura": "0.9 m","peso": "25 kg","anio": 6,"nombre_cientifico": "Sepiida","continente":"asia, europa","poblacion": 965425,"velocidad": "20 m/s"});
db.animals.insert({ "nombre": "calamar" ,"altura": "0.6 m","peso": "750 kg","anio": 15,"nombre_cientifico": "Teuthida","continente":"asia, europa","poblacion": 12000000,"velocidad": "2.5 m/s"});
db.animals.insert({ "nombre": "pulpo" ,"altura": "1.2 m","peso": "50 kg","anio": 5,"nombre_cientifico": "Octopoda","continente":"america, asia","poblacion": 5036500,"velocidad": "9.4 m/s"});
db.animals.insert({ "nombre": "babosa" ,"altura": "0.005 m","peso": "0.015 kg","anio": 2,"nombre_cientifico": "Mollusca","continente":"america, europa","poblacion": 9665522,"velocidad": "0.015 m/s"});

db.animals.insert({ "nombre": "cocodrilo" ,"altura": "5.2 m","peso": "1000 kg","anio": 70,"nombre_cientifico": "Crocodylidae","continente":"america, africa, asia","poblacion": 67500,"velocidad": "8 m/s"});
db.animals.insert({ "nombre": "tortuga" ,"altura": "1 m","peso": "160 kg","anio": 150,"nombre_cientifico": "Chelonioidea","continente":"america, europa","poblacion": 1000000,"velocidad": "9.72 m/s"});
db.animals.insert({ "nombre": "lagartija" ,"altura": "0.010 m","peso": "0.005 kg","anio": 5,"nombre_cientifico": "Lacertilia","continente":"america","poblacion": 12000000,"velocidad": "2.7 m/s"});
db.animals.insert({ "nombre": "caiman" ,"altura": "2.4 m","peso": "7.6 kg","anio": 30,"nombre_cientifico": "Caiman","continente":"america, africa","poblacion": 50000,"velocidad": "4.72 m/s"});
db.animals.insert({ "nombre": "anaconda" ,"altura": "4.6 m","peso": "80 kg","anio": 20,"nombre_cientifico": "Eunectes marinus","continente":"america, africa","poblacion": 200000,"velocidad": "4 m/s"});

db.animals.insert({ "nombre": "gato" ,"altura": "0.3 m","peso": "4.5kg","anio": 16,"nombre_cientifico": "Felis catus","continente":"america","poblacion": 3000000,"velocidad": "13.88 m/s"});
db.animals.insert({ "nombre": "ballena" ,"altura": "15 m","peso": "23000 kg","anio": 70,"nombre_cientifico": "Balaenidae","continente":"america, asia, europa","poblacion": 15000,"velocidad": "13.33 m/s"});
db.animals.insert({ "nombre": "nutria" ,"altura": "0.95 m","peso": "5.9 kg","anio": 9,"nombre_cientifico": "Lutrinae","continente":"america","poblacion": 1600000,"velocidad": "3.33 m/s"});
db.animals.insert({ "nombre": "jirafa" ,"altura": "6.1 m","peso": "1600 kg","anio": 25,"nombre_cientifico": "Giraffidae","continente":"africa","poblacion": 1000000,"velocidad": "16.66 m/s"});
db.animals.insert({ "nombre": "caballo" ,"altura": "1.8 m","peso": "1000 kg","anio": 30,"nombre_cientifico": "Equus caballus","continente":"america","poblacion": 89000,"velocidad": "24.44 m/s"});


```