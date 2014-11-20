Ember.TEMPLATES["app"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("color")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n");
  data.buffer.push(escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, "sidebar", {"name":"outlet","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(((helpers.render || (depth0 && depth0.render) || helperMissing).call(depth0, "primary", {"name":"render","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n</div>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["application"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"useData":true});

Ember.TEMPLATES["console-nav-one"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("					");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  data.buffer.push("App One");
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("					");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  data.buffer.push("App Two");
  },"7":function(depth0,helpers,partials,data) {
  data.buffer.push("My Apps");
  },"9":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.index", {"name":"link-to","hash":{
    'classNames': ("dashboard")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(10, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  data.buffer.push("Dashboard");
  },"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.users", {"name":"link-to","hash":{
    'classNames': ("users")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(13, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"13":function(depth0,helpers,partials,data) {
  data.buffer.push("Users");
  },"15":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.data", {"name":"link-to","hash":{
    'classNames': ("data")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(16, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n				<ul>\n					<li>Data Type 1</li>\n					<li>Data Type 2</li>\n					<li>Data Type 3</li>\n				</ul>\n");
  return buffer;
},"16":function(depth0,helpers,partials,data) {
  data.buffer.push("Data<span class=\"add-data\"></span>");
  },"18":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.logic", {"name":"link-to","hash":{
    'classNames': ("logic")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(19, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"19":function(depth0,helpers,partials,data) {
  data.buffer.push("Business Logic");
  },"21":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.files", {"name":"link-to","hash":{
    'classNames': ("files")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(22, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"22":function(depth0,helpers,partials,data) {
  data.buffer.push("Files");
  },"24":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.push", {"name":"link-to","hash":{
    'classNames': ("push")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(25, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"25":function(depth0,helpers,partials,data) {
  data.buffer.push("Push");
  },"27":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.branding", {"name":"link-to","hash":{
    'classNames': ("branding")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(28, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"28":function(depth0,helpers,partials,data) {
  data.buffer.push("Branding");
  },"30":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.analytics", {"name":"link-to","hash":{
    'classNames': ("analytics")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(31, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"31":function(depth0,helpers,partials,data) {
  data.buffer.push("Analytics");
  },"33":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.console", {"name":"link-to","hash":{
    'classNames': ("console")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(34, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"34":function(depth0,helpers,partials,data) {
  data.buffer.push("API Console");
  },"36":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.settings", {"name":"link-to","hash":{
    'classNames': ("settings")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(37, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"37":function(depth0,helpers,partials,data) {
  data.buffer.push("Settings");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = '';
  data.buffer.push("<section ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("app.color")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n	\n	<div id=\"selected-app\">\n		\n		<!-- List Apps -->\n		<div class=\"select-menu apps-nav\">\n			<span class=\"app-icon app-icon-circle\">1</span>\n			<span>App One</span>\n			<ul>\n");
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(4, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("				<li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n			</ul>\n		</div>\n		\n		<!-- List Environments -->\n		<div class=\"select-menu env-nav\">\n			<span>Development</span>\n			<ul>\n				<li class=\"active\"><a href=\"#\">Development</a></li>\n				<li><a href=\"#\">Staging</a></li>\n				<li><a href=\"#\">Production</a></li>\n			</ul>\n		</div>\n		\n	</div>\n	\n	<!-- List App Config Modules -->\n	<ul class=\"app-config-nav\">\n");
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(12, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(15, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(18, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(21, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(24, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(27, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(30, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(33, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(36, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("	</ul>\n\n</section>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["console-nav-two"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("					");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  data.buffer.push("App One");
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("					");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  data.buffer.push("App Two");
  },"7":function(depth0,helpers,partials,data) {
  data.buffer.push("My Apps");
  },"9":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.index", {"name":"link-to","hash":{
    'classNames': ("dashboard")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(10, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  data.buffer.push("Dashboard");
  },"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.users", {"name":"link-to","hash":{
    'classNames': ("users")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(13, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"13":function(depth0,helpers,partials,data) {
  data.buffer.push("Users");
  },"15":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.data", {"name":"link-to","hash":{
    'classNames': ("data")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(16, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n				<ul>\n					<li>Data Type 1</li>\n					<li>Data Type 2</li>\n					<li>Data Type 3</li>\n				</ul>\n");
  return buffer;
},"16":function(depth0,helpers,partials,data) {
  data.buffer.push("Data<span class=\"add-data\"></span>");
  },"18":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.logic", {"name":"link-to","hash":{
    'classNames': ("logic")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(19, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"19":function(depth0,helpers,partials,data) {
  data.buffer.push("Business Logic");
  },"21":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.files", {"name":"link-to","hash":{
    'classNames': ("files")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(22, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"22":function(depth0,helpers,partials,data) {
  data.buffer.push("Files");
  },"24":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.push", {"name":"link-to","hash":{
    'classNames': ("push")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(25, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"25":function(depth0,helpers,partials,data) {
  data.buffer.push("Push");
  },"27":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.branding", {"name":"link-to","hash":{
    'classNames': ("branding")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(28, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"28":function(depth0,helpers,partials,data) {
  data.buffer.push("Branding");
  },"30":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.analytics", {"name":"link-to","hash":{
    'classNames': ("analytics")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(31, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"31":function(depth0,helpers,partials,data) {
  data.buffer.push("Analytics");
  },"33":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.console", {"name":"link-to","hash":{
    'classNames': ("console")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(34, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"34":function(depth0,helpers,partials,data) {
  data.buffer.push("API Console");
  },"36":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("				");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.settings", {"name":"link-to","hash":{
    'classNames': ("settings")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(37, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"37":function(depth0,helpers,partials,data) {
  data.buffer.push("Settings");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = '';
  data.buffer.push("<section ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("app.color")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n	\n	<div id=\"selected-app\">\n		\n		<!-- List Apps -->\n		<div class=\"select-menu apps-nav\">\n			<span class=\"app-icon app-icon-diamond\">2</span>\n			<span>App Two</span>\n			<ul>\n");
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(4, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("				<li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n			</ul>\n		</div>\n		\n		<!-- List Environments -->\n		<div class=\"select-menu env-nav\">\n			<span>Development</span>\n			<ul>\n				<li class=\"active\"><a href=\"#\">Development</a></li>\n				<li><a href=\"#\">Staging</a></li>\n				<li><a href=\"#\">Production</a></li>\n			</ul>\n		</div>\n		\n	</div>\n	\n	<!-- List App Config Modules -->\n	<ul class=\"app-config-nav\">\n");
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(12, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(15, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(18, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(21, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(24, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(27, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(30, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(33, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(36, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("	</ul>\n\n</section>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["index"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("						  App One - ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.one.index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  data.buffer.push("Edit");
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("						  App Two - ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "app.two.index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = '';
  data.buffer.push("		<section id=\"index\">\n			\n			<header id=\"header\">\n				<a href=\"#\" id=\"branding\"></a>\n				<nav id=\"user-nav\">\n					<span>johnthedesigner</span>\n				</nav>\n			</header>\n			\n			<section class=\"kit-wrapper-flex\" id=\"content\">\n				\n				<hr class=\"kit-spacer-10\">\n		        \n		        <!-- Column – Default full-width at top desktop size -->\n		        <div class=\"kit-column-large kit-push-small\" id=\"my-apps\">\n				    <h2 class=\"center\">Your Apps</h2>\n				    \n					<ul class=\"apps\">\n");
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(4, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("					</ul>\n		        </div>\n		        \n			</section>\n			\n		</section>\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["navigation"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = '';
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("	      ");
  data.buffer.push(escapeExpression(((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "title", "location", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID","ID"],"contexts":[depth0,depth0],"data":data}))));
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("	<ul class=\"title-area\">\n	  <li class=\"name\">\n	    <h1>");
  data.buffer.push(escapeExpression(((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "title", "application", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID","STRING"],"contexts":[depth0,depth0],"data":data}))));
  data.buffer.push("</h1>\n	  </li>\n	</ul>\n	<section class=\"top-bar-section\">\n	  <ul class=\"left\">\n");
  stack1 = helpers.each.call(depth0, {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":[],"contexts":[],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("	  </ul>\n	</section>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["primary"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("		<!-- Primary contains flexible content layout -->\n		<section id=\"primary\">\n			\n			<header id=\"header\">\n				<a href=\"#\" id=\"branding\"></a>\n				<nav id=\"user-nav\">\n					<span>johnthedesigner</span>\n				</nav>\n			</header>\n			\n			<section class=\"kit-wrapper-flex demo-columns\" id=\"content\">\n				\n				<hr class=\"kit-spacer-10\">\n		        \n		        <!-- Column – Default full-width at top desktop size -->\n		        <div class=\"kit-column\">\n			        <p>Full-Width Column</p>\n		        </div>\n		        \n		        <!-- X-Large Column – Two-thirds-width at top desktop size -->\n		        <div class=\"kit-column-xlarge\">\n			        <p>X-Large Column</p>\n		        </div>\n		        <div class=\"kit-column-medium\">\n		        </div>\n		        \n		        <!-- Large Column – Two columns at top desktop size -->\n		        <div class=\"kit-column-large\">\n			        <p>Large Column</p>\n		        </div>\n		        <div class=\"kit-column-large\">\n		        </div>\n		        \n		        <!-- Medium Column – Three columns at top desktop size -->\n		        <div class=\"kit-column-medium\">\n			        <p>Medium Column</p>\n		        </div>\n		        <div class=\"kit-column-medium\">\n		        </div>\n		        <div class=\"kit-column-medium\">\n		        </div>\n		        \n		        <!-- Small Column – Four columns at top desktop size -->\n		        <div class=\"kit-column-small\">\n			        <p>Small Column</p>\n		        </div>\n		        <div class=\"kit-column-small\">\n		        </div>\n		        <div class=\"kit-column-small\">\n		        </div>\n		        <div class=\"kit-column-small\">\n		        </div>\n	\n		        <!-- X-Small Column – Two columns at top desktop size -->\n		        <div class=\"kit-column-xsmall\">\n			        <p>X-Small Column</p>\n		        </div>\n		        <div class=\"kit-column-xsmall\">\n		        </div>\n		        <div class=\"kit-column-xsmall\">\n		        </div>\n		        <div class=\"kit-column-xsmall\">\n		        </div>\n		        <div class=\"kit-column-xsmall\">\n		        </div>\n		        <div class=\"kit-column-xsmall\">\n		        </div>\n		        \n		        <hr class=\"kit-spacer-100\">\n		        \n	        </section><!-- #content -->\n	        \n		</section><!-- #primary -->\n");
  },"useData":true});

Ember.TEMPLATES["sidebar-one"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<!-- Sidebar contains vertical list nav -->\n<section id=\"sidebar\" class=\"red\">\n	<!-- Nav -->\n	");
  data.buffer.push(escapeExpression(((helpers.render || (depth0 && depth0.render) || helperMissing).call(depth0, "console-nav-one", {"name":"render","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n</section>\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["sidebar-two"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<!-- Sidebar contains vertical list nav -->\n<section id=\"sidebar\" class=\"blue\">\n	<!-- Nav -->\n	");
  data.buffer.push(escapeExpression(((helpers.render || (depth0 && depth0.render) || helperMissing).call(depth0, "console-nav-two", {"name":"render","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n</section>\n\n");
  return buffer;
},"useData":true});