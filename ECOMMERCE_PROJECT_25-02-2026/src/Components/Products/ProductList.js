import Jeans from '../../assets/jeans.png'
import Hoodie from '../../assets/hoodie.png'
import LeatherJacket from '../../assets/leather-jacket.png'
import Skirt from '../../assets/skirt.png'
import Tshirt from '../../assets/tshirt.png'
import Sleepsuit from '../../assets/sleepsuit.png' 
import Shirt from '../../assets/shirt.png'
import Dress from '../../assets/dress.png'
import Skater from '../../assets/skater.png'
import Sweater from '../../assets/sweater.png'
import BabyShirt from '../../assets/baby-shirt.png'
import ShirtDress from '../../assets/shirt-dress.png'


const product = [

    {
        id:1,
        name: 'Sports Tshirt',
        image: Tshirt,
        price: 25.99,
        oldPrice: 35.99,
        onSale: true,
        NewArrival: false,
        category:'Mens'

    },
    {
        id: 2,
        name: 'Slim Fit Jeans',
        image: Jeans,
        price: 45.00,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Mens'
    },
    {
        id: 3,
        name: 'Leather Jacket',
        image: LeatherJacket,
        price: 89.99,
        oldPrice: 129.99,
        onSale: false,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 4,
        name: 'Skater Dress',
        image: Skater,
        price: 39.99,
        oldPrice: 59.99,
        onSale: true,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 5,
        name: 'Baby SleepSuit',
        image: Sleepsuit,
        price: 29.99,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 6,
        name: 'Long Sleeve Shirt',
        image: Shirt,
        price: 49.99,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 7,
        name: 'Floral Dress',
        image: Dress,
        price: 120.00,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'kids'
    },
    {
        id:8,
        name: 'Stripes Sweater',
        image: Sweater,
        price: 65.00,
        oldPrice: 85.00,
        onSale: true,
        NewArrival: false,
        category: 'kids'
    },
    {
        id:9,
        name: 'Pink Skirt',
        image: Skirt,
        price: 15.99,
        oldPrice: 20.99,
        onSale: false,
        NewArrival: true,
        category: 'Womens'
    },
    {
        id:10,
        name: 'Baby Shirt',
        image: BabyShirt,
        price: 22.00,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Kids'
    },
    {
        id:11,
        name: 'Hoodie',
        image: Hoodie,
        price: 35.00,
        oldPrice: 45.00,
        onSale: true,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id:12,
        name: 'Full Sleeve Shirt',
        image: ShirtDress,
        price: 10.00,
        oldPrice: 18.00,
        onSale: true,
        NewArrival: false,
        category: 'Womens'
    }
]
export default product