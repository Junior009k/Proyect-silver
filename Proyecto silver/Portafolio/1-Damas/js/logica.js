/*llamaria al elemento por la clase, pero solo me gusta usar clases para css y los id para javascript asi esta mas organizado*/
//haremos que la puntuacion sea dinamica
const puntuacion=document.getElementById("cantidadDeFichas");
//const fichaJ2=document.getElementById("fichasJ2");

const gridcontainer=document.getElementById("gridcontainer");
let cuadroSeleccionado, cuadroObjetivo, banderaS=1,jugador=1,movimiento=0;
const jugadorHTML=document.getElementById("jugador");

//esta funcion crea el tablero 
const crearTablero=()=>
{
    let h;//servira para validar
    let bandera="blanco";
    //recorrera las columnas 
    let i=0;
    //recorrera las filas 
    let j=0;
    while(i<10)
    {
        h=i;
        //esto hara que cada fila sea diferente, o sea altenara las columna por cada fila
        if(bandera=="blanco"){bandera="negro";h=h+i}
        if(bandera=="negro" && h==i){bandera="blanco";}
        while(j<8)
        {
            //Esto servira como una variable de emergencia
            h=j;
            
            //si bandera es blanco tocara crear un cuadro blanco
            if(bandera=="blanco")
            { 

              //esto me creara las fila del medio
              if(i==5 || i==4)
              {
                   gridcontainer.innerHTML+='<div class="cuadro cuadro' + i+ j +' " id="cuadro' + i+ j +'"  fichadelJugador="0" style="background-color:#fff;color#000" value="1" x="' +i+'" y="'+ j +'"></div>'
              } 
              //esta me creara las fila las cuatros filas superiores
              if(i<4)
              {
                   gridcontainer.innerHTML+='<div class="cuadro cuadro' + i+ j +' " id="cuadro' + i+ j +'" fichadelJugador="2" style="background-color:#fff;color:#f00" value="1" x="' +i+'" y="'+ j +'" >0</div>'
              }
              //esta me creara las fila las cuatros filas superiores
              if(i>5)
              {
                   gridcontainer.innerHTML+='<div class="cuadro cuadro' + i+ j +' " id="cuadro' + i+ j +'" fichadelJugador="1" style="background-color:#fff;color:#00f" value="1" x="' +i+'" y="'+ j +'">0</div>'
              }
            //una vez pinte el cuadro, cambiara a negro para pintar la siguiente columna
            bandera="negro";
            h=j+1;
            }

            //esta se encargara de los cuadros negros.
            if(bandera=="negro" && h==j)
            {
                gridcontainer.innerHTML+='<div class="cuadro cuadro' + i+ j +' " id="cuadro' + i+ j +'" fichadelJugador="vacio" style="background-color:#000" value="0" x="' +i+'"></div>'
                bandera="blanco";
            }
            
            ++j;
        }
        j=0;
        ++i;
    }
    //el nombre esta entre comilla, porque ese nombre lo quiero modificar en un futuro
    puntuacion.innerHTML='Jugador 1'+'<div class="fichasJugador" id="fichasJ1">16</div>' +
                        'Jugador 2'+'<div class="fichasJugador" id="fichasJ2">16</div> ';
}

//esta funcion crea la jugabilidad del juego
const Jugabilidad=()=>
{
    let i=0;//filas
    let j=0;//columnas
    while(i<10)
    {
        while(j<8)
        {
            document.getElementById("cuadro" + i + j).addEventListener("click",(e)=>
            {
                let hover;
                let h=2;//variable emergente
                //esta parte se encarga de seleccionar la ficha
                if(banderaS==1)
                {
                    console.log("HOLA")
                    //si selecciona una ficha me lo validara
                    if(document.getSelection().anchorOffset==1)
                    {
                        //se extrae el valor de la casilla seleccionada por el jugador
                        cuadroSeleccionado=document.getSelection().anchorNode.parentElement;
                        //Aqui validamos lo turno del jugador
                        if(jugador==1 && movimiento==0)
                        {
                            
                            //si el jugador 1 selecciona la ficha esta todo bien 
                            if(cuadroSeleccionado.getAttribute("fichadelJugador")=="1")
                            {
                                document.getElementById(cuadroSeleccionado.getAttribute("id")).style.setProperty("Background-color","#f00")
                                banderaS=2;
                            }
                            //si selecciona una de las ficha del rival
                            if(cuadroSeleccionado.getAttribute("fichadelJugador")=="2")
                            {
                                console.log("Jugador 1 esta seleccionando la ficha del jugador contrario");

                            }
                            
                        }
                        if(jugador==2 && movimiento==0)
                        {
                            
                            //si el jugador 2 selecciona la ficha esta todo bien 
                            if(cuadroSeleccionado.getAttribute("fichadelJugador")=="2")
                            {
                                cuadroSeleccionado=document.getSelection().anchorNode.parentElement;
                                document.getElementById(cuadroSeleccionado.getAttribute("id")).style.setProperty("Background-color","#00f")
                                banderaS=2;
                            }
                            //si selecciona una de las ficha del rival
                            if(cuadroSeleccionado.getAttribute("fichadelJugador")=="1")
                            {
                                console.log("Jugador 2 esta seleccionando la ficha del jugador contrario");
                            }
                        }
                    }
                    if(document.getSelection().anchorOffset==0 && movimiento==0)
                    {
                        //nos devolvera si ha seleccionado un cuadro vacio blanco o negro
                        let estadoFicha=document.getElementById(document.getSelection().anchorNode.getAttribute("id")).getAttribute("fichadelJugador");
                        
                        //si selecciona un cuadro negro vacio
                        if(estadoFicha=="0")
                        {
                            console.log("no se puede seleccionar un cuadro vacio blanco");
                        }
                        //si selecciona un cuadro blanco vacio
                        if(estadoFicha=="vacio")
                        {
                            console.log("no se puede seleccionar un cuadro negro");
                        }
                        
                    }
                    //esto validara que el jugador coma por segunda vez en un mismo turno
                    if(movimiento==2)
                    {
                        
                        banderaS=2;
                    }
                    //ESTO VALIDARA QUE EL JUGADOR COMA POR TERCERA VEZ QUE FAIL XD
                    if(movimiento==3)
                    {
                        
                        banderaS=2;
                    }
                    //ESTO VALIDARA QUE EL JUGADOR COMA POR TERCERA VEZ QUE FAIL XD
                    if(movimiento==4)
                    {
                        
                        banderaS=2;
                    }
                    //ESTO VALIDARA QUE EL JUGADOR COMA POR TERCERA VEZ QUE FAIL XD
                    if(movimiento==5)
                    {
                        
                        banderaS=2;
                    }
                    h=h+2;
                }

                //una vez seleccionado el cuadro se le va a transferir los datos al otro cuadro
                if(banderaS==2 && h==banderaS)
                {
                    if(jugador==1)
                    {
                        console.log("HOLA")
                        /*lo validaremos con el anchooffset,si no tiene texto sera 0, y pondra nuestra ficha ahi
                        validaremos que solo sea solo la jugada en los cuadros blanco, cuando el valor del div sea 1*/
                        if(document.getSelection().anchorOffset==0 && document.getSelection().anchorNode.getAttribute("value")=="1")
                        {
                            cuadroObjetivo=document.getSelection().anchorNode.getAttribute("id");
                            //para quitarle la seleccion roja
                            document.getElementById(cuadroSeleccionado.getAttribute("id")).style.setProperty("Background-color","#fff");
                            //se mueve el elemento del cuadro seleccionado al objetivo, no puedo saltar dos cuadro de distancia eso esta mal
                        
                            //movimiento para el jugador de abajo #1
                            console.log("");
                            console.log("informacion del jugador 1");
                            console.log("=============================")
                            //nos limita el movimiento a dos posible opciones
                            console.log("mi posicion " + cuadroSeleccionado.getAttribute("x") + " posicion a donde voy " + document.getSelection().anchorNode.getAttribute("x") )
                            
                            //esta es para un movimiento normal
                            if (document.getSelection().anchorNode.getAttribute("x")==(cuadroSeleccionado.getAttribute("x")-1))
                            {   
                                //la funcion nos dice que la ficha seleccionada sera puesta en en cuadro que esta al noroeste o al noreste, pero no sera posible ponerla en otra posicion
                                if(document.getSelection().anchorNode.getAttribute("y")==(parseInt(cuadroSeleccionado.getAttribute("y"))-1) || document.getSelection().anchorNode.getAttribute("y")==(parseInt(cuadroSeleccionado.getAttribute("y"))+1))
                                {
                                   //elimina la ficha del cuadro seleccionado y lo introduce en el cuadro sobjetivo
                                   document.getElementById(cuadroSeleccionado.getAttribute("id")).innerHTML="";
                                   document.getElementById(cuadroSeleccionado.getAttribute("id")).setAttribute("fichadelJugador","0");
                                   document.getElementById(cuadroObjetivo).innerHTML="0";  
                                   document.getElementById(cuadroObjetivo).setAttribute("fichadelJugador","1")
                                   //para cambiar el color del cero
                                   document.getElementById(cuadroObjetivo).style.setProperty("color","#00f");
                                   jugador=2;
                                   jugadorHTML.innerHTML="le toca jugar al jugador 2";
                                   jugadorHTML.style.setProperty("color","#f00")
                                   console.log(cuadroSeleccionado.getAttribute("id") + " selecciono " + cuadroObjetivo + " objetivo " + "fichaSeleccionada " + cuadroSeleccionado.getAttribute("fichadelJugador") + "fichaObjetivo " + document.getSelection().anchorNode.getAttribute("fichadelJugador") )
                                }
                            }

                            //si el cuadro objetivo esta en la misma fila o es inferior, no debe moverse ya que va hacia atras
                            if (document.getSelection().anchorNode.getAttribute("x")>=cuadroSeleccionado.getAttribute("x") && movimiento==0)
                            {
                               console.log("no se puede hacia esa posicion mover hacia atras")
                               banderaS=1;
                            }

                            //si va atacar significa que ira dos fila hacia alante
                            //ahora vamos a validar si hay posibilidad de volver a comer
                            if ((parseInt(document.getSelection().anchorNode.getAttribute("x"))+2)==cuadroSeleccionado.getAttribute("x") && movimiento==0)
                            {
                               //ahora hay que validar si donde salta el espacio esta vacio o hay una ficha del rival o es de nosotros
                               
                               //es la posicion que estamos saltando
                               let miPosicion=cuadroSeleccionado.getAttribute("x") + cuadroSeleccionado.getAttribute("y");
                               let posicionObjetivo=document.getSelection().anchorNode.getAttribute("x") +  document.getSelection().anchorNode.getAttribute("y");
                               //con este valor validare lo que hay en el medio, para ver si puedo atacar o no
                               let posicionIntermedia=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+1);


                               
                               //va a comer hacia la izquierda
                               if( cuadroSeleccionado.getAttribute("y")==(parseInt(document.getSelection().anchorNode.getAttribute("y"))+2))
                               {
                                    posicionIntermedia+=""+ (parseInt(document.getSelection().anchorNode.getAttribute("y"))+1);
                               }
                               //va a comer hacia la derecha
                               if( cuadroSeleccionado.getAttribute("y")==(parseInt(document.getSelection().anchorNode.getAttribute("y"))-2))
                               {
                                    posicionIntermedia+=""+ (parseInt(document.getSelection().anchorNode.getAttribute("y"))-1);
                               }
                               console.log("miPosicion " + miPosicion + " posicionIntermedia " + posicionIntermedia + " posicionObjetivo " + posicionObjetivo)
                               
                               //validar si el atributo esta vacio o si es mi ficha, en ese caso no atacara
                               if(document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="0" || document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="1")
                               {
                                console.log("movimiento no valido");
                                //banderaS=1;
                               }
                               //-------------------------------Ataque jugador #1---------------------------------------------------------------------
                               //valida si el atributo es del rivval, en ese caso atacara
                               if(document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="2" && movimiento==0)
                               {
                                    console.log("ataca")
                                    //elimina la ficha del cuadro seleccionado y lo introduce en el cuadro sobjetivo
                                   document.getElementById("cuadro" + miPosicion).innerHTML="";
                                   document.getElementById(cuadroSeleccionado.getAttribute("id")).setAttribute("fichadelJugador","0");

                                   //elimina la ficha del rival
                                   document.getElementById("cuadro"+posicionIntermedia).innerHTML="";  
                                   document.getElementById("cuadro"+posicionIntermedia).setAttribute("fichadelJugador","0")

                                   //pone la ficha del jugador #1
                                   document.getElementById("cuadro"+posicionObjetivo).innerHTML="0";  
                                   document.getElementById("cuadro"+posicionObjetivo).setAttribute("fichadelJugador","1")

                                   //para cambiar el color del cero
                                   document.getElementById("cuadro"+posicionObjetivo).style.setProperty("color","#00f");
                                   

                                   //tambien hay que decirle al programa si el jugador 1 tiene posibilidad de seguir comiendo que siga jugando 
                                   console.log("posicion final" + document.getSelection().anchorNode.getAttribute("x"));
                                   console.log("posicion que puede comer hacia arriba" + (parseInt(document.getSelection().anchorNode.getAttribute("x"))+2));
                                   console.log("posicion  puede comer hacia abajo" + (parseInt(document.getSelection().anchorNode.getAttribute("x"))-2));
                                   if ((parseInt(document.getSelection().anchorNode.getAttribute("x"))+2)==cuadroSeleccionado.getAttribute("x") || (parseInt(document.getSelection().anchorNode.getAttribute("x"))-2)==cuadroSeleccionado.getAttribute("x"))
                                   {
                                        
                                        //vamos a validar que nuestra posicion objetivo este vacio para eso necesitamos a y
                                        console.log("posicion final:" + document.getSelection().anchorNode.getAttribute("y"))
                                        //validar las cuatro posiciones, las puse en variable para que se pueda ver mejor
                                        let posicionAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2);
                                        let posicionArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-2);
                                        let posicionDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+2);
                                        let posicionIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-2);

                                        //validaremos que ninguna posicion se salga de los extremos
                                        console.log("posicion de Abajo:" + posicionAbajo);
                                        console.log("posicion de Arriba:" + posicionArriba);
                                        console.log("posicion de Izquierda:" + posicionDerecha);
                                        console.log("posicion de derecha:" + posicionIzquierda);
                                        //si la posicion Arriba se sale del tablero la ubicare en un cuadro negro
                                        if(posicionArriba<0 || posicionArriba>9){posicionArriba=0;}
                                        //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                        if(posicionAbajo<0 || posicionAbajo>9){posicionAbajo=0;}
                                        //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                        if(posicionIzquierda<0 || posicionIzquierda>7){posicionIzquierda=0;}
                                        //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                        if(posicionDerecha<0 || posicionDerecha>7){posicionDerecha=0;}

                                        //validaremos todas las diagonales y si la posicion sale del tablero
                                        if(document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                           document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" ||
                                           document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                           document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" )
                                        {
                                            //ahora validaremos que hay una posibilidad para comer
                                            //cuando esta verde indica que puede seguir comiendo
                                            posicionInicial=posicionObjetivo;
                                            //identificacion de la posiciones intermedia
                                            let posicionIntermediaAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+1);
                                            let posicionIntermediaArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-1);
                                            let posicionIntermediaDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+1);
                                            let posicionIntermediaIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-1);
    
                                            
                                            //si la posicion Arriba se sale del tablero la ubicare en un cuadro negro
                                             if(posicionIntermediaArriba<0 || posicionIntermediaArriba>9){posicioIntermedianArriba=0;}
                                            //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                            if(posicionIntermediaAbajo<0 || posicionIntermediaAbajo>9){posicionIntermediaAbajo=0;}
                                            //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                            if(posicionIntermediaIzquierda<0 || posicionIntermediaIzquierda>7){posicionIntermediaIzquierda=0;}
                                            //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                            if(posicionIntermediaDerecha<0 || posicionIntermediaDerecha>7){posicionIntermediaDerecha=0;}
                                            //validaremos que ninguna posicion se salga de los extremos
                                            console.log("posicion Intermedia de Abajo:" + posicionIntermediaAbajo);
                                            console.log("posicion Intermedia de Arriba:" + posicionIntermediaArriba);
                                            console.log("posicion Intermedia de Izquierda:" + posicionIntermediaDerecha);
                                            console.log("posicion Intermedia de derecha:" + posicionIntermediaIzquierda);

                                            //validaremos que en la diagonales intermedia halla una ficha rival y que el la diagonal este vacio
                                            if((document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="2" && (document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" )) ||
                                               (document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="2" && (document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0"))||
                                               (document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="2" && (document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0"))||
                                               (document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="2" && (document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0")))
                                            { 
                                                //como identificar posicion final 
                                                document.getElementById("cuadro" + posicionInicial).style.setProperty("Background-color","#0f0");
                                                //vamos obligar al jugador a que tenga que comer
                                                document.getElementById("cuadro" + posicionInicial).style.setProperty("Background-color","#0f0");
                                                movimiento=2;
                                            }
                                        }
                                        if(movimiento!=2)
                                        {
                                            movimiento=0;
                                            jugador=2;
                                            jugadorHTML.innerHTML="le toca jugar al jugador 2";
                                            jugadorHTML.style.setProperty("color","#f00")
                                        }
                                   }
                               }
                            }
                           
                        }
                        if(movimiento==2)
                        {
                         
                            //la posicion inicial es la posicion inicial
                            //identificaremos posicion objetivo
                            //posicion objetivo, 
                            // esto me permite comer tanto para delante como hacia atras
                            //Determinar la posicion intermedia 
                            let x="",y="";
                            let posicionObjetivo=document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y");
                            console.log("posicion inicial" + posicionInicial);
                            console.log("posicion Objetivo " + posicionObjetivo);

                            //tanto los valores de posicion inicial y posicion objetivo son string y a su vez son arreglos asi que puedo tratarlos asi
                            console.log("posicion inicial x" + posicionInicial[0]);
                            console.log("posicion Objetivo y" + posicionObjetivo[0]);
                            //lo primero es que para determinar la posicion intermedio tenemos 4 posibilidades
                            //simple matematicas
                            //cada bloque representa 4 bloque, comenzaremos a identificar los bloques verdes

                            //cuando la posicion objetivo sea superior a la posicion final
                            if (parseInt(posicionInicial[0])==(parseInt(posicionObjetivo[0])+2)) 
                            {
                                x=parseInt(posicionObjetivo[0] ) +1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //cuando la posicion objetivo sea inferior a la posicion inicial
                            if ((parseInt(posicionInicial[0]))==(parseInt(posicionObjetivo[0])-2))
                            {
                                x=parseInt(posicionObjetivo[0])-1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }

                            //tenemos el valor de x solo falta y
                            let posicionIntermedia=x+ "" + y;
                            
                            console.log("posicionIntermedia:" + posicionIntermedia);
                            if(document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="0" || document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="1")
                               {
                                console.log("movimiento no valido");
                                //banderaS=1;
                               }
                               //-------------------------------Segundo Ataque consecutivo del jugador #1---------------------------------------------------------------------
                               //valida si el atributo es del rivval, en ese caso atacara
                               if(document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="2")
                               {
                                    console.log("ataca")
                                    //elimina la ficha del cuadro seleccionado y lo introduce en el cuadro sobjetivo
                                   document.getElementById("cuadro" + posicionInicial).innerHTML="";
                                   document.getElementById("cuadro" + posicionInicial).setAttribute("fichadelJugador","0");

                                   //elimina la ficha del rival
                                   document.getElementById("cuadro"+posicionIntermedia).innerHTML="";  
                                   document.getElementById("cuadro"+posicionIntermedia).setAttribute("fichadelJugador","0")

                                   //pone la ficha del jugador #1
                                   document.getElementById("cuadro"+posicionObjetivo).innerHTML="0";  
                                   document.getElementById("cuadro"+posicionObjetivo).setAttribute("fichadelJugador","1")

                                   //para cambiar el color del cero
                                   document.getElementById("cuadro"+posicionObjetivo).style.setProperty("color","#00f");
                                   
                                   //para volver el cuadro verde blanco 
                                   document.getElementById("cuadro"+posicionInicial).style.setProperty("Background-color","#fff");
                               }
                               //--------------------------Validar Ataque tres--------------------------------------------------//
                                   console.log("validacion 3");
                                   posicionInicial=document.getSelection().anchorNode.getAttribute("x")+document.getSelection().anchorNode.getAttribute("y")
                                   console.log("posicion final" + posicionInicial);
                                   console.log("posicion que puede comer hacia arriba" + (parseInt(document.getSelection().anchorNode.getAttribute("x"))+2));
                                   console.log("posicion  puede comer hacia abajo" + (parseInt(document.getSelection().anchorNode.getAttribute("x"))-2));
                                   if ((parseInt(document.getSelection().anchorNode.getAttribute("x"))+2)==(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2) || (parseInt(document.getSelection().anchorNode.getAttribute("x"))-2)==(parseInt(document.getSelection().anchorNode.getAttribute("x"))))
                                   {
                                        
                                        //vamos a validar que nuestra posicion objetivo este vacio para eso necesitamos a y
                                        console.log("posicion final:" + document.getSelection().anchorNode.getAttribute("y"))
                                        //validar las cuatro posiciones, las puse en variable para que se pueda ver mejor
                                        let posicionAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2);
                                        let posicionArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-2);
                                        let posicionDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+2);
                                        let posicionIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-2);

                                        //validaremos que ninguna posicion se salga de los extremos
                                        console.log("posicion de Abajo:" + posicionAbajo);
                                        console.log("posicion de Arriba:" + posicionArriba);
                                        console.log("posicion de Izquierda:" + posicionDerecha);
                                        console.log("posicion de derecha:" + posicionIzquierda);
                                        if(posicionArriba<0 || posicionArriba>9){posicionArriba=0;}
                                        //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                        if(posicionAbajo<0 || posicionAbajo>9){posicionAbajo=0;}
                                        //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                        if(posicionIzquierda<0 || posicionIzquierda>7){posicionIzquierda=0;}
                                        //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                        if(posicionDerecha<0 || posicionDerecha>7){posicionDerecha=0;}

                                        //validaremos todas las diagonales y si la posicion sale del tablero
                                        if(document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                           document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" ||
                                           document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                           document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" )
                                        {
                                            //ahora validaremos que hay una posibilidad para comer
                                            //cuando esta verde indica que puede seguir comiendo
                                            posicionInicial=posicionObjetivo;
                                            //identificacion de la posiciones intermedia
                                            let posicionIntermediaAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+1);
                                            let posicionIntermediaArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-1);
                                            let posicionIntermediaDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+1);
                                            let posicionIntermediaIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-1);
    
                                            
                                            //si la posicion Arriba se sale del tablero la ubicare en un cuadro negro
                                             if(posicionIntermediaArriba<0 || posicionIntermediaArriba>9){posicioIntermedianArriba=0;}
                                            //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                            if(posicionIntermediaAbajo<0 || posicionIntermediaAbajo>9){posicionIntermediaAbajo=0;}
                                            //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                            if(posicionIntermediaIzquierda<0 || posicionIntermediaIzquierda>7){posicionIntermediaIzquierda=0;}
                                            //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                            if(posicionIntermediaDerecha<0 || posicionIntermediaDerecha>7){posicionIntermediaDerecha=0;}
                                            //validaremos que ninguna posicion se salga de los extremos
                                            console.log("posicion Intermedia de Abajo:" + posicionIntermediaAbajo);
                                            console.log("posicion Intermedia de Arriba:" + posicionIntermediaArriba);
                                            console.log("posicion Intermedia de Izquierda:" + posicionIntermediaDerecha);
                                            console.log("posicion Intermedia de derecha:" + posicionIntermediaIzquierda);

                                            //validaremos todas las diagonales y si la posicion sale del tablero
                                            if((document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="2" && (document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" )) ||
                                               (document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="2" && (document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0"))||
                                               (document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="2" && (document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0"))||
                                               (document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="2" && (document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0")))
                                            { 
                                                //como identificar posicion final 
                                                document.getElementById("cuadro" + posicionInicial).style.setProperty("Background-color","#ff0");
                                                movimiento=3;
                                            }
                                        }
                                        //si el jugador no tiene opcion a comer una tercera vez le dara error
                                        if(movimiento!=3)
                                        {
                                           console.log("no comera");
                                            movimiento=0;
                                            jugador=2;
                                            jugadorHTML.innerHTML="le toca jugar al jugador 2";
                                            jugadorHTML.style.setProperty("color","#f00")
                                        }
                                
                                    }
                        }
                        if(movimiento==3 && posicionInicial!=(document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y")))
                        {
                            //hay que resolver porque se queda frizado
                            console.log("=========ataque tres=========================")
                            //la posicion inicial es la posicion inicial
                            //identificaremos posicion objetivo
                            //posicion objetivo, 
                            // esto me permite comer tanto para delante como hacia atras
                            //Determinar la posicion intermedia 
                            let x="",y="";
                            let posicionObjetivo=document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y");
                            console.log("posicion inicial" + posicionInicial);
                            console.log("posicion Objetivo " + posicionObjetivo);

                            //tanto los valores de posicion inicial y posicion objetivo son string y a su vez son arreglos asi que puedo tratarlos asi
                            console.log("posicion inicial x" + posicionInicial[0]);
                            console.log("posicion Objetivo y" + posicionObjetivo[0]);
                            //lo primero es que para determinar la posicion intermedio tenemos 4 posibilidades
                            //simple matematicas
                            //cada bloque representa 4 bloque, comenzaremos a identificar los bloques verdes

                            //cuando la posicion objetivo sea superior a la posicion final
                            if (parseInt(posicionInicial[0])==(parseInt(posicionObjetivo[0])+2)) 
                            {
                                x=parseInt(posicionObjetivo[0] ) +1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //cuando la posicion objetivo sea inferior a la posicion inicial
                            if ((parseInt(posicionInicial[0]))==(parseInt(posicionObjetivo[0])-2))
                            {
                                x=parseInt(posicionObjetivo[0])-1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //tenemos el valor de x solo falta y
                            let posicionIntermedia=x+ "" + y;
                            
                            console.log("posicionIntermedia:" + posicionIntermedia);
                            if((document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="0" || document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="1") && y!="0")
                               {
                                console.log("movimiento no valido");
                               }
                               //-------------------------------tercer Ataque consecutivo del jugador #1---------------------------------------------------------------------
                               //valida si el atributo es del rivval, en ese caso atacara
                               //el lo usaremos como prueba (y!="0" && x!="0")
                            if((document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="2") && (y!="0" && x!="0")) 
                            {
                                    console.log("ataca")
                                    //elimina la ficha del cuadro seleccionado y lo introduce en el cuadro sobjetivo
                                   document.getElementById("cuadro" + posicionInicial).innerHTML="";
                                   document.getElementById("cuadro" + posicionInicial).setAttribute("fichadelJugador","0");

                                   //elimina la ficha del rival
                                   document.getElementById("cuadro"+posicionIntermedia).innerHTML="";  
                                   document.getElementById("cuadro"+posicionIntermedia).setAttribute("fichadelJugador","0")

                                   //pone la ficha del jugador #1
                                   document.getElementById("cuadro"+posicionObjetivo).innerHTML="0";  
                                   document.getElementById("cuadro"+posicionObjetivo).setAttribute("fichadelJugador","1")

                                   //para cambiar el color del cero
                                   document.getElementById("cuadro"+posicionObjetivo).style.setProperty("color","#00f");
                                   
                                   //para volver el cuadro verde blanco 
                                   document.getElementById("cuadro"+posicionInicial).style.setProperty("Background-color","#fff");
                                   
                            }
                             //-------------------------------------------------------Validacion come 4-------------------------------------
                             if ((parseInt(document.getSelection().anchorNode.getAttribute("x"))+2)==(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2) || (parseInt(document.getSelection().anchorNode.getAttribute("x"))-2)==(parseInt(document.getSelection().anchorNode.getAttribute("x"))))
                             {
                                  
                                  //vamos a validar que nuestra posicion objetivo este vacio para eso necesitamos a y
                                  console.log("posicion final:" + document.getSelection().anchorNode.getAttribute("y"))
                                  //validar las cuatro posiciones, las puse en variable para que se pueda ver mejor
                                  let posicionAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2);
                                  let posicionArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-2);
                                  let posicionDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+2);
                                  let posicionIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-2);

                                  //validaremos que ninguna posicion se salga de los extremos
                                  console.log("posicion de Abajo:" + posicionAbajo);
                                  console.log("posicion de Arriba:" + posicionArriba);
                                  console.log("posicion de Izquierda:" + posicionDerecha);
                                  console.log("posicion de derecha:" + posicionIzquierda);
                                  if(posicionArriba<0 || posicionArriba>9){posicionArriba=0;}
                                  //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                  if(posicionAbajo<0 || posicionAbajo>9){posicionAbajo=0;}
                                  //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                  if(posicionIzquierda<0 || posicionIzquierda>7){posicionIzquierda=0;}
                                  //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                  if(posicionDerecha<0 || posicionDerecha>7){posicionDerecha=0;}

                                  //validaremos todas las diagonales y si la posicion sale del tablero
                                  if(document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                     document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" ||
                                     document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                     document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" )
                                  {
                                      //ahora validaremos que hay una posibilidad para comer
                                      //cuando esta verde indica que puede seguir comiendo
                                      posicionInicial=posicionObjetivo;
                                      //identificacion de la posiciones intermedia
                                      let posicionIntermediaAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+1);
                                      let posicionIntermediaArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-1);
                                      let posicionIntermediaDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+1);
                                      let posicionIntermediaIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-1);

                                      
                                      //si la posicion Arriba se sale del tablero la ubicare en un cuadro negro
                                       if(posicionIntermediaArriba<0 || posicionIntermediaArriba>9){posicioIntermedianArriba=0;}
                                      //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                      if(posicionIntermediaAbajo<0 || posicionIntermediaAbajo>9){posicionIntermediaAbajo=0;}
                                      //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                      if(posicionIntermediaIzquierda<0 || posicionIntermediaIzquierda>7){posicionIntermediaIzquierda=0;}
                                      //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                      if(posicionIntermediaDerecha<0 || posicionIntermediaDerecha>7){posicionIntermediaDerecha=0;}
                                      //validaremos que ninguna posicion se salga de los extremos
                                      console.log("posicion Intermedia de Abajo:" + posicionIntermediaAbajo);
                                      console.log("posicion Intermedia de Arriba:" + posicionIntermediaArriba);
                                      console.log("posicion Intermedia de Izquierda:" + posicionIntermediaDerecha);
                                      console.log("posicion Intermedia de derecha:" + posicionIntermediaIzquierda);

                                      //validaremos todas las diagonales y si la posicion sale del tablero
                                      if((document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="2" && (document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" )) ||
                                        (document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="2" && (document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0"))||
                                        (document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="2" && (document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0"))||
                                        (document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="2" && (document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0")))
                                        { 
                                          //como identificar posicion final , tiene que ser morado
                                          document.getElementById("cuadro" + posicionInicial).style.setProperty("Background-color","#f0f");
                                          movimiento=4;
                                      }
                                  }
                                  if(movimiento!=4)
                                  {
                                      movimiento=0;
                                      jugador=2;
                                      jugadorHTML.innerHTML="le toca jugar al jugador 2";
                                      jugadorHTML.style.setProperty("color","#f00")
                                  }
                          
                              }
                            
                            //una vez obtenido la posicion intermedia podemos realizar el proceso de comer la otra ficha
                            
                            
                        }

                        if(movimiento==4 && posicionInicial!=(document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y")))
                        {
                            console.log("=========ataque cuatro=========================")
                            let x="",y="";
                            let posicionObjetivo=document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y");
                            console.log("posicion inicial" + posicionInicial);
                            console.log("posicion Objetivo " + posicionObjetivo);

                            //tanto los valores de posicion inicial y posicion objetivo son string y a su vez son arreglos asi que puedo tratarlos asi
                            console.log("posicion inicial x" + posicionInicial[0]);
                            console.log("posicion Objetivo y" + posicionObjetivo[0]);
                            //lo primero es que para determinar la posicion intermedio tenemos 4 posibilidades
                            //simple matematicas
                            //cada bloque representa 4 bloque, comenzaremos a identificar los bloques verdes

                            //cuando la posicion objetivo sea superior a la posicion final
                            if (parseInt(posicionInicial[0])==(parseInt(posicionObjetivo[0])+2)) 
                            {
                                x=parseInt(posicionObjetivo[0] ) +1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //cuando la posicion objetivo sea inferior a la posicion inicial
                            if ((parseInt(posicionInicial[0]))==(parseInt(posicionObjetivo[0])-2))
                            {
                                x=parseInt(posicionObjetivo[0])-1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //tenemos el valor de x solo falta y
                            let posicionIntermedia=x+ "" + y;
                            
                            console.log("posicionIntermedia:" + posicionIntermedia);
                            if((document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="0" || document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="1") && y!="0")
                               {
                                console.log("movimiento no valido");
                               }
                               //-------------------------------tcuarto Ataque consecutivo del jugador #1---------------------------------------------------------------------
                               //valida si el atributo es del rivval, en ese caso atacara
                               //el lo usaremos como prueba (y!="0" && x!="0")
                            if((document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="2") && (y!="0" && x!="0")) 
                            {
                                    console.log("ataca")
                                    //elimina la ficha del cuadro seleccionado y lo introduce en el cuadro sobjetivo
                                   document.getElementById("cuadro" + posicionInicial).innerHTML="";
                                   document.getElementById("cuadro" + posicionInicial).setAttribute("fichadelJugador","0");

                                   //elimina la ficha del rival
                                   document.getElementById("cuadro"+posicionIntermedia).innerHTML="";  
                                   document.getElementById("cuadro"+posicionIntermedia).setAttribute("fichadelJugador","0")

                                   //pone la ficha del jugador #1
                                   document.getElementById("cuadro"+posicionObjetivo).innerHTML="0";  
                                   document.getElementById("cuadro"+posicionObjetivo).setAttribute("fichadelJugador","1")

                                   //para cambiar el color del cero
                                   document.getElementById("cuadro"+posicionObjetivo).style.setProperty("color","#00f");
                                   
                                   //para volver el cuadro verde blanco 
                                   document.getElementById("cuadro"+posicionInicial).style.setProperty("Background-color","#fff");
                                   
                                   
                            }
                             //-------------------------------------------------------Validacion come 5-------------------------------------
                             if ((parseInt(document.getSelection().anchorNode.getAttribute("x"))+2)==(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2) || (parseInt(document.getSelection().anchorNode.getAttribute("x"))-2)==(parseInt(document.getSelection().anchorNode.getAttribute("x"))))
                             {
                                  
                                  //vamos a validar que nuestra posicion objetivo este vacio para eso necesitamos a y
                                  console.log("posicion final:" + document.getSelection().anchorNode.getAttribute("y"))
                                  //validar las cuatro posiciones, las puse en variable para que se pueda ver mejor
                                  let posicionAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2);
                                  let posicionArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-2);
                                  let posicionDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+2);
                                  let posicionIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-2);

                                  //validaremos que ninguna posicion se salga de los extremos
                                  console.log("posicion de Abajo:" + posicionAbajo);
                                  console.log("posicion de Arriba:" + posicionArriba);
                                  console.log("posicion de Izquierda:" + posicionDerecha);
                                  console.log("posicion de derecha:" + posicionIzquierda);
                                  if(posicionArriba<0 || posicionArriba>9){posicionArriba=0;}
                                  //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                  if(posicionAbajo<0 || posicionAbajo>9){posicionAbajo=0;}
                                  //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                  if(posicionIzquierda<0 || posicionIzquierda>7){posicionIzquierda=0;}
                                  //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                  if(posicionDerecha<0 || posicionDerecha>7){posicionDerecha=0;}

                                  //validaremos todas las diagonales y si la posicion sale del tablero
                                  if(document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                     document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" ||
                                     document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                     document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" )
                                  {
                                      //ahora validaremos que hay una posibilidad para comer
                                      //cuando esta verde indica que puede seguir comiendo
                                      posicionInicial=posicionObjetivo;
                                      //identificacion de la posiciones intermedia
                                      let posicionIntermediaAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+1);
                                      let posicionIntermediaArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-1);
                                      let posicionIntermediaDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+1);
                                      let posicionIntermediaIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-1);

                                      
                                      //si la posicion Arriba se sale del tablero la ubicare en un cuadro negro
                                       if(posicionIntermediaArriba<0 || posicionIntermediaArriba>9){posicioIntermedianArriba=0;}
                                      //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                      if(posicionIntermediaAbajo<0 || posicionIntermediaAbajo>9){posicionIntermediaAbajo=0;}
                                      //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                      if(posicionIntermediaIzquierda<0 || posicionIntermediaIzquierda>7){posicionIntermediaIzquierda=0;}
                                      //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                      if(posicionIntermediaDerecha<0 || posicionIntermediaDerecha>7){posicionIntermediaDerecha=0;}
                                      //validaremos que ninguna posicion se salga de los extremos
                                      console.log("posicion Intermedia de Abajo:" + posicionIntermediaAbajo);
                                      console.log("posicion Intermedia de Arriba:" + posicionIntermediaArriba);
                                      console.log("posicion Intermedia de Izquierda:" + posicionIntermediaDerecha);
                                      console.log("posicion Intermedia de derecha:" + posicionIntermediaIzquierda);

                                      //validaremos todas las diagonales y si la posicion sale del tablero
                                      if(document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="2" ||
                                         document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="2" ||
                                         document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="2" ||
                                         document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="2" )
                                      { 
                                          console.log("yo comere otra mas;")
                                          //como identificar posicion final , tiene que ser morado
                                          document.getElementById("cuadro" + posicionInicial).style.setProperty("Background-color","#000");
                                          movimiento=5;
                                      }
                                  }
                                  if(movimiento!=5)
                                  {
                                     console.log("no comera");
                                      movimiento=0;
                                      jugador=2;
                                      jugadorHTML.innerHTML="le toca jugar al jugador 2";
                                      jugadorHTML.style.setProperty("color","#f00")
                                  }
                          
                              }
                            
                            //una vez obtenido la posicion intermedia podemos realizar el proceso de comer la otra ficha
                            
                            
                        }

                        //movimiento tendria que ser igual a 5 xD
                        if(movimiento==5 && posicionInicial!=(document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y")))
                        {
                            //hay que resolver porque se queda frizado
                            console.log("=========ataque cinco=========================")
                            //la posicion inicial es la posicion inicial
                            //identificaremos posicion objetivo
                            //posicion objetivo, 
                            // esto me permite comer tanto para delante como hacia atras
                            //Determinar la posicion intermedia 
                            let x="",y="";
                            let posicionObjetivo=document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y");
                            console.log("posicion inicial" + posicionInicial);
                            console.log("posicion Objetivo " + posicionObjetivo);

                            //tanto los valores de posicion inicial y posicion objetivo son string y a su vez son arreglos asi que puedo tratarlos asi
                            console.log("posicion inicial x" + posicionInicial[0]);
                            console.log("posicion Objetivo y" + posicionObjetivo[0]);
                            //lo primero es que para determinar la posicion intermedio tenemos 4 posibilidades
                            //simple matematicas
                            //cada bloque representa 4 bloque, comenzaremos a identificar los bloques verdes

                            //cuando la posicion objetivo sea superior a la posicion final
                            if (parseInt(posicionInicial[0])==(parseInt(posicionObjetivo[0])+2)) 
                            {
                                x=parseInt(posicionObjetivo[0] ) +1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //cuando la posicion objetivo sea inferior a la posicion inicial
                            if ((parseInt(posicionInicial[0]))==(parseInt(posicionObjetivo[0])-2))
                            {
                                x=parseInt(posicionObjetivo[0])-1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //ESE ELSE NO VA
                            //tenemos el valor de x solo falta y
                            let posicionIntermedia=x+ "" + y;
                            
                            console.log("posicionIntermedia:" + posicionIntermedia);
                            if((document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="0" || document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="1") && y!="0")
                               {
                                console.log("movimiento no valido");
                               }
                               //-------------------------------tcuarto Ataque consecutivo del jugador #1---------------------------------------------------------------------
                               //valida si el atributo es del rivval, en ese caso atacara
                               //el lo usaremos como prueba (y!="0" && x!="0")
                            if((document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="2") && (y!="0" && x!="0")) 
                            {
                                    console.log("ataca")
                                    //elimina la ficha del cuadro seleccionado y lo introduce en el cuadro sobjetivo
                                   document.getElementById("cuadro" + posicionInicial).innerHTML="";
                                   document.getElementById("cuadro" + posicionInicial).setAttribute("fichadelJugador","0");

                                   //elimina la ficha del rival
                                   document.getElementById("cuadro"+posicionIntermedia).innerHTML="";  
                                   document.getElementById("cuadro"+posicionIntermedia).setAttribute("fichadelJugador","0")

                                   //pone la ficha del jugador #1
                                   document.getElementById("cuadro"+posicionObjetivo).innerHTML="0";  
                                   document.getElementById("cuadro"+posicionObjetivo).setAttribute("fichadelJugador","1")

                                   //para cambiar el color del cero
                                   document.getElementById("cuadro"+posicionObjetivo).style.setProperty("color","#00f");
                                   
                                   //para volver el cuadro verde blanco 
                                   document.getElementById("cuadro"+posicionInicial).style.setProperty("Background-color","#fff");
                                   
                                    movimiento=0;
                                    jugador=2;
                                    jugadorHTML.innerHTML="le toca jugar al jugador 2";
                                    jugadorHTML.style.setProperty("color","#f00")
                                   
                                   
                            }
                            
                            //una vez obtenido la posicion intermedia podemos realizar el proceso de comer la otra ficha
                            
                            
                        }
                        
                        
                        //lo validaremos con el anchooffset,si tiene texto es 1 
                        //pero pondremos otra condicional ya que puede moverse diferente si hay una ficha rival(MOVIMIENTO AL ATACAR)
                         //si hay una ficha validaremos si hay un espacio vacio atras de esa ficha
                        if(document.getSelection().anchorOffset==1)
                        {
                            //en ambos caso dejara de estar seleccionado
                            document.getElementById(cuadroSeleccionado.getAttribute("id")).style.setProperty("Background-color","#fff")
                            banderaS=1;
                            console.log("ya hay una ficha donde la quiere poner")

                        }
                        validarGanador();
                    }
                    //movimiento para el jugador de arriba  #2 
                    //si el cuadro objetivo esta una fila hacia abajo del cuadro seleccionado, se podra mover
                    else
                    {
                        /*lo validaremos con el anchooffset,si no tiene texto sera 0, y pondra nuestra ficha ahi
                         validaremos que solo sea solo la jugada en los cuadros blanco, cuando el valor del div sea 1*/
                        if(document.getSelection().anchorOffset==0 && document.getSelection().anchorNode.getAttribute("value")=="1")
                        {
                            cuadroObjetivo=document.getSelection().anchorNode.getAttribute("id");
                            //para quitarle la seleccion roja
                            document.getElementById(cuadroSeleccionado.getAttribute("id")).style.setProperty("Background-color","#fff");
                            //se mueve el elemento del cuadro seleccionado al objetivo, no puedo saltar dos cuadro de distancia eso esta mal
                            //movimiento para el jugador de abajo #1
                        
                            console.log("informacion del jugador 2");
                            console.log("=============================")
                            console.log("mi posicion " + document.getSelection().anchorNode.getAttribute("x") + " posicion a donde voy " + cuadroSeleccionado.getAttribute("x") )
                            if (document.getSelection().anchorNode.getAttribute("x")==(parseInt(cuadroSeleccionado.getAttribute("x"))+1))
                            {   console.log(document.getSelection().anchorNode.getAttribute("x"))
                                 //la funcion nos dice que la ficha seleccionada sera puesta en en cuadro que esta al noroeste o al noreste, pero no sera posible ponerla en otra posicion
                                if(document.getSelection().anchorNode.getAttribute("y")==(parseInt(cuadroSeleccionado.getAttribute("y"))-1) || document.getSelection().anchorNode.getAttribute("y")==(parseInt(cuadroSeleccionado.getAttribute("y"))+1))
                                {
                                    document.getElementById(cuadroSeleccionado.getAttribute("id")).innerHTML="";
                                    document.getElementById(cuadroSeleccionado.getAttribute("id")).setAttribute("fichadelJugador","0");
                                    document.getElementById(cuadroObjetivo).setAttribute("fichadelJugador","2")
                                    document.getElementById(cuadroObjetivo).innerHTML="0";  
                                    console.log(cuadroSeleccionado.getAttribute("id") + " selecciono " + cuadroObjetivo + " objetivo " + "fichaSeleccionada " + cuadroSeleccionado.getAttribute("fichadelJugador") + "fichaObjetivo " + document.getSelection().anchorNode.getAttribute("fichadelJugador") )
                                    //para cambiar el color del cero
                                    document.getElementById(cuadroObjetivo).style.setProperty("color","#f00");
                                    jugador=1;
                                    jugadorHTML.innerHTML="le toca jugar al jugador 1";
                                    jugadorHTML.style.setProperty("color","#00f")
                            
                                }
                            }
                        }
                        //si el cuadro objetivo esta en la misma fila o es inferior, no debe moverse ya que este movimiento esta prohibido
                        if (document.getSelection().anchorNode.getAttribute("x")<=(cuadroSeleccionado.getAttribute("x")) )
                        {
                            console.log("no se puede hacia esa posicion ")
                            banderaS=1;
                        }

                        //haremos lo mismo que hicimos con el jugador # pero inverso
                        //cuando el jugador #2 ataca
                        //si va atacar significa que ira dos fila hacia atras, va hacer lo contrario a jugador #2
                        if ((parseInt(document.getSelection().anchorNode.getAttribute("x"))-2)==cuadroSeleccionado.getAttribute("x") && movimiento==0)
                        {
                           //ahora hay que validar si donde salta el espacio esta vacio o hay una ficha del rival o es de nosotros2
                           //es la posicion que estamos saltando
                           let miPosicion=cuadroSeleccionado.getAttribute("x") + cuadroSeleccionado.getAttribute("y");
                           let posicionObjetivo=document.getSelection().anchorNode.getAttribute("x") +  document.getSelection().anchorNode.getAttribute("y");
                           //con este valor validare lo que hay en el medio, para ver si puedo atacar o no
                           let posicionIntermedia=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-1);


                           
                           //va a comer hacia la izquierda
                           if( cuadroSeleccionado.getAttribute("y")==(parseInt(document.getSelection().anchorNode.getAttribute("y"))-2))
                           {
                                posicionIntermedia+=""+ (parseInt(document.getSelection().anchorNode.getAttribute("y"))-1);
                           }
                           //va a comer hacia la derecha
                           if( cuadroSeleccionado.getAttribute("y")==(parseInt(document.getSelection().anchorNode.getAttribute("y"))+2))
                           {
                                posicionIntermedia+=""+ (parseInt(document.getSelection().anchorNode.getAttribute("y"))+1);
                           }
                           console.log("miPosicion " + miPosicion + " posicionIntermedia " + posicionIntermedia + " posicionObjetivo " + posicionObjetivo)
                           
                           console.log(document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador"));
                           //validar si el atributo esta vacio o si es mi ficha, en ese caso no atacara
                           if(document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="0" || document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="2")
                           {
                            console.log("movimiento no valido");
                            banderaS=1;
                           }
                           //valida si el atributo es del rivval, en ese caso atacara
                           if(document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="1")
                           {    
                            //-------------------------------Ataque jugador #2---------------------------------------------------------------------
                            //valida si el atributo es del rivval, en ese caso atacara
                                console.log("ataca")
                                //elimina la ficha del cuadro seleccionado y lo introduce en el cuadro sobjetivo
                               document.getElementById("cuadro" + miPosicion).innerHTML="";
                               document.getElementById(cuadroSeleccionado.getAttribute("id")).setAttribute("fichadelJugador","0");

                               //elimina la ficha del rival
                               document.getElementById("cuadro"+posicionIntermedia).innerHTML="";  
                               document.getElementById("cuadro"+posicionIntermedia).setAttribute("fichadelJugador","0")

                               //pone la ficha del jugador #1
                               document.getElementById("cuadro"+posicionObjetivo).innerHTML="0";  
                               document.getElementById("cuadro"+posicionObjetivo).setAttribute("fichadelJugador","2")

                               //para cambiar el color del cero
                               document.getElementById("cuadro"+posicionObjetivo).style.setProperty("color","#F00");
                               //tambien hay que decirle al programa si el jugador 1 tiene posibilidad de seguir comiendo que siga jugando 


                               console.log("posicion final" + document.getSelection().anchorNode.getAttribute("x"));
                               console.log("posicion que puede comer hacia arriba" + (parseInt(document.getSelection().anchorNode.getAttribute("x"))+2));
                               console.log("posicion  puede comer hacia abajo" + (parseInt(document.getSelection().anchorNode.getAttribute("x"))-2));
                               //vamos a validar los limites 
                               //limite hacia arriba=0
                               //limite hacia abajo-
                               if ((parseInt(document.getSelection().anchorNode.getAttribute("x"))+2)==cuadroSeleccionado.getAttribute("x") || (parseInt(document.getSelection().anchorNode.getAttribute("x"))-2)==cuadroSeleccionado.getAttribute("x"))
                               {
                                    
                                    //vamos a validar que nuestra posicion objetivo este vacio para eso necesitamos a y
                                    console.log("posicion final:" + document.getSelection().anchorNode.getAttribute("y"))
                                    //validar las cuatro posiciones, las puse en variable para que se pueda ver mejor
                                    let posicionAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2);
                                    let posicionArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-2);
                                    let posicionDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+2);
                                    let posicionIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-2);

                                    //validaremos que ninguna posicion se salga de los extremos
                                    console.log("posicion de Abajo:" + posicionAbajo);
                                    console.log("posicion de Arriba:" + posicionArriba);
                                    console.log("posicion de Izquierda:" + posicionDerecha);
                                    console.log("posicion de derecha:" + posicionIzquierda);
                                    if(posicionArriba<0 || posicionArriba>9){posicionArriba=0;}
                                    //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                    if(posicionAbajo<0 || posicionAbajo>9){posicionAbajo=0;}
                                    //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                    if(posicionIzquierda<0 || posicionIzquierda>7){posicionIzquierda=0;}
                                    //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                    if(posicionDerecha<0 || posicionDerecha>7){posicionDerecha=0;}

                                    //validaremos todas las diagonales y si la posicion sale del tablero
                                    if(document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                       document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" ||
                                       document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                       document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" )
                                    {
                                        //ahora validaremos que hay una posibilidad para comer
                                        //cuando esta verde indica que puede seguir comiendo
                                        posicionInicial=posicionObjetivo;
                                        //identificacion de la posiciones intermedia
                                        let posicionIntermediaAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+1);
                                        let posicionIntermediaArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-1);
                                        let posicionIntermediaDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+1);
                                        let posicionIntermediaIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-1);

                                        
                                        //si la posicion Arriba se sale del tablero la ubicare en un cuadro negro
                                         if(posicionIntermediaArriba<0 || posicionIntermediaArriba>9){posicioIntermedianArriba=0;}
                                        //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                        if(posicionIntermediaAbajo<0 || posicionIntermediaAbajo>9){posicionIntermediaAbajo=0;}
                                        //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                        if(posicionIntermediaIzquierda<0 || posicionIntermediaIzquierda>7){posicionIntermediaIzquierda=0;}
                                        //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                        if(posicionIntermediaDerecha<0 || posicionIntermediaDerecha>7){posicionIntermediaDerecha=0;}
                                        //validaremos que ninguna posicion se salga de los extremos
                                        console.log("posicion Intermedia de Abajo:" + posicionIntermediaAbajo);
                                        console.log("posicion Intermedia de Arriba:" + posicionIntermediaArriba);
                                        console.log("posicion Intermedia de Izquierda:" + posicionIntermediaDerecha);
                                        console.log("posicion Intermedia de derecha:" + posicionIntermediaIzquierda);

                                        //validaremos todas las diagonales y si la posicion sale del tablero
                                        if((document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="1" && (document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" )) ||
                                        (document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="1" && (document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0"))||
                                        (document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="1" && (document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0"))||
                                        (document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="1" && (document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0")))
                                        { 
                                            //como identificar posicion final 
                                            document.getElementById("cuadro" + posicionInicial).style.setProperty("Background-color","#0f0");
                                            movimiento=2;
                                        }
                                    }
                                    if(movimiento!=2)
                                    {
                                       
                                        movimiento=0;
                                        jugador=1;
                                        jugadorHTML.innerHTML="le toca jugar al jugador 1";
                                        jugadorHTML.style.setProperty("color","#00f")
                                    }
                           }
                     
                        }
                        //lo validaremos con el anchooffset,si tiene texto es 1 
                        //pero pondremos otra condicional ya que puede moverse diferente si hay una ficha rival(MOVIMIENTO AL ATACAR)
                         //si hay una ficha validaremos si hay un espacio vacio atras de esa ficha
                         if(document.getSelection().anchorOffset==1)
                        {
                            //en ambos caso dejara de estar seleccionado
                            document.getElementById(cuadroSeleccionado.getAttribute("id")).style.setProperty("Background-color","#fff")
                            banderaS=1;
                            console.log("ya hay una ficha donde la quiere poner")

                        }
                        }
                        if(movimiento==2)
                        {
                         
                            //la posicion inicial es la posicion inicial
                            //identificaremos posicion objetivo
                            //posicion objetivo, 
                            // esto me permite comer tanto para delante como hacia atras
                            //Determinar la posicion intermedia 
                            let x="",y="";
                            let posicionObjetivo=document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y");
                            console.log("posicion inicial" + posicionInicial);
                            console.log("posicion Objetivo " + posicionObjetivo);

                            //tanto los valores de posicion inicial y posicion objetivo son string y a su vez son arreglos asi que puedo tratarlos asi
                            console.log("posicion inicial x" + posicionInicial[0]);
                            console.log("posicion Objetivo y" + posicionObjetivo[0]);
                            //lo primero es que para determinar la posicion intermedio tenemos 4 posibilidades
                            //simple matematicas
                            //cada bloque representa 4 bloque, comenzaremos a identificar los bloques verdes

                            //cuando la posicion objetivo sea superior a la posicion final
                            if (parseInt(posicionInicial[0])==(parseInt(posicionObjetivo[0])+2)) 
                            {
                                x=parseInt(posicionObjetivo[0] ) +1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //cuando la posicion objetivo sea inferior a la posicion inicial
                            if ((parseInt(posicionInicial[0]))==(parseInt(posicionObjetivo[0])-2))
                            {
                                x=parseInt(posicionObjetivo[0])-1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }

                            //tenemos el valor de x solo falta y
                            let posicionIntermedia=x+ "" + y;
                            
                            console.log("posicionIntermedia:" + posicionIntermedia);
                            if(document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="0" || document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="2")
                               {
                                console.log("movimiento no valido");
                                //banderaS=1;
                               }
                               //-------------------------------Segundo Ataque consecutivo del jugador #1---------------------------------------------------------------------
                               //valida si el atributo es del rivval, en ese caso atacara
                               if(document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="1")
                               {
                                    console.log("ataca")
                                    //elimina la ficha del cuadro seleccionado y lo introduce en el cuadro sobjetivo
                                   document.getElementById("cuadro" + posicionInicial).innerHTML="";
                                   document.getElementById("cuadro" + posicionInicial).setAttribute("fichadelJugador","0");

                                   //elimina la ficha del rival
                                   document.getElementById("cuadro"+posicionIntermedia).innerHTML="";  
                                   document.getElementById("cuadro"+posicionIntermedia).setAttribute("fichadelJugador","0")

                                   //pone la ficha del jugador #1
                                   document.getElementById("cuadro"+posicionObjetivo).innerHTML="0";  
                                   document.getElementById("cuadro"+posicionObjetivo).setAttribute("fichadelJugador","2")

                                   //para cambiar el color del cero
                                   document.getElementById("cuadro"+posicionObjetivo).style.setProperty("color","#f00");
                                   
                                   //para volver el cuadro verde blanco 
                                   document.getElementById("cuadro"+posicionInicial).style.setProperty("Background-color","#fff");
                               }
                               //--------------------------Validar Ataque tres--------------------------------------------------//
                                   console.log("validacion 3");
                                   posicionInicial=document.getSelection().anchorNode.getAttribute("x")+document.getSelection().anchorNode.getAttribute("y")
                                   console.log("posicion final" + posicionInicial);
                                   console.log("posicion que puede comer hacia arriba" + (parseInt(document.getSelection().anchorNode.getAttribute("x"))+2));
                                   console.log("posicion  puede comer hacia abajo" + (parseInt(document.getSelection().anchorNode.getAttribute("x"))-2));
                                   if ((parseInt(document.getSelection().anchorNode.getAttribute("x"))+2)==(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2) || (parseInt(document.getSelection().anchorNode.getAttribute("x"))-2)==(parseInt(document.getSelection().anchorNode.getAttribute("x"))))
                                   {
                                        
                                        //vamos a validar que nuestra posicion objetivo este vacio para eso necesitamos a y
                                        console.log("posicion final:" + document.getSelection().anchorNode.getAttribute("y"))
                                        //validar las cuatro posiciones, las puse en variable para que se pueda ver mejor
                                        let posicionAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2);
                                        let posicionArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-2);
                                        let posicionDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+2);
                                        let posicionIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-2);

                                        //validaremos que ninguna posicion se salga de los extremos
                                        console.log("posicion de Abajo:" + posicionAbajo);
                                        console.log("posicion de Arriba:" + posicionArriba);
                                        console.log("posicion de Izquierda:" + posicionDerecha);
                                        console.log("posicion de derecha:" + posicionIzquierda);
                                        if(posicionArriba<0 || posicionArriba>9){posicionArriba=0;}
                                        //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                        if(posicionAbajo<0 || posicionAbajo>9){posicionAbajo=0;}
                                        //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                        if(posicionIzquierda<0 || posicionIzquierda>7){posicionIzquierda=0;}
                                        //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                        if(posicionDerecha<0 || posicionDerecha>7){posicionDerecha=0;}

                                        //validaremos todas las diagonales y si la posicion sale del tablero
                                        if(document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                           document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" ||
                                           document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                           document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" )
                                        {
                                            //ahora validaremos que hay una posibilidad para comer
                                            //cuando esta verde indica que puede seguir comiendo
                                            posicionInicial=posicionObjetivo;
                                            //identificacion de la posiciones intermedia
                                            let posicionIntermediaAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+1);
                                            let posicionIntermediaArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-1);
                                            let posicionIntermediaDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+1);
                                            let posicionIntermediaIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-1);
    
                                            
                                            //si la posicion Arriba se sale del tablero la ubicare en un cuadro negro
                                             if(posicionIntermediaArriba<0 || posicionIntermediaArriba>9){posicioIntermedianArriba=0;}
                                            //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                            if(posicionIntermediaAbajo<0 || posicionIntermediaAbajo>9){posicionIntermediaAbajo=0;}
                                            //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                            if(posicionIntermediaIzquierda<0 || posicionIntermediaIzquierda>7){posicionIntermediaIzquierda=0;}
                                            //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                            if(posicionIntermediaDerecha<0 || posicionIntermediaDerecha>7){posicionIntermediaDerecha=0;}
                                            //validaremos que ninguna posicion se salga de los extremos
                                            console.log("posicion Intermedia de Abajo:" + posicionIntermediaAbajo);
                                            console.log("posicion Intermedia de Arriba:" + posicionIntermediaArriba);
                                            console.log("posicion Intermedia de Izquierda:" + posicionIntermediaDerecha);
                                            console.log("posicion Intermedia de derecha:" + posicionIntermediaIzquierda);

                                            //validaremos todas las diagonales y si la posicion sale del tablero
                                            if((document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="1" && (document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" )) ||
                                               (document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="1" && (document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0"))||
                                               (document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="1" && (document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0"))||
                                               (document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="1" && (document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0")))
                                            { 
                                                //como identificar posicion final 
                                                document.getElementById("cuadro" + posicionInicial).style.setProperty("Background-color","#ff0");
                                                movimiento=3;
                                            }
                                        }
                                        //si el jugador no tiene opcion a comer una tercera vez le dara error
                                        if(movimiento!=3)
                                        {
                                           console.log("no comera");
                                            movimiento=0;
                                            jugador=1;
                                            jugadorHTML.innerHTML="le toca jugar al jugador 1";
                                            jugadorHTML.style.setProperty("color","#00f")
                                        }
                                
                                    }
                        }
                        if(movimiento==3 && posicionInicial!=(document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y")))
                        {
                            //hay que resolver porque se queda frizado
                            console.log("=========ataque tres=========================")
                            //la posicion inicial es la posicion inicial
                            //identificaremos posicion objetivo
                            //posicion objetivo, 
                            // esto me permite comer tanto para delante como hacia atras
                            //Determinar la posicion intermedia 
                            let x="",y="";
                            let posicionObjetivo=document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y");
                            console.log("posicion inicial" + posicionInicial);
                            console.log("posicion Objetivo " + posicionObjetivo);

                            //tanto los valores de posicion inicial y posicion objetivo son string y a su vez son arreglos asi que puedo tratarlos asi
                            console.log("posicion inicial x" + posicionInicial[0]);
                            console.log("posicion Objetivo y" + posicionObjetivo[0]);
                            //lo primero es que para determinar la posicion intermedio tenemos 4 posibilidades
                            //simple matematicas
                            //cada bloque representa 4 bloque, comenzaremos a identificar los bloques verdes

                            //cuando la posicion objetivo sea superior a la posicion final
                            if (parseInt(posicionInicial[0])==(parseInt(posicionObjetivo[0])+2)) 
                            {
                                x=parseInt(posicionObjetivo[0] ) +1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //cuando la posicion objetivo sea inferior a la posicion inicial
                            if ((parseInt(posicionInicial[0]))==(parseInt(posicionObjetivo[0])-2))
                            {
                                x=parseInt(posicionObjetivo[0])-1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //tenemos el valor de x solo falta y
                            let posicionIntermedia=x+ "" + y;
                            
                            console.log("posicionIntermedia:" + posicionIntermedia);
                            if((document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="0" || document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="2") && y!="0")
                               {
                                console.log("movimiento no valido");
                               }
                               //-------------------------------tercer Ataque consecutivo del jugador #1---------------------------------------------------------------------
                               //valida si el atributo es del rivval, en ese caso atacara
                               //el lo usaremos como prueba (y!="0" && x!="0")
                            if((document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="1") && (y!="0" && x!="0")) 
                            {
                                    console.log("ataca")
                                    //elimina la ficha del cuadro seleccionado y lo introduce en el cuadro sobjetivo
                                   document.getElementById("cuadro" + posicionInicial).innerHTML="";
                                   document.getElementById("cuadro" + posicionInicial).setAttribute("fichadelJugador","0");

                                   //elimina la ficha del rival
                                   document.getElementById("cuadro"+posicionIntermedia).innerHTML="";  
                                   document.getElementById("cuadro"+posicionIntermedia).setAttribute("fichadelJugador","0")

                                   //pone la ficha del jugador #1
                                   document.getElementById("cuadro"+posicionObjetivo).innerHTML="0";  
                                   document.getElementById("cuadro"+posicionObjetivo).setAttribute("fichadelJugador","0")

                                   //para cambiar el color del cero
                                   document.getElementById("cuadro"+posicionObjetivo).style.setProperty("color","#f00");
                                   
                                   //para volver el cuadro verde blanco 
                                   document.getElementById("cuadro"+posicionInicial).style.setProperty("Background-color","#fff");
                                   
                            }
                             //-------------------------------------------------------Validacion come 4-------------------------------------
                             if ((parseInt(document.getSelection().anchorNode.getAttribute("x"))+2)==(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2) || (parseInt(document.getSelection().anchorNode.getAttribute("x"))-2)==(parseInt(document.getSelection().anchorNode.getAttribute("x"))))
                             {
                                  
                                  //vamos a validar que nuestra posicion objetivo este vacio para eso necesitamos a y
                                  console.log("posicion final:" + document.getSelection().anchorNode.getAttribute("y"))
                                  //validar las cuatro posiciones, las puse en variable para que se pueda ver mejor
                                  let posicionAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2);
                                  let posicionArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-2);
                                  let posicionDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+2);
                                  let posicionIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-2);

                                  //validaremos que ninguna posicion se salga de los extremos
                                  console.log("posicion de Abajo:" + posicionAbajo);
                                  console.log("posicion de Arriba:" + posicionArriba);
                                  console.log("posicion de Izquierda:" + posicionDerecha);
                                  console.log("posicion de derecha:" + posicionIzquierda);
                                  //si la posicion Arriba se sale del tablero la ubicare en un cuadro negro
                                  if(posicionArriba<0 || posicionArriba>9){posicionArriba=0;}
                                  //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                  if(posicionAbajo<0 || posicionAbajo>9){posicionAbajo=0;}
                                  //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                  if(posicionIzquierda<0 || posicionIzquierda>7){posicionIzquierda=0;}
                                  //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                  if(posicionDerecha<0 || posicionDerecha>7){posicionDerecha=0;}

                                  //validaremos todas las diagonales y si la posicion sale del tablero
                                  if(document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                     document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" ||
                                     document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                     document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" )
                                  {
                                      //ahora validaremos que hay una posibilidad para comer
                                      //cuando esta verde indica que puede seguir comiendo
                                      posicionInicial=posicionObjetivo;
                                      //identificacion de la posiciones intermedia
                                      let posicionIntermediaAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+1);
                                      let posicionIntermediaArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-1);
                                      let posicionIntermediaDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+1);
                                      let posicionIntermediaIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-1);

                                      
                                      //si la posicion Arriba se sale del tablero la ubicare en un cuadro negro
                                       if(posicionIntermediaArriba<0 || posicionIntermediaArriba>9){posicioIntermedianArriba=0;}
                                      //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                      if(posicionIntermediaAbajo<0 || posicionIntermediaAbajo>9){posicionIntermediaAbajo=0;}
                                      //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                      if(posicionIntermediaIzquierda<0 || posicionIntermediaIzquierda>7){posicionIntermediaIzquierda=0;}
                                      //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                      if(posicionIntermediaDerecha<0 || posicionIntermediaDerecha>7){posicionIntermediaDerecha=0;}
                                      //validaremos que ninguna posicion se salga de los extremos
                                      console.log("posicion Intermedia de Abajo:" + posicionIntermediaAbajo);
                                      console.log("posicion Intermedia de Arriba:" + posicionIntermediaArriba);
                                      console.log("posicion Intermedia de Izquierda:" + posicionIntermediaDerecha);
                                      console.log("posicion Intermedia de derecha:" + posicionIntermediaIzquierda);

                                      //validaremos todas las diagonales y si la posicion sale del tablero
                                      if((document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="1" && (document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" )) ||
                                        (document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="1" && (document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0"))||
                                        (document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="1" && (document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0"))||
                                        (document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="1" && (document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0")))
                                        { 
                                          //como identificar posicion final , tiene que ser morado
                                          document.getElementById("cuadro" + posicionInicial).style.setProperty("Background-color","#f0f");
                                          movimiento=4;
                                      }
                                  }
                                  if(movimiento!=4)
                                  {
                                      movimiento=0;
                                      jugador=1;
                                      jugadorHTML.innerHTML="le toca jugar al jugador 1";
                                      jugadorHTML.style.setProperty("color","#00f")
                                  }
                          
                              }
                            
                            //una vez obtenido la posicion intermedia podemos realizar el proceso de comer la otra ficha
                            
                            
                        }

                        if(movimiento==4 && posicionInicial!=(document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y")))
                        {
                            console.log("=========ataque cuatro=========================")
                            let x="",y="";
                            let posicionObjetivo=document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y");
                            console.log("posicion inicial" + posicionInicial);
                            console.log("posicion Objetivo " + posicionObjetivo);

                            //tanto los valores de posicion inicial y posicion objetivo son string y a su vez son arreglos asi que puedo tratarlos asi
                            console.log("posicion inicial x" + posicionInicial[0]);
                            console.log("posicion Objetivo y" + posicionObjetivo[0]);
                            //lo primero es que para determinar la posicion intermedio tenemos 4 posibilidades
                            //simple matematicas
                            //cada bloque representa 4 bloque, comenzaremos a identificar los bloques verdes

                            //cuando la posicion objetivo sea superior a la posicion final
                            if (parseInt(posicionInicial[0])==(parseInt(posicionObjetivo[0])+2)) 
                            {
                                x=parseInt(posicionObjetivo[0] ) +1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //cuando la posicion objetivo sea inferior a la posicion inicial
                            if ((parseInt(posicionInicial[0]))==(parseInt(posicionObjetivo[0])-2))
                            {
                                x=parseInt(posicionObjetivo[0])-1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //tenemos el valor de x solo falta y
                            let posicionIntermedia=x+ "" + y;
                            
                            console.log("posicionIntermedia:" + posicionIntermedia);
                            if((document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="0" || document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="2") && y!="0")
                               {
                                console.log("movimiento no valido");
                               }
                               //-------------------------------cuarto Ataque consecutivo del jugador #1---------------------------------------------------------------------
                               //valida si el atributo es del rivval, en ese caso atacara
                               //el lo usaremos como prueba (y!="0" && x!="0")
                            if((document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="1") && (y!="0" && x!="0")) 
                            {
                                    console.log("ataca")
                                    //elimina la ficha del cuadro seleccionado y lo introduce en el cuadro sobjetivo
                                   document.getElementById("cuadro" + posicionInicial).innerHTML="";
                                   document.getElementById("cuadro" + posicionInicial).setAttribute("fichadelJugador","0");

                                   //elimina la ficha del rival
                                   document.getElementById("cuadro"+posicionIntermedia).innerHTML="";  
                                   document.getElementById("cuadro"+posicionIntermedia).setAttribute("fichadelJugador","0")

                                   //pone la ficha del jugador #1
                                   document.getElementById("cuadro"+posicionObjetivo).innerHTML="0";  
                                   document.getElementById("cuadro"+posicionObjetivo).setAttribute("fichadelJugador","2")

                                   //para cambiar el color del cero
                                   document.getElementById("cuadro"+posicionObjetivo).style.setProperty("color","#f00");
                                   
                                   //para volver el cuadro verde blanco 
                                   document.getElementById("cuadro"+posicionInicial).style.setProperty("Background-color","#fff");
                                   
                                   
                            }
                             //-------------------------------------------------------Validacion come 5-------------------------------------
                             if ((parseInt(document.getSelection().anchorNode.getAttribute("x"))+2)==(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2) || (parseInt(document.getSelection().anchorNode.getAttribute("x"))-2)==(parseInt(document.getSelection().anchorNode.getAttribute("x"))))
                             {
                                  
                                  //vamos a validar que nuestra posicion objetivo este vacio para eso necesitamos a y
                                  console.log("posicion final:" + document.getSelection().anchorNode.getAttribute("y"))
                                  //validar las cuatro posiciones, las puse en variable para que se pueda ver mejor
                                  let posicionAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+2);
                                  let posicionArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-2);
                                  let posicionDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+2);
                                  let posicionIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-2);

                                  //validaremos que ninguna posicion se salga de los extremos
                                  console.log("posicion de Abajo:" + posicionAbajo);
                                  console.log("posicion de Arriba:" + posicionArriba);
                                  console.log("posicion de Izquierda:" + posicionDerecha);
                                  console.log("posicion de derecha:" + posicionIzquierda);
                                  //si la posicion Arriba se sale del tablero la ubicare en un cuadro negro
                                  if(posicionArriba<0 || posicionArriba>9){posicionArriba=0;}
                                  //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                  if(posicionAbajo<0 || posicionAbajo>9){posicionAbajo=0;}
                                  //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                  if(posicionIzquierda<0 || posicionIzquierda>7){posicionIzquierda=0;}
                                  //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                  if(posicionDerecha<0 || posicionDerecha>7){posicionDerecha=0;}

                                  //validaremos todas las diagonales y si la posicion sale del tablero
                                  if(document.getElementById("cuadro"+posicionArriba+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                     document.getElementById("cuadro"+posicionArriba+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" ||
                                     document.getElementById("cuadro"+posicionAbajo+ "" + posicionIzquierda).getAttribute("fichadelJugador")=="0" ||
                                     document.getElementById("cuadro"+posicionAbajo+ "" + posicionDerecha).getAttribute("fichadelJugador")=="0" )
                                  {
                                      //ahora validaremos que hay una posibilidad para comer
                                      //cuando esta verde indica que puede seguir comiendo
                                      posicionInicial=posicionObjetivo;
                                      //identificacion de la posiciones intermedia
                                      let posicionIntermediaAbajo=(parseInt(document.getSelection().anchorNode.getAttribute("x"))+1);
                                      let posicionIntermediaArriba=(parseInt(document.getSelection().anchorNode.getAttribute("x"))-1);
                                      let posicionIntermediaDerecha=(parseInt(document.getSelection().anchorNode.getAttribute("y"))+1);
                                      let posicionIntermediaIzquierda=(parseInt(document.getSelection().anchorNode.getAttribute("y"))-1);

                                      
                                      //si la posicion Arriba se sale del tablero la ubicare en un cuadro negro
                                       if(posicionIntermediaArriba<0 || posicionIntermediaArriba>9){posicioIntermedianArriba=0;}
                                      //si la posicion Abajo se sale del tablero la ubicare en un cuadro negro
                                      if(posicionIntermediaAbajo<0 || posicionIntermediaAbajo>9){posicionIntermediaAbajo=0;}
                                      //si la posicion Izquierda se sale del tablero la ubicare en un cuadro negro
                                      if(posicionIntermediaIzquierda<0 || posicionIntermediaIzquierda>7){posicionIntermediaIzquierda=0;}
                                      //si la posicion derecha se sale del tablero la ubicare en un cuadro negro
                                      if(posicionIntermediaDerecha<0 || posicionIntermediaDerecha>7){posicionIntermediaDerecha=0;}
                                      //validaremos que ninguna posicion se salga de los extremos
                                      console.log("posicion Intermedia de Abajo:" + posicionIntermediaAbajo);
                                      console.log("posicion Intermedia de Arriba:" + posicionIntermediaArriba);
                                      console.log("posicion Intermedia de Izquierda:" + posicionIntermediaDerecha);
                                      console.log("posicion Intermedia de derecha:" + posicionIntermediaIzquierda);

                                      //validaremos todas las diagonales y si la posicion sale del tablero
                                      if(document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="1" ||
                                         document.getElementById("cuadro"+posicionIntermediaArriba+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="1" ||
                                         document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaIzquierda).getAttribute("fichadelJugador")=="1" ||
                                         document.getElementById("cuadro"+posicionIntermediaAbajo+ "" + posicionIntermediaDerecha).getAttribute("fichadelJugador")=="1" )
                                      { 
                                          console.log("yo comere otra mas;")
                                          //como identificar posicion final , tiene que ser morado
                                          document.getElementById("cuadro" + posicionInicial).style.setProperty("Background-color","#000");
                                          movimiento=5;
                                      }
                                  }
                                  if(movimiento!=5)
                                  {
                                     console.log("no comera");
                                      movimiento=0;
                                      jugador=1;
                                      jugadorHTML.innerHTML="le toca jugar al jugador 1";
                                      jugadorHTML.style.setProperty("color","#00f")
                                  }
                          
                              }
                            
                            //una vez obtenido la posicion intermedia podemos realizar el proceso de comer la otra ficha
                            
                            
                        }

                        //movimiento tendria que ser igual a 5 xD
                        if(movimiento==5 && posicionInicial!=(document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y")))
                        {
                            //hay que resolver porque se queda frizado
                            console.log("=========ataque cinco=========================")
                            //Determinar la posicion intermedia 
                            let x="",y="";
                            let posicionObjetivo=document.getSelection().anchorNode.getAttribute("x") + "" + document.getSelection().anchorNode.getAttribute("y");
                            console.log("posicion inicial" + posicionInicial);
                            console.log("posicion Objetivo " + posicionObjetivo);
                            //tanto los valores de posicion inicial y posicion objetivo son string y a su vez son arreglos asi que puedo tratarlos asi
                            console.log("posicion inicial x" + posicionInicial[0]);
                            console.log("posicion Objetivo y" + posicionObjetivo[0]);

                            //cuando la posicion objetivo sea superior a la posicion final
                            if (parseInt(posicionInicial[0])==(parseInt(posicionObjetivo[0])+2)) 
                            {
                                x=parseInt(posicionObjetivo[0] ) +1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //cuando la posicion objetivo sea inferior a la posicion inicial
                            if ((parseInt(posicionInicial[0]))==(parseInt(posicionObjetivo[0])-2))
                            {
                                x=parseInt(posicionObjetivo[0])-1;
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])+2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) +1;
                                }
                                if(parseInt(posicionInicial[1])==(parseInt(posicionObjetivo[1])-2))
                                {
                                    y=parseInt(posicionObjetivo[1] ) -1;
                                }
                            }
                            //ESE ELSE NO VA
                            //tenemos el valor de x solo falta y
                            let posicionIntermedia=x+ "" + y;
                            
                            console.log("posicionIntermedia:" + posicionIntermedia);
                            if((document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="0" || document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="2") && y!="0")
                               {
                                console.log("movimiento no valido");
                               }
                               //-------------------------------tcuarto Ataque consecutivo del jugador #1---------------------------------------------------------------------
                               //valida si el atributo es del rivval, en ese caso atacara
                               //el lo usaremos como prueba (y!="0" && x!="0")
                            if((document.getElementById("cuadro"+posicionIntermedia).getAttribute("fichadelJugador")=="1") && (y!="0" && x!="0")) 
                            {
                                    console.log("ataca")
                                    //elimina la ficha del cuadro seleccionado y lo introduce en el cuadro sobjetivo
                                   document.getElementById("cuadro" + posicionInicial).innerHTML="";
                                   document.getElementById("cuadro" + posicionInicial).setAttribute("fichadelJugador","0");

                                   //elimina la ficha del rival
                                   document.getElementById("cuadro"+posicionIntermedia).innerHTML="";  
                                   document.getElementById("cuadro"+posicionIntermedia).setAttribute("fichadelJugador","0")

                                   //pone la ficha del jugador #1
                                   document.getElementById("cuadro"+posicionObjetivo).innerHTML="0";  
                                   document.getElementById("cuadro"+posicionObjetivo).setAttribute("fichadelJugador","2")

                                   //para cambiar el color del cero
                                   document.getElementById("cuadro"+posicionObjetivo).style.setProperty("color","#f00");
                                   
                                   //para volver el cuadro verde blanco 
                                   document.getElementById("cuadro"+posicionInicial).style.setProperty("Background-color","#fff");
                                   
                                    movimiento=0;
                                    jugador=1;
                                    jugadorHTML.innerHTML="le toca jugar al jugador 1";
                                    jugadorHTML.style.setProperty("color","#00f")
                                   
                                   
                            }
                            
                            //una vez obtenido la posicion intermedia podemos realizar el proceso de comer la otra ficha
                            
                            
                        }
                        validarGanador();
                            
                    }
                    //por si quiere introducirla en un cuadro negro
                    if(document.getSelection().anchorNode.getAttribute("value")=="0")
                    {
                        document.getElementById(cuadroSeleccionado.getAttribute("id")).style.setProperty("Background-color","#fff")
                        banderaS=1;
                        console.log("no se puede mover a la ficha a un cuadro negro")
                    }
                    banderaS=1;
                }
            })
            ++j;
        }
	    ++i;
        j=0;
        //la pondre al final para que me valida cada vez que pase un turno 
       
    }
    
    
}

const validarGanador=()=>
{
    //lo primero que haremos sera recorrer todos los cuadro solicitando informacion.
    //yo en este caso hare un copypaster para construir el bucle 
    //deben tener mucho cuidando ya que puede traer problema
    //una vez creado el bucle ahora seleccionaremos cada cuadro
    //recorrera las columnas 
    
    let i=0;
    //recorrera las filas 
    let j=0;
    //crearemos dos variables locales para tener control sobre la cantidad de fichas
    let cantidadFichaJugador1=0,cantidadFichaJugador2=0;
    while(i<10)
    {
        while(j<8)
        {
           cuadro=document.getElementById("cuadro" + i + "" + j );
           if(cuadro.getAttribute("fichaDelJugador")=="1")
           {
               ++cantidadFichaJugador1;
           }
           if(cuadro.getAttribute("fichaDelJugador")=="2")
           {
               ++cantidadFichaJugador2;
           }
            ++j;
        }
        j=0;
        ++i;
    }
    console.log("cantidad de ficha del jugador 1=" + cantidadFichaJugador1);
    console.log("cantidad de ficha del jugador 2=" + cantidadFichaJugador2);
    puntuacion.innerHTML='Jugador 1'+'<div class="fichasJugador" id="fichasJ1">'+cantidadFichaJugador1+'</div>' +
                        'Jugador 2'+'<div class="fichasJugador" id="fichasJ2">'+cantidadFichaJugador2+'</div> ';
    //vamos a decidir el ganador
    //El primero que coma 6 ficha de su contricante sera el ganador 
    //testearemos el juego con una partida ncompleta buscando el bug
    if(cantidadFichaJugador1==0)
    {
        //vamos a destrozar el tablero, para impedir que el jugador siga jugando jajaja
        gridcontainer.innerHTML='<div class='+"ganador"+'>Jugador 2 Ha ganado!!!</div>'
        document.getElementById("titulo2").innerHTML="";
    }
    
    if(cantidadFichaJugador2==0)
    {
        //vamos a destrozar el tablero, para impedir que el jugador siga jugando jajaja
        gridcontainer.innerHTML='<div class='+"ganador"+'>Jugador 1 Ha ganado!!!</div>'
        document.getElementById("titulo2").innerHTML="";
    }
}
//despues de crear el tablero le daremos estilo para que se vea como un autentico tablero
window.onload=(crearTablero());

Jugabilidad();