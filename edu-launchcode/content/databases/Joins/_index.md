+++
title = "What are Joins"
weight = 3
+++

## SQL Joins

A **join** combines two tables into one result set. We can use joins
when we want to query two tables at the same time. Whenever we join two
tables, we have to specify the condition upon which the tables need to
be joined.

In SQL, there are four different types of joins:

1.  Inner Join
2.  Left Outer Join
3.  Right Outer Join
4.  Full Outer Join

No matter which join you are working with, the general syntax for the
query looks like so:

``` {.mysql linenos=""}
SELECT column_name_1, column_name_2, ....
FROM table_a
TYPEOFJOIN JOIN table_b ON table_a.column_name_1 = table_b.column_name_1;
```

In this general query, we specified what columns we want (or we could
have used the `*` to read data from all columns). We have also specified
that `table_a` is the *left* table and that `table_b` is the *right*
table. On line 3, we need to include the type of join as part of our
query with the `JOIN` keyword and the condition upon which we are
joining the tables. Our condition follows the `ON` keyword and tells
MySQL what we believe to be matching records. This may mean we want to
join on matching customer ids or matching dollar amounts or matching
dates depending on the tables we are working with and what questions we
need to answer.

::: index
! inner join
:::

## Inner Join

Joining two tables with an **inner join** produces a result set that
only includes the values that are present in *both* tables.

::: admonition
Example

If we use an inner join to combine `johnson_wedding` and
`johnson_vow_renewal` in a query, we can see what guests are going to
both the vow renewal and the wedding.

``` mysql
SELECT last_name, first_name
FROM johnson_vow_renewal
INNER JOIN johnson_wedding ON johnson_vow_renewal.guest_id = johnson_wedding.guest_id;
```

This query will give us a result set of the first and last names of the
guests from the `johnson_vow_renewal` table that are also in the
`johnson_wedding` table.

![](figures/innerjoin.png)

The Venn diagram above shows the result set highlighted in blue.
:::

::: index
! left outer join
:::

## Left Outer Join

Joining two tables with a **left outer join** gives us a result set
which includes all values in the left table and any matching records
from the right table.

::: admonition
Example

If we use a left outer join to combine `johnson_wedding` and
`johnson_vow_renewal` in a query, the result set includes all of the
guests invited to the wedding and any guests who were also invited to
the vow renewal.

``` mysql
SELECT last_name, first_name
FROM johnson_wedding
LEFT JOIN johnson_vow_renewal ON johnson_wedding.guest_id = johnson_vow_renewal.guest_id;
```

![](figures/leftouterjoin.png)

The Venn diagram above shows the result set highlighted in blue.
:::

::: index
! right outer join
:::

## Right Outer Join

Joining two tables with a **right outer join** gives us a result set
that includes all values in the right table and any matching records
from the left table.

::: admonition
Example

If we use a right inner join to combine `johnson_wedding` and
`johnson_vow_renewal` in a query, the result set includes all of the
guests that were invited to the vow renewal and any guests who were also
invited to the wedding.

``` mysql
SELECT last_name, first_name
FROM johnson_wedding
RIGHT JOIN johnson_vow_renewal ON johnson_wedding.guest_id = johnson_vow_renewal.guest_id;
```

![](figures/rightouterjoin.png)

The Venn diagram above shows the result set highlighted in blue.
:::

::: index
! full outer join
:::

## Full Outer Join {#fullouterjoin}

Joining two tables with a **full outer join** gives us a result set that
includes all records from both tables. Full outer joins are important to
SQL, but the syntax is not supported in MySQL. Instead, to achieve a
full outer join, you have to work with a left outer join and a right
outer join. To show what a full outer join looks like in other types of
SQL, we have simulated some possible syntax below.

::: admonition
Example

Now that another event planner has joined Mary\'s company, to get all of
the events run by the company in August, we can use a full outer join to
combine `mary_events` and `leah_events`.

``` mysql
SELECT *
FROM mary_events
FULL OUTER JOIN leah_events ON mary_events.month = leah_events.month
WHERE mary_events.month = 08;
```

![](figures/fullouterjoin.png)

The Venn diagram above shows the result set highlighted in blue.
:::

::: admonition
Note

If you do want to try out a full outer join, the syntax to simulate it
looks some like this:

``` mysql
SELECT * FROM table_a LEFT JOIN table_b ON table_a.column_name_1 = table_b.column_name_1
UNION
SELECT * FROM table_a RIGHT JOIN table_b ON table_a.column_name_1 = table_b.column_name_2;
```

`UNION` is used to bring together the result sets of 2 `SELECT` queries.
Check out the
[documentation](https://dev.mysql.com/doc/refman/8.0/en/union.html) for
more information on how `UNION` works.
:::

## Check Your Understanding

::: admonition
Question

True or false, an inner join gives all of the records in both tables
:::

::: admonition
Question

What bugs are in this SQL query? Select all that apply.

``` mysql
SELECT
FROM johnson_vow_renewal
OUTER JOIN johnson_weding ON johnson_vow_renewal.guest_id = johnson_wedding.guest_id
```

a.  Nothing specified after `SELECT`.
b.  `johnson_vow_renewal` is spelled wrong.
c.  The type of join is not specified.
d.  `johnson_wedding` is spelled wrong.
e.  `ON` is in the wrong place.
f.  There isn\'t a semicolon on the end of the SQL query.
:::