-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 186.202.152.92
-- Generation Time: 09-Fev-2020 às 12:26
-- Versão do servidor: 5.6.40-84.0-log
-- PHP Version: 5.6.40-0+deb8u7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ds2019`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `endereco` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `nome` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `telefone` varchar(255) COLLATE latin1_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id`, `email`, `endereco`, `nome`, `telefone`) VALUES
(18, 'fernandadasilva@gmail.com', 'Rua Santa Luzia, 58', 'Fernanda da Silva', '98456-3546'),
(19, 'jehtavares@hotmail.com', 'Rua Valmir Hermelino Machado, 100', 'Jefferson Tavares', '99844-5211'),
(20, 'victorrocha23@gmail.com', 'Rua José Gaidzinsk 88', 'Victor Rocha', '99455-6488');

-- --------------------------------------------------------

--
-- Estrutura da tabela `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `servicos`
--

CREATE TABLE `servicos` (
  `id` bigint(20) NOT NULL,
  `descricao_problema` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `estagio` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `marca_equipamento` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `tipo_equipamento` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `cliente_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `servicos`
--

INSERT INTO `servicos` (`id`, `descricao_problema`, `estagio`, `marca_equipamento`, `tipo_equipamento`, `cliente_id`) VALUES
(14, 'Tela quebrada, proceder com a troca.', 'pendente', 'iphone 8', 'Celular', 18),
(15, 'Possui problema no teclado, algumas teclas não funcionam.', 'finalizado', 'Samsung', 'Notebook', 19),
(16, 'Está com o plug danificado, realizar a troca do plug e do cabo.', 'pendente', 'Jbl clip2', 'Caixa de som', 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `servicos`
--
ALTER TABLE `servicos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cliente_fk` (`cliente_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `servicos`
--
ALTER TABLE `servicos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `servicos`
--
ALTER TABLE `servicos`
  ADD CONSTRAINT `cliente_fk` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
