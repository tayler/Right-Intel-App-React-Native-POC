/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Base64 = require('./lib/Base64');
var styles = require('./styles/styles');

var REQUEST_URL = 'http://rightintel.com/api/v2/posts';

var {
  AppRegistry,
  Image,
  ListView,
  Text,
  View,
} = React;

var RiApi = React.createClass({
    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    },
    componentDidMount: function() {
        this.fetchData();
    },
    fetchData: function() {
        var apiLogin = '[put api login key here]';
        var apiPassword = '[put api password key heref]';
        var b64 = Base64.encode(`${apiLogin}:${apiPassword}`);
        fetch(REQUEST_URL, {
            headers: {
                'Authorization': 'Basic ' + b64,
                'Accept': 'application/json',
                'Accept-Encoding': 'deflate',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((responseData) => {
            // console.log(responseData);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData),
                loaded: true,
            });
        })
        .done();
    },
    render: function() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        
        return (
            <ListView
                dataSource={ this.state.dataSource }
                renderRow={ this.renderPost }
                style={ styles.listView }
            />
        );
    },
    renderLoadingView: function() {
        return (
            <View style={ [styles.container, styles.loadingContainer] }>
                <Text style={ styles.loadingText }>
                    Loading posts...
                </Text>
            </View>
        );
    },
    renderPost: function(post) {
        var imgSrc = (post.image && post.image.url) ? post.image.url : 'http://rightintel/assets/img/ri-logo.png';
        return (
            <View style={ styles.container }>
                <Image 
                    source={{ uri: imgSrc }}
                    style={ styles.thumbnail }
                />
                <View style={ styles.detailsContainer }>
                    <View style={ styles.bubbleContainer }>
                        <Text style={ styles.bubble }>{ post.intel_text }</Text>
                    </View>
                    <Text style={ styles.headline }>{ post.headline }</Text>
                    <Text style={ styles.url }>{ post.url }</Text>
                </View>
            </View>
        );
        
    },
});

AppRegistry.registerComponent('RiApi', () => RiApi);
