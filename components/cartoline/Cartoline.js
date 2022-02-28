
import CartolinaDonation from "./CartolinaDonation"
import Polaroid from "./Polaroid"
import CartolinaSPace from "./CartolinaSpace";
import { motion } from "framer-motion";



export default function CartolineHome() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} className='cartoline-container'>
            <Polaroid />
            <CartolinaDonation />
            <CartolinaSPace/>
        </motion.div>
    )
}