'use client'

import { useState, useEffect } from 'react'
import { FiChevronDown, FiChevronUp, FiSun, FiMoon, FiExternalLink } from 'react-icons/fi'
import { categories, products, Product } from '@/data/products'

export default function ProductPanel() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([categories[0].id])
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Kategori açma/kapama işlevi
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  // Ürün seçildiğinde harici linke git
  const handleProductClick = (product: Product) => {
    if (product.externalLink) {
      window.open(product.externalLink, '_blank', 'noopener,noreferrer')
    }
  }

  // Tema değiştirme işlevi
  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    // HTML elementine dark class'ını ekle/çıkar
    document.documentElement.classList.toggle('dark', newTheme)
    
    // Tema tercihini localStorage'a kaydet
    try {
      localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    } catch (e) {
      console.error('Tema kaydedilirken hata oluştu:', e)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Ürün Bilgilendirme Paneli</h1>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Açık temaya geç' : 'Koyu temaya geç'}
          >
            {isDarkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>
        </div>
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Kategori ve Ürün Sidebar'ı */}
        <aside className="w-full md:w-80 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <h2 className="text-lg font-medium p-4 border-b border-gray-200 dark:border-gray-700">Kategoriler</h2>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {categories.map(category => (
              <li key={category.id}>
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => toggleCategory(category.id)}
                >
                  <span className="font-medium">{category.name}</span>
                  {expandedCategories.includes(category.id) ? 
                    <FiChevronUp className="text-gray-500" /> : 
                    <FiChevronDown className="text-gray-500" />
                  }
                </div>
                
                {expandedCategories.includes(category.id) && (
                  <ul className="bg-gray-50 dark:bg-gray-900">
                    {products
                      .filter(product => product.categoryId === category.id)
                      .map(product => (
                        <li 
                          key={product.id} 
                          className="flex items-center p-3 pl-8 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-l-4 border-transparent"
                          onClick={() => handleProductClick(product)}
                        >
                          <div className="w-10 h-10 rounded overflow-hidden border border-gray-200 dark:border-gray-700 mr-3 flex-shrink-0">
                            <img 
                              src={product.thumbnail} 
                              alt={product.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{product.name}</div>
                            <div className="text-xs text-primary">{product.price} ₺</div>
                          </div>
                          {product.externalLink && (
                            <FiExternalLink className="text-gray-400 ml-2" />
                          )}
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Ana İçerik Alanı */}
        <main className="flex-1 p-4 md:p-6 bg-gray-50 dark:bg-gray-900 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Ürün Bilgilendirme Paneli</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Bu panel, ürün bilgilerini görüntülemek için tasarlanmıştır. Soldaki listeden bir kategori ve ürün seçerek detaylı bilgilere ulaşabilirsiniz.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ürün seçtiğinizde, ilgili ürünün web sayfasına yönlendirileceksiniz.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                <h3 className="text-blue-800 dark:text-blue-300 font-medium mb-2">Nasıl Kullanılır?</h3>
                <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Soldaki menüden bir kategori seçin</li>
                  <li>Kategori altındaki ürünlerden birine tıklayın</li>
                  <li>Ürün detay sayfasına yönlendirileceksiniz</li>
                </ol>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 