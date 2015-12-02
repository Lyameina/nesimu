// constantes 
const svgNS = 'http://www.w3.org/2000/svg';

//document.rootElement.addEventListener('SVGLoad', setup, false); //SVGLoad execute au chargement du SVG.



//fonction au demarrage qui lance les listener

	//L'animation du nounours (ici car calculs nessesaires pour les rotations)
	addRotateTransform("tete", "3"); 
	addRotateTransformbras("bras_devant_1_", "3",0);
	addRotateTransformbras("bras_arriere_1_", "3",0.5);

	//ici on charge les listener : 
	document.getElementById('Ours1').addEventListener('click', ours, false);
	document.getElementById('Imprimante').addEventListener('click', imprimante, false);
	
	ordi_chargerListener();
	ecran_chargerListener();
	tableau_chargerListener();

////////////////////////////////////////////////////////
//Les fonctions pour le tableau
////////////////////////////////////////////////////////
var XMLMousseOver =''+
'<foreignObject x="160" y="200" width="500" height="300" requiredExtensions="http://www.w3.org/1999/xhtml">'
				+'<body xmlns="http://www.w3.org/1999/xhtml">'
					+'<div>'
					+'<pre >'
					+'<em class="red">public class</em> Stage{'
					+'<br/>   <em class="red">public</em> <em class="blue">boolean</em> <em class="green">personnesSympa</em>, <em class="green">sujetInteressant</em>, <em class="green">mApprendQqch</em>;'
					+'<br/>'
					+'<br/>   <em class="red">public</em> <em class="blue">boolean</em> leStageMInterresse(){'
					+'<br/>      <em class="red">if</em>(<em class="green">personnesSympa</em> &#38;&#38;( <em class="green">sujetInteressant</em> | | <em class="green">mApprendQqch</em>)){'
					+'<br/>           <em class="red">return true</em>;'
					+'<br/>      }<em class="red">else</em>{'
					+'<br/>           <em class="red">return false</em>;'
					+'<br/>      }'
					+'<br/>   }'
					+'<br/>}'
					+'</pre>   '
					+'</div>'
				+'</body>'
+'</foreignObject>';

						
var XMLMousseLeave = '<text transform="matrix(0.9925 -0.1219 0.1219 0.9925 223.9009 307.7612)" >Je cherche un stage de</text>'
					+'<text transform="matrix(0.9925 -0.1219 0.1219 0.9925 223.9009 337.7612)" >Technicien Informatique !</text>'
					+'<text id="signature" transform="matrix(1 0 0 1 536.667 392.667)" >~ Maylanie ~</text>'

function tableau_chargerListener(){
	document.getElementById('Tableau').addEventListener('mouseenter', tableauEntre, false);
    document.getElementById('Tableau').addEventListener('mouseleave', tableauSort, false);

}

function tableauEntre(){
	//~ var gContent = document.getElementById("texte");
	//~ gContent.innerHTML=XMLMousseOver;
}
function tableauSort(){
	//~ var gContent = document.getElementById("texte");
	//~ gContent.innerHTML=XMLMousseLeave;
}

////////////////////////////////////////////////////////
//Les fonctions pour l'animation de l'ordi_portable: 
////////////////////////////////////////////////////////

var tableauDesDiapos = [
			"../cotesud.png",
			"../voyantia.png",
			"../rexetera.png",
				];

function ordi_chargerListener(){
	document.getElementById('ordiDroite').addEventListener('click',ordi_diapoDroite,false);
	document.getElementById('ordiGauche').addEventListener('click',ordi_diapoGauche,false);
	document.getElementById('zone_clicable').addEventListener('click',lien_site,false);

}
function lien_site(){
	var g_image = document.getElementById("contenu_portable");
	var image = g_image.children[0];
	
	if (image.getAttribute("xlink:href") == "../cotesud.png"){
			window.open("http://traiteur-cote-sud.fr/","_blank", null);
	}
	else if (image.getAttribute("xlink:href") =="..voyantia.png"){
			window.open("http://voyantia.fr/","_blank", null);
	}
	else if (image.getAttribute("xlink:href") =="../rexetera.png"){
			window.open("http://rexetera.ca/","_blank", null);
	}
}

function ordi_diapoGauche(){
	var g_image = document.getElementById("contenu_portable");
	var image = g_image.children[0];
	var id = image.id; // id de la forme ordi_portable_diapo_X avec X le numero de diapo de 0 à ...
	
	var numeroDiapo = id.split("_")[3]; //pour avoir le numero 

	//on met la nouvelle diapo:
	if( numeroDiapo == 0){
		id = "ordi_portable_diapo_".concat(tableauDesDiapos.length-1);
		image.setAttribute("id", id); 
		image.setAttribute("xlink:href", tableauDesDiapos[tableauDesDiapos.length-1]);
	}
	else{ 
		id = "ordi_portable_diapo_".concat(--numeroDiapo);
		image.setAttribute("id", id); 
		image.setAttribute("xlink:href", tableauDesDiapos[numeroDiapo]);		}
}

function ordi_diapoDroite(){
	var g_image = document.getElementById("contenu_portable");
	var image = g_image.children[0];
	var id = image.id; // id de la forme ordiDiapo_X avec X le numero de diapo de 0 à ...
	var numeroDiapo = id.split("_")[3]; //pour avoir le numero 
	//on met la nouvelle diapo:
	if (numeroDiapo == tableauDesDiapos.length-1){
		id = "ordi_portable_diapo_0";
		image.setAttribute("id",id);
		image.setAttribute("xlink:href", tableauDesDiapos[0]);
	}
	else{
		id = "ordi_portable_diapo_".concat(++numeroDiapo);
		image.setAttribute("id",id);
		image.setAttribute("xlink:href", tableauDesDiapos[numeroDiapo]);
	}
}


////////////////////////////////////////////////////////
//Les fonctions pour l'animation de l'ecran
////////////////////////////////////////////////////////

var tableauDesDiaposEcran = [
			"/img/svg/diapo/web.svg",
			"/img/svg/diapo/lang.svg",
			"/img/svg/diapo/outils.svg",
				];

function ecran_chargerListener(){
	document.getElementById('ecranDroite').addEventListener('click',ecran_diapoDroite,false);
	document.getElementById('ecranGauche').addEventListener('click',ecran_diapoGauche,false);
}

function ecran_diapoGauche(){
	var g_image = document.getElementById("contenu_ecran");
	var image = g_image.children[0];
	var id = image.id; // id de la forme ecran_diapo_X avec X le numero de diapo de 0 à ...
	
	var numeroDiapo = id.split("_")[2]; //pour avoir le numero 

	//on met la nouvelle diapo:
	if( numeroDiapo == 0){
		id = "ecran_diapo_".concat(tableauDesDiaposEcran.length-1);
		image.setAttribute("id", id); 
		image.setAttribute("xlink:href", tableauDesDiaposEcran[tableauDesDiaposEcran.length-1]);
	}
	else{ 
		id = "ecran_diapo_".concat(--numeroDiapo);
		image.setAttribute("id", id); 
		image.setAttribute("xlink:href", tableauDesDiaposEcran[numeroDiapo]);		}
}

function ecran_diapoDroite(){
	var g_image = document.getElementById("contenu_ecran");
	var image = g_image.children[0];
	var id = image.id; 
	var numeroDiapo = id.split("_")[2]; //pour avoir le numero 
	//on met la nouvelle diapo:
	if (numeroDiapo == tableauDesDiaposEcran.length-1){
		id = "ecran_diapo_0";
		image.setAttribute("id",id);
		image.setAttribute("xlink:href", tableauDesDiaposEcran[0]);
	}
	else{
		id = "ecran_diapo_".concat(++numeroDiapo);
		image.setAttribute("id",id);
		image.setAttribute("xlink:href", tableauDesDiaposEcran[numeroDiapo]);
	}
}


//////////////////////////////////////////////
function ours(){
	alert('Prochainement: Un petit Blog sur des trucs et astuces (programmation, cuisine, jeux videos et autre !)');
}

function imprimante(){
	window.open("/cv.pdf","_blank", null);
}

function addRotateTransform(target_id, dur)
{
  var my_element = document.getElementById(target_id);

  var bb = my_element.getBBox();
  var cx = bb.x + bb.width/2;
  var cy = bb.y + bb.height/2;
  
  //Premiere animation : la tete se leve:
  var a1 = document.createElementNS(svgNS, "animateTransform");

  a1.setAttributeNS(null, "attributeName", "transform");
  a1.setAttributeNS(null, "attributeType", "XML");
  a1.setAttributeNS(null, "type", "rotate");
  a1.setAttributeNS(null, "dur", dur + "s");

  a1.setAttributeNS(null, "values", "0,"+cx+","+cy+";-30,"+cx+","+cy+";0,"+cx+","+cy+";5,"+cx+","+cy+";0,"+cx+","+cy);
  a1.setAttributeNS(null, "keySplines", "0,0.5,0.5,1;0.5,0,1,0.5;0,0.5,0.5,1;0.5,0,1,0.5");
  a1.setAttributeNS(null, "calcMode", "spline");

  a1.setAttributeNS(null, "begin", "Ours1.mouseenter");
  a1.setAttributeNS(null, "end", "Ours1.mouseleave");
  a1.setAttributeNS(null, "repeatCount", "2");

  my_element.appendChild(a1);  
}

function addRotateTransformbras(target_id, dur, delay)
{
  var my_element = document.getElementById(target_id);
  var bb = my_element.getBBox();
  var cx = bb.x + bb.width/2;
  var cy = bb.y + bb.height/8; 
  
  var a1 = document.createElementNS(svgNS, "animateTransform");

  a1.setAttributeNS(null, "attributeName", "transform");
  a1.setAttributeNS(null, "attributeType", "XML");
  a1.setAttributeNS(null, "type", "rotate");
  a1.setAttributeNS(null, "dur", dur + "s");

  a1.setAttributeNS(null, "values", "0,"+cx+","+cy+";-50,"+cx+","+cy+";0,"+cx+","+cy+";0,"+cx+","+cy);
  a1.setAttributeNS(null, "keySplines", "0,0.5,0.5,1;0.5,0,1,0.5;0.5,0,1,0.5");
  a1.setAttributeNS(null, "calcMode", "spline");
  a1.setAttributeNS(null, "begin", "Ours1.mouseenter+"+delay+"s");
  a1.setAttributeNS(null, "end", "Ours1.mouseleave ");
  a1.setAttributeNS(null, "repeatCount", "2");

  my_element.appendChild(a1);  
}
