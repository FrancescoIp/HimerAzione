import ButtonA from "./buttons/customButtonA"
import ButtonB from "./buttons/customButtonB"

export default function JardinuPrev() {

    return (
        <div className='jardinu-prev-body'>
            <div>
                <h3>Attiviamo stu jardinu</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                <ButtonB
                    className="btn-jardinu"
                    title="vai al jardinu!"
                    href="https://www.produzionidalbasso.com/project/riattiviamo-stu-jardinu-himerazione/">
                </ButtonB>
                <ButtonA className="btn-jardinu" title="Il resto" href="/cosa-facciamo"></ButtonA>
            </div>
        </div>
    )

}