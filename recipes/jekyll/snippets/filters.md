# Liquid Filters

See https://shopify.github.io/liquid/

## slice
Returns a substring of one character or series of array items beginning at the index specified by the first argument. An optional second argument specifies the length of the substring or number of array items to be returned.

String or array indices are numbered starting from 0.

{% raw %}
```liquid
{{ "Liquid" | slice: 0 }}
{{ "Liquid" | slice: 2 }}
{{ "Liquid" | slice: 2, 5 }}
```
{% endraw %}

Output:
```
L
q
quid
```

Here the input value is an array:


{% raw %}
```liquid
{% assign beatles = "John, Paul, George, Ringo" | split: ", " %}
{{ beatles | slice: 1, 2 }}
```
{% endraw %}

Output:

```
PaulGeorge
```

## split

{% raw %}
```liquid
{% assign beatles = "John, Paul, George, Ringo" | split: ", " %}

{% for member in beatles %}
  {{ member }}
{% endfor %}
```
{% endraw %}

Output:
```
  John

  Paul

  George

  Ringo
```


