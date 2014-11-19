Ember.TEMPLATES["application"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"useData":true});

Ember.TEMPLATES["apps"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers.render || (depth0 && depth0.render) || helperMissing).call(depth0, "sidebar", "", {"name":"render","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}))));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(((helpers.render || (depth0 && depth0.render) || helperMissing).call(depth0, "primary", {"name":"render","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["console-nav"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = '';
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("			  ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "apps.dashboard", "app", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "app.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"5":function(depth0,helpers,partials,data) {
  data.buffer.push("My Apps");
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("			");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "apps.dashboard", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(8, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  data.buffer.push("Dashboard");
  },"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("			");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "apps.users", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(11, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"11":function(depth0,helpers,partials,data) {
  data.buffer.push("Users");
  },"13":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("			");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "apps.data", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(14, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"14":function(depth0,helpers,partials,data) {
  data.buffer.push("Data");
  },"16":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("			");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "apps.logic", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(17, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"17":function(depth0,helpers,partials,data) {
  data.buffer.push("Business Logic");
  },"19":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("			");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "apps.files", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(20, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"20":function(depth0,helpers,partials,data) {
  data.buffer.push("Files");
  },"22":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("			");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "apps.push", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(23, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"23":function(depth0,helpers,partials,data) {
  data.buffer.push("Push");
  },"25":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("			");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "apps.branding", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(26, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"26":function(depth0,helpers,partials,data) {
  data.buffer.push("Branding");
  },"28":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("			");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "apps.analytics", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(29, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"29":function(depth0,helpers,partials,data) {
  data.buffer.push("Analytics");
  },"31":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("			");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "apps.console", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(32, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"32":function(depth0,helpers,partials,data) {
  data.buffer.push("API Console");
  },"34":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("			");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "apps.settings", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(35, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"35":function(depth0,helpers,partials,data) {
  data.buffer.push("Settings");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing, buffer = '';
  data.buffer.push("<section class=\"top-bar-section\">\n	\n	<ul class=\"apps-nav\">\n		<!-- List Apps -->\n");
  stack1 = helpers.each.call(depth0, "app", "in", "controller", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("		<li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n	</ul>\n	\n	<!-- List App Config Modules -->\n	<ul class=\"app-config-nav\">\n");
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(10, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(13, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(16, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(19, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(22, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(25, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(28, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(31, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(34, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("	</ul>\n\n</section>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["index"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = '';
  stack1 = ((helper = (helper = helpers['list-link'] || (depth0 != null ? depth0['list-link'] : depth0)) != null ? helper : helperMissing),(options={"name":"list-link","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['list-link']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("		  ");
  stack1 = helpers._triageMustache.call(depth0, "name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "apps.dashboard", "", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  data.buffer.push("Edit");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("    <h2>Your Apps</h2>\n	<ul class=\"apps\">\n");
  stack1 = helpers.each.call(depth0, "model", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("	</ul>\n");
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
  data.buffer.push("		<!-- Primary contains flexible content layout -->\n		<section id=\"primary\">\n			\n			<header id=\"header\">\n				<a href=\"#\" id=\"branding\"></a>\n				<nav id=\"user-nav\">\n					<ul>\n						<li><a href=\"#\">Item One</a></li>\n					</ul>\n				</nav>\n			</header>\n			\n			<section class=\"kit-wrapper-flex demo-columns\" id=\"content\">\n		        \n		        <!-- Column – Default full-width at top desktop size -->\n		        <div class=\"kit-column\">\n			        <p>Full-Width Column</p>\n		        </div>\n		        \n		        <!-- X-Large Column – Two-thirds-width at top desktop size -->\n		        <div class=\"kit-column-xlarge\">\n			        <p>X-Large Column</p>\n		        </div>\n		        <div class=\"kit-column-medium\">\n		        </div>\n		        \n		        <!-- Large Column – Two columns at top desktop size -->\n		        <div class=\"kit-column-large\">\n			        <p>Large Column</p>\n		        </div>\n		        <div class=\"kit-column-large\">\n		        </div>\n		        \n		        <!-- Medium Column – Three columns at top desktop size -->\n		        <div class=\"kit-column-medium\">\n			        <p>Medium Column</p>\n		        </div>\n		        <div class=\"kit-column-medium\">\n		        </div>\n		        <div class=\"kit-column-medium\">\n		        </div>\n		        \n		        <!-- Small Column – Four columns at top desktop size -->\n		        <div class=\"kit-column-small\">\n			        <p>Small Column</p>\n		        </div>\n		        <div class=\"kit-column-small\">\n		        </div>\n		        <div class=\"kit-column-small\">\n		        </div>\n		        <div class=\"kit-column-small\">\n		        </div>\n	\n		        <!-- X-Small Column – Two columns at top desktop size -->\n		        <div class=\"kit-column-xsmall\">\n			        <p>X-Small Column</p>\n		        </div>\n		        <div class=\"kit-column-xsmall\">\n		        </div>\n		        <div class=\"kit-column-xsmall\">\n		        </div>\n		        <div class=\"kit-column-xsmall\">\n		        </div>\n		        <div class=\"kit-column-xsmall\">\n		        </div>\n		        <div class=\"kit-column-xsmall\">\n		        </div>\n		        \n		        <hr class=\"kit-spacer-100\">\n		        \n	        </section><!-- #content -->\n	        \n		</section><!-- #primary -->\n");
  },"useData":true});

Ember.TEMPLATES["sidebar"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<!-- Sidebar contains vertical list nav -->\n<section id=\"sidebar\">\n	<!-- Nav -->\n	");
  data.buffer.push(escapeExpression(((helpers.render || (depth0 && depth0.render) || helperMissing).call(depth0, "console-nav", "", {"name":"render","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}))));
  data.buffer.push("\n</section>\n\n");
  return buffer;
},"useData":true});