import { useState } from "react";
import Navbar from "../components/Navbar/Navbar"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import SelectCategory from "../components/Filter/SelectCategory"


function Products() {

    const [selectedCategory, setSelectedCategory] = useState("");

    return(
        <div>
            <Navbar/>
            <SelectCategory onCategoryChange={setSelectedCategory} />
            <ItemListContainer selectedCategory={selectedCategory} />
        </div>
    )
}

export default Products