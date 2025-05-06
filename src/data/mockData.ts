import type { Product } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Luxury Chronograph Watch',
    description: 'A sophisticated timepiece featuring a stainless steel case, sapphire crystal, and Swiss movement. Perfect for both formal and casual occasions.',
    price: 1299.99,
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Luxury+Watch',
    category: 'Watches',
    reviews: [
      {
        id: '1',
        name: 'John D.',
        rating: 5,
        comment: 'Absolutely stunning watch. The craftsmanship is exceptional.',
        date: '2024-03-15'
      },
      {
        id: '2',
        name: 'Sarah M.',
        rating: 4,
        comment: 'Beautiful design, but a bit pricey. Worth it though!',
        date: '2024-02-20'
      }
    ]
  },
  {
    id: '2',
    name: 'Premium Leather Wallet',
    description: 'Handcrafted from genuine Italian leather, this wallet combines elegance with functionality. Features multiple card slots and a coin pocket.',
    price: 199.99,
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Leather+Wallet',
    category: 'Accessories',
    reviews: [
      {
        id: '3',
        name: 'Michael R.',
        rating: 5,
        comment: 'The quality of the leather is outstanding.',
        date: '2024-04-01'
      }
    ]
  },
  {
    id: '3',
    name: 'Designer Sunglasses',
    description: 'UV-protected lenses with a modern frame design, perfect for sunny days. Lightweight and comfortable for all-day wear.',
    price: 299.99,
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Designer+Sunglasses',
    category: 'Accessories',
    reviews: []
  }
]; 