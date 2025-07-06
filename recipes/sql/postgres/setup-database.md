# Setup a database on an existing Postgres server

. Connect to PostgreSQL as an admin user:

```bash
psql -U postgres
```

2. Create the new database:

```sql
CREATE DATABASE mydatabase;
```

3. Verify the database was created:

```sql
\l
```

## Create a New Role (User)

1. Create a new role with password authentication:

```sql
CREATE ROLE myuser WITH LOGIN PASSWORD 'secure_password';
```

2. Grant this role permissions to connect to the new database:

```sql
GRANT CONNECT ON DATABASE mydatabase TO myuser;
```

3. Connect to the new database:

```sql
\c mydatabase
```

4. Grant permissions on the public schema:

```sql
GRANT USAGE ON SCHEMA public TO myuser;
GRANT CREATE ON SCHEMA public TO myuser;
```

5. Grant privileges to create tables and use sequences:

```sql
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO myuser;
GRANT SELECT, USAGE ON ALL SEQUENCES IN SCHEMA public TO myuser;
```

6. Set default privileges for future tables and sequences:

```sql
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO myuser;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, USAGE ON SEQUENCES TO myuser;
```

## Verify the Setup

1. Exit from the PostgreSQL prompt:

```sql
\q
```

2. Connect to the database as the new user:

```bash
psql -U myuser -d mydatabase
```

3. Try creating a test table:

```sql
CREATE TABLE test (id SERIAL PRIMARY KEY, name TEXT);
INSERT INTO test (name) VALUES ('test entry');
SELECT * FROM test;
```

4. Verify that the user cannot access other databases:

```sql
\c postgres
```
This should fail with a permission denied error.
