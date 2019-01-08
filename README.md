# Javascript-Multiple-Event-Listener
An Event listener for multiple javascript elements


The following is a good test of keeping track of the answers the person selected from a multiple of 4
it also make use of one event listener to get the specific id for a button instead of having 4 event listeners
per button reducing the code needed to do it and it is done in javascript without any jquery

https://www.kirupa.com/html5/handling_events_for_many_elements.htm 

an example of the code from the link

<p>var theParent = document.querySelector("#theDude");</p>
<p>theParent.addEventListener("click", doSomething, false);</p>
 
<p>function doSomething(e) {</p>
<p>    if (e.target !== e.currentTarget) {</p>
<p>        var clickedItem = e.target.id;</p>
<p>        alert("Hello " + clickedItem);</p>
<p>    }</p>
<p>    e.stopPropagation();</p>
<p>}</p>