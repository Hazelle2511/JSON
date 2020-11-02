// $("button").click( function(){
//     $.getJSON('http://labege.srv.simplon.me/data/labege3.json', function(data) {
//         //   console.log(data);
//         $.each(data, function(key, value) {
//             $("ul").append("<li>+value.n")
//         })
//          });

// })
// fetch("http://labege.srv.simplon.me/data/labege3.json")
//   .then(function (resp) {
//     return resp.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     document.querySelector("#app").innerHTML = data
//       .map(function (data) {
//         return data;
//       })
//       .join("");
//   });
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     appendData(data);
//   })
//   .catch(function (err) {
//     console.log("error" + err);
//   });
// function appendData(data) {
//   var mainContainer = document.getElementById("app");
//   for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
//     div.innerHTML = "Name: " + data[i].firstName + " " + data[i].lastName;
//     mainContainer.appendChild(div);
//   }
// }

$(document).ready(function () {
  $("#getData").on("click", function () {
    $.getJSON("labege3.json", function (json) {
      var htm = "";
      json.forEach(function (val) {
        var keys = Object.keys(val);
        htm += "<div class = 'cat'>";
        htm +=
          "<img src = '" +
          val.picture +
          "'" +
          "alt='" +
          val.lastName +
          "' width: '23%' height='40%'><br>";
        keys.forEach(function (key) {
          htm += "<strong>" + key + "</strong>: " + val[key] + "<br>";
        });
        htm += "</div><br>";
      });
      $(".data").html(htm);
    });
  });
});
