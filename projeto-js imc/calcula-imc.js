

	function percorreArray(pacientes, comportamento){

		for(var posicaoAtual = 0; posicaoAtual <= pacientes.length-1; posicaoAtual++){
			var pacienteTr = pacientes[posicaoAtual];
	        comportamento(pacienteTr); 
	    }
	}

	var pacientes = document.getElementsByClassName("paciente");

	function montaPaciente(pacienteTr){

		var nome = pacienteTr.getElementsByClassName("info-nome")[0].textContent;
		var peso = pacienteTr.getElementsByClassName("info-peso")[0].textContent;
		var altura = pacienteTr.getElementsByClassName("info-altura")[0].textContent;

		var paciente= {nome: nome, 
							peso: peso, 
							altura: altura,
							pegaImc: function(){

											var imc = Math.floor(peso / (altura * altura));
											return imc;
											}
							}
							return paciente;

	}
function calculaTodosImcs(){

	percorreArray(pacientes, function(pacienteTr){

	    
		var trImc = pacienteTr.getElementsByClassName("info-imc")[0];
		var paciente = montaPaciente(pacienteTr);
		var imc = paciente.pegaImc();	

		trImc.textContent = imc;

		console.log(imc);    
	});

}
var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", calculaTodosImcs);
botao.addEventListener("click",function(){
	console.log("Calculando Imcs");
});
