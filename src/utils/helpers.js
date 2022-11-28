import { WAREHOUSE_REGION_KEY} from "./constants"

export const filterByAttributeKey = (attributeKey, products, filterFields, updateStateFunction) => {
    if (attributeKey === WAREHOUSE_REGION_KEY) {
        const { warehouseNames } = filterFields;
        console.log('warehouseNames', warehouseNames);
        const filteredProducts = products.filter((product) => {
            return warehouseNames.includes(product?.shop?.ware_house_region_name);
        }
        );
        console.log("filteredProducts", filteredProducts);
        return filteredProducts;
    }
    return products;
}

export const updateFilterField = (filterFields, attributeKey, updateStateFunction, item, checked) => {
    const newFilterFields = { ...filterFields };

    let fieldName;
    let productPrice;

    if (attributeKey === WAREHOUSE_REGION_KEY) {
        fieldName = item?.option_name;

        const { warehouseNames,levelPrice } = newFilterFields;
        if (!warehouseNames.includes(fieldName)|| levelPrice.includes()) {
            if (checked) {
                console.log(checked)
                warehouseNames.push(fieldName);
            }
        } else {
            warehouseNames.splice(warehouseNames.indexOf(fieldName), 1);
        }
        updateStateFunction(newFilterFields);
        return newFilterFields;
    }
    return filterFields;
}