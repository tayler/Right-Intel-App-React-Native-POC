
var React = require('react-native');
var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    loadingContainer: {
        backgroundColor: '#F26522',
    },
    loadingText: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    detailsContainer: {
        flex: 1,
        padding: 10,
    },
    bubbleContainer: {
        backgroundColor: '#F26522',
        padding: 20,
        borderRadius: 20,
    },
    bubble: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 18,
    },
    headline: {
        marginTop: 10,
        fontSize: 20,
        marginBottom: 8,
    },
    url: {
    },
});

module.exports = styles;