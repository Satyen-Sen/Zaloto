import React from "react"; 
import "./MealsFilter.css"; 

function MealsFilter(props) {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value); 
    }; 

    return (
        <div className='meals-filter'> 
            <div className='meals-filter__control'>
                <label>Filter by Type</label> 
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='All'>All</option>
                    <option value='Veg'>Vegetarian</option>
                    <option value='NonVeg'>Non Vegetarian</option>
                </select>
            </div>

            <div className='expenses-filter__control'>
                <label>Sort by Price</label> 
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='Random'>Random</option>
                    <option value='LH'>Low to High</option>
                    <option value='HL'>High to Low</option>
                </select>
            </div>
                     
        </div>
    ); 
}; 

export default MealsFilter;