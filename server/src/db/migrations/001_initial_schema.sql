CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,

    first_name VARCHAR(100) NOT NULL,

    last_name VARCHAR(100) NOT NULL,

    company VARCHAR(150),

    email VARCHAR(255) UNIQUE NOT NULL,

    password_hash TEXT NOT NULL,

    role VARCHAR(25) NOT NULL DEFAULT 'client',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,

    client_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    name VARCHAR(255) NOT NULL,

    project_type VARCHAR(100),

    status VARCHAR(50) DEFAULT 'Scheduled',

    description TEXT,

    flight_date DATE,

    delivery_date DATE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS deliverables (
    id SERIAL PRIMARY KEY,

    project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,

    filename VARCHAR(255) NOT NULL,

    filepath TEXT NOT NULL,

    filetype VARCHAR(50),

    filesize BIGINT,

    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);