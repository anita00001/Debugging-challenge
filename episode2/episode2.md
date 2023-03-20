> The <code>for</code> loop should always starts at <code>0</code>. <br>
> <code>for (let i = 0; i < arr.length; i++)</code>

> In JavaScript (and many other programming languages), arrays are **zero-indexed**, which means that the first element in an array has an index of **0**. So, if we have an array <code>arr</code> with 5 elements, the indexes of those elements are <code>0, 1, 2, 3, and 4</code>.

> When we use a <code>for</code> loop to iterate over an array, we usually want to start at the first element **(i.e., index 0)** and continue until we reach the last element **(i.e., index arr.length - 1)**. This is why the loop counter <code>i</code> is usually initialized to <code>0</code>.

> If we were to start the **loop counter** at <code>1</code> instead of <code>0</code>, we would skip the **first element** of the array and start summing from the **second element**. This would result in an incorrect <code>sum</code> and <code>average</code> value.

> So, in order to correctly iterate over an array in JavaScript, we usually start the **loop counter** at <code>0</code> and use the **condition** <code>i < arr.length</code> to ensure that we iterate over all the elements in the array.