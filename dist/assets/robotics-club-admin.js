"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('robotics-club-admin/app', ['exports', 'ember', 'robotics-club-admin/resolver', 'ember/load-initializers', 'robotics-club-admin/config/environment'], function (exports, _ember, _roboticsClubAdminResolver, _emberLoadInitializers, _roboticsClubAdminConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _roboticsClubAdminConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _roboticsClubAdminConfigEnvironment['default'].podModulePrefix,
    Resolver: _roboticsClubAdminResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _roboticsClubAdminConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("robotics-club-admin/application/adapter", ["exports", "ember-data"], function (exports, _emberData) {
  exports["default"] = _emberData["default"].JSONAPIAdapter.extend({
    // host: "http://localhost:8080",
    namespace: "api/v2"
  });
});
define("robotics-club-admin/application/route", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({

    auth: _ember["default"].inject.service("user-auth"),

    actions: {
      didTransition: function didTransition(transition) {
        if (!this.get("auth").checkAuth()) {
          this.transitionTo("index");
        }
      }
    }

  });
});
define('robotics-club-admin/application/serializer', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPISerializer.extend({});
});
define("robotics-club-admin/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "robotics-club-admin/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    Admin\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 4
            },
            "end": {
              "line": 6,
              "column": 49
            }
          },
          "moduleName": "robotics-club-admin/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 52
            }
          },
          "moduleName": "robotics-club-admin/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Guides");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "robotics-club-admin/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "id", "app-nav");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "app-nav-links");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("main");
        dom.setAttribute(el1, "id", "main-view");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], ["id", "app-nav-logo"], 0, null, ["loc", [null, [2, 2], [4, 14]]]], ["block", "link-to", ["index"], ["class", "app-nav-link"], 1, null, ["loc", [null, [6, 4], [6, 61]]]], ["block", "link-to", ["guides"], ["class", "app-nav-link"], 2, null, ["loc", [null, [7, 4], [7, 64]]]], ["content", "outlet", ["loc", [null, [11, 2], [11, 12]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define('robotics-club-admin/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'robotics-club-admin/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _roboticsClubAdminConfigEnvironment) {

  var name = _roboticsClubAdminConfigEnvironment['default'].APP.name;
  var version = _roboticsClubAdminConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('robotics-club-admin/components/confirmation-modal/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("robotics-club-admin/components/confirmation-modal/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "robotics-club-admin/components/confirmation-modal/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "confirmationModal");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "confirmationModalCard");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [3, 4], [3, 13]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('robotics-club-admin/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _emberModalDialogComponentsPositionedContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsPositionedContainer['default'];
    }
  });
});
define('robotics-club-admin/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('robotics-club-admin/components/guide-document-editor/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {

      doRouteAction: function doRouteAction() {
        console.log('routeAction');
        this.get('routeAction')();
      }

      // submitGuide() {
      //
      //   // this.sendAction("submitGuide");
      //
      //   // var url = this.store.adapterFor('application').get('host') + "/guides";
      //
      //   var self = this;
      //
      //   var guide = {
      //     data: {
      //       type: 'guide',
      //       attributes: {
      //         title: self.get('title'),
      //         body: self.get('body'),
      //         created: Date.now(),
      //         updated: Date.now()
      //       }
      //     }
      //   };
      //
      //   Ember.$.ajax({
      //     type: "POST",
      //     url: 'http://localhost:8080/api/v2/guides',
      //     data: guide,
      //     dataType: "json"
      //   }).done(function() {
      //     self.sendAction("goToSpecifiedRoute");
      //     self.set("title", "");
      //     self.set("body", "");
      //   });
      //
      // }
    }
  });
});
define("robotics-club-admin/components/guide-document-editor/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "robotics-club-admin/components/guide-document-editor/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "guideDocumentEditor");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "guideDocumentEditorTitle");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "guideDocumentEditorBody");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "guideDocumentEditorCreate");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "button");
        dom.setAttribute(el3, "name", "button");
        var el4 = dom.createTextNode("Submit");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [5, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[2] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "title", ["loc", [null, [4, 18], [4, 23]]]]], [], []], "placeholder", "Enter your guide's title here..."], ["loc", [null, [4, 4], [4, 72]]]], ["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "body", ["loc", [null, [8, 21], [8, 25]]]]], [], []], "placeholder", "Paste your markdown here..."], ["loc", [null, [8, 4], [8, 69]]]], ["element", "action", ["doRouteAction"], [], ["loc", [null, [12, 40], [12, 66]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('robotics-club-admin/components/guide-document-viewer/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    didRender: function didRender() {
      this.$('a').attr('target', '_blank');
    }
  });
});
define("robotics-club-admin/components/guide-document-viewer/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "robotics-club-admin/components/guide-document-viewer/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "guideDocumentViewer");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "guideDocumentViewerContent");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "guideDocumentViewerUpdated");
        var el4 = dom.createTextNode("\n      Updated: ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3, "class", "guideDocumentViewerTitle");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "guideDocumentViewerBody");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        return morphs;
      },
      statements: [["inline", "moment-format", [["get", "guide.updated", ["loc", [null, [6, 31], [6, 44]]]]], [], ["loc", [null, [6, 15], [6, 46]]]], ["content", "guide.title", ["loc", [null, [8, 41], [8, 56]]]], ["inline", "markdown-to-html", [], ["markdown", ["subexpr", "@mut", [["get", "guide.body", ["loc", [null, [11, 17], [11, 27]]]]], [], []], "tables", true, "ghCodeBlocks", true, "tasklists", true, "smoothLivePreview", true], ["loc", [null, [10, 6], [16, 8]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('robotics-club-admin/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _emberCliShowdownComponentsMarkdownToHtml) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliShowdownComponentsMarkdownToHtml['default'];
    }
  });
});
define('robotics-club-admin/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _emberModalDialogComponentsModalDialogOverlay) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialogOverlay['default'];
    }
  });
});
define('robotics-club-admin/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _emberModalDialogComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialog['default'];
    }
  });
});
define('robotics-club-admin/components/tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _emberModalDialogComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsTetherDialog['default'];
    }
  });
});
define('robotics-club-admin/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('robotics-club-admin/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('robotics-club-admin/edit-guide/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      updateGuide: function updateGuide() {

        var self = this;

        var model = this.get('model');

        var guide = {
          data: {
            type: 'guide',
            id: this.get('model').id,
            attributes: {
              title: model.get('title'),
              body: model.get('body'),
              updated: Date.now()
            }
          }
        };

        var url = this.store.adapterFor('application').get('host') + "/api/v2/guides/";
        url += this.get('model').id;

        _ember['default'].$.ajax({
          type: "PATCH",
          url: url,
          data: guide,
          dataType: "json"
        }).done(function () {
          self.transitionToRoute("guides");
        });
      }
    }
  });
});
define('robotics-club-admin/edit-guide/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('guide', params.id);
    }
  });
});
define("robotics-club-admin/edit-guide/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "robotics-club-admin/edit-guide/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "guideDocumentViewerWrapper-new-guide");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "createGuideWrapper");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["inline", "guide-document-viewer", [], ["guide", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 32], [2, 37]]]]], [], []]], ["loc", [null, [2, 2], [2, 39]]]], ["inline", "guide-document-editor", [], ["title", ["subexpr", "@mut", [["get", "model.title", ["loc", [null, [6, 32], [6, 43]]]]], [], []], "body", ["subexpr", "@mut", [["get", "model.body", ["loc", [null, [6, 49], [6, 59]]]]], [], []], "routeAction", ["subexpr", "action", ["updateGuide"], [], ["loc", [null, [6, 72], [6, 94]]]]], ["loc", [null, [6, 2], [6, 96]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("robotics-club-admin/guide/model", ["exports", "ember-data"], function (exports, _emberData) {
  exports["default"] = _emberData["default"].Model.extend({
    title: _emberData["default"].attr("string"),
    body: _emberData["default"].attr("string"),
    created: _emberData["default"].attr("date"),
    updated: _emberData["default"].attr("date")
  });
});
define('robotics-club-admin/guides/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    searchQuery: '',
    toggleDeleteModal: true,

    filteredContent: _ember['default'].computed('model.[]', 'searchQuery', function () {
      var filter = this.get("searchQuery");
      var rx = new RegExp(filter, 'gi');
      var guides = this.get('model');

      return guides.filter(function (guide) {
        return guide.get('title').match(rx);
      });
    })

  });
});
define('robotics-club-admin/guides/guide/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {

      toggleDeleteModal: function toggleDeleteModal() {
        this.toggleProperty('deleteModalIsShowing');
        console.log(this.get('deleteModalIsShowing'));
      },
      deleteGuide: function deleteGuide() {
        var self = this;
        var guide = this.get('model');
        var store = this.store;

        var url = this.store.adapterFor('application').get('host') + "/api/v2/guides/";
        url += guide.id;

        _ember['default'].$.ajax({
          type: "DELETE",
          url: url
          // data: guide,
          // dataType: "json"
        }).done(function () {
          self.toggleProperty('deleteModalIsShowing');
          self.transitionToRoute("guides");
          store.unloadRecord(guide);
          console.log('Deleted!');
        });

        // this.store.findRecord('guide', guide.id).then(function(guide) {
        //   // console.log(guide);
        //   controller.transitionToRoute("guides");
        //   guide.deleteRecord();
        //
        //   Ember.$.ajax({
        //     type: "DELETE",
        //     url: 'http://localhost:8080/api/v2/guides/' + guide.id,
        //     // data: guide,
        //     // dataType: "json"
        //   }).done(function() {
        //     console.log('Deleted!');
        //   });
        //
        // });
      }

    }
  });
});
define('robotics-club-admin/guides/guide/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('guide', params.id);
    },

    actions: {

      error: function error() {
        this.transitionTo('guides');
      }

    }
  });
});
define("robotics-club-admin/guides/guide/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 6
            },
            "end": {
              "line": 2,
              "column": 88
            }
          },
          "moduleName": "robotics-club-admin/guides/guide/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Edit");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 2
              },
              "end": {
                "line": 22,
                "column": 2
              }
            },
            "moduleName": "robotics-club-admin/guides/guide/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h1");
            var el2 = dom.createTextNode("Are you sure?");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("\n      This will delete the guide forever!\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "button");
            dom.setAttribute(el1, "name", "button");
            dom.setAttribute(el1, "class", "confirmationModalButton delete");
            var el2 = dom.createTextNode("Delete");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "button");
            dom.setAttribute(el1, "name", "button");
            dom.setAttribute(el1, "class", "confirmationModalButton");
            var el2 = dom.createTextNode("Cancel");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [5]);
            var element1 = dom.childAt(fragment, [7]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createElementMorph(element1);
            return morphs;
          },
          statements: [["element", "action", ["deleteGuide"], [], ["loc", [null, [20, 79], [20, 103]]]], ["element", "action", ["toggleDeleteModal"], [], ["loc", [null, [21, 72], [21, 102]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 0
            },
            "end": {
              "line": 24,
              "column": 0
            }
          },
          "moduleName": "robotics-club-admin/guides/guide/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "confirmation-modal", [], [], 0, null, ["loc", [null, [15, 2], [22, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "robotics-club-admin/guides/guide/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "actions-bar");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "type", "button");
        dom.setAttribute(el2, "name", "button");
        dom.setAttribute(el2, "class", "actions-bar-button");
        var el3 = dom.createTextNode("Delete");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "guide-preview-wrapper");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "guideDocumentViewerWrapper");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var element3 = dom.childAt(element2, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element2, 1, 1);
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "link-to", ["edit-guide", ["get", "model.id", ["loc", [null, [2, 30], [2, 38]]]]], ["class", "actions-bar-button", "tagName", "button"], 0, null, ["loc", [null, [2, 6], [2, 100]]]], ["element", "action", ["toggleDeleteModal"], [], ["loc", [null, [3, 67], [3, 97]]]], ["inline", "guide-document-viewer", [], ["guide", ["subexpr", "@mut", [["get", "model", ["loc", [null, [9, 34], [9, 39]]]]], [], []]], ["loc", [null, [9, 4], [9, 41]]]], ["block", "if", [["get", "deleteModalIsShowing", ["loc", [null, [14, 6], [14, 26]]]]], [], 1, null, ["loc", [null, [14, 0], [24, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('robotics-club-admin/guides/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    auth: _ember['default'].inject.service("user-auth"),

    model: function model() {
      return this.store.findAll('guide');
    },

    actions: {
      // willTransition(transition) {
      //   if(!this.get("auth").checkAuth()) {
      //     alert("You need to sign in first.");
      //     this.transitionTo("index");
      //   }
      // },
      didTransition: function didTransition(transition) {
        if (!this.get("auth").checkAuth()) {
          alert("You need to sign in first.");
          this.transitionTo("index");
        }
      }
    }
  });
});
define("robotics-club-admin/guides/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 4
            },
            "end": {
              "line": 8,
              "column": 4
            }
          },
          "moduleName": "robotics-club-admin/guides/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "name", "button");
          var el2 = dom.createTextNode("Create");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 21,
                "column": 6
              },
              "end": {
                "line": 31,
                "column": 6
              }
            },
            "moduleName": "robotics-club-admin/guides/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "guide-updated");
            var el2 = dom.createTextNode("\n          Last updated: ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "guide-title");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            return morphs;
          },
          statements: [["inline", "moment-format", [["get", "guide.updated", ["loc", [null, [24, 40], [24, 53]]]]], [], ["loc", [null, [24, 24], [24, 55]]]], ["content", "guide.title", ["loc", [null, [28, 10], [28, 25]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 4
            },
            "end": {
              "line": 32,
              "column": 4
            }
          },
          "moduleName": "robotics-club-admin/guides/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["guides.guide", ["get", "guide.id", ["loc", [null, [21, 32], [21, 40]]]]], ["class", "guide"], 0, null, ["loc", [null, [21, 6], [31, 18]]]]],
        locals: ["guide"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 44,
            "column": 0
          }
        },
        "moduleName": "robotics-club-admin/guides/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "guides-wrapper");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "actions-bar");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "searchQuery");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "guides");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "guide-preview");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "guide-preview-placeholder");
        var el3 = dom.createTextNode("\n    Click on a Guide to Preview\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [3]), 3, 3);
        return morphs;
      },
      statements: [["block", "link-to", ["new-guide"], ["id", "createNewGuide"], 0, null, ["loc", [null, [6, 4], [8, 16]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "searchQuery", ["loc", [null, [11, 20], [11, 31]]]]], [], []], "placeholder", "Filter for guide here..."], ["loc", [null, [11, 6], [13, 8]]]], ["block", "each", [["get", "filteredContent", ["loc", [null, [20, 12], [20, 27]]]]], [], 1, null, ["loc", [null, [20, 4], [32, 13]]]], ["content", "outlet", ["loc", [null, [41, 2], [41, 12]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('robotics-club-admin/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _emberMomentHelpersMomentCalendar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar['default'];
    }
  });
  Object.defineProperty(exports, 'momentCalendar', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar.momentCalendar;
    }
  });
});
define('robotics-club-admin/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('robotics-club-admin/helpers/moment-format', ['exports', 'ember', 'robotics-club-admin/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _roboticsClubAdminConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_roboticsClubAdminConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('robotics-club-admin/helpers/moment-from-now', ['exports', 'ember', 'robotics-club-admin/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _roboticsClubAdminConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_roboticsClubAdminConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('robotics-club-admin/helpers/moment-to-now', ['exports', 'ember', 'robotics-club-admin/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _roboticsClubAdminConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_roboticsClubAdminConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('robotics-club-admin/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('robotics-club-admin/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("robotics-club-admin/index/controller", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({
    username: "",
    password: "",
    auth: _ember["default"].inject.service("user-auth"),
    actions: {
      authenticate: function authenticate() {
        var _username = this.get("username");
        var _password = this.get("password");
        console.log(_username);
        console.log(_password);
        this.get("auth").login(_username, _password);

        if (this.get("auth").checkAuth()) {
          this.transitionToRoute('guides');
          this.set("username", "");
          this.set("password", "");
        } else {
          alert("Bad credentials. Try Again.");
        }
      }
    }
  });
});
define('robotics-club-admin/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("robotics-club-admin/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "robotics-club-admin/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "");
        dom.setAttribute(el1, "action", "index.html");
        dom.setAttribute(el1, "method", "post");
        dom.setAttribute(el1, "class", "loginForm");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "loginFormSegment");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "");
        var el4 = dom.createTextNode("User");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "loginFormSegment");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "");
        var el4 = dom.createTextNode("Secret");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "loginFormSegment");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "button");
        dom.setAttribute(el3, "class", "loginFormSubmit");
        var el4 = dom.createTextNode("Sign In");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [5, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 3, 3);
        morphs[2] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "username", ["loc", [null, [4, 18], [4, 26]]]]], [], []]], ["loc", [null, [4, 4], [4, 28]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [8, 18], [8, 26]]]]], [], []], "type", "password"], ["loc", [null, [8, 4], [8, 44]]]], ["element", "action", ["authenticate"], [], ["loc", [null, [11, 50], [11, 75]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('robotics-club-admin/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _emberModalDialogInitializersAddModalsContainer) {
  exports['default'] = {
    name: 'add-modals-container',
    initialize: _emberModalDialogInitializersAddModalsContainer['default']
  };
});
define('robotics-club-admin/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'robotics-club-admin/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _roboticsClubAdminConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_roboticsClubAdminConfigEnvironment['default'].APP.name, _roboticsClubAdminConfigEnvironment['default'].APP.version)
  };
});
define('robotics-club-admin/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('robotics-club-admin/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('robotics-club-admin/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('robotics-club-admin/initializers/export-application-global', ['exports', 'ember', 'robotics-club-admin/config/environment'], function (exports, _ember, _roboticsClubAdminConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_roboticsClubAdminConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _roboticsClubAdminConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_roboticsClubAdminConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('robotics-club-admin/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('robotics-club-admin/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('robotics-club-admin/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("robotics-club-admin/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('robotics-club-admin/new-guide/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    data: _ember['default'].computed('body', 'title', function () {
      return {
        title: this.get('title'),
        body: this.get('body'),
        updated: Date.now(),
        created: Date.now()
      };
    }),

    actions: {
      submitGuide: function submitGuide() {

        // var store = this.store;
        //
        // var guide = store.createRecord('guide', {
        //   title: this.get('title'),
        //   body: this.get('body')
        // });
        //
        // var self = this;
        //
        // guide.save().then(function() {
        //   self.set('title', "");
        //   self.set('body', "");
        //   self.transitionToRoute('guides');
        // });

        var url = this.store.adapterFor('application').get('host') + "/api/v2/guides";

        var self = this;

        var guide = {
          data: {
            type: 'guide',
            attributes: {
              title: self.get('title'),
              body: self.get('body'),
              created: Date.now(),
              updated: Date.now()
            }
          }
        };

        _ember['default'].$.ajax({
          type: "POST",
          url: url,
          data: guide,
          dataType: "json"
        }).done(function () {
          self.transitionToRoute('guides');
          self.set("title", "");
          self.set("body", "");
        });
      }
    }
  });
});
define('robotics-club-admin/new-guide/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    // actions: {
    //   submitGuide() {
    //
    //     var url = this.store.adapterFor('application').get('host') + "/guides";
    //
    //     var self = this;
    //
    //     var guide = {
    //       data: {
    //         type: 'guide',
    //         attributes: {
    //           title: self.get('title'),
    //           body: self.get('body'),
    //           created: Date.now(),
    //           updated: Date.now()
    //         }
    //       }
    //     };
    //
    //     Ember.$.ajax({
    //       type: "POST",
    //       url: 'http://localhost:8080/api/v2/guides',
    //       data: guide,
    //       dataType: "json"
    //     }).done(function() {
    //       self.sendAction("goToSpecifiedRoute");
    //       self.set("title", "");
    //       self.set("body", "");
    //     });
    //
    //   }
    // }

    // actions: {
    //   goToSpecifiedRoute: function() {
    //     this.transitionTo('guides');
    //   },
    //
    //   submitGuide: function() {
    //
    //     // this.store.push({
    //     //   data: {
    //     //     id: "123",
    //     //     type: 'guide',
    //     //     attributes: {
    //     //       title: this.get('title'),
    //     //       body: this.get('body'),
    //     //       created: Date.now(),
    //     //       updated: Date.now()
    //     //     }
    //     //   }
    //     // });
    //
    //     // var guide = {
    //     //   data: {
    //     //     id: "123",
    //     //     type: 'guide',
    //     //     attributes: {
    //     //       title: this.get('title'),
    //     //       body: this.get('body'),
    //     //       created: Date.now(),
    //     //       updated: Date.now()
    //     //     }
    //     //   }
    //     // };
    //     //
    //     // var self = this;
    //     //
    //     // var url = this.store.adapterFor('application').get('host') + "/guides";
    //     //
    //     //
    //     //
    //     // var guide = this.store.createRecord('guide', {
    //     //   title: this.get('title'),
    //     //   body: this.get('body'),
    //     //   created: Date.now(),
    //     //   updated: Date.now()
    //     // });
    //     //
    //     // var self = this;
    //     //
    //     // guide.save().then(function(guide) {
    //     //   console.log(guide);
    //     //   self.transitionTo('guides');
    //     // });
    //
    //
    //   }
    // }
  });
});
define("robotics-club-admin/new-guide/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "robotics-club-admin/new-guide/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "guideDocumentViewerWrapper-new-guide");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "createGuideWrapper");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["inline", "guide-document-viewer", [], ["guide", ["subexpr", "@mut", [["get", "data", ["loc", [null, [2, 32], [2, 36]]]]], [], []]], ["loc", [null, [2, 2], [2, 38]]]], ["inline", "guide-document-editor", [], ["title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [6, 32], [6, 37]]]]], [], []], "body", ["subexpr", "@mut", [["get", "body", ["loc", [null, [6, 43], [6, 47]]]]], [], []], "routeAction", ["subexpr", "action", ["submitGuide"], [], ["loc", [null, [6, 60], [6, 82]]]]], ["loc", [null, [6, 2], [6, 84]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('robotics-club-admin/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('robotics-club-admin/router', ['exports', 'ember', 'robotics-club-admin/config/environment'], function (exports, _ember, _roboticsClubAdminConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _roboticsClubAdminConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('guides', function () {
      this.route('guide', { path: '/:id' });
    });
    this.route('new-guide', { path: '/guides/new' });
    this.route('edit-guide', { path: '/guides/edit/:id' });
  });

  exports['default'] = Router;
});
define('robotics-club-admin/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('robotics-club-admin/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, _emberModalDialogServicesModalDialog) {
  exports['default'] = _emberModalDialogServicesModalDialog['default'];
});
define('robotics-club-admin/services/moment', ['exports', 'ember', 'robotics-club-admin/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _roboticsClubAdminConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_roboticsClubAdminConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define("robotics-club-admin/templates/components/markdown-to-html", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "robotics-club-admin/templates/components/markdown-to-html.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "html", ["loc", [null, [1, 0], [1, 8]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('robotics-club-admin/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, _emberModalDialogTemplatesComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsModalDialog['default'];
    }
  });
});
define('robotics-club-admin/templates/components/tether-dialog', ['exports', 'ember-modal-dialog/templates/components/tether-dialog'], function (exports, _emberModalDialogTemplatesComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsTetherDialog['default'];
    }
  });
});
define("robotics-club-admin/user-auth/service", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Service.extend({

    credentials: {
      username: "admin",
      password: "untrobotsareawesome"
    },

    init: function init() {
      this.set("user", "");
      this.set("pass", "");
    },

    login: function login(user, pass) {
      this.set("user", user);
      this.set("pass", pass);
    },

    checkAuth: function checkAuth() {
      var _user = this.get('user');
      var _pass = this.get("pass");
      var _admin = this.get("credentials");

      // console.log("_user = %s", _user);
      // console.log("_pass = %s", _pass);
      // console.log("_admin = %s", _admin);

      if (_user == _admin.username && _pass == _admin.password) {
        return true;
      } else {
        return false;
      }
    }

  });
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('robotics-club-admin/config/environment', ['ember'], function(Ember) {
  var prefix = 'robotics-club-admin';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */
if (!runningTests) {
  require("robotics-club-admin/app")["default"].create({"name":"robotics-club-admin","version":"0.0.0+6eedcfd6"});
}
/* jshint ignore:end */
//# sourceMappingURL=robotics-club-admin.map