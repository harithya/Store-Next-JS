import React from 'react'
import Banner from '../components/Banner'
import Section from '../components/Layout/Section'
import Categories from '../components/Items/Categories'

export default function Home() {
  const categories = [
    { title: "Gadgets", img: "categories-gadgets.svg" },
    { title: "Furniture", img: "categories-furniture.svg" },
    { title: "MakeUp", img: "categories-makeup.svg" },
    { title: "Sneaker", img: "categories-sneaker.svg" },
    { title: "Tools", img: "categories-tools.svg" },
    { title: "Baby", img: "categories-baby.svg" },
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

      </Section>
    </div>
  )
}
