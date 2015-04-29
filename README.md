Bubble Tags
===================

Etiquetas burbuja es un plugin de jQuery para resaltar la burbuja con la etiqueta seleccionada

----------


Documents
-------------


**Install**

<a href="http://bower.io/search/?q=bubble-tag">
  <img src="https://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30">
</a>

```
bower install bubble-tag
```

**How to use it**

``` javascript
// mine.js
$('a.tag').on('click', function(e){
  e.preventDefault();
  $(this).bubble();
});

```
``` html
<!-- index.html -->
<a href='#' class='tags' data-bubble-key='foo'> Foo </a>
<a href='#' class='tags' data-bubble-key='bar'> Bar </a>

<div class='list'>
   <div class='bubble' data-bubble-tags='foo'>
     <div class='bubble__content'> ... </div>
   </div>
   <div class='bubble' data-bubble-tags='foo, bar'>
     <div class='bubble__content'> ... </div>
   </div>
</div>
```

**Sass Config**

``` scss
// Defaults values

$bubble-size-big: 200px;
$bubble-size-small: 100px;

$bubble-font-size-big: 40px;
$bubble-font-size-small: 20px;

$bubble-default-color: #FFFFFF;
$bubble-default-background: #1A1A1A;

$bubble-transition-duration: 0.5s;
$bubble-transition-time-function: ease-in;

$bubble-animate-duration: 1s;

$bubble-margin: 10px;
```

## <a href="http://codepen.io/imNicoSuarez/pen/YXPEKL"> Demo </a>

## License

The MIT License (MIT)

Copyright (c) 2014 AUTH10 LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
