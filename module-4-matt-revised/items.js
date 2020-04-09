//JavaScript Document


//name of the JSON file that we want 
let requestURL = 'https://msotera.github.io/lab4/items.json';


//instead of XMLHTTPRequest, we'll use Fetch API which is a more modern way that uses promises 


let weirdItems = fetch('https://msotera.github.io/lab4/items.json')
.then(function(response) {
  //get the response 
  return response.json(); 
  
}).then(function weirdProducts(jsonObj) {
  
  //put all the functionality that's inside of WeirdProducts in here 
  
  
  
}); 

/* Check out this article for more info : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data */
  
