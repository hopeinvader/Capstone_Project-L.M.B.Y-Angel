ALTER TABLE entrepneurs
ADD COLUMN name varchar;

alter table entrepneurs 
drop column category;

alter table entrepneurs 
drop column title;

alter table entrepneurs 
add column title varchar;

alter table entrepneurs 
drop column company;

alter table profile_entrepneurs 
drop column company_id;

drop table company_entrepneurs;

alter table entrepneurs 
drop column about;

ALTER TABLE entrepneurs
ADD COLUMN about varchar;

alter table entrepneurs 
drop column profile;

alter table entrepneurs 
drop column minimum_amount;

alter table entrepneurs
drop column achieve_amount ;

alter table entrepneurs
drop column current_amount ;

ALTER TABLE entrepneurs
ADD COLUMN target_amount int;

ALTER TABLE entrepneurs
ADD COLUMN minimum_amount int;

select * from entrepneurs
order by timestamp desc;

alter table entrepneurs 
add column timestamp timestamp default current_timestamp;

alter table investors 
add column timestamp timestamp default current_timestamp;

alter table investors 
drop column about;

alter table investors 
drop column category;

alter table investors 
drop column criteria;

alter table investors 
drop column expertise;

ALTER TABLE investors
ADD COLUMN about varchar;

ALTER TABLE investors
ADD COLUMN about varchar;

ALTER TABLE investors
ADD COLUMN expertise varchar;

ALTER TABLE investors
ADD COLUMN name varchar;

ALTER TABLE investors
ADD COLUMN maximum_amount int;

ALTER TABLE investors
ADD COLUMN minimum_amount int;

alter table investors
add column facebook_url varchar;

alter table investors
add column linkedin_url varchar;

alter table entrepneurs
add column facebook_url varchar;

alter table entrepneurs
add column linkedin_url varchar;

create table contact(
    id serial primary key,
    name varchar,
    email varchar,
    message varchar,
    posted_at timestamp
);

alter table entrepneurs
add column category varchar;