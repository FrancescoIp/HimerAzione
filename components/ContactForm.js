
export default function ContactForm() {

    return (

        <div className="contatti-container">
            <form action="https://formsubmit.co/himerazione@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New submission!"></input>
                <input className="field" type="text" name="name" required placeholder="Name" />
                <input className="field" type="email" name="email" placeholder="Email Address" required></input>
                <textarea className="field" name="testo" placeholder="Cosa vuoi chiedere? / Ask something :D" rows="4" cols="40" required></textarea>
                <div className="centering">
                <button className="CbuttonA" type="submit">Send</button>
                </div>
                
            </form>
        </div>

    )
} 