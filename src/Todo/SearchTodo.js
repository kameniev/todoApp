import React, {useState} from 'react'
import PropTypes from 'prop-types'


function SearchTodo({onSearch}){
    const [value, setValue] = useState('')

    function submitHandler(event){
        event.preventDefault()
        if (value.trim()){
            onSearch(value)
            setValue('')
        }
    }

    

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
        <input value={value} onChange={event => setValue(event.target.value)}></input>
        <button type='submit'>Search todo</button>
    </form>
    )

}

SearchTodo.propTypes = {
    onSearch: PropTypes.func.isRequired
}


export default SearchTodo