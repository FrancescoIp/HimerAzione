import Image from "next/dist/client/image"
import { motion } from "framer-motion";

export default function Polaroid({ title }) {

    const h3Text = title ? title : 'Con affetto, himerazioene <3'


    return (
        <motion.div
            drag
            dragConstraints={{ top: 40, right: 40, bottom: 40, left: 40 }}
            className='polaroid-body'
        >
            <div id="polaroid-image-frame">
                <Image alt="Annunziata - Termini Imerese" width='1200px' height="800px" src="/cupolaAnnunziata.jpg" priority />
            </div>

            <h1>{h3Text}</h1>
        </motion.div>
    )

}