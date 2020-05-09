use hankdb;

drop table if exists blogPost;
drop table if exists user;

create table user
(
    dttmCreated     timestamp  default CURRENT_TIMESTAMP not null,
    dttmUpdated     timestamp  default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    id              int auto_increment primary key,
    username        varchar(16) unique,
    password        varchar(16)
);

create table blogPost
(
    dttmCreated      timestamp  default CURRENT_TIMESTAMP not null,
    dttmUpdated      timestamp  default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    id               int auto_increment primary key,
    userId           int not null,
    title            varchar(128)                         not null,
    content          text charset utf8                    not null,
    constraint blogPost_user foreign key (userId) references user (id)
);

insert into user (username, password) values ('henry', 'pword');
insert into blogPost (userId, title, content) values ((select id from user where username = 'henry'), 'blog title', 'blog content')

