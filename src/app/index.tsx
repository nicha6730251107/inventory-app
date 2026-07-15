import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View, 
  ScrollView, 
  Image,
  SafeAreaView
} from 'react-native';

const initialProducts = [
  {
    id: '1',
    name: 'Hermes Birkin 25 Gold',
    stock: 2,
    category: 'Handbags',
    location: 'Bangkok Store',
    status: 'Active',
    imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Chanel Classic Flap Bag',
    stock: 5,
    category: 'Handbags',
    location: 'Phuket Store',
    status: 'Active',
    imageUrl: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Louis Vuitton Speedy 30',
    stock: 12,
    category: 'Handbags',
    location: 'Chiang Mai Store',
    status: 'Active',
    imageUrl: 'https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=400&auto=format&fit=crop',
  },
];

export default function ProductsScreen() {
  const [products] = useState(initialProducts);
  const [activeTab, setActiveTab] = useState('Products');

  return (
    <View style={styles.outerContainer}>
      <View style={styles.phoneScreen}>
        <SafeAreaView style={styles.container}>
          
          {/* 1. Header Area */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Products</Text>
            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileIcon}>👤</Text>
            </TouchableOpacity>
          </View>

          {/* 2. Search & Filter Controls */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Text style={styles.searchIcon}>🔍</Text>
              <TextInput 
                placeholder="Search products..." 
                placeholderTextColor="#999"
                style={styles.searchInput}
              />
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+ Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Filter ▼</Text>
            </TouchableOpacity>
          </View>

          {/* 3. Product ScrollView List */}
          <ScrollView style={styles.productsList} showsVerticalScrollIndicator={false}>
            {products.map((product) => (
              <View key={product.id} style={styles.productCard}>
                <View style={styles.productInfo}>
                  <Image 
                    source={{ uri: product.imageUrl }} 
                    style={styles.productImage}
                    resizeMode="cover"
                  />
                  <View style={styles.productDetails}>
                    <Text style={styles.stockText}>Stock: {product.stock} in stock</Text>
                    <Text style={styles.categoryText}>Category: {product.category}</Text>
                    <Text style={styles.locationText}>Location: {product.location}</Text>
                  </View>
                  <View style={styles.productActions}>
                    <TouchableOpacity style={styles.statusButton}>
                      <Text style={styles.statusText}>{product.status}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.moreButton}>
                      <Text style={styles.moreIcon}>›</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.productName}>{product.name}</Text>
              </View>
            ))}
          </ScrollView>

          {/* 4. Bottom Navigation Bar */}
          <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Home')}>
              <Text style={styles.navIcon}>🏠</Text>
              <Text style={[styles.navText, activeTab === 'Home' && { color: '#8B5CF6' }]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Add')}>
              <Text style={styles.navIcon}>➕</Text>
              <Text style={[styles.navText, activeTab === 'Add' && { color: '#8B5CF6' }]}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Products')}>
              <Text style={styles.navIcon}>📦</Text>
              <Text style={[styles.navText, activeTab === 'Products' && { color: '#8B5CF6' }]}>Products</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Categories')}>
              <Text style={styles.navIcon}>📁</Text>
              <Text style={[styles.navText, activeTab === 'Categories' && { color: '#8B5CF6' }]}>Categories</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#1E1E24',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh' as any,
  },
  phoneScreen: {
    width: 375,           
    height: 812,           
    backgroundColor: '#f8f9fa',
    borderRadius: 40,      
    overflow: 'hidden',
    borderWidth: 6,        
    borderColor: '#333',   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },


  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  menuButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#8B5CF6',
  },
  profileButton: {
    width: 30,
    height: 30,
    backgroundColor: '#8B5CF6',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 16,
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  searchIcon: {
    fontSize: 16,
    color: '#999',
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 14,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 6,
  },
  addButtonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  filterButton: {
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  filterText: {
    color: '#8B5CF6',
    fontSize: 13,
    fontWeight: '500',
  },
  productsList: {
    flex: 1,
    padding: 16,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  productDetails: {
    flex: 1,
  },
  stockText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },
  categoryText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },
  locationText: {
    fontSize: 13,
    color: '#666',
  },
  productActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginRight: 6,
  },
  statusText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '500',
  },
  moreButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreIcon: {
    fontSize: 18,
    color: '#8B5CF6',
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
});