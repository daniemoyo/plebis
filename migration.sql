DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS wallet CASCADE;
DROP TABLE IF EXISTS currency CASCADE;


CREATE TABLE users (
    user_id serial NOT NULL,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);

CREATE TABLE wallet (
    wallet_id serial NOT NULL,
    address TEXT NOT NULL,
    pri_key TEXT NOT NULL,
    users_id INTEGER,
    currency_id INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (wallet_id)
);
CREATE TABLE currency (
    currency_id serial NOT NULL,
    name TEXT NOT NULL,
    abbreviation TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (currency_id)
);

insert into users ( username, email, password) values ('spiquard0', 'daniel', '1234');
insert into users ( username, email, password) values ('bpym1', 'admin', '123456');

insert into wallet ( address, pri_key, users_id, currency_id) values ( '1HX6tk8TcdFnAb5m5yA99VNGmEL4vDhFfh','sadfsdfasdfassd', 1, 1);
insert into wallet ( address, pri_key, users_id, currency_id) values ( '18SVu3g8c9RhfB5Xw9E14zFgLsaHvZrgCE','sadfasdfasdfdsd', 2, 2);

insert into currency ( name, abbreviation ) values ( 'BITCOIN', 'btc');
insert into currency ( name, abbreviation ) values ( 'DOGECOIN', 'doge');
insert into currency ( name, abbreviation) values ( 'ALGORAND', 'algo');
insert into currency ( name, abbreviation) values ( 'ETHERIUM', 'eth');