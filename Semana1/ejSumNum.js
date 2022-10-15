let nums = [3,1,2,10,1]
let numsResultado=[]

numsResultado[0]=nums[0];
for(let cont=1; cont<nums.length; cont++){
    let valorAcumulado = numsResultado[cont-1] 
    numsResultado[cont]=nums[cont];
}
console.log("Input:"+nums)
//backtick
console.log(`Output:${numsResultado}`)
console.log(nums,numsResultado)
