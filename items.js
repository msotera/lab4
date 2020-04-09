//JavaScript Document


//access the JSON file using an XHR object
let requestURL = 'https://msotera.github.io/lab4/';


let itemChoose = document.querySelector('select'); 
let reviewDisplay = document.querySelector('p'); 

itemChoose.onchange = function() {
  let item = itemChoose.value; 
  updateDisplay(item); 
}; 

function updateDisplay(item) {
  item = item.replace(' ', ''); 
  item = item.toLowerCase(); 
  let requestURL = item + '.txt'; 
  
  fetch(requestURL).then(function(response) {
      response.text().then(function(text) {
         reviewDisplay.textContent = text;                  
      });  
    }); 
  }

updateDisplay('Item 1'); 
itemChoose.value = 'Item 1'; 




//Create a callback function to access the information using jsonObj and adds product information to the webpage. 
function catItems(jsonObj)
{
	let catItems = jsonObj.catItems;
	let section = document.querySelector('section');
	for(let i = 0; i < catItems.length; i++)
	{
		//build HTML elements
		let article = document.createElement('article');

		let h2 = document.createElement('h2');

		let img = document.createElement('img');

		let p1 = document.createElement('p');

		let ul = document.createElement('ul');



		img.setAttribute('src', 'https://msotera.github.io/lab4/img/' + catItems[i].image);

		img.setAttribute('alt', catItems[i].image);

		h2.textContent = catItems[i].name;

		p1.textContent = 'Price ' + catItems[i].price;

		

		let details = catItems[i].details;

		for(let j =0; j < details.length; j++)
		{
			let listItem = document.createElement('li');
			listItem.textContent = details[j];
			ul.appendChild(listItem);
		}

		

		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(ul);
		section.appendChild(article);


	}	
}

 //we create a new promise object, passing the executor function to that promise object 
function weirdProducts(name, review) 
{
		//the executor function defines what happens when the promises is either resolved or rejected 
      let reviewPromise = new Promise(function(resolve, reject) 
      {
        //error - we spilled the coffee - this is reject 
        if(review === 'bad') 
        {
          reject('Sorry valued customer, maybe youre more into dogs');
        }
        
        //review is made, this is resolve 
        else 
        {
          setTimeout(function() 
          {
              resolve(' Heres what customers have to say about ' + name + ': ' + review);
          }, 1500);  
        }
        });
         //Important! We're returning the promise! 
         return reviewPromise; 
};


//wrap the code inside a function and we've included the async keyword, await only works inside of this type of function 
async function getReview() 
{
      try 
      {
        //add await before the method call instead of then and assign the result to a variable 
        //The await keyword causes the JavaScript runtime to pause your code on this line, allowing other code to execute in the meantime, until the async function call has returned its result.
        let reviewPromise = await weirdProducts('The PurrDetector', 'It lights up just like the ad said!'); 
        let reviewPromise2 = await weirdProducts('Why Cats Paint', 'This book was AMAZING and super informative!'); 
        let reviewPromise3 = await weirdProducts('Kookamunga Krazee Kitty Catnip Bubbles', 'My cat had a blast with these!');
        let reviewPromise4 = await weirdProducts('Paul & Joe - Anniversary Makeup Collection', 'A MUST HAVE for all feline lovers!!!'); 
        let reviewPromise5 = await weirdProducts('The Meowlingual Cat Translation Device', 'I wasnt sure at first, but it really works!!');

        let reviews = await Promise.all([reviewPromise, reviewPromise2, reviewPromise3, reviewPromise4, reviewPromise5]);
        for(let i = 0; i < reviews.length; i++) 
        {
          console.log(reviews[i]); 
        }
      }
      catch(e) 
      {
        console.log(e); 
      }
    }
    
    //invoke the function 
    
    getReview();

