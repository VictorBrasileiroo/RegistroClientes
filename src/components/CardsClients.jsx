import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CardsClients({ searchTerm }) {
    const [cliente, setCliente] = useState([]);

    useEffect(() => {
        axios.get("https://api-register-eta.vercel.app/api/clients")
            .then((response) => {
                setCliente(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    const filtrarCliente = searchTerm
        ? cliente.filter((item) =>
            item.nome.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    return (
        <>
            {filtrarCliente.map((item) => (
                <div key={item.id} className='w-[350px] min-h-[260px] bg-bgPrimaryDark rounded-2xl px-4 py-5 flex flex-row items-center gap-8 lg:w-[330px] xl:w-[330px] 2xl:w-[400px]'>
                    <div className='w-1/3 h-full flex flex-col items-center justify-center gap-4'>
                        <div className='bg-grayPrimary w-20 h-20 rounded-full'></div>
                        <div className='flex flex-col items-center justify-center'>
                            <h5 className='font-golos text-[12px] text-grayText font-bold'>{item.nome.split(' ')[0]}</h5>
                            <h5 className='font-golos text-[10px] text-grayText font-bold text-center'>{`ID DO USUÁRIO: ${item.id}`}</h5>
                        </div>
                    </div>
                    <div className='w-2/3 h-full flex flex-col items-start justify-between gap-2'>
                        <div>
                            <h3 className='font-golos text-[14px] text-white font-bold'>Nome:</h3>
                            <h5 className='font-golos text-[12px] text-grayText font-medium'>{item.nome}</h5>
                        </div>
                        <div>
                            <h3 className='font-golos text-[14px] text-white font-bold'>Produtos:</h3>
                            <ul>
                                {item.produtos.map((produto, index) => (
                                    <li key={index} className='font-golos text-[12px] text-grayText font-medium'>{produto}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-golos text-[14px] text-white font-bold'>Total a pagar:</h3>
                            <h5 className='font-golos text-[14px] text-grayText font-medium'>R$: {item.valorTotal},00</h5>
                        </div>
                        <div className='flex gap-6'>
                            <div>
                                <h3 className='font-golos text-[12px] text-white font-bold'>Quanto Pagou:</h3>
                                <h5 className='font-golos text-[12px] text-green-500 font-medium'>R$: {item.valorPago},00</h5>
                            </div>
                            <div>
                                <h3 className='font-golos text-[12px] text-white font-bold'>Quanto Falta:</h3>
                                <h5 className='font-golos text-[12px] text-red-500 font-medium'>R$: {item.valorRestante},00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}