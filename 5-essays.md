---
layout: default
title: Essays
permalink: /essays
menu: essays
---

<article>
  <div class="wrapper essay essay-list">

    <h1 class="text-center">{{ page.title }}</h1>

    <p>&nbsp;</p>

    {% assign sorted = site.posts | sort: 'ord' %}
    {% for p in sorted %}
      <div class="row clearfix">
        <a href="{{ p.url }}"><img src="{{ p.main_img }}"></a>
        <h3><a href="{{ p.url }}">{{ p.title }}</a></h3>
        <p>{{ p.description }}</p>
      </div>
      <p>&nbsp;</p>
    {% endfor %}
  </div>


  <p>&nbsp;</p>
  {%- include subscribe.html -%}
</article>
