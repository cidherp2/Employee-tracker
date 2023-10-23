INSERT INTO department(department_name)
VALUES      ('IT'),
            ('SERVICE'),
            ('HR'),
            ('TRAINING'),
            ('MKT');

INSERT INTO roles (title,salary,department_id)
VALUES      ('Web developer',3000,1),
            ('Pest Control expert',3500,2),
            ('Human resources intern',1500,3);
            ('Pest control trainer',3000,4);
            ('Digital MKT',3200,5);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES      ('Alejandro','Larios',1,1),
            ('Lino','Cornejo',2,2),
            ('Alexito','Fernandez',3,3);
            ('Fernando','Jimenez',4,4);
            ('Alejandra','Arévalo',5,5);