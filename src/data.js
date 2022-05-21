export const getProductData=()=>{
    let products=[];
    for(let i=0;i<50000;i++){
        products.push({id:i,name:'产品'+i})
    }

    return products;
}