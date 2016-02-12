define('robotics-club-admin/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/application/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application');
  QUnit.test('application/adapter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/adapter.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/application/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application');
  QUnit.test('application/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'application/route.js should pass jshint.\napplication/route.js: line 8, col 19, \'transition\' is defined but never used.\n\n1 error');
  });
});
define('robotics-club-admin/tests/application/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application');
  QUnit.test('application/serializer.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/serializer.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/components/confirmation-modal/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/confirmation-modal');
  QUnit.test('components/confirmation-modal/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/confirmation-modal/component.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/components/guide-document-editor/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/guide-document-editor');
  QUnit.test('components/guide-document-editor/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/guide-document-editor/component.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/components/guide-document-viewer/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/guide-document-viewer');
  QUnit.test('components/guide-document-viewer/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/guide-document-viewer/component.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/edit-guide/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - edit-guide');
  QUnit.test('edit-guide/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'edit-guide/controller.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/edit-guide/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - edit-guide');
  QUnit.test('edit-guide/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'edit-guide/route.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/guide/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - guide');
  QUnit.test('guide/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guide/model.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/guides/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - guides');
  QUnit.test('guides/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guides/controller.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/guides/guide/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - guides/guide');
  QUnit.test('guides/guide/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guides/guide/controller.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/guides/guide/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - guides/guide');
  QUnit.test('guides/guide/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guides/guide/route.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/guides/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - guides');
  QUnit.test('guides/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'guides/route.js should pass jshint.\nguides/route.js: line 18, col 19, \'transition\' is defined but never used.\n\n1 error');
  });
});
define('robotics-club-admin/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('robotics-club-admin/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'robotics-club-admin/tests/helpers/start-app', 'robotics-club-admin/tests/helpers/destroy-app'], function (exports, _qunit, _roboticsClubAdminTestsHelpersStartApp, _roboticsClubAdminTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _roboticsClubAdminTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _roboticsClubAdminTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('robotics-club-admin/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/helpers/resolver', ['exports', 'robotics-club-admin/resolver', 'robotics-club-admin/config/environment'], function (exports, _roboticsClubAdminResolver, _roboticsClubAdminConfigEnvironment) {

  var resolver = _roboticsClubAdminResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _roboticsClubAdminConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _roboticsClubAdminConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('robotics-club-admin/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/helpers/start-app', ['exports', 'ember', 'robotics-club-admin/app', 'robotics-club-admin/config/environment'], function (exports, _ember, _roboticsClubAdminApp, _roboticsClubAdminConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _roboticsClubAdminConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _roboticsClubAdminApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('robotics-club-admin/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/index/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - index');
  QUnit.test('index/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/controller.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/index/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - index');
  QUnit.test('index/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/route.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/integration/components/confirmation-modal/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('confirmation-modal', 'Integration | Component | confirmation modal', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 22
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'confirmation-modal', ['loc', [null, [1, 0], [1, 22]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'confirmation-modal', [], [], 0, null, ['loc', [null, [2, 4], [4, 27]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('robotics-club-admin/tests/integration/components/confirmation-modal/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/confirmation-modal');
  QUnit.test('integration/components/confirmation-modal/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/confirmation-modal/component-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/integration/components/guide-document-editor/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('guide-document-editor', 'Integration | Component | guide document editor', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 25
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'guide-document-editor', ['loc', [null, [1, 0], [1, 25]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'guide-document-editor', [], [], 0, null, ['loc', [null, [2, 4], [4, 30]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('robotics-club-admin/tests/integration/components/guide-document-editor/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/guide-document-editor');
  QUnit.test('integration/components/guide-document-editor/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/guide-document-editor/component-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/integration/components/guide-document-viewer/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('guide-document-viewer', 'Integration | Component | guide document viewer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 25
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'guide-document-viewer', ['loc', [null, [1, 0], [1, 25]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'guide-document-viewer', [], [], 0, null, ['loc', [null, [2, 4], [4, 30]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('robotics-club-admin/tests/integration/components/guide-document-viewer/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/guide-document-viewer');
  QUnit.test('integration/components/guide-document-viewer/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/guide-document-viewer/component-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/new-guide/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - new-guide');
  QUnit.test('new-guide/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'new-guide/controller.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/new-guide/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - new-guide');
  QUnit.test('new-guide/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'new-guide/route.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/test-helper', ['exports', 'robotics-club-admin/tests/helpers/resolver', 'ember-qunit'], function (exports, _roboticsClubAdminTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_roboticsClubAdminTestsHelpersResolver['default']);
});
define('robotics-club-admin/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/application/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('robotics-club-admin/tests/unit/application/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/application');
  QUnit.test('unit/application/adapter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/adapter-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/application/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('robotics-club-admin/tests/unit/application/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/application');
  QUnit.test('unit/application/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/route-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/application/serializer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('robotics-club-admin/tests/unit/application/serializer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/application');
  QUnit.test('unit/application/serializer-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/serializer-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/edit-guide/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:edit-guide', 'Unit | Controller | edit guide', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('robotics-club-admin/tests/unit/edit-guide/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/edit-guide');
  QUnit.test('unit/edit-guide/controller-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/edit-guide/controller-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/edit-guide/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:edit-guide', 'Unit | Route | edit guide', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('robotics-club-admin/tests/unit/edit-guide/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/edit-guide');
  QUnit.test('unit/edit-guide/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/edit-guide/route-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/guide/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('guide', 'Unit | Model | guide', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('robotics-club-admin/tests/unit/guide/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/guide');
  QUnit.test('unit/guide/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/guide/model-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/guides/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:guides', 'Unit | Controller | guides', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('robotics-club-admin/tests/unit/guides/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/guides');
  QUnit.test('unit/guides/controller-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/guides/controller-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/guides/guide/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:guides/guide', 'Unit | Controller | guides/guide', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('robotics-club-admin/tests/unit/guides/guide/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/guides/guide');
  QUnit.test('unit/guides/guide/controller-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/guides/guide/controller-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/guides/guide/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:guides/guide', 'Unit | Route | guides/guide', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('robotics-club-admin/tests/unit/guides/guide/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/guides/guide');
  QUnit.test('unit/guides/guide/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/guides/guide/route-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/guides/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:guides', 'Unit | Route | guides', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('robotics-club-admin/tests/unit/guides/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/guides');
  QUnit.test('unit/guides/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/guides/route-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/index/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:index', 'Unit | Controller | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('robotics-club-admin/tests/unit/index/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/index');
  QUnit.test('unit/index/controller-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/controller-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/index/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('robotics-club-admin/tests/unit/index/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/index');
  QUnit.test('unit/index/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/route-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/new-guide/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:new-guide', 'Unit | Controller | new guide', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('robotics-club-admin/tests/unit/new-guide/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/new-guide');
  QUnit.test('unit/new-guide/controller-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/new-guide/controller-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/new-guide/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:new-guide', 'Unit | Route | new guide', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('robotics-club-admin/tests/unit/new-guide/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/new-guide');
  QUnit.test('unit/new-guide/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/new-guide/route-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/unit/user-auth/service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:user-auth', 'Unit | Service | user auth', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('robotics-club-admin/tests/unit/user-auth/service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/user-auth');
  QUnit.test('unit/user-auth/service-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/user-auth/service-test.js should pass jshint.');
  });
});
define('robotics-club-admin/tests/user-auth/service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - user-auth');
  QUnit.test('user-auth/service.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'user-auth/service.js should pass jshint.\nuser-auth/service.js: line 29, col 17, Expected \'===\' and instead saw \'==\'.\nuser-auth/service.js: line 29, col 45, Expected \'===\' and instead saw \'==\'.\n\n2 errors');
  });
});
/* jshint ignore:start */

require('robotics-club-admin/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map