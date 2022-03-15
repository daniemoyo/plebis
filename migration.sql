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

insert into users (user_id, username, email, password, created_at) values (1, 'spiquard0', 'daniel', '1234', '2022-03-01 07:05:09');
insert into users (user_id, username, email, password, created_at) values (2, 'bpym1', 'admin', '123456', '2022-01-26 17:45:06');
insert into users (user_id, username, email, password, created_at) values (3, 'sbonanno2', 'ddacey2@independent.co.uk', 'Wt1PFgv4UOl2', '2021-07-03 13:50:01');
insert into users (user_id, username, email, password, created_at) values (4, 'gwittering3', 'kigonet3@xinhuanet.com', '5ZxCX3qJfto', '2021-08-12 20:59:43');
insert into users (user_id, username, email, password, created_at) values (5, 'sstammler4', 'tfiltness4@diigo.com', 'iIDDptKJzqYB', '2021-03-11 20:36:17');
insert into users (user_id, username, email, password, created_at) values (6, 'gdacca5', 'cbaxstare5@typepad.com', 'AJEph59JMCz', '2022-02-19 19:08:48');
insert into users (user_id, username, email, password, created_at) values (7, 'strippitt6', 'sausting6@admin.ch', 'LJOrUjX7', '2021-12-01 23:53:20');
insert into users (user_id, username, email, password, created_at) values (8, 'lruppele7', 'ljakeway7@jigsy.com', 'XdTzngc', '2022-01-08 02:56:27');
insert into users (user_id, username, email, password, created_at) values (9, 'onoddles8', 'dsmithend8@liveinternet.ru', 'UHFvaq', '2022-02-16 10:48:31');
insert into users (user_id, username, email, password, created_at) values (10, 'rleland9', 'bmckag9@theglobeandmail.com', 'r2iSS323', '2021-09-19 20:30:09');

insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (1, '1HX6tk8TcdFnAb5m5yA99VNGmEL4vDhFfh', 1, 1, '2021-05-30 05:34:15');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (2, '18SVu3g8c9RhfB5Xw9E14zFgLsaHvZrgCE', 2, 2, '2021-06-04 14:03:07');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (3, '1FHJhFTifKygv8DjdjjjWucH2oi31jisKQ', 3, 3, '2021-08-31 20:02:39');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (4, '1FZkFKJJduRrLafoc4Yhrw5zKHMHvmifSz', 4, 1, '2021-06-09 04:40:57');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (5, '18thv7XzwyZYmz2Kr6TXoMXZ9kuRz9cyZ6', 5, 2, '2022-01-07 14:07:23');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (6, '12A1rckxoztu7m6m83kEKQKMtgamX2z7zT', 6, 3, '2021-07-16 06:05:09');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (7, '16D4S13wqGGbVfHiwqsVae5i5uSVEuLEMh', 7, 1, '2021-10-12 15:00:58');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (8, '14hrayWo44M7z4noPWDf2Ha1LH9zm5ZaVs', 8, 2, '2021-04-08 02:12:43');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (9, '1FNMuDGLjFRn5VzjeNf76QXHcuWmDMHTtu', 9, 3, '2021-09-24 16:51:51');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (10, '1N1rDw3mktxacuHxFsqWvdRCFDCwRpngFd', 10, 1, '2022-02-20 11:47:34');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (11, '12PowqaKx8SSKDrtMEHCQUraWEcwynug1x', 10, 1, '2021-11-14 11:40:49');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (12, '1PCYfWFrWPYCsiDc9mTDKKM31GqxvNqSPy', 10, 2, '2021-03-13 01:08:31');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (13, '1N5ac7zezjz1CEyzXfDqemFPK7GcmTnHF6', 1, 1, '2021-03-16 07:21:33');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (14, '16QiNN3fYGvcSMAnjhqMr71HBirNvftkXm', 10, 4, '2021-04-17 03:56:36');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (15, '1NAvNcjAndUdUDZkia54dXjuEtEN8bjfFc', 1, 2, '2021-08-24 14:32:09');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (16, '13DnofQRG7pUrPx74Vz3ruQDS91QiBLS1d', 6, 2, '2022-02-18 21:46:58');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (17, '19qRTtYot9jn1o9x3AeuTdUep64AAqJJFF', 7, 3, '2021-11-12 17:44:23');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (18, '17EkHphwK67JWSkWQfFZjd1ui3givCqDc5', 8, 1, '2021-03-31 07:31:46');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (19, '1P8MBHjfTtvDEgXDZYFEbHbNaMHwqTnwRd', 9, 3, '2021-09-05 11:52:37');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (20, '18vTo8pinNdDR4Bk2F77hVP1CeTMZbj6KJ', 2, 2, '2022-01-31 15:58:13');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (21, '1Ab5vLegt1gfoGTaStVhJtidgRoUQ1AJZp', 9, 1, '2021-07-07 06:47:32');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (22, '19nXVd8ooyMYpYvyh2Xvki67xwHwh4Fss5', 2, 1, '2021-04-08 05:03:14');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (23, '12c6kQNKWkexkWFd4nJsmLxEQ5FMZqzvqW', 3, 2, '2021-06-22 19:56:34');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (24, '1NjKKiQpmH3sGfkNAoD9rFMNPxvwVJtbBQ', 9, 2, '2021-12-16 07:53:23');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (25, '1GtZ6YuQ1YdsBHbpnSNWNuRA13byjPZdep', 5, 4, '2021-10-18 19:27:52');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (26, '13RRxip1avgaMbgLuYPtbdR2wufLt67g94', 8, 4, '2021-09-03 14:41:49');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (27, '13CbJiQVofArTcpUu1id7pqThEH8uHZsPu', 7, 4, '2022-03-05 13:10:22');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (28, '1LMYeidNCpcaeKpng67GJVAN9XHC89hLrF', 8, 4, '2022-01-19 07:46:06');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (29, '1NsP83pBsStvgDkCyfvAwG2BUaNVSY1kzh', 9, 4, '2021-07-22 02:18:25');
insert into wallet (wallet_id, address, users_id, currency_id, created_at) values (30, '1JQibT5pKr7sfmAgknsSPKatVi1YiGK6nh', 3, 4, '2022-03-05 01:08:55');

insert into currency (currency_id, name, abbreviation, created_at) values (1, 'Bitcoin', 'BTC', '2021-09-24 06:54:16');
insert into currency (currency_id, name, abbreviation, created_at) values (2, 'Dogecoin', 'DOGE', '2022-02-19 19:08:52');
insert into currency (currency_id, name, abbreviation, created_at) values (3, 'USD Coin', 'USDC', '2021-12-19 19:33:06');
insert into currency (currency_id, name, abbreviation, created_at) values (4, 'Algorand', 'ALGO', '2021-12-18 01:11:07');