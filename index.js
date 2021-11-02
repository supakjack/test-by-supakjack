// example data
const input = {
    products: [{
            variants: ["souffle", "cake", "ice-cream"],
        },
        {
            variants: ["cherry", "choco"],
        },
        {
            variants: ["XL"],
        },
    ],
};

// create function for product
const output = (input) => {

    //create group Supply  
    const mainSupplys = input.products[0].variants;
    const componentSupplys = input.products[1].variants;
    const sizeSupplys = input.products[2].variants;

    // define result variable
    const result = [];

    //logic to manage Supply
    for (const mainSupply of mainSupplys) {
        for (const componentSupply of componentSupplys) {
            for (const sizeSupply of sizeSupplys) {
                result.push({
                    result: mainSupply + " " + componentSupply + " " + sizeSupply,
                    componentSupply,
                });
            }
        }
    }

    // sort by localeCompare before return map localeCompareResult.result
    return result
        .sort((before, after) =>
            before.componentSupply.localeCompare(after.componentSupply)
        )
        .map((localeCompareResult) => localeCompareResult.result);
};

// call output function
console.log(output(input));