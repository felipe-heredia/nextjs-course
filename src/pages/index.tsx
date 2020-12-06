import { useEffect, useState } from 'react'

import * as S from '../styles/pages/Home'

interface IProduct {
  id: string
  title: string
}

const Home = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([])

  useEffect(() => {}, [
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProducts(data)
      })
    })
  ])

  return (
    <div>
      <S.Title>Hello World</S.Title>

      <section>
        <S.Title>Products</S.Title>

        <ul>
          {recommendedProducts.map(product => (
            <li key={product.id}>
              {product.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home