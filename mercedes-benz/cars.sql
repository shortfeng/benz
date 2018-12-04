SET NAMES UTF8;
DROP DATABASE IF EXISTS cars;
CREATE DATABASE cars CHARSET=UTF8;
USE cars;
CREATE TABLE cars_title(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    carSpecies VARCHAR(8),
    carModel VARCHAR(8),
    carName VARCHAR(64),
    titleMap VARCHAR(64),
    retailPrice VARCHAR(16),
    MonthlySupply VARCHAR(16)
);
INSERT INTO cars_title VALUES
(NULL,"C","轿车","长轴距C级轿车","img/car/c1.png","32.38","936"),
(NULL,"C","轿车","长轴距C级运动轿车","img/car/c2.png","31.08","898"),
(NULL,"C","轿车","标准轴距C级车运动版","img/car/c3.png","32.28","838"),
(NULL,"C","轿车","C级旅行轿车","img/car/c4.png","35.88","818"),
(NULL,"C","轿车","梅赛德斯-AMG C 43 4MATIC 特别版","img/car/c5.png","32.38","1028"),
(NULL,"C","轿车","梅赛德斯-AMG C 63","img/car/c6.png","32.38","973"),

(NULL,"E","轿车","长轴距E级轿车","img/car/e1.png","43.58",NULL),
(NULL,"E","轿车","长轴距E级运动轿车","img/car/e2.png","43.58",NULL),
(NULL,"E","轿车","标准轴距E级车运动版","img/car/e3.png","45.38",NULL),
(NULL,"E","轿车","梅赛德斯-AMG E 43 4MATIC 特别版","img/car/e4.png","91.88","1100"),
(NULL,"E","轿车","全新梅赛德斯-AMG E 63 S 4MATIC+特别版","img/car/e5.png","166.88","5716"),

(NULL,"S","轿车","S级轿车","img/car/s1.png","86.38","2747"),
(NULL,"S","轿车","梅赛德斯-迈巴赫S级轿车","img/car/s2.png","140.88","6252"),
(NULL,"S","轿车","梅赛德斯-AMG S 63 L 4MATIC+ 梅赛德斯-AMG S 65 L","img/car/s3.png","232.88","1347"),

(NULL,"A","轿车","A级车","img/car/a1.png","21.98","446"),
(NULL,"A","轿车","梅赛德斯-AMG A 45 4MATIC","img/car/a2.png","46.38","508"),

(NULL,"B","轿车","B级运动旅行车","img/car/b1.png","22.58","476"),

(NULL,"CLA","轿车","CLA运动轿车","img/car/cla1.png","23.78","596"),
(NULL,"CLA","轿车","梅赛德斯-AMG CLA 45 4MATIC","img/car/cla2.png","55.88","760"),

(NULL,"R","轿车","R级大型旅行车臻藏版","img/car/r1.png","54.88","2330"),

(NULL,"GLA","SUV","GLA SUV","img/car/sgla1.png","26.98",NULL),
(NULL,"GLA","SUV","梅赛德斯-AMG GLA 45 4MATIC","img/car/sgla2.png","53.88",NULL),

(NULL,"GLC","SUV","GLC SUV","img/car/sglc1.png","39.48","1288"),
(NULL,"GLC","SUV","GLC轿跑SUV","img/car/sglc2.png","46.68",NULL),
(NULL,"GLC","SUV","梅赛德斯-AMG GLC 43 4MATIC","img/car/sglc3.png","65.18","1110"),
(NULL,"GLC","SUV","梅赛德斯-AMG GLC 43 4MATIC 轿跑 SUV","img/car/sglc4.png","67.98","998"),

(NULL,"GLE","SUV","GLE SUV","img/car/sgle1.png","73.98",NULL),
(NULL,"GLE","SUV","GLE轿跑SUV","img/car/sgle2.png","86.08","2148"),
(NULL,"GLE","SUV","梅赛德斯-AMG GLE 43 4MATIC","img/car/sgle3.png","100.68",NULL),
(NULL,"GLE","SUV","梅赛德斯-AMG GLE 63 4MATIC","img/car/sgle4.png","179.88",NULL),
(NULL,"GLE","SUV","梅赛德斯-AMG GLE 43 4MATIC 轿跑 SUV","img/car/sgle5.png","105.98","1828"),
(NULL,"GLE","SUV","梅赛德斯-AMG GLE 63 4MATIC 轿跑 SUV","img/car/sgle6.png","192.18","1028"),

(NULL,"GLS","SUV","GLS SUV","img/car/sgls1.png","102.28","2958"),
(NULL,"GLS","SUV","梅赛德斯-AMG GLS 63 4MATIC","img/car/sgls1.png","192.18","3866"),

(NULL,"G","SUV","全新G级越野车","img/car/sg1.png","158.88","2958"),
(NULL,"G","SUV","全新梅赛德斯-AMG G 63","img/car/sg2.png","219.88",NULL),

(NULL,"C","跑车","C级轿跑车","img/car/pc1.png","35.88",NULL),
(NULL,"C","跑车","梅赛德斯-AMG C 63 轿跑车","img/car/pc2.png","95.88","999"),

(NULL,"E","跑车","E级轿跑车","img/car/pe1.png","52.88","1189"),
(NULL,"E","跑车","全新E级敞篷轿跑车","img/car/pe2.png","64.28",NULL),

(NULL,"S","跑车","新一代S级轿跑车","img/car/ps1.png","124.38","3427"),
(NULL,"S","跑车","新一代梅赛德斯-AMG S 63 4MATIC+ 轿跑车","img/car/ps2.png","234.78","1223"),

(NULL,"CLS","跑车","全新CLS四门轿跑车","img/car/pcls1.png","64.88",NULL),

(NULL,"SL","跑车","SL敞篷跑车","img/car/psl1.png","101.68",NULL),

(NULL,"SLC","跑车","SL敞篷跑车","img/car/pslc1.png","51.88",NULL),

(NULL,"GT","跑车","梅赛德斯-AMG GT 梅赛德斯-AMG GT S 梅赛德斯-AMG GT C","img/car/pgt1.png","132.18",NULL),
(NULL,"GT","跑车","梅赛德斯-AMG GT R","img/car/pgt2.png","215.58",NULL),

(NULL,"V","MPV","V级豪华多功能车","img/car/v1.png","48.50","7267"),

(NULL,"Vito","MPV","威霆高端商务车","img/car/vito1.png","29.60","4502");
