/*Creando los constructores */

function Person(name, lastname1, lastname2, born, picture) {
	
	if (!(this instanceof Person)) 
		throw new InvalidAccessConstructorException();

	var _name = name;
  var _lastname1 = lastname1;
  var _lastname2 = lastname2;
  var _born = born;
  var _picture = picture;

    Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			_name=value;
		}		
	});

	Object.defineProperty(this, 'lastname1', {
		get:function(){
			return _lastname1;
		},
		set:function(value){
			_lastname1=value;
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
    
    this.toString = function() {
        str = "";
        str = _name + " " +  _lastname1 + " " + _lastname2 +
        _born + " " + _picture;
        return str;
    }
}
Person.prototype = {};
Person.prototype.constructor = Person;

function Category(name, description) {

	if (!(this instanceof Person)) 
		throw new InvalidAccessConstructorException();

  var _name = name;
  var _description = description;


    Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			_name=value;
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
    
    this.toString = function() {
        str = "";
        str = _name + " " + _description;
        return str;
    }
}
Category.prototype = {};
Category.prototype.constructor = Category;

function Resource(duration, link, audios, subtitles) {
    var _duration = duration;
    var _link = link;
    var _audios = audios;
    var _subtitles = subtitles;

    Object.defineProperty(this, 'duration', {
		get:function(){
			return _duration;
		},
		set:function(value){
			_duration=value;
		}		
	});

	Object.defineProperty(this, 'link', {
		get:function(){
			return _link;
		},
		set:function(value){
			_link=value;
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
    
    this.toString = function() {
        str = "";
        str = _duration + " " +  _link + " " + _audios +
        subtitles;
        return str;
    }
}
Resource.prototype = {};
Resource.prototype.constructor = Resource;