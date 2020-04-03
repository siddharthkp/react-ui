'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactUi = require('react-ui');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var styles = {
  Stats: {
    color: 'text.body'
  },
  StatsLabel: {
    fontSize: 3
  },
  StatsValue: {
    fontSize: 5
  },
  StatsDescription: {
    fontSize: 2,
    color: 'text.subtle'
  }
};

var Stats = function Stats(props) {
  return React.createElement(reactUi.Stack, _extends({
    direction: "vertical",
    gap: 1,
    component: "Stats"
  }, props));
};

var Label = function Label(props) {
  return React.createElement(reactUi.Text, _extends({
    component: "StatsLabel"
  }, props));
};

var Value = function Value(props) {
  return React.createElement(reactUi.Text, _extends({
    component: "StatsValue"
  }, props));
};

var Description = function Description(props) {
  return React.createElement(reactUi.Text, _extends({
    component: "StatsDescription"
  }, props));
};

Stats.Label = Label;
Stats.Value = Value;
Stats.Description = Description;

exports.Stats = Stats;
exports.styles = styles;
