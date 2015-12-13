var form = document.getElementById("input_form");
var data = {};

form.onsubmit = function(e) {
  userdata = {};
  for( var i = 0; i < form.length; ++i ) {
    var input = form[i];
    if( input.name && input.name != "submit" ) {
      userdata[input.name] = input.value;
    }
  }
  if( !userdata.key ) {
    message("Error: No Key Specified");
    return;
  }

  // TODO Figure out chrome.storage
  /*
  chrome.storage.sync.get('data', function(items) {
    var tmp = items.data.value;
    var out;
    if( items.data.key == userdata.key ) {
      out = [ tmp, userdata.value ];
    } else {
      out = 
    }
  });
  chrome.storage.sync.set({'data': data}, function() {
    message("Saved!");
  });
  */
}
