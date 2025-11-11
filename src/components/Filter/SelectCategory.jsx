import './SelectCategory.css'

function SelectCategory({ onCategoryChange }) {
    const handleChange = (e) => {
        onCategoryChange(e.target.value);
    };

    return (
        <div className='selectCategory'>
            <select onChange={handleChange}>
                <option value="">Todas las categorías</option>
                <option value="Cocina">Cocina</option>
                <option value="Lavado">Lavado</option>
                <option value="Pequeños Electrodomésticos">Pequeños Electrodomésticos</option>
                <option value="Refrigeración">Refrigeración</option>
                <option value="Climatización">Climatización</option>
                <option value="Limpieza">Limpieza</option>
                <option value="Ropa y Cuidado Personal">Ropa y Cuidado Personal</option>
                <option value="Electrónica">Electrónica</option>
            </select>
        </div>
    );
}

export default SelectCategory;