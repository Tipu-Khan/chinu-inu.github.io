(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    86430: function(n, e, r) {
        "use strict";
        r.r(e),
        r.d(e, {
            default: function() {
                return l
            }
        });
        var t = r(85893);
        function o(n, e, r) {
            return e in n ? Object.defineProperty(n, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = r,
            n
        }
        r(94299),
        r(98949);
        var c = r(51355)
          , u = r(94660)
          , i = (0,
        c.xC)({
            reducer: {
                common: u.ZP
            }
        })
          , s = r(17714)
          , f = (r(32577),
        r(1818))
          , a = r.n(f);
        function p(n, e) {
            var r = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(n);
                e && (t = t.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                r.push.apply(r, t)
            }
            return r
        }
        function b(n) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? p(Object(r), !0).forEach((function(e) {
                    o(n, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return n
        }
        var l = function(n) {
            var e = n.Component
              , r = n.pageProps;
            return (0,
            t.jsxs)(s.zt, {
                store: i,
                children: [(0,
                t.jsx)(a(), {}), (0,
                t.jsx)(e, b({}, r))]
            })
        }
    },
    94660: function(n, e, r) {
        "use strict";
        r.d(e, {
            hv: function() {
                return o
            },
            y_: function() {
                return c
            }
        });
        var t = (0,
        r(51355).oM)({
            name: "common",
            initialState: {
                address: null
            },
            reducers: {
                setAccount: function(n, e) {
                    n.address = e.payload
                }
            }
        })
          , o = t.actions.setAccount
          , c = function(n) {
            return n.common.address
        };
        e.ZP = t.reducer
    },
    81780: function(n, e, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return r(86430)
        }
        ])
    },
    32577: function() {},
    94299: function() {},
    98949: function() {}
}, function(n) {
    var e = function(e) {
        return n(n.s = e)
    };
    n.O(0, [774, 152, 351, 219], (function() {
        return e(81780),
        e(72441)
    }
    ));
    var r = n.O();
    _N_E = r
}
]);
