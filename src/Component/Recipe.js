import React from 'react'



const Recipe = (props) => {
    const {recipe} = props;
    return(
           <div className = "row" >
               {
                   recipe.map(recipe => (
                       <div className = "col-md-3" >
                           <div className = "card py-2" >
                              <img src = {recipe.recipe.image} className = "img-fluid mx-auto"  />
                               <div className = "card-body" > 
                                 <h4>{recipe.recipe.label}</h4>
                               </div>
                               <ul className = "list-group list-group-flush" >

                                  {
                                      recipe.recipe.ingredientLines.map(ingredient => <li className = "list-group-item" >{ingredient}</li> )
                                  }


                               </ul>

                           </div>

                       </div>
                   )
                   
                   )
               }
           </div>
    );
}

export default Recipe;