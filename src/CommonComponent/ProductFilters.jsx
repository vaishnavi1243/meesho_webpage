import React, { useState } from 'react';
import '../css/Filter.css'
function ProductFilters(props) {
  const [activeCategory, setActiveCategory] = useState(null);
  const { 
    categories,
    onFilterChange,
  } = props;

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  }

  return (
    <section 
      className="filters"
      aria-labelledby="filters-header">
      <header id="filters-header">
        <h5>Filters</h5>
        <p>1000+ products</p>
      </header>

      <div className="accordion">
        {categories.map(category => (
          <div key={category.category}>
            <button className="accordion-button" onClick={() => toggleCategory(category.category)}>{category.category}</button>
            <div className={activeCategory === category.category ? 'accordion-panel active' : 'accordion-panel'}>
              {category.options.map(option => (
                <div key={option}>
                  <label>
                    <input 
                      onChange={onFilterChange}
                      type="checkbox"
                      value={option} />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductFilters;
