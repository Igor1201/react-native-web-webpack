webpackJsonp([0],{0:function(e,t,n){e.exports=n(47)(4)},1:function(e,t,n){e.exports=n(47)(2)},13:function(e,t,n){e.exports=n(47)(162)},138:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Chart=void 0;var r=n(13);t.Chart="web"===r.Platform.OS?n(257).Chart:r.View},250:function(e,t,n){e.exports=n(47)(99)},251:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.ExampleApp=void 0;var u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(13),s=n(20),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=n(260),h=n(261),y=n(256),v=n(259),b=n(31),m=r(b),w=n(48);m.default.once(function(){p.initializeApp({apiKey:"AIzaSyCeBVaIXYwjEpU289jf7JCeq0zMfzWUxoU",authDomain:"last-time-b6bf0.firebaseapp.com",databaseURL:"https://last-time-b6bf0.firebaseio.com"}),"web"!==f.Platform.OS&&(e.localStorage=function(){function e(){i(this,e)}return u(e,null,[{key:"clear",value:function(){f.AsyncStorage.clear()}},{key:"getItemPromise",value:function(e){return new Promise(function(t,n){f.AsyncStorage.getItem(e,function(e,r){e?n(e):t(r)})})}},{key:"getItem",value:function(e){return regeneratorRuntime.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.getItemPromise(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},null,this)}},{key:"key",value:function(e){return null}},{key:"removeItem",value:function(e){f.AsyncStorage.removeItem(e)}},{key:"setItem",value:function(e,t){f.AsyncStorage.setItem(e,t)}}]),e}())})();var g=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return c.default.createElement(w.Router,null,c.default.createElement(f.View,null,c.default.createElement(w.Route,{path:"/",component:_}),c.default.createElement(w.Route,{path:"/activity/:id",component:y.SingleActivityScreen}),c.default.createElement(w.Route,{path:"/group/:id",component:v.SingleGroupScreen})))}}]),t}(c.default.Component);t.default=g;var _=t.ExampleApp=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={user:null},n}return a(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this;p.auth().onAuthStateChanged(function(t){e.setState({user:t})})}},{key:"render",value:function(){return c.default.createElement(f.View,{style:O.container},this.state.user?c.default.createElement(h.MainScreen,null):c.default.createElement(d.LoginScreen,null))}}]),t}(c.default.Component),O=f.StyleSheet.create({container:{flex:1}})}).call(t,n(36))},252:function(e,t,n){var r=n(13),o=n(251),a=function(e){return e&&e.__esModule?e:{default:e}}(o);r.AppRegistry.registerComponent("ExampleApp",function(){return a.default}),r.AppRegistry.runApplication("ExampleApp",{rootTag:window.document.getElementById("react-root")})},253:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ActivitiesScreen=void 0;var u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(13),s=n(20),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=n(31),h=r(d),y=n(258),v=n(254),b=n(255),m=(t.ActivitiesScreen=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.ds=new f.ListView.DataSource({rowHasChanged:function(e,t){return e!==t}}),n.state={loading:0,activities:n.ds.cloneWithRows([]),groups:n.ds.cloneWithRows([])},n}return i(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this;p.database().ref("/activities").on("value",function(t){var n=h.default.map(t.toJSON(),function(e,t){return h.default.assign({key:t,id:t},e)});e.setState({activities:e.ds.cloneWithRows(n),loading:e.state.loading+1})}),p.database().ref("/groups").once("value",function(t){var n=h.default.map(t.toJSON(),function(e,t){return h.default.assign({key:t,id:t},e)});e.setState({groups:e.ds.cloneWithRows(n),loading:e.state.loading+1})})}},{key:"componentWillUnmount",value:function(){p.database().ref("/activities").off("value")}},{key:"render",value:function(){return c.default.createElement(f.View,{style:m.container},2>this.state.loading?c.default.createElement(f.ActivityIndicator,null):c.default.createElement(f.View,null,c.default.createElement(f.ListView,{enableEmptySections:!0,dataSource:this.state.groups,renderRow:function(e){return c.default.createElement(y.GroupListItem,e)}}),c.default.createElement(f.ListView,{enableEmptySections:!0,dataSource:this.state.activities,renderRow:function(e){return c.default.createElement(v.ActivityListItem,e)}}),c.default.createElement(b.InsertActivity,null)))}}]),t}(c.default.Component),f.StyleSheet.create({container:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}))},254:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityListItem=void 0;var i=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(13),f=n(20),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),p=n(48),d=(t.ActivityListItem=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={count:0},n}return a(t,e),i(t,[{key:"render",value:function(){var e=this;return l.default.createElement(c.View,{style:d.activityView},l.default.createElement(p.Link,{to:"/activity/"+this.props.id},l.default.createElement(c.Text,{style:d.activityName},"[",this.state.count,"] ",this.props.name)),l.default.createElement(c.TouchableHighlight,{onPress:function(){return e.addEvent()}},l.default.createElement(c.View,{style:d.buttonView},l.default.createElement(c.Text,{style:d.buttonText},"+"))))}},{key:"componentWillMount",value:function(){var e=this;s.database().ref("/events/"+this.props.id).on("value",function(t){e.setState({count:t.numChildren()})})}},{key:"componentWillUnmount",value:function(){s.database().ref("/events/"+this.props.id).off("value")}},{key:"addEvent",value:function(){var e=(new Date).getTime();s.database().ref("/events/"+this.props.id+"/"+e).set(1)}}]),t}(l.default.Component),c.StyleSheet.create({activityView:{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:5,padding:10,borderColor:"#999999",borderStyle:"solid",borderWidth:1},activityName:{color:"#333333",fontSize:24},buttonView:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgb(33, 150, 243)",borderRadius:2,padding:5,width:34,height:34},buttonText:{color:"white",fontSize:20,height:24}}))},255:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.InsertActivity=void 0;var i=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(13),f=n(20),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),p=(t.InsertActivity=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:""},n}return a(t,e),i(t,[{key:"render",value:function(){var e=this;return l.default.createElement(c.View,{style:p.container},l.default.createElement(c.Text,{style:p.titleText},"Insert new activity"),l.default.createElement(c.TextInput,{placeholder:"Activity name",style:p.nameInput,onChangeText:function(t){return e.setState({name:t})}}),l.default.createElement(c.Button,{title:"Insert",onPress:function(){return e.insertActivity()}}))}},{key:"insertActivity",value:function(){if(""!==this.state.name.trim()){var e=s.database().ref("/activities").push().key;s.database().ref("/activities/"+e).set({name:this.state.name})}}}]),t}(l.default.Component),c.StyleSheet.create({container:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",margin:5,padding:10,borderColor:"#999999",borderStyle:"solid",borderWidth:1},nameInput:{marginVertical:5,padding:5,borderColor:"#999999",borderStyle:"solid",borderWidth:1},titleText:{fontSize:24}}))},256:function(e,t,n){function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.SingleActivityScreen=void 0;var l=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),f=o(c),s=n(13),p=n(20),d=r(p),h=n(150),y=r(h),v=n(31),b=o(v),m=n(48),w=n(138),g=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:""},n}return u(t,e),l(t,[{key:"render",value:function(){var e=this;return f.default.createElement(s.View,{style:_.editActivityContainer},f.default.createElement(s.TextInput,{placeholder:this.props.name,style:_.nameInput,onChangeText:function(t){return e.setState({name:t})}}),f.default.createElement(s.Button,{title:"Change",onPress:function(){return e.onPressChange()}}))}},{key:"onPressChange",value:function(){this.props.id&&""!==this.state.name.trim()&&d.database().ref("/activities/"+this.props.id).set({name:this.state.name}),this.props.onDone()}}]),t}(f.default.Component),_=(t.SingleActivityScreen=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={activity:null,events:[],editing:!1},n}return u(t,e),l(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.params.id;d.database().ref("/activities/"+t).on("value",function(t){e.setState({activity:t.val()})}),d.database().ref("/events/"+t).on("value",function(t){var n=b.default.map(b.default.keys(t.toJSON()),function(e){return y.LocalDateTime._ofEpochMillis(e,y.ZoneOffset.ofHours(-3))});e.setState({events:n})})}},{key:"componentWillUnmount",value:function(){var e=this.props.params.id;d.database().ref("/activities/"+e).off("value"),d.database().ref("/events/"+e).off("value")}},{key:"render",value:function(){var e=this,t=b.default.map(this.state.events,function(e){return f.default.createElement(s.Text,{key:""+e},""+e)}),n=(0,b.default)(this.state.events).map(function(e){return""+e.toLocalDate()}).countBy().map(function(e,t){return{day:t,count:e}}).value();return f.default.createElement(s.View,{style:{flex:1}},this.state.editing?f.default.createElement(g,{id:this.props.params.id,name:this.state.activity.name,onDone:function(){return e.setState({editing:!1})}}):f.default.createElement(s.Text,{style:{fontSize:30},onPress:function(){return e.setState({editing:!0})}},this.state.activity&&this.state.activity.name),f.default.createElement(w.Chart,{data:n}),t,f.default.createElement(m.Back,null,f.default.createElement(s.Text,null,"Back")))}}]),t}(f.default.Component),s.StyleSheet.create({container:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",margin:5,padding:10,borderColor:"#999999",borderStyle:"solid",borderWidth:1},nameInput:{marginVertical:5,padding:5,borderColor:"#999999",borderStyle:"solid",borderWidth:1},titleText:{fontSize:24},editActivityContainer:{flex:1,flexDirection:"row"}}))},257:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Chart=void 0;var u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(415),s=n(31),p=r(s);t.Chart=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.lines?p.default.map(this.props.lines||[],function(e){return c.default.createElement(f.Line,{type:"monotone",key:e.id,name:e.name,dataKey:e.id,stroke:"#8884d8"})}):c.default.createElement(f.Line,{type:"monotone",dataKey:"count",stroke:"#8884d8"});return c.default.createElement(f.LineChart,{width:600,height:300,data:this.props.data,margin:{top:5,right:30,left:5,bottom:5}},c.default.createElement(f.XAxis,{dataKey:"day"}),c.default.createElement(f.YAxis,null),c.default.createElement(f.CartesianGrid,{strokeDasharray:"3 3"}),c.default.createElement(f.Tooltip,null),e)}}]),t}(c.default.Component)},258:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.GroupListItem=void 0;var u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(13),s=n(20),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=n(31),h=r(d),y=n(48),v=(t.GroupListItem=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={group:null,activities:[]},n}return i(t,e),u(t,[{key:"render",value:function(){var e=this,t=h.default.map(this.state.activities||[],function(t){return c.default.createElement(f.View,{key:t.id},c.default.createElement(f.Text,null,t.name),c.default.createElement(f.TouchableHighlight,{onPress:function(){return e.addEvent(t.id)}},c.default.createElement(f.View,{style:v.buttonView},c.default.createElement(f.Text,{style:v.buttonText},"+"))))});return c.default.createElement(f.View,{style:v.activityView},c.default.createElement(y.Link,{to:"/group/"+this.props.id},c.default.createElement(f.Text,{style:v.activityName},this.props.name)),t)}},{key:"componentWillMount",value:function(){var e=this,t=this.props.id;p.database().ref("/groups/"+t).once("value",function(t){var n=t.val();e.setState({group:n}),(n.activities||[]).forEach(function(t){p.database().ref("/activities/"+t).once("value",function(n){var r=(0,h.default)(e.state.activities).concat({name:n.val().name,id:t}).orderBy("name").value();e.setState({activities:r})})})})}},{key:"componentWillUnmount",value:function(){p.database().ref("/groups/"+this.props.id).off("value"),(this.state.activities||[]).forEach(function(e){p.database().ref("/activities/"+e.id).off("value")})}},{key:"addEvent",value:function(e){var t=(new Date).getTime();p.database().ref("/events/"+e+"/"+t).set(1)}}]),t}(c.default.Component),f.StyleSheet.create({activityView:{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:5,padding:10,borderColor:"#999999",borderStyle:"solid",borderWidth:1},activityName:{color:"#333333",fontSize:24},buttonView:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgb(33, 150, 243)",borderRadius:2,padding:5,width:34,height:34},buttonText:{color:"white",fontSize:20,height:24}}))},259:function(e,t,n){function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.SingleGroupScreen=void 0;var l=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),f=o(c),s=n(13),p=n(20),d=r(p),h=n(150),y=r(h),v=n(31),b=o(v),m=n(48),w=n(138);t.SingleGroupScreen=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={group:null,activities:[],events:[]},n}return u(t,e),l(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.params.id;d.database().ref("/groups/"+t).once("value",function(t){var n=t.val();e.setState({group:n}),(n.activities||[]).forEach(function(t){d.database().ref("/activities/"+t).once("value",function(n){var r=b.default.concat(e.state.activities,{name:n.val().name,id:t});e.setState({activities:r})}),d.database().ref("/events/"+t).on("value",function(n){var r=(0,b.default)(n.toJSON()).map(function(e,n){return{date:y.LocalDateTime._ofEpochMillis(n,y.ZoneOffset.ofHours(-3)),activity:t}}).concat(e.state.events).value();e.setState({events:r})})})})}},{key:"componentWillUnmount",value:function(){var e=this.props.params.id;d.database().ref("/events/"+e).off("value"),(this.state.group.activities||[]).forEach(function(e){d.database().ref("/activities/"+e).off("value"),d.database().ref("/events/"+e).off("value")})}},{key:"render",value:function(){var e=(0,b.default)(this.state.events).map(function(e){return{day:""+e.date.toLocalDate(),activity:e.activity}}).groupBy("day").map(function(e,t){return(0,b.default)(e).countBy("activity").merge({day:t}).value()}).value(),t=this.state.activities||[];return f.default.createElement(s.View,{style:{flex:1}},f.default.createElement(s.Text,{style:{fontSize:30}},this.state.group&&this.state.group.name),f.default.createElement(w.Chart,{data:e,lines:t}),f.default.createElement(m.Back,null,f.default.createElement(s.Text,null,"Back")))}}]),t}(f.default.Component)},260:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.LoginScreen=void 0;var i=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(13),f=n(20),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),p=(t.LoginScreen=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={error:null,email:"",password:""},n}return a(t,e),i(t,[{key:"render",value:function(){var e=this;return l.default.createElement(c.View,{style:p.container},l.default.createElement(c.TextInput,{defaultValue:this.state.email,placeholder:"me@email.com",onChangeText:function(t){return e.setState({email:t})}}),l.default.createElement(c.TextInput,{defaultValue:this.state.password,placeholder:"password",secureTextEntry:!0,onChangeText:function(t){return e.setState({password:t})}}),l.default.createElement(c.Button,{title:"Login",onPress:function(){return e.doLogin()}}),l.default.createElement(c.Text,{style:p.errorText},this.state.error&&this.state.error.message))}},{key:"doLogin",value:function(){var e=this,t=this.state,n=t.email,r=t.password;n&&r&&(this.setState({error:null}),s.auth().signInWithEmailAndPassword(n,r).catch(function(t){e.setState({error:t})}))}}]),t}(l.default.Component),c.StyleSheet.create({container:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"},errorText:{color:"red"}}))},261:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.MainScreen=void 0;var i=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(13),f=n(253),s=n(20),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=(t.MainScreen=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this;return l.default.createElement(c.View,{style:d.container},l.default.createElement(f.ActivitiesScreen,null),l.default.createElement(c.Button,{title:"Logout",onPress:function(){return e.onLogout()}}))}},{key:"onLogout",value:function(){p.auth().signOut()}}]),t}(l.default.Component),c.StyleSheet.create({container:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}))},36:function(e,t,n){e.exports=n(47)(23)},47:function(e,t){e.exports=react},48:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Back=t.Link=t.Route=t.Router=void 0;var u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(13),s=n(1),p=r(s),d=n(580),h=r(d),y=n(31),v=r(y),b=t.Router=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={href:"#/",history:["#/"]},n}return i(t,e),u(t,[{key:"componentWillMount",value:function(){if("web"===f.Platform.OS){var e=function(){console.debug("onHashChange",window.location.hash),""!==window.location.hash&&this.setState({href:window.location.hash})};window.onhashchange=v.default.bind(e,this),this.go(""===window.location.hash?"/":window.location.hash.slice(1))}}},{key:"componentWillUnmount",value:function(){"web"===f.Platform.OS&&(window.onhashchange=void 0)}},{key:"getChildContext",value:function(){return{Router:{href:this.state.href,go:this.go.bind(this),back:this.back.bind(this)}}}},{key:"go",value:function(e){console.debug("go",e),"web"===f.Platform.OS&&window.history.pushState(void 0,void 0,"#"+e),this.setState({href:"#"+e,history:v.default.concat(this.state.history,"#"+e)})}},{key:"back",value:function(){console.debug("back");var e=v.default.dropRight(this.state.history,1),t=v.default.last(e);t&&("web"===f.Platform.OS&&(window.location.hash=t),this.setState({href:t,history:e}))}},{key:"render",value:function(){return c.default.createElement(f.View,null,this.props.children)}}]),t}(c.default.Component);b.childContextTypes={Router:p.default.shape({href:p.default.string,go:p.default.func})},(t.Route=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.parser=new h.default(e.path),n}return i(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.parser=new h.default(e.path)}},{key:"render",value:function(){var e=this.context.Router.href.slice(1),t=this.parser.match(e),n=c.default.createElement(this.props.component,{params:t});return t&&c.default.createElement(f.View,null,n)}}]),t}(c.default.Component)).contextTypes=b.childContextTypes,(t.Link=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this;return c.default.createElement(f.TouchableHighlight,{onPress:function(){return e.context.Router.go(e.props.to)}},c.default.createElement(f.View,null,this.props.children))}}]),t}(c.default.Component)).contextTypes=b.childContextTypes,(t.Back=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this;return c.default.createElement(f.TouchableHighlight,{onPress:function(){return e.context.Router.back()}},c.default.createElement(f.View,null,this.props.children))}}]),t}(c.default.Component)).contextTypes=b.childContextTypes},589:function(e,t,n){e.exports=n(47)(46)}},[252]);