# question
##  1)
- DI  - a design pattern and mechanism for creating and delivering some parts of an application to other parts of an application that require them,
- allows components, services, and other classes to declare their dependencies without creating them explicitly
- Components and services can be reused across different parts of the application or even different applications since they do not manage their dependencies.
- It centralizes the management of class dependencies, making the code easier to maintain and modify.
- Can pass different dependence using ngmodules
- Injection Options


    Provider in @Injectable
    Provider in NgModule
    (use factory, useValue,useClass,useExisting)
    Provider in Component


## 2)
    SELECT id, name, email, created_at
    FROM users
    ORDER BY created_at DESC
    LIMIT 10;

- Create an index on the created_at column to speed up the sorting operation:
- implement query caching at the application level for frequently accessed queries.
## 3)
### 2xx: Success

- 200 OK: The request was successful, and the server returned the requested resource.
- 201 Created: The request was successful and a new resource was created.

### 4xx: Client Error

- 400 Bad Request: The server could not understand the request due to invalid syntax.
- 401 Unauthorized: The client must authenticate itself to get the requested response.
- 403 Forbidden: The client does not have access rights to the content.
- 404 Not Found: The server can not find the requested resource.

### 5xx: Server Error

- 500 Internal Server Error: The server has encountered a situation it does not know how to handle.
- 502 Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.

## 4) 

      SELECT
        u.name,
        u.email,
        COUNT(o.id) AS order_count,
        SUM(o.amount) AS total_spent
      FROM
        users u
      JOIN
        orders o ON u.id = o.user_id
      WHERE
        o.order_date >= NOW() - INTERVAL '1 month'
      GROUP BY
        u.id
      HAVING
        COUNT(o.id) > 5
      ORDER BY
        total_spent DESC;


