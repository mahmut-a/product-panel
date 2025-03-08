# Ürün Bilgilendirme Paneli

Bu proje, ürün bilgilerini görüntülemek için bir web uygulamasıdır.

## Özellikler

- Kategori bazlı ürün listeleme
- Detaylı ürün bilgileri
- Ürün özellikleri ve seçenekleri
- Resim galerisi
- Karanlık/Aydınlık tema desteği
- Harici linklere yönlendirme

## Kurulum

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## Harici Link Ekleme

Ürünlere harici link eklemek için:

```typescript
// src/data/products.ts dosyasında
{
  // ... diğer ürün özellikleri
  externalLink: 'https://example.com/urun-detay'
}
```

Bu özellik sayesinde, ürün detay sayfasında "Ürün Detayları" butonu görünecek ve tıklandığında belirtilen URL'ye yönlendirilecektir.

## Özel Resim Ekleme

Uygulamaya kendi resimlerinizi eklemek için:

1. Resimlerinizi `public/images` klasörüne kopyalayın
2. `src/data/products.ts` dosyasında ilgili ürünün `images` dizisini güncelleyin:

```typescript
images: [
  '/images/resim-adi.jpg'
]
```

## Teknolojiler

- Next.js
- React
- TypeScript
- Tailwind CSS

## Lisans

MIT 