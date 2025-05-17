import React, { useState } from 'react';
import axios from 'axios';

export const Signup = () => {
  const [nome_usuario, setNome] = useState('');
  const [sobrenome_usuario, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  // Função para cadastrar um novo usuário
  const Cadastro = async (e) => {
    e.preventDefault();

    //#region VALIDAÇÃO DE DADOS
    if (nome_usuario.length < 3 || nome_usuario.length > 255) {
      setMessage("O nome deve ter entre 3 e 50 caracteres.");
      return;
    }

    if (sobrenome_usuario.length < 3 || sobrenome_usuario.length > 255) {
      setMessage("O nome deve ter entre 3 e 50 caracteres.");
      return;
    }

    if (senha.length < 8 || !/[A-Z]/.test(senha) || !/[0-9]/.test(senha)) {
      setMessage("A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um número.");
      return;
    }

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/; // Formato: 000.000.000-00
    if (!cpfRegex.test(cpf)) {
      setMessage("CPF inválido. Use o formato: 000.000.000-00");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Email inválido. Use o formato: teste@exemplo.com");
      return;
    }

    if (telefone.length < 10 || telefone.length > 20) {
      setMessage("Telefone inválido. Use o formato: 00000-0000");
      return;
    }
    //#endregion

    try {
      console.log("Enviando para a API:", {
        nome_usuario,
        sobrenome_usuario,
        telefone,
        email,
        cpf,
        senha,
      });

      const response = await axios.post('http://localhost:3000/api/usuario', {
        nome_usuario,
        sobrenome_usuario,
        telefone,
        email,
        cpf,
        senha,
      });

      setId(response.data.id);
      setMessage('Cadastro realizado com sucesso!');
      console.log('Cadastro:', response.data);

      // ✅ Exibe um alerta e redireciona para a página inicial
      window.alert("Cadastro realizado com sucesso!");
      window.location.href = '/homepage';
    } catch (error) {
      console.error('Erro no cadastro:', error.response.data);
      setMessage('Erro ao cadastrar. Verifique os dados.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Criar Conta</h2>
      <form onSubmit={Cadastro}>
        <input
          type="text"
          placeholder="Nome"
          value={nome_usuario}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={sobrenome_usuario}
          onChange={(e) => setSobrenome(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};