import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Account from '../pages/content/Account';
import Service_Details from '../pages/content/Service_Details';
import Professional_Details from '../pages/content/Professional_Details';
import GeneralInformation from '../pages/content/GernalInformation';
import Main from '../pages/content/Main';



const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Main' component={Main} />
                <Drawer.Screen name="Account" component={Account} />
                <Drawer.Screen name="Service_Details" component={Service_Details} />
                <Drawer.Screen name='Gernallnformation' component={GeneralInformation} />
                <Drawer.Screen name='Professional_Details' component={Professional_Details} />
            </Drawer.Navigator>


        </NavigationContainer>
    )
}

export default DrawerNavigation