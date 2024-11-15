import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import IconAddButton from '../assets/img/IconAdd.svg';

export default function EditClient() {
    const [password, setPassword] = useState('');
    const [statePass, setStatePass] = useState(false);

    const [clientId, setClientId] = useState('');
    const [client, setClient] = useState({
        nome: '',
        produtos: [],
        valorTotal: '',
        valorPago: '',
        valorRestante: ''
    });
    const [newProduct, setNewProduct] = useState('');

    // Função para resetar o formulário
    const resetForm = () => {
        setClientId('');
        setClient({
            nome: '',
            produtos: [],
            valorTotal: '',
            valorPago: '',
            valorRestante: ''
        });
        setNewProduct('');
    };

    const handleIdChange = (e) => {
        setClientId(e.target.value);
    };

    const handleFetchClient = (e) => {
        e.preventDefault();
        axios.get(`https://api-register-eta.vercel.app/api/clients/${clientId}`)
            .then((response) => {
                setClient(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleProductChange = (e) => {
        setNewProduct(e.target.value);
    };

    const handleAddProduct = () => {
        if (newProduct.trim() !== '') {
            setClient({ ...client, produtos: [...client.produtos, newProduct] });
            setNewProduct('');
        }
    };

    const handleRemoveProduct = (index) => {
        const updatedProducts = client.produtos.filter((_, i) => i !== index);
        setClient({ ...client, produtos: updatedProducts });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://api-register-eta.vercel.app/api/clients/${clientId}`, client)
            .then((response) => {
                console.log('Cliente atualizado:', response.data);
                resetForm(); // Resetar o formulário após atualização
            }).catch((error) => {
                console.log(error);
            });
    };

    const handleDeleteClient = () => {
        axios.delete(`https://api-register-eta.vercel.app/api/clients/${clientId}`)
            .then((response) => {
                console.log('Cliente removido:', response.data);
                resetForm(); // Resetar o formulário após remoção
            }).catch((error) => {
                console.log(error);
            });
    };

    const validation = () => {
        if (password === '07122004') {
            setStatePass(true);
        } else {
            alert('Senha incorreta!');
        }
    };

    return (
        <>
            <section className='bg-bgPrimaryLight w-full min-h-screen overflow-auto flex flex-col gap-8 border-black'>
                {/* NavBar */}
                <div className='w-full min-h-16 flex items-center justify-center'>
                    <NavBar />
                </div>
                {statePass ? (
                    <div className='w-full min-h-7 flex flex-col items-center gap-6 px-4 mb-10'>
                        <h1 className='font-golos text-[32px] text-black font-bold'>Edite seu cliente!</h1>
                        <div className='w-[350px] min-h-[260px] bg-bgPrimaryDark rounded-2xl px-4 py-5 flex flex-col gap-4 sm:w-[640px]'>
                            <div className='flex flex-col gap-4'>
                                <h3 className='font-golos text-base text-white'>ID do Cliente:</h3>
                                <input
                                    type="text"
                                    value={clientId}
                                    onChange={handleIdChange}
                                    className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary'
                                    placeholder='Digite o ID do cliente'
                                />
                                <button onClick={handleFetchClient} className='px-6 py-2 bg-bgGreen rounded-lg font-golos font-bold text-white hover:bg-green-800 transition-all'>Buscar Cliente</button>
                            </div>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-golos text-base text-white'>Nome:</h3>
                                    <input
                                        type="text"
                                        name="nome"
                                        value={client.nome}
                                        onChange={handleInputChange}
                                        className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-golos text-base text-white'>Produtos:</h3>
                                    <div className='flex gap-2 items-center justify-center'>
                                        <input
                                            type="text"
                                            value={newProduct}
                                            onChange={handleProductChange}
                                            className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary'
                                            placeholder='Adicionar novo produto'
                                        />
                                        <button type="button" onClick={handleAddProduct} className='w-10 h-8 bg-bgGreen rounded-full flex items-center justify-center hover:bg-green-800 transition-all'>
                                            <img src={IconAddButton} alt="Adicionar Produto" />
                                        </button>
                                    </div>
                                    <ul className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary min-h-8'>
                                        {client.produtos.map((produto, index) => (
                                            <li key={index} className='font-golos text-[12px] text-grayText font-medium flex justify-between items-center'>
                                                {produto}
                                                <button type="button" onClick={() => handleRemoveProduct(index)} className='text-red-500 hover:text-red-700 transition-all'>Remover</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-golos text-base text-white'>Total a pagar:</h3>
                                    <input
                                        type="text"
                                        name="valorTotal"
                                        value={client.valorTotal}
                                        onChange={handleInputChange}
                                        className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary'
                                    />
                                </div>
                                <div className='flex gap-6 justify-evenly'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='font-golos text-base text-white'>Quanto Pagou:</h3>
                                        <input
                                            type="text"
                                            name="valorPago"
                                            value={client.valorPago}
                                            onChange={handleInputChange}
                                            className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='font-golos text-base text-white'>Quanto Falta:</h3>
                                        <input
                                            type="text"
                                            name="valorRestante"
                                            value={client.valorRestante}
                                            onChange={handleInputChange}
                                            className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary'
                                        />
                                    </div>
                                </div>
                                <button type="submit" className='mt-2 px-4 py-2 bg-bgGreen rounded-lg font-golos font-bold text-white hover:bg-green-800 transition-all'>Salvar</button>
                            </form>
                            <button onClick={handleDeleteClient} className='mt-4 px-4 py-2 bg-red-500 rounded-lg font-golos font-bold text-white hover:bg-red-700 transition-all'>Remover Cliente</button>
                        </div>
                    </div>
                ) : (
                    <div className='w-full min-h-7 flex flex-col items-center gap-6 px-4 mb-10'>
                        <h1 className='font-golos text-[32px] text-black font-bold'>Login para Edição</h1>
                        <form className='w-[350px] bg-bgPrimaryDark rounded-2xl px-4 py-5 flex flex-col gap-4 sm:w-[640px] items-center justify-center'>
                            <h5 className='font-golos font-bold text-white'>Digite a senha para acesso à edição</h5>
                            <input
                                type="password"
                                placeholder='Digite a senha para acesso à edição'
                                className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <button type='button' onClick={validation} className='px-6 py-2 bg-bgGreen rounded-xl flex items-center justify-center hover:bg-green-800 font-golos font-bold text-white'>Login</button>
                        </form>
                    </div>
                )}
            </section>
        </>
    );
}