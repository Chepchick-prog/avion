export default function Button ({type, name, onClick}) {

    let styleBtn = ''

    switch(type) {
        case 'primary': 
            styleBtn = 'primary-btn'
            break;
        case 'opaque': 
            styleBtn = 'opaque-btn'
            break;
        case 'white':
            styleBtn = 'white-btn'
            break;
        default:
            styleBtn = 'secondary-btn'
            break;
    }

    return (
        <button className={styleBtn} onClick={onClick}>
            <span className="body-medium-txt">{name}</span>
        </button>
    )
}