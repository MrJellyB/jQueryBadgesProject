$(function() {
  $.ajax({
    url: "https://www.codeschool.com/users/Shavvy.json",
    dataType: "jsonp",
    success: function(data){
      var completed = data["courses"]["completed"];
      
      completed.forEach(function(element){
        //console.log(element);
        $("#badges")
          .append(`
          <div class='course'>
            <h3>` + element.title + `</h3>
            <img src= ` + element.badge + `></img>
            <a href=` + element.url + ` target='_blank' class='btn btn-primary'>See Course</a>
          </div>`)
      });
    }
  })
  
});
