SQL HOME

SQL is a standard language for storing, manipulating and retrieving data in databases. SQL stands for Structured Query Language. 

SELECT * FROM Customers;

SQL Intro

RDBMS stands for Relational Database Management System. RDBMS is the basis of SQL, and for all modern database systems such as MS SQL Server, MySQL, and Microsoft Access. The data in RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of columns and rows. 

Every table is broken up into smaller entities called fields. A field is a column in a table that is designed to maintain specific information about every record in the table. A record, also called a row, is each individual entry that exists in a table. A record is a horizontal entry in a table. 

A column is a vertical entity in a table that contains all information associated with a specific field in a table.

SQL Syntax

A database most often contains one or more tables. Each table is identified by a name. Table contain records (rows) with data. SQL keywords are NOT case sensitive: select is the same as SELECT.

Some database systems require a semicolon at the end of each SQL statement. Semicolon is the standard way to separate each SQL statement in database systems that allow more than one SQL statement to be executed in the same call to the server.

Here are some of the most important SQL commands:

SELECT - extracts data from a database

UPDATE - updates data in a database

DELETE - deletes data from a database

INSERT INTO - inserts new data into a database

CREATE DATABASE - creates a new database

ALTER DATABASE - modifies a database

CREATE TABLE - creates a new table

ALTER TABLE - modifies a table

DROP TABLE - deletes a table

CREATE INDEX - creates an index (search key)

DROP INDEX - deletes an index

The SQL SELECT Statement

SELECT Syntax

SELECT column1, column2, ...

FROM table_name;

SELECT Column Example

SELECT CustomerName, City FROM Customer;

SELECT * Example

SELECT * FROM Customers;

The SQL SELECT DISTINCT Statement

The SELECT DISTINCT statement is used to return only distinct (different) values.

Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct) values.

SELECT DISTINCT Syntax

SELECT DISTINCT column1, column2, ...

FROM table_name;

SELECT DISTINCT Country FROM Customers;

SELECT COUNT(DISTINCT Country) FROM Customers;

SQL WHERE Clause

The WHERE clause is used to filter records. The WHERE clause is used to extract only those records that fulfill a specified condition.

SELECT * FROM Customers WHERE Country="Mexico";

SELECT * FROM Customers WHERE CustomerID=1;

The SQL AND, OR and NOT Operators

The WHERE clause can be combined with AND, OR, and NOT operators.

The AND and OR operators are used to filter records based on more than one condition. The AND operator displays a record if all the conditions separated by AND are TRUE. The OR operator displays a record if any of the conditions separated by OR is TRUE. The NOT operator displays a record if the condition(s) is NOT TRUE.

SELECT column1, column2, ...

FROM table_name 

WHERE condition1 AND condition2 AND condition3 ...;

OR Syntax

SELECT column1, column2, ...

FROM table_name

WHERE condition1 OR condition2 OR condition3 ...;

NOT Syntax

SELECT column1, column2, ...

FROM table_name

WHERE NOT condition;

SELECT * FROM Customers WHERE City='Berlin' OR City='Lyon';

The SQL ORDER BY keyword

The ORDER BY Keyword is used to sort the result-set in ascending or descending order.
The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.

ORDER BY Syntax

SELECT column1, column2, ...

FROM table_name

Order BY column1, column2, ... ASC|DESC;

SELECT * FROM Customers ORDER BY Country DESC;

SELECT * FROM Customers ORDER BY Country, CustomerName;

SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;

The SQL INSERT INTO Statement

The INSERT INTO statment is used to insert new records in a table. 

It is possible to write the INSERT INTO statement in two ways.

The first way specifies both the column names and the values to be inserted:

INSERT INTO table_name (column1, column2, column3, ...)

VALUES (value1, value2, value3, ...);

If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. The INSERT INTO syntax would be as follows:

INSERT INTO table_name

VALUES (values1, value2, value3, ...);

It is also possible to only insert data in specific columns.

SQL NULL Values

A field with a NULL value is a field with no value. If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a NULL value. A NULL value is different from a zero value or a field that contains spaces. A field with a NULL value is one that has been left blank during record creation. 


