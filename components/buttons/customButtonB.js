//usare questo bottone per link esterni
import { motion } from "framer-motion"

export default function ButtonB({ className: passedClasses, ...props }) {

    if (props.href) {
        return (
            <motion.button
                whileHover={
                    {
                        y: 3,
                        boxShadow: "0 0px 0px 0px rgba(255, 142, 93, 1)"
                    }
                }
                className={`CbuttonA ${passedClasses}`}><a target='_blank' href={props.href}>{props.title}</a>
            </motion.button>
        )
    }
    return (
        <motion.button
            whileHover={
                {
                    y: 3,
                    boxShadow: "0 0px 0px 0px rgba(255, 142, 93, 1)"
                }
            }
            className={`CbuttonA ${passedClasses}`}>{props.title}</motion.button>
    )

}