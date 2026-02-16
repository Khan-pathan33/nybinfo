// import React from 'react'
// import Heading from '../Heading/Heading'
// import FruitsCat from '../../assets/fruits-and-veggies.png'
// import SeaFoodCat from '../../assets/meat-and-seafood.png'
// import DairyCat from '../../assets/dairy-and-eggs.png'
// import Button from '../Button/Button'


// const Category = () => {

//    const renderCards = category.map(card=>{
//     return (
//         // card 
//         <div key={card.id} className='flex-1 basis-[300px]'> 
//         {/* card image */}
        
//               <div className= 'w-full min-h-[30vh] relative -mb-10 '>
//                 <img src={card.image} alt={card.title}
//                 className='absolute bottom-0 left-1/2 -translate-x-1/2' />
//             </div>
//         {/* card content */}
//             <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
//                 <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
//                 <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
//                 <Button content="See All" />
//             </div>
//         </div>
//     )
//    })

//   return (
//    <section>
//      <div className='max-w-[1400px] mx-auto px-10 py-20' >
//        <Heading  highlight="Shop" heading="by category"/>
//        {/* Category cards */}

//        <div className='flex flex-wrap gap-10 md:mt-15 mt-10'>
//         {renderCards}

//        </div>
//      </div>
//    </section>
//   )
// }

// export default Category

// // shop by category items using array

// const category= [
//     {
//         id: 1,
//         title: "Fruites & Veggies",
//         description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
//         image: FruitsCat
//     },
//     {
//         id: 2,
//         title: "Dairy & Eggs",
//         description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogut to artisanal cheeses.',
//         image: DairyCat
//     },
//     {
//         id: 3,
//         title: "Meat & SeaFood",
//         description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
//         image: SeaFoodCat
//     },
// ]


import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import Button from '../Button/Button'

// shop by category items using array
const category = [
  {
    id: 1,
    title: "Fruites & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat,
  },
]

const Category = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="by category" />

        {/* Category cards */}
        <div className="flex flex-wrap gap-10 mt-10 md:mt-15">
          {category.map((card) => (
            <div
              key={card.id}
              className='flex-1 basis-[300px]'
            >
              {/* Card Image */}
              <div className="w-full min-h-[30vh] relative -mb-10">
                <img
                  src={card.image}
                  className="absolute bottom-0"
                />
              </div>

              {/* Card Content */}
              <div className="bg-zinc-100 pt-20 p-8 rounded-xl">
                <h3 className="text-zinc-800 text-3xl font-bold">
                  {card.title}
                </h3>

                <p className="text-zinc-600 mt-3 mb-9">
                  {card.description}
                </p>

                <Button content="See All" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Category
