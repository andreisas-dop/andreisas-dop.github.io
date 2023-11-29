var remove_required = function(sectionId) {
  var inputs = document.querySelectorAll('#' + sectionId + ' input');

  for (var i=0; i<inputs.length; i++) {
    inputs[i].removeAttribute('required');
  }
}

var restore_required = function(sectionId) {
  var inputs = document.querySelectorAll('#' + sectionId + ' input');

  for (var i=0; i<inputs.length; i++) {
    if (inputs[i].classList.contains('required')) {
      inputs[i].required = true;
    }
  }
}

var clear_section = function(sectionId) {
  var inputs = document.querySelectorAll('#' + sectionId + ' input');
  for (var i = 0; i<inputs.length; i++) {
    switch (inputs[i].type) {
      case 'text':
	  case 'date':
      case 'number':
        inputs[i].value = '';
        break;
      case 'radio':
      case 'checkbox':
        inputs[i].checked = false;
    }
  }
}

var section_back = function(id) {
  curr_id = "section-" + id;

  switch (id) {
    case 2:
      nid = 1;
      break;
    case 3:
      nid = 1;
      break;
    case 4:
        var type = document.querySelector('input[name="Content type"]:checked').id;
        if ((type == "content-type-film-tv") || (type == "content-type-broadcast")) {
            nid = 3;
        }
        else {
            nid = 2;
        }
        break;
      break;
    }

    next_id = "section-" + nid;

    curr = document.getElementById(curr_id);
    next = document.getElementById(next_id);

    curr.style.display = 'none';
    next.style.display = 'block';

    window.scrollTo(0, 0);
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
		  clear_section('section-2');
          restore_required('section-3');
        }
        else {
          nid = 2;
          remove_required('section-3');
		  clear_section('section-3');
          restore_required('section-2');
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

    curr.style.display = 'none';
    next.style.display = 'block';

    window.scrollTo(0, 0);
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
