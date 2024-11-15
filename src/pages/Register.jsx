import React from 'react'
import NavBar from '../components/NavBar'
import FormsRegister from '../components/FormsRegister'

export default function Register() {
    return (
        <>
            <section className='bg-bgPrimaryLight w-full min-h-screen overflow-auto flex flex-col gap-8 border-black'>
                {/* NavBar */}
                <div className='w-full min-h-16 flex items-center justify-center'>
                    <NavBar/>
                </div>
                <div className='w-full min-h-7 flex flex-col items-center gap-6 px-4 mb-10'>
                    <FormsRegister/>
                </div>
            </section>
        </>
    )
}
