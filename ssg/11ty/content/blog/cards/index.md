---
showSiteTitle: false
title: Cards
date: 2023-07-20
---

Use cards to present multiple options for a user.

## Pick a color!!!

{% card-grid %}
  {% card "pink" %}
  ![Bender Rodrigez](/img/bender.png)
  {% endcard %}

  {% card "yellow" %}
  ![Bender Rodrigez](/img/bender.png)
  {% endcard %}

  {% card "blue" "shadowed" true %}

  **Pick me pick me pick me pick me**

  ![Bender Rodrigez](/img/bender.png)

  {% button "PICK ME" "#" "yellow" %}
  {% endcard %}
{% endcard-grid %}
