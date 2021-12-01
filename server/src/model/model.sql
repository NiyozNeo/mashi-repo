CREATE TABLE clinics(
    clinic_id serial PRIMARY KEY,
    clinic_name varchar(32) not null
);

CREATE TABLE users(
    user_id serial PRIMARY KEY,
    user_name varchar(32) not null,
    user_password text not null,
    user_phone varchar(32) not null,
    is_admin boolean DEFAULT false,
    admin_clinic int references clinics(clinic_id) DEFAULT NULL,
    user_created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories(
    category_id serial PRIMARY KEY,
    category_name varchar(32) not NULL,
    category_clinic int REFERENCES clinics(clinic_id) not NULL
);

CREATE TABLE queues(
    queue_id serial PRIMARY KEY,
    queue_created_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    queue_user int REFERENCES users(user_id),
    queue_clinic int REFERENCES clinics(clinic_id),   
    queue_category int REFERENCES categories(category_id),
    is_verified boolean DEFAULT FALSE
);

CREATE TABLE archived_queues(
    archived_queues_id serial PRIMARY KEY,
    archived_queue_created_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    archived_queue_user int REFERENCES users(user_id),
    archived_queue_clinic int REFERENCES clinics(clinic_id),
    archived_category int REFERENCES categories(category_id),
    is_verified boolean
);

CREATE OR REPLACE FUNCTION archived_func() 
RETURNS TRIGGER 
LANGUAGE plpgsql 
AS 
$$ 
BEGIN
    INSERT INTO
        archived_queues (archived_queue_user, archived_queue_clinic)
    VALUES
        (OLD.queue_user, OLD.queue_clinic);

RETURN OLD;

END 
$$;

CREATE TRIGGER delete_queues 
BEFORE DELETE ON users 
FOR EACH ROW 
EXECUTE PROCEDURE archived_func();
