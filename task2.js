// Task 2:
// 1. Read the data from the file
// 2. Find the number of mutual funds from fund house SBIMutualFund_MF
// 3. Write the result to a new file

// code: '443-DR',
//     name: 'Franklin India Dynamic Accrual IDCW Reinvest Direct Plan',
//     category: 'Debt - Bonds',
//     reinvestment: 'Y',
//     fund_house: 'FRANKLINTEMPLETON',
//     fund_type: 'Debt',
//     fund_category: 'Dynamic Bond Fund',
//     plan: null,
//     returns: {
//       year_1: -7.1922,
//       year_3: 0.6468,
//       year_5: 3.9006,
//       inception: 5.261,
//       date: '2020-09-11'
//     },
//     volatility: 4.92185

const path = "./funds.json"
const fs = require("fs")

fs.readFile(path, "utf8", (err, data) => {

    if (err) {
        console.log(err)
    }
    else {
        data = JSON.parse(data)
    
    
        // ..................................................................
        // 2. Find the number of mutual funds from fund house SBIMutualFund_MF
        //    let result=data.reduce(callBack,{})
        // let final=data.filter(call)
        // // filter
        // function call(data){
        //     let house="SBIMutualFund_MF"
        //     if (data.fund_house===house){
        //        return  true
        //     }
        //     return false
        // }

        // console.log(final)


        // reduce
        //    function callBack(acc,data){
        //        let house=data.fund_house
        //        if(house==="SBIMutualFund_MF"){
        //            if(acc[house]){
        //                 acc[house]++
        //            }
        //            else{
        //                acc[house]=1
        //            }

        //        }
        //        return acc

        //    }
        //    console.log(result)
        //    fs.writeFile("./mutualFund.json",JSON.stringify(result),(err)=>{
        //        if(err){
        //            console.log(err)
        //        }

        //    })

        // .............................................................................
        // 2. Calculate the number of mutual funds for each fund type.

        // let result=data.reduce(call,{})
        // function call(acc,data){

        //     let type=data.fund_type
        //     if(acc[type]){
        //         acc[type]++

        //     }
        //     else{
        //         acc[type]=1
        //     }
        //     return acc
        // }

        // console.log(result)

        // .............................................................................
        // Calculate the number of mutual funds of each fund type for each fund house.

        // result={house1:{typ1:count,type2:count,....}, house2:{type1:count,type2,count,..},...}

        // let result=data.reduce(callBack,{})

        // function callBack(acc,data){
        //     let house=data.fund_house
        //     let type=data.fund_type

        //     if(acc[house]){
        //         if (type!==undefined){
        //         if(acc[house][type]){
        //             acc[house][type]++
        //         }
        //         else {
        //             acc[house][type]=1
        //         }
        //     }
        //     }
        //     else{
        //         acc[house]={}
        //         acc[house][type]=1
        //     }
        //     return acc
        // }
        // console.log(result)
        // ..........................................................................
        // 4. Calculate the average year_1 return rate for each fund house
        //    acc={house:{year:count,numofHouse:count}}
        //     returns: {
        //       year_1: -7.1922,
        //       year_3: 0.6468,
        //       year_5: 3.9006,
        //       inception: 5.261,
        //       date: '2020-09-11'
        //     },

        // let result = data.reduce(callBack, {})

        // function callBack(acc, data) {
        //     let house = data.fund_house
        //     let year = data.returns.year_1
        //     if (year !== undefined) {
        //         if (acc[house]) {
                   
        //                 acc[house]["year"] += year
        //                 acc[house]["count"]++  

        //         }
        //         else {
        //             acc[house] = { "year": year, "count": 1 }
        //         }
        //     }
        //     return acc


        // }
        // obj={}
        // let key=Object.keys(result)
        // let value=Object.values(result)
        // // console.log(value)
        // for(index=0;index<value.length;index++){
        //     let name=key[index]
        //    let avg=Number((value[index]["year"]/value[index]["count"]).toFixed(3))
        //    obj[name]=avg
            
        // }
        // console.log(obj)

    }
    
})
// ...............................................................................................
// Task 5:
// 1. Install node-fetch library
// 2. Using fetch, get the data from https://api.kuvera.in/api/v3/funds.json
// 3. Write this data to a file

const fetch=require("node-fetch")

// fetch("https://api.kuvera.in/api/v3/funds.json")
// .then(data=>data.json())
// .then(data=>{
//     fs.writeFile("./ouput.json",JSON.stringify(data),(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
// })

// Create a read function,  to read a file. It should return promise.

function read(){
    fs.readFile("./mutualFund.json","utf8",(err,data)=>{
        if(err){
            console.log(err)

        }
        else{
            data=JSON.parse(data)
        }
    })
    // .then(=>console.log("read the file"))
    
}
read()