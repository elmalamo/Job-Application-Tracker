CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    company VARCHAR(100),
    position VARCHAR(100),
    status VARCHAR(50),
    notes TEXT,
    applied_at DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);