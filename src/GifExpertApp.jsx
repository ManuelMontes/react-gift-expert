import {useState} from 'react';
import { AddCategory,GiftGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Star Wars' , 'BoJack' ]);

    const onAddCategory = ( newCategory ) => {



        if( categories.includes( newCategory) ) return;
        //setCategories(categories.concat('Gola'));//Concatena un elemento al arreglo, crea un nuevo arreglo
        //console.log(categories);
        // setCategories(cat => [...cat, newCategory ]);// obtiene todo el arreglo y lo clona agregando un elemento al final, directamente de usestate
        setCategories([newCategory, ...categories]);// Agega un elemento al final

        // console.log(categories);
        
    };

      return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
            
            //setCategoria={ setCategories}
            
            onNewCategory = { (value) => onAddCategory(value) }

            />


            {/* listado de Gift */}
            {/* <button onClick = { onAddCategory() } >Agregar</button> */}
            { 
                    categories.map( (category) => (
                        <GiftGrid key = {category} category = { category } />
                    )) 
                }
        </>
      );
};