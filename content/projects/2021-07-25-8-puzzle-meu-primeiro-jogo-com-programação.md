---
title: '"8 Puzzle" meu primeiro jogo com programação'
description: O "8 Puzzle" é um jogo de tabuleiro criado com Java para prática
  dos conceitos de Orientação a Objetos e alguns Padrões de Projetos.
date: 2021-07-25 10:36:00
thumbnailImage: ../../static/assets/img/thumb-puzzle.png
category: project
---
![8puzzle](https://user-images.githubusercontent.com/45276342/126923893-9c8ff9f9-c9b3-47ff-94d4-157a79362c04.gif)
___
## Índice

```toc
exclude: Índice
```
---
## 1. Introdução
Este é um projeto feito para um trabalho da faculdade na disciplina de **Orientação a Objetos**. 
O desafio proposto foi criar o **8Puzzle** (Jogo do Oito) na linguagem **Java**, aplicando as metodologias que a orientação à objetos suporta para arquitetar o software de maneira organizada e reutilizável. Usando também tecnologias e bibliotecas como Junit, JDBC e Swing. Para criar testes, serialização do estado do jogo em um banco de dados e a inteface gráfica.  

**Link do projeto:** https://github.com/GuiSAlmeida/8puzzle-java  

### 1.1. Objetivos
- Aplicar os conceitos de Orientação a Objetos passados em aula para construir software, como:
  - Abstração
  - Encapsulamento
  - Composição
  - Herança
  - Polimorfismo
- Criar projeto orientado a testes **TDD**.
- Manter o código limpo sem **bad smells**, com nomenclatura de classes, métodos e atributos **semânticos**.
- Implementar camadas independentes **MVC**.
- Utilizar **Padrões de Projeto**.
- Salvar estado do jogo no banco de dados **Postgres**.  

### 1.2. Como o jogo funciona
O **8Puzzle** é um jogo simples que consiste em um tabuleiro 3 x 3 (contendo 9 quadrados). Um dos quadrados está vazio (no meu caso use o 0). O objetivo é mover-se para quadrados em diferentes posições e ter os números exibidos na sequência correta.  
![Move-in-a-game-of-8-puzzle](https://user-images.githubusercontent.com/45276342/126852220-ac4b0cf7-42fd-4fd3-b248-c26391f93890.png)

---
## 2. Testes (TDD)
Começando pelos testes, usando o framework [**Junit 5**](https://junit.org/junit5/). Ajudaram não só a manter a qualidade e funcionamento do código, como também a formular como os movimentos do tabuleiro deveriam acontecer.  

> **Show me the code:**  
> Teste na classe **TesteControleTabuleiro** para simular movimento do tabuleiro.
> 
> ```java
> package br.ies.aps.jogooito.controle;
> import static org.junit.jupiter.api.Assertions.assertEquals;
> import org.junit.Before;
> import org.junit.Test;
> import br.ies.aps.jogooito.modelo.Tabuleiro;
> 
> public class TesteControleTabuleiro {
> 	private TabuleiroControle tabuleiroControle;
> 	
> 	@Before
> 	public void configuracao() {
> 		tabuleiroControle = new TabuleiroControle(new Tabuleiro());
> 	}
> 
> 	/**
> 	* O teste pega a posição do campo de cima a parti da posição do ponteiro (campo vazio ou 0)
> 	* e armazena em uma variável para comparar se ao movimentar o ponteiro para cima
> 	* vai estar na mesma posição que foi armazenada na variável.
> 	* @link https://github.com/GuiSAlmeida/8puzzle-java/blob/master/test/br/ies/aps/jogooito/controle/TesteControleTabuleiro.java
> 	*/
> 	@Test
> 	public void moverPonteiroTabuleiroParaCima() {
> 		Integer posicaoAcima = tabuleiroControle.getTabuleiro().getPonteiro().getCampoDeCima().getNumero();
> 		tabuleiroControle.moverPraCima();
> 		assertEquals(posicaoAcima, tabuleiroControle.getTabuleiro().getPonteiro().getCampoDeBaixo().getNumero());
> 	}
> 
> 	...
> }
> ```

---
## 3. Camadas Independentes (MVC)
Definida a arquitetura de como os elementos do software vão interagir entre si.  

### 3.1. Model
Aqui ficam as classes que representam o modelo do sistema. A camada **Model** fica isolada contendo as regras de negócio e as classes que a compõem não podem conhecer NADA do ambiente externo, ou seja, não devem haver referências para classes de outras camadas.  
> **Show me the code:**  
> Classe **Jogador** possui seus dados privados e não tem acesso a dados de outras camadas:
> ```java
> package br.ies.aps.jogooito.modelo;
> 
> public class Jogador {
> 	private String jogadorNome;
> 	private Boolean ganhador = false;
> 	private Integer idJogador;
> 	private Integer jogadas = 0;
> 	
> 	public Jogador(String nome) {
> 		setJogadorNome(nome);
> 	}
> 	
> 	public String getJogadorNome() {
> 		return jogadorNome;
> 	}
> 
> 	public void setJogadorNome(String jogador) {
> 		this.jogadorNome = jogador;
> 	}
> 	
> 	public Integer getJogadas() {
> 		return jogadas;
> 	}	
> 	
> 	public void setJogadas(Integer jogadas) {
> 		this.jogadas = jogadas;
> 	}	
> 	
> 	public Boolean getGanhador() {
> 		return ganhador;
> 	}	
> 	
> 	public void setGanhador(Boolean ganhador) {
> 		this.ganhador = ganhador;
> 	}	
> 	
> 	public Integer getIdJogador() {
> 		return idJogador;
> 	}	
> 	
> 	public void setIdJogador(Integer idJogador) {
> 		this.idJogador = idJogador;
> 	}
> }
> ```

### 3.2. Controller
No controle fica a classe responsável por transformar eventos gerados pela interface alterando o modelo.  
> **Show me the code:**  
> Classe **TabuleiroControle** conecta a interface ao estado do tabuleiro:
> ```java
> package br.ies.aps.jogooito.controle;
> 
> import br.ies.aps.jogooito.modelo.Tabuleiro;
> 
> public class TabuleiroControle {
> 	private Tabuleiro tabuleiro;
> 
> 	public TabuleiroControle(Tabuleiro tabuleiro) {
> 		this.setTabuleiro(tabuleiro);
> 	}
> 
> 	public Tabuleiro getTabuleiro() {
> 		return tabuleiro;
> 	}
> 
> 	public void setTabuleiro(Tabuleiro tabuleiro) {
> 		this.tabuleiro = tabuleiro;
> 	}
> 
> 	public void moverPraCima() {
> 		tabuleiro.getPonteiro().moverParaCima();
> 		tabuleiro.setPonteiro(tabuleiro.getPonteiro().getCampoDeCima());
> 	}
> 
> 	public void moverPraBaixo() {
> 		tabuleiro.getPonteiro().moverParaBaixo();
> 		tabuleiro.setPonteiro(tabuleiro.getPonteiro().getCampoDeBaixo());
> 	}
> 
> 	public void moverPraEsquerda() {
> 		tabuleiro.getPonteiro().moverParaEsquerda();
> 		tabuleiro.setPonteiro(tabuleiro.getPonteiro().getCampoDaEsquerda());
> 	}
> 
> 	public void moverPraDireita() {
> 		tabuleiro.getPonteiro().moverParaDireita();
> 		tabuleiro.setPonteiro(tabuleiro.getPonteiro().getCampoDaDireita());
> 	}
> }
> ```

### 3.3. View
Camada de interface com o usuário, onde o usuário vê o estado do modelo e pode manipular a interface, para ativar a lógica do negócio.
> **Show me the code:**  
> Classe **TelaControle** responsável pela interface da parte dos controles e recebe os inputs do usuario:  
> ```java
> package br.ies.aps.jogooito.view.swing.tela;
> 
> ...
> 
> public class TelaControle extends JPanel implements KeyListener, TabuleiroObservador {
> 	private Tabuleiro tabuleiro;
> 	private Jogador jogador;
> 	private TelaTabuleiro telaTabuleiro;
> 	private JLabel jogadasLabel;
> 	private BotaoMovimentoCima botaoCima;
> 	private BotaoMovimentoBaixo botaoBaixo;
> 	private BotaoMovimentoDireita botaoDireita;
> 	private BotaoMovimentoEsquerda botaoEsquerda;
> 
> 	public TelaControle(Tabuleiro tabuleiro, TelaTabuleiro telaTabuleiro, Jogador jogador) {
> 		this.tabuleiro = tabuleiro;
> 		this.telaTabuleiro = telaTabuleiro;
> 		this.jogador = jogador;
> 		geraControleTabuleiro();
> 		this.tabuleiro.registrarObservador(this);
> 	}
> 
> 	private void geraControleTabuleiro() {
> 		GridBagLayout layout = new GridBagLayout();
> 		GridBagConstraints posicao = new GridBagConstraints();
> 		posicao.fill = GridBagConstraints.HORIZONTAL;
> 
> 		setLayout(layout);
> 
> 		posicao.gridy = 0;
> 		posicao.gridx = 0;
> 		JLabel jogadorLabel = new JLabel(String.format("Jogador: %s", jogador.getJogadorNome()));
> 		add(jogadorLabel, posicao);
> 
> 		posicao.gridy = 1;
> 		posicao.gridx = 0;
> 		posicao.gridwidth = 3;
> 		jogadasLabel = new JLabel(String.format("Jogadas: %d", jogador.getJogadas()));
> 		add(jogadasLabel, posicao);
> 
> 		posicao.gridwidth = 1;
> 		posicao.gridy = 0;
> 		posicao.gridx = 5;
> 		botaoCima = new BotaoMovimentoCima("↑", tabuleiro, telaTabuleiro, this, jogador);
> 		add(botaoCima, posicao);
> 
> 		posicao.gridy = 2;
> 		posicao.gridx = 5;
> 		botaoBaixo = new BotaoMovimentoBaixo("↓", tabuleiro, telaTabuleiro, this, jogador);
> 		add(botaoBaixo, posicao);
> 
> 		posicao.gridy = 1;
> 		posicao.gridx = 6;
> 		botaoDireita = new BotaoMovimentoDireita("→", tabuleiro, telaTabuleiro, this, jogador);
> 		add(botaoDireita, posicao);
> 
> 		posicao.gridy = 1;
> 		posicao.gridx = 4;
> 		botaoEsquerda = new BotaoMovimentoEsquerda("←", tabuleiro, telaTabuleiro, this, jogador);
> 		add(botaoEsquerda, posicao);
> 	}
> 
> 	public void atualizaJogadas(Integer numero) {
> 		jogadasLabel.setText(String.format("Jogadas: %d", numero));
> 	}
> 
> 	public void finalizaJogadas(Integer numero) {
> 		jogadasLabel.setText(String.format("Venceu o jogo com %d jogadas!!", numero));
> 	}
> 
> 	public void verificaFimJogo(Tabuleiro tabuleiro) {
> 		if (tabuleiro.verificaFimJogo()) {
> 			finalizaJogadas(jogador.getJogadas() + 1);
> 			jogador.setGanhador(true);
> 			JogadorDAO jogadorDAO = new JogadorDAO(jogador);
> 			try {
> 				jogadorDAO.atualizaBanco(jogador.getIdJogador());
> 			} catch (SQLException e) {
> 				// TODO Auto-generated catch block
> 				e.printStackTrace();
> 			}
> 		} else {
> 			atualizaJogadas(jogador.getJogadas() + 1);
> 		}
> 	}
> 
> 	@Override
> 	public void alterouEstadoTabuleiro(Tabuleiro tabuleiro) {
> 		verificaFimJogo(tabuleiro);
> 	};
> 
> 	@Override
> 	public void keyPressed(KeyEvent event) {
> 		Map<Integer, Runnable> mapa = new HashMap<Integer, Runnable>();
> 
> 		mapa.put(KeyEvent.VK_DOWN, new Runnable() {
> 			@Override
> 			public void run() {
> 				botaoBaixo.alteraEstadoTabuleiro();
> 			}
> 		});
> 		mapa.put(KeyEvent.VK_UP, new Runnable() {
> 			@Override
> 			public void run() {
> 				botaoCima.alteraEstadoTabuleiro();
> 			}
> 		});
> 		mapa.put(KeyEvent.VK_RIGHT, new Runnable() {
> 			@Override
> 			public void run() {
> 				botaoDireita.alteraEstadoTabuleiro();
> 			}
> 		});
> 		mapa.put(KeyEvent.VK_LEFT, new Runnable() {
> 			@Override
> 			public void run() {
> 				botaoEsquerda.alteraEstadoTabuleiro();
> 			}
> 		});
> 		
> 		// TODO verificar se há tecla pressionada no hashmap
> 		mapa.get(event.getKeyCode()).run();
> 	}
> }
> ```
---
## 4. Salvando estado no banco (Postgres)
Para serialização dos dados dos jogadores e estado do tabuleiro foi criado banco de dados Postres, que por meio de classes seguindo padrões de projeto DAO e Factory fazem conexão da aplicação com banco.  

### 4.1. Modelagem Conceitual
![image](https://user-images.githubusercontent.com/45276342/126873915-c0cf01be-6137-44e1-a350-2ed59dc7f035.png)

### 4.2. Modelagem física

```sql
CREATE DATABASE IF NOT EXISTS jogo_oito;

CREATE TABLE jogador (
	id SERIAL PRIMARY KEY,
	nome varchar(50),
	jogadas integer,
	ganhador boolean,
	id_tabuleiro integer
);

CREATE TABLE TABULEIRO (
	id SERIAL PRIMARY KEY,
	campo_cima_esquerda integer,
	campo_cima_meio integer,
	campo_cima_direita integer,
	campo_meio_esquerda integer,
	campo_meio_meio integer,
	campo_meio_direita integer,
	campo_baixo_esquerda integer,
	campo_baixo_meio integer,
	campo_baixo_direita integer
);

ALTER TABLE jogador
	ADD CONSTRAINT id_tabuleiro_fk 
	FOREIGN KEY (id_tabuleiro)
	REFERENCES tabuleiro (id)
	ON UPDATE CASCADE
	ON DELETE NO ACTION;
```

---
## 5. Padrões de Projeto
**Padrões de projeto** são soluções típicas para problemas comuns em projeto de software. 
Eles são como plantas de obra pré fabricadas que você pode customizar para resolver um problema de projeto recorrente em seu código.  

### 5.1. Factory
A classe **FabricaConexao** implementa o design pattern **Factory**, que prega o encapsulamento da construção (fabricação) de objetos complicados.  
> **Show me the code:**  
> A classe **FabricaConexao** possui os dados necessários para criar conexão com banco ao ser instanciada:
> ```java
> package br.ies.aps.jogooito.modelo.DAO;
> 
> import java.sql.Connection;
> import java.sql.DriverManager;
> import java.sql.SQLException;
> 
> public class FabricaConexao {	
> 	public static Connection getConexao() {
> 		try {
> 			final String url = "jdbc:postgresql://host:5432/nome_banco";
> 			final String user = "username";
> 			final String password  = "senha_forte";
> 			return DriverManager.getConnection(url, user, password);
> 			
> 		} catch (SQLException e) {
> 			throw new RuntimeException(e);
> 		}
> 	}
> }
> ```

### 5.2. DAO (Data Access Object)
O padrão **DAO** é um **padrão de projeto** que abstrai e encapsula os mecanismos de acesso a dados escondendo os detalhes da execução da origem dos dados.  

> **Show me the code:**  
> Classe **JogadorDAO** responsável por inserir dados do jogador no banco:
> ```java
> package br.ies.aps.jogooito.modelo.DAO;
> 
> import java.sql.Connection;
> import java.sql.PreparedStatement;
> import java.sql.ResultSet;
> import java.sql.SQLException;
> import br.ies.aps.jogooito.modelo.Jogador;
> 
> public class JogadorDAO {
> 	private Integer idJogador;
> 	private String nome;
> 	private Integer jogadas;
> 	private Boolean ganhador;
> 
> 	public JogadorDAO(Jogador jogador) {
> 		this.nome = jogador.getJogadorNome();
> 		this.jogadas = jogador.getJogadas();
> 		this.ganhador = jogador.getGanhador();
> 	}
> 
> 	public void incluirBanco(Integer idTabuleiro) throws SQLException {
> 		Connection conexao;
> 		String sql;
> 		ResultSet resultado;
> 
> 		try {
> 			conexao = FabricaConexao.getConexao();
> 			sql = "INSERT INTO jogador (nome, jogadas, ganhador, id_tabuleiro) VALUES (?,?,?,?) RETURNING id;";
> 			PreparedStatement statement = conexao.prepareStatement(sql);
> 			statement.setString(1, nome);
> 			statement.setInt(2, jogadas);
> 			statement.setBoolean(3, ganhador);
> 			statement.setInt(4, idTabuleiro);
> 			statement.execute();
> 
> 			resultado = statement.getResultSet();
> 			resultado.next();
> 
> 			idJogador = resultado.getInt("id");
> 			resultado.close();
> 			statement.close();
> 			conexao.close();
> 
> 		} catch (SQLException e) {
> 			throw new RuntimeException(e);
> 		}
> 	}
> 	
> 	public void atualizaBanco(Integer idJogador) throws SQLException {
> 		Connection conexao;
> 		String sql;
> 		PreparedStatement statement;
> 		
> 		try {
> 			conexao = FabricaConexao.getConexao();
> 			sql = "UPDATE jogador SET jogadas = ?, ganhador = ? WHERE id = ?;";
> 
> 			statement = conexao.prepareStatement(sql);
> 			statement.setInt(1, jogadas);
> 			statement.setBoolean(2, ganhador);
> 			statement.setInt(3, idJogador);
> 			statement.execute();			
> 			statement.close();
> 			conexao.close();			
> 		} catch (SQLException e) {
> 			throw new RuntimeException(e);
> 		}
> 	}
> 
> 	public Integer getIdJogador() {
> 		return idJogador;
> 	}
> }
> ```

### 5.3. Observer
O **Observer** é um padrão de projeto comportamental que permite que você defina um mecanismo de **assinatura** para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando.  

> **Show me the code:**  
> A classe **Tabuleiro** que possui os métodos e valores principais do jogo, é a **publicadora**. É criado uma lista para registrar os observadores e métodos para adicionar e notificá-los assim que o estado da **publicadora** mudar.  
> 
> ```java
> package br.ies.aps.jogooito.modelo;
> 
> import java.util.ArrayList;
> import java.util.List;
> 
> public class Tabuleiro {
> 	...
> 
> 	private List<TabuleiroObservador> observadores = new ArrayList<>();
> 
> 	public void registrarObservador(TabuleiroObservador observador) {
> 		observadores.add(observador);
> 	}
> 
> 	public void notificarObservadores(Tabuleiro tabuleiro) {
> 		for (TabuleiroObservador observador : observadores) {
> 			observador.alterouEstadoTabuleiro(this);
> 		}
> 	}
> 
>   ...
> }
> ```
>
> A interface do **TabuleiroObservador** declara a interface de notificação. 
> Ela consiste em um único método de atualizar (**alterouEstadoTabuleiro()**) onde a publicadora (**Tabuleiro**) passa seu estado a cada atualização.  
> ```java
> package br.ies.aps.jogooito.modelo;
> 
> public interface TabuleiroObservador {
> 	public void alterouEstadoTabuleiro(Tabuleiro tabuleiro);
> }
> ```
> 
> Os **assinantes** se registram como observadores e realizam algumas ações em resposta às notificações enviadas pela publicadora. 
> Todas essas classes devem implementar a mesma interface (**TabuleiroObservador**) para que a publicadora não fique acoplada à classes concretas.  
> A classe **TelaControle** implementa e sobrescreve o método de **TabuleiroObservador** e se registra como observador.
> ```java
> package br.ies.aps.jogooito.view.swing.tela;
> 
> ...
> 
> public class TelaControle extends JPanel implements KeyListener, TabuleiroObservador {
> 	private Tabuleiro tabuleiro;
> 	private Jogador jogador;
> 	private TelaTabuleiro telaTabuleiro;
> 	private JLabel jogadasLabel;
> 	private BotaoMovimentoCima botaoCima;
> 	private BotaoMovimentoBaixo botaoBaixo;
> 	private BotaoMovimentoDireita botaoDireita;
> 	private BotaoMovimentoEsquerda botaoEsquerda;
> 
> 	public TelaControle(Tabuleiro tabuleiro, TelaTabuleiro telaTabuleiro, Jogador jogador) {
> 		...
> 
> 		this.tabuleiro.registrarObservador(this);
> 	}
> 
> 	public void verificaFimJogo(Tabuleiro tabuleiro) {
> 		if (tabuleiro.verificaFimJogo()) {
> 			finalizaJogadas(jogador.getJogadas() + 1);
> 			jogador.setGanhador(true);
> 			JogadorDAO jogadorDAO = new JogadorDAO(jogador);
> 			try {
> 				jogadorDAO.atualizaBanco(jogador.getIdJogador());
> 			} catch (SQLException e) {
> 				// TODO Auto-generated catch block
> 				e.printStackTrace();
> 			}
> 		} else {
> 			atualizaJogadas(jogador.getJogadas() + 1);
> 		}
> 	}
> 
> 	@Override
> 	public void alterouEstadoTabuleiro(Tabuleiro tabuleiro) {
> 		verificaFimJogo(tabuleiro);
> 	};
> 
> 	...
> }
> ```

---
## 6. Orientação a Objetos
O paradigma da **POO (Programação Orientada a Objetos)** é um modelo de análise, projeto e programação baseado na aproximação entre o mundo real e o mundo virtual, através da criação e interação entre objetos, atributos, códigos, métodos, entre outros.  

### 6.1 Abstração
Em **orientação a objetos**, uma classe é uma abstração de entidades existentes no domínio do sistema de software.
Uma **classe abstrata** é desenvolvida para representar entidades e conceitos abstratos. Essa classe é sempre uma superclasse que não possui instâncias. Ela define um modelo (template) para uma funcionalidade e fornece uma implementação incompleta (a parte genérica dessa funcionalidade) que é compartilhada por um grupo de **classes derivadas** (subclasses). Cada uma das classes derivadas, completa a funcionalidade da classe abstrata adicionando um comportamento específico.  

> **Show me the code:**  
> A classe **BotaoMovimento** que é derivada para as subclasses **BotaoMovimentoCima**, **BotaoMovimentoBaixo**, **BotaoMovimentoEsquerda** e **BotaoMovimentoDireita**.
> ```java
> package br.ies.aps.jogooito.view.swing.botao;
> 
> import java.awt.event.ActionListener;
> import java.sql.SQLException;
> import javax.swing.JButton;
> 
> import br.ies.aps.jogooito.controle.TabuleiroControle;
> import br.ies.aps.jogooito.modelo.Jogador;
> import br.ies.aps.jogooito.modelo.Tabuleiro;
> import br.ies.aps.jogooito.view.swing.tela.TelaControle;
> import br.ies.aps.jogooito.view.swing.tela.TelaTabuleiro;
> 
> @SuppressWarnings("serial")
> public abstract class BotaoMovimento extends JButton implements ActionListener {
> 	private Tabuleiro tabuleiro;
> 	private Jogador jogador;
> 	private TabuleiroControle tabuleiroControle;
> 	private TelaTabuleiro telaTabuleiro;
> 	private TelaControle controleTabuleiro;
> 
> 	public BotaoMovimento(String posicao, Tabuleiro tabuleiro, TelaTabuleiro telaTabuleiro,
> 		TelaControle controleTabuleiro, Jogador jogador) {
> 		setText(posicao);
> 		addActionListener(this);
> 		setTabuleiro(tabuleiro);
> 		setJogador(jogador);
> 		setTabuleiroControle(new TabuleiroControle(tabuleiro));
> 		setTelaTabuleiro(telaTabuleiro);
> 		setControleTabuleiro(controleTabuleiro);
> 	}
> 
> 	public abstract void alteraEstadoTabuleiro();
> 
> 	public TabuleiroControle getTabuleiroControle() {
> 		return tabuleiroControle;
> 	}
> 
> 	public void setTabuleiroControle(TabuleiroControle controle) {
> 		this.tabuleiroControle = controle;
> 	}
> 
> 	public Tabuleiro getTabuleiro() {
> 		return tabuleiro;
> 	}
> 	
> 	public Jogador getJogador() {
> 		return jogador;
> 	}
> 
> 	public void setJogador(Jogador jogador) {
> 		this.jogador = jogador;
> 	}
> 
> 	public void setTabuleiro(Tabuleiro tabuleiro) {
> 		this.tabuleiro = tabuleiro;
> 	}
> 
> 	public TelaTabuleiro getTelaTabuleiro() {
> 		return telaTabuleiro;
> 	}
> 
> 	public void setTelaTabuleiro(TelaTabuleiro telaTabuleiro) {
> 		this.telaTabuleiro = telaTabuleiro;
> 	}
> 
> 	public TelaControle getControleTabuleiro() {
> 		return controleTabuleiro;
> 	}
> 
> 	public void setControleTabuleiro(TelaControle controleTabuleiro) {
> 		this.controleTabuleiro = controleTabuleiro;
> 	}
> }
> ```

### 6.2. Encapsulamento
O **encapsulamento** é um dos pilares da orientação a objetos, serve para **proteger** os dados da classe. 
Encapsular os dados de uma aplicação significa evitar que estes sofram acessos indevidos.
Para isso, é criada uma estrutura onde são usados modificadores como `public`, `protected`, `private` para restringir a acesso a esses dados.
E métodos que podem ser utilizados por qualquer outra classe, sem causar inconsistências no desenvolvimento comumente chamados **getters** e **setters**.  
> **Show me the code:**  
> A classe **Campo** que possui atributos encapsulados e métodos (getters e setters) para os dados serem consultados.
> ```java
> package br.ies.aps.jogooito.modelo;
> 
> public class Campo {
> 	private Campo cima;
> 	private Campo baixo;
> 	private Campo esquerda;
> 	private Campo direita;  
> 	private Integer numero;
> 	private Tabuleiro tabuleiro;
> 
> 	public Campo(Integer numero, Tabuleiro tabuleiro) {
> 		this.setNumero(numero);
> 		this.cima = this;
> 		this.baixo = this;
> 		this.esquerda = this;
> 		this.direita = this;
> 		this.tabuleiro = tabuleiro;
> 	}
> 
> 	public Integer getNumero() {
> 		return numero;
> 	}
> 
> 	public void setNumero(Integer numero) {
> 		this.numero = numero;
> 	}
> 
> 	public void trocaNumero(Campo origem, Campo destino) {
> 		Integer temporario = origem.getNumero();
> 		origem.setNumero(destino.getNumero());
> 		destino.setNumero(temporario);
> 	}
> 
> 	public Campo getCampoDeCima() {
> 		return cima;
> 	}
> 
> 	public void setCampoDeCima(Campo cima) {
> 		this.cima = cima;
> 	}
> 
> 	public Campo getCampoDeBaixo() {
> 		return baixo;
> 	}
> 
> 	public void setCampoDeBaixo(Campo baixo) {
> 		this.baixo = baixo;
> 	}
> 
> 	public Campo getCampoDaEsquerda() {
> 		return esquerda;
> 	}
> 
> 	public void setCampoDaEsquerda(Campo esquerda) {
> 		this.esquerda = esquerda;
> 	}
> 
> 	public Campo getCampoDaDireita() {
> 		return direita;
> 	}
> 
> 	public void setCampoDaDireita(Campo direita) {
> 		this.direita = direita;
> 	}
> 
> 	public void moverParaCima() {
> 		trocaNumero(this, cima);
> 		this.tabuleiro.notificarObservadores(this.tabuleiro);
> 	}
> 
> 	public void moverParaBaixo() {
> 		trocaNumero(this, baixo);
> 		this.tabuleiro.notificarObservadores(this.tabuleiro);
> 	}
> 
> 	public void moverParaEsquerda() {
> 		trocaNumero(this, esquerda);
> 		this.tabuleiro.notificarObservadores(this.tabuleiro);
> 	}
> 
> 	public void moverParaDireita() {
> 		trocaNumero(this, direita);
> 		this.tabuleiro.notificarObservadores(this.tabuleiro);
> 	}
> }
> ```

### 6.3. Composição
Uma **composição** tenta representar também uma relação todo/parte. No entanto, na composição o **objeto-todo** é responsável por criar e destruir suas partes. Em uma composição um mesmo objeto-parte não pode se associar a mais de um objeto-todo.

> **Show me the code:**  
> O objeto criado a partir da instância da classe Tabuleiro vai possuir objetos da classe Campo, nesse caso quando o objeto Tabuleiro que é o **objeto-todo** for excluido, os objetos Campo também serão.
> 
> ```java
> package br.ies.aps.jogooito.modelo;
> 
> import java.util.ArrayList;
> import java.util.List;
> 
> public class Tabuleiro {
> 	private Campo ponteiro;
> 	private Campo campoMeio;
> 	private Campo campoMeioDireita;
> 	private Campo campoMeioEsquerda;
> 	private Campo campoBaixoMeio;
> 	private Campo campoBaixoDireita;
> 	private Campo campoBaixoEsquerda;
> 	private Campo campoCimaMeio;
> 	private Campo campoCimaDireita;
> 	private Campo campoCimaEsquerda;
> 
> 	private Integer idTabuleiro;
> 
> 	private List<TabuleiroObservador> observadores = new ArrayList<>();
> 
> 	public Tabuleiro() {
> 		gerarCampos();
> 	}
> 
> 	...
> 
> 	public void gerarCampos() {
> 		campoCimaEsquerda = new Campo(Integer.valueOf(7), this);
> 		campoCimaMeio = new Campo(Integer.valueOf(2), this);
> 		campoCimaDireita = new Campo(Integer.valueOf(4), this);
> 		campoMeioEsquerda = new Campo(Integer.valueOf(5), this);
> 		campoMeio = new Campo(Integer.valueOf(0), this);
> 		campoMeioDireita = new Campo(Integer.valueOf(6), this);
> 		campoBaixoEsquerda = new Campo(Integer.valueOf(8), this);
> 		campoBaixoMeio = new Campo(Integer.valueOf(3), this);
> 		campoBaixoDireita = new Campo(Integer.valueOf(1), this);
> 
> 		associarVizinhos();
> 		setPonteiro(campoMeio);
> 	}
> 
> 	...
> }
> ```

### 6.4. Herança
Um objeto pode ter métodos e atributos de outra classe por **herança**, isso significa que a classe tem todas características da classe herdada, além de poder ter as suas próprias também.  
Uma das grandes vantagens de usar o recurso da herança é na **reutilização do código**. Esse reaproveitamento pode ser acionado quando se identifica que o atributo ou método de uma classe será igual para as outras.  

> **Show me the code:**  
> Há herança na classe **BotaoMovimentoBaixo** que herda as funcionalidades da classe abstrata **BotaoMovimento** e sobrescreve o método **alteraEstadoTabuleiro()**.
> ```java
> package br.ies.aps.jogooito.view.swing.botao;
> 
> import java.awt.event.ActionEvent;
> import br.ies.aps.jogooito.modelo.Jogador;
> import br.ies.aps.jogooito.modelo.Tabuleiro;
> import br.ies.aps.jogooito.view.swing.tela.TelaControle;
> import br.ies.aps.jogooito.view.swing.tela.TelaTabuleiro;
> 
> @SuppressWarnings("serial")
> public class BotaoMovimentoBaixo extends BotaoMovimento {
> 	public BotaoMovimentoBaixo(String posicao, Tabuleiro tabuleiro, 
> 		TelaTabuleiro telaTabuleiro, TelaControle controleTabuleiro, Jogador jogador) {
> 		super(posicao, tabuleiro, telaTabuleiro, controleTabuleiro, jogador);
> 	}
> 
> 	@Override
> 	public void actionPerformed(ActionEvent event) {
> 		alteraEstadoTabuleiro();
> 	}
> 
> 	@Override
> 	public void alteraEstadoTabuleiro() {
> 		this.getTabuleiroControle().moverPraBaixo();
> 		this.getTelaTabuleiro().atualizarTelaTabuleiro(this.getTabuleiro());
> 		Integer jogadas = this.getJogador().getJogadas();
> 		this.getJogador().setJogadas(jogadas + 1);
> 	}
> }
> ```

### 6.5. Polimorfismo
Termo usado para descrever situações nais quais algo pode ocorrer de diferentes formas. No Polimorfismo podemos ter dois tipos:  

O polimorfismo **Estático ou Sobrecarga**, se dá quando temos a mesma operação implementada várias vezes na mesma classe. A escolha de qual operação será chamada depende da assinatura dos métodos sobrecarregados.  

O polimorfismo **Dinâmico ou Sobreposição**, que é o princípio que permite que classes derivadas de uma mesma superclasse tenham métodos iguais (de mesma assinatura) mas comportamentos diferentes. Mesma assinatura = Mesma quantidade e tipo de parâmetros.  
> **Show me the code:**  
> A classe **BotaoMovimentoEsquerda** sobrescreve o método `alteraEstadoTabuleiro()` herdado da superclasse **BotaoMovimento** de acordo com sua especificidade, outras classes que herdam dessa mesma superclasse também terão que implementar o mesmo método, mas cada uma de uma forma diferente. Simbolizando o uso do **polimorfismo** de **sobrecarga**. 
> ```java
> package br.ies.aps.jogooito.view.swing.botao;
> 
> import java.awt.event.ActionEvent;
> import br.ies.aps.jogooito.modelo.Jogador;
> import br.ies.aps.jogooito.modelo.Tabuleiro;
> import br.ies.aps.jogooito.view.swing.tela.TelaControle;
> import br.ies.aps.jogooito.view.swing.tela.TelaTabuleiro;
> 
> @SuppressWarnings("serial")
> public class BotaoMovimentoEsquerda extends BotaoMovimento {
> 	public BotaoMovimentoEsquerda(String posicao, Tabuleiro tabuleiro, TelaTabuleiro telaTabuleiro,
> 		TelaControle controleTabuleiro, Jogador jogador) {
> 		super(posicao, tabuleiro, telaTabuleiro, controleTabuleiro, jogador);
> 	}
> 
> 	@Override
> 	public void actionPerformed(ActionEvent event) {
> 		alteraEstadoTabuleiro();
> 	}
> 
> 	@Override
> 	public void alteraEstadoTabuleiro() {
> 		this.getTabuleiroControle().moverPraEsquerda();
> 		this.getTelaTabuleiro().atualizarTelaTabuleiro(this.getTabuleiro());
> 		Integer jogadas = this.getJogador().getJogadas();
> 		this.getJogador().setJogadas(jogadas + 1);
> 	};
> }
> ```

---
## 7. Jogando
Você pode baixar o arquivo [8puzzle.jar](https://github.com/GuiSAlmeida/8puzzle-java/raw/master/8puzzle.jar) e rodá-lo passando o seguinte comando.  

```sh
java -jar 8puzzle.jar
```

---
## 8. Referências
https://refactoring.guru/pt-br/design-patterns/factory-method  
https://refactoring.guru/pt-br/design-patterns/observer  
http://www.gqferreira.com.br/artigos/ver/mvc-com-java-desktop-parte1  
http://www.dsc.ufcg.edu.br/~jacques/cursos/map/html/arqu/mvc/mvc.htm  

---
## 9. Conclusão
Este projeto me ajudou muito a por em prática conceitos de **Orientação a Objetos**, como também exercitar lógica de como funciona **arquitetura de software** em um projeto usando MVC e alguns **Padrôes de Projeto**.  
E aí, o que achou desse projeto? Tem alguma sugestão ou crítica? Deixa uma reação ou um comentário aqui embaixo. E obrigado pela visita! 😉