import React, { useState, useRef } from 'react';
import { View, Text, Pressable, Animated } from 'react-native';
import { getStyles } from '../styles/themes';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const progressWidth = useRef(new Animated.Value(0)).current;
  
  const styles = getStyles(isDarkTheme);
  
  const animateButton = (callback) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 80,
        useNativeDriver: true
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 80,
        useNativeDriver: true
      })
    ]).start(callback);
  };
  
  const updateProgress = (newCount) => {
    Animated.timing(progressWidth, {
      toValue: (newCount / 10) * 100,
      duration: 300,
      useNativeDriver: false
    }).start();
  };
  
  const increment = () => {
    if (count < 10) {
      animateButton(() => {
        const newCount = count + 1;
        setCount(newCount);
        updateProgress(newCount);
      });
    }
  };
  
  const reset = () => {
    if (count > 0) {
      animateButton(() => {
        setCount(0);
        updateProgress(0);
      });
    }
  };
  
  const toggleTheme = () => {
    animateButton(() => {
      setIsDarkTheme(!isDarkTheme);
    });
  };
  
  const animatedButtonStyle = {
    transform: [{ scale: scaleAnim }]
  };
  
  const progressStyle = {
    width: progressWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    })
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Contador</Text>
        <Text style={styles.subtitle}>Toca los botones para interactuar</Text>
        
        <Text style={styles.counterText}>{count}</Text>
        
        <View style={styles.progressBar}>
          <Animated.View style={[styles.progressFill, progressStyle]} />
        </View>
        
        <View style={styles.buttonContainer}>
          <Animated.View style={animatedButtonStyle}>
            <Pressable 
              style={[styles.button, count >= 10 && styles.buttonDisabled]}
              onPress={increment}
              disabled={count >= 10}
              android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
            >
              <Text style={styles.buttonText}>+1</Text>
            </Pressable>
          </Animated.View>
          
          <Animated.View style={animatedButtonStyle}>
            <Pressable 
              style={[styles.button, count === 0 && styles.buttonDisabled]}
              onPress={reset}
              disabled={count === 0}
              android_ripple={{ color: 'rgba(255,255,255,0.3)' }}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
          </Animated.View>
        </View>
        
        {count >= 10 && (
          <Text style={styles.warningText}>¡Máximo alcanzado! (10)</Text>
        )}
        
        <Animated.View style={animatedButtonStyle}>
          <Pressable 
            style={styles.toggleButton}
            onPress={toggleTheme}
            android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
          >
            <Text style={styles.toggleButtonText}>
              {isDarkTheme ? 'Modo Claro' : 'Modo Oscuro'}
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
};

export default Counter;