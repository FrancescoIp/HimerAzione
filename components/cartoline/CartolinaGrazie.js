import ButtonA from "../buttons/customButtonA"
import { motion } from "framer-motion";


export default function CartolinaGrazie({ type, btnClass }) {
    const classToUse = type === 'footer' ? 'thankYou-body_footer' : 'thankYou-body'

    return (
        <motion.div
            drag
            dragConstraints={{ top: 50, right: 50, bottom: 50, left: 50 }}
            className={classToUse}
        >
            <ButtonA className={btnClass} title="Thank you!"></ButtonA>
        </motion.div>
    )

}