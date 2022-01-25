import { motion } from "framer-motion";


export default function CartolinaDonation() {

    return (
        <motion.div drag className='donation-body'>
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