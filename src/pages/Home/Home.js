import React from 'react'
import Preeloader from '../../Preeloader'
import Services from './Services'

const Home = () => {
    return (
        <>
            <Preeloader />
            <main>
                <section className='service-list'>
                    <Services />
                </section>
            </main>
        </>
    )
}

export default Home
