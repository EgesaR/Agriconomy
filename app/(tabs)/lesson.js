import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Lesson = () => {
  const [lessonData, setLessonData] = useState([]);

  useEffect(() => {
    // Fetch lesson data from an API or local storage
    fetchLessonData();
  }, []);

  const fetchLessonData = async () => {
    try {
      // Replace with your actual API call or data retrieval
      const response = await fetch('https://example.com/lessons');
      const data = await response.json();
      setLessonData(data);
    } catch (error) {
      console.error('Error fetching lesson data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson Title</Text>
      {lessonData.map((lesson, index) => (
        <TouchableOpacity key={index} style={styles.lessonItem}>
          <Text style={styles.lessonText}>{lesson.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lessonItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  lessonText: {
    fontSize: 18,
  },
});

export default Lesson;