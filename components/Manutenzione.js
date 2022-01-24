import { CgDanger } from 'react-icons/cg'
import ContactForm from './ContactForm'

export default function Manutenzione() {
    return (
        <div className="manutenzione-body">
            <h1> <CgDanger size={70} /> Sito in manutenzione / Site under manteniance <CgDanger size={70} /> </h1>
            <p>Presto ritorneremo a raccontarvi le meraviglie di Termini Imerese, per restare in contatto troverete i nostri social qui in basso :D</p>
            <div className='link-container'>
                <a href='https://www.facebook.com/search/top?q=himerazione'>Facebook</a>
                <a href='https://www.instagram.com/himerazione/'>Instagram</a>
                <a href='https://https://www.produzionidalbasso.com/project/riattiviamo-stu-jardinu-himerazione/'>Jardinu</a>
            </div>

            <ContactForm />
        </div>
    )
}