CREATE TABLE IF NOT EXISTS `user`(
-- essential user data
user_id int,
user_password varchar(1024),
user_nickname varchar(64),
user_email varchar(256),
CONSTRAINT user_pk PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS file_storage(
user_id int,
file_id bigint AUTO_INCREMENT,
file_path varchar(1024),
CONSTRAINT file_pk PRIMARY KEY (file_id),
CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES `userfile_storage`(user_id)
);