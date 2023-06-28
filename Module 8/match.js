// simple way to find matching items :
const products = [
  { name: "x phone" },
  { name: "x laptop" },
  { name: "y phone" },
  { name: "x mac" },
  { name: "z phone" },
  { name: "x tablet" },
];
function matchedProduct(cart, search){
    const match = [];
    for(const product of products){
        if(product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            match.push(product);
        }
    }
    return match;
}

const match = matchedProduct(products,'phone')
console.log(match);