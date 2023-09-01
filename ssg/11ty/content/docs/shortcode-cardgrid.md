---
title: Cards grid shortcode
---

**!!!Cards grid shortcode is not implemented yet!!!**

The cards grid shortcode distributes space between your cards:

{% fullbleed "", true %}


{% card-grid %}
  {% card "blue-soft" "shadowed" true %}
  ### Bender 1

  ![Bender Rodrigez](/img/bender.png)
  
  {% button "PICK ME" "#" "yellow" %}
  {% endcard %}

  {% card "yellow" "shadowed" true %}
  ### Bender 2
  

  ![Bender Rodrigez](/img/bender.png)

  {% button "PICK ME" "#" "yellow" %}
  {% endcard %}

  {% card "blue" "shadowed" true %}

  ### Bender 3

  ![Bender Rodrigez](/img/bender.png)

  {% button "PICK ME" "#" "yellow" %}
  {% endcard %}
{% endcard-grid %}
{% endfullbleed %}

