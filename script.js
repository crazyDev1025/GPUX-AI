(() => {
  "use strict";
  var t,
    n,
    e,
    r,
    o,
    i = {
      8274: (t, n, e) => {
        e.d(n, { MR: () => i, PG: () => a, kr: () => o, xB: () => r });
        const r = window._pwInitialPath,
          o = !!window._pwIsPreview,
          i = !!window._pwShowStats,
          a = window.self !== window.top;
      },
      9721: (t, n, e) => {
        e.d(n, {
          Pc: () => a,
          U1: () => o,
          f9: () => r,
          gZ: () => i,
          sh: () => c,
          wj: () => s,
        });
        const r = (t, n) => (t.startsWith(n) ? t.substring(n.length) : t),
          o = (t, n) =>
            t.endsWith(n) ? t.substring(0, t.length - n.length) : t;
        function i(t) {
          let n = (function (t, n) {
            let e = t,
              i = r(e, n);
            for (; i !== e; ) (e = i), (i = r(e, n));
            for (e = i, i = o(e, n); i !== e; ) (e = i), (i = o(e, n));
            return i;
          })(t, "/");
          return (
            n.startsWith("/") || (n = `/${n}`),
            n.endsWith("/") || (n = `${n}/`),
            n
          );
        }
        function a(t) {
          try {
            const n = new URL(t);
            return n ? String(n) : `https://${t}`;
          } catch (n) {
            return `https://${t}`;
          }
        }
        function c(t, n, e) {
          const r = n || "/",
            o = e ? `#${e}` : "";
          try {
            const n = new URL(a(t));
            return (n.hash = o), (n.pathname = r), n.toString();
          } catch (t) {
            return `${r}${o}`;
          }
        }
        function s(t) {
          (t = a(t)), (t = new URL(t).pathname);
          const n = (t = (t = o(t, "/")).substring(
            t.lastIndexOf("/") + 1
          )).lastIndexOf(".");
          return n < 0 ? "" : t.substring(n + 1);
        }
      },
      6096: (t, n, e) => {
        e.d(n, { A: () => p });
        const r = function () {
          (this.__data__ = []), (this.size = 0);
        };
        var o = e(6979);
        const i = function (t, n) {
          for (var e = t.length; e--; ) if ((0, o.A)(t[e][0], n)) return e;
          return -1;
        };
        var a = Array.prototype.splice;
        const c = function (t) {
          var n = this.__data__,
            e = i(n, t);
          return (
            !(e < 0) &&
            (e == n.length - 1 ? n.pop() : a.call(n, e, 1), --this.size, !0)
          );
        };
        const s = function (t) {
          var n = this.__data__,
            e = i(n, t);
          return e < 0 ? void 0 : n[e][1];
        };
        const u = function (t) {
          return i(this.__data__, t) > -1;
        };
        const l = function (t, n) {
          var e = this.__data__,
            r = i(e, t);
          return r < 0 ? (++this.size, e.push([t, n])) : (e[r][1] = n), this;
        };
        function f(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var r = t[n];
            this.set(r[0], r[1]);
          }
        }
        (f.prototype.clear = r),
          (f.prototype.delete = c),
          (f.prototype.get = s),
          (f.prototype.has = u),
          (f.prototype.set = l);
        const p = f;
      },
      5436: (t, n, e) => {
        e.d(n, { A: () => i });
        var r = e(123),
          o = e(9600);
        const i = (0, r.A)(o.A, "Map");
      },
      3269: (t, n, e) => {
        e.d(n, { A: () => j });
        const r = (0, e(123).A)(Object, "create");
        const o = function () {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
        const i = function (t) {
          var n = this.has(t) && delete this.__data__[t];
          return (this.size -= n ? 1 : 0), n;
        };
        var a = Object.prototype.hasOwnProperty;
        const c = function (t) {
          var n = this.__data__;
          if (r) {
            var e = n[t];
            return "__lodash_hash_undefined__" === e ? void 0 : e;
          }
          return a.call(n, t) ? n[t] : void 0;
        };
        var s = Object.prototype.hasOwnProperty;
        const u = function (t) {
          var n = this.__data__;
          return r ? void 0 !== n[t] : s.call(n, t);
        };
        const l = function (t, n) {
          var e = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (e[t] = r && void 0 === n ? "__lodash_hash_undefined__" : n),
            this
          );
        };
        function f(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var r = t[n];
            this.set(r[0], r[1]);
          }
        }
        (f.prototype.clear = o),
          (f.prototype.delete = i),
          (f.prototype.get = c),
          (f.prototype.has = u),
          (f.prototype.set = l);
        const p = f;
        var d = e(6096),
          h = e(5436);
        const v = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new p(),
              map: new (h.A || d.A)(),
              string: new p(),
            });
        };
        const b = function (t) {
          var n = typeof t;
          return "string" == n ||
            "number" == n ||
            "symbol" == n ||
            "boolean" == n
            ? "__proto__" !== t
            : null === t;
        };
        const y = function (t, n) {
          var e = t.__data__;
          return b(n) ? e["string" == typeof n ? "string" : "hash"] : e.map;
        };
        const _ = function (t) {
          var n = y(this, t).delete(t);
          return (this.size -= n ? 1 : 0), n;
        };
        const g = function (t) {
          return y(this, t).get(t);
        };
        const A = function (t) {
          return y(this, t).has(t);
        };
        const w = function (t, n) {
          var e = y(this, t),
            r = e.size;
          return e.set(t, n), (this.size += e.size == r ? 0 : 1), this;
        };
        function m(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var r = t[n];
            this.set(r[0], r[1]);
          }
        }
        (m.prototype.clear = v),
          (m.prototype.delete = _),
          (m.prototype.get = g),
          (m.prototype.has = A),
          (m.prototype.set = w);
        const j = m;
      },
      3516: (t, n, e) => {
        e.d(n, { A: () => r });
        const r = e(9600).A.Symbol;
      },
      5841: (t, n, e) => {
        e.d(n, { A: () => i });
        var r = e(9333),
          o = e(9322);
        const i = function (t, n) {
          for (var e = 0, i = (n = (0, r.A)(n, t)).length; null != t && e < i; )
            t = t[(0, o.A)(n[e++])];
          return e && e == i ? t : void 0;
        };
      },
      4044: (t, n, e) => {
        e.d(n, { A: () => p });
        var r = e(3516),
          o = Object.prototype,
          i = o.hasOwnProperty,
          a = o.toString,
          c = r.A ? r.A.toStringTag : void 0;
        const s = function (t) {
          var n = i.call(t, c),
            e = t[c];
          try {
            t[c] = void 0;
            var r = !0;
          } catch (t) {}
          var o = a.call(t);
          return r && (n ? (t[c] = e) : delete t[c]), o;
        };
        var u = Object.prototype.toString;
        const l = function (t) {
          return u.call(t);
        };
        var f = r.A ? r.A.toStringTag : void 0;
        const p = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : f && f in Object(t)
            ? s(t)
            : l(t);
        };
      },
      817: (t, n, e) => {
        e.d(n, { A: () => u });
        var r = e(3516);
        const o = function (t, n) {
          for (
            var e = -1, r = null == t ? 0 : t.length, o = Array(r);
            ++e < r;

          )
            o[e] = n(t[e], e, t);
          return o;
        };
        var i = e(6956),
          a = e(4089),
          c = r.A ? r.A.prototype : void 0,
          s = c ? c.toString : void 0;
        const u = function t(n) {
          if ("string" == typeof n) return n;
          if ((0, i.A)(n)) return o(n, t) + "";
          if ((0, a.A)(n)) return s ? s.call(n) : "";
          var e = n + "";
          return "0" == e && 1 / n == -Infinity ? "-0" : e;
        };
      },
      9333: (t, n, e) => {
        e.d(n, { A: () => p });
        var r = e(6956),
          o = e(1677),
          i = e(3269);
        function a(t, n) {
          if ("function" != typeof t || (null != n && "function" != typeof n))
            throw new TypeError("Expected a function");
          var e = function () {
            var r = arguments,
              o = n ? n.apply(this, r) : r[0],
              i = e.cache;
            if (i.has(o)) return i.get(o);
            var a = t.apply(this, r);
            return (e.cache = i.set(o, a) || i), a;
          };
          return (e.cache = new (a.Cache || i.A)()), e;
        }
        a.Cache = i.A;
        const c = a;
        var s =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          u = /\\(\\)?/g;
        const l = (function (t) {
          var n = c(t, function (t) {
              return 500 === e.size && e.clear(), t;
            }),
            e = n.cache;
          return n;
        })(function (t) {
          var n = [];
          return (
            46 === t.charCodeAt(0) && n.push(""),
            t.replace(s, function (t, e, r, o) {
              n.push(r ? o.replace(u, "$1") : e || t);
            }),
            n
          );
        });
        var f = e(2021);
        const p = function (t, n) {
          return (0, r.A)(t) ? t : (0, o.A)(t, n) ? [t] : l((0, f.A)(t));
        };
      },
      6713: (t, n, e) => {
        e.d(n, { A: () => r });
        const r =
          "object" == typeof global &&
          global &&
          global.Object === Object &&
          global;
      },
      123: (t, n, e) => {
        e.d(n, { A: () => _ });
        var r = e(405);
        const o = e(9600).A["__core-js_shared__"];
        var i,
          a = (i = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + i
            : "";
        const c = function (t) {
          return !!a && a in t;
        };
        var s = e(7942),
          u = e(1548),
          l = /^\[object .+?Constructor\]$/,
          f = Function.prototype,
          p = Object.prototype,
          d = f.toString,
          h = p.hasOwnProperty,
          v = RegExp(
            "^" +
              d
                .call(h)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        const b = function (t) {
          return (
            !(!(0, s.A)(t) || c(t)) && ((0, r.A)(t) ? v : l).test((0, u.A)(t))
          );
        };
        const y = function (t, n) {
          return null == t ? void 0 : t[n];
        };
        const _ = function (t, n) {
          var e = y(t, n);
          return b(e) ? e : void 0;
        };
      },
      1677: (t, n, e) => {
        e.d(n, { A: () => c });
        var r = e(6956),
          o = e(4089),
          i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/;
        const c = function (t, n) {
          if ((0, r.A)(t)) return !1;
          var e = typeof t;
          return (
            !(
              "number" != e &&
              "symbol" != e &&
              "boolean" != e &&
              null != t &&
              !(0, o.A)(t)
            ) ||
            a.test(t) ||
            !i.test(t) ||
            (null != n && t in Object(n))
          );
        };
      },
      9600: (t, n, e) => {
        e.d(n, { A: () => i });
        var r = e(6713),
          o = "object" == typeof self && self && self.Object === Object && self;
        const i = r.A || o || Function("return this")();
      },
      9322: (t, n, e) => {
        e.d(n, { A: () => o });
        var r = e(4089);
        const o = function (t) {
          if ("string" == typeof t || (0, r.A)(t)) return t;
          var n = t + "";
          return "0" == n && 1 / t == -Infinity ? "-0" : n;
        };
      },
      1548: (t, n, e) => {
        e.d(n, { A: () => o });
        var r = Function.prototype.toString;
        const o = function (t) {
          if (null != t) {
            try {
              return r.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        };
      },
      6979: (t, n, e) => {
        e.d(n, { A: () => r });
        const r = function (t, n) {
          return t === n || (t != t && n != n);
        };
      },
      385: (t, n, e) => {
        e.d(n, { A: () => o });
        var r = e(5841);
        const o = function (t, n, e) {
          var o = null == t ? void 0 : (0, r.A)(t, n);
          return void 0 === o ? e : o;
        };
      },
      6956: (t, n, e) => {
        e.d(n, { A: () => r });
        const r = Array.isArray;
      },
      405: (t, n, e) => {
        e.d(n, { A: () => i });
        var r = e(4044),
          o = e(7942);
        const i = function (t) {
          if (!(0, o.A)(t)) return !1;
          var n = (0, r.A)(t);
          return (
            "[object Function]" == n ||
            "[object GeneratorFunction]" == n ||
            "[object AsyncFunction]" == n ||
            "[object Proxy]" == n
          );
        };
      },
      7942: (t, n, e) => {
        e.d(n, { A: () => r });
        const r = function (t) {
          var n = typeof t;
          return null != t && ("object" == n || "function" == n);
        };
      },
      7313: (t, n, e) => {
        e.d(n, { A: () => r });
        const r = function (t) {
          return null != t && "object" == typeof t;
        };
      },
      4089: (t, n, e) => {
        e.d(n, { A: () => i });
        var r = e(4044),
          o = e(7313);
        const i = function (t) {
          return (
            "symbol" == typeof t ||
            ((0, o.A)(t) && "[object Symbol]" == (0, r.A)(t))
          );
        };
      },
      2021: (t, n, e) => {
        e.d(n, { A: () => o });
        var r = e(817);
        const o = function (t) {
          return null == t ? "" : (0, r.A)(t);
        };
      },
    },
    a = {};
  function c(t) {
    var n = a[t];
    if (void 0 !== n) return n.exports;
    var e = (a[t] = { exports: {} });
    return i[t].call(e.exports, e, e.exports, c), e.exports;
  }
  (c.m = i),
    (c.n = (t) => {
      var n = t && t.__esModule ? () => t.default : () => t;
      return c.d(n, { a: n }), n;
    }),
    (c.d = (t, n) => {
      for (var e in n)
        c.o(n, e) &&
          !c.o(t, e) &&
          Object.defineProperty(t, e, { enumerable: !0, get: n[e] });
    }),
    (c.f = {}),
    (c.e = (t) =>
      Promise.all(Object.keys(c.f).reduce((n, e) => (c.f[e](t, n), n), []))),
    (c.u = (t) => t + ".script.js"),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (t = {}),
    (n = "pwb-website-base:"),
    (c.l = (e, r, o, i) => {
      if (t[e]) t[e].push(r);
      else {
        var a, s;
        if (void 0 !== o)
          for (
            var u = document.getElementsByTagName("script"), l = 0;
            l < u.length;
            l++
          ) {
            var f = u[l];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == n + o
            ) {
              a = f;
              break;
            }
          }
        a ||
          ((s = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          c.nc && a.setAttribute("nonce", c.nc),
          a.setAttribute("data-webpack", n + o),
          (a.src = e)),
          (t[e] = [r]);
        var p = (n, r) => {
            (a.onerror = a.onload = null), clearTimeout(d);
            var o = t[e];
            if (
              (delete t[e],
              a.parentNode && a.parentNode.removeChild(a),
              o && o.forEach((t) => t(r)),
              n)
            )
              return n(r);
          },
          d = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: a }),
            12e4
          );
        (a.onerror = p.bind(null, a.onerror)),
          (a.onload = p.bind(null, a.onload)),
          s && document.head.appendChild(a);
      }
    }),
    (c.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      var t;
      c.g.importScripts && (t = c.g.location + "");
      var n = c.g.document;
      if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
        var e = n.getElementsByTagName("script");
        if (e.length)
          for (var r = e.length - 1; r > -1 && (!t || !/^http(s?):/.test(t)); )
            t = e[r--].src;
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (c.p = t);
    })(),
    (() => {
      var t = { 792: 0 };
      c.f.j = (n, e) => {
        var r = c.o(t, n) ? t[n] : void 0;
        if (0 !== r)
          if (r) e.push(r[2]);
          else {
            var o = new Promise((e, o) => (r = t[n] = [e, o]));
            e.push((r[2] = o));
            var i = c.p + c.u(n),
              a = new Error();
            c.l(
              i,
              (e) => {
                if (c.o(t, n) && (0 !== (r = t[n]) && (t[n] = void 0), r)) {
                  var o = e && ("load" === e.type ? "missing" : e.type),
                    i = e && e.target && e.target.src;
                  (a.message =
                    "Loading chunk " + n + " failed.\n(" + o + ": " + i + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = o),
                    (a.request = i),
                    r[1](a);
                }
              },
              "chunk-" + n,
              n
            );
          }
      };
      var n = (n, e) => {
          var r,
            o,
            [i, a, s] = e,
            u = 0;
          if (i.some((n) => 0 !== t[n])) {
            for (r in a) c.o(a, r) && (c.m[r] = a[r]);
            if (s) s(c);
          }
          for (n && n(e); u < i.length; u++)
            (o = i[u]), c.o(t, o) && t[o] && t[o][0](), (t[o] = 0);
        },
        e = (self.webpackChunkpwb_website_base =
          self.webpackChunkpwb_website_base || []);
      e.forEach(n.bind(null, 0)), (e.push = n.bind(null, e.push.bind(e)));
    })(),
    (e = c(385)),
    (r = c(9721)),
    (o = c(8274)),
    (function () {
      const t = navigator.userAgent || navigator.vendor,
        n = (0, r.U1)(window.location.href, "/"),
        o =
          !!(0, e.A)(window, "TelegramWebview") ||
          !!(0, e.A)(window, "TelegramWebviewProxy");
      if (
        ["Instagram", "LinkedIn", "FBAN", "FBAV", "Slack", "Twitter"].some(
          (n) => t.includes(n)
        ) ||
        o
      ) {
        const e = !!t.match(/iPhone|iPad|iPod/i);
        window.location.replace(e ? `x-safari-${n}` : `intent:${n}#Intent;end`);
      }
    })(),
    o.kr &&
      c
        .e(555)
        .then(c.bind(c, 2555))
        .then((t) => {
          t.default();
        }),
    Promise.all([c.e(240), c.e(545)])
      .then(c.bind(c, 1545))
      .then((t) => {
        t.default();
      });
})();
