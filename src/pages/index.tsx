import { useContext, FormEvent, useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

import { AuthContext } from '../contexts/AuthContext';

import styles from "../../styles/Home.module.scss";
import logoImg from "../../public/logo.svg";
import { toast } from 'react-toastify';

import { GetServerSideProps } from 'next'
import { canSSRGuest } from '../utils/canSSRGuest';

export default function Home() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if(email === '' || password === '') {
      toast.warning('Preencha todos os campos!!!')
      return;
    }

    setLoading(true)

    let data = {
      email,
      password
    }

    await signIn(data)

    setLoading(false)

  }

  return (
   <>
    <Head>
      <title>Faça seu login - Pizzaria</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo marca" />

      <div className={styles.login}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <Input
            placeholder="Digite seu email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            loading={loading}
          >
            Acessar
          </Button>
        </form>

        <Link href="/signup">
          <p className={styles.text}>Não possui uma conta? Cadastre-se</p>
        </Link>
      </div>
    </div>
   </>
  )
}

export const getServerSideProps = canSSRGuest(async () => {
  return {
    props: {}
  }
})