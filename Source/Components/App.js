import React, {Component} from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {Provider} from "react-redux";
import {persistor, store} from "../Redux/Store/ConfigureStore";
import {PersistGate} from "redux-persist/lib/integration/react";

import RootStack from "../Navigation/ApplicationNavigation";

const AppContainer = createAppContainer(RootStack);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <View style={{flex: 1, backgroundColor: 'white'}}>
                        <AppContainer/>
                    </View>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
