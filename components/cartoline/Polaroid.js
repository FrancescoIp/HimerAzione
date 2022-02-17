import Image from "next/dist/client/image"
import { motion } from "framer-motion";

export default function Polaroid({ title }) {

    const h3Text = title ? title : 'Con affetto, himerazione <3'


    return (
        <motion.div
            drag
            dragConstraints={{ top: 80, right: 80, bottom: 80, left: 80 }}
            className='polaroid-body'
        >
            <div id="polaroid-image-frame">
                <Image alt="Annunziata - Termini Imerese" width='1200px' height="800px" src="/cupolaAnnunziata.jpg" priority />
            </div>

            <h1>{h3Text}</h1>
        </motion.div>
    )

}