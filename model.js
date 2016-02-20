
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
 function Form(epaisseur, couleur ){
     this.epaisseur=epaisseur;
     this.couleur=couleur;
 }

function Line( debX, debY, finX, finY, epaisseur, couleur){
    Form.call(this, epaisseur, couleur);
    this.debX = debX;
    this.debY = debY;
    this.finX = finX;
    this.finY = finY;

}

function Rectangle(debX, debY, finX, finY, epaisseur,  couleur){
    Form.call(this, epaisseur, couleur);
    this.debX = debX;
    this.debY = debY;
    this.finX = finX;
    this.finY = finY;
}

function Circle (cenX, cenY, radius, epaisseur, couleur ){
	Form.call(this, epaisseur, couleur);
	this.cenX = cenX;
	this.cenY = cenY;
	this.radius = radius;
	
}

function Drawing(){
    this.forms =[];
	this.addForm = function(form){
		this.forms.push(form);
	};
	this.removeForm = function(id){
		this.forms.splice(id,1);
	};
}