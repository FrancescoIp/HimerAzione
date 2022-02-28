import ShowMoreText from "react-show-more-text";
import ButtonB from "./buttons/customButtonB"


export default function JardinuPrev() {

    return (
        <div className="jardinu-container">
            <div id="progetti" className='jardinu-prev-body'>
                <div>
                    <h3>RI-Attiviamo stu jardinu</h3>
                </div>
                <div>
                    <ShowMoreText
                        lines={2}
                        more="Mostra di più"
                        less="Mostra di meno"
                        className="jardinu-text"
                        anchorClass=""
                        expanded={false}
                        width={0}
                        truncatedEndingComponent={"... "}
                    >
                        <p>In data 18/05/2021 è stato presentato il progetto di nuova valorizzazione del giardino della Chiesa di Maria SS.
                            Annunziata. Il suddetto progetto si inserisce in un contesto più ampio che riguarda tutta la {" "}
                            <a href="https://www.produzionidalbasso.com/project/riattiviamo-stu-jardinu-himerazione/"
                                target="_blank"
                                title="produzionidalbasso/jardinu"
                            >
                                mission associativa di HimerAzione
                            </a> {" "}
                            e che vede nel ridare nuova vita al giardino dell’Annunziata
                            la prima tappa per la crescita della Associazione e di tutta la città. Questo primo step dell’Associazione prevede
                            a sua volta diverse fasi:</p>
                        <p>
                            ADOZIONE, che è già stata messa in atto tramite uno stretto rapporto tra la Chiesa Madre
                            “San Nicola di Bari” dalla quale dipende la Chiesa di Maria SS.Annunziata; oltre che per l’opera di pulizia del giardino.</p>
                        <p>STESURA DEL PROGETTO e studio della sostenibilità oltre che della fattibilità di quest’ultimo.Questo permetterà
                            l’aggiunta di nuovi alberi e piante oltre che la costruzione di una parete verde sfruttando un muro laterale
                            al giardino, un piccolo teatro per accogliere artisti e rappresentazioni ed infine un piccolo spazio dove inserire
                            un pannello con un murales come ulteriore attrattiva aggiunta alla già grande bellezza della Chiesa.</p>
                        <p> CROWDFUNDING,
                            una raccolta fondi online sulla piattaforma “Produzioni dal Basso” che durerà quattro mesi e servirà a finanziare
                            non solo i costi per la riqualificazione del giardino, ma anche gli altri step di HimerAzione</p>
                        <p>ATTUAZIONE
                            del progetto, dove ad esserne protagonisti saranno non solo i membri della associazione HimerAzione,
                            ma anche gli altri gruppi associativi locali, singoli cittadini ed anche le istituzioni.E’ stato da noi
                            infatti definito come “Giardino Sociale” non solo per raccontare la volontà di renderlo luogo di incontro e
                            di costruzione di relazioni, ma anche per aprirlo a tutti coloro vogliano portare nuova bellezza alla città
                            svolgendo eventi all’interno di uno dei luoghi più suggestivi della città.</p>
                        <p>EVENTI, che sono ampiamente descritti
                            nella sezione della “fase due” della mission di HimerAzione. Con tutto ciò speriamo di poter eguagliare lo splendido
                            lavoro fatto da altre realtà che ci piace citare, come Farm Cultural Park di Favara, Periferica di Mazara del Vallo
                            e Trame di Quartiere di Catania.Piccole realtà divenute grandi grazie all’intenso lavoro che le ha contraddistinte</p>
                    </ShowMoreText>
                </div>
                <div>
                    <ButtonB
                        className="btn-jardinu"
                        title="vai al jardinu!"
                        href="https://www.produzionidalbasso.com/project/riattiviamo-stu-jardinu-himerazione/">
                    </ButtonB>
                </div>
            </div>
        </div>

    )

}
