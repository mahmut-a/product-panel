// Kategori tipi
export type Category = {
  id: string
  name: string
}

// Varyant tipi
export type Variant = {
  name: string
  values: string[]
}

// Özellik tipi
export type Specification = {
  name: string
  value: string
}

// Ürün tipi
export type Product = {
  id: string
  categoryId: string
  name: string
  description: string
  price: number
  oldPrice?: number
  discount?: number
  rating: number
  reviewCount: number
  thumbnail: string
  images: string[]
  variants?: Variant[]
  specifications: Specification[]
  externalLink?: string
}

// Kategoriler
export const categories: Category[] = [
  { id: 'electronics', name: 'Elektronik' },
  { id: 'clothing', name: 'Giyim' },
  { id: 'home', name: 'Ev & Yaşam' },
  { id: 'sports', name: 'Spor & Outdoor' }
]

// Ürünler
export const products: Product[] = [
  // Elektronik Kategorisi
  {
    id: 'smartphone-1',
    categoryId: 'electronics',
    name: 'Pro X Akıllı Telefon',
    description: 'En son teknolojiyle donatılmış, yüksek performanslı akıllı telefon. 6.7 inç AMOLED ekran, 108MP kamera ve 5000mAh batarya ile gün boyu kullanım.',
    price: 12999,
    oldPrice: 14999,
    discount: 13,
    rating: 4.7,
    reviewCount: 128,
    thumbnail: '/images/phone/ph1.jpg',
    images: [
      '/images/phone/ph1.jpg',
      '/images/phone/ph2.jpg',
      '/images/phone/ph3.jpg'
    ],
    variants: [
      {
        name: 'Renk',
        values: ['Siyah', 'Beyaz', 'Mavi']
      },
      {
        name: 'Depolama',
        values: ['128GB', '256GB', '512GB']
      }
    ],
    specifications: [
      { name: 'Ekran', value: '6.7 inç AMOLED' },
      { name: 'İşlemci', value: 'Octa-core 2.8GHz' },
      { name: 'RAM', value: '8GB' },
      { name: 'Kamera', value: '108MP + 12MP + 8MP' },
      { name: 'Batarya', value: '5000mAh' },
      { name: 'İşletim Sistemi', value: 'Android 13' }
    ],
    externalLink: 'https://example.com/smartphone'
  },
  {
    id: 'laptop-1',
    categoryId: 'electronics',
    name: 'UltraBook Pro Dizüstü Bilgisayar',
    description: 'İnce, hafif ve güçlü. 14 inç 4K ekran, 16GB RAM ve 1TB SSD ile profesyonel kullanım için ideal.',
    price: 22499,
    oldPrice: 24999,
    discount: 10,
    rating: 4.8,
    reviewCount: 95,
    thumbnail: '/images/mac/mac1.jpg',
    images: [
      '/images/mac/mac1.jpg',
      '/images/mac/mac2.jpg',
      '/images/mac/mac3.jpg'
    ],
    variants: [
      {
        name: 'Renk',
        values: ['Gümüş', 'Uzay Grisi']
      },
      {
        name: 'RAM',
        values: ['16GB', '32GB']
      },
      {
        name: 'Depolama',
        values: ['512GB', '1TB', '2TB']
      }
    ],
    specifications: [
      { name: 'Ekran', value: '14 inç 4K IPS' },
      { name: 'İşlemci', value: 'Intel Core i7-1260P' },
      { name: 'RAM', value: '16GB DDR5' },
      { name: 'Depolama', value: '1TB NVMe SSD' },
      { name: 'Grafik Kartı', value: 'Intel Iris Xe' },
      { name: 'İşletim Sistemi', value: 'Windows 11 Pro' },
      { name: 'Ağırlık', value: '1.3 kg' }
    ],
    externalLink: 'https://example.com/laptop'
  },
  {
    id: 'headphones-1',
    categoryId: 'electronics',
    name: 'SoundMax Kablosuz Kulaklık',
    description: 'Aktif gürültü engelleme özellikli, 30 saat pil ömrüne sahip premium kablosuz kulaklık.',
    price: 2499,
    rating: 4.6,
    reviewCount: 210,
    thumbnail: '/images/headset/h.jpg',
    images: [
      '/images/headset/h1.jpg',
    ],
    variants: [
      {
        name: 'Renk',
        values: ['Siyah', 'Beyaz', 'Kırmızı']
      }
    ],
    specifications: [
      { name: 'Bağlantı', value: 'Bluetooth 5.2' },
      { name: 'Pil Ömrü', value: '30 saat' },
      { name: 'Gürültü Engelleme', value: 'Aktif' },
      { name: 'Mikrofon', value: 'Var' },
      { name: 'Suya Dayanıklılık', value: 'IPX4' }
    ],
    externalLink: 'https://example.com/headphones'
  },

  // Giyim Kategorisi
  {
    id: 'jacket-1',
    categoryId: 'clothing',
    name: 'Premium Deri Ceket',
    description: 'Gerçek deri, modern kesim, şık tasarım. Her mevsim kullanılabilir.',
    price: 3499,
    oldPrice: 4299,
    discount: 18,
    rating: 4.5,
    reviewCount: 78,
    thumbnail: '/images/deri/deri.jpg',
    images: [
      '/images/deri/deri2.jpg',
    ],
    variants: [
      {
        name: 'Renk',
        values: ['Siyah', 'Kahverengi']
      },
      {
        name: 'Beden',
        values: ['S', 'M', 'L', 'XL']
      }
    ],
    specifications: [
      { name: 'Malzeme', value: '%100 Gerçek Deri' },
      { name: 'Astar', value: '%100 Polyester' },
      { name: 'Yaka Tipi', value: 'Hakim Yaka' },
      { name: 'Cep Sayısı', value: '4' },
      { name: 'Bakım', value: 'Kuru Temizleme' }
    ],
    externalLink: 'https://example.com/jacket'
  },
  {
    id: 'sneakers-1',
    categoryId: 'clothing',
    name: 'Urban Spor Ayakkabı',
    description: 'Hafif, rahat ve şık. Günlük kullanım için ideal spor ayakkabı.',
    price: 1299,
    rating: 4.4,
    reviewCount: 156,
    thumbnail: 'https://via.placeholder.com/100x100?text=Ayakkabı',
    images: [
      'https://via.placeholder.com/600x400?text=Ayakkabı+1',
      'https://via.placeholder.com/600x400?text=Ayakkabı+2',
      'https://via.placeholder.com/600x400?text=Ayakkabı+3'
    ],
    variants: [
      {
        name: 'Renk',
        values: ['Siyah', 'Beyaz', 'Gri']
      },
      {
        name: 'Numara',
        values: ['39', '40', '41', '42', '43', '44']
      }
    ],
    specifications: [
      { name: 'Üst Malzeme', value: 'Tekstil ve Sentetik' },
      { name: 'Taban', value: 'EVA' },
      { name: 'Kapama', value: 'Bağcıklı' },
      { name: 'Kullanım', value: 'Günlük' },
      { name: 'Özellik', value: 'Hafif, Esnek' }
    ],
    externalLink: 'https://example.com/sneakers'
  },

  // Ev & Yaşam Kategorisi
  {
    id: 'coffee-machine-1',
    categoryId: 'home',
    name: 'Barista Pro Kahve Makinesi',
    description: 'Profesyonel kalitede espresso ve cappuccino hazırlayın. Entegre öğütücü ve otomatik süt köpürtme özelliği.',
    price: 7999,
    oldPrice: 8999,
    discount: 11,
    rating: 4.9,
    reviewCount: 64,
    thumbnail: 'https://via.placeholder.com/100x100?text=Kahve+Makinesi',
    images: [
      'https://via.placeholder.com/600x400?text=Kahve+Makinesi+1',
      'https://via.placeholder.com/600x400?text=Kahve+Makinesi+2',
      'https://via.placeholder.com/600x400?text=Kahve+Makinesi+3'
    ],
    variants: [
      {
        name: 'Renk',
        values: ['Paslanmaz Çelik', 'Siyah', 'Kırmızı']
      }
    ],
    specifications: [
      { name: 'Güç', value: '1450W' },
      { name: 'Basınç', value: '15 bar' },
      { name: 'Su Haznesi', value: '2L' },
      { name: 'Çekirdek Haznesi', value: '250g' },
      { name: 'Programlar', value: 'Espresso, Lungo, Cappuccino, Latte' },
      { name: 'Özellikler', value: 'Entegre Öğütücü, Otomatik Süt Köpürtme' }
    ],
    externalLink: 'https://example.com/coffee-machine'
  },
  {
    id: 'sofa-1',
    categoryId: 'home',
    name: 'Modern Köşe Koltuk Takımı',
    description: 'Şık tasarım, yüksek konfor. Geniş oturma alanı ve depolama özelliği ile modern evler için ideal.',
    price: 15999,
    oldPrice: 18999,
    discount: 15,
    rating: 4.7,
    reviewCount: 42,
    thumbnail: 'https://via.placeholder.com/100x100?text=Koltuk',
    images: [
      'https://via.placeholder.com/600x400?text=Koltuk+1',
      'https://via.placeholder.com/600x400?text=Koltuk+2',
      'https://via.placeholder.com/600x400?text=Koltuk+3'
    ],
    variants: [
      {
        name: 'Renk',
        values: ['Gri', 'Bej', 'Lacivert']
      },
      {
        name: 'Kumaş',
        values: ['Kadife', 'Keten', 'Mikrofiber']
      }
    ],
    specifications: [
      { name: 'Boyutlar', value: '280x210x85 cm' },
      { name: 'Koltuk Sayısı', value: '5 Kişilik' },
      { name: 'Yatak Olabilme', value: 'Evet' },
      { name: 'Depolama', value: 'Var' },
      { name: 'Ayak Malzemesi', value: 'Metal' },
      { name: 'Garanti', value: '2 Yıl' }
    ],
    externalLink: 'https://example.com/sofa'
  },

  // Spor & Outdoor Kategorisi
  {
    id: 'bicycle-1',
    categoryId: 'sports',
    name: 'Mountain Pro Dağ Bisikleti',
    description: '27.5 jant, 21 vites, hidrolik disk fren. Zorlu arazi koşulları için tasarlandı.',
    price: 8499,
    oldPrice: 9999,
    discount: 15,
    rating: 4.8,
    reviewCount: 53,
    thumbnail: 'https://via.placeholder.com/100x100?text=Bisiklet',
    images: [
      'https://via.placeholder.com/600x400?text=Bisiklet+1',
      'https://via.placeholder.com/600x400?text=Bisiklet+2',
      'https://via.placeholder.com/600x400?text=Bisiklet+3'
    ],
    variants: [
      {
        name: 'Renk',
        values: ['Siyah/Kırmızı', 'Mavi/Siyah', 'Yeşil/Siyah']
      },
      {
        name: 'Kadro Boyu',
        values: ['M (165-175cm)', 'L (175-185cm)', 'XL (185-195cm)']
      }
    ],
    specifications: [
      { name: 'Jant', value: '27.5 inç' },
      { name: 'Vites', value: '21 Vites Shimano' },
      { name: 'Fren', value: 'Hidrolik Disk' },
      { name: 'Kadro', value: 'Alüminyum Alaşım' },
      { name: 'Ağırlık', value: '13.5 kg' },
      { name: 'Süspansiyon', value: 'Ön Amortisör' }
    ],
    externalLink: 'https://example.com/bicycle'
  },
  {
    id: 'tent-1',
    categoryId: 'sports',
    name: 'Outdoor Pro 4 Kişilik Kamp Çadırı',
    description: 'Su geçirmez, UV korumalı, kolay kurulum. 4 mevsim kullanım için ideal.',
    price: 2999,
    rating: 4.6,
    reviewCount: 87,
    thumbnail: 'https://via.placeholder.com/100x100?text=Çadır',
    images: [
      'https://via.placeholder.com/600x400?text=Çadır+1',
      'https://via.placeholder.com/600x400?text=Çadır+2',
      'https://via.placeholder.com/600x400?text=Çadır+3'
    ],
    variants: [
      {
        name: 'Renk',
        values: ['Yeşil', 'Turuncu', 'Mavi']
      }
    ],
    specifications: [
      { name: 'Kapasite', value: '4 Kişilik' },
      { name: 'Boyutlar', value: '240x210x130 cm' },
      { name: 'Paket Ağırlığı', value: '4.2 kg' },
      { name: 'Su Geçirmezlik', value: '3000mm' },
      { name: 'Malzeme', value: 'Polyester, Fiberglas' },
      { name: 'Özellikler', value: 'Çift Katmanlı, Sineklik, 2 Giriş' }
    ],
    externalLink: 'https://example.com/tent'
  }
] 