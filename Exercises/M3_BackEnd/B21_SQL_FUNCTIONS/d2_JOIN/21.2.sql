SELECT * FROM Movies;
SELECT * FROM BoxOffice;
SELECT * FROM Theater;

-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT m.id, m.title, bo.domestic_sales, bo.international_sales
FROM BoxOffice bo
INNER JOIN Movies m
ON bo.movie_id = m.id
;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT m.id, m.title, bo.domestic_sales, bo.international_sales
FROM BoxOffice bo
INNER JOIN Movies m
ON bo.movie_id = m.id
WHERE bo.international_sales > bo.domestic_sales
;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT m.id, m.title, bo.rating
FROM BoxOffice bo
INNER JOIN Movies m
ON bo.movie_id = m.id
ORDER BY bo.rating DESC
;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT t.*, m.*
FROM Theater t
LEFT JOIN Movies m
ON t.id = m.theater_id
ORDER BY m.title
;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT t.*, m.*
FROM Theater t
RIGHT JOIN Movies m
ON t.id = m.theater_id
ORDER BY t.name
;

-- Exercício 6: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8.
SELECT m.*, bo.rating
FROM Movies m
INNER JOIN BoxOffice bo
ON m.id = bo.movie_id
WHERE bo.rating > 8
;