webpackJsonp([0],{10:function(e,t,n){e.exports=n(12)(20)},11:function(e,t,n){e.exports=n(12)(6)},12:function(e,t){e.exports=react},32:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(11),l=r(c),f=n(4),s=n(6),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=n(35),y=n(36);r(n(31)).default.once(function(){p.initializeApp({apiKey:"AIzaSyCeBVaIXYwjEpU289jf7JCeq0zMfzWUxoU",authDomain:"last-time-b6bf0.firebaseapp.com",databaseURL:"https://last-time-b6bf0.firebaseio.com"}),"web"!==f.Platform.OS&&(e.localStorage=function(){function e(){u(this,e)}return i(e,null,[{key:"clear",value:function(){f.AsyncStorage.clear()}},{key:"getItemPromise",value:function(e){return new Promise(function(t,n){f.AsyncStorage.getItem(e,function(e,r){e?n(e):t(r)})})}},{key:"getItem",value:function(e){return regeneratorRuntime.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.getItemPromise(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},null,this)}},{key:"key",value:function(e){return null}},{key:"removeItem",value:function(e){f.AsyncStorage.removeItem(e)}},{key:"setItem",value:function(e,t){f.AsyncStorage.setItem(e,t)}}]),e}())})();var h=function(e){function t(e){u(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={user:null},n}return a(t,e),i(t,[{key:"componentWillMount",value:function(){var e=this;p.auth().onAuthStateChanged(function(t){e.setState({user:t})})}},{key:"render",value:function(){return l.default.createElement(f.View,{style:b.container},this.state.user?l.default.createElement(y.MainScreen,null):l.default.createElement(d.LoginScreen,null))}}]),t}(l.default.Component);t.default=h;var b=f.StyleSheet.create({container:{flex:1}})}).call(t,n(10))},33:function(e,t,n){var r=n(4),o=n(32),a=function(e){return e&&e.__esModule?e:{default:e}}(o);r.AppRegistry.registerComponent("ExampleApp",function(){return a.default}),r.AppRegistry.runApplication("ExampleApp",{rootTag:window.document.getElementById("react-root")})},34:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ActivitiesScreen=t.Activity=void 0;var i=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(11),l=r(c),f=n(4),s=n(6),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=n(31),y=r(d),h=t.Activity=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={count:0},n}return u(t,e),i(t,[{key:"render",value:function(){var e=this;return l.default.createElement(f.View,null,l.default.createElement(f.Text,null,"[",this.state.count,"] ",this.props.name),l.default.createElement(f.Button,{title:"+",onPress:function(){return e.addEvent()}}))}},{key:"componentWillMount",value:function(){var e=this;p.database().ref("events/"+this.props.id).on("value",function(t){e.setState({count:t.numChildren()})})}},{key:"addEvent",value:function(){var e=(new Date).getTime();p.database().ref("events/"+this.props.id+"/"+e).set(1)}}]),t}(l.default.Component),b=(t.ActivitiesScreen=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.ds=new f.ListView.DataSource({rowHasChanged:function(e,t){return e!==t}}),n.state={loading:!0,dataSource:n.ds.cloneWithRows([])},n}return u(t,e),i(t,[{key:"componentWillMount",value:function(){var e=this;p.database().ref("activities").once("value",function(t){var n=y.default.map(t.toJSON(),function(e,t){return y.default.assign({key:t,id:t},e)});e.setState({dataSource:e.ds.cloneWithRows(n),loading:!1})})}},{key:"render",value:function(){return l.default.createElement(f.View,{style:b.container},this.state.loading?l.default.createElement(f.ActivityIndicator,null):l.default.createElement(f.ListView,{enableEmptySections:!0,dataSource:this.state.dataSource,renderRow:function(e){return l.default.createElement(h,e)}}))}}]),t}(l.default.Component),f.StyleSheet.create({container:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}))},35:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.LoginScreen=void 0;var u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(11),c=function(e){return e&&e.__esModule?e:{default:e}}(i),l=n(4),f=n(6),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),p=(t.LoginScreen=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={email:"igor@borges.me",password:"123456"},n}return a(t,e),u(t,[{key:"render",value:function(){var e=this;return c.default.createElement(l.View,{style:p.container},c.default.createElement(l.TextInput,{defaultValue:this.state.email,placeholder:"me@email.com",onChangeText:function(t){return e.setState({email:t})}}),c.default.createElement(l.TextInput,{defaultValue:this.state.password,placeholder:"password",secureTextEntry:!0,onChangeText:function(t){return e.setState({password:t})}}),c.default.createElement(l.Button,{title:"Login",onPress:function(){return e.doLogin()}}))}},{key:"doLogin",value:function(){var e=this.state,t=e.email,n=e.password;t&&n&&s.auth().signInWithEmailAndPassword(t,n)}}]),t}(c.default.Component),l.StyleSheet.create({container:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}))},36:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.MainScreen=void 0;var u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(11),c=function(e){return e&&e.__esModule?e:{default:e}}(i),l=n(4),f=n(34),s=n(6),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=(t.MainScreen=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e=this;return c.default.createElement(l.View,{style:d.container},c.default.createElement(f.ActivitiesScreen,null),c.default.createElement(l.Button,{title:"Logout",onPress:function(){return e.onLogout()}}))}},{key:"onLogout",value:function(){p.auth().signOut()}}]),t}(c.default.Component),l.StyleSheet.create({container:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}))},4:function(e,t,n){e.exports=n(12)(153)},66:function(e,t,n){e.exports=n(12)(340)}},[33]);