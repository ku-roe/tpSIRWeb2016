
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.xi = 0;
    this.yi = 0;
    this.xf = 0;
    this.yf = 0;
    this.hasSelectElement = false;

	// Developper les 3 fonctions gérant les événements
    this.boolean = function (evt){
        if(!this.hasSelectElement){
            this.hasSelectElement = true;
            var pos = getMousePosition(canvas, evt);
            this.xi = pos.x;
            this.yi = pos.y;
			alert(this.xi);
            console.log("initialX : " + this.xi +" // initialY : " + this.yi);
            pencil.onInteractionStart(this);
        }
    }.bind(this);

    this.drag = function(evt){
        if(this.hasSelectElement){
            var pos = getMousePosition(canvas, evt);
            this.xf = pos.x;
            this.yf = pos.y;
            console.log("Move");

            console.log("finalX : " + this.xf +" // finalY : " + this.yf);
            pencil.onInteractionUpdate(this);
        }
    }.bind(this);


    this.drop = function (evt){
        if(this.hasSelectElement){
            this.hasSelectElement = false;
            var pos = getMousePosition(canvas, evt);
            this.xf = pos.x;
            this.yf = pos.y;

            console.log("finalX : " + this.xf +" // finalY : " + this.yf);
            pencil.onInteractionEnd(this);
        }
    }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.boolean, false);
    canvas.addEventListener('mousemove', this.drag, false);
    canvas.addEventListener('mouseup', this.drop, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



