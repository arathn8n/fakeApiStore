import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import totalContext from '../context'

const Home = () => {
    const [dataApi, setDataApi] = useState([])
   const [total, setTotal] = useState(0)



    async function getProducts() {
        try {
            const url = 'https://fakestoreapi.com/products'
            const data = await fetch(url)
            const res = await data.json()
            setDataApi(res)
            console.log(res)
        } catch (error) {
            console.error("Error al obtener productos:", error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <h1>fake store</h1>
            <p>total: {total}</p>
            <div className='contentCard'>

                <totalContext.Provider value={{total, setTotal}}>
                {dataApi.map((data) => (
                    <Card
                        key={data.id}
                        title={data.title}
                        price={data.price}
                        desc={data.description}
                        image={data.image}

                    />
                ))}
                </totalContext.Provider>
            </div>
        </div>
    )
}

export default Home
