#EXERCICIO 1
CREATE TABLE Actor(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR (6) NOT NULL
);
#A)
#CREATE TABLE - CRIA A TABELA
#VARCHAR - DETERMINA QUE É UM CARACTERE DE NO MAX 255 ITENS, E QUE ELE É O KEY PRINCIPAL
#NOT NULL - NÃO PODE FALTAR
#DATE - É UMA DATA YYYY-MM-DD

#B)
SHOW DATABASES;
#EXIBE A RAIZ DO MEU BANCO DE DADOS

SHOW TABLES;
#EXIBE AS TABELAS DO MEU BANCO DE DADOS

#C)
DESCRIBE Actor;
#EXIBE OS ITENS DAS COLUNAS DAS MINHAS TABELAS.

#EXERCICIO 2
INSERT INTO  Actor (id, name, salary, birth_date, gender)
	VALUES (
    "001",
    "Tony Ramos",
    400000,
    "1948-08-25",
    "male"
    );

#A) 
INSERT INTO  Actor (id, name, salary, birth_date, gender)
	VALUES (
    "002",
    "Gloria Pires",
    120000,
    "1963-08-23",
    "female"
	);


#B /C) 
INSERT INTO  Actor (id, name, salary, birth_date, gender)
	VALUES (
    "003",
    "Fernanda Montenegro",
    300000,
    "1929-10-19",
    "female"
	);
#entrada duplicada "002" para chave PRIMAR, ACONTECEU PQ A PRIMARY KEY DEVE SER ÚNICA
# A contagem de colunas não corresponde à contagem de valores na linha 1, ACONTECEU PQ TEM MAIS LINHAS QUE COLUNAS DECLARADAS

#D)
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES(
	"004",
    "Mateus Solano",
	400000,
	"1949-04-18", 
	"male"
	);
#O campo 'nome' não tem um valor padrão, NOME NÃO DECLARO, POREM ELE NÃO PODE FICAR PENDENTE

#E)
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES(
	"005", 
	"Juliana Paes",
	719333.33,
	"1979-03-26", 
	"female"
	);
#Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1, DATA DE NASCIMENTO NÃO DECLARADA COM STRING

#F)
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES(
	"006", 
	"Cleo Pires",
	800000,
	"1990-05-01", 
	"female"
	);
    
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Rodrigo Santoro",
  9800000,
  "1898-01-01", 
  "male"
);
   
#EXERCICIO 3
SELECT * FROM Actor;
SELECT id, salary FROM Actor;

SELECT id, name FROM Actor 
	WHERE gender = "male";

#A)
SELECT id, name FROM Actor 
	WHERE gender = "female";

#B)
SELECT name, salary FROM Actor 
	WHERE name = "Tony Ramos";
    
#C)
SELECT id, name FROM Actor 
	WHERE gender = "invalid";
#O retorno da tabela foi vazio pq  o valor "invalid" não foi definido como uma opção

#D)
SELECT id, name, salary FROM Actor
	WHERE salary <= 500000;

#E)
SELECT id, name from Actor 
	WHERE id = "002";
# Coluna desconhecida 'nome' na 'lista de campos', NA CRIAÇÃO DA TABELA O NOME FOI DECLARADO COMO
#NAME, POR ISSO, ELE NÃO RECONHECEU

#EXERCICIO 4
SELECT name FROM Actor 
	WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
#R: ENTRE A E J, FOI RETORNADO JULIANA PAZ, PORQUE SÓ TEM ELA COM A LETRA J E O SALARIO DELA
# É MAIOR QUE 300.000
SELECT * FROM Actor 
	WHERE birth_date BETWEEN 1980-12-31 AND 1930-01-01 ;
    
SELECT name, salary FROM Actor 
	WHERE (name LIKE "%a%" OR "%A%" OR "%G%" OR "%g%") AND salary BETWEEN 350000 AND 900000;
    
CREATE TABLE Filmes(
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    synopse TEXT,
    data_lance DATE NOT NULL,
    score INT NOT NULL
);

INSERT INTO  Filmes (id, title, synopse, data_lance, score)
	VALUES (
    "001",
	"Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do 
    casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2006/01/06",
    "7"
    );
    
INSERT INTO  Filmes (id, title, synopse, data_lance, score)
	VALUES (
    "002",
	"Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
    A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida,
    empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar
    com ela",
	"2012/12/27",
    "10"
    );
    
    INSERT INTO  Filmes (id, title, synopse, data_lance, score)
	VALUES (
    "003",
	"Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
    que só quer saber de farras e jogatina nas boates. A vida de abusos acaba
    por acarretar sua morte precoce.",
	"2017/11/02",
    "8"
    );
    
    INSERT INTO  Filmes (id, title, synopse, data_lance, score)
	VALUES (
    "004",
    "Minha Mãe é uma Peça",
    "Dona Hermínia é uma mulher de meia idade, divorciada do marido,
    que a trocou por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos 
    Marcelina e Juliano, que já estão bem grandinhos. ",
    "2013/04/28",
    "10"
    );

SELECT * FROM Filmes;
#TRUNCATE TABLE Filmes;

#EXERCICIO 6 
#A)
SELECT id, title, score FROM Filmes 
	WHERE id = "001";

#B) 
SELECT * FROM Filmes 
	WHERE title = "Se eu fosse você";

SELECT id, title, synopse FROM Filmes
	WHERE score >= 7;
    
#EXERCICIO 7 
#A)
SELECT * FROM Filmes
	WHERE (title LIKE "%vida%");

#B)
SELECT * FROM Filmes 
	WHERE title LIKE "%VIDA%" OR 
		 synopse LIKE "%vida%" ;

#C) 
SELECT * FROM Filmes 
	WHERE data_lance < "2006-01-31";
    
#D)
SELECT * FROM Filmes
	WHERE data_lance < CURDATE() AND
		(title LIKE "%VIDA%" OR 
		 synopse LIKE "%vida%" )AND 
         score > 7 ;