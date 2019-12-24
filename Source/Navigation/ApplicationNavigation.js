import PhotosListView from '../Components/AppModules/PhotosListView';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const RootStack = createSwitchNavigator(
    {
        photosListView: PhotosListView
    },
    {
        initialRouteName: 'photosListView'
    }
);

export default createAppContainer(RootStack);
