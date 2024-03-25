import sqlite3 as sq

fh = sq.connect("shop.db")
cursor = fh.cursor()

try:
    cursor.execute(
        """
    CREATE TABLE customers(
    CustomerID INTEGER PRIMARY KEY,
    Forename VARCHAR(20) NOT NULL,
    Surname VARCHAR(20) NOT NULL,
    Email VARCHAR(40) NOT NULL)
    """
    )

    cursor.execute(
        """
    CREATE TABLE products(
    ProductID INTEGER PRIMARY KEY,
    Productname VARCHAR(20) NOT NULL,
    Price REAL NOT NULL)
    """
    )

    cursor.execute(
        """
    CREATE TABLE orders(
    OrderID INTEGER PRIMARY KEY,
    CustomerID INTEGER NOT NULL,
    ProductID INTEGER NOT NULL,
    FOREIGN KEY(CustomerID) REFERENCES customers(CustomerID),
    FOREIGN KEY(ProductID) REFERENCES products(ProductID))
    """
    )

    data = [("tea", 1.50), ("biscuits", 0.5), ("newspaper", 0.75)]
    for param in data:
        cursor.execute(
            """
        INSERT INTO products(Productname, price)
        VALUES(?, ?)
        """,
            param,
        )
    data = [
        ("Tom", "Harrison", "tomharrison@email.com"),
        ("Conor", "Lane", "conorlane@email.com"),
        ("Phil", "Bailey", "philbailey@email.com"),
    ]
    sql_string = """
    INSERT INTO customers(Forename, Surname, Email)
    VALUES(?, ?, ?)
    """
    for param in data:
        cursor.execute(sql_string, param)
    data = [(1, 1), (1, 2), (1, 3), (2, 2), (2, 3), (3, 1)]
    sql_string = """
    INSERT INTO orders(CustomerID, ProductID)
    VALUES(?, ?)
    """
    for param in data:
        cursor.execute(sql_string, param)

    fh.commit()
    fh.close()


except sq.OperationalError:
    pass
