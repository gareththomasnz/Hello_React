// PASS PROPS FROM PARENT TO CHILDREN COMPONENTS

var FirstName = function(props) {
  return(
    <h1>{props.firstname}</h1>
  );
}

var LastName = function(props) {
  return(
    <h1>{props.surname}</h1>
  );
}

var Profile = function(props) {
  return(
    <img src={props.img}/>
  );
}



var FullName = function(props) {
  return(
    <div>
      {/* Insert your FirstName, LastName and Profile components */}  
      <FirstName firstname={props.firstname}/>
       <LastName surname={props.surname}/>
      <Profile img={props.img}/>
    </div>
  );
}
        
ReactDOM.render(
  <FullName 
    firstname="Rob"
    surname="Merrill"
    img="https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo_400x400.jpg"
    />,
  document.getElementById("app")
);