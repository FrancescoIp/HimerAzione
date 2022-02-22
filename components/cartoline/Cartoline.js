import CartolinaGrazie from "./CartolinaGrazie";
import CartolinaDonation from "./CartolinaDonation"
import Polaroid from "./Polaroid"
import CartolinaSPace from "./CartolinaSpace";
import { motion } from "framer-motion";



export default function CartolineHome() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:2}}} className='cartoline-container'>
            <Polaroid />
            <CartolinaDonation />
            <CartolinaGrazie type='home' btnClass="btn-thxCard-home"/>
            <CartolinaSPace/>
            <style jsx>{`
        .cartoline-container {
          min-height: 65vh;
        }
      `}</style>
        </motion.div>
    )
}