function order_sandwich(...items: string[]): void {
    console.log("Sandwich order :");
    console.log("Bread: Sliced Bread");
    console.log("Fillings:");

    for (const item of items) {
        console.log(`- ${item}`);
    }
     console.log("Order Served");
    // console.log(" ");
    
    console.log("Enjoy your sandwich!");
    console.log(" ");
}

// Call the function three times with a different number of arguments
order_sandwich("Chicken", "Cheese", "Lettuce");
order_sandwich("Turkey", "Coleslaw");
order_sandwich("Tuna fish");
