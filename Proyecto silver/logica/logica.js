//ahora vamos a crear el entorno dinamicamente
//creamos nuestra constante de entorno 
//actualmente especicificare , mas adelante generalizare los eventos 

// esta variable me guardara la posicion,comenzara en el centro 
let x=4,y=4,posicion='44',i=0, timerId,indicador=false,c=1;
const entorno= document.getElementById("entorno");
const titulo= document.getElementById("titulo");
//EVENTOS PRINCIPALES
crearEntorno=(c)=>
{   
    let i=0,j=0;
    titulo.innerHTML=""
    entorno.innerHTML=""
    while(i<9)
    {
        while(j<9)
        {
            //esto me va a crear el entorno general
            if(c==1)
            {
                //agregamos una propiedad que nos indique si puede camniar, si es verde no puede si es bisque si 
                //esto me va a crear una cruz 
                if((i==4 && j<8 || i==4 && j>0) || ((j==4 && j<8 || i==4 && i>0)) || (i==8 && j>4))
                {
                    entorno.innerHTML+='<div class="item" puedoCaminar="true" id="'+i+""+j+'"></div>'
                    //pintara la fila
                    
                    //pintara la columna
                    document.getElementById(i + "" + j).style.setProperty("background-image",'url("img/piso1.jpg")');
                    //document.getElementById(i + "" + j).style.setProperty("background-color","bisque");
                }
                else
                {
                    entorno.innerHTML+='<div class="item" puedoCaminar="false" id="'+i+""+j+'"></div>'
                    //pintara verde
                    document.getElementById(i + "" + j).style.setProperty("background-image",'url("img/pasto1.jpg")');
                    //document.getElementById(i + "" + j).style.setProperty("background-color","#0f0");
                }
                
                
            }
            //HAREMOS QUE PROGRAMACION WEB SEA AMARILLO Y TENGA UN CIRCULO 
            if(c==2 )
            {
                //agregamos una propiedad que nos indique si puede camniar, si es verde no puede si es bisque si 
                //esto me va a crear una cruz 
                if((i==4 && j<8 || i==4 && j>0) || ((j==4 && j<8 || i==4 && i>0)) || (i==8 && j>4) || (i==2 && j>1) || (i==2 && j<7) || (i==6 && j>1) || (i==6 && j<7)|| (i>1 && j==6) || (i<7 && j==2) || (i>1 && j==6) || (i<7 && j==2))
                {
                    entorno.innerHTML+='<div class="item" puedoCaminar="true" id="'+i+""+j+'"></div>'
                    //pintara la fila
                    //document.getElementById(i + "" + j).style.setProperty("background-color","white");
                    document.getElementById(i + "" + j).style.setProperty("background-image",'url("img/piso2.jpg")');
                    //pintara la columna
                    //document.getElementById(j + "" + i).style.setProperty("background-color","bisque");
                }
                else
                {
                    entorno.innerHTML+='<div class="item" puedoCaminar="false" id="'+i+""+j+'"></div>'
                    //pintara verde
                    document.getElementById(i + "" + j).style.setProperty("background-image",'url("img/pasto2.jpg")');
                    //document.getElementById(i + "" + j).style.setProperty("background-color","yellow");
                }
            }
            //haremos que 3 sea un mundo de fuego || c==3 || c==4 || c==5
            if(c==3 )
            {
                //agregamos una propiedad que nos indique si puede camniar, si es verde no puede si es bisque si 
                //esto me va a crear una cruz 
                if((i==4 && j<8 || i==4 && j>0) || ((j==4 && j<8 || i==4 && i>0)) || (i==8 && j>4) || (i==2 && j>1) || (i==2 && j<7) || (i==6 && j>1) || (i==6 && j<7))
                {
                    entorno.innerHTML+='<div class="item" puedoCaminar="true" id="'+i+""+j+'"></div>'
                    //pintara la fila
                    //document.getElementById(i + "" + j).style.setProperty("background-color","#444");
                    document.getElementById(i + "" + j).style.setProperty("background-image",'url("img/piso3.jpg")');
                    //pintara la columna
                    //document.getElementById(j + "" + i).style.setProperty("background-color","bisque");
                }
                else
                {
                    entorno.innerHTML+='<div class="item" puedoCaminar="false" id="'+i+""+j+'"></div>'
                    //pintara verde
                    //document.getElementById(i + "" + j).style.setProperty("background-color","#F00");
                    document.getElementById(i + "" + j).style.setProperty("background-image",'url("img/pasto3.jpg")');
                }
            }
            //haremos que 4 sea un mundo del cielo || c==3 || c==4 || c==5
            if(c==4 )
            {
                //agregamos una propiedad que nos indique si puede camniar, si es verde no puede si es bisque si 
                //esto me va a crear una cruz 
                if((i==4 && j<8 || i==4 && j>0) || ((j==4 && j<8 || i==4 && i>0)) || (i==8 && j>4) || (i==2 && j>1) || (i==2 && j<7) || (i==6 && j>1) || (i==6 && j<7))
                {
                    entorno.innerHTML+='<div class="item" puedoCaminar="true" id="'+i+""+j+'"></div>'
                    //pintara la fila
                    //document.getElementById(i + "" + j).style.setProperty("background-color","#00f");
                    document.getElementById(i + "" + j).style.setProperty("background-image",'url("img/piso4.jpg")');
                    //pintara la columna
                    //document.getElementById(j + "" + i).style.setProperty("background-color","bisque");
                }
                else
                {
                    entorno.innerHTML+='<div class="item" puedoCaminar="false" id="'+i+""+j+'"></div>'
                    //pintara verde
                    //document.getElementById(i + "" + j).style.setProperty("background-color","#fff");
                    document.getElementById(i + "" + j).style.setProperty("background-image",'url("img/pasto4.jpg")');
                } 
            }
            //sera neon 
            if(c==5 )
            {
                //agregamos una propiedad que nos indique si puede camniar, si es verde no puede si es bisque si 
                //esto me va a crear una cruz 
                if((i==4 && j<8 || i==4 && j>0) || ((j==4 && j<8 || i==4 && i>0)) || (i==8 && j>4) || (i==2 && j>1) || (i==2 && j<7) || (i==6 && j>1) || (i==6 && j<7))
                {
                    entorno.innerHTML+='<div class="item" puedoCaminar="true" id="'+i+""+j+'"></div>'
                    //pintara la fila
                   // document.getElementById(i + "" + j).style.setProperty("background-color","#090");
                    document.getElementById(i + "" + j).style.setProperty("background-image",'url("img/piso5.jpg")');
                    //pintara la columna
                }
                else
                {
                    entorno.innerHTML+='<div class="item" puedoCaminar="false" id="'+i+""+j+'"></div>'
                    //pintara verde
                    //document.getElementById(i + "" + j).style.setProperty("background-color","#000");
                    document.getElementById(i + "" + j).style.setProperty("background-image",'url("img/pasto5.jpg")');
                } 
            }
            ++j;
        }
        j=0;
        ++i;
    }
    //es la primera vez que hago una validaciones asi jaja
    //pero funcionara, esto se  de encargara de connfigurar cada escena
    //si agrego una escena simplemente tendre que agregar su configuracion
    if(c==1)establecerConfiguracionEscena();
    else if(c==2)establecerConfiguracionSubEscena1();
    else if (c==3)establecerConfiguracionSubEscena2();
    else if(c==4)establecerConfiguracionSubEscena3();
    else if(c==5) establecerConfiguracionSubEscena4();

    
    
    
}
//EVENTOS
//crearemos cuatros condicionales, manejando la cruceta
window.addEventListener("keydown", (event) => {
    setTimeout(() => 
    {
        console.log("esta tecla estoy presionando " + event.code)
        //hacia izquierda , sera 10
        //si yo quiero ir a la izquierda tendre que restarle -1 a y
        //vamos a validar los limites del lado izquierdo
        //si es 0 se cumple y se movera , si es -1 no se cumple
        if ((event.keyCode == 37 || ((event.code).toString()).search("ArrowLeft")==0) && (y-1)>=0) 
        {   
            if(document.getElementById(x + "" + (y-1)).getAttribute("puedoCaminar")=="true" )
            {
                quitarImagen(posicion)
                posicion=x + "" + (y-1);
                console.log(posicion)
                gameLoop(posicion,1)
                --y;
            }
            
        }
        //hacia arriba , sera 01
        //si yo quiero ir a la arriba tendre que restarle -1 a x
        else if ((event.keyCode == 38 || ((event.code).toString()).search("ArrowUp")==0) && (x-1)>=0)
        {
            if(document.getElementById((x-1) + "" + y).getAttribute("puedoCaminar")=="true")
            {
                quitarImagen(posicion)
                posicion=(x-1) + "" + y;
                console.log(posicion)
                gameLoop(posicion,-1)
                --x;
            }
        }
        //hacia derecha , sera 12
        //si yo quiero ir a la derecha tendre que sumarle 1 a y
        //esta sumando como si y fuera una cadena
        else if ((event.keyCode == 39 || ((event.code).toString()).search("ArrowRight")==0) && (y+1)<=8)
        {
            
            if(document.getElementById(x + "" + (y+1)).getAttribute("puedoCaminar")=="true")
            {
                quitarImagen(posicion)
                posicion=x + "" + (y+1);
                console.log(posicion)
                gameLoop(posicion,-1)
                ++y;
            }
        
        }
        //hacia abajo , sera 21
        //si yo quiero ir a la Abajo tendre que sumarle 1 a x
        else if ((event.keyCode == 40 || ((event.code).toString()).search("ArrowDown")==0) && (x+1)<=8) 
        {
            if(document.getElementById((x+1) + "" + y).getAttribute("puedoCaminar")=="true")
            {
                quitarImagen(posicion)
                posicion=(x+1) + "" + y;
                console.log(posicion)
                gameLoop(posicion,1)
                ++x;
            }
        }
        if(c==1)mensajeconfiguracionEscena()
        else if(c==2)MensajeconfiguracionSubEscena1()
        else if(c==3)MensajeconfiguracionSubEscena2()
        else if(c==4)MensajeconfiguracionSubEscena3()
        else if(c==5)MensajeconfiguracionSubEscena4()
        // no se cual es enter vamos a probar, es 13
        if((event.keyCode==13 || ((event.code).toString()).search("Enter")==0))
        {
            if(c==1)
            {
                c=1;
                validacionConfiguracionEscena()
            }
            //aqui van la 4 escena, por ahora la haremos con un else ya que no hay nada que lo diferencie
            else if(c==2)
            {
                c=2;
                validacionConfiguracionSubEscena1();
            }
            else if(c==3)
            {
                c=3;
                validacionConfiguracionSubEscena2();
            }
            else if(c==4)
            {
                c=4;
                validacionConfiguracionSubEscena3();
            }
            else if(c==5)
            {
                c=5;
                validacionConfiguracionSubEscena4();
            }
        }
    }, 1)
})

//METODOS AUXILIARES
//Este metodo se encargara de quitar la imagen
quitarImagen=(p)=>
{
    document.getElementById(p).style.setProperty("Background-image",'url("img/piso'+c+'.jpg")');
    //document.getElementById(p).style.setProperty("transform",'scaleX('+x+')');
}

//Este metodo se encargara de agregar la imagen
AgregarImagen=(p,x)=>
{   
    ++i;
    document.getElementById(p).style.setProperty("Background-image",'url("img/'+i+'.jpg")');
    document.getElementById(p).style.setProperty("transform",'scaleX('+x+')');
    if(i==5){i=0}
    console.log("imagen" + i)
}

//Este metodo se encargara de mantener en loop la imagen 
gameLoop=(p,x)=>
{
    //clearInterval(timerId);
    //timerId = setInterval(()=>AgregarImagen(p), 250);
    AgregarImagen(p,x)
}

establecerConfiguracionEscena=()=>
{   
    
        document.getElementById("04").innerHTML="Programacion Web";
        document.getElementById("40").innerHTML="Familia de lenguaje c";
        document.getElementById("48").innerHTML="java";
        document.getElementById("88").innerHTML="?????(proximamente en Julio)";
    
}
//programacion web
establecerConfiguracionSubEscena1=()=>
{
    document.getElementById("44").style.setProperty("Background-image",'url("img/jefe1.jpg")');
    document.getElementById("20").innerHTML="Damas";
    document.getElementById("02").innerHTML="Ejemplo de array(animado)";
    document.getElementById("60").innerHTML="Cruz y circulo";
    document.getElementById("68").innerHTML="Web paint";
    document.getElementById("88").innerHTML="Fetch";
    document.getElementById("84").innerHTML="Salir";
}
//familia c 
establecerConfiguracionSubEscena2=()=>
{
    document.getElementById("44").style.setProperty("Background-image",'url("img/jefe2.jpg")');
    document.getElementById("28").innerHTML="Sistema financiero";
    document.getElementById("48").innerHTML="Sistema financiero v 3.0";
    document.getElementById("68").innerHTML="Usuario";
    document.getElementById("84").innerHTML="Salir";
}
//java
establecerConfiguracionSubEscena3=()=>
{
    document.getElementById("44").style.setProperty("Background-image",'url("img/jefe3.jpg")');
    document.getElementById("40").innerHTML="SystemBasicPAS"
    document.getElementById("84").innerHTML="Salir";
}
//?
establecerConfiguracionSubEscena4=()=>
{
    document.getElementById("44").style.setProperty("Background-image",'url("img/jefe4.jpg")');
    document.getElementById("84").innerHTML="Salir";
}
mensajeconfiguracionEscena=()=>
{
    if(posicion==04)
    {
        titulo.innerHTML="pulse enter para entrar a la zona de programacion web"
    }
    else if(posicion==48)
    {
        titulo.innerHTML="pulse enter para entrar a la zona de programacion Familia lenguaje c"
    }
    else if(posicion==40)
    {
        titulo.innerHTML="pulse enter para entrar a la zona de Java"
    }
    else if(posicion==88)
    {
        titulo.innerHTML="pulse enter para entrar a la zona de Python, Unity y Ruby"
    }
    else
    {  titulo.innerHTML=""
    }
      
}

MensajeconfiguracionSubEscena1=()=>
{   
    if(posicion==20)titulo.innerHTML="Pulse enter si quiere entrar al juego de damas o D para descargar el codigo fuente"
    else if(posicion==02)titulo.innerHTML="Pulse enter si quiere ver unn ejemplo dinamico de creacion de array o D para descargar el codigo fuente"
    else if(posicion==60)titulo.innerHTML="Pulse enter si quiere entrar al juego de Cruz y circulo o D para descargar el codigo fuente"
    else if(posicion==68)titulo.innerHTML="Pulse enter si quiere pintar o D para descargar el codigo fuente"
    else if(posicion==88)titulo.innerHTML="Pulse enter si quiere ver la pagina de peticion o D para descargar el codigo fuente"
    else if(posicion==84) titulo.innerHTML="pulse enter para Salir"
    else
    {  titulo.innerHTML=""
    }        
}
MensajeconfiguracionSubEscena2=()=>
{
    if(posicion==28)
    {
        titulo.innerHTML='Para Descargar el sistema financiero por comando, dar enter'
    }    
    else if(posicion==48)
    {
        titulo.innerHTML='Para Descargar el Sistema Financiero v3.0(interfaz grafica), dar enter'
    }
    else if(posicion==68)
    {
        titulo.innerHTML='Para Descargar la plantilla de usuario, dar enter'
    }    
    //opcion para salir
    else if(posicion==84)
    {
        titulo.innerHTML="pulse enter para Salir"
    }
    else
    {  titulo.innerHTML=""
    }    
}
MensajeconfiguracionSubEscena3=()=>
{
    if(posicion==40)
    {
        titulo.innerHTML="pulse enter para Descargar un Sistema basico de problema y solucion"
    }
    if(posicion==84)
    {
        titulo.innerHTML="pulse enter para Salir"
    }
    else
    {  titulo.innerHTML=""
    }
}
MensajeconfiguracionSubEscena4=()=>
{
    if(posicion==84)
    {
        titulo.innerHTML="pulse enter para Salir"
    }
    else
    {  titulo.innerHTML=""
    }
}

validacionConfiguracionEscena=()=>
{
    if(posicion==04)
    {   
        c=2;
        crearEntorno(c);
        
    }
    else if(posicion==40)
    {
        c=3;
        crearEntorno(c);
    }
    else if(posicion==48)
    {
        c=4;
        crearEntorno(c);
    }
    else if(posicion==88)
    {
        c=5;
        crearEntorno(c);
    }
}
validacionConfiguracionSubEscena1=()=>
{   
    
    
    //opcion para salir
    if(posicion==84)
    { 
        c=1;
        document.getElementById("20").innerHTML="";
        document.getElementById("02").innerHTML="";
        document.getElementById("60").innerHTML="";
        document.getElementById("68").innerHTML="";
        document.getElementById("88").innerHTML="";
        document.getElementById("84").innerHTML="Salir";
        crearEntorno(c);
    }
    if(posicion==20)window.open("Portafolio/1-Damas/index.html")
    else if(posicion==02) window.open("Portafolio/6-ejemplo con array(animado)/index.html")
    else if(posicion==60) window.open("Portafolio/7-Cruz y circulo/index.html")
    else if(posicion==68) window.open("Portafolio/8-.web paint/Index.html")
    else if(posicion==88) window.open("Portafolio/15-fetch/index.html")
            
}
validacionConfiguracionSubEscena2=()=>
{
    if(posicion==28)
    {
        window.open("Portafolio/2-SistemaFinanciero/2-SistemaFinanciero.rar")
    }    
    else if(posicion==48)
    {
        window.open("Portafolio/3-Sistema Financiero v3.0(interfaz grafica)/Sistema Financiero.rar")
    }
    else if(posicion==68)
    {
        window.open("Portafolio/4-Usuario/Usuario.rar")
    }    
    //opcion para salir
    else if(posicion==84)
    {
        c=1;
        document.getElementById("28").innerHTML='';
        document.getElementById("48").innerHTML='';
        document.getElementById("68").innerHTML='';
        document.getElementById("84").innerHTML="Salir";
        crearEntorno(c);
    }
        
}
validacionConfiguracionSubEscena3=()=>
{
    //pcion para salir
    if(posicion==40)
    {
        window.open('Portafolio/5-SystemBasicPAS/5-SystemBasicPAS.rar')
    }
    if(posicion==84)
    {
        c=1;
        document.getElementById("40").innerHTML='';
        document.getElementById("84").innerHTML="Salir";
        crearEntorno(c);
    }
    
}
validacionConfiguracionSubEscena4=()=>
{
    //opcion para salir
    if(posicion==84)
    {
    c=1;        
        crearEntorno(1);
    }
    
}


descargarSubEscena2=()=>
{//proximamente
}
atacar=()=>
{//proximamente
}
ataqueDelJefe=()=>
{//proximamente
}
validarSalud=()=>
{
}

//ADAPTACION PARA DISPOSITIVO MOVILES 
document.getElementById("Centro").addEventListener("click",(e)=>
{
    window.dispatchEvent(new KeyboardEvent('keydown', {
        'code': 'Enter'
      }));
})
//vamos a trabajar con esta tecla
document.getElementById("Izquierda").addEventListener("click",(e)=>
{
    window.dispatchEvent(new KeyboardEvent('keydown', {
        'isTrusted':true,
        'code': 'ArrowLeft'
      }));
})
document.getElementById("Arriba").addEventListener("click",(e)=>
{
    window.dispatchEvent(new KeyboardEvent('keydown', {
        'code': 'ArrowUp'
      }));
})
document.getElementById("Derecha").addEventListener("click",(e)=>
{
    window.dispatchEvent(new KeyboardEvent('keydown', {
        'code': 'ArrowRight'
      })); 
})
document.getElementById("Abajo").addEventListener("click",(e)=>
{
    window.dispatchEvent(new KeyboardEvent('keydown', {
        'code': 'ArrowDown'
      }));
})
  
 
window.onload=crearEntorno(1);
