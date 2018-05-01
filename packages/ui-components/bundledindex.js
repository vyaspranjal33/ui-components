'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function classNames(...args) {
    let result = '';
    for (const arg of args) {
        if (!arg) {
            continue;
        }
        if (typeof arg === 'string' || typeof arg === 'number') {
            result = `${result} ${arg}`;
            continue;
        }
        if (Array.isArray(arg)) {
            result = `${result} ${classNames(...arg)}`;
            continue;
        }
        if (typeof arg === 'object') {
            const keys = Object.keys(arg);
            for (const key of keys) {
                if (arg[key]) {
                    result = `${result} ${key}`;
                }
            }
        }
    }
    return result.trim();
}

const lightStyle = { color: 'white' };
const Icon = ({ type, className, onClick: handleClick, onDark, }) => (React__default.createElement("i", { className: classNames('sg-icon', `sg-icon-${type}`, { [className]: !!className }), onClick: handleClick, style: onDark ? lightStyle : null }));
Icon.defaultProps = {
    className: '',
    onDark: false,
};

const Actions = ({ children }) => {
    return (React__default.createElement("div", { className: "actions" },
        React__default.createElement(Icon, { type: "ellipsis" }),
        React__default.createElement("div", { className: "action-icons" }, children)));
};
const ActionsCell = ({ children }) => {
    return (React__default.createElement("td", { className: "actions" },
        React__default.createElement(Icon, { type: "ellipsis" }),
        React__default.createElement("div", { className: "action-icons" }, children)));
};
const Action = ({ title, icon, onClick: handleClick, }) => {
    return (React__default.createElement("span", { "data-tooltip": title, "data-tooltip-pos": "up", onClick: handleClick },
        React__default.createElement(Icon, { type: icon })));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".alert-module_alert__21xYN {\n  position: relative;\n  z-index: 1000;\n  padding: 20px 0;\n  font-size: 13px;\n  text-align: center; }\n  .alert-module_alert__21xYN.alert-module_alert-success__fDz-B {\n    color: #2e6b30;\n    background-color: #f1f7e9; }\n    .alert-module_alert__21xYN.alert-module_alert-success__fDz-B a {\n      color: #2e6b30; }\n    .alert-module_alert__21xYN.alert-module_alert-success__fDz-B .alert-module_btn-primary__ErSOv {\n      color: #2e6b30;\n      background: #f1f7e9;\n      border-color: #2e6b30; }\n  .alert-module_alert__21xYN.alert-module_alert-warning__2hFWm {\n    color: #8c6c15;\n    background-color: #fefae6; }\n    .alert-module_alert__21xYN.alert-module_alert-warning__2hFWm a {\n      color: #8c6c15; }\n    .alert-module_alert__21xYN.alert-module_alert-warning__2hFWm .alert-module_btn-primary__ErSOv {\n      color: #8c6c15;\n      background: #fefae6;\n      border-color: #8c6c15; }\n  .alert-module_alert__21xYN.alert-module_alert-danger__3eOIv {\n    color: #b71c1c;\n    background-color: #f4dddd; }\n    .alert-module_alert__21xYN.alert-module_alert-danger__3eOIv a {\n      color: #b71c1c; }\n    .alert-module_alert__21xYN.alert-module_alert-danger__3eOIv .alert-module_btn-primary__ErSOv {\n      color: #b71c1c;\n      background: #f4dddd;\n      border-color: #b71c1c; }\n  .alert-module_alert__21xYN.alert-module_alert-verification__IqM3H, .alert-module_alert__21xYN.alert-module_alert-trial__Q9xLs {\n    color: #fff; }\n    .alert-module_alert__21xYN.alert-module_alert-verification__IqM3H a, .alert-module_alert__21xYN.alert-module_alert-trial__Q9xLs a {\n      color: #fff; }\n  .alert-module_alert__21xYN.alert-module_alert-verification__IqM3H {\n    background-color: #18c96e; }\n    .alert-module_alert__21xYN.alert-module_alert-verification__IqM3H .alert-module_btn-primary__ErSOv {\n      color: #18c96e;\n      background: #fff;\n      border-color: #fff; }\n    .alert-module_alert__21xYN.alert-module_alert-verification__IqM3H .alert-module_step__20tRI,\n    .alert-module_alert__21xYN.alert-module_alert-verification__IqM3H .alert-module_all-steps__E7u_U {\n      position: absolute;\n      max-width: 100%;\n      margin: 0; }\n    .alert-module_alert__21xYN.alert-module_alert-verification__IqM3H .alert-module_step__20tRI {\n      left: 30px;\n      letter-spacing: 1px;\n      text-transform: uppercase; }\n    .alert-module_alert__21xYN.alert-module_alert-verification__IqM3H .alert-module_all-steps__E7u_U {\n      right: 30px; }\n  .alert-module_alert__21xYN.alert-module_alert-trial__Q9xLs {\n    background-color: #294661; }\n    .alert-module_alert__21xYN.alert-module_alert-trial__Q9xLs .alert-module_btn-primary__ErSOv {\n      color: #fff;\n      background: #294661;\n      border-color: #fff; }\n  .alert-module_alert__21xYN.alert-module_alert-inline__15VR- {\n    z-index: 0;\n    align-self: flex-end;\n    width: 100%; }\n    .alert-module_alert__21xYN.alert-module_alert-inline__15VR- p {\n      text-align: left; }\n  .alert-module_alert__21xYN.alert-module_is-hidden__JlAm0, .alert-module_alert__21xYN.alert-module_is-visible__2k6ib {\n    position: fixed;\n    left: 0;\n    width: 100%;\n    transition: top 0.5s; }\n  .alert-module_alert__21xYN.alert-module_is-hidden__JlAm0 {\n    top: -60px; }\n  .alert-module_alert__21xYN.alert-module_is-visible__2k6ib {\n    top: 0 !important; }\n  .alert-module_alert__21xYN.alert-module_tiara-offset__195TP {\n    left: 180px;\n    width: calc(100vw - 180px); }\n  .alert-module_alert__21xYN a {\n    text-decoration: underline; }\n  .alert-module_alert__21xYN p {\n    position: relative;\n    display: inline-block;\n    max-width: 80%;\n    margin: 0 40px;\n    font-size: 13px;\n    line-height: 20px; }\n  .alert-module_alert__21xYN .alert-module_sg-icon__FIcug {\n    position: absolute;\n    top: 50%;\n    left: -40px;\n    margin-top: -10px;\n    font-size: 20px; }\n    .alert-module_alert__21xYN .alert-module_sg-icon__FIcug.alert-module_sg-icon-x__1yuD_ {\n      right: -40px;\n      left: auto;\n      cursor: pointer; }\n  .alert-module_alert__21xYN .alert-module_btn__vnaPm {\n    margin-top: -5px;\n    margin-bottom: -5px;\n    margin-left: 20px; }\n";
var Styles = {"alert":"alert-module_alert__21xYN","alert-success":"alert-module_alert-success__fDz-B","btn-primary":"alert-module_btn-primary__ErSOv","alert-warning":"alert-module_alert-warning__2hFWm","alert-danger":"alert-module_alert-danger__3eOIv","alert-verification":"alert-module_alert-verification__IqM3H","alert-trial":"alert-module_alert-trial__Q9xLs","step":"alert-module_step__20tRI","all-steps":"alert-module_all-steps__E7u_U","alert-inline":"alert-module_alert-inline__15VR-","is-hidden":"alert-module_is-hidden__JlAm0","is-visible":"alert-module_is-visible__2k6ib","tiara-offset":"alert-module_tiara-offset__195TP","sg-icon":"alert-module_sg-icon__FIcug","sg-icon-x":"alert-module_sg-icon-x__1yuD_","btn":"alert-module_btn__vnaPm"};
styleInject(css);

const iconFor = (type) => {
    if (type === 'success') {
        return 'check-circle';
    }
    return 'warning';
};
const Alert = ({ children, dismissable, icon, inline, onClick: handleClick, type, }) => {
    return (React__default.createElement("div", { className: classNames(Styles.alert, Styles[`alert-${type}`], {
            [Styles['alert-inline']]: inline,
        }), role: "alert" },
        React__default.createElement("p", null,
            React__default.createElement(Icon, { type: icon || iconFor(type) }),
            children,
            dismissable && React__default.createElement(Icon, { type: "x", onClick: handleClick }))));
};
Alert.defaultProps = {
    dismissable: true,
    hidden: false,
    inline: false,
};

var css$1 = ".badge-module_badge__1evbO {\n  display: inline-block;\n  padding: 3px 6px;\n  margin-bottom: 3px;\n  font-size: 10px;\n  line-height: 1;\n  letter-spacing: 1px;\n  color: #fff;\n  text-transform: uppercase;\n  vertical-align: middle;\n  background-color: #a9b5c0;\n  border-radius: 2px; }\n  .badge-module_badge__1evbO.badge-module_is-right__3Wp_U {\n    margin-left: 6px; }\n  .badge-module_badge__1evbO.badge-module_is-left__2FWWA {\n    margin-right: 6px; }\n  .badge-module_badge__1evbO.badge-module_is-sender__239up {\n    width: 60px;\n    margin-right: 6px;\n    text-align: center; }\n  .badge-module_badge__1evbO.badge-module_badge-category__OyY_p {\n    margin-right: 3px;\n    color: #7f90a0;\n    cursor: pointer;\n    background: #fff;\n    border: 1px solid #a9b5c0;\n    transition: color 0.3s, background-color 0.3s; }\n    .badge-module_badge__1evbO.badge-module_badge-category__OyY_p:hover, .badge-module_badge__1evbO.badge-module_badge-category__OyY_p.badge-module_is-hovered__riMGB {\n      color: #fff;\n      background-color: #a9b5c0; }\n  .badge-module_badge__1evbO.badge-module_sg-blue__1XJeX {\n    background-color: #1a82e2; }\n  .badge-module_badge__1evbO.badge-module_slate__1aBDd {\n    background-color: #294661; }\n  .badge-module_badge__1evbO.badge-module_ron-burgundy__1O_L2 {\n    background-color: #b71c1c; }\n  .badge-module_badge__1evbO.badge-module_burnt-orange__32tty {\n    background-color: #ff5722; }\n  .badge-module_badge__1evbO.badge-module_carrot__2UnJk {\n    background-color: #f90; }\n  .badge-module_badge__1evbO.badge-module_mango__1VwGp {\n    background-color: #fdd835; }\n  .badge-module_badge__1evbO.badge-module_mantis__3yrVd {\n    background-color: #18c96e; }\n  .badge-module_badge__1evbO.badge-module_spruce__2UWtT {\n    background-color: #4cb04f; }\n  .badge-module_badge__1evbO.badge-module_grass-stain__2htvk {\n    background-color: #8ac24a; }\n  .badge-module_badge__1evbO.badge-module_lime__3mVaq {\n    background-color: #cbdb39; }\n  .badge-module_badge__1evbO.badge-module_cobalt__1BJQv {\n    background-color: #303f9f; }\n  .badge-module_badge__1evbO.badge-module_bluebird__10OhI {\n    background-color: #2196f3; }\n  .badge-module_badge__1evbO.badge-module_seafoam__3Zfxn {\n    background-color: #00bcd4; }\n  .badge-module_badge__1evbO.badge-module_caribbean__1wbya {\n    background-color: #00e5ff; }\n  .badge-module_badge__1evbO.badge-module_crown__1sgKf {\n    background-color: #7b1fa2; }\n  .badge-module_badge__1evbO.badge-module_screample__1tQFB {\n    background-color: #7c4dff; }\n  .badge-module_badge__1evbO.badge-module_sangria__1n2Ip {\n    background-color: #880e4f; }\n  .badge-module_badge__1evbO.badge-module_lavender__1a16i {\n    background-color: #dea7e8; }\n  .badge-module_badge__1evbO.badge-module_wild-strawberry__2A6SS {\n    background-color: #ff4081; }\n  .badge-module_badge__1evbO.badge-module_steel__23FEw {\n    background-color: #9e9e9e; }\n";
var Styles$1 = {"badge":"badge-module_badge__1evbO","is-right":"badge-module_is-right__3Wp_U","is-left":"badge-module_is-left__2FWWA","is-sender":"badge-module_is-sender__239up","badge-category":"badge-module_badge-category__OyY_p","is-hovered":"badge-module_is-hovered__riMGB","sg-blue":"badge-module_sg-blue__1XJeX","slate":"badge-module_slate__1aBDd","ron-burgundy":"badge-module_ron-burgundy__1O_L2","burnt-orange":"badge-module_burnt-orange__32tty","carrot":"badge-module_carrot__2UnJk","mango":"badge-module_mango__1VwGp","mantis":"badge-module_mantis__3yrVd","spruce":"badge-module_spruce__2UWtT","grass-stain":"badge-module_grass-stain__2htvk","lime":"badge-module_lime__3mVaq","cobalt":"badge-module_cobalt__1BJQv","bluebird":"badge-module_bluebird__10OhI","seafoam":"badge-module_seafoam__3Zfxn","caribbean":"badge-module_caribbean__1wbya","crown":"badge-module_crown__1sgKf","screample":"badge-module_screample__1tQFB","sangria":"badge-module_sangria__1n2Ip","lavender":"badge-module_lavender__1a16i","wild-strawberry":"badge-module_wild-strawberry__2A6SS","steel":"badge-module_steel__23FEw"};
styleInject(css$1);

const Badge = ({ children, color, content }) => (React__default.createElement("span", { className: classNames(Styles$1.badge, color) }, children || content));
Badge.defaultProps = {
    children: 0,
    color: '',
};

var css$2 = ".breadcrumb-module_breadcrumb__2rQs6 li {\n  display: inline-block;\n  font-size: 13px;\n  line-height: 20px; }\n\n.breadcrumb-module_breadcrumb__2rQs6 li + li::before {\n  padding: 0 6px;\n  color: #9e9e9e;\n  content: \"/\\A0\"; }\n";
var Styles$2 = {"breadcrumb":"breadcrumb-module_breadcrumb__2rQs6"};
styleInject(css$2);

const { map } = React__default.Children;
const mapper = (children) => (map(children, (child, i) => (child && React__default.createElement("li", { key: child.props.to || child.props.href },
    React__default.createElement(child.type, Object.assign({}, child.props))))));
const Breadcrumb = ({ children, withoutTrailingSlash, }) => (React__default.createElement("ol", { className: Styles$2.breadcrumb },
    mapper(children),
    !withoutTrailingSlash && React__default.createElement("li", null)));
Breadcrumb.defaultProps = {
    withoutTrailingSlash: false,
};

const Loader = ({ onDark, large, small, centered }) => {
    let size = 10;
    if (large) {
        size *= 2;
    }
    if (small) {
        size /= 2;
    }
    return (React__default.createElement("svg", { className: classNames('sg-loader', {
            'is-centered': centered,
            'is-large': large,
            'is-small': small,
            'loader-on-dark': onDark,
        }) },
        React__default.createElement("rect", { className: "logo-square bottom-left", width: size, height: size }),
        React__default.createElement("rect", { className: "logo-square bottom-middle", width: size, height: size }),
        React__default.createElement("rect", { className: "logo-square middle", width: size, height: size }),
        React__default.createElement("rect", { className: "logo-square top-middle", width: size, height: size }),
        React__default.createElement("rect", { className: "logo-square top-right", width: size, height: size }),
        React__default.createElement("rect", { className: "logo-square middle-left", width: size, height: size }),
        React__default.createElement("rect", { className: "logo-square middle-right", width: size, height: size })));
};
Loader.defaultProps = {
    centered: false,
    large: false,
    onDark: false,
    small: false,
};

var css$3 = "@charset \"UTF-8\";\n.button-module_btn__2WA4x {\n  position: relative;\n  display: inline-block;\n  padding: 11px 30px;\n  font-size: 13px;\n  line-height: 16px;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  transition: color 0.3s, background-color 0.3s, border-color 0.3s;\n  user-select: none; }\n  .button-module_btn__2WA4x.button-module_is-disabled__2BEHu {\n    color: #fff;\n    pointer-events: none;\n    cursor: default;\n    background-color: #9e9e9e;\n    border-color: #9e9e9e; }\n    .button-module_btn__2WA4x.button-module_is-disabled__2BEHu.button-module_btn-secondary__3fghH, .button-module_btn__2WA4x.button-module_is-disabled__2BEHu.button-module_btn-danger__1NS2s {\n      color: #9e9e9e;\n      background-color: #fff;\n      border-color: #9e9e9e; }\n  .button-module_btn__2WA4x.button-module_has-icon__3PfH6, .button-module_btn__2WA4x.button-module_btn-with-icon__6IFvO, .button-module_btn__2WA4x.button-module_has-badge__FG6Mt {\n    padding-right: 18px;\n    padding-left: 18px; }\n  .button-module_btn__2WA4x.button-module_is-loading__tAFnU {\n    pointer-events: none; }\n  .button-module_btn__2WA4x .button-module_sg-icon__9rgYK,\n  .button-module_btn__2WA4x .button-module_sg-loader__2DGt-,\n  .button-module_btn__2WA4x .button-module_badge__2CgjL {\n    display: block;\n    float: left;\n    margin-right: 6px; }\n  .button-module_btn__2WA4x .button-module_badge__2CgjL {\n    margin-bottom: 0; }\n\n.button-module_btn-primary__15I99 {\n  color: #fff;\n  background-color: #489be8;\n  border-color: #1a82e2; }\n  .button-module_btn-primary__15I99:hover, .button-module_btn-primary__15I99:focus {\n    color: #fff;\n    background-color: #1a82e2; }\n  .button-module_btn-primary__15I99:active, .button-module_btn-primary__15I99.button-module_is-active__xwgKG {\n    box-shadow: 0 1px 4px 0 rgba(26, 130, 226, 0.2); }\n  .button-module_btn-primary__15I99.button-module_has-badge__FG6Mt .button-module_badge__2CgjL {\n    color: #1a82e2;\n    background-color: #fff; }\n\n.button-module_btn-secondary__3fghH {\n  color: #1a82e2;\n  background-color: #fff;\n  border-color: #489be8; }\n  .button-module_btn-secondary__3fghH:hover, .button-module_btn-secondary__3fghH:focus {\n    color: #1a82e2;\n    background-color: #e8f2fc; }\n  .button-module_btn-secondary__3fghH:active, .button-module_btn-secondary__3fghH.button-module_is-active__xwgKG {\n    box-shadow: 0 1px 4px 0 rgba(26, 130, 226, 0.2); }\n  .button-module_btn-secondary__3fghH.button-module_has-badge__FG6Mt .button-module_badge__2CgjL {\n    color: #fff;\n    background-color: #1a82e2; }\n\n.button-module_btn-danger__1NS2s {\n  color: #fff;\n  background-color: rgba(183, 28, 28, 0.8);\n  border-color: #b71c1c; }\n  .button-module_btn-danger__1NS2s:hover, .button-module_btn-danger__1NS2s:focus {\n    color: #fff;\n    background-color: #b71c1c; }\n  .button-module_btn-danger__1NS2s:active, .button-module_btn-danger__1NS2s.button-module_is-active__xwgKG {\n    box-shadow: 0 1px 4px 0 rgba(26, 130, 226, 0.2);\n    color: #fff; }\n  .button-module_btn-danger__1NS2s.button-module_has-badge__FG6Mt .button-module_badge__2CgjL {\n    color: #b71c1c;\n    background-color: #fff; }\n\n.button-module_btn-small__1i8NG {\n  padding: 6px 18px; }\n\n.button-module_btn-dropdown__rSdgu {\n  padding-right: 30px;\n  padding-left: 18px; }\n  .button-module_btn-dropdown__rSdgu::before {\n    font-family: \"styleguideicons\";\n    font-size: 16px;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 1;\n    text-transform: none;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    position: absolute;\n    top: 12px;\n    right: 13px;\n    color: inherit;\n    content: \"\\E900\"; }\n  .button-module_btn-dropdown__rSdgu.button-module_btn-small__1i8NG {\n    padding-right: 30px;\n    padding-left: 20px; }\n    .button-module_btn-dropdown__rSdgu.button-module_btn-small__1i8NG::before {\n      top: 7px;\n      right: 10px; }\n    .button-module_btn-dropdown__rSdgu.button-module_btn-small__1i8NG.button-module_btn-dropdown-gear__q0r63 {\n      padding: 0 15px 0 10px; }\n    .button-module_btn-dropdown__rSdgu.button-module_btn-small__1i8NG.button-module_btn-dropdown-gear__q0r63::before {\n      top: 3px;\n      right: 1px; }\n\n.button-module_btn-dropdown-gear__q0r63 {\n  border: 0; }\n  .button-module_btn-dropdown-gear__q0r63.button-module_is-active__xwgKG > .button-module_sg-icon__9rgYK {\n    transform: rotate(135deg); }\n  .button-module_btn-dropdown-gear__q0r63::before {\n    top: 14px;\n    font-size: 16px;\n    color: #7f90a0; }\n  .button-module_btn-dropdown-gear__q0r63.button-module_btn-primary__15I99::before,\n  .button-module_btn-dropdown-gear__q0r63.button-module_btn-primary__15I99 > .button-module_sg-icon__9rgYK {\n    color: #fff; }\n  .button-module_btn-dropdown-gear__q0r63 > .button-module_sg-icon__9rgYK {\n    display: block;\n    font-size: 18px;\n    color: #7f90a0;\n    transition: transform 0.5s; }\n\n.button-module_btn-on-dark__7QPdb.button-module_btn-secondary__3fghH {\n  color: #fff;\n  background-color: transparent;\n  border-color: rgba(255, 255, 255, 0.6); }\n  .button-module_btn-on-dark__7QPdb.button-module_btn-secondary__3fghH:hover, .button-module_btn-on-dark__7QPdb.button-module_btn-secondary__3fghH:focus {\n    background-color: rgba(255, 255, 255, 0.1);\n    border-color: #fff; }\n  .button-module_btn-on-dark__7QPdb.button-module_btn-secondary__3fghH.button-module_is-disabled__2BEHu {\n    color: #9e9e9e;\n    background-color: transparent;\n    border-color: #9e9e9e; }\n    .button-module_btn-on-dark__7QPdb.button-module_btn-secondary__3fghH.button-module_is-disabled__2BEHu:hover, .button-module_btn-on-dark__7QPdb.button-module_btn-secondary__3fghH.button-module_is-disabled__2BEHu:focus {\n      background-color: inherit; }\n  .button-module_btn-on-dark__7QPdb.button-module_btn-secondary__3fghH.button-module_has-badge__FG6Mt .button-module_badge__2CgjL {\n    color: #294661;\n    background-color: #fff; }\n\n.button-module_btn-group__3JjuZ {\n  display: inline-block; }\n  .button-module_btn-group__3JjuZ > .button-module_btn-group-item__3mRC5 {\n    float: left;\n    padding-right: 18px;\n    padding-left: 18px;\n    margin: 0;\n    color: #1a82e2;\n    background-color: #fff;\n    border-color: rgba(26, 130, 226, 0.8); }\n    .button-module_btn-group__3JjuZ > .button-module_btn-group-item__3mRC5:hover, .button-module_btn-group__3JjuZ > .button-module_btn-group-item__3mRC5:focus {\n      background-color: rgba(26, 130, 226, 0.1); }\n    .button-module_btn-group__3JjuZ > .button-module_btn-group-item__3mRC5:active {\n      box-shadow: 0 1px 4px 0 rgba(26, 130, 226, 0.2); }\n    .button-module_btn-group__3JjuZ > .button-module_btn-group-item__3mRC5:first-child {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n    .button-module_btn-group__3JjuZ > .button-module_btn-group-item__3mRC5:last-child {\n      margin-left: -1px;\n      border-bottom-right-radius: 0;\n      border-top-left-radius: 0; }\n    .button-module_btn-group__3JjuZ > .button-module_btn-group-item__3mRC5:not(:first-child):not(:last-child) {\n      margin-left: -1px;\n      border-radius: 0; }\n    .button-module_btn-group__3JjuZ > .button-module_btn-group-item__3mRC5.button-module_is-active__xwgKG {\n      color: #fff;\n      background-color: #489be8;\n      border-color: #1a82e2; }\n\n.button-module_btn-group-stacked__1dH5R .button-module_btn-group-item__3mRC5 {\n  display: block;\n  width: 100%;\n  margin: 10px 0; }\n";
var Styles$3 = {"btn":"button-module_btn__2WA4x","is-disabled":"button-module_is-disabled__2BEHu","btn-secondary":"button-module_btn-secondary__3fghH","btn-danger":"button-module_btn-danger__1NS2s","has-icon":"button-module_has-icon__3PfH6","btn-with-icon":"button-module_btn-with-icon__6IFvO","has-badge":"button-module_has-badge__FG6Mt","is-loading":"button-module_is-loading__tAFnU","sg-icon":"button-module_sg-icon__9rgYK","sg-loader":"button-module_sg-loader__2DGt-","badge":"button-module_badge__2CgjL","btn-primary":"button-module_btn-primary__15I99","is-active":"button-module_is-active__xwgKG","btn-small":"button-module_btn-small__1i8NG","btn-dropdown":"button-module_btn-dropdown__rSdgu","btn-dropdown-gear":"button-module_btn-dropdown-gear__q0r63","btn-on-dark":"button-module_btn-on-dark__7QPdb","btn-group":"button-module_btn-group__3JjuZ","btn-group-item":"button-module_btn-group-item__3mRC5","btn-group-stacked":"button-module_btn-group-stacked__1dH5R"};
styleInject(css$3);

const Button = (props) => {
    return (React__default.createElement(Buttonized, Object.assign({}, props),
        React__default.createElement("button", null, props.children)));
};
const Buttonized = ({ children, type, badge, disabled, loading, small, onDark, onClick, group, active, icon, id, }) => {
    const hasBadge = !!badge || badge === 0;
    const hasIcon = !!icon;
    const content = [];
    if (hasBadge) {
        content.push(React__default.createElement(Badge, { key: 1 }, badge));
    }
    if (hasIcon) {
        content.push(React__default.createElement(Icon, { key: 2, type: icon }));
    }
    if (loading) {
        content.push(React__default.createElement(Loader, { key: 3, small: true, onDark: type === 'primary' }));
    }
    // the children of the element being buttonized
    if (children.props.children) {
        content.push(children.props.children);
    }
    return (React__default.cloneElement(children, {
        className: classNames(Styles$3.btn, Styles$3[`btn-${type}`], {
            [Styles$3['btn-on-dark']]: onDark,
            [Styles$3['btn-small']]: small,
            [Styles$3['has-badge']]: hasBadge,
            [Styles$3['has-icon']]: hasIcon || loading,
            [Styles$3['is-active']]: active,
            [Styles$3['is-disabled']]: disabled,
            [Styles$3['is-loading']]: loading,
        }),
        id,
        onClick,
    }, content));
};
Button.defaultProps = {
    active: false,
    badge: null,
    children: '',
    disabled: false,
    group: false,
    icon: null,
    loading: false,
    onClick: () => { },
    onDark: false,
    small: false,
    type: 'primary',
};

const { map: map$1 } = React__default.Children;
const ButtonList = ({ children, onDark }) => {
    return (React__default.createElement("div", { className: "btn-list" }, map$1(children, (button) => {
        return button && React__default.cloneElement(button, { onDark });
    })));
};
ButtonList.defaultProps = {
    onDark: false,
};

const Card = ({ badge, body, centered, children, inline, thin, title, }) => {
    const titleStyle = {
        width: '100%',
    };
    return (React__default.createElement("div", { className: classNames('card', {
            'is-centered': centered,
            'is-thin': thin,
        }) },
        badge && React__default.createElement(Badge, Object.assign({}, badge)),
        title && React__default.createElement("h2", { style: titleStyle }, title),
        body && React__default.createElement("p", null, body),
        children));
};

const modalOpenClass = 'modal-open';
const modalWillReceiveProps = (nextProps, currentProps) => {
    if (nextProps.isOpen === currentProps.isOpen) {
        return;
    }
    const { bodyNode } = currentProps;
    if (nextProps.isOpen) {
        bodyNode.classList.add(modalOpenClass);
    }
    else {
        bodyNode.classList.remove(modalOpenClass);
    }
};

const evaluateRenderProp = (prop) => {
    return prop instanceof Function ? prop() : prop;
};
class CenterModal extends React.Component {
    componentWillReceiveProps(nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    }
    render() {
        // Using <> instead of <Fragment> is breaking the linter.
        return (React__default.createElement(React.Fragment, null,
            React__default.createElement("div", { className: classNames('center-modal', { 'is-visible': this.props.open, 'is-large': this.props.large }) },
                this.props.hasX &&
                    (React__default.createElement("i", { className: "sg-icon sg-icon-x", "data-role": "close-center-modal", onClick: this.props.onClose })),
                this.props.renderHeader && React__default.createElement("h1", null, evaluateRenderProp(this.props.renderHeader)),
                evaluateRenderProp(this.props.renderBody),
                this.props.renderFooter &&
                    (React__default.createElement("div", { className: "modal-footer" }, evaluateRenderProp(this.props.renderFooter)))),
            React__default.createElement("div", { className: classNames('modal-mask', { 'is-visible': this.props.open }), onClick: this.props.onClose })));
    }
}
CenterModal.defaultProps = {
    bodyNode: document.body,
    hasX: false,
    large: false,
};

const Column = ({ children, width, offset, }) => {
    return (React__default.createElement("div", { className: classNames((width > 0 ? 'col-' + width.toString() : ''), (offset > 0 ? 'col-offset-' + offset.toString() : '')) }, children));
};

const Checkbox = ({ checked, disabled, id, label, children, onChange, value, }) => {
    return (React__default.createElement("div", { className: "input-checkbox-wrap" },
        React__default.createElement("input", { checked: checked, disabled: disabled, id: id, onChange: onChange, type: "checkbox", value: value }),
        React__default.createElement("label", { className: "input-checkbox-label", htmlFor: id }, children ? children : label)));
};

const Row = ({ children, }) => {
    return (React__default.createElement("div", { className: "row" }, children));
};

const evaluateRenderProp$1 = (prop) => {
    return typeof prop === 'string' ? prop : prop();
};
class ConfirmationModal extends React.Component {
    componentWillReceiveProps(nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    }
    render() {
        return (React__default.createElement("div", { className: classNames('sg-modal', { 'is-visible': this.props.isOpen }) },
            React__default.createElement("div", { className: "conf-alert sg-modal-content" },
                React__default.createElement("h2", { className: "conf-alert-header" }, evaluateRenderProp$1(this.props.renderHeader)),
                React__default.createElement("div", { className: "conf-alert-body" },
                    React__default.createElement("p", { className: "conf-alert-text" }, evaluateRenderProp$1(this.props.renderBody))),
                React__default.createElement("div", { className: "conf-alert-actions" }, evaluateRenderProp$1(this.props.renderActions)))));
    }
}
ConfirmationModal.defaultProps = { bodyNode: document.body };

const Divider = ({ label, thin }) => {
    return (React__default.createElement("hr", { className: classNames({
            'has-label': !!label,
            'is-thin': thin,
        }), "data-label": label }));
};
Divider.defaultProps = {
    label: null,
    thin: false,
};

const { map: map$2 } = React__default.Children;
class DropdownButton extends React__default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            active: false,
        };
        this.handleClick = () => {
            const { active } = this.state;
            this.setState({ active: !active });
        };
    }
    render() {
        const { badge, children, disabled, gear, group, icon, label, loading, onClick, onDark, small, type, } = this.props;
        const { active } = this.state;
        const hasBadge = !!badge || badge === 0;
        const hasIcon = !!icon;
        let buttonType = type;
        if (gear) {
            buttonType = 'secondary';
        }
        const links = map$2(children, (link) => {
            return React__default.cloneElement(link, {
                className: `${link.props.className} dropdown-link`,
            });
        });
        return (React__default.createElement("div", { className: "btn-list" },
            React__default.createElement("div", { className: classNames('btn', 'btn-dropdown', 'dropdown', `btn-${buttonType}`, {
                    'btn-dropdown-gear': gear,
                    'btn-on-dark': onDark,
                    'btn-small': small,
                    'has-badge': hasBadge,
                    'has-icon': hasIcon || loading,
                    'is-active': active,
                    'is-disabled': disabled,
                    'is-loading': loading,
                }), onClick: this.handleClick },
                !gear && hasBadge && React__default.createElement(Badge, null, badge),
                !gear && hasIcon && React__default.createElement(Icon, { type: icon, onDark: type === 'primary' }),
                gear ? React__default.createElement(Icon, { type: "gear" }) : label,
                React__default.createElement("ul", { className: "dropdown-menu" }, links))));
    }
}
DropdownButton.defaultProps = Button.defaultProps;

const Dropzone = ({ active, children: alert, hovered, large, }) => {
    return (React__default.createElement("section", { className: classNames('dropzone', {
            'has-inline-alert': !!alert,
            'is-active': active,
            'is-hovered': hovered,
            'is-large': large,
        }), role: "hidden" }, alert &&
        React__default.cloneElement(alert, Object.assign({}, alert.props, { inline: true }))));
};
Dropzone.defaultProps = {
    active: false,
    hovered: false,
    large: false,
};

const evaluateRenderProp$2 = (prop) => {
    if (typeof prop === 'function') {
        return prop();
    }
    else {
        return React__default.createElement(Icon, { type: prop });
    }
};
const EmptyState = ({ children, icon, buttons, header, }) => (React__default.createElement("div", { className: "table-state is-empty" },
    icon && evaluateRenderProp$2(icon),
    header && React__default.createElement("h2", null, header),
    children));

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : _baseSlice(array, start, end);
}

var _castSlice = castSlice;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff';
var rsComboMarksRange = '\\u0300-\\u036f';
var reComboHalfMarksRange = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange = '\\u20d0-\\u20ff';
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
var rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray;

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff';
var rsComboMarksRange$1 = '\\u0300-\\u036f';
var reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange$1 = '\\u20d0-\\u20ff';
var rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
var rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$1 + ']';
var rsCombo = '[' + rsComboRange$1 + ']';
var rsFitz = '\\ud83c[\\udffb-\\udfff]';
var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
var rsNonAstral = '[^' + rsAstralRange$1 + ']';
var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?';
var rsOptVar = '[' + rsVarRange$1 + ']?';
var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

var _unicodeToArray = unicodeToArray;

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return _hasUnicode(string)
    ? _unicodeToArray(string)
    : _asciiToArray(string);
}

var _stringToArray = stringToArray;

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString_1(string);

    var strSymbols = _hasUnicode(string)
      ? _stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? _castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

var _createCaseFirst = createCaseFirst;

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = _createCaseFirst('toUpperCase');

var upperFirst_1 = upperFirst;

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst_1(toString_1(string).toLowerCase());
}

var capitalize_1 = capitalize;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return _arrayMap(props, function(key) {
    return object[key];
  });
}

var _baseValues = baseValues;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$2.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag$1 = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : _baseValues(object, keys_1(object));
}

var values_1 = values;

const filterControlStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};
const inlineClearButtonStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '20px',
};
class FilterableList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.handlers = {};
        this.handleFilterChange = (filterName, event) => {
            const value = event.target.value;
            this.setState({
                [filterName]: value,
            }, this.props.onChange);
        };
        this.handleClear = (event) => {
            if (this.props.onClear) {
                return this.props.onClear(event);
            }
            for (const key of Object.keys(this.state)) {
                this.setState({ [key]: '' });
            }
        };
        for (const name of props.filterTypes) {
            if (name) {
                this.state[name] = '';
                this.handlers[`handleFilter${capitalize_1(name)}Change`] = this.handleFilterChange.bind(this, name);
            }
            else {
                this.state.value = '';
                this.handlers[`handleFilterChange`] = this.handleFilterChange.bind(this, 'value');
            }
        }
    }
    static createClass(props) {
        return class FilterableListContainer extends React.PureComponent {
            render() {
                return React__default.createElement(FilterableList, Object.assign({}, props, { items: this.props.items }));
            }
        };
    }
    get filteredItems() {
        // If a function to filter items is passed in, then use that.
        const { onFilter, items } = this.props;
        if (onFilter) {
            return onFilter(items, this.state);
        }
        const filters = values_1(this.state)
            .join()
            .toLowerCase();
        const includesFilters = (value) => value
            .toString()
            .toLowerCase()
            .includes(filters);
        return items.filter((item) => {
            if (typeof item === 'string') {
                return includesFilters(item);
            }
            return values_1(item)
                .map(includesFilters)
                .some(identity_1);
        });
    }
    get clearButton() {
        return (React__default.createElement(ButtonList, { style: inlineClearButtonStyle },
            React__default.createElement(Button, { small: true, type: "secondary", onClick: this.handleClear }, this.props.clearButtonLabel)));
    }
    get showClearButtonInHeader() {
        return this.props.showClearButton && this.props.clearButtonInHeader;
    }
    get showClearButtonInline() {
        return this.props.showClearButton && !this.props.clearButtonInHeader;
    }
    render() {
        const { clearButtonLabel, title, showClearButton, renderControls, renderItems, } = this.props;
        return (React__default.createElement("section", { className: "FilterableList" },
            React__default.createElement("div", { className: "filter-wrap" },
                React__default.createElement("div", { className: "filter-header" },
                    React__default.createElement("p", { className: "filter-title" }, title),
                    this.showClearButtonInHeader && this.clearButton),
                React__default.createElement("div", { className: "filter-list", style: filterControlStyle },
                    renderControls(Object.assign({}, this.state, this.handlers), this.handleFilterChange),
                    this.showClearButtonInline && this.clearButton)),
            React__default.createElement("div", { className: "FilterableListItems" }, renderItems(this.filteredItems))));
    }
}
FilterableList.defaultProps = {
    clearButtonInHeader: false,
    clearButtonLabel: 'Clear',
    filterTypes: [''],
    showClearButton: false,
};

const Footer = ({ children, icon, header, }) => (React__default.createElement("p", { className: "small is-center" },
    icon &&
        React__default.createElement("span", null,
            React__default.createElement(Icon, { type: icon }),
            ' '),
    header &&
        React__default.createElement("strong", null, `${header} `),
    children));

const FragmentLoader = () => {
    return (React__default.createElement("svg", { className: "fragment-loader" },
        React__default.createElement("rect", { className: "fragment-square left", width: "10", height: "10" }),
        React__default.createElement("rect", { className: "fragment-square middle", width: "10", height: "10" }),
        React__default.createElement("rect", { className: "fragment-square right", width: "10", height: "10" })));
};

const Meter = ({ title, value }) => {
    return (React__default.createElement("div", { className: "meter-container" },
        React__default.createElement("span", { className: "meter-title" }, title),
        ' ',
        React__default.createElement("span", { className: "meter-value" },
            value,
            "%"),
        React__default.createElement("div", { className: "meter-bar" },
            React__default.createElement("div", { className: classNames('meter-bar-fill', {
                    'is-above-50': value >= 50,
                    'is-below-25': value < 25,
                    'is-below-50': value < 50 && value >= 25,
                }), style: { width: `${value}%` } }))));
};

const NumberedStep = ({ children, header, }) => (React__default.createElement("li", null,
    React__default.createElement("h3", null, header),
    children));
const NumberedSteps = ({ children, }) => (React__default.createElement("ol", { className: "numbered-steps" }, children));

const Progress = ({ children, vertical }) => {
    return (React__default.createElement("section", { className: classNames('progress-container', {
            'is-vertical': vertical,
        }) },
        React__default.createElement("ul", { className: "progress-stages" }, children)));
};
Progress.defaultProps = {
    vertical: false,
};
const ProgressStage = ({ children: label, done, selected, }) => {
    return (React__default.createElement("li", { className: classNames({
            'is-done': done,
            'is-selected': selected,
        }) },
        React__default.createElement("label", null, label)));
};
ProgressStage.defaultProps = {
    done: false,
    selected: false,
};

const headerStyle = {
    marginTop: 10,
};
const headingStyle = {
    color: '#294661',
    fontFamily: 'Colfax,Proxima Nova,Helvetica,sans-serif',
    fontWeight: 300,
};
const PageHeader = ({ children }) => (React__default.createElement("header", null, children));
const PageHeading = ({ children, title }) => (React__default.createElement("div", { className: "content-header", style: headerStyle },
    React__default.createElement("h1", { style: headingStyle }, title),
    children && React__default.createElement("div", { className: "btn-list" }, children)));
PageHeading.defaultProps = {
    title: '',
};

const { map: map$3 } = React__default.Children;
const radioGroupMapper = (props) => (map$3(props.children, (child) => (child && (React__default.createElement(child.type, Object.assign({ key: child.props.value, name: props.name, onChange: props.onChange }, child.props))))));
const RadioGroup = (props) => (React__default.createElement(React.Fragment, null, radioGroupMapper(props)));
const Radio = ({ checked, children, defaultChecked, disabled, id, label, name, onChange, value, }) => {
    id = id || `radio-${value.toLowerCase()}`;
    return (React__default.createElement("div", { className: "input-radio-wrap" },
        React__default.createElement("input", { checked: checked, defaultChecked: defaultChecked, disabled: disabled, id: id, name: name, onChange: onChange, type: "radio", value: value }),
        React__default.createElement("label", { className: "input-radio-label", htmlFor: id }, label)));
};
class StatefulRadio extends React__default.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked,
        };
        this.handleChange = this
            .handleChange
            .bind(this);
    }
    handleChange(event) {
        event.persist();
        this.setState({
            checked: !this.state.checked,
        }, () => {
            this
                .props
                .onChange(event);
        });
    }
    render() {
        return (React__default.createElement(Radio, Object.assign({}, this.props, { checked: this.state.checked, onChange: this.handleChange }), this.props.children));
    }
}

class SideModal extends React__default.Component {
    componentWillReceiveProps(nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    }
    render() {
        return (React__default.createElement(React.Fragment, null,
            React__default.createElement("div", { className: classNames('side-modal', { 'is-visible': this.props.isOpen }) }, this.props.children),
            React__default.createElement("div", { className: classNames('modal-mask', { 'is-visible': this.props.isOpen }), onClick: this.props.onClose })));
    }
}
SideModal.defaultProps = { bodyNode: document.body };

const Slider = ({ value, id, label, onChange: handleChange, }) => {
    return (React__default.createElement("div", { className: "input-range-wrap" },
        React__default.createElement("input", { id: id, max: "100", min: "0", onChange: handleChange, type: "range", value: value }),
        label && React__default.createElement("div", { className: "input-range-percent" },
            value,
            "%")));
};
class StatefulSlider extends React__default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: this.props.value,
        };
        this.handleChange = (event) => {
            const value = event.target.value;
            this.setState({ value }, () => {
                this.props.onChange(event, value);
            });
        };
    }
    render() {
        const { onChange } = this.props;
        const { value } = this.state;
        return (React__default.createElement(Slider, Object.assign({}, this.props, { value: value, onChange: this.handleChange })));
    }
}
Slider.defaultProps = {
    label: true,
    value: 0,
};

class SegmentTerm extends React.PureComponent {
    get termControls() {
        const { isEditable, isEditing, onCancel, onConfirm, showConfirm } = this.props;
        if (isEditing) {
            return (React__default.createElement(ButtonList, null,
                showConfirm &&
                    React__default.createElement(Button, { type: "secondary", small: true, onClick: onConfirm },
                        React__default.createElement(Icon, { type: "check-thin" })),
                onCancel &&
                    React__default.createElement(Button, { type: "danger", small: true, onClick: onCancel },
                        React__default.createElement(Icon, { type: "x" }))));
        }
        if (isEditable) {
            return React__default.createElement(Icon, { type: "pencil", className: "segment-term-edit" });
        }
        return null;
    }
    render() {
        const { hasAddButton, hasSeparator, isEditable, isEditing, label, onAddButtonClick, onEdit, queryName, radios, renderAlert, renderInputs, title, } = this.props;
        return (React__default.createElement("div", { className: "segment-term-wrap" },
            React__default.createElement("p", { className: "segment-term-title" }, title),
            React__default.createElement("div", { className: classNames('segment-term', {
                    'has-alert': !!renderAlert,
                    'has-radios': radios,
                    'has-separator': hasSeparator,
                    'is-editable': isEditing,
                }), onClick: (isEditable && !isEditing) ? onEdit : undefined },
                isEditing && renderInputs && renderInputs(),
                !isEditing &&
                    React__default.createElement("p", null,
                        `${label} `,
                        React__default.createElement("strong", null, queryName)),
                this.termControls,
                renderAlert && renderAlert()),
            hasAddButton &&
                React__default.createElement(ButtonList, null,
                    React__default.createElement(Button, { type: "secondary", icon: "plus", onClick: onAddButtonClick }, "Add Condition"))));
    }
}
SegmentTerm.defaultProps = {
    hasAddButton: false,
    hasSeparator: false,
    isEditable: false,
    isEditing: false,
    radios: false,
};

const TableBody = ({ children, className, }) => {
    return (React__default.createElement("tbody", { className: className }, children));
};

const TableCell = ({ children, className, }) => {
    return (React__default.createElement("td", { className: className }, children));
};

const TableHeader = ({ children, className, }) => {
    return (React__default.createElement("thead", { className: className }, children));
};

class HeaderCell extends React__default.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            if (this.props.sortKey) {
                if (this.props.ascending === false) {
                    this.props.onClick(this.props.sortKey, false);
                }
                else {
                    this.props.onClick(this.props.sortKey, true);
                }
            }
        };
    }
    render() {
        return (React__default.createElement("th", { className: classNames(this.props.className, { sort: !(this.props.sortKey === undefined) }, { 'sort-asc': this.props.sorted && this.props.ascending === true }, { 'sort-desc': this.props.sorted && this.props.ascending === false }), onClick: this.handleClick }, this.props.children));
    }
}

const TableRow = ({ children, className, }) => {
    return (React__default.createElement("tr", { className: className }, children));
};

const Table = ({ children, className, }) => {
    return (React__default.createElement("table", { className: classNames('table-wrap', className) }, children));
};

class SortableTable extends React__default.Component {
    constructor(props) {
        super(props);
        this.defaultSort = function (array, dataKey) {
            return array.sort(function (a, b) {
                const x = a[dataKey];
                const y = b[dataKey];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        };
        this.state = {
            ascending: undefined,
            data: [],
            sortBy: undefined,
        };
        this.handleHeaderClick = this.handleHeaderClick.bind(this);
        this.sortData = this.sortData.bind(this);
    }
    componentDidMount() {
        this.sortData(this.props.headerData[0].dataKey, false);
    }
    handleHeaderClick(dataKey, descending) {
        this.sortData(dataKey, descending);
    }
    sortData(sortBy, descending) {
        const data = this.performSort(this.props.rowData, this.props.headerData, sortBy);
        if (descending) {
            this.setState({ data: data.reverse(), ascending: false, sortBy });
        }
        else {
            this.setState({ data, ascending: true, sortBy });
        }
    }
    render() {
        const ascendingState = this.state.ascending;
        const sortByKey = this.state.sortBy;
        const defaultHeaderRenderer = ({ name, dataKey, onClick, sort, ascending, sortBy }) => (React__default.createElement(HeaderCell, { sortKey: dataKey, onClick: onClick, ascending: ascendingState, sorted: dataKey === sortByKey }, name));
        const defaultRowRenderer = ({ columns }) => (React__default.createElement(TableRow, null, this.props.headerData.map((header) => React__default.createElement(TableCell, { key: 'header-' + header.dataKey }, columns[header.dataKey]))));
        const HeaderRenderer = this.props.headerRenderer || defaultHeaderRenderer;
        const RowRenderer = this.props.rowRenderer || defaultRowRenderer;
        return (React__default.createElement(Table, null,
            React__default.createElement(TableHeader, null,
                React__default.createElement(TableRow, null, this.props.headerData.map((ele, index) => React__default.createElement(HeaderRenderer, Object.assign({}, ele, { onClick: this.handleHeaderClick, sortBy: sortByKey, ascending: ascendingState, key: 'header-' + ele.dataKey }))))),
            React__default.createElement(TableBody, null, this.state.data.map((ele, index) => React__default.createElement(RowRenderer, { key: 'row-' + index, columns: ele })))));
    }
    performSort(rowData, headerData, sortBy) {
        const sortIndex = headerData.findIndex((ele) => ele.dataKey === sortBy);
        let data = [];
        if (typeof headerData[sortIndex].sort === 'function') {
            data = headerData[sortIndex].sort(rowData, headerData[sortIndex].dataKey);
        }
        else {
            data = this.defaultSort(rowData, headerData[sortIndex].dataKey);
        }
        return data;
    }
}

const findActiveIndex = (components) => {
    const activeIndex = React.Children.map(components, (component) => component.props.active).indexOf(true);
    if (activeIndex === -1) {
        return 0;
    }
    return activeIndex;
};

const { map: map$4 } = React__default.Children;
const Tab = ({ active, children, onClick: handleClick, number, }) => {
    return (React__default.createElement("li", { className: classNames('tab', {
            'is-active': active,
        }), onClick: handleClick },
        children,
        " ",
        number && React__default.createElement("span", { className: "tab-number" }, number)));
};
Tab.defaultProps = {
    active: false,
};
const Tabs = ({ centered, children, zeroBorder, onChange, }) => {
    return (React__default.createElement("ul", { className: classNames('tab-wrapper', {
            'is-centered': centered,
            'zero-border': zeroBorder,
        }) }, map$4(children, (tab, index) => {
        return React__default.cloneElement(tab, {
            onClick(event) {
                const { children: label, onClick } = tab.props;
                onClick(event);
                onChange(event, label, index);
            },
        });
    })));
};
class StatefulTabs extends React__default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeIndex: findActiveIndex(this.props.children),
        };
        this.handleChange = (event, label, index) => {
            const { onChange: handleChange } = this.props;
            this.setState({
                activeIndex: index,
            }, () => {
                handleChange(event, label, index);
            });
        };
    }
    render() {
        const { activeIndex } = this.state;
        const tabs = map$4(this.props.children, (tab, index) => {
            return React__default.cloneElement(tab, {
                active: index === activeIndex,
            });
        });
        return (React__default.createElement(Tabs, Object.assign({}, this.props, { onChange: this.handleChange }), tabs));
    }
}

const convertInputValue = (value, inputType) => {
    return inputType === 'number' ? parseInt(value, 10) : value;
};
const onInputFocus = function () {
    this.setState({ isInputFocused: true });
};
const getRenderedTextInput = function (value) {
    const classes = classNames('input-text-wrap', {
        'has-value': !!value || value === 0,
        'is-disabled': this.props.isDisabled,
        'is-error': !this.props.isValid,
        'is-focused': this.state.isInputFocused,
        'is-large': this.props.isLarge,
        'is-required': this.props.isRequired,
        'is-search': this.props.isSearch,
    });
    const infoId = this.props.info && `${this.props.id}-info`;
    const children = this.props.children || '';
    return (React__default.createElement("div", { className: classes, style: this.inputStyle },
        React__default.createElement("label", { className: "input-text-label", htmlFor: this.props.id }, this.props.label),
        React__default.createElement("input", { id: this.props.id, value: this.props.value, type: this.props.type, onChange: this.onValueChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, "aria-describedby": infoId }),
        this.props.info && (React__default.createElement("span", { className: classNames('input-info', {
                danger: !this.props.isValid,
            }), id: infoId }, this.props.info)),
        children));
};
class TextInput extends React__default.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInputFocused: false,
        };
        this.onInputFocus = onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }
    get inputStyle() {
        const { fullWidth, style } = this.props;
        if (fullWidth) {
            return Object.assign({}, style, { width: '100%' });
        }
        return style;
    }
    onValueChange(event) {
        const value = convertInputValue(event.target.value, this.props.type);
        this.props.onChange(event, value);
    }
    onInputBlur(event) {
        this.setState({ isInputFocused: false });
        if (event !== undefined && this.props.onBlur) {
            const value = convertInputValue(event.target.value, this.props.type);
            this.props.onBlur(event, value);
        }
    }
    render() {
        return getRenderedTextInput.call(this, this.props.value);
    }
}
TextInput.defaultProps = {
    fullWidth: false,
    info: '',
    isDisabled: false,
    isLarge: false,
    isRequired: false,
    isSearch: false,
    isValid: true,
    label: '',
    style: {},
    value: '',
};
class StatefulTextInput extends React__default.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInputFocused: false,
            value: '',
        };
        this.onInputFocus = onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(event) {
        const value = convertInputValue(event.target.value, this.props.type);
        this.setState({ value });
        this.props.onChange(event, value);
    }
    onInputBlur(event) {
        this.setState({ isInputFocused: false });
        if (event && this.props.onBlur) {
            const value = convertInputValue(event.target.value, this.props.type);
            this.setState({ value });
            this.props.onBlur(event, value);
        }
    }
    render() {
        return getRenderedTextInput.call(this, this.state.value);
    }
}
StatefulTextInput.defaultProps = {
    isValid: true,
};

const { map: map$5 } = React__default.Children;
const ToggleButtons = ({ children, onChange, }) => {
    return (React__default.createElement("div", { className: "btn-group" }, map$5(children, (button, index) => {
        return React__default.cloneElement(button, {
            onClick(event) {
                const { children: label, onClick } = button.props;
                onClick(event);
                onChange(event, label, index);
            },
            type: 'group-item',
        });
    })));
};
class StatefulToggleButtons extends React__default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeIndex: findActiveIndex(this.props.children),
        };
    }
    render() {
        const { activeIndex } = this.state;
        const buttons = map$5(this.props.children, (button, index) => {
            return React__default.cloneElement(button, {
                active: index === activeIndex,
            });
        });
        return (React__default.createElement(ToggleButtons, Object.assign({}, this.props, { onChange: this.handleChange }), buttons));
    }
    handleChange(event, label, index) {
        const { onChange: handleChange } = this.props;
        this.setState({
            activeIndex: index,
        }, () => {
            handleChange(event, label, index);
        });
    }
}

const Tooltip = ({ content, direction, className, children, }) => {
    return (React__default.createElement("span", { className: className, "data-tooltip": content, "data-tooltip-pos": direction }, children));
};
class HTMLTooltip extends React__default.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            opened: false,
            tooltipHeight: 0,
        };
        this.handleHoverIn = () => {
            this.setState({ hovered: true, opened: true, tooltipHeight: this.tooltipRef.offsetHeight });
        };
        this.handleHoverOut = () => {
            this.setState({ hovered: false });
            setTimeout(() => {
                if (!this.state.hovered) {
                    this.setState({ opened: false });
                }
            }, this.props.debounce);
        };
        this.state = {
            hovered: false,
            opened: false,
            tooltipHeight: 0,
        };
        this.handleHoverIn = this.handleHoverIn.bind(this);
        this.handleHoverOut = this.handleHoverOut.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.opened === nextState.opened) {
            return false;
        }
        return true;
    }
    render() {
        return (React__default.createElement("div", null,
            React__default.createElement("div", { className: "tooltip-js-parent", onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, this.props.hoverTarget),
            React__default.createElement("div", { className: classNames(`tooltip-js-content ${this.props.className}`, {
                    'is-left': this.props.direction === 'left',
                    'is-visible': this.state.opened,
                }), style: { top: -(this.state.tooltipHeight / 2) - 3 }, ref: (input) => {
                    this.tooltipRef = input;
                }, onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, this.props.children)));
    }
}
HTMLTooltip.defaultProps = {
    className: '',
    debounce: 1000,
    direction: 'right',
};

const TruncatedList = ({ items, limit = 3, className, link, renderItems, renderMore, }) => {
    const shown = items.slice(0, limit);
    const shownText = shown.join(', ');
    const truncated = items.slice(limit);
    const numberOfAdditionalItems = truncated.length;
    const hasAdditionalItems = numberOfAdditionalItems > 0;
    const additionalItemText = (React__default.createElement("span", null,
        ",",
        ' ',
        React__default.createElement("abbr", null,
            React__default.createElement("a", { href: link },
                "+",
                numberOfAdditionalItems,
                " more"))));
    return (React__default.createElement("span", { className: className },
        renderItems ? renderItems(shown) : shownText,
        renderMore && renderMore(numberOfAdditionalItems.toString(), link),
        !renderMore && hasAdditionalItems && additionalItemText));
};

exports.Action = Action;
exports.Actions = Actions;
exports.ActionsCell = ActionsCell;
exports.Alert = Alert;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.Buttonized = Buttonized;
exports.ButtonList = ButtonList;
exports.Card = Card;
exports.CenterModal = CenterModal;
exports.Column = Column;
exports.Checkbox = Checkbox;
exports.Row = Row;
exports.ConfirmationModal = ConfirmationModal;
exports.Divider = Divider;
exports.DropdownButton = DropdownButton;
exports.Dropzone = Dropzone;
exports.EmptyState = EmptyState;
exports.FilterableList = FilterableList;
exports.SmallFooter = Footer;
exports.Icon = Icon;
exports.Loader = Loader;
exports.FragmentLoader = FragmentLoader;
exports.Meter = Meter;
exports.NumberedStep = NumberedStep;
exports.NumberedSteps = NumberedSteps;
exports.Progress = Progress;
exports.ProgressStage = ProgressStage;
exports.PageHeader = PageHeader;
exports.PageHeading = PageHeading;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.SideModal = SideModal;
exports.Slider = Slider;
exports.SegmentTerm = SegmentTerm;
exports.SortableTable = SortableTable;
exports.Tab = Tab;
exports.Tabs = Tabs;
exports.Table = Table;
exports.TableRow = TableRow;
exports.HeaderCell = HeaderCell;
exports.TableCell = TableCell;
exports.TableHeader = TableHeader;
exports.TableBody = TableBody;
exports.TextInput = TextInput;
exports.ToggleButtons = ToggleButtons;
exports.Tooltip = Tooltip;
exports.HTMLTooltip = HTMLTooltip;
exports.TruncatedList = TruncatedList;
//# sourceMappingURL=bundledindex.js.map
