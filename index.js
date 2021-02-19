function extend(target, source) {
	for (let prop in source) {
		target[prop] = source[prop];
	}

  return target
}

function _require(path) {
	let obj = require(path), interopObj;

	if (obj && obj.default && typeof obj.default == 'function') {
		interopObj = extend(obj.default, obj);
	} else {
		interopObj = obj;
	}

	return interopObj;
}

const packages = {
	Button: _require("@material/react-button"),
	Card: _require("@material/react-card"),
	Checkbox: _require("@material/react-checkbox"),
	Chips: _require("@material/react-chips"),
	Dialog: _require("@material/react-dialog"),
	Drawer: _require("@material/react-drawer"),
	Fab: _require("@material/react-fab"),
	FloatingLabel: _require("@material/react-floating-label"),
	IconButton: _require("@material/react-icon-button"),
	LayoutGrid: _require("@material/react-layout-grid"),
	LineRipple: _require("@material/react-line-ripple"),
	LinearProgress: _require("@material/react-linear-progress"),
	List: _require("@material/react-list"),
	MaterialIcon: _require("@material/react-material-icon"),
	MenuSurface: _require("@material/react-menu-surface"),
	Menu: _require("@material/react-menu"),
	NotchedOutline: _require("@material/react-notched-outline"),
	Radio: _require("@material/react-radio"),
	Ripple: _require("@material/react-ripple"),
	Select: _require("@material/react-select"),
	Snackbar: _require("@material/react-snackbar"),
	Switch: _require("@material/react-switch"),
	TabBar: _require("@material/react-tab-bar"),
	TabIndicator: _require("@material/react-tab-indicator"),
	TabScroller: _require("@material/react-tab-scroller"),
	Tab: _require("@material/react-tab"),
	TextField: _require("@material/react-text-field"),
	TopAppBar: _require("@material/react-top-app-bar"),
	Typography: _require("@material/react-typography")
}

module.exports = packages;