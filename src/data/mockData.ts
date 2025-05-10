import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Leather Handbag',
    description: 'Handcrafted from genuine Italian leather, this elegant handbag features multiple compartments and a detachable shoulder strap.',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1579381176012-405f0e448615?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Fashion',
    createdAt: '2023-01-15T00:00:00Z',
    discountPercentage: 0,
    reviews: [
      {
        id: '101',
        name: 'Sarah Johnson',
        rating: 5,
        comment: 'The quality of this handbag is exceptional. The leather is butter-soft and the craftsmanship is impeccable.',
        date: '2023-05-10T14:25:00Z'
      },
      {
        id: '102',
        name: 'Michael Brown',
        rating: 4,
        comment: 'Bought this for my wife and she loves it. Very elegant and practical design.',
        date: '2023-04-28T09:15:00Z'
      }
    ]
  },
  {
    id: '2',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Experience immersive sound with these premium wireless headphones featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design.',
    price: 299.95,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80',
    category: 'Tech',
    createdAt: '2023-02-10T00:00:00Z',
    discountPercentage: 10,
    reviews: [
      {
        id: '103',
        name: 'David Wilson',
        rating: 5,
        comment: 'Best headphones I\'ve ever owned! The noise cancellation is amazing for travel.',
        date: '2023-05-15T18:30:00Z'
      },
      {
        id: '104',
        name: 'Emily Clark',
        rating: 4,
        comment: 'Great sound quality and comfortable for long listening sessions. Battery life is impressive.',
        date: '2023-04-20T11:45:00Z'
      }
    ]
  },
  {
    id: '3',
    name: 'Automatic Espresso Machine',
    description: 'Create barista-quality coffee at home with this fully automatic espresso machine. Features customizable settings, built-in grinder, and milk frother.',
    price: 799.00,
    image: 'https://images.unsplash.com/photo-1637029765108-b2eec167fc83?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home',
    createdAt: '2023-03-05T00:00:00Z',
    discountPercentage: 0,
    reviews: [
      {
        id: '105',
        name: 'Robert Taylor',
        rating: 5,
        comment: 'This machine makes perfect espresso every time. Well worth the investment!',
        date: '2023-05-08T08:20:00Z'
      },
      {
        id: '106',
        name: 'Jennifer Adams',
        rating: 3,
        comment: 'Good coffee but the machine is a bit complicated to use and clean.',
        date: '2023-03-15T16:40:00Z'
      }
    ]
  },
  {
    id: '4',
    name: 'Luxury Skincare Set',
    description: 'Complete anti-aging skincare regimen with cleanser, serum, moisturizer, and eye cream. Made with organic ingredients and advanced peptide technology.',
    price: 189.00,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNraW5jYXJlfGVufDB8fDB8fHww',
    category: 'Beauty',
    createdAt: '2023-03-20T00:00:00Z',
    discountPercentage: 15,
    reviews: [
      {
        id: '107',
        name: 'Patricia Martin',
        rating: 5,
        comment: 'I\'ve tried many skincare lines, but this is by far the best. My skin has never looked better!',
        date: '2023-05-12T19:55:00Z'
      }
    ]
  },
  {
    id: '5',
    name: 'Designer Wristwatch',
    description: 'Swiss-made automatic movement with sapphire crystal, stainless steel case, and genuine alligator leather strap. Water-resistant to 100 meters.',
    price: 2499.00,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Fashion',
    createdAt: '2023-01-05T00:00:00Z',
    discountPercentage: 0,
    reviews: [
      {
        id: '108',
        name: 'Thomas Moore',
        rating: 5,
        comment: 'Exceptional craftsmanship and timekeeping accuracy. A true heirloom piece.',
        date: '2023-04-30T13:10:00Z'
      },
      {
        id: '109',
        name: 'Richard Davis',
        rating: 4,
        comment: 'Beautiful timepiece that receives many compliments. The only reason for 4 stars is the clasp could be more secure.',
        date: '2023-03-25T10:30:00Z'
      }
    ]
  },
  {
    id: '6',
    name: 'Ultra-thin Laptop',
    description: 'Powerful yet lightweight laptop featuring an 11th Gen processor, 16GB RAM, 1TB SSD, and stunning 4K display in a premium aluminum chassis.',
    price: 1899.00,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    category: 'Tech',
    createdAt: '2023-04-10T00:00:00Z',
    discountPercentage: 5,
    reviews: [
      {
        id: '110',
        name: 'Daniel White',
        rating: 5,
        comment: 'Insanely fast and the battery life is outstanding. Perfect for both work and creative projects.',
        date: '2023-05-14T15:45:00Z'
      },
      {
        id: '111',
        name: 'Michelle Roberts',
        rating: 5,
        comment: 'The display is gorgeous and performance is flawless. Best laptop I\'ve ever owned.',
        date: '2023-04-05T09:20:00Z'
      }
    ]
  },
  {
    id: '7',
    name: 'Organic Silk Pillowcase Set',
    description: 'Set of two 100% mulberry silk pillowcases with hidden zipper closure. Helps reduce hair breakage and facial wrinkles while you sleep.',
    price: 129.00,
    image: 'https://images.unsplash.com/photo-1691256676366-370303d55b61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home',
    createdAt: '2023-02-15T00:00:00Z',
    discountPercentage: 0,
    reviews: [
      {
        id: '112',
        name: 'Laura Garcia',
        rating: 5,
        comment: 'These pillowcases are amazing! My hair is less frizzy in the morning and my skin looks refreshed.',
        date: '2023-05-02T22:15:00Z'
      }
    ]
  },
  {
    id: '8',
    name: 'Anti-Aging Moisturizer',
    description: 'Luxurious face cream with retinol, hyaluronic acid, and peptides to reduce fine lines and improve skin elasticity. Suitable for all skin types.',
    price: 89.50,
    image: 'https://plus.unsplash.com/premium_photo-1733342675493-2464e394a969?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Beauty',
    createdAt: '2023-03-10T00:00:00Z',
    discountPercentage: 0,
    reviews: [
      {
        id: '113',
        name: 'Karen Miller',
        rating: 5,
        comment: 'I\'ve been using this cream for a month and already see a difference in my skin\'s firmness!',
        date: '2023-04-25T12:05:00Z'
      },
      {
        id: '114',
        name: 'Steven Hill',
        rating: 4,
        comment: 'Good moisturizer with noticeable results, but the scent is a bit strong for my preference.',
        date: '2023-03-18T17:30:00Z'
      }
    ]
  },
  {
    id: '9',
    name: 'Smart Home Security System',
    description: 'Comprehensive security system including HD cameras, motion sensors, and smart doorbell with mobile app integration and 24/7 monitoring option.',
    price: 499.95,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Tech',
    createdAt: '2023-04-05T00:00:00Z',
    discountPercentage: 0,
    reviews: [
      {
        id: '115',
        name: 'Charles Wilson',
        rating: 5,
        comment: 'Easy to install and the app interface is very user-friendly. Gives great peace of mind when away from home.',
        date: '2023-05-11T11:25:00Z'
      },
      {
        id: '116',
        name: 'Amanda Turner',
        rating: 4,
        comment: 'The system works well but the subscription costs for full features are a bit high.',
        date: '2023-04-10T14:50:00Z'
      }
    ]
  },
  {
    id: '10',
    name: 'Merino Wool Sweater',
    description: 'Luxuriously soft and warm sweater made from 100% ethically sourced merino wool. Features a classic design that never goes out of style.',
    price: 159.00,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80',
    category: 'Fashion',
    createdAt: '2023-02-25T00:00:00Z',
    discountPercentage: 20,
    reviews: [
      {
        id: '117',
        name: 'Elizabeth Scott',
        rating: 5,
        comment: 'This is the softest sweater I own. Not itchy at all and keeps me warm without overheating.',
        date: '2023-05-09T16:15:00Z'
      },
      {
        id: '118',
        name: 'William Green',
        rating: 5,
        comment: 'Excellent quality and fit. Worth every penny for a garment that will last for years.',
        date: '2023-04-15T19:40:00Z'
      }
    ]
  },
  {
    id: '11',
    name: 'Aromatherapy Diffuser',
    description: 'Modern ultrasonic essential oil diffuser with 7 LED light options, multiple mist settings, and auto shut-off. Covers up to 300 sq ft.',
    price: 79.95,
    image: 'https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
    category: 'Home',
    createdAt: '2023-04-15T00:00:00Z',
    discountPercentage: 10,
    reviews: [
      {
        id: '119',
        name: 'Jessica Taylor',
        rating: 4,
        comment: 'Beautiful design and works well. I wish the reservoir was larger for longer run time.',
        date: '2023-05-01T20:35:00Z'
      }
    ]
  },
  {
    id: '12',
    name: 'Luxury Bedding Set',
    description: 'Luxurious 1000 thread count Egyptian cotton bedding set. Includes duvet cover, fitted sheet, flat sheet, and pillowcases. Available in several elegant colors.',
    price: 249.00,
    image: 'https://images.unsplash.com/photo-1592229505678-cf99a9908e03?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home',
    createdAt: '2023-01-25T00:00:00Z',
    discountPercentage: 0,
    reviews: [
      {
        id: '120',
        name: 'Elizabeth Scott',
        rating: 5,
        comment: 'The quality of this bedding is exceptional. It\'s incredibly soft and the color is exactly as shown.',
        date: '2023-04-30T21:10:00Z'
      },
      {
        id: '121',
        name: 'Richard Baker',
        rating: 4,
        comment: 'Very comfortable and luxurious feel. My only complaint is that it wrinkles easily.',
        date: '2023-03-22T14:25:00Z'
      }
    ]
  },
  {
    id: '13',
    name: 'Premium Coffee Bean Gift Box',
    description: 'A curated selection of rare, single-origin coffee beans from around the world. Each box contains four different varieties, freshly roasted and packaged to preserve flavor.',
    price: 79.95,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Food',
    createdAt: '2023-03-15T00:00:00Z',
    discountPercentage: 0,
    reviews: [
      {
        id: '122',
        name: 'Christopher Lewis',
        rating: 5,
        comment: 'As a coffee enthusiast, I\'m impressed with the quality and variety. Each bean has a distinct and complex flavor profile.',
        date: '2023-05-12T07:40:00Z'
      }
    ]
  },
  {
    id: '14',
    name: 'Luxury Facial Oil',
    description: 'Nourishing facial oil made with 24K gold flakes and botanical extracts. Hydrates and revitalizes skin while reducing signs of aging. Suitable for all skin types.',
    price: 119.00,
    image: 'https://images.unsplash.com/photo-1600634999623-864991678406?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Beauty',
    createdAt: '2023-05-01T00:00:00Z',
    discountPercentage: 5,
    reviews: [
      {
        id: '123',
        name: 'Natalie Wong',
        rating: 5,
        comment: 'This oil has transformed my skin! It absorbs well and gives a beautiful glow.',
        date: '2023-04-25T19:50:00Z'
      },
      {
        id: '124',
        name: 'Victoria Edwards',
        rating: 4,
        comment: 'Love the formula but the gold flakes are more for show than effect. Still, my skin looks amazing.',
        date: '2023-03-30T11:15:00Z'
      }
    ]
  },
  {
    id: '15',
    name: 'Handcrafted Leather Wallet',
    description: 'Elegant bifold wallet handcrafted from full-grain leather. Features multiple card slots, bill compartments, and RFID blocking technology. Will develop a beautiful patina over time.',
    price: 89.95,
    image: 'https://images.unsplash.com/photo-1689844495793-ddcdd00e9482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Fashion',
    createdAt: '2023-02-01T00:00:00Z',
    discountPercentage: 0,
    reviews: [
      {
        id: '125',
        name: 'Andrew Thompson',
        rating: 5,
        comment: 'Exceptional craftsmanship. This wallet is slim yet holds everything I need.',
        date: '2023-05-15T10:20:00Z'
      },
      {
        id: '126',
        name: 'Brian Mitchell',
        rating: 5,
        comment: 'The leather quality is outstanding. Worth every penny for something you use daily.',
        date: '2023-04-08T16:45:00Z'
      }
    ]
  }
]; 