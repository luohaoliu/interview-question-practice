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

The following SQL statement creates two aliases, one for the CustomerName column and one for the ContactName column. It requires double quotation marks or square brackets if the alias name contains spaces.

SELECT CustomerName AS Customer, ContactName AS "Contact Person" FROM Customers; 

The following SQL statement creates an alias named "Address" that combines four columns(Address, PostalCode, City and Country):

SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address FROM Customers;

Alias for Tables Example

The following SQL statement selects all the orders from the customer with CustomerID=4 (Around the Horn). We use the "Customers" and "Orders" tables, and give them the table alias of "c" and "o" respectively.

SELECT o.OrderID, o.OrderDate, c.CustomerName FROM Customers AS c, Orders AS o WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;

SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName FROM Customers, Orders WHERE Customers.CustomerName='Around the Horn' AND Customers.CustomerID=Orders.CustomerID;

SQL Joins

SQL JOIN

A JOIN clause is used to combine rows from two or more tables, based on a related column between them. Let's look at a selection from the "Orders" table:

SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

Different Types of SQL JOINS

Here are the different types of the JOINS in SQL:

(INNER) JOIN returns records that have matching values in both tables.

LEFT (OUTER) JOIN returns all records from the left table, and the matched records from the right table.

RIGHT (OUTER) JOIN returns all records from the right table, and the matched records from the left table.

FULL (OUTER) JOIN returns all records when there is a match in either left or right table.

SQL INNER JOIN Keyword

The INNER JOIN keyword selects records that have matching values in both tables.

INNER JOIN

SELECT column_name(s) FROM table1 INNER JOIN table2 ON table1.column_name = table2.column_name;

SQL INNER JOIN Example

The following SQL statement selects all orders with customer information:

SELECT Orders.OrderID, Customers.CustomerName FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;

The INNER JOIN keyword selects all rows from both tables as long as there is a match between the columns. If there are records in the "Orders" table that do not have matches in "Customers", these orders will not be shown.

JOIN Three Tables

SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName FROM ((Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID) INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);

SQL LEFT JOIN Keyword

The LEFT JOIN Keyword returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL from the right side, if there is no match.

LEFT JOIN Syntax

SELECT column_name(s) FROM table1 LEFT JOIN table2 ON table1.column_name = table2.column_name;

SQL LEFT JOIN Example

SELECT Customers.CustomerName, Orders.OrderID FROM Customers LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID ORDER BY Customers.CustomerName;

SQL RIGHT JOIN Keyword

The RIGHT JOIN keyword return all records from the right table (table2), and the matched records from the left table (table1). The result is NULL from the left side, when there is no match. In some databases RIGHT JOIN is called RIGHT OUTER JOIN.

RIGHT JOIN Syntax

SELECT column_name(s) FROM table1 RIGHT JOIN table2 ON table1.column_name = table2.column_name;

SELECT Orders.OrderID, Employees.LastName, Employees.FirstName FROM Orders RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID ORDER BY Orders.OrderID;

SQL FULL OUTER JOIN Keyword

The FULL OUTER JOIN keyword returns all records when there is a match in left (table1) or right (table2) table records.

SELECT column_name(s) FROM table1 FULL OUTER JOIN table2 ON table1.column_name = table2.column_name WHERE condition;

SELECT Customers.CustomerName, Orders.OrderID FROM Customers FULL OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID ORDER BY Customers.CustomerName;

SQL Self JOIN

A self JOIN is a regular join, but the table is joined with itself.

Self JOIN Syntax

SELECT column_name(s) FROM table1 T1, table1 T2 WHERE condition;

SQL Self JOIN Example

The following SQL statement matches customers that are from the same city:

SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City FROM Customers A, Customers B WHERE A.CustomerID <> B.CustomerID AND A.City = B.City ORDER BY A.City;

SQL UNION Operator

The UNION operator is used to combine the result-set of two or more SELECT statements. Each SELECT statement within UNION must have the same number of columns. The columns must also have similar data types. The columns in each SELECT statement must also be in the same order.

UNION Syntax

SELECT column_name(s) FROM table1 UNION SELECT column_name(s) FROM table2;

UNION ALL Syntax

The UNION operator selects only distinct values by default. To allow duplicate values, use UNION ALL.

SELECT column_name(s) FROM table1 UNION ALL SELECT column_name(s) FROM table2;

The column names in the result-set are usually equal to the column names in the first SELECT statement in the UNION.

SQL UNION Example

The following SQL statement returns the cities (only distinct values) from both the "Customers" and the "Suppliers" table.

SELECT City FROM Customers UNION SELECT City FROM Suppliers ORDER BY City;

If some customers or suppliers have the same city, each city will only be listed once, because UNION selects only distinct values. Use UNION ALL to also select duplicate values.

SQL UNION Example

The following SQL statement returns the cities (duplicate values also) from both the "Customers" and the "Suppliers" table.

SELECT City FROM Customers UNION ALL SELECT City FROM Suppliers ORDER BY City;

Another UNION Example

The following SQL statement lists all customers and suppliers.

SELECT 'Customer' As Type, ContactName, City, Country FROM Customers UNION SELECT 'Supplier', ContactName, City, Country FROM Suppliers;

The SQL GROUP BY Statement

The GROUP BY statement groups rows that have the same values into summary rows, like "find the number of customers in each country." The GROUP BY statement is often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one ore more columns.

GROUP BY Syntax

SELECT column_name(s) FROM table_name WHERE condition GROUP BY column_name(s) ORDER BY column_name(s);

SQL GROUP BY Examples

The following SQL statement lists the number of customers in each country:

SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country;

The following SQL statement lists the number of customers in each country, sorted high to low:

SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country ORDER BY COUNT(CustomerID) DESC;

GROUP BY With JOIN Example

The following SQL statement lists the number of orders sent by each shipper:

SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID GROUP BY ShipperName;

The SQL HAVING Clause

The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions.

HAVING Syntax

SELECT column_name(s) FROM table_name WHERE condition GROUP BY column_name(s) HAVING condition ORDER BY column_name(s);

SQL HAVING Examples

The following SQL statement lists the number of customers in each country. Only include countries with more than 5 customers:

SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country HAVING COUNT(CustomerID) > 5;

The following SQL statement lists the number of customers in each country, sorted high to low (Only include countries with more than 5 customers):

SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country HAVING COUNT(CustomerID) > 5 ORDER BY COUNT(CustomerID) DESC;

More HAVING Examples

The following SQL statement lists the employees that have registered more than 10 orders:

SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders FROM (Orders INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID) GROUP BY LastName HAVING COUNT(Orders.OrderID) > 10;

The following SQL statement lists if the employees "Davolio" or "Fuller" have registered more than 25 orders:

SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID WHERE LastName = 'Davolio' OR LastName = 'Fuller' GROUP BY LastName HAVING COUNT (Orders.OrderID) > 25;

The SQL EXISTS Operator

The EXISTS operator is used to test for the existence of any record in a subquery.

The EXISTS operator returns true if the subquery returns one or more records.

SELECT column_name(s) FROM table_name WHERE EXISTS (SELECT column_name FROM table_name WHERE condition);

SQL EXISTS Examples

The following SQL statement returns TRUE and lists the suppliers with a product price less than 20:

SELECT SupplierName FROM Suppliers WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);

The following SQL statement returns TRUE and lists the suppliers with a product price equal to 22:

SELECT SupplierName FROM Suppliers WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price = 22);

The SQL ANY and ALL Operators

The ANY and ALL operators are used with a WHERE or HAVING clause.

The ANY operator returns true if any of the subquery values meet the condition.

The ALL operator returns true if all of the subquery values meet the condition.

ANY Syntax

SELECT column_name(s) FROM table_name WHERE column_name operator ANY (SELECT column_name FROM table_name WHERE condition);

ALL Syntax

SELECT column_name(s) FROM table_name WHERE column_name operator ALL (SELECT column_name FROM table_name WHERE condition);

SQL ANY Examples

The ANY operator returns TRUE if any of the subquery values meet the condition.

The following SQL statement returns TRUE and lists the product names if it finds ANY records in the OrderDetails table that quantity = 10:

SELECT ProductName FROM Products WHERE ProductID = ANY (SELECT ProductID FROM OrderDetails WHERE Quantity = 10);

The following SQL statement returns TRUE and lists the product names if it finds ANY records in the OrderDetails table that quantity > 99;

SELECT ProductName FROM Products WHERE ProductID = ANY (SELECT ProductID FROM OrderDetails WHERE Quantity > 99);

SQL ALL Example

The ALL operator returns TRUE if all of the subquery values meet the condition.

The following SQL statement returns TRUE and lists the product names if ALL the records in the OrderDetails table has quantity = 10 (this example will return FALSE, because not ALL records in the OrderDetails has quantity = 10):

SELECT ProductName FROM Products WHERE ProductID = ALL (SELECT ProductID FROM OrderDetails WHERE Quantity = 10);

The SQL SELECT INTO Statement

The SELECT INTO statement copies data from one table into a new table.

SQL SELECT INTO Examples

SELECT * INTO CustomersBackup2017 FROM Customers;

The following SQL statement uses the IN clause to copy the table into a new table in another database.

SELECT * INTO CustomersBackup2017 IN 'Backup.mdb' FROM Customers;

The following SQL statement copies only a few columns into a new table.

SELECT CustomerName, ContactName INTO CustomersBackup2017 FROM Customers;

The following SQL statement copies data from more than one table into a new table.

SELECT Customers.CustomerName, Orders.OrderID INTO CustomersOrderBackup2017 FROM Customers LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

The SQL INSERT INTO SELECT Statement

The INSERT INTO SELECT statement copies data from one table and inserts it into another table. INSERT INTO SELECT requires that data types in source and target tables match. The existing records in the target table are unaffected.

SQL INSERT INTO SELECT Examples

The following SQL statement copies "Suppliers" into "Customers" (the columns that are not filled with data, will contain NULL):

INSERT INTO Customers (CustomerName, City, Country) SELECT SupplierName, City, Country FROM Suppliers;

The following SQL statement copies "Suppliers" into "Customers" (fill all columns):

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) SELECT SupplierName, ContactName, Address, City, PostalCode, Country FROM Suppliers;

The SQL CASE Statement

The CASE statement goes through conditions and returns a value when the first condition is met. Once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the ELSE clause. If there is no ELSE part and no conditions are true, it returns NULL.


