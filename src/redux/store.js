import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsReducer";
import filterReducer from "./filterReducer";
// import { persistStore,FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER, persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage';

//     const contactsConfig = {
// key: 'contacts',
// storage
//     }

export const store = configureStore({
    reducer: {
      // contacts: persistReducer(contactsConfig, contactsReducer),
      contacts:contactsReducer,
      filter: filterReducer,
      
    },
    // middleware: getDefaultMiddleware => [
    //     ...getDefaultMiddleware({
    //       serializableCheck: {
    //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //       },
    //     }),
    //   ],
  });

  // export const persistor = persistStore(store);