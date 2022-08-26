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

    {% assign sorted = site.posts | sort: 'ord' | reverse %}
    {% for p in sorted %}
    <a href="{{ p.url }}"><img src="{{ p.main_img }}"></a>
    <h3><a href="{{ p.url }}">{{ p.title }}</a></h3>
    <p class="post-meta">
        <time class="dt-published" datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        {{ page.date | date: date_format }}
        </time>
    </p>
    <p>{{ p.description }}</p>
    <p>&nbsp;</p>
    {% endfor %}
  </div>


  <p>&nbsp;</p>
  {%- include subscribe.html -%}
</article>
