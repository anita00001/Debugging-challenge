><code> person.sayHello();</code> <br> // "Hello, my name is JOHN"

> <code>anotherSayHello();</code> <br> // Uncaught TypeError: Cannot read property 'toUpperCase' of undefined

> The <code>anotherSayHello</code> variable is set to the <code>sayHello</code> method of the <code>person</code> object.<br> However, when calling the <code>anotherSayHello()</code> function, an error occurs <br> because the <code>this</code> keyword inside the <code>sayHello</code> method does not refer to the <code>person</code> object anymore.

> Solution: <br>
<code>const anotherSayHello = person.sayHello.bind(person);</code>

> Explanation: <br> Use the <code>bind()</code> method <br> to create a new function <code>anotherSayHello</code> <br> that is bound to the <code>person</code> object. <br> When calling <code>anotherSayHello()</code>, <br> the <code>this</code> keyword inside the <code>sayHello()</code> method <br> will always refer to the <code>person</code> object, <br> regardless of how the function is called.