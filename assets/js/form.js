var remove_required = function(sectionId) {
  inputs = document.querySelectorAll('#' + sectionId + ' input');

  for (i=0; i<inputs.length; i++) {
    inputs[i].removeAttribute('required');
  }
}

var section_forward = function(id) {
  curr_id = "section-" + id;

  inputs = document.querySelectorAll('#' + curr_id + ' input');

  var valid = true;

  for (i=0; i<inputs.length; i++) {
    e = inputs[i];
    if (!e.checkValidity()) {
      if (e.reportValidity) {
        e.reportValidity();
        valid = false;
        break;
      }
    }
  }
  check_validate('checkbox_' + id);

  var next_id;
  if (valid) {
    switch (id) {
      case 1:
        var type = document.querySelector('input[name="Content type"]:checked').id;
        if ((type == "content-type-film-tv") || (type == "content-type-broadcast")) {
            nid = 3;
            remove_required('section-2');
        }
        else {
            nid = 2;
            // remove_required('section-3');
        }
        break;
      case 2:
        nid = 4;
        break;
      case 3:
        nid = 4;
        break;
    }

    next_id = "section-" + nid;

    curr = document.getElementById(curr_id);
    next = document.getElementById(next_id);
    form = document.getElementById('booking');

    curr.style.display = 'none';
    next.style.display = 'block';
  }
}

var check_validate = function(group) {
  els = document.getElementsByClassName(group);

  var checkd = false;
  for (i = 0; i < els.length; i++) {
    if (els[i].checked) {
      checkd = true;
    }
  }

  if (checkd) {
    for (i = 0; i < els.length; i++) {
      els[i].required = false;
    }
  } else {
    for (i = 0; i < els.length; i++) {
      els[i].required = true;
    }
  }
}

var enable_other = function(e, input) {
  el = document.getElementById(input);
  if (e.checked) {
    el.required = true;
  }
  else {
    el.required = false;
  }
}
