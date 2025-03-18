export const categories = [
  {
    id: "laptops",
    name: "Dizüstü Bilgisayarlar",
    products: [
      {
        id: "laptop-1",
        name: "Pro Book X15",
        description: "15.6 inç ekran, 11. Nesil Intel i7 işlemci, 16GB RAM ile profesyonel iş istasyonu. Hafif tasarımı ve güçlü performansıyla mobil çalışma deneyimini zirveye taşıyor.",
        price: 34999.99,
        images: [
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          "https://images.unsplash.com/photo-1504707748692-419802cf939d"
        ],
        specifications: [
          { label: "İşlemci", value: "Intel Core i7-1165G7", category: "Performans", copyable: true },
          { label: "Çekirdek Sayısı", value: "8 Çekirdek", category: "Performans" },
          { label: "RAM", value: "16GB DDR4", category: "Performans", copyable: true },
          { label: "RAM Hızı", value: "3200MHz", category: "Performans" },
          { label: "Depolama", value: "512GB NVMe SSD", category: "Depolama", copyable: true },
          { label: "Okuma Hızı", value: "3500MB/s", category: "Depolama" },
          { label: "Ekran", value: '15.6" FHD IPS', category: "Ekran" },
          { label: "Çözünürlük", value: "1920x1080", category: "Ekran", copyable: true },
          { label: "Grafik Kartı", value: "NVIDIA RTX 3050 4GB", category: "Performans", copyable: true },
          { label: "Batarya", value: "65Wh", category: "Güç" },
          { label: "Şarj Gücü", value: "100W", category: "Güç" }
        ],
        categoryId: "laptops"
      }
    ]
  },
  {
    id: "phones",
    name: "Akıllı Telefonlar",
    products: [
      {
        id: "phone-1",
        name: "UltraPhone 13",
        description: "6.7 inç AMOLED ekran ve 108MP kamera sistemiyle fotoğraf tutkunları için tasarlandı. 5000mAh bataryası ile gün boyu kesintisiz kullanım sağlar.",
        price: 24999.99,
        images: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
          "https://images.unsplash.com/photo-1585060544812-6b45742d762f"
        ],
        specifications: [
          { label: "Ekran", value: '6.7" AMOLED 120Hz', category: "Ekran" },
          { label: "Çözünürlük", value: "2778x1284", category: "Ekran", copyable: true },
          { label: "Parlaklık", value: "1200 nits", category: "Ekran" },
          { label: "İşlemci", value: "Snapdragon 8 Gen 2", category: "Performans", copyable: true },
          { label: "RAM", value: "12GB LPDDR5", category: "Performans", copyable: true },
          { label: "Depolama", value: "256GB UFS 3.1", category: "Depolama", copyable: true },
          { label: "Ana Kamera", value: "108MP f/1.8", category: "Kamera" },
          { label: "Ultra Geniş", value: "12MP f/2.2", category: "Kamera" },
          { label: "Batarya", value: "5000mAh", category: "Güç" },
          { label: "Hızlı Şarj", value: "67W", category: "Güç" }
        ],
        categoryId: "phones"
      }
    ]
  }
];