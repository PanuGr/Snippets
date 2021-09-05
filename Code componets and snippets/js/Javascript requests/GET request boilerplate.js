const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";

//HANDLE RESPONSE
xhr.responseType = "json";
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;//code to execute with response
  }
};


//OPEN REQUEST AND SEND OBJECT
xhr.open("GET", url);
xhr.send();
