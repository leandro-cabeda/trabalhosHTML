function envio(){
	var a=document.forms["form"]["nome"].value;
	var b=document.forms["form"]["email"].value;
	var c=document.forms["form"]["assunto"].value;
	var d=document.forms["form"]["telefone"].value;
	var e=document.forms["form"]["texto"].value;

	if((a==null || a=="") || (b==null || b=="") || (c=="---------Selecione---------") || (d==null || d=="") || (e==null || e==""))
	{
		alert("É preciso preencher os campos para enviar uma mensagem!");

	}
	else
	{
		alert("Mensagem enviado com Sucesso!!");
	}

}

function limpar2(){
	var a=document.forms["form"]["nome"].value;
	var b=document.forms["form"]["email"].value;
	var d=document.forms["form"]["telefone"].value;
	var e=document.forms["form"]["texto"].value;

	if((a==null || a=="") && (b==null || b=="") && (d==null || d=="") && (e==null || e==""))
	{
		alert('Os Campos estão vazios!');
		return true;
	}
	else
	{
		alert('Mensagem Apagado com Sucesso!');
	}
}
