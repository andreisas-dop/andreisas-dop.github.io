---
layout: gallery
title: Music Videos
permalink: /music
menu: music
vimeo_id: 361131297
placeholder: http://shepherdtone.co.uk/media/still1.jpg
---

<div class="video-gallery">
{% for video in site.music reversed %}
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


