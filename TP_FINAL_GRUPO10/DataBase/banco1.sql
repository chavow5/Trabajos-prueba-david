-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: banco1
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `idcliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `apellido` varchar(45) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `usuario` varchar(45) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `email` varchar(45) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `dni` varchar(45) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `telefono` varchar(45) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `direccion` varchar(45) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `fechaNacimiento` datetime DEFAULT NULL,
  PRIMARY KEY (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'david','santillan','chavo123','david@gmial.com','43233882','3804232232','jauretche','2001-12-19 00:00:00'),(2,'keko','valles','kekito123','keko@gmail.com','441224452','3804324584','noce 300','2003-05-27 00:00:00'),(3,'matias','monardez','mati987','elmati@gmail.com','43791582','3804232232','ocampo 1320','2001-12-20 00:00:00'),(4,'javier','ruarte','javi123','javi@gmail.com','43791382','3804232232','peron 6120','2001-12-20 00:00:00'),(5,'ignacio','romero','romerow6','romero@gmial.com','43123314','3804232232',' ocampo 1320','2001-12-20 00:00:00'),(6,'david','Pasa',NULL,NULL,'44123456','3804987654','nose100','2003-03-12 00:00:00'),(7,'keko123','mundo','chavo124','kekomunbdo@gmail.com','4522451','33293120','la redondita','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaccion`
--

DROP TABLE IF EXISTS `transaccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaccion` (
  `idtransaccion` int NOT NULL AUTO_INCREMENT,
  `cuentaOrigen` varchar(45) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `cuentaDestino` varchar(45) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `monto` varchar(45) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `fecha` varchar(45) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `descripcion` varchar(45) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`idtransaccion`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaccion`
--

LOCK TABLES `transaccion` WRITE;
/*!40000 ALTER TABLE `transaccion` DISABLE KEYS */;
INSERT INTO `transaccion` VALUES (1,'david','ramirez','100','19/05/2023','pizzas'),(2,'keko','santillan','300','ocampo 200','empanadas'),(3,'agustin','romero','60','españa 300','cancha futbol'),(4,'lucas','santander','800','peru 493','metegol'),(5,'leonardo','perez','500','san martin 409','pool'),(8,'matias','sanchez','400','rivadavia 400','pileta'),(9,'segio','romero','10','chilecito 560','prueba'),(10,'martin ','demichelis','55','aruco 235',NULL);
/*!40000 ALTER TABLE `transaccion` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-29 23:01:59
