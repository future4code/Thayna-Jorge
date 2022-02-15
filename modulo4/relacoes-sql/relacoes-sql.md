**Exercicio 1**

# a) Explique o que é uma chave estrangeira -
# É uma chave que faz referncia a uma coluna que pertence a outra tabela.

# c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails
# (`carver-thayna-saad-isqueirdo-jorge`.`Avaliação`, CONSTRAINT `Avaliação_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))	0.156 sec
# R- Esse aconteceu porqué na minha tabela de filmes não existe nenhum filme com id "005"


**Exercicio 2**
 
# a) Explique, com as suas palavras, essa tabela
# Estou dizendo que o filme_id da minha tabela de elenco, CORRESPONDE AO MESMO ID referente a minha tabela de filmes.
# E que o meu ator_id  da minha tabela de elenco, CORRESPONDE AO MESMO ID referente a minha tabela de atores.

# c) R NÃO CRIOU A RELAÇÃO POIS NEM O FILME E NEM O ATOR EXISTEM. 

# D)
# R NAÕ FOI POSSÍVEL PORQUE O ATOR ESTÁ SENDO REFERENCIADO NA TABELA DE ELENCO. PARA APAGAR, SERIA NECESSÁRIO TIRAR TODAS AS REFERENCIAS

**Exercicio 3**

# a) Explique, com suas alavras a query acima. O que é o operador ON?
# R- A Query está juntando a nota da tabela filmes e mesclando os id da tabela filmes com as notas dessa mesma tabela
# O operador on significa mesclar ou sobrepor