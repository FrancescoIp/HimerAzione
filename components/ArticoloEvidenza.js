import ArticoloCard from "./ArticoloCard"

export default function ArticoloEvidenza({articoli}) {

    const articoliEvidenza = articoli.filter((articolo)=>{
        
        return articolo.fields.evidenza
    })

    return(
        <div>
            {articoliEvidenza.map((articoloE)=>{
                const { title, slug, immagineCopertina, publishedDate, tags } = articoloE.fields
                return(
                    <p key={title}>{title}</p>
                )
            })}
        </div>
    )
}