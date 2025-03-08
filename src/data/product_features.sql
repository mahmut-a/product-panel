-- Ürün Özellikleri SQL Sorguları

-- Kategoriler tablosu
CREATE TABLE Categories (
    id VARCHAR(50) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL
);

-- Ürünler tablosu
CREATE TABLE Products (
    id VARCHAR(50) PRIMARY KEY,
    categoryId VARCHAR(50) NOT NULL,
    name NVARCHAR(200) NOT NULL,
    description NVARCHAR(1000),
    price DECIMAL(10, 2) NOT NULL,
    oldPrice DECIMAL(10, 2),
    discount INT,
    rating DECIMAL(3, 1),
    reviewCount INT,
    thumbnail VARCHAR(255),
    FOREIGN KEY (categoryId) REFERENCES Categories(id)
);

-- Ürün Resimleri tablosu
CREATE TABLE ProductImages (
    id INT PRIMARY KEY IDENTITY(1,1),
    productId VARCHAR(50) NOT NULL,
    imageUrl VARCHAR(255) NOT NULL,
    FOREIGN KEY (productId) REFERENCES Products(id)
);

-- Ürün Özellikleri tablosu
CREATE TABLE ProductSpecifications (
    id INT PRIMARY KEY IDENTITY(1,1),
    productId VARCHAR(50) NOT NULL,
    name NVARCHAR(100) NOT NULL,
    value NVARCHAR(200) NOT NULL,
    FOREIGN KEY (productId) REFERENCES Products(id)
);

-- Varyant Grupları tablosu
CREATE TABLE VariantGroups (
    id INT PRIMARY KEY IDENTITY(1,1),
    productId VARCHAR(50) NOT NULL,
    name NVARCHAR(100) NOT NULL,
    FOREIGN KEY (productId) REFERENCES Products(id)
);

-- Varyant Değerleri tablosu
CREATE TABLE VariantValues (
    id INT PRIMARY KEY IDENTITY(1,1),
    variantGroupId INT NOT NULL,
    value NVARCHAR(100) NOT NULL,
    FOREIGN KEY (variantGroupId) REFERENCES VariantGroups(id)
);

-- Örnek veri ekleme sorguları
-- Kategorileri ekle
INSERT INTO Categories (id, name) VALUES 
('electronics', 'Elektronik'),
('clothing', 'Giyim'),
('furniture', 'Mobilya'),
('beauty', 'Kozmetik');

-- Örnek ürün ekleme
INSERT INTO Products (id, categoryId, name, description, price, oldPrice, discount, rating, reviewCount, thumbnail) 
VALUES (
    'product1', 
    'electronics', 
    'Akıllı Telefon X', 
    'Yüksek performanslı, uzun pil ömrüne sahip akıllı telefon.', 
    7999.99, 
    8999.99, 
    11, 
    4.7, 
    128, 
    '/images/deri.jpg'
);

-- Ürün resimlerini ekle
INSERT INTO ProductImages (productId, imageUrl) VALUES 
('product1', '/images/deri.jpg');

-- Ürün özelliklerini ekle
INSERT INTO ProductSpecifications (productId, name, value) VALUES 
('product1', 'İşlemci', 'Octa-core 2.8 GHz'),
('product1', 'RAM', '8 GB'),
('product1', 'Depolama', '128 GB'),
('product1', 'Ekran', '6.5 inç AMOLED'),
('product1', 'Kamera', '48 MP + 12 MP + 8 MP');

-- Varyant gruplarını ekle
INSERT INTO VariantGroups (productId, name) VALUES 
('product1', 'Renk'),
('product1', 'Depolama');

-- Varyant değerlerini ekle
INSERT INTO VariantValues (variantGroupId, value) VALUES 
(1, 'Siyah'),
(1, 'Beyaz'),
(1, 'Mavi'),
(2, '64 GB'),
(2, '128 GB'),
(2, '256 GB'); 