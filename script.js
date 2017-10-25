$(document).ready(function(){
    $('#bouquatreinco').click(function(){$('#quatreinco').toggleClass('disparait')});
    $('#bouquatreinco').click(function(){$('#difficulte').toggleClass('disparait')});
    $('#bouquatreinco').click(function(){newGame();});
    $('#boutregle').click(function(){$('#regle').toggleClass('disparait')});
    $('#partiepre').click(function(){$('#partieprece').toggleClass('disparait')});
    $('#partiepre').click(function(){derresulat();});
    var sol1=0; var sol2 = 0; var sol3 = 0; var sol4 = 0;
    var essai = 1;
    var clic = 1;
    function choix(){ 	
        	$('#bleu').click(function(){
        		$('#bl'+essai+'es'+clic).attr('src', 'img/1.gif') 
        		clic++;});
        	$('#vert').click(function(){
        		$('#bl'+essai+'es'+clic).attr('src', 'img/2.gif') 
        		clic++;});
        	$('#rouge').click(function(){
        		$('#bl'+essai+'es'+clic).attr('src', 'img/3.gif') 
        		clic++;});
        	$('#orang').click(function(){
        		$('#bl'+essai+'es'+clic).attr('src', 'img/4.gif')
        		 clic++;});
        	$('#jaune').click(function(){
        		$('#bl'+essai+'es'+clic).attr('src', 'img/5.gif') 
        		clic++;});
        	$('#noir').click(function(){
        		$('#bl'+essai+'es'+clic).attr('src', 'img/6.gif')
        		 clic++;});
    }
    function rapportchoix(){
    	if ($('#bl'+essai+'es1').attr('src') == "img/1.gif") {rep1 = 1;}
    	if ($('#bl'+essai+'es1').attr('src') == "img/2.gif") {rep1 = 2;}
    	if ($('#bl'+essai+'es1').attr('src') == "img/3.gif") {rep1 = 3;}
    	if ($('#bl'+essai+'es1').attr('src') == "img/4.gif") {rep1 = 4;}
    	if ($('#bl'+essai+'es1').attr('src') == "img/5.gif") {rep1 = 5;}
    	if ($('#bl'+essai+'es1').attr('src') == "img/6.gif") {rep1 = 6;}
    	//
    	if ($('#bl'+essai+'es2').attr('src') == "img/1.gif") {rep2 = 1;}
    	if ($('#bl'+essai+'es2').attr('src') == "img/2.gif") {rep2 = 2;}
    	if ($('#bl'+essai+'es2').attr('src') == "img/3.gif") {rep2 = 3;}
    	if ($('#bl'+essai+'es2').attr('src') == "img/4.gif") {rep2 = 4;}
    	if ($('#bl'+essai+'es2').attr('src') == "img/5.gif") {rep2 = 5;}
    	if ($('#bl'+essai+'es2').attr('src') == "img/6.gif") {rep2 = 6;}
    	//
    	if ($('#bl'+essai+'es3').attr('src') == "img/1.gif") {rep3 = 1;}
    	if ($('#bl'+essai+'es3').attr('src') == "img/2.gif") {rep3 = 2;}
    	if ($('#bl'+essai+'es3').attr('src') == "img/3.gif") {rep3 = 3;}
    	if ($('#bl'+essai+'es3').attr('src') == "img/4.gif") {rep3 = 4;}
    	if ($('#bl'+essai+'es3').attr('src') == "img/5.gif") {rep3 = 5;}
    	if ($('#bl'+essai+'es3').attr('src') == "img/6.gif") {rep3 = 6;}
    	//
    	if ($('#bl'+essai+'es4').attr('src') == "img/1.gif") {rep4 = 1;}
    	if ($('#bl'+essai+'es4').attr('src') == "img/2.gif") {rep4 = 2;}
    	if ($('#bl'+essai+'es4').attr('src') == "img/3.gif") {rep4 = 3;}
    	if ($('#bl'+essai+'es4').attr('src') == "img/4.gif") {rep4 = 4;}
    	if ($('#bl'+essai+'es4').attr('src') == "img/5.gif") {rep4 = 5;}
    	if ($('#bl'+essai+'es4').attr('src') == "img/6.gif") {rep4 = 6;}
    	return rep1, rep2, rep3, rep4;
    }
    function newGame(){
    	sol1 = Math.floor((Math.random() *6 ) + 1);
    	sol2 = Math.floor((Math.random() *6 ) + 1);
    	sol3 = Math.floor((Math.random() *6 ) + 1);
    	sol4 = Math.floor((Math.random() *6 ) + 1);
    	console.log(sol1, sol2 ,sol3, sol4);
    	return sol1, sol2, sol3, sol4;
    }
    var blanc= 0;
    var noire= 0;
    function resultat(){
    	if (rep1 == sol1){
    		noire++;
    	}else if ((rep1== sol2) || (rep1== sol3) || (rep1== sol4)){
    		blanc++;
    	}
    	if (rep2 == sol2){
    		noire++;
    	}else if ((rep2== sol1) || (rep2== sol3) || (rep2== sol4)) {
			blanc++;    		
    	}
    	if (rep3 == sol3){
    		noire++;
    	}else if ((rep3== sol2) || (rep3== sol1) || (rep3== sol4)) {
			blanc++;
    	}
    	if (rep4 == sol4){
    		noire++;
    	}else if ((rep4== sol2) || (rep4== sol3) || (rep4== sol1)) {
			blanc++;
    	}
    	console.log(blanc);
    	console.log(noire);
    	afficheresul();
    }
    function afficheresul(){
    	if (noire == 1){
    		$('#rep'+essai+'es1').attr('src', 'img/noire.png');}
    	if (noire == 2){
    		$('#rep'+essai+'es1').attr('src', 'img/noire.png');
    		$('#rep'+essai+'es2').attr('src', 'img/noire.png');}
    	if (noire == 3){
    		$('#rep'+essai+'es1').attr('src', 'img/noire.png');
    		$('#rep'+essai+'es2').attr('src', 'img/noire.png');
    		$('#rep'+essai+'es3').attr('src', 'img/noire.png');}
    	if (noire == 4){
    		$('#rep'+essai+'es1').attr('src', 'img/noire.png');
    		$('#rep'+essai+'es2').attr('src', 'img/noire.png');
    		$('#rep'+essai+'es3').attr('src', 'img/noire.png');
    		$('#rep'+essai+'es4').attr('src', 'img/noire.png');
    		endGame();
    		}
    	if (blanc == 1){
    		$('#rep'+essai+'es4').attr('src', 'img/blanc.png');}
    	if (blanc == 2){
    		$('#rep'+essai+'es4').attr('src', 'img/blanc.png');
    		$('#rep'+essai+'es3').attr('src', 'img/blanc.png');}
    	if (blanc == 3){
    		$('#rep'+essai+'es4').attr('src', 'img/blanc.png');
    		$('#rep'+essai+'es3').attr('src', 'img/blanc.png');
    		$('#rep'+essai+'es2').attr('src', 'img/blanc.png');}
    	if (blanc == 4){
    		$('#rep'+essai+'es4').attr('src', 'img/blanc.png');
    		$('#rep'+essai+'es3').attr('src', 'img/blanc.png');
    		$('#rep'+essai+'es2').attr('src', 'img/blanc.png');
    		$('#rep'+essai+'es1').attr('src', 'img/blanc.png');
    		}
    }
    function perdu(){
    	if (essai == 12){
    	    $('#global').toggleClass('disparait');
    	    $('#perd').toggleClass('disparait');
    	    $('#rejouer').toggleClass('disparait');
    	    victoire++;
    		sessionStorage.setItem("essai"+victoire , essai);
    	}
    }
    function valider(){
    	rapportchoix();
    	resultat();
    	perdu();
    	essai++;
    	clic = 1;
    	noire = 0;
    	blanc = 0;
    }
    var victoire = 0;
    function endGame(){
    	$('#fini').html("Bravo<br> Tu as réussi en "+essai+" coups");
    	$('#fini').toggleClass('disparait');
    	$('#rejouer').toggleClass('disparait');
    	victoire++;
    	localStorage.setItem("essai"+victoire , essai);
    }
    function erjouer(){
    	$('.renouveau').attr('src', 'img/vide.gif');
    	essai = 1;
    	$('#global').removeClass('disparait');
    	$('#perd').addClass('disparait');
    	$('#rejouer').toggleClass('disparait');
    	$('#fini').addClass('disparait');
    	newGame();
    }
   	var validre = document.getElementById("validation2");
   	validre.addEventListener("click", function(){
 		valider();
 	});
 	var rejoue = document.getElementById("rejouer");
 	rejoue.addEventListener("click", function(){
 		erjouer();
 	});
    choix();
});