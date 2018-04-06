
function validar(){
	var x=document.forms["form"]["nome"].value;
	var y=document.forms["form"]["email"].value;
	var w=document.forms["form"]["texto"].value;

	if((x==null || x=="") || (y==null || y=="") || (w==null || w=="") )
	{
		alert('Os Campos precisam ser preenchidos!');
		return false;
	}
	else
	{
		alert('Mensagem Enviado com Sucesso!');
	}
}


function resetar(){
	var a=document.forms["form"]["nome"].value;
	var b=document.forms["form"]["email"].value;
	var c=document.forms["form"]["texto"].value;

	if((a==null || a=="") && (b==null || b=="") && (c==null || c=="") )
	{
		alert('Os Campos estão vazios!');
		return false;
	}
	else
	{
		alert('Mensagem Apagado com Sucesso!');
	}
}



function trocar(){
	var a=document.getElementById("uff").value;
	var b=document.getElementById("sdf").value;

	if(a=="-------Selecione------")
	{
		document.getElementById("sdf").disabled = true;
	}

	else
	{
		document.getElementById("sdf").disabled = false;
	}
}



function cadastrar(){

	var a=document.forms["form"]["nome"].value;
	var b=document.forms["form"]["sobrenome"].value;
	var c=document.forms["form"]["numero"].value;
	var d=document.forms["form"]["nasc"].value;
	var e=document.forms["form"]["cel"].value;
	var f=document.forms["form"]["rg"].value;
	var g=document.forms["form"]["cpf"].value;
	var h=document.forms["form"]["email"].value;
	var i=document.forms["form"]["endereco"].value;
	var j=document.forms["form"]["cidade"].value;
	var k=document.forms["form"]["UF"].value;
	var l=document.forms["form"]["cep"].value;
	var m=document.forms["form"]["senha"].value;
	var n=document.forms["form"]["confsenha"].value;

	if((a==null || a=="") || (b==null || b=="") || (c==null || c=="") || (d==null || d=="") || (e==null || e=="") || (f==null || f=="") || (g==null || g=="") || (h==null || h=="") || (i==null || i=="") || (j==null || j=="") || (k==null || k=="") || (l==null || l=="") || (m==null || m=="") || (n==null || n==""))
	{

		alert("É necessário preencher os campos para cadastrar!!");
		return false;

	}
	else
	{
		if(m==n)
		{
			alert("Dados Cadastrados com Sucesso!!")

		}
		else
		{
			alert("Confirmação de senha incorreta, digite corretamente!");
		}
	}



}



function resete(){


	var a=document.forms["form"]["nome"].value;
	var b=document.forms["form"]["sobrenome"].value;
	var c=document.forms["form"]["numero"].value;
	var d=document.forms["form"]["nasc"].value;
	var e=document.forms["form"]["cel"].value;
	var f=document.forms["form"]["rg"].value;
	var g=document.forms["form"]["cpf"].value;
	var h=document.forms["form"]["email"].value;
	var i=document.forms["form"]["endereco"].value;
	var l=document.forms["form"]["cep"].value;
	var m=document.forms["form"]["senha"].value;
	var n=document.forms["form"]["confsenha"].value;
	var o=document.forms["form"]["texto"].value;


if((a==null || a=="") && (b==null || b=="") && (c==null || c=="") && (d==null || d=="") && (e==null || e=="") && (f==null || f=="") && (g==null || g=="") && (h==null || h=="") && (i==null || i=="") && (l==null || l=="") && (m==null || m=="") && (n==null || n=="") && (o==null || o=="") )
	{

		alert("Os campos estão vazios!!");
		return false;

	}
	else
	{
			alert("Dados apagados!");
			return false;
	}


}









function slide1() {
	document.getElementById('ryu').src="../img/info19.jpg";

	setTimeout("slide3()",2000);
}

function slide3() {
	document.getElementById('ryu').src="../img/info20.jpg";

	setTimeout("slide2()",2000);
}

function slide2() {
	document.getElementById('ryu').src="../img/info21.jpg";

	setTimeout("slide1()",2000);
}


function val(){
	var x=document.getElementById('nn').value;
	var y=document.getElementById('vat').innerHTML;
	var t;
	var h=document.getElementById('vat2').innerHTML;
	var i=document.getElementById('nn2').value;
	var j=document.getElementById('vat3').innerHTML;
	var l=document.getElementById('nn3').value;
	var a=document.getElementById('vat4').innerHTML;
	var b=document.getElementById('nn4').value;
	var c=document.getElementById('vat5').innerHTML;
	var d=document.getElementById('nn5').value;
	var e=document.getElementById('vat6').innerHTML;
	var f=document.getElementById('nn6').value;
	var g=document.getElementById('vat7').innerHTML;
	var k=document.getElementById('nn7').value;
	var o=document.getElementById('vat8').innerHTML;
	var p=document.getElementById('nn8').value;

	if(x==null || x=="")
	{
		alert("Precisa selecionar a quantidade que deseja comprar!");
	}
	else
	{
		y=parseFloat(y);
		h=parseFloat(h);
		j=parseFloat(j);
		a=parseFloat(a);
		c=parseFloat(c);
		e=parseFloat(e);
		g=parseFloat(g);
		o=parseFloat(o);
		
		t=(y*x)+(h*i)+(j*l)+(a*b)+(c*d)+(e*f)+(g*k)+(o*p);
		document.getElementById('valor2').innerHTML="O valor a pagar é: " +t + ",00 R$.";
		
	}
}



function val2(){
	var x=document.getElementById('nn').value;
	var y=document.getElementById('vat').innerHTML;
	var t;
	var h=document.getElementById('vat2').innerHTML;
	var i=document.getElementById('nn2').value;
	var j=document.getElementById('vat3').innerHTML;
	var l=document.getElementById('nn3').value;
	var a=document.getElementById('vat4').innerHTML;
	var b=document.getElementById('nn4').value;
	var c=document.getElementById('vat5').innerHTML;
	var d=document.getElementById('nn5').value;
	var e=document.getElementById('vat6').innerHTML;
	var f=document.getElementById('nn6').value;
	var g=document.getElementById('vat7').innerHTML;
	var k=document.getElementById('nn7').value;
	var o=document.getElementById('vat8').innerHTML;
	var p=document.getElementById('nn8').value;

	if(i==null || i=="")
	{
		alert("Precisa selecionar a quantidade que deseja comprar!");
	}
	else
	{
		y=parseFloat(y);
		h=parseFloat(h);
		j=parseFloat(j);
		a=parseFloat(a);
		c=parseFloat(c);
		e=parseFloat(e);
		g=parseFloat(g);
		o=parseFloat(o);
		
		t=(y*x)+(h*i)+(j*l)+(a*b)+(c*d)+(e*f)+(g*k)+(o*p);
		document.getElementById('valor2').innerHTML="O valor a pagar é: " +t + ",00 R$.";
		
	}
}



function val3(){
	var x=document.getElementById('nn').value;
	var y=document.getElementById('vat').innerHTML;
	var t;
	var h=document.getElementById('vat2').innerHTML;
	var i=document.getElementById('nn2').value;
	var j=document.getElementById('vat3').innerHTML;
	var l=document.getElementById('nn3').value;
	var a=document.getElementById('vat4').innerHTML;
	var b=document.getElementById('nn4').value;
	var c=document.getElementById('vat5').innerHTML;
	var d=document.getElementById('nn5').value;
	var e=document.getElementById('vat6').innerHTML;
	var f=document.getElementById('nn6').value;
	var g=document.getElementById('vat7').innerHTML;
	var k=document.getElementById('nn7').value;
	var o=document.getElementById('vat8').innerHTML;
	var p=document.getElementById('nn8').value;

	if(l==null || l=="")
	{
		alert("Precisa selecionar a quantidade que deseja comprar!");
	}
	else
	{
		y=parseFloat(y);
		h=parseFloat(h);
		j=parseFloat(j);
		a=parseFloat(a);
		c=parseFloat(c);
		e=parseFloat(e);
		g=parseFloat(g);
		o=parseFloat(o);
		
		t=(y*x)+(h*i)+(j*l)+(a*b)+(c*d)+(e*f)+(g*k)+(o*p);
		document.getElementById('valor2').innerHTML="O valor a pagar é: " +t + ",00 R$.";
		
	}
}



function val4(){
	var x=document.getElementById('nn').value;
	var y=document.getElementById('vat').innerHTML;
	var t;
	var h=document.getElementById('vat2').innerHTML;
	var i=document.getElementById('nn2').value;
	var j=document.getElementById('vat3').innerHTML;
	var l=document.getElementById('nn3').value;
	var a=document.getElementById('vat4').innerHTML;
	var b=document.getElementById('nn4').value;
	var c=document.getElementById('vat5').innerHTML;
	var d=document.getElementById('nn5').value;
	var e=document.getElementById('vat6').innerHTML;
	var f=document.getElementById('nn6').value;
	var g=document.getElementById('vat7').innerHTML;
	var k=document.getElementById('nn7').value;
	var o=document.getElementById('vat8').innerHTML;
	var p=document.getElementById('nn8').value;

	if(b==null || b=="")
	{
		alert("Precisa selecionar a quantidade que deseja comprar!");
	}
	else
	{
		y=parseFloat(y);
		h=parseFloat(h);
		j=parseFloat(j);
		a=parseFloat(a);
		c=parseFloat(c);
		e=parseFloat(e);
		g=parseFloat(g);
		o=parseFloat(o);
		
		t=(y*x)+(h*i)+(j*l)+(a*b)+(c*d)+(e*f)+(g*k)+(o*p);
		document.getElementById('valor2').innerHTML="O valor a pagar é: " +t + ",00 R$.";
		
	}
}



function val5(){
	var x=document.getElementById('nn').value;
	var y=document.getElementById('vat').innerHTML;
	var t;
	var h=document.getElementById('vat2').innerHTML;
	var i=document.getElementById('nn2').value;
	var j=document.getElementById('vat3').innerHTML;
	var l=document.getElementById('nn3').value;
	var a=document.getElementById('vat4').innerHTML;
	var b=document.getElementById('nn4').value;
	var c=document.getElementById('vat5').innerHTML;
	var d=document.getElementById('nn5').value;
	var e=document.getElementById('vat6').innerHTML;
	var f=document.getElementById('nn6').value;
	var g=document.getElementById('vat7').innerHTML;
	var k=document.getElementById('nn7').value;
	var o=document.getElementById('vat8').innerHTML;
	var p=document.getElementById('nn8').value;

	if(d==null || d=="")
	{
		alert("Precisa selecionar a quantidade que deseja comprar!");
	}
	else
	{
		y=parseFloat(y);
		h=parseFloat(h);
		j=parseFloat(j);
		a=parseFloat(a);
		c=parseFloat(c);
		e=parseFloat(e);
		g=parseFloat(g);
		o=parseFloat(o);
		
		t=(y*x)+(h*i)+(j*l)+(a*b)+(c*d)+(e*f)+(g*k)+(o*p);
		document.getElementById('valor2').innerHTML="O valor a pagar é: " +t + ",00 R$.";
		
	}
}



function val6(){
	var x=document.getElementById('nn').value;
	var y=document.getElementById('vat').innerHTML;
	var t;
	var h=document.getElementById('vat2').innerHTML;
	var i=document.getElementById('nn2').value;
	var j=document.getElementById('vat3').innerHTML;
	var l=document.getElementById('nn3').value;
	var a=document.getElementById('vat4').innerHTML;
	var b=document.getElementById('nn4').value;
	var c=document.getElementById('vat5').innerHTML;
	var d=document.getElementById('nn5').value;
	var e=document.getElementById('vat6').innerHTML;
	var f=document.getElementById('nn6').value;
	var g=document.getElementById('vat7').innerHTML;
	var k=document.getElementById('nn7').value;
	var o=document.getElementById('vat8').innerHTML;
	var p=document.getElementById('nn8').value;

	if(f==null || f=="")
	{
		alert("Precisa selecionar a quantidade que deseja comprar!");
	}
	else
	{
		y=parseFloat(y);
		h=parseFloat(h);
		j=parseFloat(j);
		a=parseFloat(a);
		c=parseFloat(c);
		e=parseFloat(e);
		g=parseFloat(g);
		o=parseFloat(o);
		
		t=(y*x)+(h*i)+(j*l)+(a*b)+(c*d)+(e*f)+(g*k)+(o*p);
		document.getElementById('valor2').innerHTML="O valor a pagar é: " +t + ",00 R$.";
		
	}
}



function val7(){
	var x=document.getElementById('nn').value;
	var y=document.getElementById('vat').innerHTML;
	var t;
	var h=document.getElementById('vat2').innerHTML;
	var i=document.getElementById('nn2').value;
	var j=document.getElementById('vat3').innerHTML;
	var l=document.getElementById('nn3').value;
	var a=document.getElementById('vat4').innerHTML;
	var b=document.getElementById('nn4').value;
	var c=document.getElementById('vat5').innerHTML;
	var d=document.getElementById('nn5').value;
	var e=document.getElementById('vat6').innerHTML;
	var f=document.getElementById('nn6').value;
	var g=document.getElementById('vat7').innerHTML;
	var k=document.getElementById('nn7').value;
	var o=document.getElementById('vat8').innerHTML;
	var p=document.getElementById('nn8').value;

	if(k==null || k=="")
	{
		alert("Precisa selecionar a quantidade que deseja comprar!");
	}
	else
	{
		y=parseFloat(y);
		h=parseFloat(h);
		j=parseFloat(j);
		a=parseFloat(a);
		c=parseFloat(c);
		e=parseFloat(e);
		g=parseFloat(g);
		o=parseFloat(o);
		
		t=(y*x)+(h*i)+(j*l)+(a*b)+(c*d)+(e*f)+(g*k)+(o*p);
		document.getElementById('valor2').innerHTML="O valor a pagar é: " +t + ",00 R$.";
		
	}
}



function val8(){
	var x=document.getElementById('nn').value;
	var y=document.getElementById('vat').innerHTML;
	var t;
	var h=document.getElementById('vat2').innerHTML;
	var i=document.getElementById('nn2').value;
	var j=document.getElementById('vat3').innerHTML;
	var l=document.getElementById('nn3').value;
	var a=document.getElementById('vat4').innerHTML;
	var b=document.getElementById('nn4').value;
	var c=document.getElementById('vat5').innerHTML;
	var d=document.getElementById('nn5').value;
	var e=document.getElementById('vat6').innerHTML;
	var f=document.getElementById('nn6').value;
	var g=document.getElementById('vat7').innerHTML;
	var k=document.getElementById('nn7').value;
	var o=document.getElementById('vat8').innerHTML;
	var p=document.getElementById('nn8').value;

	if(p==null || p=="")
	{
		alert("Precisa selecionar a quantidade que deseja comprar!");
	}
	else
	{
		y=parseFloat(y);
		h=parseFloat(h);
		j=parseFloat(j);
		a=parseFloat(a);
		c=parseFloat(c);
		e=parseFloat(e);
		g=parseFloat(g);
		o=parseFloat(o);
		
		t=(y*x)+(h*i)+(j*l)+(a*b)+(c*d)+(e*f)+(g*k)+(o*p);
		document.getElementById('valor2').innerHTML="O valor a pagar é: " +t + ",00 R$.";
		
	}
}



function confirma(){
	var z=document.getElementById('valor2').innerHTML;

	if(z==null || z=="")
	{
		alert("Nenhum item selecionado para realizar a compra");
	}
	else
	{
		if(confirm("Tem certeza que deseja comprar?"))
		{
			document.getElementById('valor2').innerHTML="Compra Efetuada com Sucesso";
		}
	}
}

