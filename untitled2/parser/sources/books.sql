
-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Апр 11 2017 г., 15:41
-- Версия сервера: 10.0.28-MariaDB
-- Версия PHP: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `u973479838_cbs`
--

-- --------------------------------------------------------

--
-- Структура таблицы `books`
--

CREATE TABLE IF NOT EXISTS `books` (
  `id` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `10_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `10_B` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `10_D` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `10_C` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `101_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `102_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `200_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `200_B` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `200_E` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `200_F` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `200_G` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `205_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `205_B` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `210_C` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `210_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `210_X` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `210_Y` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `210_D` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `215_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `215_1` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `215_C` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `215_D` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `215_3` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `225_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_C` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_2` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_E` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_F` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_G` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_D` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_H` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_Z` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_V` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_T` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_I` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `461_X` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `60_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `600_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `600_G` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `600_B` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `600_1` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `600_C` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `600_D` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `600_F` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `600_R` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `606_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `606_C` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `606_O` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `606_1` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `621_1` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `629_B` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `700_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `700_B` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `700_G` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `700_C` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `700_F` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `701_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `701_B` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `702_4` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `702_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `702_B` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `702_C` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `900_T` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `900_B` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `900_C` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `900_9` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `903_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `907_C` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `907_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `907_B` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `908_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `912_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `919_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `919_K` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `919_N` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `920_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `923_H` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `923_I` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `961_Z` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `961_U` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `961_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `961_B` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `961_G` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `964_A` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
