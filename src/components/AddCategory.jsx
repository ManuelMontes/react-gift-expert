import { useState } from 'react'



export const AddCategory = ( { onNewCategory} ) => {
  
    const [inputValue, setInputValue] = useState('');
  
    const onInputChange = ( {target} ) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        // console.log(inputValue);
        //setCategoria = inputValue;
        if ( inputValue.trim().length <= 1 ) return;

        onNewCategory(inputValue.trim());
        setInputValue('')
        
    }
  
    return (

        <form onSubmit={ onSubmit}>
            <input
                type="text"
                value={ inputValue }
                placeholder="buscar gifs"
                onChange= { onInputChange }
            />
        </form>

    )
}
