Use studentdb;

CREATE TABLE `student` (
`StdID` int(11) NOT NULL auto_increment,
`Name` varchar(45) DEFAULT NULL,
`RegNo` int(10) default null,
`Age` int(3) default null,
`Class` varchar(45) default null,
primary key(`StdID`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
