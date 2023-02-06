Namaste Redux
Building our store
UI and data layer

## React Redux library
 - Data layer will be manageed by Redux
 - Store is separate entity
 - Single store for holding everythinng for whole application.
 - whole large big store.
 - Slices of our store
 - Each store has slices.
 - it can have authentication slice, user slice, card slice, etc...
 - slice is a small  piece of store
 - Our component cannot directly modify the store
 - we will have to dispatch and action to modify the store.
 - 

REDUX store :- 
> A big OBJECT which has different SECTIONS...
> All Components can access the redux store ....
> We'll Create diff Slices of our Store...
> A Slice is a portion of our store.......
Our components cannot directly modify the store... We've to dispatch an action...action calls the function and this function modify the CART...
> click--->Dispatches an Action()---> Call the rducer function--->Update the slice of our redux store
> click on the + button it dispatches an action which calls the reducer function which updates the slice of the redux store
> click on plus=>Dispatch an action=>call reducer func=>updates slice of our redux store
> On clicking on btn -> dispatches the action -> calls the reducer function -> which updates the slice of the redux store.
> Selector hook will be used o select the slice of the store and read it after updates
> cart has subscribed to store, which means any update in store will modify the UI

## Install Redux toolkit
 ```
 npm i @reduxjs/toolkit
 npm i react-redux

 ```

> react-redux - is a bridge b/w React and Redux
In store.js
```
import {configureStore} from '@reduxjs/toolkit'

const store - configureStore({

});

export default store
```

In App.js
```
import {Provider} from 'react-redux';
import from store from '../utils/store.js'

<Provider store={store}>
  
</Provider>
```

In CartSlice.js

```
import {createSlice} from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name:'cart',
    inititialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
           state.items.push(action.payload):
        },
        removeItem:(state, action)=>{
          state.items.pop();
        }
        clearCart: (state)=>{
           state.items = []
        }
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer
```

Put that slice into the store
{
    reducer:{
        cart:cartSlice,
        user:userSlice
    }
}

In Card

```
const dispatch = useDispatch();
