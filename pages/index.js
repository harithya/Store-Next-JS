import React from 'react'
import Banner from '../components/Banner'
import Section from '../components/Layout/Section'
import Categories from '../components/Items/Categories'
import Product from '../components/Items/Product'

export default function Home() {
  const categories = [
    { title: "Gadgets", img: "categories-gadgets.svg" },
    { title: "Furniture", img: "categories-furniture.svg" },
    { title: "MakeUp", img: "categories-makeup.svg" },
    { title: "Sneaker", img: "categories-sneaker.svg" },
    { title: "Tools", img: "categories-tools.svg" },
    { title: "Baby", img: "categories-baby.svg" },
  ]

  const product = [
    { name: "Apple watch 4", price: "$ 840", img: "https://store-html.buildwithangga.id/images/products-apple-watch.jpg" },
    { name: "Orange Bogotta", price: "$ 945", img: "https://store-html.buildwithangga.id/images/products-orange-bogotta.jpg" },
    { name: "Sofa Ternyaman", price: "$ 1,467", img: "https://store-html.buildwithangga.id/images/products-sofa-ternyaman.jpg" },
    { name: "Bubuk Makketi", price: "$ 225", img: "https://store-html.buildwithangga.id/images/products-bubuk-maketti.jpg" },
    { name: "Mavic Kawwe", price: "$ 503", img: "https://store-html.buildwithangga.id/images/products-mavic-kawe.jpg" },
    { name: "Black Edition Nike", price: "$ 70,482", img: "https://store-html.buildwithangga.id/images/products-black-edition-nike.jpg" },
    { name: "Monkey Toys", price: "$ 786", img: "https://store-html.buildwithangga.id/images/products-monkey-toys.jpg" },
    { name: "Tatakan Gelas", price: "$ 225", img: "https://store-html.buildwithangga.id/images/products-tatakan-gelas.jpg" },
  ]
  return (
    <div>
      <Banner />
      <Section title="Trend Categories">
        <div className='grid xl:grid-cols-6 grid-cols-3 gap-6'>
          {categories.map((val) =>
            <Categories
              key={val.title}
              title={val.title}
              img={val.img}
            />)}
        </div>
      </Section>
      <Section title="New Product">
        <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-6'>
          {product.map((val) =>
            <Product
              key={val.name}
              name={val.name}
              price={val.price}
              img={val.img}
            />)}
        </div>
      </Section>
    </div>
  )
}
