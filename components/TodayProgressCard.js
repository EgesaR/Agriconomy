import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodayProgressCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Progress</Text>
      <View style={styles.progressContainer}>
        {/* Add your progress bar or other visual representation here */}
      </View>
      <Text style={styles.description}>
        You have completed 5 tasks today. Keep up the good work!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressContainer: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
  },
});

export default TodayProgressCard;
