

export default function Section({title,children,...props}){  // props is an object that contains all the attributes passed to the component
    return(
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}