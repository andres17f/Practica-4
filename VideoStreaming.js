"use strict";
/*Creando los constructores */

//Constructos de persona.
function Person(name, lastname1, born,  lastname2 = null, picture =null) {
	
	if (!(this instanceof Person)) 
		throw new InvalidAccessConstructorException();

	var _name = name;
  	var _lastname1 = lastname1;
  	var _lastname2 = lastname2;
  	var _born = born;
	var _picture = picture;
	
	if (_name === 'undefined' || _name === '') throw new EmptyValueException("_name");
	if (_lastname1 === 'undefined' || _lastname1 === '') throw new EmptyValueException("_lastname1");
	if (_born === 'undefined' || _born === '') throw new EmptyValueException("name");

    Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			_name=value;
			if (_name === 'undefined' || _name === '') throw new EmptyValueException("_name");
		}		
	});

	Object.defineProperty(this, 'lastname1', {
		get:function(){
			return _lastname1;
		},
		set:function(value){
			_lastname1=value;
			if (_lastname1 === 'undefined' || _lastname1 === '') throw new EmptyValueException("_lastname1");
		}		
    });
    
    Object.defineProperty(this, 'lastname2', {
		get:function(){
			return _lastname2;
		},
		set:function(value){
			_lastname2=value;
		}		
    });
    
    Object.defineProperty(this, 'born', {
		get:function(){
			return _born;
		},
		set:function(value){
			_born=value;
			if (_born === 'undefined' || _born === '') throw new EmptyValueException("name");
		}		
    });
    
    Object.defineProperty(this, 'picture', {
		get:function(){
			return _picture;
		},
		set:function(value){
			_picture=value;
		}		
    });
    
}
Person.prototype = {};
Person.prototype.constructor = Person;
Person.prototype.toString = function (){	
	return "Nombre: " + this.name + " Apellido1: " + this.lastname1 + " Apellido2: " + this.lastname2 + 
					" Nacimiento: " + this.born + " Imagen: " + this.picture; 
		}

//Constructor de categoria.
function Category(name, description = null) {

	if (!(this instanceof Category)) 
		throw new InvalidAccessConstructorException();

  var _name = name;
  var _description = description;

	if (_name === 'undefined' || _name === '') throw new EmptyValueException("_name");

  Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			_name=value;
			if (_name === 'undefined' || _name === '') throw new EmptyValueException("_name");
		}		
	});

	Object.defineProperty(this, 'description', {
		get:function(){
			return _description;
		},
		set:function(value){
			_description=value;
		}		
    });
    
}
Category.prototype = {};
Category.prototype.constructor = Category;
Category.prototype.toString = function (){	
	return "Nombre: " + this.name + " Descripcion: " + this.description; 
		}

//Constructor de resource.
function Resource(duration, link, audios = null, subtitles = null) {

	if (!(this instanceof Resource)) 
	throw new InvalidAccessConstructorException();

  var _duration = duration;
  var _link = link;
  var _audios = [audios];
	var _subtitles = [subtitles];
		
	if (_duration === 'undefined' || _duration === '') throw new EmptyValueException("_duration");
	if (_link === 'undefined' || _link === '') throw new EmptyValueException("_link");

  Object.defineProperty(this, 'duration', {
		get:function(){
			return _duration;
		},
		set:function(value){
			_duration=value;
			if (_duration === 'undefined' || _duration === '') throw new EmptyValueException("_duration");
		}		
	});

	Object.defineProperty(this, 'link', {
		get:function(){
			return _link;
		},
		set:function(value){
			_link=value;
			if (_link === 'undefined' || _link === '') throw new EmptyValueException("_link");
		}		
    });
    
    Object.defineProperty(this, 'audios', {
		get:function(){
			return _audios;
		},
		set:function(value){
			_audios=value;
		}		
    });
    
    Object.defineProperty(this, 'subtitles', {
		get:function(){
			return _subtitles;
		},
		set:function(value){
			_subtitles=value;
		}		
    });
    
}
Resource.prototype = {};
Resource.prototype.constructor = Resource;
Resource.prototype.toString = function (){	
	return "Duracion: " + this.duration + " Link: " + this.link + " Audios: " + 
				this.audios + " Subtitulos: " + this.subtitles; 
}

//Constructor de production.
function Production(title, publication, nationality = null , synopsis = null , image = null) {

	if (!(this instanceof Production)) 
	throw new InvalidAccessConstructorException();

	if ((this.constructor === Production)) {
		throw new AbstractClassException("Production");
	}

	var _title = title;
	var _publication = publication;
	var _nationality = nationality;
	var _synopsis = synopsis;
	var _image = image;
	
	if (_title === 'undefined' || _title === '') throw new EmptyValueException("_title");
	if (_publication === 'undefined' || _publication === '') throw new EmptyValueException("_publication");

	Object.defineProperty(this, 'title', {
	get:function(){
		return _title;
	},
	set:function(value){
		_duration=value;
		if (_title === 'undefined' || _title === '') throw new EmptyValueException("_title");
		
	}		
});

Object.defineProperty(this, 'nationality', {
	get:function(){
		return _nationality;
	},
	set:function(value){
		_nationality=value;
	}		
	});
	
	Object.defineProperty(this, 'publication', {
	get:function(){
		return _publication;
	},
	set:function(value){
		_publication=value;
		if (_publication === 'undefined' || _publication === '') throw new EmptyValueException("_publication");
	}		
	});
	
	Object.defineProperty(this, 'synopsis', {
	get:function(){
		return _synopsis;
	},
	set:function(value){
		_synopsis=value;
	}		
	});

	Object.defineProperty(this, 'image', {
		get:function(){
			return _image;
		},
		set:function(value){
			_image=value;
		}		
		});
	
}
Production.prototype = {};
Production.prototype.constructor = Production;
Production.prototype.toString = function (){	
	return "Titulo: " + this.title + " Nacionalidad: " + this.nationality + " Publicacion: " + 
				this.publication + " Synopsis: " + this.synopsis + " Imagen: " + this.image; 
}

//Constructor de pelicula
function Movie(title, publication, nationality = null, synopsis = null, image = null, resource = null, locations =null) {

	Production.call(this, title, publication, nationality, synopsis, image, resource, locations);

  	var _resource = resource;
  	var _locations = [locations];

  	Object.defineProperty(this, 'resource', {
		get:function(){
			return _resource;
		},
		set:function(value){
			_resource=value;
		}		
	});

	Object.defineProperty(this, 'locations', {
		get:function(){
			return _locations;
		},
		set:function(value){
			_locations=value;
		}		
    });
    
}
Movie.prototype = Object.create(Production.prototype);
Movie.prototype.constructor = Movie;
Movie.prototype.toString = function (){	
	return "Titulo: " + this.title + " Publicacion: " + this.publication + " Nacionalidad: " + 
	this.nationality + " Synopsis: " + this.synopsis + " Imagen: " + this.image + 
	" Recurso: " + this.resource + " Localizacion/es: " + this.locations; 
}

//Constructor de serie.
function Serie(title, publication, nationality = null, synopsis = null, image = null, seasons = null) {

	Production.call(this, title, publication, nationality, synopsis, image, seasons);

  	var _seasons = [seasons];

  	Object.defineProperty(this, '_seasons', {
		get:function(){
			return _seasons;
		},
		set:function(value){
			_seasons=value;
		}		
	});
    
}
Serie.prototype = Object.create(Production.prototype);
Serie.prototype.constructor = Serie;
Serie.prototype.toString = function (){	
	return "Titulo: " + this.title + " Publicacion: " + this.publication + " Nacionalidad: " + 
	this.nationality + " Synopsis: " + this.synopsis + " Imagen: " + this.image + 
	" seasons: " + this.seasons; 
}

//Constructor de Season.
function Season(title, episodes = null) {

	if (!(this instanceof Season)) 
		throw new InvalidAccessConstructorException();

	var _title = title;
	var _episodes = [episodes];
	
	if (_title === 'undefined' || _title === '') throw new EmptyValueException("_title");

  Object.defineProperty(this, '_title', {
		get:function(){
			return _title;
		},
		set:function(value){
			_title=value;
			if (_title === 'undefined' || _title === '') throw new EmptyValueException("_title")
		}		
	});

	Object.defineProperty(this, '_episodes', {
		get:function(){
			return _episodes;
		},
		set:function(value){
			_episodes=value;
		}		
    });
    
}
Season.prototype = {};
Season.prototype.constructor = Season;
Season.prototype.toString = function (){	
	return "Titulo: " + this.title + " Episodios: " + this.episodes; 
}

//Constructor de User.
function User(username, email, password) {

	if (!(this instanceof User)) 
		throw new InvalidAccessConstructorException();

  	var _username = username;
	var _email = email;
	var _password = password;
	
	if (_username === 'undefined' || _username === '') throw new EmptyValueException("_username");
	if (_email === 'undefined' || _email === '') throw new EmptyValueException("_email");
	if (_password === 'undefined' || _password === '') throw new EmptyValueException("_password");

  Object.defineProperty(this, '_username', {
		get:function(){
			return _username;
		},
		set:function(value){
			_username=value;
			if (_username === 'undefined' || _username === '') throw new EmptyValueException("_username")
		}		
	});

	Object.defineProperty(this, '_email', {
		get:function(){
			return _email;
		},
		set:function(value){
			_email=value;
			if (_email === 'undefined' || _email === '') throw new EmptyValueException("_email");
		}		
		});
		
	Object.defineProperty(this, '_password', {
		get:function(){
			return _password;
		},
		set:function(value){
			_password=value;
			if (_password === 'undefined' || _password === '') throw new EmptyValueException("_password");
		}		
		});
    
}
User.prototype = {};
User.prototype.constructor = User;
User.prototype.toString = function (){	
	return "Nombre de usuario: " + this.username + " Email: " + this.email + " Contraseña: " + this.password; 
}

//Constructor de coordenadas
function Coordinate(latitude, longitude) {

	if (!(this instanceof Coordinate)) 
		throw new InvalidAccessConstructorException();

  var _latitude = latitude;
	var _longitude = longitude;
	
	if ( _latitude === 'undefined' || _latitude === '') throw new EmptyValueException("_latitude");
	if ( _longitude === 'undefined' || _longitude === '') throw new EmptyValueException("_longitude");

  Object.defineProperty(this, '_latitude', {
		get:function(){
			return _latitude;
		},
		set:function(value){
			_latitude=value;
			if ( _latitude === 'undefined' || _latitude === '') throw new EmptyValueException("_latitude");
		}		
	});

	Object.defineProperty(this, '_longitude', {
		get:function(){
			return _longitude;
		},
		set:function(value){
			_longitude=value;
			if ( _longitude === 'undefined' || _longitude === '') throw new EmptyValueException("_longitude");
		}		
		});
		
}
Coordinate.prototype = {};
Coordinate.prototype.constructor = Coordinate;
Coordinate.prototype.toString = function (){	
	return "Latitud: " + this.latitude + "Longitud: " + this.longitude; 
}
