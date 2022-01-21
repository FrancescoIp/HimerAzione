//usare questo bottone per link esterni

export default function ButtonB({ className: passedClasses, ...props }) {

    if (props.href) {
        return (
            <button className={`CbuttonA ${passedClasses}`}><a target='_blank' href={props.href}>{props.title}</a></button>
        )
    }
    return (
        <button className={`CbuttonA ${passedClasses}`}>{props.title}</button>
    )

}