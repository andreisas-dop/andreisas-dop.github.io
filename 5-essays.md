---
layout: page
title: Essays
permalink: /essays
menu: essays
---

<div class="essay-body">
{% assign sorted = site.posts | sort: 'ord' | reverse %}
{% for p in sorted %}
  <h3><a href="{{ p.url }}" target="_blank">{{ p.title }}</a></h3>
  <p class="post-meta">
    <time class="dt-published" datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      {{ page.date | date: date_format }}
    </time>
  </p>
  <p>{{ p.description }}</p>
{% endfor %}
</div>


{%- include subscribe.html -%}
