/*Creando los constructores */

function Person(name, lastname1, lastname2, born, picture) {
    var name = name;
    var lastname1 = lastname1;
    var lastname2 = lastname2;
    var born = born;
    var picture = picture;

    Object.defineProperty(this, 'name', {
		get:function(){
			return name;
		},
		set:function(value){
			name=value;
		}		
	});

	Object.defineProperty(this, 'lastname1', {
		get:function(){
			return lastname1;
		},
		set:function(value){
			lastname1=value;
		}		
    });
    
    Object.defineProperty(this, 'lastname2', {
		get:function(){
			return lastname2;
		},
		set:function(value){
			lastname2=value;
		}		
    });
    
    Object.defineProperty(this, 'born', {
		get:function(){
			return born;
		},
		set:function(value){
			born=value;
		}		
    });
    
    Object.defineProperty(this, 'picture', {
		get:function(){
			return picture;
		},
		set:function(value){
			picture=value;
		}		
    });
    
    this.toString = function() {
        str = "";
        str = name + " " +  lastname1 + " " + lastname2 +
        born + " " + picture;
        return str;
    }
}
Person.prototype = {};
Person.prototype.constructor = Person;

function Category(name, description) {
    var name = name;
    var description = description;


    Object.defineProperty(this, 'name', {
		get:function(){
			return name;
		},
		set:function(value){
			name=value;
		}		
	});

	Object.defineProperty(this, 'description', {
		get:function(){
			return description;
		},
		set:function(value){
			description=value;
		}		
    });
    
    this.toString = function() {
        str = "";
        str = name + " " + description;
        return str;
    }
}
Category.prototype = {};
Category.prototype.constructor = Category;

function Resource(duration, link, audios, subtitles) {
    var duration = duration;
    var link = link;
    var audios = audios;
    var subtitles = subtitles;

    Object.defineProperty(this, 'duration', {
		get:function(){
			return duration;
		},
		set:function(value){
			duration=value;
		}		
	});

	Object.defineProperty(this, 'link', {
		get:function(){
			return link;
		},
		set:function(value){
			link=value;
		}		
    });
    
    Object.defineProperty(this, 'audios', {
		get:function(){
			return audios;
		},
		set:function(value){
			audios=value;
		}		
    });
    
    Object.defineProperty(this, 'subtitles', {
		get:function(){
			return subtitles;
		},
		set:function(value){
			subtitles=value;
		}		
    });
    
    this.toString = function() {
        str = "";
        str = duration + " " +  link + " " + audios +
        subtitles;
        return str;
    }
}
Resource.prototype = {};
Resource.prototype.constructor = Resource;