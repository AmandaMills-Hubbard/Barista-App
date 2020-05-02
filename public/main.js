//House Gardener
const li = document.querySelectorAll(".order");
var trash = document.getElementsByClassName("fa-trash");
const name = document.querySelector(".userEmail").innerText;

Array.from(li).forEach(function(element) {
      element.addEventListener('click', function(){
        const customer = this.childNodes[1].innerText
        const order = this.childNodes[3].innerText

        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'customer': customer,
            'order': order,
            'name': name
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const customer = this.parentNode.parentNode.childNodes[3].innerText
        const order = this.parentNode.parentNode.childNodes[5].innerText

        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'customer': customer,
            'order': order,
            'name': name
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
