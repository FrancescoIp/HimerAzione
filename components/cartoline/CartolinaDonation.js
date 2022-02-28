import { motion } from "framer-motion"


export default function CartolinaDonation() {

    return (
        <div className='donation-body'>
            <div className="content-container">
                <div>Ricrediamoci. Diamo</div>
                <div>valore alla nostra</div>
                <div>identità, cultura e</div>
                <div>tradizione</div>
                <motion.button
                whileHover={
                    {
                        y: 3,
                        boxShadow: "0 0px 0px 0px #274a7d"
                      }
                }
                 className="donation-button">
                    <a href="https://www.produzionidalbasso.com/project/riattiviamo-stu-jardinu-himerazione/">
                        Dona qui
                    </a>
                </motion.button>
            </div>
        </div>
    )
}