class Cliente {
	
	constructor(nome, sobrenome, idade, genero, plano, aquisicao) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idade = idade;
		this.genero = genero;
		this.aquisicao = aquisicao;
	}
	
	dadosClientes() {
		let dados;
		let data;   
      
		data = new Date();
		this.aquisicao = data.toLocaleDateString();
		
		dados = {
			nome: this.nome,
			sobrenome: this.sobrenome,
			idade: this.idade,
			genero: this.genero,
			aquisicao: this.aquisicao
		};
		
		return dados;
	}
}

class SeguroVida extends Cliente {
	
	constructor(nome, sobrenome, idade, genero, aquisicao, plano, carencia) {
		super(nome, sobrenome, idade, genero, aquisicao);
		this.plano = plano;
		this.carencia = carencia;
	}
	
	dadosSeguro() {
		
		let seguro = super.dadosClientes();
		
		seguro.plano = this.plano;
		seguro.carencia = this.carencia;
				
		return seguro;
	}
  
  inserirDados() {
    
    this.nome = prompt('Primeiro nome:');
    this.sobrenome = prompt('Sobrenome:');
    this.idade = prompt('Idade (Apenas números):');
    this.genero = prompt('Gênero (M = masculino | F = feminino):');
    this.plano = prompt('Plano (Parcial | Total):');
    this.carencia = prompt('Meses de carência (Apenas números):');  
  }  
}

function cadastrarClientes() {
		var quantidade;
		var clientes;
		var indice = 0;
		var entrada;
    var informacao;
		
		var cadastro = new SeguroVida;
	  // permite digitar, usando o teclado, uma String
		entrada = prompt('Quantos clientes deseja cadastrar?');
		// transforma a string num múmero
		quantidade = parseInt(entrada);

		clientes = new Array(quantidade);

		while (indice < quantidade) {
			cadastro.inserirDados();
      informacao = cadastro.dadosSeguro();
			
			clientes [indice] = informacao;
			
			indice++
		}
		
		return clientes;
	}	

let cad = cadastrarClientes();

function limiteLista (limite) {
  
   return limite.idade > 18 && limite.idade <= 26 
}

function novaLista(array) {

  let filtro = array.filter(limiteLista);

  return filtro;
}

console.log(novaLista(cad));

module.exports.retornaLista = novaLista(cad);





