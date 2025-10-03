export default function Button ({type, name, onClick, className}) {

    let styleBtn = ''

    switch(type) {
        case 'filter-btn':
            styleBtn = 'filter-btn'
            break;
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
        <button className={`${className} ${styleBtn}`} onClick={onClick}>
            <span className="body-medium-txt">{name}</span>
        </button>
    )
}