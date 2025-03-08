'use client'

import { useState } from 'react'
import { FiStar, FiExternalLink } from 'react-icons/fi'
import { Product } from '@/data/products'

type ProductDetailProps = {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(product.images[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Sonraki resme geç
  const goToNextImage = () => {
    const newIndex = (currentImageIndex + 1) % product.images.length
    setCurrentImageIndex(newIndex)
    setSelectedImage(product.images[newIndex])
  }

  // Önceki resme geç
  const goToPrevImage = () => {
    const newIndex = (currentImageIndex - 1 + product.images.length) % product.images.length
    setCurrentImageIndex(newIndex)
    setSelectedImage(product.images[newIndex])
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">{product.name}</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={selectedImage} 
            alt={product.name} 
            className="w-full h-full object-contain"
          />
          
          {/* Resim Navigasyon Butonları */}
          <button 
            onClick={goToPrevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors"
            aria-label="Önceki resim"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button 
            onClick={goToNextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors"
            aria-label="Sonraki resim"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 border-t border-gray-100 dark:border-gray-700 overflow-x-auto">
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`w-16 h-16 rounded border-2 flex-shrink-0 overflow-hidden transition-all ${
                  selectedImage === image 
                    ? 'border-primary' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
                onClick={() => {
                  setSelectedImage(image)
                  setCurrentImageIndex(index)
                }}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - Görsel ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Ürün Bilgileri</h2>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i} 
                  className={`${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({product.reviewCount} değerlendirme)
            </span>
          </div>
          
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold text-primary mr-3">{product.price} ₺</span>
            {product.oldPrice && (
              <span className="text-lg line-through text-gray-400">{product.oldPrice} ₺</span>
            )}
            {product.discount && (
              <span className="ml-auto bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-2 py-1 rounded">
                %{product.discount} indirim
              </span>
            )}
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>
          
          {product.externalLink && (
            <a 
              href={product.externalLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center mt-4 text-primary hover:text-primary-dark transition-colors"
            >
              <span>Ürün Detayları</span>
              <FiExternalLink className="ml-1" />
            </a>
          )}
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Özellikler</h2>
          
          <ul className="space-y-2">
            {product.specifications.map((spec, index) => (
              <li key={index} className="flex py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                <span className="text-gray-500 dark:text-gray-400 w-1/3">{spec.name}</span>
                <span className="font-medium">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {product.variants && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Seçenekler</h2>
          
          <div className="space-y-6">
            {product.variants.map((variant, index) => (
              <div key={index}>
                <h3 className="font-medium mb-3">{variant.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {variant.values.map((value, i) => (
                    <span 
                      key={i} 
                      className={`px-4 py-2 rounded border border-gray-200 dark:border-gray-700 text-sm ${
                        i === 0 
                          ? 'bg-primary/10 border-primary text-primary dark:text-primary-dark' 
                          : 'bg-gray-50 dark:bg-gray-700'
                      }`}
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 