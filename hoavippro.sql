-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3308
-- Thời gian đã tạo: Th2 29, 2024 lúc 04:25 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `hoavippro`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) NOT NULL,
  `is_home` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `is_home`, `name`, `parent_id`) VALUES
(1, 1, 'Mô hình trưng bày', 0),
(2, 1, 'Đồ điện tử', 0),
(3, 1, 'Thời trang', 0),
(4, 0, 'Sản phẩm khác', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `feedback`
--

CREATE TABLE `feedback` (
  `id` bigint(20) NOT NULL,
  `created_at` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `subject_name` varchar(255) DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gallery`
--

CREATE TABLE `gallery` (
  `id` bigint(20) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `gallery`
--

INSERT INTO `gallery` (`id`, `thumbnail`, `product_id`) VALUES
(1, '1.jpg', 1),
(2, '1-1.jpg', 1),
(3, '1-2.jpg', 1),
(4, '1-3.jpg', 1),
(5, '2.jpg', 2),
(6, '2-1.jpg', 2),
(7, '2-2.jpg', 2),
(8, '2-3.jpg', 2),
(9, '3.jpg', 3),
(10, '3-1.jpg', 3),
(11, '3-2.jpg', 3),
(12, '3-3.jpg', 3),
(13, '4.jpg', 4),
(14, '4-1.jpg', 4),
(15, '4-2.jpg', 4),
(16, '4-3.jpg', 4),
(17, '5.jpg', 5),
(18, '5-1.jpg', 5),
(19, '5-2.jpg', 5),
(20, '5-3.jpg', 5),
(21, '6.jpg', 6),
(22, '6-1.jpg', 6),
(23, '6-2.jpg', 6),
(24, '6-3.jpg', 6),
(25, '7.jpg', 7),
(26, '7-1.jpg', 7),
(27, '7-2.jpg', 7),
(28, '7-3.jpg', 7),
(29, '8.jpg', 8),
(30, '8-1.jpg', 8),
(31, '8-2.jpg', 8),
(32, '8-3.jpg', 8),
(33, '9.jpg', 9),
(34, '9-1.jpg', 9),
(35, '9-2.jpg', 9),
(36, '9-3.jpg', 9),
(37, '10.jpg', 10),
(38, '10-1.jpg', 10),
(39, '10-2.jpg', 10),
(40, '10-3.jpg', 10),
(41, '11.jpg', 11),
(42, '11-1.jpg', 11),
(43, '11-2.jpg', 11),
(44, '11-3.jpg', 11),
(45, '12.jpg', 12),
(46, '12-1.jpg', 12),
(47, '12-2.jpg', 12),
(48, '12-3.jpg', 12),
(49, '13.jpg', 13),
(50, '13-1.jpg', 13),
(51, '13-2.jpg', 13),
(52, '13-3.jpg', 13),
(53, '14.jpg', 14),
(54, '14-1.jpg', 14),
(55, '14-2.jpg', 14),
(57, '15.jpg', 15),
(58, '15-1.jpg', 15),
(59, '15-2.jpg', 15),
(60, '15-3.jpg', 15),
(61, '16.jpg', 16),
(62, '16-1.jpg', 16),
(63, '16-2.jpg', 16),
(64, '16-3.jpg', 16),
(65, '17.jpg', 17),
(66, '17-1.jpg', 17),
(67, '17-2.jpg', 17),
(68, '17-3.jpg', 17),
(69, '18.jpg', 18),
(70, '18-1.jpg', 18),
(71, '18-2.jpg', 18),
(72, '18-3.jpg', 18),
(73, '19.jpg', 19),
(74, '19-1.jpg', 19),
(75, '19-2.jpg', 19),
(76, '19-3.jpg', 19),
(77, '20.jpg', 20),
(78, '20-1.jpg', 20),
(79, '20-2.jpg', 20),
(80, '20-3.jpg', 20),
(81, '21.jpg', 21),
(82, '21-1.jpg', 21),
(83, '21-2.jpg', 21),
(84, '21-3.jpg', 21),
(85, '22.jpg', 22),
(86, '22-1.jpg', 22),
(87, '22-2.jpg', 22),
(88, '22-3.jpg', 22),
(89, '23.jpg', 23),
(90, '23-1.jpg', 23),
(91, '23-2.jpg', 23),
(92, '23-3.jpg', 23),
(93, '24.jpg', 24),
(94, '24-1.jpg', 24),
(95, '24-2.jpg', 24),
(96, '24-3.jpg', 24),
(97, '25.jpg', 25),
(98, '25-1.jpg', 25),
(99, '25-2.jpg', 25),
(100, '25-3.jpg', 25),
(101, '26.jpg', 26),
(102, '26-1.jpg', 26),
(103, '27.jpg', 27),
(104, '27-1.jpg', 27),
(105, '27-2.jpg', 27),
(106, '27-3.jpg', 27),
(107, '28.jpg', 28),
(108, '28-1.jpg', 28),
(109, '28-2.jpg', 28),
(110, '28-3.jpg', 28),
(111, '29.jpg', 29),
(112, '29-1.jpg', 29),
(113, '30.jpg', 30),
(114, '30-1.jpg', 30),
(115, '30-2.jpg', 30),
(116, '30-3.jpg', 30),
(117, '31.jpg', 31),
(118, '32.jpg', 32),
(119, '32-1.jpg', 32),
(120, '32-2.jpg', 32),
(121, '33.jpg', 33),
(122, '33-1.jpg', 33),
(123, '33-2.jpg', 33),
(124, '33-3.jpg', 33);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderdetail`
--

CREATE TABLE `orderdetail` (
  `id` bigint(20) NOT NULL,
  `num` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `total_money` int(11) NOT NULL,
  `orders_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orderdetail`
--

INSERT INTO `orderdetail` (`id`, `num`, `price`, `total_money`, `orders_id`, `product_id`) VALUES
(1, 1, 130, 130, NULL, NULL),
(2, 1, 130, 130, NULL, NULL),
(3, 1, 130, 130, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `total_money` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `address`, `email`, `fullname`, `note`, `order_date`, `phone_number`, `status`, `total_money`, `user_id`) VALUES
(2, 'Thành Phố Thủ Đức', 'nguyenbaohoa@gmail.com', 'Nguyễn Duy Hòa', 'Good Night', '2024-01-23', NULL, NULL, 85, NULL),
(3, 'Quan 9', 'lyly@gmail.com', 'lyly', 'Lo Vo Yu', '2024-01-23', '1234567890', NULL, 400, NULL),
(4, 'Quan 9', 'lyly@gmail.com', 'lyly', 'Lo Vo Yu', '2024-01-23', '1234567890', NULL, 400, NULL),
(5, 'Quan 9', 'lyly@gmail.com', 'lyly', '', '2024-01-23', '1234567890', NULL, NULL, NULL),
(6, 'Thành Phố Thủ Đức', 'nguyenbaohoa02@gmail.com', 'Nguyễn Duy Hòa', 'Giao Nhanh Nhanh nha', '2024-01-23', '0967676767', NULL, 35, NULL),
(7, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', 'test order detail', '2024-01-23', NULL, NULL, 15, NULL),
(8, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', 'haa', '2024-01-23', NULL, NULL, 50, NULL),
(9, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', 'late time', '2024-01-23', NULL, NULL, 30, NULL),
(10, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', 'muadasd', '2024-01-23', NULL, NULL, 350, NULL),
(11, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', 'ádas', '2024-01-23', NULL, NULL, 200, NULL),
(12, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', 'qua met moi', '2024-01-23', NULL, NULL, 350, NULL),
(22, 'Quan 9', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', 'asd', '2024-01-23', '1234567890', NULL, 50, NULL),
(23, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', 'end game', '2024-01-23', 'qua met moi', NULL, 150, NULL),
(24, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', 'ahehe', '2024-01-23', '123123', NULL, 150, NULL),
(25, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', 'ahehe', '2024-01-23', NULL, NULL, 150, NULL),
(26, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', '', '2024-01-23', NULL, NULL, 150, NULL),
(27, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', '1', '2024-01-23', NULL, NULL, 150, NULL),
(28, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', '2', '2024-01-23', NULL, NULL, 150, NULL),
(29, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', '3', '2024-01-23', NULL, NULL, 150, NULL),
(30, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', '4', '2024-01-23', NULL, NULL, 150, NULL),
(31, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', '4', '2024-01-23', NULL, NULL, 150, NULL),
(32, 'Thành Phố Thủ Đức', 'nguyenbaohoa02@gmail.com', 'Nguyễn Duy Hòa', 'nua ne', '2024-01-23', '0967676767', NULL, 50, NULL),
(33, 'Ho Chi Minh City', 'nguyenduyhoa2312@gmail.com', 'Nguyễn Duy Hòa', 'asdfas', '2024-01-23', '0967671780', NULL, 50, NULL),
(34, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', 'ads', '2024-01-23', NULL, NULL, 50, NULL),
(35, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', '', '2024-01-23', NULL, NULL, 50, NULL),
(36, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', '', '2024-01-23', NULL, NULL, 50, NULL),
(37, 'Ho Chi Minh City', 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', '123124514', '2024-01-23', '0231241234', NULL, 275, NULL),
(38, 'TPHCM', 'testdathang', 'Nguyen Bao Hoa', 'asdasd', '2024-01-23', '093412312', NULL, 15, NULL),
(39, '', '', '', '', '2024-01-24', '', NULL, 35, NULL),
(40, '', '', '', '', '2024-01-24', '', NULL, 30, NULL),
(41, '', '', '', '', '2024-01-24', '', NULL, 30, NULL),
(42, 'Thành Phố Thủ Đức', 'nguyenbaohoa02@gmail.com', 'Nguyễn Duy Hòa', 'Check', '2024-01-24', '0967676767', NULL, 50, NULL),
(43, 'HCM ', 'ti@gmail.com', 'Nguyễn Duy Hòa', 'Giao hàng nhanh', '2024-01-24', '0967676767', NULL, 250, NULL),
(44, '', '', '', '', '2024-01-24', '', NULL, 20, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `deleted` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `sale` int(11) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `brand`, `created_at`, `deleted`, `description`, `discount`, `price`, `sale`, `thumbnail`, `title`, `updated_at`, `category_id`) VALUES
(1, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '205', 0, '1.jpg', 'Mô hình 1/7 scale Ninguang', NULL, 1),
(2, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '35', 0, '2.jpg', 'Tượng Đại Nhân Narukami Ogosho – Raiden Shogun', NULL, 1),
(3, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '15', 0, '3.jpg', 'Mô hình lắc lư Youyou Hutao', NULL, 1),
(4, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '50', 0, '4.jpg', 'Mô hình Asteroid #013 Chibi Elysia Herrscher of Human: Ego', NULL, 1),
(5, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '200', 0, '5.jpg', 'Mô hình 1/7 scale Bronya Silver Wing N-EX', NULL, 1),
(6, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '150', 0, '6.jpg', 'Mô hình 1/8 scale Kiana Herrscher of The Void Bãi biển mùa hè', NULL, 1),
(7, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '350', 0, '7.jpg', 'Mô hình 1/8 scale Mei Herrscher of Thunder', NULL, 1),
(8, 'HOYOVERS', '2023-08-22', -2, NULL, NULL, '15', 0, '8.jpg', 'Mô hình Minifigure chủ đề Tiệc Trà chào mừng lên tàu', NULL, 1),
(9, 'YingYuang Studio', '2023-08-22', 0, NULL, NULL, '400', 0, '9.jpg', 'Tingyun - Honkai Star Rail - Yinyuan Studio', NULL, 1),
(10, 'YY Studio', '2023-08-22', 0, NULL, NULL, '270', 0, '10.jpg', 'Himeko - Honkai Star Rail - Imagination Studio (YY Studio)', NULL, 1),
(11, 'MIHOYO', '2023-08-22', 2, NULL, NULL, '20', 0, '11.jpg', 'Cốc sứ Klee – Jumpy Dumpty', NULL, 4),
(12, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '23', 0, '12.jpg', 'Cốc sứ Gorou', NULL, 4),
(13, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '17', 0, '13.jpg', 'Bát nấu mì ăn liền Gouba', NULL, 4),
(14, 'MIHOYO', '2023-08-22', 2, NULL, NULL, '35', 0, '14.jpg', 'Máy tạo bong bóng chủ đề Nấm Quỷ Thủy – Genshin Impact', NULL, 4),
(15, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '30', 0, '15.jpg', 'Đèn ngủ Hutao', NULL, 2),
(16, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '50', 0, '16.jpg', 'Đế sạc không dây kèm sạc dự phòng chủ đề Inuzaka – Gorou', NULL, 2),
(17, 'HOYOVERS', '2023-08-22', 0, NULL, NULL, '30', 0, '17.jpg', 'Tai nghe không dây Redmi Airdots 3 pro chủ đề Klee – Genshin Impact', NULL, 2),
(18, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '250', 0, '18.jpg', 'Bàn phím cơ Vigilant Yaksha – Xiao', NULL, 2),
(19, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '200', 0, '19.jpg', 'Bàn phím cơ Keqing', NULL, 2),
(20, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '175', 0, '20.jpg', 'Áo ba-đờ-xuy chủ đề Diluc Impression', NULL, 3),
(21, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '60', 0, '21.jpg', 'Áo sơ mi chủ đề Diluc Impression', NULL, 3),
(22, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '50', 0, '22.jpg', 'Áo sơ mi chủ đề Kamisato Ayaka – Genshin Impact', NULL, 3),
(23, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '50', 0, '23.jpg', 'Genshin Impression – Quần lửng ống rộng chủ đề Xiao', NULL, 3),
(24, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '30', 0, '24.jpg', 'Khăn choàng chủ đề Diluc Impression', NULL, 3),
(25, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '80', 0, '25.jpg', 'Áo khoác gió windbreaker Kiana – Herrscher of Flamescion', NULL, 3),
(26, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '90', 0, '26.jpg', 'Áo khoác – Herrscher of Flamescion – Time Runner', NULL, 3),
(27, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '80', 0, '27.jpg', 'Áo Blazer – Herrscher of Flamescion – Time Runner', NULL, 3),
(28, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '50', 0, '28.jpg', 'Áo khoác bóng chày Delta Fervent Tempo Δ – 8 Bit Fever', NULL, 3),
(29, 'MIHOYO', '2023-08-22', 0, NULL, NULL, '50', 0, '29.jpg', 'Áo jacket Mobius – Infinite Ouroboros', NULL, 3),
(30, 'MIHOYO', '2023-08-22', 0, NULL, 24, '30', 1, '30.jpg', 'Hộp quà nhân vật Genshin Concert 2022', NULL, 4),
(31, 'MIHOYO', '2023-08-22', 0, NULL, 2, '3', 1, '31.jpg', 'Móc khóa Genshin Concert 2022', NULL, 4),
(32, 'MIHOYO', '2023-08-22', 0, NULL, 12, '20', 1, '32.jpg', 'Bộ sưu tập chủ đề Genshin Festival 2023', NULL, 4),
(33, 'MIHOYO', '2023-08-22', 0, NULL, 25, '30', 1, '33.jpg', 'Hộp quà Seele Vollerei chủ đề Forest Capriccio', NULL, 4),
(34, 'MIHOYO', '2023-08-22', 0, NULL, 24, '30', 1, '30.jpg', 'Hộp quà nhân vật Genshin Concert 2022', NULL, 4),
(35, 'MIHOYO', '2023-08-22', 0, NULL, 2, '3', 1, '31.jpg', 'Móc khóa Genshin Concert 2022', NULL, 4),
(36, 'MIHOYO', '2023-08-22', 0, NULL, 12, '20', 1, '32.jpg', 'Bộ sưu tập chủ đề Genshin Festival 2023', NULL, 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `token`
--

CREATE TABLE `token` (
  `id` bigint(20) NOT NULL,
  `created_at` date DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `deleted` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `address`, `created_at`, `deleted`, `email`, `fullname`, `password`, `phone_number`, `updated_at`, `role_id`) VALUES
(1, 'Ho Chi Minh City', NULL, NULL, 'hoasieucapvippro@gmail.com', 'Nguyễn Bảo Hòa', '098765312', NULL, NULL, NULL),
(2, 'HCM city', NULL, NULL, 'xieuduaxe@gamil.com', 'HyHy', '03123123123', NULL, NULL, NULL),
(3, 'hcm city', NULL, NULL, 'asda@gmail.com', 'ChecK', '131231231', NULL, NULL, NULL),
(4, 'asd', NULL, NULL, 'asdas@gmail.com', 'asdas', 'asdas', NULL, NULL, NULL),
(5, 'adsadasd', NULL, NULL, 'adasdasd@gmail.com', 'adasd', '123123', NULL, NULL, NULL),
(6, 'Bo Lam To', NULL, NULL, 'ti@gmail.com', 'TI DEp TRai', '123', '12312', NULL, NULL),
(7, 'a', NULL, NULL, 'tringu@gmail.com', 'tri ', '123123', NULL, NULL, NULL),
(8, 'dsasd', NULL, NULL, 'hoa@gmail.com', 'hoa', '12345', NULL, NULL, NULL),
(9, 'Quan 9', NULL, NULL, 'huydan@gmail.com', 'Huy Dan', 'huydan', NULL, NULL, NULL),
(10, 'TP.HCM', NULL, NULL, 'luan@gmail.com', 'LuanDan', '1234', NULL, NULL, NULL),
(11, 'Quan 9', '2024-01-23', NULL, 'lyly@gmail.com', 'lyly', '123456', '1234567890', NULL, NULL),
(12, 'Quan 9', NULL, NULL, 'hoa1234@gmail.com', 'Duy Hòa', '12345', '0987654312', NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKiygpxsm5v7pxfbn4hmrk6skhd` (`product_id`);

--
-- Chỉ mục cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5h3dhx5l2ffd5mlbdriywue2t` (`orders_id`),
  ADD KEY `FK9iu7g1xs6c3u7n3ryo9yv2tyd` (`product_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKel9kyl84ego2otj2accfd8mr7` (`user_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKog2rp4qthbtt2lfyhfo32lsw9` (`category_id`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKe32ek7ixanakfqsdaokm4q9y2` (`user_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKn82ha3ccdebhokx3a8fgdqeyy` (`role_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `token`
--
ALTER TABLE `token`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `gallery`
--
ALTER TABLE `gallery`
  ADD CONSTRAINT `FKiygpxsm5v7pxfbn4hmrk6skhd` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Các ràng buộc cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `FK5h3dhx5l2ffd5mlbdriywue2t` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `FK9iu7g1xs6c3u7n3ryo9yv2tyd` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FKel9kyl84ego2otj2accfd8mr7` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FKog2rp4qthbtt2lfyhfo32lsw9` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Các ràng buộc cho bảng `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `FKe32ek7ixanakfqsdaokm4q9y2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FKn82ha3ccdebhokx3a8fgdqeyy` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
