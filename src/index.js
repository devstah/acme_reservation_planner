import axios from axios;
const userList = document.querySelector("#users");
const restList = document.querySelector("#rest");
const resList = document.querySelector("#res");

const renderUsers = (users) => {
  const html = users.map( user => `

    <li>
      <a href = '#${user.id}'> ${user.name} </a>
    </li>
  `).join("");
  console.log(html);
}


const init = async() => {
  try{
    const users = (await axios.get("/api/users")).data;
    const restaurants = (await axios.get("/api/restaurants")).data;
    renderUsers(users);
  }catch(ex){
    console.log(ex);
  }
}


init();
