export function Cell(props) {
    return (
        <button className={props.placeholder==='X' ? 'x' : 'o'}
                onClick={()=>props.onClick(props.id)}
        disabled={!props.available}>
            {props.placeholder}
        </button>
    )
}