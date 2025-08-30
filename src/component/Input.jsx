import { useState } from "react";

export default function Input ({type, maxWidth=500}) {

    const [search, setSearch] = useState('')
    const [email, setEmail] = useState('')

    function handleSearchInput (e) {
        return setSearch(e.target.value)
    }

    function handleEmailInput (e) {
        return setEmail(e.target.value)
    }

    let inputStyle;

    switch(type) {
        case 'opaque' :
            inputStyle = 'opaque-input'
            break;

        case 'search' :
            inputStyle = 'search-input'
            break;

        case 'number' :
            return <NumInput/>

        default :
            inputStyle = 'primary-input'
            break;
    }

    if(type === 'search') {
        return (
            <form className={inputStyle} style={{maxWidth: `${maxWidth}px`}}>
                <input 
                    className="body-medium-txt"
                    type="search"
                    name="search"
                    placeholder="Type here"
                    value={search}
                    onChange={(e) => {handleSearchInput(e)}}
                />
                <button><img src="img/icon/Search.svg" alt="Search-icon.svg"/></button>
            </form>
        )
    } else {
        return (
            <form className={inputStyle} style={{maxWidth: `${maxWidth}px`}}>
                <input
                    className="body-medium-txt"
                    type="email"
                    name="email"
                    placeholder="Type here"
                    value={email}
                    onChange={(e) => {handleEmailInput(e)}}
                />
                <input className="body-medium-txt" type="submit" value="Sign Up"/>
            </form>
        )
    }

}

function NumInput ({value}) {
    return <input className="num-input" type="number" step="any" value={value}/>
}