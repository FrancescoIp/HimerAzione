import Link from 'next/link'


export default function ContactForm() {

    return (
        <>

            <div className="contact-box">
                <form action="https://formsubmit.co/ipp.francesco@gmail.com" method="POST">
                    <input type="hidden" name="_subject" value="New submission!"></input>
                    <textarea classNamelass="field" name="testo" placeholder="Cosa vuoi chiedere?" rows="4" cols="50" required></textarea>
                    <input className="field" type="text" name="name" required />
                    <input className="field" type="email" name="email" placeholder="Email Address" required></input>
                    <button className="btn" type="submit">Send</button>
                </form>
            </div >



        </>
    )
} 