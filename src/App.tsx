/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Top from './components/Top';
import Search from './components/Search';

function App() {

  return (
    <View style={styles.container}>
      <Header />
      <View style={{flex:1}}>
        <Top />
        <Search />
        {/* //body */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
