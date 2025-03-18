import React, { useState } from 'react';
import { categories } from './data';
import { Product, Specification } from './types';
import { ChevronLeft, ChevronRight, Moon, Sun, Copy, Check, Laptop2, Smartphone } from 'lucide-react';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [copiedValues, setCopiedValues] = useState<string[]>([]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
    }).format(price);
  };

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'laptops':
        return <Laptop2 size={20} />;
      case 'phones':
        return <Smartphone size={20} />;
      default:
        return null;
    }
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) =>
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedValues((prev) => [...prev, value]);
    setTimeout(() => {
      setCopiedValues((prev) => prev.filter((v) => v !== value));
    }, 2000);
  };

  const groupSpecificationsByCategory = (specifications: Specification[]) => {
    return specifications.reduce((acc, spec) => {
      if (!acc[spec.category]) {
        acc[spec.category] = [];
      }
      acc[spec.category].push(spec);
      return acc;
    }, {} as Record<string, Specification[]>);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Performans':
        return 'from-blue-500 to-indigo-500';
      case 'Ekran':
        return 'from-purple-500 to-pink-500';
      case 'Depolama':
        return 'from-green-500 to-emerald-500';
      case 'Kamera':
        return 'from-orange-500 to-red-500';
      case 'Güç':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex">
        {/* Sidebar */}
        <div className={`w-72 h-screen overflow-y-auto fixed left-0 ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="sticky top-0 z-10 backdrop-blur-xl bg-opacity-90 p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ürün Kataloğu
              </h1>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          
          <div className="p-4">
            {categories.map((category) => (
              <div key={category.id} className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`p-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    {getCategoryIcon(category.id)}
                  </span>
                  <h2 className="text-lg font-semibold">
                    {category.name}
                  </h2>
                </div>
                <div className="space-y-2">
                  {category.products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        setSelectedProduct(product);
                        setCurrentImageIndex(0);
                      }}
                      className={`w-full p-3 rounded-xl transition-all ${
                        selectedProduct?.id === product.id
                          ? isDarkMode
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                          : isDarkMode
                          ? 'hover:bg-gray-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium">{product.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-72 flex-1 p-8">
          {selectedProduct ? (
            <div className={`max-w-5xl mx-auto ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Image Gallery */}
                <div className="relative group">
                  <img
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full aspect-square object-cover rounded-3xl shadow-lg"
                  />
                  
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedProduct.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentImageIndex === index ? 'w-8 bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      {selectedProduct.name}
                    </h1>
                    <p className={`text-xl leading-relaxed mb-6 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {selectedProduct.description}
                    </p>
                  </div>
                  <div className={`p-6 rounded-2xl ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg`}>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        Fiyat:
                      </span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                        {formatPrice(selectedProduct.price)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {Object.entries(groupSpecificationsByCategory(selectedProduct.specifications)).map(([category, specs]) => (
                  <div
                    key={category}
                    className={`relative overflow-hidden rounded-2xl ${
                      isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
                    } backdrop-blur-lg`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(category)} opacity-10`} />
                    <div className="relative p-6">
                      <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${getCategoryColor(category)} bg-clip-text text-transparent`}>
                        {category}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {specs.map((spec, index) => (
                          <div
                            key={index}
                            className={`flex justify-between items-center p-3 rounded-xl ${
                              isDarkMode 
                                ? 'bg-gray-700/50 hover:bg-gray-700' 
                                : 'bg-gray-50 hover:bg-gray-100'
                            } transition-colors`}
                          >
                            <div>
                              <p className={`text-sm ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                {spec.label}
                              </p>
                              <p className="font-medium mt-1">{spec.value}</p>
                            </div>
                            {spec.copyable && (
                              <button
                                onClick={() => handleCopy(spec.value)}
                                className={`p-2 rounded-lg transition-colors ${
                                  isDarkMode
                                    ? 'hover:bg-gray-600'
                                    : 'hover:bg-gray-200'
                                }`}
                              >
                                {copiedValues.includes(spec.value) ? (
                                  <Check size={16} className="text-green-500" />
                                ) : (
                                  <Copy size={16} className={
                                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                  } />
                                )}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={`text-center ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <p className="text-xl">Lütfen incelemek istediğiniz ürünü seçin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;