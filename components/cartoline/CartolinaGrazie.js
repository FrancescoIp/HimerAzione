import ButtonA from "../buttons/customButtonA"
import { motion } from "framer-motion";


export default function CartolinaGrazie({ type, btnClass }) {
    const classToUse = type === 'footer' ? 'thankYou-body_footer' : 'thankYou-body'

    return (
        <motion.div
            drag
            dragConstraints={{ top: 10, right: 10, bottom: 10, left: 10 }}
            className={classToUse}
        >
            <ButtonA className={btnClass} title="Thank you!"></ButtonA>
        </motion.div>
    )

}