var socket;
      // Once the page is loaded the socket client connects to the server
      $(document).ready(function () {
        // Below must be set to the socket server url
        socket = io.connect('https://Wyvern-API.huski3.repl.co/api/chat');
        console.log("Loaded...");
        // Once the client has connected to the server we send a joined event letting the server know a person is in a channel
        socket.on('connect', function () {
          socket.emit('joined', {});
          console.log("Connected");
      });

      // Below are some functions you can use, the first one scrolls to the bottom of a div, while the second is used to check if the string is an image url

      function scrollToBottom() {
        var div = document.getElementById("chat");
        div.scrollTop = div.scrollHeight - div.clientHeight;
      };

      function checkURL(url) {
                  return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
                };

      // This is a socket event, it activates when a message is recieved from the server
      socket.on('message', function (data) {
        var tag = document.createElement("p");
        console.log(data);
        /* 
        Here we can get the seperate stuff from the request, requests are usually in the following format:
        {
          'id': 0,
          'serverid': 0,
          'content': text,
          'type': 'text'
        }
        As you can see the token key is replaced with ID as it is sent to all users who recieve the message.
        */

        // Below gets the id and text from the JSON
        var wyvernid = data.id;

        var text = data.content;
        text = text.replace(/^"|"$/g, '');
        //console.log(text);
        //console.log(Boolean(text));

        // Below is to remove ANY whitespaces and disallow them from being sent on the client side, if this fails, the server will reject the message as well
          if (text.replace(/\s/g, '')) {
            text = text.replace(/^"|"$/g, '');
            console.log("Doing an API request (CORS enabled)")
            const http = new XMLHttpRequest()
            http.open("GET", "https://Wyvern-API.huski3.repl.co/api/user?id=" + wyvernid);
            http.send();
            http.onload = () => {
              var obj = JSON.parse(http.responseText.replace(/'/g, '"'));
              console.log("recieved object:", obj)
              // Above you get the response from the API for user info you can work with that to append stuff to the page
              // Here you want to scroll to the bottom
            }
          }
          else {
            // If user sent a whitespace and client caught it before it was relayed to the server
            console.log("Cheeky kiddo!")
          }
        });

      // Below is used for sending a message, it checks if the enter key is pressed and sends the message
      document.getElementById("text").addEventListener("keydown", event => {
        if (event.keyCode == 13) {
          // Below gets the text from an input element, change this
          var textelem = document.getElementById("text");
          text = textelem.value;
          // Sets the element to empty
          textelem.value = "";
          // Emits a socket request pushing all the message data
          socket.emit('text', {
            'token': 487489579487, // Set this per user
            'serverid': 0, // where the message was sent
            'content': text, // can be left unchanged
            "type": "text" // this should be changed depending on the type of input
          });
        }
      });
    });
    // Scrolls to the bottom on load
    window.onload = function () {
      var objDiv = document.getElementById("chat");
      objDiv.scrollTop = objDiv.scrollHeight;
    }
