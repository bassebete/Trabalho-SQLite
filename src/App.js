import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import ContactScreen from './components/ProductScreen';
import ContactDetailsScreen from './components/ProductDetailsScreen';
import ContactAddScreen from './components/ProductAddScreen';
import ContactEditScreen from './components/ProductEditScreen';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Product: ContactScreen,
    ProductDetails: ContactDetailsScreen,
    AddProduct: ContactAddScreen,
    EditProduct: ContactEditScreen,
  },
  {
    initialRouteName: 'Product',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#777777',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const RootContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <RootContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});