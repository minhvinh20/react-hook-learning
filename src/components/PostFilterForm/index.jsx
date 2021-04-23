import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
    onSubmit: null,
};


function PostFilterForm(props) {
    const {onSubmit} = props
    const [searchTerm,setSearchTerm] = useState('')
    const typingTimeoutRef = useRef(null)
    function handleSearchTermChange(e)
    {
        const valueTerm = e.target.value
        setSearchTerm(valueTerm)
        if (!onSubmit) 
            return
        
        // Clear old timeout
        if(typingTimeoutRef.current)
            clearTimeout(typingTimeoutRef.current)
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: valueTerm
            } 
            onSubmit(formValues)   
        }, 500)
             
    }
    return (
        <form>
            <input type="text" value={searchTerm} onChange={handleSearchTermChange}></input>
        </form>
    );
}

export default PostFilterForm;