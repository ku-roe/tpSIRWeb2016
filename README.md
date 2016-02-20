<h1>TP Web : Javascript et HTML5</h1>

<h2>TP fait par Banchet Chloé et Kaakati Dania</h2>
Ce TP a pour but de créer une application web avec une architecture en MVC, avec le langage JavaScript, principalement.

<h3>Model</h3>
Le modèle définit la structure de chaque objet utiles pour dessiner les différentes formes.
Ici, tous les objets sont des sous-classes de la classe Form, et sont Ligne, Rectangle et Cercle. Il y a aussi l'objet Drawing, le canvas.

<h3>View</h3>
La vue s'occupe de mettre à jour l'interface web. C'est ici que seront affichées les formes sur le canvas grâce à la méthode paint.
La méthode paint est redéfinie pour chaque forme dessinable. La méthode pour mettre à jour est donc définie ici et celle pour les supprimer également.

<h3>Controller</h3>
Le controleur permet de faire le lien entre le modèle et la vue grâce à des "listeners".
Il existe 3 listeners; onInteractionStart, qui créé les formes grâce aux coordonnées du canvas.
onInteractionUpdate, qui met à jour les formes en temps réel.
onInteractionEnd, qui affiche la forme définitive sur le canvas et enregistre la forme et ses coordonées et autres informations dans la liste des formes.

<h3>Listener</h3>
Les listeners permettent de gérer les différentes interactions grâce au fichier interaction.js
Ici, les interactions sont faites avec la souris et permet de gérer le glisser-déplacer pour les formes.