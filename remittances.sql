-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2025 at 12:12 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `payroll`
--

-- --------------------------------------------------------

--
-- Table structure for table `remittances`
--

CREATE TABLE `remittances` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `withHoldingTax` varchar(255) NOT NULL,
  `personalLifeRet` varchar(255) NOT NULL,
  `gsisSalarayLoan` varchar(255) NOT NULL,
  `gsisPolicyLoan` varchar(255) NOT NULL,
  `gfal` varchar(255) NOT NULL,
  `cpl` varchar(255) NOT NULL,
  `mpl` varchar(255) NOT NULL,
  `mplLite` varchar(255) NOT NULL,
  `emergencyLoan` varchar(255) NOT NULL,
  `totalGsisDeds` varchar(255) NOT NULL,
  `pagibigFundCont` varchar(255) NOT NULL,
  `pagibig2` varchar(255) NOT NULL,
  `multiPurpLoan` varchar(255) NOT NULL,
  `totalPagibigDeds` varchar(255) NOT NULL,
  `philhealth` varchar(255) NOT NULL,
  `disallowance` varchar(255) NOT NULL,
  `landbankSalaryLoan` varchar(255) NOT NULL,
  `earistCreditCoop` varchar(255) NOT NULL,
  `feu` varchar(255) NOT NULL,
  `mtslaSalaryLoan` varchar(255) NOT NULL,
  `savingAndLoan` varchar(255) NOT NULL,
  `totalOtherDeds` varchar(255) NOT NULL,
  `totalDeds` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `remittances`
--
ALTER TABLE `remittances`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `remittances`
--
ALTER TABLE `remittances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
