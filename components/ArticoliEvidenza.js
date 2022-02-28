
import { EventoProgettoCard } from './ArticoloCard'

export default function ArticoliEvidenza({ articoli }) {
    
    const articoliEvidenza = articoli.filter((articolo) => {
        return articolo.fields.tags === 'Eventi'
    })

    return (
        <>
            <div className="evidenza-container">
                <h3> Ultime Novità</h3>
                {articoliEvidenza.map((articoliE) => {
                    return (
                        <EventoProgettoCard articolo={articoliE}/>
                    )
                })}
            </div>
        </>
    )
}