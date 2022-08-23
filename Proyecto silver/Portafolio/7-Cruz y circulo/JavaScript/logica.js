/*vamos a crear la logica, si hago un click en un cuadro debe ocurrir algo*/

/*haremos que sea valida para todo*/

/*vamos hacerlo que sea multijugador

SOLO TENEMOS UN PROBLEMA Y ES EL SIGUIENTE, NO SE PUEDE SOBRESCRIBIR LA MISMA POSICION
POR ESO LO VALIDAREMOS*/

/*Una vez hagamos esto obtendremos el ganador*/
turno=document.getElementById("turno");
turnoJugador=1
/*crearemos un array y asi lo validaremos*/
punto=[];
/*Ya que es un juego obtendremos el nombre del jugador uno y dos*/
jugador1=prompt("INGRESE EL NOMBRE DEL JUGADOR 1");
jugador2=prompt("INGRESE EL NOMBRE DEL JUGADOR 2");
turno.innerHTML="Es el turno de " +jugador1;
function hijo(n)
{
	a=0;
	if(turnoJugador==1 && a==0)
	{
		//esta condicional hace lo siguiente , cuando pongo una x, se crea un hijo
		//si vuelven a pulsar la x preguntaran si tiene un hijo
		//si es que si, no lo dejara hacer nada
		//ya penelope no puede jugar en la misma casilla que jugo marco
		if(document.getElementById("hijo"+n).hasChildNodes()==true)
		{
			turno.innerHTML="Es el turno de " +jugador1 + "(esa casilla esta ocupada)";
		}
		else
		{
			document.getElementById("hijo"+n).innerHTML='<img src="img/cruz.png">'  ;
			turno.innerHTML="Es el turno de " +jugador2;
			punto[n]=turnoJugador;
			turnoJugador=2;
			a=1;
		}
		
		
	}
	if(turnoJugador==2 & a==0)
	{
		if(document.getElementById("hijo"+n).hasChildNodes()==true)
		{
			turno.innerHTML="Es el turno de " +jugador2 + "(esa casilla esta ocupada)";
		}
		else
		{
			document.getElementById("hijo"+n).innerHTML='<img src="img/circulo.png">'  ;
			turno.innerHTML="Es el turno de " +jugador1;
			punto[n]=turnoJugador;
			turnoJugador=1;
		}
		//document.getElementById("hijo"+n).style.backgroundColor="red";
		
	}
	obtenerGanador();

}

function obtenerGanador()
{
	let i=1;
	//se puede ganar de 8 formas diferentes 
	if((punto[1]==1 & punto[4]==1 & punto[7]==1) || (punto[2]==1 & punto[5]==1 & punto[8]==1) || (punto[3]==1 & punto[6]==1 & punto[9]==1) || (punto[1]==1 & punto[2]==1 & punto[3]==1) ||(punto[4]==1 & punto[5]==1 & punto[6]==1) ||(punto[7]==1 & punto[8]==1 & punto[9]==1) ||(punto[1]==1 & punto[5]==1 & punto[9]==1) ||(punto[3]==1 & punto[5]==1 & punto[7]==1))
	{
		turno.innerHTML = jugador1 + " ha ganado!!!!!";
		while(i<10)
		{
			cuadroGanador=document.getElementById("hijo" + i);
			cuadroGanador.style.backgroundColor="green";
			++i;
		}
	}
	if((punto[1]==2 & punto[4]==2 & punto[7]==2) || (punto[2]==2 & punto[5]==2 & punto[8]==2) || (punto[3]==2 & punto[6]==2 & punto[9]==2) || (punto[1]==2 & punto[2]==2& punto[3]==2) ||(punto[4]==2 & punto[5]==2 & punto[6]==2) ||(punto[7]==2 & punto[8]==2 & punto[9]==2) ||(punto[1]==2 & punto[5]==2 & punto[9]==2) ||(punto[3]==2 & punto[5]==2 & punto[7]==2))
	{
		turno.innerHTML = jugador2 + " ha ganado!!!!!";
		while(i<10)
		{
			cuadroGanador=document.getElementById("hijo" + i);
			cuadroGanador.style.backgroundColor="green";
			++i;
		}
	}
	
	
}

//asi es la logica de un juego
//crearemos una celebracion haciendo que los nueves cuadros cambien
