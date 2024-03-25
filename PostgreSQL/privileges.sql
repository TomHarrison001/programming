select * from manufacturing.products;
select * from human_resources.employees;

set role hr_manager;

reset role;

grant usage on schema human_resources to hr_manager;
grant select on all tables in schema human_resources to hr_manager;
grant all on all tables in schema human_resources to hr_manager;

reset role;
revoke all on all tables in schema human_resources from hr_manager;
revoke usage on schema human_resources from hr_manager;
drop role hr_manager;