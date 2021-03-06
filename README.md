defiant.js
==========

DefiantJS provides the ability for you to build smart templates applicable on JSON structures, based upon proven &amp; standardized technologies such as XSLT and XPath.

DefiantJS also extends the global object JSON with the method "search", which enables searches on JSON structures with XPath expressions and returns matches as an array-like object.

For detailed information, please visit http://defiantjs.com

```js
var data = [
       { "x": 2, "y": 0 },
       { "x": 3, "y": 1 },
       { "x": 4, "y": 1 },
       { "x": 2, "y": 1 }
    ],
    res = JSON.search( data, '//*[ y > 0 ]' );

console.log( res );
// [{ x=3, y=1}, { x=4, y=1}, { x=2, y=1}]
```

```html
<!-- Defiant template -->
<script type="defiant/xsl-template">
    <xsl:template name="books_template">
        <xsl:for-each select="//movie">
            <xsl:value-of select="title"/><br/>
        </xsl:for-each>
    </xsl:template>
</script>
 
<script type="text/javascript">
    var data = {
            "movie": [{"title": "The Usual Suspects"},
                      {"title": "Pulp Fiction"},
                      {"title": "Independence Day"}]
        },
        htm = Defiant.render('books_template', data);
    console.log(htm);
    // The Usual Suspects<br>Pulp Fiction<br>Independence Day<br>
</script>
```
