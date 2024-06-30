import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import FontAwesomeIcon from '@fortawesome/fontawesome-free'
import { faHome, faUser, faThLarge } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: require('../assets/Images/logo.png'),
    title: 'Web Design',
    categories: 12,
  },
  {
    icon: require('../assets/Images/logo.png'),
    title: 'App Dev',
    categories: 9,
  },
  {
    icon: require('../assets/Images/logo.png'),
    title: 'Web Design',
    categories: 8,
  },
  {
    icon: require('../assets/Images/logo.png'),
    title: 'Graphic Design',
    categories: 16,
  },
  {
    icon: require('../assets/Images/logo.png'),
    title: 'Hacker',
    categories: 22,
  },
  {
    icon: require('../assets/Images/logo.png'),
    title: 'Data Analyst',
    categories: 12,
  },
];

const CartItem = ({ service, onRemove }) => (
  <View style={styles.cartItem}>
    <Image source={service.icon} style={styles.cartIcon} />
    <View>
      <Text style={styles.cartTitle}>{service.title}</Text>
      <Text style={styles.cartCategories}>
        {service.categories} Categories
      </Text>
    </View>
    <TouchableOpacity onPress={() => onRemove(service)}>
      <FontAwesomeIcon icon={faTrash} size={20} color="red" />
    </TouchableOpacity>
  </View>
);

const Cart = ({ cart, onRemove }) => (
  <View style={styles.cartContainer}>
    <Text style={styles.cartHeading}>Your Cart</Text>
    {cart.length === 0 ? (
      <Text style={styles.emptyCart}>Your cart is empty.</Text>
    ) : (
      cart.map((service) => (
        <CartItem key={service.title} service={service} onRemove={onRemove} />
      ))
    )}
  </View>
);

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  const removeFromCart = (service) => {
    setCart(cart.filter((item) => item.title !== service.title));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Here Are Our IT Services</Text>
      </View>
      <View style={styles.servicesContainer}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.title}
            style={styles.serviceCard}
            onPress={() => addToCart(service)}
          >
            <Image source={service.icon} style={styles.serviceIcon} />
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceCategories}>
              {service.categories} Categories
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Cart cart={cart} onRemove={removeFromCart} />
      
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  servicesContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceIcon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceCategories: {
    fontSize: 14,
    color: '#888',
  },
  cartContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  cartHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptyCart: {
    textAlign: 'center',
    color: '#888',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  cartIcon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartCategories: {
    fontSize: 14,
    color: '#888',
  },
 
});

export default App;
