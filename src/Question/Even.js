
import React, {useState} from 'react'

const axios = require('axios');

function Even() {


 
  const [nums1, setValue1] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [value, setValue] = useState([]);
  
  function getEvenNumbers() {
    var arr = [1, 2, 3, 4, 5, 6];
    

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            document.writeln((arr[i]) + "<br />");
           
        }
    }
}
function hello(){
    var nums =[1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];
   
    let largestCount = 0;
    let currentCount = 0;
    
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === 0) {
            currentCount = 0;
        } else {
            currentCount++;
        };
        if (currentCount > largestCount) largestCount = currentCount;
    };
    // document.write(largestCount);

    return setValue1(largestCount);
}

function sorted(){
    let arr=[1, 2, 3, 7, 7, 8, 3, 5, 7, 1, 2, 7 ];
    for(let a=0;a<arr.length-1;a++){
        if(arr[a]===arr[a+1]){
            document.write("Repeated Number is  ",arr[a]);
            
        }
        
    }
  
}
function axios1() {
   
    // axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
    //     setHotels(res.data);
    //     console.log(res);
    //   });
      axios.get(" www.example.com/api/get").then((res) => {
        setHotels(res.data);
        console.log(res);
      });

}
function Q5(){
    var obj = {
        
        "id" :4 ,"name": "abc",
        "id" :10 ,"name": "ab2",
        "id" :5 ,"name": "abc3",
        "id" :6 ,"name": "abc5"
        
    }
    const ads=Object.keys(obj).reduce((accumulator, currentValue) => {
        accumulator[currentValue] = obj[currentValue];
        return accumulator;
      }, {});
      console.log(ads);
    
       
    
}


  return (
    <div className="App"  style={{paddingTop:"50px"}}>
        {/* <div>Input value: {value}</div> */}
      
      <div>
        <button onClick={getEvenNumbers}  style={{paddingTop:"5x" , marginTop:"20px",backgroundColor: "skyblue"  ,border: '1px solid rgba(0, 0, 0, 0.05)'}} >Question 1</button>
        <button onClick={hello} style={{paddingTop:"5x" , marginLeft:"20px" ,backgroundColor: "skyblue" ,border: '1px solid rgba(0, 0, 0, 0.05)'} }> Question 2</button>
      </div>
    
        <div>
         <button onClick={sorted} style={{paddingTop:"5x" , marginTop:"20px",border: '1px solid rgba(0, 0, 0, 0.05)',backgroundColor: "skyblue"} }> Question 3</button>
         <button onClick={axios1} style={{paddingTop:"5x" ,marginLeft:"20px", marginTop:"20px",border: '1px solid rgba(0, 0, 0, 0.05)',backgroundColor: "skyblue"} }> Question 4</button>
        </div>
        
        <div>
            <button onClick={Q5} style={{paddingTop:"5x" , marginTop:"20px",border: '1px solid rgba(0, 0, 0, 0.05)',backgroundColor: "skyblue"} }> Question 5</button>
        </div>
    
      <h1>{nums1}</h1>
      <h1>{hotels.id}</h1>
   
    </div>
  );
}

export default Even;
