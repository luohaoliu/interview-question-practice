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

SELECT column1, column2, ... FROM table_name;

SELECT Column Example

SELECT CustomerName, City FROM Customer;

SELECT * Example

SELECT * FROM Customers;

The SQL SELECT DISTINCT Statement

The SELECT DISTINCT statement is used to return only distinct (different) values.

Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct) values.

SELECT DISTINCT Syntax

SELECT DISTINCT column1, column2, ... FROM table_name;

SELECT DISTINCT Country FROM Customers;

SELECT COUNT(DISTINCT Country) FROM Customers;

SQL WHERE Clause

The WHERE clause is used to filter records. The WHERE clause is used to extract only those records that fulfill a specified condition.

SELECT * FROM Customers WHERE Country="Mexico";

SELECT * FROM Customers WHERE CustomerID=1;

The SQL AND, OR and NOT Operators

The WHERE clause can be combined with AND, OR, and NOT operators.

The AND and OR operators are used to filter records based on more than one condition. The AND operator displays a record if all the conditions separated by AND are TRUE. The OR operator displays a record if any of the conditions separated by OR is TRUE. The NOT operator displays a record if the condition(s) is NOT TRUE.

SELECT column1, column2, ... FROM table_name WHERE condition1 AND condition2 AND condition3 ...;

OR Syntax

SELECT column1, column2, ... FROM table_name WHERE condition1 OR condition2 OR condition3 ...;

NOT Syntax

SELECT column1, column2, ... FROM table_name WHERE NOT condition;

SELECT * FROM Customers WHERE City='Berlin' OR City='Lyon';

The SQL ORDER BY keyword

The ORDER BY Keyword is used to sort the result-set in ascending or descending order.
The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.

ORDER BY Syntax

SELECT column1, column2, ... FROM table_name Order BY column1, column2, ... ASC|DESC;

SELECT * FROM Customers ORDER BY Country DESC;

SELECT * FROM Customers ORDER BY Country, CustomerName;

SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;

The SQL INSERT INTO Statement

The INSERT INTO statment is used to insert new records in a table. 

It is possible to write the INSERT INTO statement in two ways.

The first way specifies both the column names and the values to be inserted:

INSERT INTO table_name(column1, column2, column3, ...) VALUES(value1, value2, value3, ...);

If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. The INSERT INTO syntax would be as follows:

INSERT INTO table_name VALUES(values1, value2, value3, ...);

It is also possible to only insert data in specific columns.

SQL NULL Values

A field with a NULL value is a field with no value. If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a NULL value. A NULL value is different from a zero value or a field that contains spaces. A field with a NULL value is one that has been left blank during record creation. 

IS NULL Syntax

SELECT column_names FROM table_name WHERE column_name IS NULL;

IS NOT NULL Syntax

SELECT column_names FROM table_name WHERE column_name IS NOT NULL;

The IS NULL Operator

The IS NULL operator is used to test for empty values (NULL values).

The following SQL lists all customers with a NULL value in the "Address" field:

SELECT CustomerName, ContactName, Address FROM Customers WHERE Address IS NULL;

The IS NOT NULL Operator

The IS NOT NULL operator is used to test for non-empty values (NOT NULL values).

The following SQL lists all customers with a value in the "Address" field:

SELECT CustomerName, ContactName, Address FROM Customers WHERE Address IS NOT NULL;

The SQL UPDATE Statement

The UPDATE statement is used to modify the existing records in a table.

UPDATE Syntax

UPDATE table_name SET column1 = calue1, column2 = value2, ... WHERE condition;

The SQL DELETE Statement

The DELETE statement is used to delete existing records in a table.

DELETE Syntax

DELETE FROM table_name WHERE condition;

SQL TOP, LIMIT or ROWNUM Clause

The SQL SELECT TOP Clause

The SELECT TOP clause is used to specify the number of records to return.

The SELECT TOP clause is useful on large tables with thousands of records. Returning a large number of records can impact performance. 

SQL Server / MS Access Syntax:

SELECT TOP number|percent column_name(s) FROM table_name WHERE condition;

MySQL Syntax:

SELECT column_name(s) FROM table_name WHERE condition LIMIT number;

Oracle Syntax:

SELECT column_name(s) FROM table_name WHERE ROWNUM <= number;

The following SQL statement selects the first three records from the "Customers" table (for SQL Server/MS Access):

SELECT TOP 3 * FROM Customers;

The following SQL statement shows the equivalent example using the LIMIT clause (for MySQL):

SELECT * FROM Customers LIMIT 3;

The following SQL statement shows the equivalent example using ROWNUM (for Oracle):

SELECT * FROM Customers WHERE ROWNUM <= 3;

SQL TOP PERCENT Example

The following SQL statement slects the first 50% of the records from the "Customers" table (for SQL Server/MS Access):

SELECT TOP 50 PERCENT * FROM Customers;

ADD a WHERE CLAUSE

The following SQL statement selects the first three records from the "Customers" table (for SQL Server/MS Access):

SELECT TOP 3 * FROM Customers;

The SQL MIN() and MAX() Functions

The MIN() function returns the smallest value of the selected column. 

The MAX() function returns the largest value of the selected column.

SELECT MIN(column_name) FROM table_name WHERE condition;

SELECT MAX(column_name) FROM table_name WHERE condition;

SELECT MIN(Price) AS SmallestPrice FROM Products;

SELECT MAX(Price) AS LargestPrice FROM Products;

The SQL COUNT(), AVG() and SUM() Functions

The COUNT() function returns the number of rows that matches a specified criteria. Null values are not counted.

The AVG() function returns the average value of a numeric column.

The SUM() function returns the total sum of a numeric column.

COUNT() Syntax

SELECT COUNT(column_name) FROM table_name WHERE condition;

AVG() Syntax

SELECT AVG(column_name) FROM table_name WHERE condition;

SUM() Syntax

SELECT SUM(column_name) FROM table_name WHERE condition;

COUNT() Example

SELECT COUNT(ProductID) FROM Products;

AVG() Example

SELECT AVG(Price) FROM Products;

SUM() Example

SELECT SUM(Quantity) FROM OrderDetails;

The SQL LIKE Operator

The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

There are two wildcards often used in conjunction with the LIKE operator:

% - the percent sign represents zero, one, or multiple characters
_ - the underscore represents a single character

LIKE Syntax

SELECT column1, column2, ... FROM table_name WHERE columnN like pattern;

SQL LIKE Examples

SELECT * FROM Customers WHERE CustomerName LIKE 'a%';

SELECT * FROM Customers WHERE CustomerName LIKE '%a';

SELECT * FROM Customers WHERE CustomerName LIKE '%or%';

SELECT * FROM Customers WHERE CustomerName LIKE 'a__%';

SELECT * FROM Customers WHERE ContactName LIKE 'a%o';

SELECT * FROM Customers WHERE CustomerName NOT LIKE 'a%';

SQL Wildcard Characters

A wildcard character is used to substitute one or more characters in a string.

Whildcard characters are used with the SQL LIKE operator. The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

The SQL IN Operator

The IN operator allows you to specify multiple values in a WHERE clause.

The IN operator is a shorthand for multiple OR conditions.

IN Syntax

SELECT column_name(s) FROM table_name WHERE column_name IN (value1, value2, ...);

SELECT column_name(s) FROM table_name WHERE column_name IN (SELECT STATEMENT);

The following SQL statement selects all customers that are from the same countries as the suppliers:

SELECT * FROM Customers WHERE Country IN (SELECT Country FROM Suppliers); 

The SQL BETWEEN Operator

The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.

The BETWEEN operator is inclusive: begin and end values are included.

BETWEEN Syntax

SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value1 AND value2;

BETWEEN Example

The following SQL statement selects all products with a price BETWEEN 10 and 20:

SELECT * FROM Products WHERE Price BETWEEN 10 AND 20;

NOT BETWEEN Example

SELECT * FROM Products WHERE Price NOT BETWEEN 10 AND 20;

BETWEEN with IN Example

The following SQL statement selects all products with a price BETWEEN 10 and 20. In addition; do not show products with a CategoryID of 1, 2, or 3:

SELECT * FROM Products WHERE Price BETWEEN 10 AND 20 AND CategoryID NOT IN (1,2,3);

BETWEEN Text Values Example

The following SQL statement selects all products with a ProductName BETWEEN Carnarvon Tigers and Mozzarella di Giovanni:

SELECT * FROM Products WHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni' ORDER BY ProductName;

SELECT * FROM Products WHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Chef Anton's Cajun Seasoning' ORDER BY ProductName;

NOT BETWEEN Text Values Example

The following SQL statement selects all products with a ProductName NOT BETWEEN Carnarvon Tigers and Mozzarella di Giovanni:

SELECT * FROM Products WHERE ProductName NOT BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Givanni' ORDER BY ProductName;

BETWEEN Dates Example

The following SQL statement selects all orders with an OrderDate BETWEEN '01-July-1996' and '31-July-1996':

SELECT * FROM Orders WHERE OrderDate BETWEEN #01/07/1996# AND #31/07/1996#;

SELECT * FROM Orders WHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';

SQL Aliases

SQL aliases are used to give a table, or a column in a table, a temporary name. 

Aliases are often used to make column names more readable.

An alias only exists for the duration of the query.

SELECT column_name AS alias_name FROM table_name;

Alias for Columns Examples

The following SQL statement creates two aliases, one for the CustomerID column and one for the CustomerName column:

SELECT CustomerID AS ID, CustomerName AS Customer FROM Customers;