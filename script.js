
const xhr = new XMLHttpRequest();
  xhr.open("GET", "./resume.json");
  xhr.send();
  xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    console.log(data);
  };
  