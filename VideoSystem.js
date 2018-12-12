"use strict";

//Constructor de objeto VideoSystem
var VideoSystem = (function () {
	//usamos un singlenton para instanciarlo una sola vez.
	var instantiated; 

	function init() {

		function VideoSystem(){

			if (!(this instanceof VideoSystem)) 
				throw new InvalidAccessConstructorException();

			var _name = name; 
			var _users = []; 
			var _productions = [];
			var _categories = []; 
			var _actors = []; 
			var _directors = [];

			//Declaracion de getter y setter nombre del sistema
			Object.defineProperty(this, 'name', {
				get:function(){
					return _name;
				},
				set:function(value){
					value = typeof name !== 'undefined' ? value : "";
					if (value === "" || value === 'undefined'){
						throw new new EmptyValueException("name");
					}else{
						_name = value;
					}
				}		
			});

			//Iterador que recorre las categorias del sistema.
			Object.defineProperty(this, 'categories', {
				get:function(){
				    var nextIndex = 0;		    
				    return {
				       next: function(){
						   return nextIndex < _categories.length ?
				               {value: _categories[nextIndex++].category, done: false} :
				               {done: true};
				       }
				    }
				}	
            });	

			//Obtiene la posicion de un objeto en el array.
			this.indexOfCategory = function(category){
                
                function compareCategories(arrayCategory) {
				  return (arrayCategory.category.name === category.name)
				}
				return _categories.findIndex(compareCategories);		
			}

			//Metodo añadir categoría.
			this.addCategory = function(category){
                
                if(!(category instanceof Category)){
					throw new InvalidParamException("Category");
                }
                
				if (category == null) {
					throw new NullInvalidException("category");
                }
                
				var search = this.indexOfCategory(category); 	
				if (search === -1){
					_categories.push({category: category, productions: []});
				} else{
					throw new CategoryExistException("category");
				}
				return _categories.length;
			};

			//Metodo eliminar categoría.
			this.removeCategory = function(category){
                
                if (!(category instanceof Category)) { 
					throw new InvalidParamException("Category");
                }
                
				if (category == null) {
					throw new NullInvalidException("category");
				}	
				var position = this.indexOfCategory(category); 	
				if (position !== -1){
					_categories.splice(position, 1);			
				} else{
					throw new CategoryNotExistsException("category");
				}	
				return _categories.length;
			};
            
            //Iterador que reccore los usuarios del sistema.
			Object.defineProperty(this, 'users', {
				get:function(){
					var nextIndex = 0;		    
					return {
					next: function(){
						return nextIndex < _users.length ?
							{value: _users[nextIndex++], done: false} :
							{done: true};
					}
					}
				}	
			});

            //Obtiene la posicion de un usuario en el array.
            this.indexOfUser = function(user){
				function compareUsers(arrayUser) {
				  return (arrayUser.userName === user.userName)
				}
				return _users.findIndex(compareUsers);		
			}
            
            //Obtiene la posicion de un email en el array.
			this.indexOfEmail = function(user){
				function compareUsers(arrayUser) {
				return (arrayUser.email === user.email)
				}
				return _users.findIndex(compareUsers);		
			}
            
            //Metodo añadir usuario
			this.addUser = function(user){
                
                if(!(user instanceof User)){
					throw new InvalidParamException("User");
                }
                
				if (user == null) {
					throw new NullInvalidException("user");
                }
                
				var userex = this.indexOfUser(user); 
				var emailex = this.indexOfEmail(user);
				if ( userex === -1){
					if (emailex === -1) {
						_users.push(user);
					}else{
						throw new EmailExistException("email");
					}
				} else{
					throw new UsernameExistException("userName");
				}
				return _users.length;
			};

			//Metodo de eliminar usuario
			this.removeUser = function(user){
				if (!(user instanceof User)) { 
					throw new InvalidParamException("User");
                }
                
				if (user == null) {
					throw new NullInvalidException("User");
				}	

				var search = this.indexOfUser(user);	
				if (search !== -1){
					_users.splice(search, 1);			
				} else{
					throw new UsernameNotExistException("User");
				}	
				return _users.length;
            };
            
			//Iterador que recorre las producciones del sistema
			Object.defineProperty(this, 'productions', {
				get:function(){
					var nextIndex = 0;		    
					return {
					next: function(){
						return nextIndex < _productions.length ?
							{value: _productions[nextIndex++], done: false} :
							{done: true};
					}
					}
				}	
			});

			//Obtiene la posicion del objeto en el array.
			this.indexOfProduction = function(production){
				function compareProduction(arrayProduction) {
				  return (arrayProduction.title === production.title)
				}
				return _productions.findIndex(compareProduction);		
			}

			//Metodo de añadir una produccion.
			this.addProduction = function(production){
                
                if(!(production instanceof Production)){
					throw new InvalidParamException("Production");
				}
                
                if (production == null) {
					throw new NullParamException("production");
				}
                
                var search = this.indexOfProduction(production); 
				if (search === -1){
					_productions.push(production);
				} else{
					throw new ProductionExistsException("production");
				}
				return _productions.length;
			};

			//Metodo de eliminar una produccion.
			this.removeProduction = function(production){
                
                if(!(production instanceof Production)){
					throw new InvalidParamException("Production");
				}
                
                if (production == null) {
					throw new NullParamException("production");
				}	
                
                var search = this.indexOfProduction(production);
				if (search !== -1){
					_productions.splice(search, 1);			
				} else{
					throw new ProductionNotExistsException("production");
				}	
				return _productions.length;
            };
            
			//Iterador que recorre los actores del sistema
			Object.defineProperty(this, 'actors', {
				get:function(){
					var nextIndex = 0;		    
					return {
					next: function(){
						return nextIndex < _actors.length ?
							{value: _actors[nextIndex++].actor, done: false} :
							{done: true};
					}
					}
				}	
			});

            //Obtiene la posicion del objeto en el array.
			this.indexOfActor = function(actor){
				function compareActors(arrayActor) {
				  return (arrayActor.actor.name === actor.name || arrayActor.actor.lastName1 === actor.lastName1)
				}
				return _actors.findIndex(compareActors);		
			}
            
            //Metodo de añadir actor.
			this.addActor = function(actor){
                
                if(!(actor instanceof Person)){
					throw new InvalidParamException("Person");
				}
                
                if (actor == null) {
					throw new NullParamException("actor");
				}
                
                var search = this.indexOfActor(actor); 
				if (search === -1){ 
                    _actors.push({ actor: actor, productions: [] });
				} else{
					throw new ActorExistsException("name");
				}
				return _actors.length;
			};

			//Metodo de eliminar un actor.
			this.removeActor = function(actor){
                
                if(!(actor instanceof Person)){
					throw new InvalidParamException("Person");
				}
                
                if (actor == null) {
					throw new NullParamException("actor");
				}
                
                var search = this.indexOfActor(actor);
				if (search !== -1){
					_actors.splice(search, 1);			
				} else{
					throw new ActorNotExistsException("actor");
				}
				return _actors.length;
			};

			//Iterador que recorre los directores del sistema
			Object.defineProperty(this, 'directors', {
				get:function(){
					var nextIndex = 0;		    
					return {
					next: function(){
						return nextIndex < _directors.length ?
							{value: _directors[nextIndex++].director, done: false} :
							{done: true};
					}
					}
				}	
            });
            
            //Obtiene la posicion del objeto en el array
            this.indexOfDirector = function(director){
				function compareDirectors(arrayDirector) {
					return (arrayDirector.director.name === director.name || arrayDirector.director.lastName1 === director.lastName1)
				  }
				  return _directors.findIndex(compareDirectors);		
            }

			//Metodo de añadir un director.
			this.addDirector = function(director){
				if(!(director instanceof Person)){
					throw new InvalidParamException("Person");
				}
				if (director == null) {
					throw new NullParamException("director");
				}
				var search = this.indexOfDirector(director); 
				if (search === -1){
					_directors.push({director: director, productions: []});
				} else{
					throw new DirectorExistException("director");
				}
				return _directors.length;
			};
			
			//Metodo de eliminar director.
            this.removeDirector = function(director){
                
                if(!(director instanceof Person)){
					throw new InvalidParamException("Person");
				}
                
                if (director == null) {
					throw new NullParamException("director");
				}
                
                var search = this.indexOfDirector(director); 
				if (search !== -1){
					_directors.splice(search, 1);
				} else{
					throw new DirectorNotExistException("director");
				}
				return _directors.length;
			};

			//Metodo que asigna una produccion a una categoria.
			this.assignCategory = function(category, production){

				if (category === null) {
					throw new NullInvalidException("category");
				}
				if (production === null) {
					throw new NullInvalidException("production");
				}

				if (!(category instanceof Category)) { 
					throw new InvalidParamException("category");;
				}

				if (!(production instanceof Production)) { 
					throw new InvalidParamException("production");;
				}
				
				var searchCategory = this.indexOfCategory(category); 
				var searchProduction = this.indexOfProduction(production);

				if ( searchCategory !== -1 ) {
					if (searchProduction !== -1) {
						_categories[searchCategory].productions.push(production);
					} else {
						_productions.push (production);
						_categories[searchCategory].productions.push(production);
					}
				}	else {
					_categories.push({category: category, productions: []});
					if (searchProduction !== -1) {
						_categories[searchCategory].productions.push(production);
					} else {
						_productions.push (production);
						_categories[searchCategory].productions.push(production);
					}
				}
				return _categories[searchCategory].productions.length;
			}

			//Busca la posicion de una produccion en el array dentro de categorias.
			this.indexOfProductionCategory = function(production, posproduction){
				function compareElements(element) {
					return (element.title === production.title)
				}
				return posproduction.findIndex(compareElements);		
			}

			//Metodo que desasigna una produccion a una categoria.
			this.deassignCategory = function(category, production){

				if (category === null) {
					throw new NullInvalidException("category");
				}
				if (production === null) {
					throw new NullInvalidException("production");
				}

				if (!(category instanceof Category)) { 
					throw new InvalidParamException("category");;
				}

				if (!(production instanceof Production)) { 
					throw new InvalidParamException("production");;
				}
				
				var searchCategory = this.indexOfCategory(category); 
				var searchProduction = this.indexOfProductionCategory(production, _categories[searchCategory].productions);

				if ( searchCategory !== -1 ) {
					if (searchProduction !== -1) {
						_categories[searchCategory].productions.splice(searchProduction,1);
					} else {
						throw new ProductionNotAssignException();
					}
				}	else {
						throw new CategoryNotAssignException();
				}
				return _categories[searchCategory].productions.length;
			}

			//Metodo que asigna una produccion a un director.
			this.assignDirector = function(person, production){
				
				if (person === null) {
					throw new NullInvalidException("person");
				}
				if (production === null) {
					throw new NullInvalidException("production");
				}

				if (!(person instanceof Person)) { 
					throw new InvalidParamException("person");;
				}

				if (!(production instanceof Production)) { 
					throw new InvalidParamException("production");;
				}
				
				var searchDirector = this.indexOfDirector(person); 
				var searchProduction = this.indexOfProduction(production);

				if ( searchDirector !== -1 ) {
					if (searchProduction !== -1) {
						_directors[searchDirector].productions.push(production);
					} else {
						_productions.push (production);
						_directors[searchDirector].productions.push(production);
					}
				}	else {
					_directors.push({director: person, productions: []});
					if (searchProduction !== -1) {
						_directors[searchDirector].productions.push(production);
					} else {
						_productions.push(production);
						_directors[searchDirector].productions.push(production);
					}
				}
				return _directors[searchDirector].productions.length;
			}

			//Metodo que asigna una produccion a un actor.
			this.assignActor = function(person, production, character, main){

				if (person === null) {
					throw new NullInvalidException("person");
				}
				if (production === null) {
					throw new NullInvalidException("production");
				}

				if (!(person instanceof Person)) { 
					throw new InvalidParamException("person");;
				}

				if (!(production instanceof Production)) { 
					throw new InvalidParamException("production");;
				}
				
				var searchActor = this.indexOfActor(person); 
				var searchProduction = this.indexOfProduction(production);

				if ( searchActor !== -1 ) {
					if (searchProduction !== -1) {
						_actors[searchActor].productions.push({production: production, character: character, main: main});
					} else {
						_productions.push (production);
						_actors[searchActor].productions.push({production: production, character: character, main: main});
					}
				}	else {
					_actors.push({ Actor: person, productions: []});
					if (searchProduction !== -1) {
						_actors[searchActor].productions.push({production: production, character: character, main: main});
					} else {
						_productions.push (production);
						_actors[searchActor].productions.push({production: production, character: character, main: main});
					}
				}
				return _actors[searchActor].productions.length;
			}

		}
		VideoSystem.prototype = {}; 
		VideoSystem.prototype.constructor = VideoSystem;

		//Devolvemos el objeto para que sea una instancia única.
		var video = new VideoSystem();
		return video;
	}
	return {

		getInstance: function () { 
			if (!instantiated) { 
				instantiated = init();
			}
			return instantiated; 
		}
	};
})();
