'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _index = require('C:\\Users\\kellyZhang\\Desktop\\CSVA\\public\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('C:\\Users\\kellyZhang\\Desktop\\CSVA\\public\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('C:\\Users\\kellyZhang\\Desktop\\CSVA\\public\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
				GamesAdd: {
								displayName: 'GamesAdd'
				}
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
				filename: 'C:/Users/kellyZhang/Desktop/CSVA/public/components/SportsActive/GamesAdd.jsx',
				components: _components,
				locals: [module],
				imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
				filename: 'C:/Users/kellyZhang/Desktop/CSVA/public/components/SportsActive/GamesAdd.jsx',
				components: _components,
				locals: [],
				imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
				return function (Component) {
								return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
				};
}

var GamesAdd = _wrapComponent('GamesAdd')(function (_React$Component) {
				_inherits(GamesAdd, _React$Component);

				function GamesAdd() {
								_classCallCheck(this, GamesAdd);

								return _possibleConstructorReturn(this, (GamesAdd.__proto__ || Object.getPrototypeOf(GamesAdd)).call(this));
				}

				_createClass(GamesAdd, [{
								key: 'componentDidMount',
								value: function componentDidMount() {
												$('.mydate').datetimepicker({
																format: 'yyyy-mm-dd',
																language: 'zh-CN',
																minView: 2,
																autoclose: true
												});
								}
				}, {
								key: 'render',
								value: function render() {
												return _react3.default.createElement(
																'div',
																null,
																_react3.default.createElement(
																				'div',
																				{ className: 'location' },
																				_react3.default.createElement(
																								'h3',
																								null,
																								'> ',
																								_react3.default.createElement(
																												'span',
																												null,
																												' \u6DFB\u52A0\u4F53\u80B2\u8D5B\u4E8B '
																								)
																				)
																),
																_react3.default.createElement(
																				'form',
																				{ className: 'form-horizontal', id: 'gameAddForm' },
																				_react3.default.createElement(
																								'div',
																								{ className: 'form-group MT noMR' },
																								_react3.default.createElement(
																												'label',
																												{ className: 'col-sm-2 control-label' },
																												'\u8D5B\u4E8B\u540D\u79F0'
																								),
																								_react3.default.createElement(
																												'div',
																												{ className: 'col-sm-10' },
																												_react3.default.createElement('input', { type: 'text', className: 'form-control', required: '', name: 'game[name]', placeholder: '\u8D5B\u4E8B\u540D\u79F0' })
																								)
																				),
																				_react3.default.createElement(
																								'div',
																								{ className: 'form-group noMR' },
																								_react3.default.createElement(
																												'label',
																												{ className: 'col-sm-2 control-label' },
																												'\u4E3B\u529E\u5355\u4F4D'
																								),
																								_react3.default.createElement(
																												'div',
																												{ className: 'col-sm-10' },
																												_react3.default.createElement('input', { type: 'text', className: 'form-control', required: '', name: 'game[hostUnit]', placeholder: '\u4E3B\u529E\u5355\u4F4D' })
																								)
																				),
																				_react3.default.createElement(
																								'div',
																								{ className: 'form-group noMR' },
																								_react3.default.createElement(
																												'label',
																												{ className: 'col-sm-2 control-label' },
																												'\u627F\u529E\u5355\u4F4D'
																								),
																								_react3.default.createElement(
																												'div',
																												{ className: 'col-sm-10' },
																												_react3.default.createElement('input', { type: 'text', className: 'form-control', required: '', name: 'game[undertakeUnit]', placeholder: '\u627F\u529E\u5355\u4F4D' })
																								)
																				),
																				_react3.default.createElement(
																								'div',
																								{ className: 'form-group noMR' },
																								_react3.default.createElement(
																												'label',
																												{ className: 'col-sm-2 control-label' },
																												'\u8D5B\u4E8B\u7EA7\u522B'
																								),
																								_react3.default.createElement(
																												'div',
																												{ className: 'col-sm-10', style: { marginLeft: "-3px" } },
																												_react3.default.createElement(
																																'select',
																																{ className: 'form-control', name: 'game[level]' },
																																_react3.default.createElement(
																																				'option',
																																				{ value: '1' },
																																				'\u7701\u7EA7'
																																),
																																_react3.default.createElement(
																																				'option',
																																				{ value: '2' },
																																				'\u56FD\u5BB6\u7EA7'
																																),
																																_react3.default.createElement(
																																				'option',
																																				{ value: '3' },
																																				'\u56FD\u9645\u7EA7'
																																),
																																_react3.default.createElement(
																																				'option',
																																				{ value: '4' },
																																				'\u5176\u4ED6\u7EA7\u522B'
																																)
																												)
																								)
																				),
																				_react3.default.createElement(
																								'div',
																								{ className: 'form-group noMR' },
																								_react3.default.createElement(
																												'label',
																												{ className: 'col-sm-2 control-label' },
																												'\u8D77\u59CB\u65F6\u95F4'
																								),
																								_react3.default.createElement(
																												'div',
																												{ className: 'col-sm-4' },
																												_react3.default.createElement('input', { type: 'text', required: '', name: 'game[startDate]', className: 'form-control mydate' })
																								),
																								_react3.default.createElement(
																												'label',
																												{ className: 'col-sm-2 control-label' },
																												'\u7ED3\u675F\u65F6\u95F4'
																								),
																								_react3.default.createElement(
																												'div',
																												{ className: 'col-sm-4' },
																												_react3.default.createElement('input', { type: 'text', required: '', name: 'game[endDate]', className: 'form-control mydate' })
																								)
																				),
																				_react3.default.createElement(
																								'div',
																								{ className: 'form-group noMR' },
																								_react3.default.createElement(
																												'label',
																												{ className: 'col-sm-2 control-label' },
																												'\u8D5B\u4E8B\u8054\u7CFB\u4EBA'
																								),
																								_react3.default.createElement(
																												'div',
																												{ className: 'col-sm-4' },
																												_react3.default.createElement('input', { type: 'text', name: 'game[contants]', className: 'form-control' })
																								),
																								_react3.default.createElement(
																												'label',
																												{ className: 'col-sm-2 control-label' },
																												'\u8054\u7CFB\u7535\u8BDD'
																								),
																								_react3.default.createElement(
																												'div',
																												{ className: 'col-sm-4' },
																												_react3.default.createElement('input', { type: 'text', name: 'game[contantsPhone]', className: 'form-control' })
																								)
																				),
																				_react3.default.createElement(
																								'div',
																								{ className: 'form-group noMR' },
																								_react3.default.createElement(
																												'label',
																												{ className: 'col-sm-2 control-label' },
																												'\u89C2\u4F17\u4EBA\u6570'
																								),
																								_react3.default.createElement(
																												'div',
																												{ className: 'col-sm-10' },
																												_react3.default.createElement('input', { type: 'text', required: '', name: 'game[number]', className: 'form-control' })
																								)
																				),
																				_react3.default.createElement(
																								'div',
																								{ className: 'form-group noMR' },
																								_react3.default.createElement(
																												'label',
																												{ className: 'col-sm-2 control-label' },
																												'\u73B0\u573A\u56FE\u7247'
																								),
																								_react3.default.createElement(
																												'div',
																												{ className: 'col-sm-10' },
																												_react3.default.createElement('input', { type: 'file', className: 'form-control' })
																								)
																				),
																				_react3.default.createElement(
																								'div',
																								{ className: 'form-group noMR' },
																								_react3.default.createElement(
																												'div',
																												{ className: 'col-sm-offset-2 col-sm-10' },
																												_react3.default.createElement(
																																'button',
																																{ type: 'submit', id: 'gameAddBtn', className: 'btn btn-default' },
																																'\u6DFB\u52A0'
																												)
																								)
																				),
																				_react3.default.createElement('input', { type: 'hidden', name: 'game[type]', value: '1' })
																)
												);
								}
				}]);

				return GamesAdd;
}(_react3.default.Component));

exports.default = GamesAdd;
;

//# sourceMappingURL=GamesAdd.js.map