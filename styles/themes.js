export const lightTheme = {
  background: '#f5f7fa',
  text: '#2d3436',
  cardBackground: '#ffffff',
  buttonPrimary: '#0984e3',
  buttonSecondary: '#74b9ff',
  buttonText: '#ffffff',
  disabledButton: '#dfe6e9',
  accent: '#6c5ce7',
  shadow: '#d4d4d4',
  counterText: '#2d3436',
  success: '#00b894',
  warning: '#e17055'
};

export const darkTheme = {
  background: '#2d3436',
  text: '#dfe6e9',
  cardBackground: '#343c3e',
  buttonPrimary: '#6c5ce7',
  buttonSecondary: '#a29bfe',
  buttonText: '#ffffff',
  disabledButton: '#636e72',
  accent: '#fd79a8',
  shadow: '#1a1a1a',
  counterText: '#fdcb6e',
  success: '#00b894',
  warning: '#e17055'
};

export const getStyles = (isDarkTheme) => {
  const theme = isDarkTheme ? darkTheme : lightTheme;
  
  return {
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    },
    card: {
      backgroundColor: theme.cardBackground,
      borderRadius: 20,
      padding: 30,
      alignItems: 'center',
      width: '90%',
      maxWidth: 350,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.2,
      shadowRadius: 20,
      elevation: 10,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.1)'
    },
    counterText: {
      fontSize: 72,
      fontWeight: '800',
      color: theme.counterText,
      marginVertical: 30,
      textAlign: 'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 15,
      width: '100%',
      marginBottom: 20
    },
    button: {
      backgroundColor: theme.buttonPrimary,
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 15,
      minWidth: 120,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
    },
    buttonDisabled: {
      backgroundColor: theme.disabledButton,
    },
    buttonText: {
      color: theme.buttonText,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16
    },
    toggleButton: {
      backgroundColor: theme.accent,
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 25,
      marginTop: 10
    },
    toggleButtonText: {
      color: '#ffffff',
      fontWeight: '600',
      textAlign: 'center'
    },
    warningText: {
      color: theme.warning,
      marginTop: 15,
      fontStyle: 'italic',
      fontWeight: '500',
      textAlign: 'center'
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 10,
      textAlign: 'center'
    },
    subtitle: {
      fontSize: 16,
      color: theme.text,
      opacity: 0.7,
      marginBottom: 30,
      textAlign: 'center'
    },
    progressBar: {
      height: 10,
      width: '100%',
      backgroundColor: theme.disabledButton,
      borderRadius: 5,
      marginTop: 15,
      marginBottom: 15,
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      backgroundColor: theme.success,
      borderRadius: 5,
      width: '0%'
    }
  };
};