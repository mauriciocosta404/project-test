import Image from 'next/image'
import styles from './page.module.css'
import { MockCardService } from '@/mock/MockCardService'
import { ServicesCard } from '@/components/ServicesCard'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bannerContainer}>
        <header className={styles.itemsContainer}>
          <Image width={100} height={20} src="/images/logo.png" alt='logo' />

          <ul className={styles.linkList}>
            <li>Inicio</li>
            <li>Produtos</li>
            <li>Laudos</li>
            <li>Sobre nós</li>
            <li>Certificações</li>
            <li>Contato</li>  
          </ul>   
        </header>

        <div>
            {
              MockCardService.map((item,index)=>(
                <ServicesCard key={index} service={item}/>        
              ))
            }
        </div>
      </div>
    </main>
  )
}
