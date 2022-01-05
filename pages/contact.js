import Link from 'next/link'
import ContactForm from '../components/ContactForm'

export default function Contact() {


    return (
        <div className='container'>
            <form action="https://formsubmit.co/ipp.francesco@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New submission!" />
                <input type="text" name="name" required placeholder='Nome' />
                <input type="email" name="email" required placeholder='E-mail' />
                <textarea type="text" name="testo" required placeholder='Cosa vuoi chiederci?' cols={15} rows={6}></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )

}