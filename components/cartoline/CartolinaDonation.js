import { motion } from "framer-motion";


export default function CartolinaDonation() {

    return (
        <motion.div
            drag
            dragConstraints={{ top: 10, right: 10, bottom: 10, left: 10 }}
            className='donation-body'
        >
            <div className="content-container">
                <h2>Donate tutti i vostri soldini per una causa magnifica :D</h2>
                <button className="donation-button">
                    <a href="https://www.produzionidalbasso.com/project/riattiviamo-stu-jardinu-himerazione/">
                        Dona qui
                    </a>
                </button>
            </div>
        </motion.div>
    )
}