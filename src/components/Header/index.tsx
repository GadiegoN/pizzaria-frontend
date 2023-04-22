import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import { FiLogOut } from 'react-icons/fi'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export function Header() {

    const { signOut } = useContext(AuthContext)
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <Image src="/logo.svg" alt="logo" height={60} width={150} />
                </Link>

                <nav>
                    <Link href="/dashboard">
                        <p>Inicio</p>
                    </Link>

                    <Link href="/category">
                        <p>Categoria</p>
                    </Link>

                    <Link href="/menu">
                        <p>Cardápio</p>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color='white' size={24} />
                    </button>
                </nav>
            </div>
        </header>
    )
}