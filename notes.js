// DOM - Document Object Model....


----------------------------------------------------------------------------------------


// 1. What is DOM?

// Browser & JS interact with eachother.

// Browser provides the parsed & rendered HTML Code that we created.

// JS is a HOISTED LANGUAGE. Meaning the browser provides the environment for JS to run.

// Browser provides JS engine which parses, understands and executes the JS code.

// Browser provides APIs - functionalities into which JS can tap and interact with the browser.

// DOM - The functionality through which JS interacts with rendered HTML Code.

// DOM - The loaded and rendered object representation created by browser of HTML code, through which we can tap into via JS.

// JS works with objects which will represent what the browser made of the HTML code.

// JS have various functionalities through which we can reach out to HTML code and access the code...

// DOM isn't strictly tied to browsers, there are other tools to parse HTML. Eg - PYTHON has it's own extension and functionalities which are used to read and work HTML Code.

// DOM isn't restricted with JS too when running through NODE.JS (which is back-end - meaning detached from browser).

// Browser has TWO built-in Objects which allows us the access to the code which are globally available = DOM & WINDOW.

/*

Document :

Document is the property of Window object.
Root DOM Node - Entry point to get access to all rendered HTML code.
Provides methods and functionalities to access elements querying, to interact with DOM content - loaded HTML code, etc.

*/

/*

Window :

Global object, Document is it's property.
Reflects the active browser window/TAB.
Basically our global entry point, global storage for script. 
Gives access to all features the browser provides.
Also gives Window specific properties and methods - eg measuring window width.

*/


----------------------------------------------------------------------------------------------


// 2. DOCUMENT & WINDOW OBJECT.....

// A clean html-app file.
// Open the file within browser and open console.
// We write document within the clean slate of a console.

// We will see a document file HTML lookalike but it's a JS thing which is tied to the loaded HTML code.

// But to get access to real looking JS object we write within console...

console.dir(document);
// Now we get access to real JS object with all the properties in there. (Some property might never matter to us.)

// It will allow us to all the HTML content rendered in there.

// In there documentElement is our entire HTML content.
// Head - gives access to all the things within <head>.
// Body - gives access to all the things within <body>.

// The objects in there are made available by browser to interact with them.

-----------------------------------------

// Clearing console - outputting WINDOW within it.
// We get access to all the core APIs which browser wants to expose us to and all the objects related to window..

// We see ALERT within window - the function we use to throw some message.

// We noticed for document we gotta write document.eventListener but with WINDOW we can just write like this...

alert();

// Browser parses our code such that window. is automatically added to the function that we typed and which is related to window objects...

// We see document as the part of window.

// outerHeight/outerWidth - let's us see our general window or TAB's dimension.

// In our window, we can see the info of our window/ TAB only not other tabs opened within the browser.


------------------------------------------------------------------------------------------------


// 3. Understanding DOM and How it's created.

// Take a simple HTML document with decent html tags such as head -> title(text), body -> header -> h1(Text) /main - p(Text).

// Browsers parses the HTML code and create an object representation. Cause it doesn't understand the work with text written as HTML code..

// Browsers works with objects stored in the memory - <html> tag is translated into HTML Node - which is basically an ELEMENT NODE. 

// These objects are called NODES which represents HTML element/tag.

// Such element nodes are created for all the HTML tags such as head - title - body - header - h1 - main - p etc.

/*

The structure which browser creates with HTML page regarding the Elements...

HTML 
    HEAD
        TITLE

    BODY
        HEADER  
            H1
        MAIN
            P
HTML

The browser will create a tree of NODES..

All the nodes here have thier Parent-Child node relationship - eg. Html has Head as it's child node who has Title as it's child node.

Not just HTML tags are created as nodes/objects but also TEXTs are created as objects...

These are called TEXT NODES....

HTML

    |__ = This is a whiteSpace before the indented HEAD element... 

    Browser translates empty whiteSpace into NODES...
    We don't see this in the screen. Most whitespace isn't rendered but are part of the DOM.

    | = line break, __ = whitespaces... The indented space.

    HEAD
        TITLE
        The DOM = Text for title...

        Therefore we have ELEMENT NODES for all the elements and TEXT NODES for all the texts.

        Content in the element might be other elements but also might be texts but as a different kind of objects as TEXT NODES.

    BODY
        HEADER  
            H1
        MAIN
            P

*/

// We will look into our HTML page here... To understand it first hand... 

// We write the header title for our page which browser renders and shows us...

// We can see the rendered and loaded HTML code inside elements section of dev tools...

// A feature from browser = $0 which we will see near one code which means it will always give us access to the last element we selected in the ELEMENTS TAB within dev tools(Chrome).

// We only see the HTML code with texts and elements within the devtools but not the Text Nodes such as whitespace and etc. We will access those with help of JS.


---------------------------------------------------------------------------------------------------


// 4. Nodes & Elements - Querying The DOM Overview...

// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// QUERYING ELEMENTS...

// THIS MAY SEEM A BIT OVERWHELMING BUT WE WILL LEARN ABOUT QUERYING IN FURTHER LECTURES. HERE, JUST BASICS...

// To query content on our rendered HTML page we use couple methods on DOM. Imp ones are...


/*

querySelector(), getElementById(). 

These methods will select one element at a time.

These are different ways of querying elements - by CSS Selector, by ID.. 
CSS selector as we can use it into CSS file..

Gives direct reference to DOM elements as DOM nodes are just JS objects in the end - reference values. These methods return the object references (addresses).

*/


/*

querySelectorAll(), getElementsByTagName().

These are some methods which are used to select multiple elements.

Gives access to collections of elements (array-like objects) : NodeList.

Different ways of querying elements - CSS selectors, by tag name, by CSS Class..

querySelectorAll() will give a non-live NodeList (a snapshot of currently rendered DOM), whereas getElementsByTagName return a live NodeList which means when add or remove elements, it will be reflected in the NodeList.
Will not be reflected in the data returned by query selector.

*/


// NODES & ELEMENTS....

/**

Nodes:

Objects that make up DOM.

HTML tags are "ELEMENT NODES" (or just ELEMENTS).

Text created TEXT NODES...

Attributes creates ATTRIBUTE NODES, not imp.

*/


/*

Elements :

Are one type of Nodes.

Created of HTML tags which are rendered, not the texts.

For element nodes we have special properties and method to interact with elements.

Available methods and properties depend on the kind of elements.

Different ways of selecting elements via JS.

Can also create and remove elements with the help of JS..

*/


----------------------------------------------------------------------------------------------------


// 5. Selecting Elements in the DOM....

// Let's play around and learn about basics and cores of selecting elements.

// In html page - creating <ul> and then creating <li> with it...

// Created class and id for more understanding.

// We go within CONSOLE...

// Important -- All this query methods are available on document or any other element nodes.

------------------------------

// To select the header by it's ID =
document.getElementById('main-title');

// No # or any symbol in the beginning as it will be CSS selector.

// We will see the h1 from the HTML page within console.

// To see all the objects within the selected ID we can do this...
console.dir(document.getElementById('main-title'));

// Now we have the JS object we can inspect.

// We can have this object for all rendered HTML elements.
// We will find bunch of info within the object.

// We can store this object within a variable....

const h1 = document.getElementById('main-title');

// We can use querySelector and all other selection methods except getElementById...
// We use the element h1 to select it's Child Nodes. (Here we don't have any but we get the jist.)

---------------------------------------

// We can use the ClassName selector which is old method...
document.getElementsByClassName('list-item');

// We will see an array like object which will show all the items within the class - list-item. 
// It is not a true array but we can use for, for-of loop to search elements by index and so on...

// We don't use getElementBy methods these days without the exception of getElementById.... 
// We use new selector methods...

// More common these days is...

document.querySelector('.list-item');
// IMP - We need a selector = to select class within query we need . in front of the name of class just as we do in CSS. 
// IMP - For ID we use #.

// NOTE - querySelector will return the first matching item, here we get the first - Item 2 on the console. 

-----------------------------------------

// To get all the items we use...

document.querySelectorAll('.list-item');
// This will return a NodeList of all the items within this class... These are also array like objects.

// COMPLEX Selectors...

document.querySelector('ul li:first-of-type');
// We typed the main element and then li with a psuedo selector just like CSS...
// If we typed last-of-type we would select the last item.

---------------------------------------------

// Query selectors gives us power to select individuals which will let us add eventListeners or maybe even manipulate these elements on the go.


// THE BEAUTY OF JS - Runs in the browser after web-page is loaded so it allows us to manipulate what's happening on the screen with that already loaded page which allows us to create highly dynamic user experiences where we can change things on the go....

// We can store these query selectors within the const and variables...
// We need to import our script after the HTML page is parsed... Which means using DEFER...


------------------------------------------------------------------------------------------


// 6. Exploring And Changing DOM Properties....

// As we talked in the video before, we wanna manipulate the DOM elements...

// We changed the Health Bar in the Monster-Killer project that was rendered on the screen was a mere use of manipulating the DOM elements...

// To provide good User Experience we must use this often in JS heavy applications...

// We change things in the page without the need to reload the page...

// Let;s say we have a <p> with ID and CSS class and some text in there.

<p id='welcome-text' class='text-default'> Welcome! </p>

// We wanna get the ID...

document.getElementById('welcome-text');

// we store it within constant.

const p = document.getElementById('welcome-text');

// Now we read it's text content with textContent property.
p.textContent;
// Which will return our text = 'Welcome!'

// We can read the ID.
p.id => 'welcome-text';

// We can read the class name.
p.className => 'text-default';

// That's how we can read data from here. Sometimes we don't wanna always change things immediately. We just wanna find out which current state is this element in..

// Not all properties are RE-WRITABLE but we can change and assign a new name.... 

p.className = 'new-class' => <p ....  class='new-class'></p>

// This will get automatically updated by the browser...

------------------------------------------------

// On the header in our HTML page we wanna change something...

// For now we do this example within CONSOLE...

const h1 = document.querySelector('h1');
// we can choose the h1 by it's ID name tooo....
// We store the selector to a reference...

h1.textContent;
"Dive into the DOM!" // Displayed within console...

h1.className;
"" // empty string as there is no class name...


h1.textContent = 'Some New Text!';
// We change the text with this.
// What we do is we replace old Text Node with the new Text Node...

h1.className = 'title';
// Assigned new CSS Class..
// We see the class on the HTML code within the Element section of the dev tools...


// .style property will let us with a huge numbers of CSS objects which will then be translated to JS properties...

h1.style.color = 'white';

h1.style.backgroundColor = 'red';
// Here in CSS we would use the backgroud color property as = background-color. But as it is translated into JS, this is what we use...


// To see what properties we have to play with. We can simply type...

console.dir(h1); // We do this within the console of dev tools...

// We can also search it in MDN with = mdn h1 elements.
// We can find DOM interface and from there we can see and learn further...


----------------------------------------------------------------------------------------------------


// 7. ATTRIBUTES vs PROPERTIES....

// Manipulating these here....

// Attributes are mapped to Properties and some LIVE Sync is set. But this is not always the case here...

<input id='input-1' class='input-default' value='Enter Text Here....'> </input>

// Here we have 3 different kinds of Attributes - id, class and value...
// These behaves in different ways when it comes to DOM


// ATTRIBUTES - Placed in HTML code, on element tags.
// What we write on HTML code is named an Attribute, what we add on HTML Tag, that's an Attribute of that Tag...

// The Browser created DOM Object based on the tag name. And Pre-configures some of it's properties based on these Attributes...


// Attribute is a thing in our HTML code, our HTML text. Whereas Property is a value stored in the object that's created based on our HTML code.


// Objects and JS have Properties....


// We create -

const input = document.querySelector('input');
// From this we can access all the attributes...

// Properties are automatically added on created DOM objects....

// IMP - Not every attribute has 1 to 1 mapping.

input.id - // has 1:1 mapping + live-sync
// Meaning - We have the id of the attribute and property. If we change the value of one, other gets updated automatically in real-time - Live Sync...

input.className - // has live-sync (if we change attribute, the property will change and if we change property, attribute will change).
// But names aren't equal. 
// To understand - in input tag = the attribute is 'class'. Whereas in the property it is = "className".

input.value - // 1:1 mapping (meaning both the names are same as in the input it is value and in the property after the . it is named value).
// 1 WAY LIVE SYNC here...
// If we change the input.value, it won't be reflected back to attribute.
// IMP = Only if we change the attribute we see the property value changed. Will learn through example later....

-----------------------------------------------

// We create a input text within our HTML code...

<input type="text" value="default text" />

// Now in console, we do.....

const input = document.querySelector('input');

console.dir(input);
// this to look at the properties.
// We go to the value property in the console...
// We see "default text" there.

// Now if we change the Attribute from the element in dev tools, let's say to "default text!!!", and then we create a new const with input2, we can see that the value within property is changed...

// We change input value from the console...

input.value = 'Some other input';
// We can see this text within the user interface in the current opened web-page....
// But in the element, we inspect and see the 'default text'.
// Here it isn't reflected back whereas the change in attribute is reflected back in the DOM property...


// It is different for CSS Class and ID, if we change them within console using property, their attributes are changed.


// We can CHANGE THE ATTRIBUTE..

input.setAttribute('value', 'some other default text');
// This takes two arguments. One of the thing we wanna change and the other is the change we wanna inflict...

// This doesn't change the user interface value so we don't accidentally get rid of user input...

// But we don't have live-sync so the value before will be displayed within console when we access it.
// The value is changed in the ELEMENT tab...


-------------------------------------------------------------------------------------------------------


// 8. Selecting Multiple Elements & Summary....

// Let's say we wanna select all <li>.

const allLis = document.querySelectorAll('li');

allLis;
// In console, it will give NodeList (array like) of our all 3 li...

// To access any particular LI we do this....

allLis[0];
// We use index...

// We also use loop also here...

const listItemElements = document.querySelectorAll('li');
// This doesn't give live list...

for (const listItemEl of listItemElements){
    console.dir(listItemEl);
}

// Alternative to this and most often used method...

const listItemElements = document.getElementsByTagName('li');
// This gives us a live list which reflects changes within them... 


----------------------------------------------------------------------------------------------------


// 9. Traversing the DOM - Overview...

// We looked at how we can select elements in DOM and we learned to manipulate the elements...

// There is one more concept connected to selecting elements which is Traversing the DOM....

// MEANING - Once we select one element, one NODE to be precise, we might wanna dive into all it's CHILD NODE... Eg- to edit all items in a list or anything like that...

// Rather than selecting one element at a time, we can take the element we did select and then move onto it's CHILDREN or SIBLINGS based on that element...

// We will use terms such as - CHILDREN, DESCENDANTS, PARENTS & ANCESTORS...

// LET'S LEARN ABOUT THOSE...

<div>
    <p>
        A<em>test!</em>
    </p>
</div>

/*

CHILD :
Direct Child Node or Element - <p> is direct child of <div>.
<em> is not the direct child...

DESCENDANT :
Direct or Indirect child node or element - 
<p> as well as it's nested element <em> are Descendants of <div>..

PARENT :
Direct Parent node or element - Alternate to upper 2 - 
<div> is a parent of <p> but not of the nested <em>..

ANCESTOR :
Direct or Indirect Parent Node/Element - 
<div> is an ancestor of both <p> & <em>...

*/

---------------------------------------------------

// Here DOM traversal means we have a selected Element or a Node..

// For Eg. Our Current Node is - <div>...

// Now we wanna dive into our surrounding or nested elements or nodes...

// We got couple of directions where we can go...


/**

UP :
Will find a Parent Element/Node..
DOM PROPERTIES = parentNode, parentElement, closest()...
Every element will have this parent node-element property...
parentNode selects every node. parentElement selects a parent node that also is an Element...
closest() is a method we can use to take not only parent but also the Ancestor which matches a certain CSS query...


DOWN :
Reach out to Child or Descandants..
PROPERTIES - childNodes, children, querySelector(), etc...
childNodes select all the nodes including text nodes. Whereas children only selects element nodes...
SPECIAL PROPERTIES - firstChild, firstElementChild, lastChild, lastElementChild...

STAYING IN THE SAME LEVEL - SIBLINGS :
PROPERTIES - previousSibling, previousElementSibling, nextSibling, nextElementSibling...

*/


------------------------------------------------------------------------------------------------


// 10. Traversing CHILD NODES....

// We will work on the <ul> / <li> here...

<ul>
    <li class="list-item">Item 1</li>
    <li class="list-item">Item 2</li>
    <li class="list-item">Item 3</li>
</ul>

// Added class to the 1st li to understand the traversing of child nodes...

// Wanna select 2nd list item here...

// Won't be able to select with querySelector('li'), as this will select the 1st matching element....

// We get access to the parent element <ul> and then get to the child nodes associated to it...

const ul = document.querySelector('ul');

// We use CHILDREN - cause we just wanna select the elements and not the text nodes...

ul.children;
// This will make a HTML collection (array like) list appear in the console...
// We will have all 3 li...
// To select the 2nd element we will use the index number to it - [1]...

ul.children[1];

// The difference between CHILDNODES - CHILDREN is that childNodes select the every elements including texts... Which means in the array-like list we will see texts too. 
// IMP = With texts, there also will be WHITESPACES...

ul.childNodes;
// We will see so much content with texts and our li...
// Here whitespace is also shown as whitespace...

// We see within the console, in the nodeList of the childNodes - [0] text. We click that open to see the properties of it and we see one named = data : '↲      ' ... This shows the white space before our li item 1... This is just a text content...

// The whitespace isn't rendered cause we don't give it any style to render it. We can give it a style =
white-space: pre; 
// in CSS. But the default will not be rendered as it doesn't have any purpose...


// Often we wanna work with CHILDREN, cause in most cases, we wanna get child element nodes.
// If we need access to text and all nodes we use childNodes...


// We have other properties...

const ul = document.querySelector('ul');
// Here we wanna get access to the first or last item...

// We can use ('li:last-of-type') or ('li:first-of-type') CSS query selectors...
// But we will need to do much simpler terms...

ul.firstChild;
// To get access to first child node.
ul.firstElementChild;
// To get access to first element child node...

ul.lastChild;
ul.lastElementChild;
// Same explanation just last nodes...


---------------------------------------------------------------------------------------------


// 11. Using parentNode & parentElement.....

// Let's say we wanna reach out to parent list through a child... Needless we can reach it from querySelector and further more if there is body or head, document.body and so on.

// But for learning purpose...

const li = document.querySelector('li');
// We wanna get to the ul here...

li.parentNode;
// We cannot have multiple parent nodes.. We can have multiple chid nodes..

// Here parentNode gives us access to the nearest parent node, parentElement gives us access to nearest parent element node... 

// parentNode & parentElement are almost same as only element nodes can have child nodes cause there won't be any nested contents or childs to the text nodes...

// Then what is the difference?
document.documentElement.parentElement;
// This will return null...

document.documentElement.parentNode;
// This will return the entire document..

// But this is something we will never use cause if we need access to document, we can just type document object...

// Now let's say we need access to body from the li. Yes we can just get it through
document.body;
// But for learning purpose...

// If there's no ancestor between ul and body...
li.closest('body');

// closest('') is a nice method to select any ancestor as long as it indirectly wraps the ul or the li in this case here.


--------------------------------------------------------------------------------------------


// 12. Selecting Sibling Elements....

// We learned up and down. Now we wanna select <header> and <input> of the HTML code with ul/li as the main node...

const ul = li.parentElement;

// Header is on the same level as the ul. If we wanna select it we use .previousElementSibling..
// Here if we use .previousSibling, we select the nearest node (which is text). Which we don't need...

ul.previousElementSibling;

// To get Input...

ul.nextElementSibling;
// Can use .nextSibling to select texts if we want but not here...


// This is how we can work with different Traverse techiques in DOM rather than working with query when it comes to this.... 

// Cause with query the browser searches the whole document and find matching one and there comes bad performance with this. 

// With these traverse methods browser just look onto the main selected node's surrounding...


-----------------------------------------------------------------------------------------------


// 13. DOM Traversal VS Query Methods....

// With ul we can reach to header. 
const ul = doucment.body.firstElementChild.nextElementSibling;

const firstLi = ul.firstElementChild;

// Here the problem is that this code may create slight problem for other to understand as they may have to refer the HTML document....

// Other problem with this may be - At one point we think we may need an extra section in which we store the ul... Then the code above might refer to section rather than to header if we don't change.

// So we need to use DOM traversal techniques when it's likely that the relation in which we traverse remains the same, even if we move code around....

// Imp Note - Deeply nested Traversal Logic will most likely also not yield any performance benefit or may perform worse....


-----------------------------------------------------------------------------------------------------


// 14. STYLING DOM ELEMENTS....

// We will look at Manipulating Elements by changing their styles...


/*

Via Style Property :

Directly target individual CSS Styles on the element...
It's like using Inline styles on the element.
Control styles as inline styles on the element.
Styles assigned on the style property will overwrite any other styles that might be assigned to an element by a class or anything like that.
Style property name are based on CSS names but with regard to JS - background-color becomes backgroundColor...


Via className :

We can manipulate setting styles by class names...
We can Directly set CSS classes assigned to the element.
We can dynamically change these classes, remove them and add new ones to adjust styles that are applied by these classes on an element..
As className is a string, it is a string of all the class names that are added. So we can manipulate that.
Set/Control all Classes at once...
As alternative btw, we can also change the IDs and other attributes that are assigned to an element. 
But CSS classes are most common for spreading styles accross multiple elements...


Via classList :

className takes name of one string which is simply a string of all the classes that should be added and therefore if we want to toggle the class there, we gotta manage it manually.
classList is a property which is JS object which isn't just a string like className.
It is a object with couple of built-in methods that make it easy to add, remove or toggle CSS classes.
Gives fine-grained control over classes that are added.
Can be used with className but with care to not overwrite eachother...

*/


// In HTML we have section with ul...
// We wanna style this section.

const section = document.querySelector('section');

section.style.backgroundColor = 'green'

// Here we assigned the section class to a const. Then with the STYLE property we changed the background color of the ul..

// We can see that as style property works as inline property, the CSS background color style will be added within the HTML page....


// OK, onto the other example of setting and manipulating styles with DOM -

// We set <style> within the head section of HTML page and within it we add some CSS properties...

<style>
    .red-bg{
        background-color: red;
        color: white;
    }

    .visible {
        display: block;
    }

    .invisible {
        display: none;
    }

</style>

// Now within the section of ul in HTML page we add the class of .red-bg

// Now in JS file we create a const of section...
// Then we add the style property to that section...

const section = document.querySelector('section');

section.style.backgroundColor = 'blue';
// Thus the color will turn to blue from red. Whereas the class is still there... But inline style has higher priority which will overwrite class styles...

// Now we add back our red background.

section.className = '';
// This will set the class of section to this string '' .
// This will make blue background vanish.

// Now we set our class name back to red-bg.

section.className = 'red-bg';
// This doesn't mean red-bg is added twice...

// But problem is when we wanna add another class while keeping red-bg too..


// Let's add a button within HTML.
// We create a const within JS.

// We assign it with eventlistener function so that we can use the click property.

// We create a function.
// We assign the classes to it.. 

// We create a if statement for valid functionality of visible and invisible...

button.addEventListener("click", () => {
  if(section.className === "red-bg visible") {
    section.className = 'red-bg invisible';
  } else {
    section.className = 'red-bg visible'
  }
});
// Here we set alternative class for eachother so that when we click the visible we set the button to invisible, and when we click the button when it is invisible we turn it to visible...

// The problem with this method is that we manually have to keep track of all the classes we added above...


// This can be done in easier way...

// We use CLASSLIST object..
section.classList.

// Here we got some methods for classList...
// .contains = to check if a class is set.
// .add = to add a new class..
// .remove = to remove a class.. 
// .replace = to replace a class..

// .toggle = to toggle with class...

section.classList.toggle('visible');
section.classList.toggle('invisible');

// We go to HTML page and add visible initially to the section class...

// Thus the classList will first check if the class is set to visible and if it is, it will toggle to invisible class..
// We add this properties inside of the function we create...

// Hence this will require less work from our side...
// We can comment the visible part as we have red-bg which is already a default block element... Thus the classList will check if there is a class set and then toggle that class with invisible...


-----------------------------------------------------------------------------------------------


// 15. Creating & Inserting Elements - Overview.


// So now we have an understanding of how we select elements with different selection methods, most importantly get element by ID and query selector.

// We have an understanding of how we traverse the DOM based on an element which you selected with parent node and so on.

// We have an understanding of how we can read values from a DOM element and how we can manipulate DOM nodes or DOM elements.

// Now let's have a look at how we can create and insert brand new elements.

// 2 Different ways to do it...

/*

HTML strings :

We can write HTML code within JS which tells the browser to take and parse this HTML code and render it in certain place on our document tree...

HTML string can be added with innerHTML property.
It adds and renders the HTML string.

insertAdjacentHTML() is a method we can use to add some rendered HTML content next to existing content instead of replacing it. 
It adds and renders HTML string in specific position.

*/

/*

createElement()

We use this method on DOM to create a brand new node and manually insert it somewhere in our document.
We create single DOM element node.

We can add element nodes with the help of - appendChild() / append().
We will learn about this in the next lecture.
It appends new DOM element/node inside of another new parent element or node.

prepend(), before(), after(), insertBefore() = to be more specific where we want to add, instead of adding it at the end of existing child node list.
It inserts new DOM element/node in specific position.

replaceChild(), replaceWith() = allows us to replace existing node. 

*/


-----------------------------------------------------------------------------------------------


// 16. Adding Elements via HTML Code....

// Here we will start by adding element with innerHTML...
// We will refer to our section in index.html...

section.innerHTML = "<h2>A New Title!</h2>"
// This will replace any text content within the section...

// innerHTML swaps entire nested HTML structure, nodes with our new content...

// Now we can use this innerHTML like below to not replace our content with new one....

const list = document.querySelector('ul');
list.innerHTML = list.innerHTML + "Item 4"
// But there is a problem here...
// Whenever we add a new item to this, our old list re-renders everytime. Which mean everything turns into a new content (yes looks like old but gets re-rendered into a new content...)

// This is bad for performance (impacts badly on large projects).
// Whole other problem emerges in the input section of the HTML page if we use innerHTML to it...

// Let's say we put that input into a div..

<div>
    <input type="text" value="default text" />
</div>

const div = document.querySelector('div')

div.innerHTML = '<p>Something Went WRONG!</p>'

// We put a new element within div...
// Now in the browser we input a text within the input bar. And then we execute our div.innerHTML command. 
// The text inside the input will be lost as it is re-rendered as a new content....


// innerHTML is useful when we wanna change everything of that element... Not good when we wanna add something to that existing content.


// Better way would be...

div.insertAdjacentElement()
// This allows us to target a position and then define which HTML we want to enter..

// We need to refer to MDN articles for the values regarding it's different positions - beforebegin, afterbegin, beforeend and afterend.

div.insertAdjacentHTML('beforeend', '<p>Something Went Wrong!</p>')
// We use this for div but after it's last child..


------------------------------------------------------------------------------------------------------------


// 17. Adding Elements via createElement()....


// We can use the adjacent method of adding HTML element but there is a DOWNSIDE to it. 
// We just don't have direct access to the newly rendered content...

// For eg = We wanna later reach out to the paragraph and change it or we wanna insert a button and we wanna add an event listener....
// We can use query selector but when a big application, it will get messier... Yes insertAdjacentHTML() is okay when we don't wanna change anything.


// There are easy steps on getting access to a new element by using createElement()

// Suppose we wanna add a li which we can click within the ul...

const list = document.querySelector('ul')

// We wanna create a new element node in JS and then append it at the end of the list...

/*

APPEND meaning :

How do you use the word append?

When you append something to something else, especially a piece of writing, you attach it or add it to the end of it. 
She appended a note at the end of the letter. 
It was a relief that his real name hadn't been appended to the manuscript.

*/

document.createElement()
// We call createElement() on document only not any other DOM node/object.

document.createElement('li')
// This creates brand new element. It only needs one argument which is the TAG NAME. Without the brackets or anything.
// We have second argument which is {is:} - property related to custom elements. Advanced topic we will learn later... 

// We created a new element now we gotta store it somewhere.

const newLi = document.createElement('li')

newLi = <li></li>

// Now we can reach out to our list const. 
// We will insert this li here..

list.appendChild()
// This .appendChild takes any node including text node, but we typically don't create text nodes in JS... We set text with textContent. Cause we rarely want to add text node to existing element...

list.appendChild(newLi)

// We will see a blank point in the list items.. We can add the text..

newLi.textContent = 'Item 4'

// Ofcourse we have to first create the textContent and then append(add) it to the list...
// We can also style the textContent first before adding it to the DOM or here the list...


-------------------------------------------------------------------------------------------


// 18. Inserting DOM elements...

// With append = list.append('some text') = We can add string - text to it too. Which is inserted as a text node next to the element node...

// We can add multiple node simply separated by comma as multiple arguments..

// In MDN we search append & in that we see Internet Explorer doesn't support append..

// Now there is more than APPEND...

// If we wanna insert the newLi as the first item...
list.prepend(newLi);
// This makes item 4 the first element of the list...
// Prepend also doesn't work on IE.. 
// Alternative to this works on IE is element.insertBefore() which we will learn about later.

// BUT AS WE KNOW THAT MICROSOFT HAS KILLED INTERNET EXPLORER...


// To add before the last item ---

list.lastElementChild.before(newLi);
// .lastElementChild will select the last list item...

// We can see that when we do this, the newLi which was on the top of the list because of the prepend will move to the 3rd place....

// If we have an element selected, either selected it in the DOM with query selector or created it with createElement and that element is already part of the DOM.
// Thus it is already rendered and when inserted somewhere else, that isn't copied, instead the existing element is detached from the place where it was and moved to the new place.

// It is because DOM objects are normal objects.
// Objects are reference values... Therefore we do something to it or add it somewhere else, we always work with the smae object.
// It gets detached from the place it was when moved. So if we want a new object/element, we gotta create it...


list.lastElementChild.after(newLi) // After the last child.
list.firstElementChild.replaceWith(newLi) // Replaces the first child..


// These all takes MULTIPLE NODES...

list.append(newLi, someOtherElementCreated);
// Also takes strings....
list.append('');

// But most of the times we will work with single elements as this gives us flexibility and control of that element...

// INSERTING THE SAME ELEMENT MULTIPLE TIMES WILL MOVE IT AND NOT COPY IT...

// In MDN, we will see on browser support table, before doesn't work on safari as well as IE(but who gives a shit about IE).


// Now if we wanna add a new element after the 2nd item ---

const secondLi = list.children[1];

secondLi.after(newLi);

// But as we know we cannot use before-after with safari browser....
// So we use insertAdjacentElement as it has good browser support including safari...

secondLi.insertAdjacentElement('afterend', newLi)
// afterend inserts the element after the element we have selected - here it is secondLi.


----------------------------------------------------------------------------------------------------


// 19. CLONING DOM Nodes...

// As we know that we can move Elements but not copy them... Here we will learn about copying them....

// Let's say we wanna copy the newLi...

const newLi2 = newLi.cloneNode()
// This method is available for every DOM node object...

// The Argument it takes is a boolean - Either TRUE or FALSE...

// FALSE is default which means - We will copy only the main element we wanna copy and not it's child nodes or descendants..

// TRUE means - We will copy all the descendants of the node we wanna copy = meaning all the child nodes of the node that we are copy will be copied too..

const newLi2 = newLi.cloneNode(true);
list.append(newLi2)

// Now our original item 4 is on the 3rd row which we wanna move so...

list.append(newLi, newLi2);


------------------------------------------------------------------------------------------


// 20. Live Node Lists VS Static Node Lists...

// Live node list and non-live node list difference...

// Let's learn with an example...
// We wanna select all the list items within the ul...

const list = document.querySelector('ul')
const listItems = list.querySelectorAll('li')
// We could use document. in place of list. to select all the li from the entire document.

// We wanna see the listItems..
// In console we type...
listItems
// Which will show a node list with our regular 3 list items.

// We will fetch our list items in another way...

const listItems2 = list.getElementsByTagName('li')

listItems2
// This will show a HTMLCollection within the console.

// Both the list items will display array like objects...

// We add new element to see which of the list items adds that element in it's list items...

const newLi = document.createElement('li')
newLi.textContent = 'Item 4'

list.append(newLi) // We inserted the new element...

// In listItems which is NodeList = there won't be any addition of our new element... This list is static or non-live...

// This is because when we typed listItems the first time within console. This array like list took the snapshot of the current list and displayed it... 
// That snapshot will remain consistent.

// But it doesn't mean we cannot edit the list that already is there... Those items are live reference values to objects - which can be edited...

// Yes, this proves good for performance as there is static memory.


// For the HTMLCollection of listItems2. We can see that the new element is added in the array.. Which means the list is live node list..

// getElementBy.... except for ID, will give us array like objects with live list...
// Well this won't matter often times...

// Higher memory consumption...

// We should use querySelectorAll instead of getElement cause it is way more flexible and supports richer queries.


------------------------------------------------------------------------------------------------------


// 21. Removing Elements....

// With .replaceWith we can remove one element to replace with another..

// We wanna get rid of the entire list...

const list = document.querySelector('ul')
// We can use this method...
list.remove() // This removes the list...

// Well IE doesn't support remove.. But WDGAS....

// But for learning purpose...

list.parentElement.removeChild(list);
// This is the SAFEST WAY to remove an element by reaching out it's parent and removing the child with passing the item we wanna remove...

// But .remove() is a shorter method and works pretty well...


--------------------------------------------------------------------------------------


// 22. Insertion & Removal Methods Summary...

// The document about this is saved within the main file. The file is in notepad...


---------------------------------------------------------------------------------------------


// 23. 