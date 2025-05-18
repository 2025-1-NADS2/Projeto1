import React, { useState } from 'react';
import axios from 'axios';

export const Signup_ADM = () => {
  const [formData, setFormData] = useState({
    nome_adm: '',
    sobrenome_adm: '',
    email_adm: '',
    cpf_adm: '',
    atuacao_adm: '',
    cargo_adm: '',
    nome_empresa: '',
    cnpj: '',
    cep_empresa: '',
    senha: ''
  });

  const [message, setMessage] = useState('');

  // Função para atualizar os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para cadastrar um novo administrador
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔎 Validações dos campos
    if (formData.nome_adm.length < 3 || formData.nome_adm.length > 50) {
      setMessage("O nome deve ter entre 3 e 50 caracteres.");
      return;
    }

    if (formData.sobrenome_adm.length < 3 || formData.sobrenome_adm.length > 50) {
      setMessage("O sobrenome deve ter entre 3 e 50 caracteres.");
      return;
    }

    if (formData.senha.length < 8 || !/[A-Z]/.test(formData.senha) || !/[0-9]/.test(formData.senha)) {
      setMessage("A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um número.");
      return;
    }

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (!cpfRegex.test(formData.cpf_adm)) {
      setMessage("CPF inválido. Use o formato: 000.000.000-00");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email_adm)) {
      setMessage("Email inválido. Use o formato: teste@exemplo.com");
      return;
    }

    const cnpjRegex = /^\d{14}$/;
    if (!cnpjRegex.test(formData.cnpj)) {
      setMessage("CNPJ inválido. Use apenas números (14 dígitos).");
      return;
    }

    const cepRegex = /^\d{8}$/;
    if (!cepRegex.test(formData.cep_empresa)) {
      setMessage("CEP inválido. Use apenas números (8 dígitos).");
      return;
    }

    try {
      console.log("Enviando para a API:", formData);

      const response = await axios.post('http://localhost:3000/api/admin', formData);

      setMessage('Cadastro realizado com sucesso!');
      console.log('Cadastro:', response.data);

      // ✅ Exibe um alerta e redireciona para a página inicial
      window.alert("Cadastro realizado com sucesso!");
      window.location.href = '/homepage';

      // 🔄 Reseta o formulário
      setFormData({
        nome_adm: '',
        sobrenome_adm: '',
        email_adm: '',
        cpf_adm: '',
        atuacao_adm: '',
        cargo_adm: '',
        nome_empresa: '',
        cnpj: '',
        cep_empresa: '',
        senha: ''
      });

    } catch (error) {
      console.error('Erro no cadastro:', error.response.data);
      setMessage('Erro ao cadastrar. Verifique os dados.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Cadastrar Administrador</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome_adm" placeholder="Nome" value={formData.nome_adm} onChange={handleChange} required />
        <input type="text" name="sobrenome_adm" placeholder="Sobrenome" value={formData.sobrenome_adm} onChange={handleChange} required />
        <input type="email" name="email_adm" placeholder="E-mail" value={formData.email_adm} onChange={handleChange} required />
        <input type="text" name="cpf_adm" placeholder="CPF (000.000.000-00)" value={formData.cpf_adm} onChange={handleChange} required />
        <input type="text" name="atuacao_adm" placeholder="Área de Atuação" value={formData.atuacao_adm} onChange={handleChange} required />
        <input type="text" name="cargo_adm" placeholder="Cargo" value={formData.cargo_adm} onChange={handleChange} required />
        <input type="text" name="nome_empresa" placeholder="Nome da Empresa" value={formData.nome_empresa} onChange={handleChange} required />
        <input type="text" name="cnpj" placeholder="CNPJ (Somente Números)" value={formData.cnpj} onChange={handleChange} required />
        <input type="text" name="cep_empresa" placeholder="CEP (Somente Números)" value={formData.cep_empresa} onChange={handleChange} required />
        <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} required />
        <button type="submit">Cadastrar Administrador</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};
