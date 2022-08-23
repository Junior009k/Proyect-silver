//alert("estoy funcionando");
/*simple error no estaba referenciando el archivo javascript*/
cantidad=Math.floor(Math.random() * (5 - 1)) + 1;
//alert(cantidad);
boton=document.getElementById("boton");
//creamos donde introduciremos los datos pero antes probamos si funciona
resultado=document.getElementById("res");
//creamos el evento al hacer click
 const obtenerArray=()=>
{
	let res=""
	let htmlCODE=resultado.value;
	valor=cantidad;
	/*crearemos un array bidimensional donde el primer elemento sera id y el segundo nombre*/
	miArray=[];
	//recorremos el array
	for(let i=0;i<valor;++i)
	{	//sumaremos el mismo valor de resultado para que se valla sobrescribiendo
		miArray[i]=[i+1,"arreglo "+ (i+1)];
		htmlCODE='<div id='+"item"+'>' +
				 '<div id="id" class="id">'+ " " +miArray[i][0] + " "+'</div> '+
				 '<div id="nombre" class="nombre">'+ " " +miArray[i][1] + " "+'</div><BR></div>'
		res+=htmlCODE;
	}
	resultado.innerHTML=res;


	//si es 1 sera fila si es dos sera columna 
	filocol=Math.floor(Math.random() * (5 - 1)) + 1;
	//alert(filocol);
	//fila
	if(filocol==1)
	{
			document.getElementById("res").style.marginLeft=(Math.floor(Math.random() * (500 - 1)) + 1 )+ "px";
			//esta formula calculara el area total del container y lo adaptara segun la 
			//cantidad de array, asi es dinamico
			if(cantidad<6)
			{
				document.getElementById("contenedor").style.height=((250*cantidad)*0.75)+"px";
			}
			else{document.getElementById("contenedor").style.height=((150*cantidad)*0.75)+"px";}
	}
	
	//cfila
	if(filocol==2)
	{
				document.getElementById("res").style.setProperty("flex-direction","row");
				document.getElementById("res").style.marginTop=(Math.floor(Math.random() * (250 - 1)) + 1 )+ "px";
				
				//esta formula calculara el area total del container y lo adaptara segun la 
				//cantidad de array, asi es dinamico
				if(cantidad<6)
				{
					document.getElementById("contenedor").style.width=((250*cantidad)*0.75)+"px";
				}
				else{document.getElementById("contenedor").style.width=((150*cantidad)*0.75)+"px";}
	}
	//fila al reves
	if(filocol==3)
	{
			document.getElementById("res").style.setProperty("flex-direction","row-reverse");
			//esta formula calculara el area total del container y lo adaptara segun la 
			//cantidad de array, asi es dinamico
			if(cantidad<6)
			{
				variabilidad=((250*cantidad)*0.75)
				document.getElementById("contenedor").style.width=variabilidad+"px";
			}
			else
			{
				variabilidad=((150*cantidad)*0.75);
				document.getElementById("contenedor").style.width=variabilidad+"px";
			}

			document.getElementById("res").style.marginLeft=(variabilidad-500)+ "px";
	}
	//columna al reves
	if(filocol==4)
	{
				document.getElementById("res").style.setProperty("flex-direction","column-reverse");
				
				//esta formula calculara el area total del container y lo adaptara segun la 
				//cantidad de array, asi es dinamico
				if(cantidad<6)
			{
				variabilidad=((250*cantidad)*0.75)
				document.getElementById("contenedor").style.height=variabilidad+"px";
			}
			else
			{
				variabilidad=((150*cantidad)*0.75);
				document.getElementById("contenedor").style.height=variabilidad+"px";
			}

			document.getElementById("res").style.marginTop=(variabilidad-500)+ "px";
	}
}

//el programa es capaz de crear array dinamicamente 
//ustedes aprenderan creando este programa a como trabajar con array 
//se estaran preguntando si es capaz de crear un millon de array, tiene que hacerlo, vamos hacer la prueba

window.onload=obtenerArray();