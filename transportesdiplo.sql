-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 19-08-2022 a las 11:25:42
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `transportesdiplo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `imagen` varchar(250) DEFAULT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=70 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `fecha`, `imagen`, `cuerpo`) VALUES
(2, '¿Pueden multarme si mi perra se queda preñada? ¿Tengo que esterilizar a mi gato? Guía del proyecto de ley de bienestar animal', '2022-08-11', NULL, 'El anteproyecto de Ley de protección, derechos y bienestar de los animales, que fue aprobado a principio de agosto por el Gobierno e iniciará próximamente su tramitación parlamentaria por la vía de urgencia, regula el trato que deberán recibir los animales de compañía, un colectivo muy numeroso. Según el preámbulo del texto, en España hay 13 millones de ellos identificados oficialmente (un 93%, perros) y un número similar'),
(3, 'Tarifa, cuando el éxito amenaza con colapsar el paraíso', '2022-08-11', NULL, 'Una chica que parece recién salida del festival Coachella —trenza en el pelo, pulsera y tobillera de conchas— departe con un joven vestido con una estridente camisa hawaiana mientras beben un smoothie verde radiactivo. Aunque no lo parezca, es mediodía de un día laborable de agosto en el Mercado Público de Tarifa. Mariluz Ruiz y su carro de la compra dejan atrás la terraza donde los dos turistas desayunan relajadamente uno de esos brunch que proliferan por las pizarras del centro de la localidad gaditana, hasta que la vecina de unos 60 años se topa con su amiga Paqui. Y explota enfadada: “Tarifa era un pueblo blanco, limpio, donde se vivía bien. Pero los de aquí ya no vivimos bien”.'),
(4, 'Al mediodía  Sergio Massa se reúne este viernes con la Mesa de Enlace', '2022-08-11', NULL, 'Este viernes al mediodía se realizará la esperada reunión entre el nuevo ministro de Economía, Sergio Massa y la Mesa de Enlace del campo. También participará Juan José Bahillo, el actual secretario de Agricultura de la Nación.El encuentro se realizará en General Las Heras, provincia de Buenos Aires.\r\n\r\nMientras esperan que se concrete la postergada reunión, los referentes del campo se mostraron en los últimos días alineados en las principales urgencias, y los temas que cosecharon definiciones más punzantes fueron los vinculados con la macroeconomía y el aporte que el agro puede hacer a la salida de la crisis.\r\n\r\n“Hay que solucionar temas básicos de la macroeconomía porque es muy difícil trabajar con una inflación de 60 o 70 por ciento. También es básico evitar todas estas cuestiones como'),
(5, 'Josep Borrell: “Los europeos debemos estar dispuestos a pagar un precio por apoyar a Ucrania y mantener la unidad”', '2022-08-11', NULL, 'texto de prueba se agrago noticia'),
(6, 'modifique', '0000-00-00', NULL, 'e'),
(14, 'esta novedad ha sido modificada nuevamente', '0000-00-00', NULL, 'ningun texto mmmmmmmmmmmmmmmmmmmm'),
(23, 'qqqqqqqqqqqqqqqqqqqqqqqqq', '0000-00-00', '', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqq'),
(60, 'esta la modifique desde la base de datos', '2022-08-10', NULL, 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'),
(61, '', '0000-00-00', '', ''),
(68, '', '0000-00-00', '', ''),
(69, '', '0000-00-00', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Laura', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
