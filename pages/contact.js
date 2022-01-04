import Link from 'next/link'
import ContactForm from '../components/ContactForm'

export default function Contact() {


    return (
        <div className="not-found">
            <h1>Contact Page</h1>
            <h2>Form under construction</h2>
            <div>
                <ContactForm />
            </div>
            <p>Back to <Link href="/"> Homepage</Link> :D</p>


            <style jsx>{`
        .not-found {
          background: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
        </div>
    )
}