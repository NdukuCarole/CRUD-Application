use studentdb;

lock tables `student` write;
insert into `student` values(1, 'Caroline Nduku', 5332, 17, 'Harlequin'), (2, 'Lizzo Beating', 5333, 16, 'Magenta'),(3, 'Niall Horan', 5334, 15, 'Green'),(4, 'Gigi Hadid', 5335, 19, 'Cyan');
unlock tables;