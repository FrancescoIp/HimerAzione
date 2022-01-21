import Link from "next/dist/client/link"

//usare questo bottone per link interni o senza link


export default function ButtonA({ className: passedClasses, ...props }) {


    if (props.href) {
        return (
            <button className={`CbuttonA ${passedClasses}`}><Link href={props.href}>{props.title}</Link></button>
        )
    }
    return (
        <button className={`CbuttonA ${passedClasses}`}>{props.title}</button>
    )

}