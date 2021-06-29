class Cliente {
	
	constructor(nome, sobrenome, idade, genero, plano, aquisicao) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idade = idade;
		this.genero = genero;
		this.aquisicao = aquisicao;
	}
	// função para retornar um objeto contendo dados gerais dos clientes
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
	// função para retornar um objeto contendo dados gerais dos clientes e dados referentes ao seguro de vida
	dadosSeguro() {
		let seguro = super.dadosClientes();
		
		seguro.plano = this.plano;
		seguro.carencia = this.carencia;
				
		return seguro;
	}
	// função para digitar com o teclado os dados do seguro
	inserirDados() {
		this.nome = prompt('Primeiro nome:');
		this.sobrenome = prompt('Sobrenome:');
		this.idade = prompt('Idade (Apenas números):');
		this.genero = prompt('Gênero (M = masculino | F = feminino):');
		this.plano = prompt('Plano (Parcial | Total):');
		this.carencia = prompt('Meses de carência (Apenas números):');  
	}  
}
// função para cadastrar os clientes, inserindo os dados no array
function cadastrarClientes() {
	let quantidade;
	let clientes;
	let indice = 0;
	let entrada;
	let informacao;
	
	let cadastro = new SeguroVida;
 
	entrada = prompt('Quantos clientes deseja cadastrar?');

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

var cad = cadastrarClientes();
// função para limitar a faixa de idade dos segurados
function limiteLista (limite) {
   return limite.idade > 18 && limite.idade <= 26 
}
// função para filtrar a lista de segurados de acordo com a faixa de idade, retornando uma nova lista com a nova faixa de idade
function novaLista(array) {
  let filtro = array.filter(limiteLista);
  
  return filtro;
}

console.log(novaLista(cad));

module.exports.retornaLista = novaLista(cad);
