-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: localhost    Database: geek_store
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `description` text NOT NULL,
  `discount` int NOT NULL,
  `img` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Remera GOT',1200,'            Remera de Game of Thrones\r\n            ',20,'product-1652357500079.png'),(2,'Mate GOT',1000,'Mate de Game of Thrones',15,'mateGoT.png'),(3,'Gorra GOT',800,'Gorra de Game of Thrones',10,'gorraGoT.png'),(4,'Remera Big Bang Theory',1200,'Remera de Big Bang Theory',20,'remera-big-bang.png'),(5,'Mate Big Bang',1000,'Mate de Big Bang Theory',15,'mateBigBang.png'),(6,'Gorra Big Bang Theory',800,'Gorra de Big Bang Theory',10,'gorraBigBang.png'),(7,'Remera Spiderman',1200,'Remera de Spiderman',20,'remeraSpiderman.png'),(8,'Mate Spiderman',1000,'Mate de Spiderman',15,'mateSpiderman.png'),(9,'Gorra Spiderman',800,'Gorra de Spiderman',10,'gorraSpiderman.png'),(10,'Remera Superman',1200,'Remera de Superman',20,'remeraSuperman.png'),(11,'Mate Superman',1000,'Mate de Superman',15,'mateSuperman.png'),(12,'Gorra Superman',800,'Gorra de Superman',10,'gorraSuperman.png'),(15,'Remera blanca GOT',1200,'Remera blanca de Game of Thrones',20,'product-1652362661914.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `user` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Arya Stark','arya','arya@got.com','Winterfell','$2a$15$P7n8VbZGU8eLMdXnmPnf8OL51KDiSV1jLuuG3hq649tVAZvu9uYdS','profilePicture-1652367842644.png'),(2,'Peter Parker','spiderman','spiderman@marvel.com','Nueva York','$2a$15$.kKUZ0vUqFtcJ0BDwBwyDe9DrsI57feu5PvYEHdmanQ012CbOOhC.','profilePicture-1652367857591.png'),(3,'Sheldon Cooper','shelly','shelly@bigbang.com','California','$2a$15$ouHhb//x3RZ298UX/lq4du5vPHV9uhl1NcobAWLuGEE.QfyAVtZki','profilePicture-1652368465032.png'),(4,'Clark Kent','superman','superman@dc.com','Metrópolis','$2a$15$YBDbVUIE2p4ZE..lxaAfQuPL9I4o19/IBtVzzLSgDREsKXrcmfYyS','profilePicture-1652367877092.png'),(5,'Lucia','lucia1','lu@gmail.com','Barcelona','$2a$15$tB2R5734jmDI4SDeRgi6yusoz6q1C1FElFwwfHNt7Ld3adtvtnPG6','default.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'geek_store'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-17  0:27:52
