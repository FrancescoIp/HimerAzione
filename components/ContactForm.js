

export default function ContactForm() {

    return (
            <div className="contact-box">
                <form action="https://formsubmit.co/himerazione@gmail.com" method="POST">
                    <input type="hidden" name="_subject" value="New submission!"></input>
                    <div>
                        <input className="field" type="text" name="name" required placeholder="Name"/>
                        <input className="field" type="email" name="email" placeholder="Email Address" required></input>
                    </div>
                    <div>
                        <textarea className="field" name="testo" placeholder="Cosa vuoi chiedere? / Ask something :D" rows="4" cols="40" required></textarea>
                    </div>
                    <button className="CbuttonA variant-mantenience" type="submit">Send</button>
                </form>
            </div >
    )
} 