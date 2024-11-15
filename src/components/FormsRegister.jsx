import React, { useState } from 'react';
import axios from 'axios';
import IconAddButton from '../assets/img/IconAdd.svg';
import NavBar from '../components/NavBar';

export default function FormsRegister() {
    const [password, setPassword] = useState('');
    const [statePass, setStatePass] = useState(false);

    const [nome, setNome] = useState('');
    const [produtos, setProdutos] = useState('');
    const [valorTotal, setValorTotal] = useState('');
    const [valorPago, setValorPago] = useState('');
    const [valorRestante, setValorRestante] = useState('');
    const [produtosList, setProdutosList] = useState([]);

    // Função para adicionar produto na lista
    const handleAddProduct = () => {
        if (produtos.trim() !== '') {
            setProdutosList([...produtosList, produtos]);
            setProdutos(''); // Limpa o campo de entrada de produtos
        }
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            nome,
            produtos: produtosList,
            valorTotal,
            valorPago,
            valorRestante
        };

        console.log('Enviando dados:', data);

        axios.post('https://api-register-eta.vercel.app/api/clients', data)
            .then(response => {
                console.log('Resposta da API:', response.data);
            })
            .catch(error => {
                console.error('Erro ao enviar dados:', error);
            })
            .finally(() => {
                // Resetando os valores após o envio ou erro
                resetForm();
            });
    };

    // Função para resetar o formulário
    const resetForm = () => {
        setNome('');
        setProdutos('');
        setValorTotal('');
        setValorPago('');
        setValorRestante('');
        setProdutosList([]);
    };

    // Validação da senha
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
                {statePass ? (
                    <div className='w-full min-h-7 flex flex-col items-center gap-6 px-4 mb-10'>
                        <h1 className='font-golos text-[32px] text-black font-bold'>Registre seu cliente!</h1>
                        <form onSubmit={handleSubmit} className='w-[350px] min-h-96 bg-bgPrimaryDark p-6 flex flex-col rounded-3xl gap-5 sm:w-[720px]'>
                            <div className='flex flex-col gap-2'>
                                <h3 className='font-golos text-base text-white'>Nome:</h3>
                                <input 
                                    type="text" 
                                    className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary' 
                                    placeholder='Digite o nome do cliente'
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='font-golos text-base text-white'>Produtos:</h3>
                                <div className='flex gap-4 items-center'>
                                    <input 
                                        type="text" 
                                        className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary' 
                                        placeholder='Digite os produtos'
                                        value={produtos}
                                        onChange={(e) => setProdutos(e.target.value)}
                                    />
                                    <button 
                                        type="button" 
                                        className='w-10 h-8 bg-bgGreen rounded-full flex items-center justify-center hover:bg-green-800 transition-all hover:scale-110'
                                        onClick={handleAddProduct}
                                    >
                                        <img src={IconAddButton} alt="Adicionar Produto" />
                                    </button>
                                </div>
                                <div className='w-full min-h-8 p-2 pl-4 rounded-[10px] bg-grayPrimary mt-2'>
                                    <ul>
                                        {produtosList.map((product, index) => (
                                            <li key={index}>
                                                <h4 className='font-golos text-[16px] text-grayText font-medium'>{product}</h4>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='font-golos text-base text-white'>Valor Total:</h3>
                                <input 
                                    type="text" 
                                    className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary' 
                                    placeholder='Digite o valor total'
                                    value={valorTotal}
                                    onChange={(e) => setValorTotal(e.target.value)}
                                />
                            </div>
                            <div className='flex justify-around gap-6'>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-golos text-base text-white'>Valor Pago:</h3>
                                    <input 
                                        type="text" 
                                        className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary' 
                                        placeholder='Digite o valor'
                                        value={valorPago}
                                        onChange={(e) => setValorPago(e.target.value)}
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-golos text-base text-white'>Valor Faltante:</h3>
                                    <input 
                                        type="text" 
                                        className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary' 
                                        placeholder='Digite o valor'
                                        value={valorRestante}
                                        onChange={(e) => setValorRestante(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-4'>
                                <button type="submit" className='px-8 py-2 bg-bgGreen rounded-xl font-golos font-bold text-white hover:bg-green-800 transition-all hover:scale-110'>Registra</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className='w-full min-h-7 flex flex-col items-center gap-6 px-4 mb-10'>
                        <h1 className='font-golos text-[32px] text-black font-bold'>Login para Registro</h1>
                        <form className='w-[350px] bg-bgPrimaryDark rounded-2xl px-4 py-5 flex flex-col gap-4 sm:w-[640px] items-center justify-center'>
                            <h5 className='font-golos font-bold text-white'>Digite a senha para acesso ao registro</h5>
                            <input
                                type="password"
                                placeholder='Digite a senha para acesso ao registro'
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