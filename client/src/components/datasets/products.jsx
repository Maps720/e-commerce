const products = [
    {
        id: 2132,
        category: 'Electronics',
        name: 'iPhone 15 Pro Max',
        description: `Discover the cutting-edge technology of the iPhone 15. With a sleek design, advanced camera system, powerful processor, and stunning display, this smartphone delivers exceptional performance and seamless integration with the Apple ecosystem. Perfect for capturing memories, streaming content, and staying connected.`,
        forms: {
            formFactor1: {
                name: 'Storage',
                priceEffect: true,
                objects: {
                    object1: {
                        name: '128GB',
                        price: 31000,
                        image: 'i-15.jpg',
                        pieces: {
                            form1: {
                                name: 'Sky blue',
                                units: 1
                            },
                            form2: {
                                name: 'Lime',
                                units: 0
                            },
                            form3: {
                                name: 'Black',
                                units: 2
                            },
                            form4: {
                                name: 'Rose',
                                units: 1
                            },
                            form5: {
                                name: 'Gold',
                                units: 0
                            }
                        }
                    },
                    object2: {
                        name: '258GB',
                        price: 32000,
                        image: 'i-15.jpg',
                        pieces: {
                            form1: {
                                name: 'Sky blue',
                                units: 0
                            },
                            form2: {
                                name: 'Lime',
                                units: 0
                            },
                            form3: {
                                name: 'Black',
                                units: 0
                            },
                            form4: {
                                name: 'Rose',
                                units: 0
                            },
                            form5: {
                                name: 'Gold',
                                units: 0
                            }
                        }
                    },
                    object3: {
                        name: '512GB',
                        price: 34000,
                        image: 'i-15.jpg',
                        pieces: {
                            form1: {
                                name: 'Sky blue',
                                units: 3
                            },
                            form2: {
                                name: 'Lime',
                                units: 2
                            },
                            form3: {
                                name: 'Black',
                                units: 2
                            },
                            form4: {
                                name: 'Rose',
                                units: 1
                            },
                            form5: {
                                name: 'Gold',
                                units: 2
                            }
                        }
                    },
                    object4: {
                        name: '1TB',
                        price: 37000,
                        image: 'i-15.jpg',
                        pieces: {
                            form1: {
                                name: 'Sky blue',
                                units: 0
                            },
                            form2: {
                                name: 'Lime',
                                units: 0
                            },
                            form3: {
                                name: 'Black',
                                units: 0
                            },
                            form4: {
                                name: 'Rose',
                                units: 1
                            },
                            form5: {
                                name: 'Gold',
                                units: 1
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Black'
                    },
                    object2: {
                        name: 'Gold'
                    },
                    object3: {
                        name: 'Sky blue'
                    },
                    object4: {
                        name: 'Rose'
                    },
                    object5: {
                        name: 'Lime'
                    }
                }
            },
        },
        price: 31000, // lowest price after discount
        units: {
            left: 18,
            sold: 237
        },
        image: ['i-15.jpg'],
        reviews: {
            rating: 4.8,
            count: 120
        },
        discount: {
            retail: {
                percentage: 2,
                valid: 'Aug 10, 2024 (CAT)'
            },
            wholesale: {
                percantage: 3,
                minimum: 10
            }
        }
    },
    {
        id: 6128,
        category: 'Electronics',
        name: 'Samsung A13',
        description: `Explore the features of the Samsung A13. This smartphone offers a sleek design, a reliable camera system, a powerful processor, and a vibrant display, making it ideal for capturing moments, streaming content, and staying connected.`,
        forms: {
            formFactor1: {
                name: 'Storage',
                priceEffect: true,
                objects: {
                    object1: {
                        name: '32GB',
                        price: 2500,
                        image: 'samsung.jpg',
                        pieces: {
                            form1: {
                                name: 'Black',
                                units: 10
                            },
                            form2: {
                                name: 'Blue',
                                units: 5
                            },
                            form3: {
                                name: 'White',
                                units: 8
                            }
                        }
                    },
                    object2: {
                        name: '64GB',
                        price: 2800,
                        image: 'samsung.jpg',
                        pieces: {
                            form1: {
                                name: 'Black',
                                units: 0
                            },
                            form2: {
                                name: 'Blue',
                                units: 0
                            },
                            form3: {
                                name: 'White',
                                units: 0
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Black'
                    },
                    object2: {
                        name: 'Blue'
                    },
                    object3: {
                        name: 'White'
                    }
                }
            }
        },
        price: 2500, // lowest price after discount
        units: {
            left: 23,
            sold: 0 // update based on your data
        },
        image: ['samsung.jpg'],
        reviews: {
            rating: 4.5, // example rating
            count: 80 // example review count
        },
        discount: {
            retail: {
                percentage: 5,
                valid: 'Sep 30, 2024 (CAT)'
            },
            wholesale: {
                percentage: 7,
                minimum: 10
            }
        }
    },
    {
        id: 1234,
        category: 'Electronics',
        name: 'Acer Laptop Core i5-5500',
        description: `The Acer Laptop Core i5-5500 offers robust performance with its powerful processor, ample storage, and sleek design. Perfect for work, entertainment, and everyday use.`,
        forms: {
            formFactor1: {
                name: 'Storage',
                priceEffect: true,
                objects: {
                    object1: {
                        name: '256GB SSD',
                        price: 8500,
                        image: 'laptop.jpg',
                        pieces: {
                            form1: {
                                name: 'Silver',
                                units: 5
                            },
                            form2: {
                                name: 'Black',
                                units: 3
                            }
                        }
                    },
                    object2: {
                        name: '512GB SSD',
                        price: 9500,
                        image: 'laptop.jpg',
                        pieces: {
                            form1: {
                                name: 'Silver',
                                units: 0
                            },
                            form2: {
                                name: 'Black',
                                units: 0
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Silver'
                    },
                    object2: {
                        name: 'Black'
                    }
                }
            }
        },
        price: 8500, // lowest price after discount
        units: {
            left: 8,
            sold: 0 // update based on your data
        },
        image: ['laptop.jpg'],
        reviews: {
            rating: 4.6, // example rating
            count: 50 // example review count
        },
        discount: {
            retail: {
                percentage: 3,
                valid: 'Dec 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 5,
                minimum: 5
            }
        }
    },
    {
        id: 9378,
        category: 'Furniture',
        name: 'Sofa',
        description: `Experience comfort and style with our Sofa. Designed with high-quality materials and a modern aesthetic, this piece is perfect for enhancing your living space.`,
        forms: {
            formFactor1: {
                name: 'Material',
                priceEffect: true,
                objects: {
                    object1: {
                        name: 'Leather',
                        price: 18000,
                        image: 'sofa.jpg',
                        pieces: {
                            form1: {
                                name: 'Black',
                                units: 2
                            },
                            form2: {
                                name: 'Grey',
                                units: 3
                            }
                        }
                    },
                    object2: {
                        name: 'Fabric',
                        price: 15000,
                        image: 'sofa.jpg',
                        pieces: {
                            form1: {
                                name: 'Grey',
                                units: 1
                            },
                            form2: {
                                name: 'Blue',
                                units: 1
                            },
                            form3: {
                                name: 'Black',
                                units: 3
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Black'
                    },
                    object3: {
                        name: 'Grey'
                    },
                    object4: {
                        name: 'Blue'
                    }
                }
            }
        },
        price: 15000, // lowest price after discount
        units: {
            left: 5,
            sold: 0 // update based on your data
        },
        image: ['sofa.jpg', 'sofa-blue.jpg', 'sofa-black.jpg'],
        reviews: {
            rating: 4.7, // example rating
            count: 30 // example review count
        },
        discount: {
            retail: {
                percentage: 10,
                valid: 'Dec 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 12,
                minimum: 3
            }
        }
    },
    {
        id: 5783,
        category: 'Furniture',
        name: 'Coffee Table',
        description: `Elegant and functional, our Coffee Table is designed to complement any living room setup. Made with high-quality materials, it offers both durability and style.`,
        forms: {
            formFactor1: {
                name: 'Material',
                priceEffect: true,
                objects: {
                    object1: {
                        name: 'Wood',
                        price: 3500,
                        image: 'coffee-table.jpg',
                        pieces: {
                            form1: {
                                name: 'Oak',
                                units: 4
                            },
                            form2: {
                                name: 'Walnut',
                                units: 3
                            }
                        }
                    },
                    object2: {
                        name: 'Glass',
                        price: 3800,
                        image: 'coffee-table.jpg',
                        pieces: {
                            form1: {
                                name: 'Clear',
                                units: 3
                            },
                            form2: {
                                name: 'Tinted',
                                units: 2
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Oak'
                    },
                    object2: {
                        name: 'Walnut'
                    },
                    object3: {
                        name: 'Clear'
                    },
                    object4: {
                        name: 'Tinted'
                    }
                }
            }
        },
        price: 3500, // lowest price after discount
        units: {
            left: 12,
            sold: 0 // update based on your data
        },
        image: ['coffee-table.jpg'],
        reviews: {
            rating: 4.6, // example rating
            count: 25 // example review count
        },
        discount: {
            retail: {
                percentage: 8,
                valid: 'Nov 30, 2024 (CAT)'
            },
            wholesale: {
                percentage: 10,
                minimum: 5
            }
        }
    },
    {
        id: 4893,
        category: 'Footwear',
        name: 'Running Shoes',
        description: `Enhance your running experience with our Running Shoes. Designed for comfort and performance, they are perfect for both casual runners and serious athletes.`,
        forms: {
            formFactor1: {
                name: 'Size',
                priceEffect: true,
                objects: {
                    object1: {
                        name: 'Size 8',
                        price: 650,
                        image: 'running-shoes.jpg',
                        pieces: {
                            form1: {
                                name: 'Red',
                                units: 5
                            },
                            form2: {
                                name: 'Blue',
                                units: 4
                            },
                            form3: {
                                name: 'Black',
                                units: 3
                            }
                        }
                    },
                    object2: {
                        name: 'Size 9',
                        price: 650,
                        image: 'running-shoes.jpg',
                        pieces: {
                            form1: {
                                name: 'Red',
                                units: 4
                            },
                            form2: {
                                name: 'Blue',
                                units: 3
                            },
                            form3: {
                                name: 'Black',
                                units: 1
                            }
                        }
                    },
                    object3: {
                        name: 'Size 10',
                        price: 700,
                        image: 'running-shoes.jpg',
                        pieces: {
                            form1: {
                                name: 'Red',
                                units: 4
                            },
                            form2: {
                                name: 'Blue',
                                units: 0
                            },
                            form3: {
                                name: 'Black',
                                units: 0
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Red'
                    },
                    object2: {
                        name: 'Blue'
                    },
                    object3: {
                        name: 'Black'
                    }
                }
            }
        },
        price: 650, // lowest price after discount
        units: {
            left: 20,
            sold: 0 // update based on your data
        },
        image: ['running-shoes.jpg'],
        reviews: {
            rating: 4.4, // example rating
            count: 40 // example review count
        },
        discount: {
            retail: {
                percentage: 5,
                valid: 'Oct 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 7,
                minimum: 10
            }
        }
    },
    {
        id: 7142,
        category: 'Footwear',
        name: 'Sandals',
        description: `Step into comfort with our stylish Sandals. Designed for both casual and semi-formal occasions, these sandals provide excellent support and durability.`,
        forms: {
            formFactor1: {
                name: 'Size',
                priceEffect: true,
                objects: {
                    object1: {
                        name: 'Size 7',
                        price: 250,
                        image: 'sandals.jpg',
                        pieces: {
                            form1: {
                                name: 'Brown',
                                units: 10
                            },
                            form2: {
                                name: 'Black',
                                units: 5
                            }
                        }
                    },
                    object2: {
                        name: 'Size 8',
                        price: 250,
                        image: 'sandals.jpg',
                        pieces: {
                            form1: {
                                name: 'Brown',
                                units: 8
                            },
                            form2: {
                                name: 'Black',
                                units: 7
                            }
                        }
                    },
                    object3: {
                        name: 'Size 9',
                        price: 250,
                        image: 'sandals.jpg',
                        pieces: {
                            form1: {
                                name: 'Brown',
                                units: 4
                            },
                            form2: {
                                name: 'Black',
                                units: 6
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Brown'
                    },
                    object2: {
                        name: 'Black'
                    }
                }
            }
        },
        price: 250, // lowest price after discount
        units: {
            left: 30,
            sold: 0 // update based on your data
        },
        image: ['sandals.jpg'],
        reviews: {
            rating: 4.3, // example rating
            count: 15 // example review count
        },
        discount: {
            retail: {
                percentage: 5,
                valid: 'Sep 30, 2024 (CAT)'
            },
            wholesale: {
                percentage: 7,
                minimum: 10
            }
        }
    },
    {
        id: 6273,
        category: 'Food',
        name: 'Chocolate Bar',
        description: `Indulge in the rich and creamy taste of our Chocolate Bar. Perfect for satisfying your sweet tooth or sharing with friends.`,
        forms: {
            formFactor1: {
                name: 'Pack Size',
                priceEffect: true,
                objects: {
                    object1: {
                        name: 'Single',
                        price: 20,
                        image: 'chocolate.jpg',
                        pieces: {
                            form1: {
                                name: 'Mint Chocolate',
                                units: 30
                            },
                            form2: {
                                name: 'Dark Chocolate',
                                units: 40
                            }
                        }
                    },
                    object2: {
                        name: 'Pack of 5',
                        price: 90,
                        image: 'chocolate.jpg',
                        pieces: {
                            form1: {
                                name: 'Dark Chocolate',
                                units: 20
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Flavor',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Mint Chocolate'
                    },
                    object2: {
                        name: 'Dark Chocolate'
                    },
                    object3: {
                        name: 'White Chocolate'
                    }
                }
            }
        },
        price: 20, // lowest price after discount
        units: {
            left: 50,
            sold: 0 // update based on your data
        },
        image: ['chocolate.jpg'],
        reviews: {
            rating: 4.8, // example rating
            count: 120 // example review count
        },
        discount: {
            retail: {
                percentage: 2,
                valid: 'Dec 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 3,
                minimum: 10
            }
        }
    },
    {
        id: 4827,
        category: 'Food',
        name: 'Canned Soup',
        description: `Enjoy a warm and hearty meal with our Canned Soup. Perfect for quick lunches or dinners, it's packed with flavor and nutrients.`,
        forms: {
            formFactor1: {
                name: 'Size',
                priceEffect: true,
                objects: {
                    object1: {
                        name: 'Small (200g)',
                        price: 12,
                        image: 'canned-soup.jpg',
                        pieces: {
                            form1: {
                                name: 'Chicken',
                                units: 20
                            },
                            form2: {
                                name: 'Vegetable',
                                units: 20
                            }
                        }
                    },
                    object2: {
                        name: 'Large (400g)',
                        price: 20,
                        image: 'canned-soup2.jpg',
                        pieces: {
                            form1: {
                                name: 'Chicken',
                                units: 10
                            },
                            form2: {
                                name: 'Vegetable',
                                units: 10
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Flavor',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Chicken'
                    },
                    object2: {
                        name: 'Vegetable'
                    }
                }
            }
        },
        price: 12, // lowest price after discount
        units: {
            left: 40,
            sold: 0 // update based on your data
        },
        image: ['canned-soup.jpg', 'canned-soup2.jpg', 'canned-soup3.jpg'],
        reviews: {
            rating: 4.2, // example rating
            count: 30 // example review count
        },
        discount: {
            retail: {
                percentage: 3,
                valid: 'Oct 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 5,
                minimum: 20
            }
        }
    },
    {
        id: 3928,
        category: 'Tools',
        name: 'Drill Machine',
        description: `Get the job done efficiently with our powerful Drill Machine. Ideal for both professionals and DIY enthusiasts, it offers durability and precision.`,
        forms: {
            formFactor1: {
                name: 'Power',
                priceEffect: true,
                objects: {
                    object1: {
                        name: '500W',
                        price: 3999,
                        image: 'drill-machine.jpg',
                        pieces: {
                            form1: {
                                name: 'Standard',
                                units: 5
                            },
                            form2: {
                                name: 'Premium',
                                units: 3
                            }
                        }
                    },
                    object2: {
                        name: '750W',
                        price: 4500,
                        image: 'drill-machine2.jpg',
                        pieces: {
                            form1: {
                                name: 'Standard',
                                units: 4
                            },
                            form2: {
                                name: 'Premium',
                                units: 4
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Type',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Corded'
                    },
                    object2: {
                        name: 'Cordless'
                    }
                }
            }
        },
        price: 3999, // lowest price after discount
        units: {
            left: 8,
            sold: 0 // update based on your data
        },
        image: ['drill-machine.jpg', 'drill-machine2.jpg'],
        reviews: {
            rating: 4.5, // example rating
            count: 50 // example review count
        },
        discount: {
            retail: {
                percentage: 10,
                valid: 'Nov 30, 2024 (CAT)'
            },
            wholesale: {
                percentage: 12,
                minimum: 5
            }
        }
    },
    {
        id: 1892,
        category: 'Tools',
        name: 'Screwdriver Set',
        description: `Our Screwdriver Set includes a variety of sizes to handle any task. Perfect for professionals and DIY projects, it offers reliability and versatility.`,
        forms: {
            formFactor1: {
                name: 'Pieces',
                priceEffect: true,
                objects: {
                    object1: {
                        name: '22 Pieces',
                        price: 349,
                        image: 'screwdriver2.jpg',
                        pieces: {
                            form1: {
                                name: 'Standard',
                                units: 10
                            }
                        }
                    },
                    object2: {
                        name: '46 Pieces',
                        price: 600,
                        image: 'screwdriver3.jpg',
                        pieces: {
                            form1: {
                                name: 'Standard',
                                units: 8
                            }
                        }
                    },
                    object3: {
                        name: '54 Pieces',
                        price: 699,
                        image: 'screwdriver.jpg',
                        pieces: {
                            form1: {
                                name: 'Standard',
                                units: 8
                            }
                        }
                    }
                }
            }
        },
        price: 349, // lowest price after discount
        units: {
            left: 15,
            sold: 0 // update based on your data
        },
        image: ['screwdriver.jpg', 'screwdriver2.jpg', 'screwdriver3.jpg'],
        reviews: {
            rating: 4.4, // example rating
            count: 30 // example review count
        },
        discount: {
            retail: {
                percentage: 5,
                valid: 'Dec 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 7,
                minimum: 10
            }
        }
    },
    {
        id: 7890,
        category: 'Clothes',
        name: 'T-Shirt',
        description: `Stay comfortable and stylish with our T-Shirt. Made from high-quality materials, it's perfect for everyday wear.`,
        forms: {
            formFactor1: {
                name: 'Color',
                priceEffect: true,
                objects: {
                    object1: {
                        name: 'Black',
                        price: 200,
                        image: 'black-t-shirt.jpg',
                        pieces: {
                            form1: {
                                name: 'Medium',
                                units: 10
                            },
                        }
                    },
                    object2: {
                        name: 'Red',
                        price: 200,
                        image: 'red-t-shirt.jpg',
                        pieces: {
                            form1: {
                                name: 'Large',
                                units: 5
                            },
                            form2: {
                                name: 'Medium',
                                units: 3
                            }
                        }
                    },
                    object3: {
                        name: 'Green',
                        price: 200,
                        image: 'green-t-shirt.jpg',
                        pieces: {
                            form1: {
                                name: 'Small',
                                units: 5
                            },
                            form2: {
                                name: 'Large',
                                units: 3
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Size',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Small'
                    },
                    object2: {
                        name: 'Medium'
                    },
                    object3: {
                        name: 'Large'
                    }
                }
            }
        },
        price: 200, // lowest price after discount
        units: {
            left: 25,
            sold: 0 // update based on your data
        },
        image: ['black-t-shirt.jpg', 'red-t-shirt.jpg', 'green-t-shirt.jpg'],
        reviews: {
            rating: 4.6, // example rating
            count: 40 // example review count
        },
        discount: {
            retail: {
                percentage: 3,
                valid: 'Oct 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 5,
                minimum: 20
            }
        }
    },
    {
        id: 9876,
        category: 'Clothes',
        name: 'Jeans',
        description: `Experience the perfect fit with our stylish and durable Jeans. Ideal for any casual or semi-formal occasion, they offer comfort and a modern look.`,
        forms: {
            formFactor1: {
                name: 'Size',
                priceEffect: true,
                objects: {
                    object1: {
                        name: 'Small',
                        price: 350,
                        image: 'jeans.png',
                        pieces: {
                            form1: {
                                name: 'Blue',
                                units: 8
                            },
                            form2: {
                                name: 'Black',
                                units: 3
                            }
                        }
                    },
                    object2: {
                        name: 'Medium',
                        price: 350,
                        image: 'jeans.png',
                        pieces: {
                            form1: {
                                name: 'Blue',
                                units: 5
                            },
                            form2: {
                                name: 'Black',
                                units: 2
                            }
                        }
                    },
                    object3: {
                        name: 'Large',
                        price: 350,
                        image: 'jeans.png',
                        pieces: {
                            form1: {
                                name: 'Blue',
                                units: 0
                            },
                            form2: {
                                name: 'Black',
                                units: 0
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Blue'
                    },
                    object2: {
                        name: 'Black'
                    }
                }
            }
        },
        price: 350, // lowest price after discount
        units: {
            left: 18,
            sold: 0 // update based on your data
        },
        image: ['jeans.png'],
        reviews: {
            rating: 4.7, // example rating
            count: 25 // example review count
        },
        discount: {
            retail: {
                percentage: 4,
                valid: 'Oct 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 6,
                minimum: 10
            }
        }
    },
    {
        id: 5382,
        category: 'Clothes',
        name: 'Dress',
        description: `Turn heads with our elegant Dress. Perfect for any occasion, it combines style and comfort for a stunning look.`,
        forms: {
            formFactor1: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Red',
                        price: 180,
                        image: 'red-dress.jpg',
                        pieces: {
                            form1: {
                                name: 'Small',
                                units: 5
                            },
                            form2: {
                                name: 'Medium',
                                units: 3
                            }
                        }
                    },
                    object2: {
                        name: 'Black',
                        price: 180,
                        image: 'black-dress.jpg',
                        pieces: {
                            form1: {
                                name: 'Small',
                                units: 2
                            },
                            form2: {
                                name: 'Medium',
                                units: 2
                            },
                            form3: {
                                name: 'Large',
                                units: 5
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Size',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Small'
                    },
                    object2: {
                        name: 'Medium'
                    },
                    object3: {
                        name: 'Large'
                    }
                }
            }
        },
        price: 180, // lowest price after discount
        units: {
            left: 12,
            sold: 0 // update based on your data
        },
        image: ['red-dress.jpg', 'black-dress.jpg'],
        reviews: {
            rating: 4.5, // example rating
            count: 18 // example review count
        },
        discount: {
            retail: {
                percentage: 5,
                valid: 'Nov 30, 2024 (CAT)'
            },
            wholesale: {
                percentage: 7,
                minimum: 10
            }
        }
    },
    {
        id: 2893,
        category: 'Clothes',
        name: 'Hoodie',
        description: `Stay warm and stylish with our comfortable Hoodie. Perfect for casual wear, it offers great warmth and a trendy look.`,
        forms: {
            formFactor1: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Black',
                        price: 280,
                        image: 'black-hoodie.jpg',
                        pieces: {
                            form1: {
                                name: 'Medium',
                                units: 8
                            },
                            form2: {
                                name: 'Small',
                                units: 5
                            }
                        }
                    },
                    object2: {
                        name: 'Blue',
                        price: 280,
                        image: 'Blue-hoodie.jpg',
                        pieces: {
                            form1: {
                                name: 'Small',
                                units: 5
                            },
                            form2: {
                                name: 'Large',
                                units: 2
                            }
                        }
                    },
                    object3: {
                        name: 'Red',
                        price: 280,
                        image: 'Red-hoodie.jpg',
                        pieces: {
                            form1: {
                                name: 'Small',
                                units: 2
                            },
                            form2: {
                                name: 'Medium',
                                units: 1
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Size',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Small'
                    },
                    object2: {
                        name: 'Medium'
                    },
                    object3: {
                        name: 'Large'
                    },
                    object4: {
                        name: 'Extra Large'
                    }
                }
            }
        },
        price: 280, // lowest price after discount
        units: {
            left: 20,
            sold: 0 // update based on your data
        },
        image: ['black-hoodie.jpg', 'blue-hoodie.jpg', 'red-hoodie.jpg'],
        reviews: {
            rating: 4.6, // example rating
            count: 22 // example review count
        },
        discount: {
            retail: {
                percentage: 4,
                valid: 'Dec 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 6,
                minimum: 15
            }
        }
    },
    {
        id: 6372,
        category: 'Cosmetics',
        name: 'Eye Shadow Palette',
        description: `Enhance your beauty with our versatile Eye Shadow Palette. Featuring a range of colors perfect for any occasion, it allows for endless creativity.`,
        forms: {
            formFactor1: {
                name: 'Shade',
                priceEffect: true,
                objects: {
                    object1: {
                        name: 'Nude',
                        price: 25,
                        image: 'eye-shadow.jpg',
                        pieces: {
                            form1: {
                                name: 'Matte',
                                units: 10
                            },
                            form2: {
                                name: 'Shimmer',
                                units: 20
                            }
                        }
                    },
                    object2: {
                        name: 'Bold',
                        price: 25,
                        image: 'eye-shadow2.jpg',
                        pieces: {
                            form1: {
                                name: 'Matte',
                                units: 15
                            },
                            form2: {
                                name: 'Shimmer',
                                units: 5
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Finish',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Matte'
                    },
                    object2: {
                        name: 'Shimmer'
                    }
                }
            }
        },
        price: 25, // lowest price after discount
        units: {
            left: 30,
            sold: 0 // update based on your data
        },
        image: ['eye-shadow.jpg', 'eye-shadow2.jpg'],
        reviews: {
            rating: 4.5, // example rating
            count: 40 // example review count
        },
        discount: {
            retail: {
                percentage: 5,
                valid: 'Dec 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 7,
                minimum: 20
            }
        }
    },
    {
        id: 5372,
        category: 'Cosmetics',
        name: 'Foundation Make up',
        description: `Achieve a flawless look with our lightweight and long-lasting Foundation. Suitable for all skin types, it provides excellent coverage and a natural finish.`,
        forms: {
            formFactor1: {
                name: 'Shade',
                priceEffect: true,
                objects: {
                    object1: {
                        name: 'Light',
                        price: 18,
                        image: 'foundation.jpg',
                        pieces: {
                            form1: {
                                name: 'Natural',
                                units: 10
                            },
                            form2: {
                                name: 'Warm',
                                units: 15
                            }
                        }
                    },
                    object2: {
                        name: 'Medium',
                        price: 18,
                        image: 'foundation.jpg',
                        pieces: {
                            form1: {
                                name: 'Natural',
                                units: 5
                            },
                            form2: {
                                name: 'Warm',
                                units: 5
                            }
                        }
                    },
                    object3: {
                        name: 'Dark',
                        price: 18,
                        image: 'foundation.jpg',
                        pieces: {
                            form1: {
                                name: 'Natural',
                                units: 0
                            },
                            form2: {
                                name: 'Warm',
                                units: 0
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Finish',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Natural'
                    },
                    object2: {
                        name: 'Warm'
                    }
                }
            }
        },
        price: 18, // lowest price after discount
        units: {
            left: 35,
            sold: 0 // update based on your data
        },
        image: ['foundation.jpg'],
        reviews: {
            rating: 4.6, // example rating
            count: 30 // example review count
        },
        discount: {
            retail: {
                percentage: 4,
                valid: 'Nov 30, 2024 (CAT)'
            },
            wholesale: {
                percentage: 6,
                minimum: 15
            }
        }
    },
    {
        id: 8826,
        category: 'Cosmetics',
        name: 'Mascara',
        description: `Achieve dramatic and voluminous lashes with our high-quality Mascara. It provides long-lasting wear and enhances the natural beauty of your eyes.`,
        forms: {
            formFactor1: {
                name: 'Type',
                priceEffect: true,
                objects: {
                    object1: {
                        name: 'Lengthening',
                        price: 10,
                        image: 'mascara.jpg',
                        pieces: {
                            form1: {
                                name: 'Black',
                                units: 20
                            },
                            form2: {
                                name: 'Brown',
                                units: 10
                            }
                        }
                    },
                    object2: {
                        name: 'Volumizing',
                        price: 10,
                        image: 'mascara.jpg',
                        pieces: {
                            form1: {
                                name: 'Black',
                                units: 5
                            },
                            form2: {
                                name: 'Brown',
                                units: 5
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Black'
                    },
                    object2: {
                        name: 'Brown'
                    }
                }
            }
        },
        price: 10, // lowest price after discount
        units: {
            left: 40,
            sold: 0 // update based on your data
        },
        image: ['mascara.jpg'],
        reviews: {
            rating: 4.4, // example rating
            count: 50 // example review count
        },
        discount: {
            retail: {
                percentage: 3,
                valid: 'Oct 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 5,
                minimum: 10
            }
        }
    },
    {
        id: 3462,
        category: 'Home Appliances',
        name: 'Toaster',
        description: `Enjoy perfectly toasted bread every morning with our reliable and easy-to-use Toaster. Features adjustable browning settings and a sleek design to complement any kitchen.`,
        forms: {
            formFactor1: {
                name: 'Size',
                priceEffect: true,
                objects: {
                    object1: {
                        name: '2-Slice',
                        price: 420,
                        image: 'toaster2.jpg',
                        pieces: {
                            form1: {
                                name: 'Silver',
                                units: 10
                            },
                            form2: {
                                name: 'Black',
                                units: 10
                            }
                        }
                    },
                    object2: {
                        name: '4-slice',
                        price: 550,
                        image: 'toaster3.jpg',
                        pieces: {
                            form1: {
                                name: 'Silver',
                                units: 5
                            },
                            form2: {
                                name: 'Black',
                                units: 5
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Silver'
                    },
                    object2: {
                        name: 'Black'
                    }
                }
            }
        },
        price: 420, // lowest price after discount
        units: {
            left: 20,
            sold: 0 // update based on your data
        },
        image: ['toaster.jpg', 'toaster2.jpg', 'toaster3.jpg'],
        reviews: {
            rating: 4.2, // example rating
            count: 60 // example review count
        },
        discount: {
            retail: {
                percentage: 5,
                valid: 'Dec 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 7,
                minimum: 20
            }
        }
    },
    {
        id: 2007,
        category: 'Home Appliances',
        name: 'Microwave Oven',
        description: `Cook and reheat your meals quickly and efficiently with our versatile Microwave Oven. Features multiple power settings, a spacious interior, and a modern design.`,
        forms: {
            formFactor1: {
                name: 'Capacity',
                priceEffect: true,
                objects: {
                    object1: {
                        name: '20L',
                        price: 3280,
                        image: 'microwave.jpg',
                        pieces: {
                            form1: {
                                name: 'White',
                                units: 5
                            },
                            form2: {
                                name: 'Black',
                                units: 5
                            }
                        }
                    },
                    object2: {
                        name: '30L',
                        price: 3480,
                        image: 'microwave2.jpg',
                        pieces: {
                            form1: {
                                name: 'White',
                                units: 3
                            },
                            form2: {
                                name: 'Black',
                                units: 2
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Color',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'White'
                    },
                    object2: {
                        name: 'Black'
                    }
                }
            }
        },
        price: 3280, // lowest price after discount
        units: {
            left: 15,
            sold: 0 // update based on your data
        },
        image: ['microwave.jpg', 'microwave2.jpg'],
        reviews: {
            rating: 4.7, // example rating
            count: 80 // example review count
        },
        discount: {
            retail: {
                percentage: 4,
                valid: 'Dec 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 6,
                minimum: 10
            }
        }
    },
    {
        id: 9711,
        category: 'Home Appliances',
        name: 'Electric Kettle',
        description: `Boil water quickly and efficiently with our durable and stylish Electric Kettle. Features a large capacity, automatic shut-off, and an ergonomic handle for easy use.`,
        forms: {
            formFactor1: {
                name: 'Capacity',
                priceEffect: true,
                objects: {
                    object1: {
                        name: '1.5L',
                        price: 700,
                        image: 'kettle.jpg',
                        pieces: {
                            form1: {
                                name: 'Stainless Steel',
                                units: 15
                            },
                            form2: {
                                name: 'Plastic',
                                units: 10
                            }
                        }
                    },
                    object2: {
                        name: '2L',
                        price: 850,
                        image: 'kettle2.jpg',
                        pieces: {
                            form1: {
                                name: 'Stainless Steel',
                                units: 5
                            },
                            form2: {
                                name: 'Plastic',
                                units: 10
                            }
                        }
                    }
                }
            },
            formFactor2: {
                name: 'Material',
                priceEffect: false,
                objects: {
                    object1: {
                        name: 'Stainless Steel'
                    },
                    object2: {
                        name: 'Plastic'
                    }
                }
            }
        },
        price: 700, // lowest price after discount
        units: {
            left: 25,
            sold: 0 // update based on your data
        },
        image: ['kettle.jpg', 'kettle2.jpg'],
        reviews: {
            rating: 4.3, // example rating
            count: 70 // example review count
        },
        discount: {
            retail: {
                percentage: 3,
                valid: 'Dec 31, 2024 (CAT)'
            },
            wholesale: {
                percentage: 5,
                minimum: 15
            }
        }
    }
];

export default products;
