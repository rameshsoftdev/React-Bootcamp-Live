# Learning React Day-09
## Optimization App
### React Hook
 - Readble.
 - Reusable.
 - Maintable. 
 - Testable,
 - Modularity

### Custom Hook
 - Start with `use` to create custom hook(ex - useRestaurent.js)
 - For better practice, create a separate folder `utils`
 - create files for **hooks and common js functions** inside utils folder
 - use `named imports` for common js functions and use `export default` if we have only one hook or function in a file
 ```
 const useRestaurent = (resId)=>{
    const [restaurent, setRestaurent] = useState(null)
   // Get data from API
   return restaurent;
 }
 export default useRestaurent
```

 - Write our own Hook
 ```
 const useOnline = ()=>{
    const [isOnline, setIsOnline] = useState(true);
    useEffect(()=>{
        window.addEventListener('online',()=>{
          setIsOnline(true);
        });

        window.addEventListener('offline',()=>{
          setIsOnline(false);
        });
    });

    return isOnline;
 }
 ```

 - For Better coding practice, we need to remove Eevent Listeners as below
 ```
  const useOnline = ()=>{
    const [isOnline, setIsOnline] = useState(true);
    const handleOnline = ()=>{
          setIsOnline(true);
    };
    const handleOffline = ()=>{
          setIsOnline(false);
    };
    useEffect(()=>{
        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);

        return ()=>{
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        }
    });

    return isOnline;
 }

 ```
 
## Chunking/Code Splitting/Dynamic Bundling/Lazy Loading/Dynamic import
 - import {lazy, Suspense} from 'react';
 - const Instamart = lazy(()=> import("./compoenents/Instamart"));
 - React tries to suspend on demand loading -> upon render
  ```
   {
    path:'/instamart',
    element:
       <Suspense fallback={<Shimmer/ >}>
          <Instamart/ >
       </Suspense>
   }
  ```
 - Never do lazy loading in components because the components get loaded on every changes in props and state, so lazy loading happens on every render which is performance issue. So always lazy loads at the top of the file just below the import statments.
