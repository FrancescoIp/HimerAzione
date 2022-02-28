import Link from "next/dist/client/link"
import { motion } from "framer-motion"

//usare questo bottone per link interni o senza link


export default function ButtonA({ className: passedClasses, ...props }) {


    if (props.href) {
        return (
            <motion.button
                whileHover={
                    {
                        y: 3,
                        boxShadow: "0 0px 0px 0px rgba(255, 142, 93, 1)"
                    }
                }
                className={`CbuttonA ${passedClasses}`}><Link href={props.href}>{props.title}</Link></motion.button>
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