"use strict";var powerDownApp=angular.module("cripowerDownApp"ngAnimate","ngTouch","ngSanitize","ui.bootstrap","ui.router","loadingBar","textAngular"]);crimpdpowerDownAppg(["$urlRouterProvider","$stateProvider","$locationProvider","$httpProvider",function(a,b,c,d){c.html5Mode(!0),d.defaults.withCredentials=!0,b.state("community",{url:"/",templateUrl:"views/community.html",controller:"CommunityCtrl"}).state("login",{url:"/login",templateUrl:"views/login.html",controller:"LoginCtrl"}).state("register",{url:"/register",templateUrl:"views/register.html",controller:"RegisterCtrl"}).state("oauth-create",{url:"/oauth-create",templateUrl:"views/oauth-create.html",controller:"OAuthCreateCtrl"}).state("oauth-link",{url:"/oauth-link",templateUrl:"views/oauth-link.html",controller:"OAuthLinkCtrl"}).state("settings",{url:"/settings",templateUrl:"views/user-settings.html",controller:"UserSettingsCtrl"}).state("exercises",{url:"/exercises",templateUrl:"views/exercise-search.html",controller:"ExerciseSearchCtrl"}).state("exercise-create",{url:"/exercises/create",templateUrl:"views/exercise-create.html",controller:"ExerciseCreateCtrl"}).state("exercise-edit",{url:"/exercises/edit/:exerciseId",templateUrl:"views/exercise-create.html",controller:"ExerciseEditCtrl",resolve:ExerciseEditCtrlResolve}).state("exercise-details",{url:"/exercises/:exerciseId",templateUrl:"views/exercise-details.html",controller:"ExerciseDetailsCtrl",resolve:ExerciseDetailsCtrlResolve}).state("privacy-policy",{url:"/privacy-policy",templateUrl:"views/privacy-policy.html"}).state("terms",{url:"/terms",templateUrl:"views/terms.html"}).state("dashboard",{url:"/",templateUrl:"views/exercise-search.html",controller:"ExerciseSearchCtrl"})}]);var config={};config.apiUrl="https://testapi.crimpd.com/crimpd",crimpdApppowerDownAppe("cmTabs",function(){return{restrict:"A",scope:!1,link:function(a){a.tabSelect=function(b){a.panes={},a.panes[b]=!0}}}}),crimpdApp.dipowerDownAppcmImageSorting",["exerciseData","$timeout","$rootScope",function(a,b,c){return{restrict:"A",scope:!1,link:function(d){d.sortableOptions={placeholder:"imagePlaceholder"};var e=[];d.startSortImages=function(){e=angular.copy(d.exerciseModel.images),d.sorting=!0},d.cancelSortImages=function(){d.sorting=!1,d.exerciseModel.images=e},d.saveSortImages=function(){c.$broadcast("LOADING"),d.sorting=!1;for(var e=[],f=0;f<d.exerciseModel.images.length;f++)e.push(d.exerciseModel.images[f].id.toString());a.sortImages(d.exerciseModel.id,e).then(function(a){c.$broadcast("UNLOADING"),d.sortImageRes=a,d.sortImageRes.success?(d.exerciseModel=d.sortImageRes.exercise,d.uploadImageForm.message="sort order updated",d.uploadImageForm.clicked=!0,d.uploadImageForm.formSuccess=!0,b(function(){d.uploadImageForm.formSuccess=!1},2e3)):(d.exerciseModel.errorMessages=d.sortImageRes.errors,d.uploadImageForm.clicked=!0)})}}}}]),crimpdApp.direcpowerDownAppixedFloating",["$timeout",function(a){return{restrict:"A",scope:!1,link:function(b,c){a(function(){var a=$(c).offset().top;$(window).scroll(function(){$(window).scrollTop()>=a?c.addClass("fixed"):c.removeClass("fixed")})},0)}}}]),crimpdApp.run(["$rpowerDownApp,"$location","$http","userInfo",function(a,b,c,d){c.get(config.apiUrl+"/user").success(function(a){if(a.success){var b=a.user,c=d.determineRole(b.role);d.updateUser(b.username,c,b.email,b.firstName,b.lastName)}}),a.$on("$stateChangeStart",function(){$(window).unbind("scroll"),a.currentUser=d.getUser(),0==a.currentUser.role})}]),function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-46266245-1","crimpd.com"),ga("send","pageview"),crimpdApp.directive("powerDownAppidator",function(){return{restrict:"A",scope:!1,link:function(a,b,c){b[0].addEventListener("invalid",function(a){a.preventDefault()},!0);var d=a[c.name];d.formClick=function(a){d.errorPresent=!1,d.formClicked=!1,b.removeClass("error"),d.$error.required||d.$error.email?(d.errorPresent=!0,b.addClass("error"),a.preventDefault()):d.$error.duplicate&&d.$error.duplicate[0].$invalid&&(d.errorPresent=!0,b.addClass("error"),a.preventDefault())},a.$on("removeFormError",function(){d.errorPresent=!1,b.removeClass("error")})}}}),crimpdApp.directive("cmUpowerDownAppput",["$http",function(a){return{restrict:"A",link:function(b,c,d){$(c).on("blur",function(){b.$apply(e())});var e=function(){a.get(config.apiUrl+"/registration/"+c.val()).success(function(a){a.success?(console.log("username is unique"),b[d.parentForm].inputUserName.$setValidity("duplicate",!0)):(console.log("username already exists"),b[d.parentForm].inputUserName.$setValidity("duplicate",!1))})}}}}]),crimpdApp.factory("formDatapowerDownAppunction(){return function(a){var b=new FormData;return angular.forEach(a,function(a,c){b.append(c,a)}),b}}),crimpdApp.directive("cmFileUplpowerDownApption(){return{scope:!1,link:function(a,b){b.on("change",function(b){var c=b.target.files,d=c[0];a.imageFormUtils?a.imageFormUtils.imgFile=d?d:void 0:a.imageFormUtils={imgFile:d?d:void 0},a.$apply()})}}}),function(){angular.module("loadingBar",[]).config(["$httpProvider",function(a){var b=["$q","$cacheFactory","cfpLoadingBar",function(b,c,d){function e(){d.complete(),h=0,g=0}function f(b){var d,e=a.defaults;if("GET"!==b.method||b.cache===!1)return b.cached=!1,!1;d=b.cache===!0&&void 0===e.cache?c.get("$http"):void 0!==e.cache?e.cache:b.cache;var f=void 0!==d?void 0!==d.get(b.url):!1;return void 0!==b.cached&&f!==b.cached?b.cached:(b.cached=f,f)}var g=0,h=0;return{request:function(a){return f(a)||(0===g&&d.start(),g++),a},response:function(a){return f(a.config)||(h++,h===g?e():d.set(h/g)),a},responseError:function(a){return f(a.config)||(h++,h===g?e():d.set(h/g)),b.reject(a)}}}];a.interceptors.push(b)}]).provider("cfpLoadingBar",function(){this.includeSpinner=!1,this.parentSelector="body",this.$get=["$document","$timeout","$animate",function(a,b,c){function d(){p=!0,b.cancel(j),c.enter(m,l),r&&c.enter(o,l),e(.02)}function e(a){if(p){var c=100*a+"%";n.css("width",c),q=a,b.cancel(i),i=b(function(){f()},250)}}function f(){if(!(g()>=1)){var a=0,b=g();a=b>=0&&.25>b?(3*Math.random()+3)/100:b>=.25&&.65>b?3*Math.random()/100:b>=.65&&.9>b?2*Math.random()/100:b>=.9&&.99>b?.005:0;var c=g()+a;e(c)}}function g(){return q}function h(){e(1),j=b(function(){c.leave(m,function(){q=0,p=!1}),c.leave(o)},500)}var i,j,k=this.parentSelector,l=a.find(k),m=angular.element('<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>'),n=m.find("div").eq(0),o=angular.element('<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>'),p=!1,q=0,r=this.includeSpinner;return{start:d,set:e,status:g,inc:f,complete:h,includeSpinner:this.includeSpinner,parentSelector:this.parentSelector}}]})}(),crimpdApp.controller("MainViewCtrpowerDownApppe",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);var textAngular=angular.module("textAngular",["ngSanitize"]);textAngular.directive("textAngular",["$compile","$window","$document","$rootScope","$timeout","taFixChrome",function(a,b,c,d,e,f){function g(a,b){for(var c in b)b[c]&&b[c].constructor&&b[c].constructor===Object?(a[c]=a[c]||{},arguments.callee(a[c],b[c])):a[c]=b[c];return a}console.log("Thank you for using textAngular! http://www.textangular.com"),d.textAngularOpts=g({toolbar:[["h1","h2","h3","p","pre","quote"],["bold","italics","underline","ul","ol","redo","undo","clear"],["justifyLeft","justifyCenter","justifyRight"],["html","insertImage","insertLink","unlink"]],classes:{focussed:"focussed",toolbar:"btn-toolbar",toolbarGroup:"btn-group",toolbarButton:"btn btn-default",toolbarButtonActive:"active",textEditor:"form-control",htmlEditor:"form-control"}},null!=d.textAngularOpts?d.textAngularOpts:{});var h=function(a){a=a.toLowerCase();var b=c[0].queryCommandValue("formatBlock").toLowerCase();return b===a||b===a};return d.textAngularTools=g({html:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'>Toggle HTML</button>",action:function(){var a=this;this.$parent.showHtml=!this.$parent.showHtml,this.$parent.showHtml?e(function(){return a.$parent.displayElements.html[0].focus()},100):e(function(){return a.$parent.displayElements.text[0].focus()},100),this.active=this.$parent.showHtml}},h1:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'>H1</button>",action:function(){return this.$parent.wrapSelection("formatBlock","<H1>")},activeState:function(){return h("h1")}},h2:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'>H2</button>",action:function(){return this.$parent.wrapSelection("formatBlock","<H2>")},activeState:function(){return h("h2")}},h3:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'>H3</button>",action:function(){return this.$parent.wrapSelection("formatBlock","<H3>")},activeState:function(){return h("h3")}},p:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'>P</button>",action:function(){return this.$parent.wrapSelection("formatBlock","<P>")},activeState:function(){return h("p")}},pre:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'>pre</button>",action:function(){return this.$parent.wrapSelection("formatBlock","<PRE>")},activeState:function(){return h("pre")}},ul:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa icon-list'></i></button>",action:function(){return this.$parent.wrapSelection("insertUnorderedList",null)},activeState:function(){return c[0].queryCommandState("insertUnorderedList")}},ol:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa icon-numbered-list'></i></button>",action:function(){return this.$parent.wrapSelection("insertOrderedList",null)},activeState:function(){return c[0].queryCommandState("insertOrderedList")}},quote:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-quote-right'></i></button>",action:function(){return this.$parent.wrapSelection("formatBlock","<BLOCKQUOTE>")},activeState:function(){return h("blockquote")}},undo:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='icon-rotate'></i></button>",action:function(){return this.$parent.wrapSelection("undo",null)}},redo:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='icon-rotate2'></i></button>",action:function(){return this.$parent.wrapSelection("redo",null)}},bold:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='icon-bold2'></i></button>",action:function(){return this.$parent.wrapSelection("bold",null)},activeState:function(){return c[0].queryCommandState("bold")}},justifyLeft:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-align-left'></i></button>",action:function(){return this.$parent.wrapSelection("justifyLeft",null)},activeState:function(){return c[0].queryCommandState("justifyLeft")}},justifyRight:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-align-right'></i></button>",action:function(){return this.$parent.wrapSelection("justifyRight",null)},activeState:function(){return c[0].queryCommandState("justifyRight")}},justifyCenter:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-align-center'></i></button>",action:function(){return this.$parent.wrapSelection("justifyCenter",null)},activeState:function(){return c[0].queryCommandState("justifyCenter")}},italics:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='icon-italic2'></i></button>",action:function(){return this.$parent.wrapSelection("italic",null)},activeState:function(){return c[0].queryCommandState("italic")}},underline:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='icon-underline2'></i></button>",action:function(){return this.$parent.wrapSelection("underline",null)},activeState:function(){return c[0].queryCommandState("underline")}},clear:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='icon-blocked'></i></button>",action:function(){return this.$parent.wrapSelection("removeFormat",null)}},insertImage:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-picture-o'></i></button>",action:function(){var a;return a=prompt("Please enter an image URL to insert","http://"),""!==a?this.$parent.wrapSelection("insertImage",a):void 0}},insertLink:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-link'></i></button>",action:function(){var a;return a=prompt("Please enter an URL to insert","http://"),""!==a?this.$parent.wrapSelection("createLink",a):void 0}},unlink:{display:"<button type='button' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-unlink'></i></button>",action:function(){return this.$parent.wrapSelection("unlink",null)}}},null!=d.textAngularTools?d.textAngularTools:{}),{require:"ngModel",scope:{},restrict:"EA",link:function(b,g,h,i){var j,k,l,m,n,o;angular.extend(b,d.textAngularOpts,{wrapSelection:function(a,c){document.execCommand(a,!1,c),("insertUnorderedList"===a||"insertOrderedList"===a)&&f(b.displayElements.text),b.showHtml?b.displayElements.html[0].focus():b.displayElements.text[0].focus(),b.updateSelectedStyles(),b.showHtml||b.updateTaBindtext()},showHtml:!1}),h.taToolbar&&(b.toolbar=b.$eval(h.taToolbar)),h.taFocussedClass&&(b.classes.focussed=b.$eval(h.taFocussedClass)),h.taToolbarClass&&(b.classes.toolbar=h.taToolbarClass),h.taToolbarGroupClass&&(b.classes.toolbarGroup=h.taToolbarGroupClass),h.taToolbarButtonClass&&(b.classes.toolbarButton=h.taToolbarButtonClass),h.taToolbarActiveButtonClass&&(b.classes.toolbarButtonActive=h.taToolbarActiveButtonClass),h.taTextEditorClass&&(b.classes.textEditor=h.taTextEditorClass),h.taHtmlEditorClass&&(b.classes.htmlEditor=h.taHtmlEditorClass),b.displayElements={toolbar:angular.element("<div></div>"),forminput:angular.element("<input type='hidden' style='display: none;'>"),html:angular.element("<textarea ng-show='showHtml' ta-bind='html' ng-model='html' ></textarea>"),text:angular.element("<div contentEditable='true' ng-hide='showHtml' ta-bind='text' ng-model='text' ></div>")},g.append(b.displayElements.toolbar),g.append(b.displayElements.text),g.append(b.displayElements.html),h.name&&(b.displayElements.forminput.attr("name",h.name),g.append(b.displayElements.forminput)),a(b.displayElements.text)(b),a(b.displayElements.html)(b),g.addClass("ta-root"),b.displayElements.toolbar.addClass("ta-toolbar "+b.classes.toolbar),b.displayElements.text.addClass("ta-text ta-editor "+b.classes.textEditor),b.displayElements.html.addClass("ta-html ta-editor "+b.classes.textEditor),g.on("focusin",function(){g.addClass(b.classes.focussed),e(function(){g.triggerHandler("focus")},0)}),g.on("focusout",function(){e(function(){c[0].activeElement!==b.displayElements.html[0]&&c[0].activeElement!==b.displayElements.text[0]&&(g.removeClass(b.classes.focussed),e(function(){g.triggerHandler("blur")},0))},0)}),b.tools={};for(var p=0;p<b.toolbar.length;p++){j=b.toolbar[p],k=angular.element("<div></div>"),k.addClass(b.classes.toolbarGroup);for(var q=0;q<j.length;q++){n=j[q],o=angular.element(d.textAngularTools[n].display),o.addClass(b.classes.toolbarButton),o.attr("unselectable","on"),o.attr("ng-disabled","showHtml()");var r=angular.extend(b.$new(!0),d.textAngularTools[n],{name:n,showHtml:function(){return"html"!==this.name?this.$parent.showHtml:!1},displayActiveToolClass:function(a){return a?this.$parent.classes.toolbarButtonActive:""}});b.tools[n]=r,k.append(a(o)(r))}b.displayElements.toolbar.append(k)}i.$render=function(){if(b.displayElements.forminput.val(i.$viewValue),void 0!==i.$viewValue&&c[0].activeElement!==b.displayElements.html[0]&&c[0].activeElement!==b.displayElements.text[0]){var a=i.$viewValue||"";b.text=a,b.html=a}},b.$watch("text",function(a){b.html=a,i.$setViewValue(a),b.displayElements.forminput.val(a)}),b.$watch("html",function(a){b.text=a,i.$setViewValue(a),b.displayElements.forminput.val(a)}),b.bUpdateSelectedStyles=!1,b.updateSelectedStyles=function(){for(var a=0;a<b.toolbar.length;a++)for(var c=b.toolbar[a],d=0;d<c.length;d++)n=c[d],null!=b.tools[n].activeState&&(b.tools[n].active=b.tools[n].activeState.apply(b));this.bUpdateSelectedStyles&&e(this.updateSelectedStyles,200)},l=function(){b.bUpdateSelectedStyles=!0,b.$apply(function(){b.updateSelectedStyles()})},b.displayElements.html.on("keydown",l),b.displayElements.text.on("keydown",l),m=function(){b.bUpdateSelectedStyles=!1},b.displayElements.html.on("keyup",m),b.displayElements.text.on("keyup",m),mouseup=function(){b.$apply(function(){b.updateSelectedStyles()})},b.displayElements.html.on("mouseup",mouseup),b.displayElements.text.on("mouseup",mouseup)}}}]).directive("taBind",["$sanitize","$document","taFixChrome",function(a,b,c){return{require:"ngModel",scope:{taBind:"@"},link:function(d,e,f,g){var h="textarea"!==e[0].tagName.toLowerCase()&&"input"!==e[0].tagName.toLowerCase()&&void 0!==e.attr("contenteditable"),i=function(){var a=c(angular.element("<div>").append(e.html())).html();return"html"===d.taBind&&h&&(a=a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")),a};d.$parent["updateTaBind"+d.taBind]=function(){var a=i(),b=g.$parsers;g.$parsers=[],g.$oldViewValue=a,g.$setViewValue(a),g.$parsers=b},h&&e.on("keyup",function(){g.$setViewValue(i())}),g.$parsers.push(function(b){void 0===g.$oldViewValue&&(g.$oldViewValue=b);try{a(b)}catch(c){return g.$oldViewValue}return g.$oldViewValue=b,b}),g.$render=function(){if(void 0!==g.$viewValue)if(b[0].activeElement!==e[0]){var a=g.$viewValue||"";g.$oldViewValue=a,"text"==d.taBind?(e.html(a),e.find("a").on("click",function(a){return a.preventDefault(),!1})):h||"textarea"!==e[0].tagName.toLowerCase()&&"input"!==e[0].tagName.toLowerCase()?e.html(a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")):e.val(a)}else h||e.val(a)}}}}]).factory("taFixChrome",function(){var a=function(a){for(var b=angular.element(a).find("span"),c=0;c<b.length;c++){var d=angular.element(b[c]);d.attr("style")&&d.attr("style").match(/line-height: 1.428571429;|color: inherit; line-height: 1.1;/i)&&(d.next().length>0&&"BR"===d.next()[0].tagName&&d.next().remove(),d.replaceWith(d.html()))}var e=a.html().replace(/style="[^"]*?(line-height: 1.428571429;|color: inherit; line-height: 1.1;)[^"]*"/gi,"");return a.html(e),a};return a}),crimpdApp.controller("ExerciseCreatepowerDownAppscope","exerciseData","$location","$timeout","$rootScope",function(a,b,c,d,e){a.panes={basicInfo:!0},a.list={},a.$on("LOADING",function(){a.loading=!0}),a.$on("UNLOADING",function(){a.loading=!1}),b.queryAllMeta().then(function(b){a.allMeta=b.exerciseMeta}),a.addOrEditExercise=function(){a.createNewExercise()},e.textAngularOpts={toolbar:[["h3","p","bold","italics","ul","ol","redo","undo","clear","html"]],classes:{toolbar:"btn-toolbar",toolbarGroup:"btn-group",toolbarButton:"btn btn-default",toolbarButtonActive:"active",textEditor:"form-control",htmlEditor:"form-control"}},a.createNewExercise=function(){e.$broadcast("LOADING"),b.createBasic(a.exerciseModel.name,a.exerciseModel.description).then(function(b){a.createBasicResp=b,a.exerciseModel.errorMessages=null,a.createBasicResp.success?(a.exerciseModel=a.createBasicResp.exercise,f()):a.exerciseModel.errorMessages=a.createBasicResp.errors,a.createNewExerciseForm.formClicked=!0});var f=function(){var f=[];angular.forEach(a.list,function(a,b){a===!0&&f.push(parseInt(b))}),b.addMeta(a.createBasicResp.exercise.id,f).then(function(b){a.addMetaResp=b,a.exerciseModel.errorMessages=null,a.addMetaResp.success||(a.exerciseModel.errorMessages=a.addMetaResp.errors)}),e.$broadcast("UNLOADING"),b.setIsNewExrTrue(),d(function(){c.path("/exercises/edit/"+a.createBasicResp.exercise.id)},500)}}}]),crimpdApp.controller("ExerciseDetailsCtpowerDownAppope","exerciseModel","userInfo",function(a,b,c){a.exr=b,a.placeholderMd="/images/exrPlaceholder-md.png",a.lowercase=angular.lowercase,a.isContributer=function(){return c.isUserContributer()},a.panes={basicInfo:!0};for(var d=0;d<a.exr.images.length;d++)a.exr.images[d].preview===!0&&(a.mainImage=a.exr.images[d]);$(".mainImage");a.mainImageMd=a.mainImage?a.mainImage.url+".medium"+a.mainImage.extension:"/images/exrPlaceholder-md.png",a.stepIndex=0,a.totalNumSteps=a.exr.images.length,a.nextStepExists=function(){return!!a.exr.images[a.stepIndex+1]},a.previousStepExists=function(){return!!a.exr.images[a.stepIndex-1]},a.nextStep=function(){a.exr.images[a.stepIndex+1]?a.stepIndex++:a.stepIndex=0},a.prevStep=function(){a.exr.images[a.stepIndex-1]?a.stepIndex--:a.stepIndex=a.exr.images.length-1},a.selectStep=function(b){b!==a.stepIndex&&(a.stepIndex=b)}}]);var ExerciseDetailsCtrlResolve={exerciseModel:["$http","$stateParams","$q",function(a,b,c){var d=c.defer();return a.get(config.apiUrl+"/exercise/"+b.exerciseId).success(function(a){d.resolve(a)}),d.promise}]};crimpdApp.controller("ExerciseEditCtrl",["powerDownApp$rootScope","exerciseData","$timeout","allMeta","exerciseModel","isNewExr","formDataObject","$http",function(a,b,c,d,e,f,g,h,i){a.panes={basicInfo:!0},a.$on("LOADING",function(){a.loading=!0}),a.$on("UNLOADING",function(){a.loading=!1});var j=[];b.textAngularOpts={toolbar:[["h3","p","bold","italics","ul","ol","redo","undo","clear","html"]],classes:{toolbar:"btn-toolbar",toolbarGroup:"btn-group",toolbarButton:"btn btn-default",toolbarButtonActive:"active",textEditor:"form-control",htmlEditor:"form-control"}},a.allMeta=e,a.exerciseModel=f,a.isNewExr=g,d(function(){a.isNewExr=!1,c.setIsNewExrFalse()},2500),a.list={};var k=a.exerciseModel.target.concat(a.exerciseModel.type,a.exerciseModel.difficulty,a.exerciseModel.equipment);angular.forEach(k,function(b){a.list[b.id]=!0,j.push(b.id)}),a.addOrEditExercise=function(){a.editExercise()},a.editExercise=function(){b.$broadcast("LOADING");var e=[];angular.forEach(a.list,function(a,b){a===!0&&e.push(parseInt(b))});var f=_.difference(e,j),g=_.difference(j,e);c.updateBasic(a.exerciseModel.name,a.exerciseModel.description,a.exerciseModel.id,f,g).then(function(c){a.editBasicResp=c,a.exerciseModel.errorMessages=null,a.editBasicResp.success?(a.exerciseModel=a.editBasicResp.exercise,a.exerciseModel.message="Nice, you updated "+a.editBasicResp.exercise.name,a.createNewExerciseForm.formSuccess=!0,d(function(){a.createNewExerciseForm.formSuccess=!1},3e3)):a.exerciseModel.errorMessages=a.editBasicResp.errors,a.createNewExerciseForm.formClicked=!0,j=e,b.$broadcast("UNLOADING")})},a.setCurrentImg=function(b){for(var c,d=a.exerciseModel.images,e=0;e<d.length;e+=1)d[e].id===b&&(c=e);a.imageFormUtils={id:b,caption:d[c].caption,preview:d[c].preview,sortIndex:c,imgFile:{name:"placeHolder"}}},a.stopEditingImg=function(){a.imageFormUtils={},a.$broadcast("removeFormError")},a.deleteImg=function(){b.$broadcast("LOADING"),c.deleteImage(a.exerciseModel.id,a.imageFormUtils.id).then(function(c){b.$broadcast("UNLOADING"),a.deleteImgRes=c,a.$broadcast("removeFormError"),a.deleteImgRes.success?(a.exerciseModel=a.deleteImgRes.exercise,a.exerciseModel.message="image deleted",a.uploadImageForm.clicked=!0,a.uploadImageForm.formSuccess=!0,d(function(){a.uploadImageForm.formSuccess=!1},2e3)):(a.exerciseModel.errorMessages=a.deleteImgRes.errors,a.uploadImageForm.clicked=!0)})},a.addOrEditImage=function(){var d=function(){b.$broadcast("LOADING"),i({method:"POST",url:config.apiUrl+"/exercise/basic/"+a.exerciseModel.id+"/image",headers:{"Content-Type":void 0},data:{file:a.imageFormUtils.imgFile,caption:a.imageFormUtils.caption,preview:a.imageFormUtils.preview||!1},transformRequest:h}).then(function(b){a.addEditImageRes=b.data,a.processImage()})},e=function(){b.$broadcast("LOADING"),c.editImage(a.exerciseModel.id,a.imageFormUtils.id,a.imageFormUtils.caption,a.imageFormUtils.preview).then(function(b){a.addEditImageRes=b,a.processImage()})};a.imageFormUtils.id?e():d()},a.processImage=function(){b.$broadcast("UNLOADING"),a.addEditImageRes.success?(a.exerciseModel=a.addEditImageRes.exercise,a.uploadImageForm.message=a.imageFormUtils.id?"image #"+(a.imageFormUtils.sortIndex+1)+" updated":"image #"+a.exerciseModel.images.length+" added",a.uploadImageForm.clicked=!0,a.uploadImageForm.formSuccess=!0,d(function(){a.uploadImageForm.formSuccess=!1},2e3)):(a.exerciseModel.errorMessages=a.addEditImageRes.errors,a.uploadImageForm.clicked=!0)}}]);var ExerciseEditCtrlResolve={allMeta:["$q","$http",function(a,b){var c=a.defer();return b.get(config.apiUrl+"/exercise/meta").success(function(a){c.resolve(a.exerciseMeta)}),c.promise}],exerciseModel:["$http","$stateParams","$q",function(a,b,c){var d=c.defer();return a.get(config.apiUrl+"/exercise/"+b.exerciseId).success(function(a){d.resolve(a)}),d.promise}],isNewExr:["exerciseData",function(a){return a.getIsNewExr()}]};crimpdApp.controller("ExerciseSearchCtrl",["$powerDownAppxerciseData","userInfo","$filter",function(a,b,c){a.loading=!0,a.exercises={},a.lowercase=angular.lowercase,a.placeholderSm="/images/exrPlaceholder-sm.png",a.isContributer=function(){return c.isUserContributer()},b.queryAllExercises().then(function(b){a.exercises=b.exercises,a.loading=!1}),a.isCleanSlate=function(){return _.every(_.values(a.search),function(a){return""===a||null===a})},a.search=b.getCachedSearch(),a.scrollToTop=function(){$("body").animate({scrollTop:0})},a.clearFilters=function(){var c={target:"",difficulty:"",type:"",equipment:"",name:""};a.search=c,b.updateCachedSearch(c)},a.targetOptions=function(){for(var b=[],c=0;c<a.exercises.length;c++)if(!(a.search.difficulty&&!_.contains(a.exercises[c].difficulty,a.search.difficulty)||a.search.type&&!_.contains(a.exercises[c].type,a.search.type)||a.search.equipment&&!_.contains(a.exercises[c].equipment,a.search.equipment)||a.search.name&&!(a.exercises[c].name.toLowerCase().indexOf(a.search.name.toLowerCase())>-1))&&void 0!=a.exercises[c].target)for(var d=0;d<a.exercises[c].target.length;d++)-1==b.indexOf(a.exercises[c].target[d])&&b.push(a.exercises[c].target[d]);return b},a.difficultyOptions=function(){for(var b=[],c=0;c<a.exercises.length;c++)if(!(a.search.target&&!_.contains(a.exercises[c].target,a.search.target)||a.search.type&&!_.contains(a.exercises[c].type,a.search.type)||a.search.equipment&&!_.contains(a.exercises[c].equipment,a.search.equipment)||a.search.name&&!(a.exercises[c].name.toLowerCase().indexOf(a.search.name.toLowerCase())>-1))&&void 0!=a.exercises[c].difficulty)for(var d=0;d<a.exercises[c].difficulty.length;d++)-1==b.indexOf(a.exercises[c].difficulty[d])&&b.push(a.exercises[c].difficulty[d]);return b},a.typeOptions=function(){for(var b=[],c=0;c<a.exercises.length;c++)if(!(a.search.target&&!_.contains(a.exercises[c].target,a.search.target)||a.search.difficulty&&!_.contains(a.exercises[c].difficulty,a.search.difficulty)||a.search.equipment&&!_.contains(a.exercises[c].equipment,a.search.equipment)||a.search.name&&!(a.exercises[c].name.toLowerCase().indexOf(a.search.name.toLowerCase())>-1))&&void 0!=a.exercises[c].type)for(var d=0;d<a.exercises[c].type.length;d++)-1==b.indexOf(a.exercises[c].type[d])&&b.push(a.exercises[c].type[d]);return b},a.equipmentOptions=function(){for(var b=[],c=0;c<a.exercises.length;c++)if(!(a.search.target&&!_.contains(a.exercises[c].target,a.search.target)||a.search.difficulty&&!_.contains(a.exercises[c].difficulty,a.search.difficulty)||a.search.type&&!_.contains(a.exercises[c].type,a.search.type)||a.search.name&&!(a.exercises[c].name.toLowerCase().indexOf(a.search.name.toLowerCase())>-1))&&void 0!=a.exercises[c].equipment)for(var d=0;d<a.exercises[c].equipment.length;d++)-1==b.indexOf(a.exercises[c].equipment[d])&&b.push(a.exercises[c].equipment[d]);return b},a.allowNullValue=function(a,b){if(null===b)return!0;var c=(""+b).toLowerCase();return(""+a).toLowerCase().indexOf(c)>-1}}]),crimpdApp.factory("exerciseData",["$http","$q",fpowerDownApp){var b={target:"",difficulty:"",type:"",equipment:"",name:""},c=!1;return{getCachedSearch:function(){return b},updateCachedSearch:function(a){b=a},getIsNewExr:function(){return angular.copy(c)},setIsNewExrTrue:function(){c=!0},setIsNewExrFalse:function(){c=!1},queryAllExercises:function(){return a.get(config.apiUrl+"/exercise").then(function(a){return a.data})},querySingleExercise:function(b){return a.get(config.apiUrl+"/exercise/"+b).then(function(a){return a.data})},queryAllMeta:function(){return a.get(config.apiUrl+"/exercise/meta").then(function(a){return a.data})},createBasic:function(b,c){return a.post(config.apiUrl+"/exercise/basic",{exercise:{name:b,description:c}}).then(function(a){return a.data})},updateBasic:function(b,c,d,e,f){return a.put(config.apiUrl+"/exercise/basic/"+d,{exercise:{name:b,description:c,addMeta:e,removeMeta:f}}).then(function(a){return a.data})},addMeta:function(b,c){return a.put(config.apiUrl+"/exercise/basic/"+b+"/addMeta",{exerciseMetaId:c}).then(function(a){return a.data})},removeMeta:function(b,c){return a.put(config.apiUrl+"/exercise/basic/"+b+"/removeMeta",{exerciseMetaId:c}).then(function(a){return a.data})},editImage:function(b,c,d,e){return a.put(config.apiUrl+"/exercise/basic/"+b+"/image",{exerciseImage:{id:c,caption:d,preview:e}}).then(function(a){return a.data})},deleteImage:function(b,c){return a({method:"DELETE",url:config.apiUrl+"/exercise/basic/"+b+"/image",data:{exerciseImage:{id:c}}}).then(function(a){return a.data})},sortImages:function(b,c){return a.put(config.apiUrl+"/exercise/basic/"+b+"/sortImages",{images:c}).then(function(a){return a.data})}}}]),crimpdApp.controller("CommunityCtrl",["$scope",funcpowerDownApp),crimpdApp.controller("HeaderCtrl",["$scope","userInfo"powerDownAppon",function(a,b,c){a.state="hide",a.currentUser=b.getUser(),a.isSignedIn=function(){return b.isUserAuth()},a.signOut=function(a){a.preventDefault(),b.signOutUser().then(function(){b.updateUser("noob",0)})},a.isActiveExact=function(a){return c.path()==a?"active":""},a.isActive=function(a){return c.path().indexOf(a)>-1?"active":""}}]),crimpdApp.controller("LoginCtrl",["$scope","$location","upowerDownAppfunction(a,b,c){a.signIn=function(){c.signInUser(a.loginModel.email,a.loginModel.password).then(function(b){a.signInResData=b,a.returnMessage()})},a.returnMessage=function(){if(a.signInResData.success){var d=a.signInResData.user,e=c.determineRole(d.role);c.updateUser(d.username,e,d.email,d.firstName,d.lastName),b.path("/")}else a.loginModel.errorMessages=a.signInResData.errors;a.loginForm.clicked=!0},a.apiUrl=config.apiUrl}]),crimpdApp.controller("OAuthCreateCtrl",["$scope","$http","$lpowerDownApp"userInfo","$timeout",function(a,b,c,d,e){a.createNewAccount=function(){b.post(config.apiUrl+"/oauth/save/createaccount",{username:a.newAccountModel.username}).success(function(b){a.newAccountResData=b,a.returnMessageNewAccount()})},a.returnMessageNewAccount=function(){if(a.newAccountResData.success){var b=a.newAccountResData.user,f=d.determineRole(b.role);d.updateUser(b.username,f,b.email,b.firstName,b.lastName),a.createAccountForm.message="your crimpd account is now set up",a.createAccountForm.formSuccess=!0,e(function(){c.path("/")},2e3)}else a.newAccountModel.errorMessages=a.newAccountResData.errors;a.createAccountForm.clicked=!0}}]),crimpdApp.controller("OAuthLinkCtrl",["$scope","$http","$locatipowerDownAppInfo","$stateParams",function(a,b,c,d,e){a.linkAccountModel={email:e.username},a.linkAccount=function(){b.post(config.apiUrl+"/oauth/save/linkaccount",{username:a.linkAccountModel.email,password:a.linkAccountModel.password}).success(function(b){a.linkAccountResData=b,a.returnMessageLinkAccount()
})},a.returnMessageLinkAccount=function(){if(a.linkAccountResData.success){var b=a.linkAccountResData.user,e=d.determineRole(b.role);d.updateUser(b.username,e,b.email,b.firstName,b.lastName),a.linkAccountForm.message="your crimpd account is now linked",a.linkAccountForm.formSuccess=!0,$timeout(function(){c.path("/")},2e3)}else a.linkAccountModel.errorMessages=a.linkAccountResData.errors;a.linkAccountForm.clicked=!0}}]),crimpdApp.controller("RegisterCtrl",["$scope","$http",function(a,bpowerDownApp};a.apiUrl=config.apiUrl,a.register=function(){c={username:a.registerModel.username,firstName:a.registerModel.firstName,lastName:a.registerModel.lastName,email:a.registerModel.email,password:a.registerModel.password,confirmPassword:a.registerModel.confirmPassword},b.post(config.apiUrl+"/registration/",{user:c}).success(function(b){a.registerResData=b,a.returnMessage()})},a.returnMessage=function(){a.registerModel.errorMessages=null,a.registerResData.success?(a.registrationForm.message="You have registered user "+c.username+". You will recieve an email shortly. Click the link in the email to finish the registration process.",a.registrationForm.formSuccess=!0):a.registerModel.errorMessages=a.registerResData.errors,a.registrationForm.clicked=!0}}]),crimpdApp.controller("UserSettingsCtrl",["$scope","$http","userInfo",powerDownApp",function(a,b,c,d){var e=c.getUser(),f=function(){a.updateProfileModel={firstname:e.firstName,lastname:e.lastName,email:e.email}};e.firstName?f():a.$watch(function(){return e.firstName},function(a,b){a!==b?f():!1});var g={},h={};a.updateProfile=function(){g={email:a.updateProfileModel.email},a.updateProfileModel.firstname&&(g.firstName=a.updateProfileModel.firstname),a.updateProfileModel.lastname&&(g.lastName=a.updateProfileModel.lastname),b.put(config.apiUrl+"/user",{user:g}).success(function(b){a.updateProfileResData=b,a.returnMessageUpdateProfile()})},a.returnMessageUpdateProfile=function(){a.updateProfileResData.user?(a.updateProfileForm.message="Your profile has been succcessfully updated.",a.updateProfileForm.formSuccess=!0,d(function(){a.updateProfileForm.formSuccess=!1},2e3)):a.updateProfileModel.errorMessages=a.updateProfileResData.errors,a.updateProfileForm.clicked=!0},a.changePassword=function(){h={currentPassword:a.changePasswordModel.currentPW,newPassword:a.changePasswordModel.newPW,confirmPassword:a.changePasswordModel.confirmNewPW},b.post(config.apiUrl+"/user/changePassword",h).success(function(b){a.changePasswordResData=b,a.returnMessageChangePassword()})},a.returnMessageChangePassword=function(){a.changePasswordResData.success?(a.changePasswordForm.message="Your password has been succcessfully updated.",a.changePasswordForm.formSuccess=!0,d(function(){a.changePasswordForm.formSuccess=!1},2e3)):a.changePasswordModel.errorMessages=a.changePasswordResData.errors,a.changePasswordForm.clicked=!0}}]),crimpdApp.factory("userInfo",["$rootScope","$http",function(a,b){var c={username:"noob",email:null,firstName:null,lastName:null,role:0};return{getUser:function(){return c},updateUser:function(b,d,e,f,g){return c.username=b,c.role=d,arguments.length>2&&(c.email=e,c.firstName=f,c.lastName=g),a.$broadcast("userChange"),c},updateUserFromServer:function(){var a=this;b.get(config.apiUrl+"/user").success(function(b){if(b.success){var c=b.user,d=a.determineRole(c.role);a.updateUser(c.username,d,c.email,c.firstName,c.lastName)}})},determineRole:function(a){var b,c={ROLE_USER:1,ROLE_CONTRIBUTER:2,ROLE_ADMIN:3};if(1===a.length)b=c[a[0]];else for(var d=0,e=0;e<a.length;e++)c[a[e]]>d&&(b=d=c[a[e]]);return b},isUserAuth:function(){return!(1!==c.role&&2!==c.role&&3!==c.role)},isUserContributer:function(){return!(2!==c.role&&3!==c.role)},isUserAdmin:function(){return!(3!==c.role)},signInUser:function(a,c){return b.post(config.apiUrl+"/auth/"+a,{password:c}).then(function(a){return a.data})},signOutUser:function(){return b.get(config.apiUrl+"/auth/logout").then(function(a){return a.data})}}}]);
