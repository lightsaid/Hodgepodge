

CREATE TABLE `tb_customer` (
  `id` int(11) NOT NULL,
  `username` varchar(512) NOT NULL,
  `email` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `city` varchar(128) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tb_access_token`;
CREATE TABLE `access_token` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tb_category`;
CREATE TABLE `tb_category`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '分类名称',
  `parent_id` int(10) UNSIGNED NULL DEFAULT NULL COMMENT '上级分类ID',
  `if_parent` tinyint(1) NOT NULL COMMENT '是否含有下级分类',
  `sort` int(10) UNSIGNED NOT NULL COMMENT '排名指数',
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_parent_id`(`parent_id`) USING BTREE,
  INDEX `idx_sort`(`sort`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '商品分类表' ROW_FORMAT = Dynamic;


DROP TABLE IF EXISTS `t_spu`;
CREATE TABLE `t_spu`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标题',
  `sub_title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '副标题',
  `category_id` int(10) UNSIGNED NOT NULL COMMENT '分类ID',
  `brand_id` int(10) UNSIGNED NULL DEFAULT NULL COMMENT '品牌ID',
  `spg_id` int(10) UNSIGNED NOT NULL COMMENT '品类ID',
  `saleable` tinyint(1) NOT NULL COMMENT '是否上架',
  `valid` tinyint(1) NOT NULL COMMENT '是否有效',
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `last_update_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '最后修改时间',
  `is_delete` tinyint(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_brand_id`(`brand_id`) USING BTREE,
  INDEX `idx_category_id`(`category_id`) USING BTREE,
  INDEX `idx_spg_id`(`spg_id`) USING BTREE,
  INDEX `idx_saleable`(`saleable`) USING BTREE,
  INDEX `idx_valid`(`valid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '产品表' ROW_FORMAT = Dynamic;


DROP TABLE IF EXISTS `t_sku`;
CREATE TABLE `t_sku`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `spu_id` int(10) UNSIGNED NOT NULL COMMENT '产品ID',
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品标题',
  `images` json NULL COMMENT '商品图片',
  `price` decimal(10, 2) UNSIGNED NOT NULL COMMENT '价格',
  `param` json NOT NULL COMMENT '参数',
  `saleable` tinyint(1) NOT NULL COMMENT '是否上架',
  `valid` tinyint(1) NOT NULL COMMENT '是否有效',
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `last_update_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '最后修改时间',
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_spu_id`(`spu_id`) USING BTREE,
  INDEX `idx_saleable`(`saleable`) USING BTREE,
  INDEX `idx_valid`(`valid`) USING BTREE,
  FULLTEXT INDEX `title`(`title`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '商品表' ROW_FORMAT = Dynamic;


-- ----------------------------
DROP TABLE IF EXISTS `t_order`;
CREATE TABLE `t_order`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `code` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '流水号',
  `type` tinyint(3) UNSIGNED NOT NULL COMMENT '订单类型：1实体销售,2网络销售',
  `shop_id` int(10) UNSIGNED NULL DEFAULT NULL COMMENT '零售店ID',
  `customer_id` int(10) UNSIGNED NULL DEFAULT NULL COMMENT '会员ID',
  `amount` decimal(10, 2) UNSIGNED NOT NULL COMMENT '总金额',
  `payment_type` tinyint(3) UNSIGNED NOT NULL COMMENT '支付方式：1借记卡,2信用卡,3微信,4支付宝,5现金',
  `status` tinyint(3) UNSIGNED NOT NULL COMMENT '状态：1未付款,2已付款,3已发货,4已签收',
  `postage` decimal(10, 2) UNSIGNED NULL DEFAULT NULL COMMENT '邮费',
  `weight` int(10) UNSIGNED NULL DEFAULT NULL COMMENT '重量（克）',
  `voucher_id` int(10) UNSIGNED NULL DEFAULT NULL COMMENT '购物券ID',
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `unq_code`(`code`) USING BTREE,
  INDEX `idx_code`(`code`) USING BTREE,
  INDEX `idx_customer_id`(`customer_id`) USING BTREE,
  INDEX `idx_status`(`status`) USING BTREE,
  INDEX `idx_create_time`(`create_time`) USING BTREE,
  INDEX `idx_type`(`type`) USING BTREE,
  INDEX `idx_shop_id`(`shop_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '订单表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_order
-- ----------------------------
INSERT INTO `t_order` VALUES (1, 'CX0000000120160522', 1, 3, 1, 5998.00, 5, 2, NULL, NULL, NULL, '2019-04-11 01:07:05', 0);
INSERT INTO `t_order` VALUES (2, 'CX0000000120160523', 2, NULL, 1, 5998.00, 1, 2, 60.00, 530, NULL, '2019-04-11 21:22:37', 0);

-- ----------------------------
-- Table structure for t_order_detail
-- ----------------------------
DROP TABLE IF EXISTS `t_order_detail`;
CREATE TABLE `t_order_detail`  (
  `order_id` int(10) UNSIGNED NOT NULL COMMENT '订单ID',
  `old_id` int(10) UNSIGNED NULL DEFAULT NULL COMMENT 'SKU_OLD表的ID',
  `sku_id` int(10) UNSIGNED NOT NULL COMMENT '商品ID',
  `price` decimal(10, 2) UNSIGNED NOT NULL COMMENT '原价格',
  `actual_price` decimal(10, 2) UNSIGNED NOT NULL COMMENT '实际购买价',
  `num` int(10) UNSIGNED NOT NULL COMMENT '购买数量',
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除',
  PRIMARY KEY (`order_id`, `sku_id`) USING BTREE,
  INDEX `idx_old_id`(`old_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '订单详情表' ROW_FORMAT = Dynamic;



CREATE TABLE `product_tag` (
  `product_tag_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_tagname` text,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_to_category`
--

CREATE TABLE `product_to_category` (
  `product_to_category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_to_category`
--

INSERT INTO `product_to_category` (`product_to_category_id`, `product_id`, `category_id`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(4070, 538, 6, 1, NULL, NULL, '2019-06-19 05:49:51', NULL),
(4074, 540, 148, 1, NULL, NULL, '2019-06-19 06:01:40', NULL),
(4076, 540, 6, 1, NULL, NULL, '2019-06-19 06:01:40', NULL),
(4077, 542, 3, 1, NULL, NULL, '2019-06-19 06:16:09', NULL),
(4081, 541, 6, 1, NULL, NULL, '2019-06-19 06:16:12', NULL),
(4103, 547, 5, 1, NULL, NULL, '2019-06-19 08:13:25', NULL),
(4116, 550, 4, 1, NULL, NULL, '2019-06-20 01:43:55', NULL),
(4122, 552, 4, 1, NULL, NULL, '2019-06-20 02:01:17', NULL);

