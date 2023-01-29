# Data is the new oil

 - Props drilling
    ```
    AppLayout
      (state=user)
        - <Body user={user}>
          - <RestaurantCard>
    ```

    { isVisible && <p>show desc</p>}

    Lifting the state up
     - Parent control the states of it's child componnts

     React Dev tools

     ## React context
     ```
     import {createContext} from 'react;
     const UserContext = createContext({
        name:'Ramesh',
        email:'codewithramesh@gmai.com'
     })

     UserContext.displayName="UserContext";
     export default UserContext;
     ```

     --> Using context
     - In header
      import {useContext} from 'react';
      import UserContext from '../utils/UserContext'

      const {user} = useContext(UserContext)


      --> Using context in class components

       import UserContext from '../utils/UserContext'

       <UserContext.Consumer>
       {
        
       }
       </UserContext.Consumer>


  <UserContext.Provider value={
    ()=>{
        user:user
    }
  }>
       {
        
       }
       </UserContext.Provider>
