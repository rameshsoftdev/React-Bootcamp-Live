# Class Based Components
 - To define a React component class, We have to create a class and extend React.Component class.
 - Lets say we want to create an Profile Component like below. 
```
class Profile extends React.Component{
    constructor(props){
      super(props);
      // Create State
      this.state = {
        count:0,
        count2:0,
      }
    }
  render(){
    return (
        <div>
             <h1>Class Component</h1>
             <h2>Count: {this.props.count}</h2>
             <button onClick={()=>this.setState({
                count:1
             })}></button>
        </div>
    )
  }

}
export default Profile;
```
 - Output of any Class Component we create is dependent on the return value of a Method Called render().
 - The render() method is the only required method needs to be implemented in a class component.

## Life cycle methods
 - constructor
 - render
 - componentDidMount(){
    console.log('componentDidMount');
 }
 - componentDidUpdate(){
    console.log('componentDidUpdate');
 }
 - componentWillUnmount(){
    console.log('componentWillUnmount');
 }
## child class component(Below are steps happen when compoent loaded on page)
 + Render Phase(Rendering JSX)
  - Parent constructor
  - Parent render
    - Child constructor
    - Child render

 + Commit Phase(Update DOM)
    - Child componentDidMount()
  - Parent componentDidMount()

## If there two children class components(Below are steps happen when compoent loaded on page)
 + Render Phase(Rendering JSX)
  - Parent constructor
  - Parent render
    - Child 1 constructor
    - Child 1 render
    - Child 2 constructor
    - Child 2 render

 + Commit Phase(Update DOM)
    - Child 1 componentDidMount()
    - Child 2 componentDidMount()
  - Parent componentDidMount()

Why do we write super(props) in constrcuctor of class component?
 - Allows accessing this.props in a Constructor function. In fact, what the super() function does is, calls the constructor of the parent class. 

 ```
 class Checkbox extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { isOn: true };
  }
  // ...
}
 ```

Why can I make componentDidMount async but can't make async callback function in useEffect?
 - `componentDidMount` - This is the method in which we remedied this problem if using React Class-based Components. It ensures that the actual Component is inserted into the DOM tree first and then render() is called.
 - If we don't need an API request to be made then the Component will simply render to the screen. If we do need to make an API request we should do that inside of `componentDidMount()`. In addition if upon receiving the API response we must update, or `setState()`, then that will actually trigger a second render.
 Then the calls will look like this:
   - componentDidMount()
   - render()
   - setState [from inside componentDidMount()]
   - render()

 - Even though there is a second render, the React Docs state that the user will not see the intermediate state. So no weird flickering UI - that's good for us! However, the Docs also say to be cautious as this way could lead to performance issues.

 - More specifically, any DOM node that needs insertion into the tree belongs in this spot, `componentDidMount()`. If you can React recommends that initialization of `state` be done in the `constructor()` instead of here. Obviously, that isn't always viable but it is what they recommend.
 ```
 // src/api/index.js 
export default {
  async index() {
    const res = await fetch('https://my-json-server.typicode.com/Claim-Academy-JS/products/products')

    return await res.json()
  }
}

/* ------------------ */
import api from 'api'

async componentDidMount() {
  const products = await api.index()
  this.setState({ filteredProducts: products, products })
}
 ```
 - This code shows the fetch call being made inside `componentDidMount()` and in this case for my project I needed this setup. These products were to be inserted into the DOM tree so I make the fetch call and set my state. Of course `async` is on both `componentDidMount()` and my exported object's `index()` method. Then inside both of those we `await` the results.

  `useEffect()`
 - Now with Hooks, more specifically `useEffect()` there's a couple things we need to be aware of. First we must understand that `useEffect()` takes **two arguments**.
 **First Argument**
  - Callback function

 **Second Argument**
  - Property to watch for a change -> then fire the provided callback

  - So as per usual, a callback is needed - no surprise there. The second parameter can cause some problems if we forget to specify it. If there is **no second argument provided** the `useEffect()` will fire on every update no matter what is being updated. Even further, if there's a `setState()` or a `useState()` setter being used inside - `useEffect()` will go into an infinite loop.
  - Let's take a look at an equivalent code to the previous example just instead utilizing `useEffect()`:
  ```
    useEffect(() => {
    (async () => {
      const products = await api.index()
      setFilteredProducts(products)
      setProducts(products)
    })()
  }, [])
  ```
  - This time you see there is an Immediately Invoked Function Expression, or IIFE, inside. We could just as well name that function and then specifically invoke it inside too.
  ```
    useEffect(() => {
    const fetchProducts = async () => {
      const products = await api.index()
      setFilteredProducts(products)
      setProducts(products)
    }
    fetchProducts()
  }, [])
  ```
  - Also take note, we are actually providing a callback to `useEffect()` and within that callback we must define another function and invoke it. That's due to a fetch call returning a Promise. So essentially `useEffect()` itself isn't responsible for that so our defined function will handle it.
  - Lastly that **second argument** is present to ensure this `useEffect()` only runs at a specific time.
  - There we provided `[]` as the second argument. This is telling `useEffect()` "Hey, I only want you to run your callback when this Component mounts for the first time and that's it." By using `[]` we tell `useEffect()` that there are no properties we want you to watch and then run your callback when they change. Just run once.
  - There's a difference too between `[]` as a second argument and no second argument. As mentioned before without a second argument that `useEffect()` will think it should run when the component mounts and then on every single update after regardless of what piece of state changes.
  - If we wanted a function to run each time a specific piece of state changes you would simply put it inside the brackets like so `[somePropertyNameHere]`.