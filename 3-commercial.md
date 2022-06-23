---
layout: gallery
title: Commercial
permalink: /commercial
menu: commercial
vimeo_id: 375946473
placeholder: /assets/img/full/HD_FS.png
---

<div class="video-gallery">
{% for video in site.commercial reversed %}
  {% assign mod = forloop.index0 | modulo : 3 %}
  {% if mod == 0 %}
<div class="inner">
  {% endif %}
<a href="{{ video.url }}">
  <img src="{{ video.thumb }}">
  <h2 class="text-center">{{ video.title }}</h2>
  <h4 class="text-center">Dir. {{ video.dir }}</h4>
</a>
  {% if mod == 2 %}
</div>
  {% endif %}
{% endfor %}
</div>


