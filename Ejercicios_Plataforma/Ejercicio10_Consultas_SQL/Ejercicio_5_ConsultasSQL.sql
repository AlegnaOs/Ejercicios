Selecciona las columnas film_id y title de la tabla film.

Select film_id, title from film

Selecciona 5 filas de la tabla film, obteniendo todas las columnas.

select * from film limit 5

Selecciona filas de la tabla film donde film_id sea menor que 4.

select * from film where film_id < 4

Selecciona filas de la tabla film donde el rating sea PG o G.

select * from film where rating in ('PG','G')

Selecciona filas de la tabla actor donde el nombre sea Angela, Angelina o Audrey usando IN.

select * from actor where first_name in ('Angela','Angelina','Audrey')

Obtén una lista de actores con el nombre Julia.

select * from actor where first_name = 'Julia'

Obtén una lista de actores con los nombres Chris, Cameron o Cuba.

select * from actor where first_name in ('Chris','Cameron','Cuba')

Selecciona la fila de la tabla customer para el cliente con el nombre Jamie Rice.

select * from customer where first_name ='Jamie' and last_name='Rice'

Selecciona el monto y la fecha de pago de la tabla payment donde el monto pagado sea menor a $1.

select * from payment where amount < 1

¿Cuáles son las diferentes duraciones de alquiler permitidas por la tienda?

select distinct rental_duration from film

Ordena las filas en la tabla city por country_id y luego por city.

select * from city order by country_id asc, city asc

¿Cuáles son los ID de los últimos 3 clientes que devolvieron un alquiler?

select customer_id from rental where return_date is not null order by return_date desc limit 3

¿Cuántas películas tienen clasificación NC-17? ¿Cuántas tienen clasificación PG o PG-13?

select rating, count(*) from film where rating='NC-17' GROUP BY rating
select rating, count(*) from film where rating in ('PG', 'PG-13') GROUP BY rating

¿Cuántos clientes diferentes tienen registros en la tabla rental?

select count(distinct customer_id) from rental

¿Hay algún cliente con el mismo apellido?

select last_name, count(*) from customer GROUP BY last_name HAVING COUNT(*)>1;

¿Qué película (id) tiene la mayor cantidad de actores?

select film_id, count(*) as total_actores from film_actor group by film_id order by total_actores desc limit 1

¿Qué actor (id) aparece en la mayor cantidad de películas?

select actor_id, count(*) as total_peliculas from film_actor group by actor_id order by total_peliculas desc limit 1

Cuenta el número de ciudades para cada country_id en la tabla city. Ordena los resultados por count(*).

select country_id, count(city_id) as CantCiudades from city group by Country_id order by CantCiudades

¿Cuál es la tarifa de alquiler promedio de las películas? ¿Puedes redondear el resultado a 2 decimales?

select round(avg(rental_rate),2) from film

Selecciona los 10 actores que tienen los nombres más largos (nombre y apellido combinados).

select first_name, last_name, length(concat(first_name, last_name))total_caracter from actor order by total_caracter desc limit 10
