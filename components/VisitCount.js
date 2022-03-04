export default function VisitCount({viewCount}) {

    return(
        <div className="count-view-container">
            <p>Grazie per averci fatto visita {viewCount.value} volte :D</p>
        </div>
    )
}