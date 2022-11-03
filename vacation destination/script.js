var formDetails= document.querySelector('#destination_details_form');

formDetails.addEventListener('submit',handleForm);

function handleForm(event){
    event.preventDefault();

    // taking values from the form
    var desName=event.target.elements['name'].value;
    var desLoc=event.target.elements['location'].value;
    var desPhoto=event.target.elements['photo'].value;
    var desDis=event.target.elements['description'].value;

    //after the submit clear all values
    for(var i=0;i<formDetails.length;i++)
    {
        formDetails.elements[i].value="";
    }

    var descard=createDesCard(desName,desLoc,desPhoto,desDis)

    // create card...
    var wishcontainer=document.getElementById('destination_container');
    if(wishcontainer.children===0)
    {
        document.getElementById('titel').innerHTML="My wish list";
    }

    document.querySelector('#destination_container').appendChild(descard);
}

function createDesCard(name,location,photoURL,description)
{
    var card=document.createElement('div');
    card.className='card';

    var img=document.createElement('img');
    img.setAttribute('alt',name);

    var constPhotoUrl="image/signpost.jpg";
    if(photoURL.length===0)
    {
        img.setAttribute('src',constPhotoUrl);
    }
    else{
        img.setAttribute('src',photoURL);
    }
    card.appendChild(img);

    var cardBody=document.createElement('div');
    cardBody.className="card-body";
    
    var cardTitel=document.createElement('h3');
    cardTitel.innerText=name;
    cardBody.appendChild(cardTitel);

    var cardSubtitel=document.createElement('h4');
    cardSubtitel.innerText=location;
    cardBody.appendChild(cardSubtitel);

    if(description.length!==0)
    {
        var cardText=document.createElement("p");
        cardText.className="card-text";
        cardText.innerHTML=description;
        cardBody.appendChild(cardText);
    }

    var cardDeleteBtn=document.createElement("button");
    cardDeleteBtn.innerText="Remove";

    cardDeleteBtn.addEventListener('click',removeDes);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);

    return card;
        
}

function removeDes(event)
{
    var card=event.target.parentElement.parentElement;
    card.remove();
}