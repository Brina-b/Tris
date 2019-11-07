var turno=0;
var winX=0;
var winO=0;
var enable=0;

var v=[0,0,0,0,0,0,0,0,0,0];

function draw(x) 
{
	var id= x.toString();
	if(v[0]==1)
	{
		document.getElementById('winner').innerHTML= " ";
		document.getElementById('winner').innerHTML=" La partita è finita!";
		return null;
	}

	if(v[x]!=0)
	{
		document.getElementById('winner').innerHTML="La casella è già occupata!"
		turno--;
	}
	if(enable!=0)
	{
		 if(turno%2==0)
			{
			document.getElementById('winner').innerHTML=" ";
			document.getElementById(x).innerText= "X";
			v[x]=1;
			turno++;
			}
		else
			{
			document.getElementById('winner').innerHTML= " ";
			document.getElementById(x).innerText= "O";
			v[x]=2;
			turno++;
			}
	}

	if(turno==9)
	{
		document.getElementById('winner').innerHTML= "pareggio.";
	}
 

 //controllo vincita:
	if( (v[1] == 1 && v[2] == 1 && v[3] == 1) || (v[4] == 1 && v[5] == 1 && v[6] == 1) || (v[7] == 1 && v[8] == 1 && v[9] == 1) ||
        (v[1] == 1 && v[4] == 1 && v[7] == 1) || (v[2] == 1 && v[5] == 1 && v[8] == 1) || (v[3] == 1 && v[6] == 1 && v[9] == 1) ||
        (v[1] == 1 && v[5] == 1 && v[9] == 1) || (v[3] == 1 && v[5] == 1 && v[7] == 1))
	{
		v[0]=1;
		document.getElementById('winner').innerHTML= "Ha vinto il giocatore X!";
		winX++;
	}

	else if((v[1] == 2 && v[2] == 2 && v[3] == 2) || (v[4] == 2 && v[5] == 2 && v[6] == 2) || (v[7] == 2 && v[8] == 2 && v[9] == 2) ||
        	(v[1] == 2 && v[4] == 2 && v[7] == 2) || (v[2] == 2 && v[5] == 2 && v[8] ==2) || (v[3] == 2 && v[6] == 2 && v[9] == 2) ||
        	(v[1] == 2 && v[5] == 2 && v[9] == 2) || (v[3] == 2 && v[5] == 2 && v[7] == 2))
	{
		v[0]=1;
		document.getElementById('winner').innerHTML= "Ha vinto il giocatore O!";
		winO++;
		document.getElementById("punteggio").innerHTML = "" + winX + "" + winO+ "  ";
	}

}


function restart() 
{		enable=1;
	    for(var i=1; i<10; i++) 
	    {
	     	document.getElementById(i).innerHTML=" ";
           	v[i]=0;  
			document.getElementById("start").innerHTML = "Revenge"; 
			document.getElementById("punteggio").innerHTML = "Giocatore X: "+ winX +" " +" Giocatore O: " +winO;

	
        }
        v[0]=0;
       
        turn = 0;
        enable=1;
 }

 
