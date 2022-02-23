import Image from "next/dist/client/image"

export default function Polaroid({ title }) {

    const h3Text = title ? title : 'Con affetto, himerazione <3'


    return (
        <div className='polaroid-body'>
            <div id="polaroid-image-frame">
                <Image alt="Annunziata - Termini Imerese" width='1200px' height="800px" src="/cupolaAnnunziata.jpg" priority />
            </div>

            <h1>{h3Text}</h1>
        </div>
    )

}