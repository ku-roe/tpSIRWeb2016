
var editingMode = { circle: 0, line: 1, rect: 2 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentForm = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);



	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(DnD){
		currColour = $('#colour').val();
		currLineWidth = $('#spinnerWidth').val();
		if ($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.xi, DnD.yi, DnD.xf- DnD.xi, DnD.yf- DnD.yi, currLineWidth, currColour);
		}else if($('#butLine')[0].checked){
			var line = new Line(DnD.xi, DnD.yi, DnD.xf, DnD.yf, currLineWidth, currColour);
		}else {
			var radius = Math.sqrt(Math.pow(DnD.xf - DnD.xi,2)+Math.pow(DnD.yf - DnD.yi,2));
			var circle = new Circle(DnD.xi, DnD.yi, radius,currLineWidth, currColour);
		}



	}.bind(this);

	this.onInteractionUpdate = function(DnD){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.paint(ctx);
		currColour = $('#colour').val();
		currLineWidth = $('#spinnerWidth').val();
		if ($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.xi, DnD.yi, DnD.xf- DnD.xi, DnD.yf- DnD.yi, currLineWidth, currColour);
			rec.paint(ctx);
		}else if($('#butLine')[0].checked){
			var line = new Line(DnD.xi, DnD.yi, DnD.xf, DnD.yf, currLineWidth, currColour);
			line.paint(ctx);
		}else {
			var radius = Math.sqrt(Math.pow(DnD.xf - DnD.xi,2)+Math.pow(DnD.yf - DnD.yi,2));
			var circle = new Circle(DnD.xi, DnD.yi, radius,currLineWidth, currColour);
			circle.paint (ctx);
		}

	}.bind(this);

	this.onInteractionEnd = function(DnD){
		currColour = $('#colour').val();
		currLineWidth = $('#spinnerWidth').val();
		if ($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.xi, DnD.yi, DnD.xf- DnD.xi, DnD.yf- DnD.yi, currLineWidth, currColour);
			drawing.updateFormList(rec);
			rec.paint(ctx);
			console.log(rec);
			drawing.addForm(rec);
		}else if($('#butLine')[0].checked){
			var line = new Line(DnD.xi, DnD.yi, DnD.xf, DnD.yf, currLineWidth, currColour);
			drawing.updateFormList(line);
			line.paint(ctx);
			console.log(line);
			drawing.addForm(line);
			 
		}else{
			var radius = Math.sqrt(Math.pow(DnD.xf - DnD.xi,2)+Math.pow(DnD.yf - DnD.yi,2));
			var circle = new Circle(DnD.xi, DnD.yi, radius,currLineWidth, currColour);
			drawing.updateFormList(circle);
			circle.paint (ctx);
			console.log(circle);
			drawing.addForm(circle);
		}

		 console.log(drawing.forms);
	}.bind(this);
};


