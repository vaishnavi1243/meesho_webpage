 import categories from '../Constants/Filtercontent'
 import ProductFilters from '../CommonComponent/ProductFilters';
 const Filter=()=>
{
    return(
        <>
        <div className="filter">
        <ProductFilters categories={categories}/>
        </div>
        </>
    )
}
export default Filter;
/*
*/