
$(document).ready(function() {$(".editable_textarea").editable("/edit", { 
      indicator : "<img src='img/indicator.gif'>",
      type   : 'textarea',
      submitdata: { _method: "put" },
      select : true,
      submit : 'OK',
      cancel : 'cancel',
      cssclass : "editable"
  });
});

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.
    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);
            form.appendChild(hiddenField);
         }
    }
    document.body.appendChild(form);
    form.submit();
}
    
    function rmtile(e,data,num,semester, year) {
      post("/delete/",{name:data, num:num, semester:semester, year:year}, "post");
    }
