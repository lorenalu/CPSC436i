let messages = {
  "messages":[
    {"message": "Hello"},  
    {"message": "What's your name?"}, 
    {"message": "Hi"}, 
    {"message": "WHat is your favorite colour?"}, 
    {"message": "How are you doing?"},
    {"message":"Hi"},
    {"message": "Is is raining in New York?"},
    {"message": "iinas dyueyrui asidj"},
    {"message":  "Welcome"}
  ]
}

function addMessage() {
  let a = document.getElementById('addMessageForm');
  let m = a.elements.message.value;
  messages.messages.push({"message":  m});
  let li = document.createElement('li');
  li.innerHTML = m;
  document.getElementById('myMessages').firstChild.appendChild(li);
}

function displayMessages() {
  ul = document.createElement('ul');

  document.getElementById('myMessages').appendChild(ul);

  let mArray = messages.messages;

  for(var i = 0; i < mArray.length; i++) {
    let m = JSON.stringify(mArray[i].message);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = m;
  }
}

function clearMessages(){
  messages = {"messages" : []};
  let n = document.getElementById('myMessages').firstChild;
  while (n.firstChild) {
    n.removeChild(n.lastChild);
  }
}

window.onload = displayMessages;