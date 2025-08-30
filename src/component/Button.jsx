export default function Button ({type, name}) {

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
        <button className={styleBtn}>
            <span className="body-medium-txt">{name}</span>
        </button>
    )
}