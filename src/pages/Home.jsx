import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SearchArea from '../components/SearchArea';
import CardsClients from '../components/CardsClients';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <section className='bg-bgPrimaryLight w-full min-h-screen overflow-auto flex flex-col gap-8 border-black'>
                {/* NavBar */}
                <div className='w-full min-h-16 flex items-center justify-center'>
                    <NavBar />
                </div>
                {/* SearchArea */}
                <div className='w-full min-h-4 flex flex-col gap-7 px-4 sm:px-16'>
                    <SearchArea searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                {/* Cards */}
                <div className="w-full min-h-72 px-4 flex flex-col items-center justify-center gap-4 sm:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mb-10">
                    <CardsClients searchTerm={searchTerm} />
                </div>
            </section>
        </>
    );
}