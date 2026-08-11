BEGIN;
create table "users" ("id" bigserial not null primary key, "name" varchar(255) not null, "email" varchar(255) not null, "email_verified_at" timestamp(0) without time zone null, "password" varchar(255) not null, "role" varchar(255) not null default 'user', "balance" decimal(15, 2) not null default '0', "tier" varchar(255) not null default 'Free', "status" varchar(255) not null default 'Active', "remember_token" varchar(100) null, "created_at" timestamp(0) without time zone null, "updated_at" timestamp(0) without time zone null);
alter table "users" add constraint "users_email_unique" unique ("email");
COMMIT;
