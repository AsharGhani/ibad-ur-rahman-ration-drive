(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{198:function(e,t,n){"use strict";var i=n(8),o=n(34),s=n(25),r=n(10),a=[].sort,u=[1,2,3];i(i.P+i.F*(r((function(){u.sort(void 0)}))||!r((function(){u.sort(null)}))||!n(199)(a)),"Array",{sort:function(e){return void 0===e?a.call(s(this)):a.call(s(this),o(e))}})},199:function(e,t,n){"use strict";var i=n(10);e.exports=function(e,t){return!!e&&i((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=n(217),s=(i=o)&&i.__esModule?i:{default:i};t.default={CAROUSEL:function(e){return(0,s.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,t){return(0,s.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":"horizontal"===t,"axis-vertical":"horizontal"!==t})},SLIDER:function(e,t){return(0,s.default)({thumbs:!e,slider:e,animated:!t})},ITEM:function(e,t){return(0,s.default)({thumb:!e,slide:e,selected:t})},ARROW_PREV:function(e){return(0,s.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,s.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,s.default)({dot:!0,selected:e})}}},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return"translate3d"+("("+("horizontal"===t?[e,0,0]:[0,e,0]).join(",")+")")}},206:function(e,t,n){var i,o,s;o=[t,n(218)],void 0===(s="function"==typeof(i=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=(n=t)&&n.__esModule?n:{default:n};e.default=i.default})?i.apply(t,o):i)||(e.exports=s)},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),r=h(s),a=h(n(33)),u=h(n(204)),l=n(219),c=h(n(205)),p=h(n(206));function h(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return f.call(n),n.state={selectedItem:e.selectedItem,hasMount:!1,firstItem:0,itemSize:null,visibleItems:0,lastPosition:0,showArrows:!1,images:n.getImages()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(e){this.setupThumbs()}},{key:"componentWillReceiveProps",value:function(e,t){e.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:e.selectedItem,firstItem:this.getFirstItem(e.selectedItem)}),e.children!==this.props.children&&this.setState({images:this.getImages()})}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){window.addEventListener("resize",this.updateSizes),window.addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){window.removeEventListener("resize",this.updateSizes),window.removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getImages",value:function(){var e=s.Children.map(this.props.children,(function(e,t){var n=e;return"img"!==e.type&&(n=s.Children.toArray(e.props.children).filter((function(e){return"img"===e.type}))[0]),n&&0!==n.length?n:null}));return 0===e.filter((function(e){return null!==e})).length?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),null):e}},{key:"getFirstItem",value:function(e){var t=e;return e>=this.state.lastPosition&&(t=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(t=this.state.firstItem),e<this.state.firstItem&&(t=e),t}},{key:"renderItems",value:function(){var e=this;return this.state.images.map((function(t,n){var o=u.default.ITEM(!1,n===e.state.selectedItem&&e.state.hasMount),s={key:n,ref:function(t){return e.setThumbsRef(t,n)},className:o,onClick:e.handleClickItem.bind(e,n,e.props.children[n]),onKeyDown:e.handleClickItem.bind(e,n,e.props.children[n])};return 0===n&&(t=r.default.cloneElement(t,{onLoad:e.setMountState})),r.default.createElement("li",i({},s,{role:"button",tabIndex:0}),t)}))}},{key:"render",value:function(){if(!this.props.children)return null;var e,t=this.state.showArrows&&this.state.firstItem>0,n=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,i=-this.state.firstItem*this.state.itemSize+"px",o=(0,c.default)(i,this.props.axis),s=this.props.transitionTime+"ms";return e={WebkitTransform:o,MozTransform:o,MsTransform:o,OTransform:o,transform:o,msTransform:o,WebkitTransitionDuration:s,MozTransitionDuration:s,MsTransitionDuration:s,OTransitionDuration:s,transitionDuration:s,msTransitionDuration:s},r.default.createElement("div",{className:u.default.CAROUSEL(!1)},r.default.createElement("div",{className:u.default.WRAPPER(!1),ref:this.setItemsWrapperRef},r.default.createElement("button",{type:"button",className:u.default.ARROW_PREV(!t),onClick:this.slideRight}),r.default.createElement(p.default,{tagName:"ul",selectedItem:this.state.selectedItem,className:u.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:e,ref:this.setItemsListRef},this.renderItems()),r.default.createElement("button",{type:"button",className:u.default.ARROW_NEXT(!n),onClick:this.slideLeft})))}}]),t}(s.Component);d.displayName="Thumbs",d.propsTypes={children:a.default.element.isRequired,transitionTime:a.default.number,selectedItem:a.default.number,thumbWidth:a.default.number},d.defaultProps={selectedItem:0,transitionTime:350,axis:"horizontal"};var f=function(){var e=this;this.setItemsWrapperRef=function(t){e.itemsWrapperRef=t},this.setItemsListRef=function(t){e.itemsListRef=t},this.setThumbsRef=function(t,n){e.thumbsRef||(e.thumbsRef=[]),e.thumbsRef[n]=t},this.updateSizes=function(){if(e.props.children&&e.itemsWrapperRef){var t=e.props.children.length,n=e.itemsWrapperRef.clientWidth,i=e.props.thumbWidth?e.props.thumbWidth:(0,l.outerWidth)(e.thumbsRef[0]),o=Math.floor(n/i),s=t-o,r=o<t;e.setState((function(t,n){return{itemSize:i,visibleItems:o,firstItem:r?e.getFirstItem(n.selectedItem):0,lastPosition:s,showArrows:r}}))}},this.setMountState=function(){e.setState({hasMount:!0}),e.updateSizes()},this.handleClickItem=function(t,n,i){if(!i.keyCode||"Enter"===i.key){var o=e.props.onSelectItem;"function"==typeof o&&o(t,n)}},this.onSwipeStart=function(){e.setState({swiping:!0})},this.onSwipeEnd=function(){e.setState({swiping:!1})},this.onSwipeMove=function(t){var n=-e.state.firstItem*e.state.itemSize;0===n&&t>0&&(t=0),n===-e.state.visibleItems*e.state.itemSize&&t<0&&(t=0);var i=n+100/(e.itemsWrapperRef.clientWidth/t)+"%";e.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(t){e.itemsListRef.style[t]=(0,c.default)(i,e.props.axis)}))},this.slideRight=function(t){e.moveTo(e.state.firstItem-("number"==typeof t?t:1))},this.slideLeft=function(t){e.moveTo(e.state.firstItem+("number"==typeof t?t:1))},this.moveTo=function(t){t=(t=t<0?0:t)>=e.lastPosition?e.lastPosition:t,e.setState({firstItem:t,selectedItem:e.state.selectedItem})}};t.default=d},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Thumbs=t.Carousel=void 0;var i=s(n(216)),o=s(n(207));function s(e){return e&&e.__esModule?e:{default:e}}t.Carousel=i.default,t.Thumbs=o.default},216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),r=f(s),a=f(n(65)),u=f(n(33)),l=f(n(204)),c=f(n(205)),p=f(n(206)),h=f(n(207)),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(220));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(){},v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return w.call(n),n.state={initialized:!1,selectedItem:e.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:e.autoPlay},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.selectedItem!==this.state.selectedItem&&(this.updateSizes(),this.moveTo(e.selectedItem)),e.autoPlay!==this.state.autoPlay&&this.setState({autoPlay:e.autoPlay},(function(){t.state.autoPlay?t.setupAutoPlay():t.destroyAutoPlay()}))}},{key:"componentDidUpdate",value:function(e,t){e.children||!this.props.children||this.state.initialized||this.setupCarousel(),t.swiping&&!this.state.swiping&&this.resetPosition()}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){this.bindEvents(),this.state.autoPlay&&s.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.setState({initialized:!0});var e=this.getInitialImage();e?e.addEventListener("load",this.setMountState):this.setMountState()}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){window.addEventListener("resize",this.updateSizes),window.addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&document.addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){window.removeEventListener("resize",this.updateSizes),window.removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&document.removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"getPosition",value:function(e){this.props.infiniteLoop&&++e;var t=s.Children.count(this.props.children);if(this.props.centerMode&&"horizontal"===this.props.axis){var n=-e*this.props.centerSlidePercentage,i=t-1;return e&&(e!==i||this.props.infiniteLoop)?n+=(100-this.props.centerSlidePercentage)/2:e===i&&(n+=100-this.props.centerSlidePercentage),n}return 100*-e}},{key:"renderItems",value:function(e){var t=this;return s.Children.map(this.props.children,(function(n,i){var o={ref:function(e){return t.setItemsRef(e,i)},key:"itemKey"+i+(e?"clone":""),className:l.default.ITEM(!0,i===t.state.selectedItem),onClick:t.handleClickItem.bind(t,i,n)};return t.props.centerMode&&"horizontal"===t.props.axis&&(o.style={minWidth:t.props.centerSlidePercentage+"%"}),r.default.createElement("li",o,n)}))}},{key:"renderControls",value:function(){var e=this;return this.props.showIndicators?r.default.createElement("ul",{className:"control-dots"},s.Children.map(this.props.children,(function(t,n){return r.default.createElement("li",{className:l.default.DOT(n===e.state.selectedItem),onClick:e.changeItem,onKeyDown:e.changeItem,value:n,key:n,role:"button",tabIndex:0})}))):null}},{key:"renderStatus",value:function(){return this.props.showStatus?r.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,s.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return this.props.showThumbs&&0!==s.Children.count(this.props.children)?r.default.createElement(h.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth},this.props.children):null}},{key:"render",value:function(){if(!this.props.children||0===s.Children.count(this.props.children))return null;var e="horizontal"===this.props.axis,t=this.props.showArrows&&s.Children.count(this.props.children)>1,n=t&&(this.state.selectedItem>0||this.props.infiniteLoop),o=t&&(this.state.selectedItem<s.Children.count(this.props.children)-1||this.props.infiniteLoop),a={},u=this.getPosition(this.state.selectedItem),h=(0,c.default)(u+"%",this.props.axis),d=this.props.transitionTime+"ms";a={WebkitTransform:h,MozTransform:h,MsTransform:h,OTransform:h,transform:h,msTransform:h},this.state.swiping||(a=i({},a,{WebkitTransitionDuration:d,MozTransitionDuration:d,MsTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d}));var f=this.renderItems(!0),m=f.shift(),v=f.pop(),w={selectedItem:this.state.selectedItem,className:l.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:a,tolerance:this.props.swipeScrollTolerance},y={};if(e){if(w.onSwipeLeft=this.onSwipeForward,w.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var b=this.getVariableImageHeight(this.state.selectedItem);w.style.height=b||"auto",y.height=b||"auto"}}else w.onSwipeUp="natural"===this.props.verticalSwipe?this.onSwipeBackwards:this.onSwipeForward,w.onSwipeDown="natural"===this.props.verticalSwipe?this.onSwipeForward:this.onSwipeBackwards,w.style.height=this.state.itemSize,y.height=this.state.itemSize;return r.default.createElement("div",{className:this.props.className,ref:this.setCarouselWrapperRef},r.default.createElement("div",{className:l.default.CAROUSEL(!0),style:{width:this.props.width}},r.default.createElement("button",{type:"button",className:l.default.ARROW_PREV(!n),onClick:this.onClickPrev}),r.default.createElement("div",{className:l.default.WRAPPER(!0,this.props.axis),style:y,ref:this.setItemsWrapperRef},this.props.swipeable?r.default.createElement(p.default,i({tagName:"ul",ref:this.setListRef},w,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&v,this.renderItems(),this.props.infiniteLoop&&m):r.default.createElement("ul",{className:l.default.SLIDER(!0,this.state.swiping),ref:this.setListRef,style:a},this.props.infiniteLoop&&v,this.renderItems(),this.props.infiniteLoop&&m)),r.default.createElement("button",{type:"button",className:l.default.ARROW_NEXT(!o),onClick:this.onClickNext}),this.renderControls(),this.renderStatus()),this.renderThumbs())}}]),t}(s.Component);v.displayName="Carousel",v.propTypes={className:u.default.string,children:u.default.node,showArrows:u.default.bool,showStatus:u.default.bool,showIndicators:u.default.bool,infiniteLoop:u.default.bool,showThumbs:u.default.bool,thumbWidth:u.default.number,selectedItem:u.default.number,onClickItem:u.default.func.isRequired,onClickThumb:u.default.func.isRequired,onChange:u.default.func.isRequired,axis:u.default.oneOf(["horizontal","vertical"]),verticalSwipe:u.default.oneOf(["natural","standard"]),width:d.unit,useKeyboardArrows:u.default.bool,autoPlay:u.default.bool,stopOnHover:u.default.bool,interval:u.default.number,transitionTime:u.default.number,swipeScrollTolerance:u.default.number,swipeable:u.default.bool,dynamicHeight:u.default.bool,emulateTouch:u.default.bool,statusFormatter:u.default.func.isRequired,centerMode:u.default.bool,centerSlidePercentage:u.default.number},v.defaultProps={showIndicators:!0,showArrows:!0,showStatus:!0,showThumbs:!0,infiniteLoop:!1,selectedItem:0,axis:"horizontal",verticalSwipe:"standard",width:"100%",useKeyboardArrows:!1,autoPlay:!1,stopOnHover:!0,interval:3e3,transitionTime:350,swipeScrollTolerance:5,swipeable:!0,dynamicHeight:!1,emulateTouch:!1,onClickItem:m,onClickThumb:m,onChange:m,statusFormatter:function(e,t){return e+" of "+t},centerMode:!1,centerSlidePercentage:80};var w=function(){var e=this;this.setThumbsRef=function(t){e.thumbsRef=t},this.setCarouselWrapperRef=function(t){e.carouselWrapperRef=t},this.setListRef=function(t){e.listRef=t},this.setItemsWrapperRef=function(t){e.itemsWrapperRef=t},this.setItemsRef=function(t,n){e.itemsRef||(e.itemsRef=[]),e.itemsRef[n]=t},this.autoPlay=function(){!e.state.autoPlay||s.Children.count(e.props.children)<=1||(clearTimeout(e.timer),e.timer=setTimeout((function(){e.increment()}),e.props.interval))},this.clearAutoPlay=function(){e.state.autoPlay&&clearTimeout(e.timer)},this.resetAutoPlay=function(){e.clearAutoPlay(),e.autoPlay()},this.stopOnHover=function(){e.setState({isMouseEntered:!0}),e.clearAutoPlay()},this.startOnLeave=function(){e.setState({isMouseEntered:!1}),e.autoPlay()},this.navigateWithKeyboard=function(t){var n="horizontal"===e.props.axis,i=n?37:38;(n?39:40)===t.keyCode?e.increment():i===t.keyCode&&e.decrement()},this.updateSizes=function(){if(e.state.initialized){var t="horizontal"===e.props.axis,n=e.itemsRef[0],i=t?n.clientWidth:n.clientHeight;e.setState((function(e,n){return{itemSize:i,wrapperSize:t?i*s.Children.count(n.children):i}})),e.thumbsRef&&e.thumbsRef.updateSizes()}},this.setMountState=function(){e.setState({hasMount:!0}),e.updateSizes()},this.handleClickItem=function(t,n){0!=s.Children.count(e.props.children)&&(e.state.cancelClick?e.setState({cancelClick:!1}):(e.props.onClickItem(t,n),t!==e.state.selectedItem&&e.setState({selectedItem:t})))},this.handleOnChange=function(t,n){s.Children.count(e.props.children)<=1||e.props.onChange(t,n)},this.handleClickThumb=function(t,n){e.props.onClickThumb(t,n),e.selectItem({selectedItem:t})},this.onSwipeStart=function(){e.setState({swiping:!0}),e.clearAutoPlay()},this.onSwipeEnd=function(){e.setState({swiping:!1}),e.autoPlay()},this.onSwipeMove=function(t){var n="horizontal"===e.props.axis,i=s.Children.count(e.props.children),o=e.getPosition(e.state.selectedItem),r=e.props.infiniteLoop?e.getPosition(i-1)-100:e.getPosition(i-1),a=n?t.x:t.y,u=a;0===o&&a>0&&(u=0),o===r&&a<0&&(u=0);var l=o+100/(e.state.itemSize/u);e.props.infiniteLoop&&(0===e.state.selectedItem&&l>-100?l-=100*i:e.state.selectedItem===i-1&&l<100*-i&&(l+=100*i)),l+="%",e.setPosition(l);var c=Math.abs(a)>e.props.swipeScrollTolerance;return c&&!e.state.cancelClick&&e.setState({cancelClick:!0}),c},this.setPosition=function(t,n){var i=a.default.findDOMNode(e.listRef);["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(n){i.style[n]=(0,c.default)(t,e.props.axis)})),n&&i.offsetLeft},this.resetPosition=function(){var t=e.getPosition(e.state.selectedItem)+"%";e.setPosition(t)},this.decrement=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.moveTo(e.state.selectedItem-("number"==typeof t?t:1),n)},this.increment=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.moveTo(e.state.selectedItem+("number"==typeof t?t:1),n)},this.moveTo=function(t,n){var i=s.Children.count(e.props.children)-1,o=e.props.infiniteLoop&&!n&&(t<0||t>i),r=t;t<0&&(t=e.props.infiniteLoop?i:0),t>i&&(t=e.props.infiniteLoop?0:i),o?e.setState({swiping:!0},(function(){r<0?e.props.centerMode&&"horizontal"===e.props.axis?e.setPosition("-"+((i+2)*e.props.centerSlidePercentage-(100-e.props.centerSlidePercentage)/2)+"%",!0):e.setPosition("-"+100*(i+2)+"%",!0):r>i&&e.setPosition(0,!0),e.selectItem({selectedItem:t,swiping:!1})})):e.selectItem({selectedItem:t}),e.state.autoPlay&&!1===e.state.isMouseEntered&&e.resetAutoPlay()},this.onClickNext=function(){e.increment(1,!1)},this.onClickPrev=function(){e.decrement(1,!1)},this.onSwipeForward=function(){e.increment(1,!0)},this.onSwipeBackwards=function(){e.decrement(1,!0)},this.changeItem=function(t){if(!t.key||"Enter"===t.key){var n=t.target.value;e.selectItem({selectedItem:n})}},this.selectItem=function(t,n){e.setState(t,n),e.handleOnChange(t.selectedItem,s.Children.toArray(e.props.children)[t.selectedItem])},this.getInitialImage=function(){var t=e.props.selectedItem,n=e.itemsRef&&e.itemsRef[t],i=n&&n.getElementsByTagName("img");return i&&i[t]},this.getVariableImageHeight=function(t){var n=e.itemsRef&&e.itemsRef[t],i=n&&n.getElementsByTagName("img");if(e.state.hasMount&&i.length>0){var o=i[0];if(!o.complete){o.addEventListener("load",(function t(){e.forceUpdate(),o.removeEventListener("load",t)}))}var s=o.clientHeight;return s>0?s:null}return null}};t.default=v},217:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var s=typeof i;if("string"===s||"number"===s)e.push(i);else if(Array.isArray(i)&&i.length){var r=o.apply(null,i);r&&e.push(r)}else if("object"===s)for(var a in i)n.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(i=function(){return o}.apply(t,[]))||(e.exports=i)}()},218:function(e,t,n){var i,o,s;o=[t,n(0),n(33)],void 0===(s="function"==typeof(i=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=c;var i=s(t),o=s(n);function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=!1;function c(e){l=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){c(!0)}}))}catch(f){}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return l?e:e.capture}function h(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var d=function(e){function t(){var e;r(this,t);for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];var s=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return s._handleSwipeStart=s._handleSwipeStart.bind(s),s._handleSwipeMove=s._handleSwipeMove.bind(s),s._handleSwipeEnd=s._handleSwipeEnd.bind(s),s._onMouseDown=s._onMouseDown.bind(s),s._onMouseMove=s._onMouseMove.bind(s),s._onMouseUp=s._onMouseUp.bind(s),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,p({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,p({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=h(e),n=t.x,i=t.y;this.moveStart={x:n,y:i},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=h(e),n=t.x,i=t.y,o=n-this.moveStart.x,s=i-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:o,y:s},e)&&e.preventDefault(),this.movePosition={deltaX:o,deltaY:s}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"render",value:function(){var e=this;return i.default.createElement(this.props.tagName,{ref:function(t){return e.swiper=t},onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:this.props.className,style:this.props.style},this.props.children)}}]),t}(t.Component);d.displayName="ReactSwipe",d.propTypes={tagName:o.default.string,className:o.default.string,style:o.default.object,children:o.default.node,allowMouseEvents:o.default.bool,onSwipeUp:o.default.func,onSwipeDown:o.default.func,onSwipeLeft:o.default.func,onSwipeRight:o.default.func,onSwipeStart:o.default.func,onSwipeMove:o.default.func,onSwipeEnd:o.default.func,tolerance:o.default.number.isRequired},d.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},tolerance:0},e.default=d})?i.apply(t,o):i)||(e.exports=s)},219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.outerWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t+=parseInt(n.marginLeft)+parseInt(n.marginRight)}},220:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.unit=function(e,t,n){if(!/(pt|px|em|rem|vw|vh|%)$/.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed. It needs to be a size unit like pt, px, em, rem, vw, %")}}}]);
//# sourceMappingURL=18-9d74aa50841c13a04ba9.js.map