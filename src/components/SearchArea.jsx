import React from 'react'

export default function SearchArea({ searchTerm, setSearchTerm }) {
  return (
    <>
        <div className='flex flex-col gap-2 sm:items-center sm:justify-center'>
            <h1 className='font-golos text-black font-bold text-3xl sm:text-4xl'>Faça sua pesquisa!</h1>
            <p className='font-inter text-grayText text-[12px] sm:text-center sm:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi, ab animi cupiditate voluptates, reiciendis perspiciatis, unde recusandae deserunt laudantium inventore quasi enim doloribus suscipit sit sint quaerat modi molestias!</p>
        </div>
        <form>
            <input 
                className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary' 
                type="text"
                placeholder="Pesquisar por nome"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
        </form>
    </>
  )
}
