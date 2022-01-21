
export default function CartolinaDonation({passedClassName}) {

    return (
        <div className={passedClassName}>
            <div className="content-container">
                <h2>Donate tutti i vostri soldini per una causa magnifica :D</h2>
                <button  className="donation-button"><a href="https://www.google.it">Dona qui</a></button>
            </div> 
        </div>
    )
}