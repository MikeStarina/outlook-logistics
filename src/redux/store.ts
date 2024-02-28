import { configureStore } from '@reduxjs/toolkit'
import { reducer as ftlCalcReducer } from './ftl-calc-slice/ftl-calc.slice' 
import { reducer as basicCalcReducer } from './basic-calc-slice/basic-calc.slice';
import { reducer as zdCalcReducer} from './zd-calc-slice/zd-calc.slice'
import { api } from '@/api/api';
import { setupListeners } from '@reduxjs/toolkit/query'


//const reducers = combineReducers([tasksReducer, stepperReducer])


export const store = configureStore({
    reducer: {
        basicCalc: basicCalcReducer,
        ftlCalc: ftlCalcReducer,
        zdCalc: zdCalcReducer,
        [ api.reducerPath ]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})



// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch