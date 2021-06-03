(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[820], {
    93367: function(e, t, n) {
        "use strict";
        var r;
        t.__esModule = !0,
        t.AmpStateContext = void 0;
        var a = ((r = n(67294)) && r.__esModule ? r : {
            default: r
        }).default.createContext({});
        t.AmpStateContext = a
    },
    7845: function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.isInAmpMode = i,
        t.useAmp = function() {
            return i(a.default.useContext(o.AmpStateContext))
        }
        ;
        var r, a = (r = n(67294)) && r.__esModule ? r : {
            default: r
        }, o = n(93367);
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.ampFirst
              , n = void 0 !== t && t
              , r = e.hybrid
              , a = void 0 !== r && r
              , o = e.hasQuery
              , i = void 0 !== o && o;
            return n || a && i
        }
    },
    57947: function(e, t, n) {
        "use strict";
        var r = n(61682);
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        t.__esModule = !0,
        t.defaultHead = d,
        t.default = void 0;
        var o, i = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== typeof e && "function" !== typeof e)
                return {
                    default: e
                };
            var t = f();
            if (t && t.has(e))
                return t.get(e);
            var n = {}
              , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            n.default = e,
            t && t.set(e, n);
            return n
        }(n(67294)), u = (o = n(60617)) && o.__esModule ? o : {
            default: o
        }, c = n(93367), s = n(74287), l = n(7845);
        function f() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return f = function() {
                return e
            }
            ,
            e
        }
        function d() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = [i.default.createElement("meta", {
                charSet: "utf-8"
            })];
            return e || t.push(i.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function p(e, t) {
            return "string" === typeof t || "number" === typeof t ? e : t.type === i.default.Fragment ? e.concat(i.default.Children.toArray(t.props.children).reduce((function(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
            }
            ), [])) : e.concat(t)
        }
        var h = ["name", "httpEquiv", "charSet", "itemProp"];
        function y(e, t) {
            return e.reduce((function(e, t) {
                var n = i.default.Children.toArray(t.props.children);
                return e.concat(n)
            }
            ), []).reduce(p, []).reverse().concat(d(t.inAmpMode)).filter(function() {
                var e = new Set
                  , t = new Set
                  , n = new Set
                  , r = {};
                return function(a) {
                    var o = !0
                      , i = !1;
                    if (a.key && "number" !== typeof a.key && a.key.indexOf("$") > 0) {
                        i = !0;
                        var u = a.key.slice(a.key.indexOf("$") + 1);
                        e.has(u) ? o = !1 : e.add(u)
                    }
                    switch (a.type) {
                    case "title":
                    case "base":
                        t.has(a.type) ? o = !1 : t.add(a.type);
                        break;
                    case "meta":
                        for (var c = 0, s = h.length; c < s; c++) {
                            var l = h[c];
                            if (a.props.hasOwnProperty(l))
                                if ("charSet" === l)
                                    n.has(l) ? o = !1 : n.add(l);
                                else {
                                    var f = a.props[l]
                                      , d = r[l] || new Set;
                                    "name" === l && i || !d.has(f) ? (d.add(f),
                                    r[l] = d) : o = !1
                                }
                        }
                    }
                    return o
                }
            }()).reverse().map((function(e, n) {
                var o = e.key || n;
                if (!t.inAmpMode && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css"].some((function(t) {
                    return e.props.href.startsWith(t)
                }
                ))) {
                    var u = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? a(Object(n), !0).forEach((function(t) {
                                r(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({}, e.props || {});
                    return u["data-href"] = u.href,
                    u.href = void 0,
                    i.default.cloneElement(e, u)
                }
                return i.default.cloneElement(e, {
                    key: o
                })
            }
            ))
        }
        function v(e) {
            var t = e.children
              , n = (0,
            i.useContext)(c.AmpStateContext)
              , r = (0,
            i.useContext)(s.HeadManagerContext);
            return i.default.createElement(u.default, {
                reduceComponentsToState: y,
                headManager: r,
                inAmpMode: (0,
                l.isInAmpMode)(n)
            }, t)
        }
        v.rewind = function() {}
        ;
        var m = v;
        t.default = m
    },
    60617: function(e, t, n) {
        "use strict";
        var r = n(83115)
          , a = n(2553)
          , o = n(62012)
          , i = (n(50450),
        n(9807))
          , u = n(27690)
          , c = n(99828);
        function s(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = c(e);
                if (t) {
                    var a = c(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return u(this, n)
            }
        }
        t.__esModule = !0,
        t.default = void 0;
        var l = n(67294)
          , f = function(e) {
            i(n, e);
            var t = s(n);
            function n(e) {
                var o;
                return a(this, n),
                (o = t.call(this, e))._hasHeadManager = void 0,
                o.emitChange = function() {
                    o._hasHeadManager && o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances), o.props))
                }
                ,
                o._hasHeadManager = o.props.headManager && o.props.headManager.mountedInstances,
                o
            }
            return o(n, [{
                key: "componentDidMount",
                value: function() {
                    this._hasHeadManager && this.props.headManager.mountedInstances.add(this),
                    this.emitChange()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.emitChange()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._hasHeadManager && this.props.headManager.mountedInstances.delete(this),
                    this.emitChange()
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]),
            n
        }(l.Component);
        t.default = f
    },
    70900: function(e, t, n) {
        "use strict";
        var r = n(2553)
          , a = n(62012)
          , o = n(9807)
          , i = n(27690)
          , u = n(99828);
        function c(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = u(e);
                if (t) {
                    var a = u(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return i(this, n)
            }
        }
        var s = n(62426);
        t.__esModule = !0,
        t.default = void 0;
        var l = s(n(67294))
          , f = s(n(57947))
          , d = {
            400: "Bad Request",
            404: "This page could not be found",
            405: "Method Not Allowed",
            500: "Internal Server Error"
        };
        function p(e) {
            var t = e.res
              , n = e.err;
            return {
                statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404
            }
        }
        var h = function(e) {
            o(n, e);
            var t = c(n);
            function n() {
                return r(this, n),
                t.apply(this, arguments)
            }
            return a(n, [{
                key: "render",
                value: function() {
                    var e = this.props.statusCode
                      , t = this.props.title || d[e] || "An unexpected error has occurred";
                    return l.default.createElement("div", {
                        style: y.error
                    }, l.default.createElement(f.default, null, l.default.createElement("title", null, e, ": ", t)), l.default.createElement("div", null, l.default.createElement("style", {
                        dangerouslySetInnerHTML: {
                            __html: "body { margin: 0 }"
                        }
                    }), e ? l.default.createElement("h1", {
                        style: y.h1
                    }, e) : null, l.default.createElement("div", {
                        style: y.desc
                    }, l.default.createElement("h2", {
                        style: y.h2
                    }, t, "."))))
                }
            }]),
            n
        }(l.default.Component);
        t.default = h,
        h.displayName = "ErrorPage",
        h.getInitialProps = p,
        h.origGetInitialProps = p;
        var y = {
            error: {
                color: "#000",
                background: "#fff",
                fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
                height: "100vh",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            },
            desc: {
                display: "inline-block",
                textAlign: "left",
                lineHeight: "49px",
                height: "49px",
                verticalAlign: "middle"
            },
            h1: {
                display: "inline-block",
                borderRight: "1px solid rgba(0, 0, 0,.3)",
                margin: 0,
                marginRight: "20px",
                padding: "10px 23px 10px 0",
                fontSize: "24px",
                fontWeight: 500,
                verticalAlign: "top"
            },
            h2: {
                fontSize: "14px",
                fontWeight: "normal",
                lineHeight: "inherit",
                margin: 0,
                padding: 0
            }
        }
    },
    14977: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_error", function() {
            return n(70900)
        }
        ])
    },
    38164: function(e, t, n) {
        var r = n(54360);
        e.exports = function(e) {
            if (Array.isArray(e))
                return r(e)
        }
    },
    61682: function(e) {
        e.exports = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
    },
    27381: function(e) {
        e.exports = function(e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }
    },
    95725: function(e) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    },
    83115: function(e, t, n) {
        var r = n(38164)
          , a = n(27381)
          , o = n(73585)
          , i = n(95725);
        e.exports = function(e) {
            return r(e) || a(e) || o(e) || i()
        }
    }
}, function(e) {
    e.O(0, [774, 351], (function() {
        return t = 14977,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
