import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

import './RegisterPage.css';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setSucesso('');

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      setSucesso('Conta criada com sucesso!');
      setTimeout(() => navigate('/'), 2000);
    } catch (err: any) {
      setErro('Erro ao criar conta: ' + err.message);
    }
  };

  return (
    <div className="register-container">
      <h1>Cadastro</h1>
      <form onSubmit={handleRegister} className="register-form">
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </label>

        {erro && <p className="error">{erro}</p>}
        {sucesso && <p className="success">{sucesso}</p>}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
