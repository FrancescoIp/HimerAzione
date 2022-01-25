import CartolinaGrazie from "./CartolinaGrazie";
import CartolinaDonation from "./CartolinaDonation"
import Polaroid from "./Polaroid"



export default function CartolineHome() {
    return (
        <div className='cartoline-container'>
            <Polaroid />
            <CartolinaDonation />
            <CartolinaGrazie type='home' />
            <style jsx>{`
        .cartoline-container {
          min-height: 65vh;
        }
      `}</style>
        </div>
    )
}