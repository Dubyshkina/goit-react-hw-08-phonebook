import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsReducer";
import filterReducer from "./filterReducer";
import authReducer from "./authSlice";
import { persistStore,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

//     const contactsConfig = {
// key: 'contacts',
// storage
//     }
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
      
      contacts:contactsReducer,
      filter: filterReducer,
      auth:persistReducer(authPersistConfig, authReducer),
      
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      ],
  });

  export const persistor = persistStore(store);