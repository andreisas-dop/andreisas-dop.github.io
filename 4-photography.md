---
layout: gallery
title: Photography
permalink: /photography
menu: photography
---

<div class="video-gallery">
{% assign sorted = site.photography | sort: 'ord' | reverse %}
{% for collection in sorted %}
  {% assign mod = forloop.index0 | modulo : 3 %}
  {% assign diff = sorted.size | minus: 1 %}

  {% if mod == 0 %}
  {% if forloop.index0 != diff %}
<div class="inner">
  {% else %}
<div class="inner last-item">
  {% endif %}
  {% endif %}
<a href="{{ collection.url }}">
  <img src="{{ collection.thumb }}" />
  <h2 class="text-center vertical-center">{{ collection.title }}</h2>
  <h4>&nbsp;</h4>
</a>
  {% if mod == 2 %}
</div>
  {% endif %}
{% endfor %}
</div>

