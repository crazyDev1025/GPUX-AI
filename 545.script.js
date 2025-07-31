"use strict";
(self.webpackChunkpwb_website_base =
  self.webpackChunkpwb_website_base || []).push([
  [545],
  {
    9053: (e, t, n) => {
      n.d(t, { D: () => r, x: () => i });
      var o = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      function i(e) {
        return o(this, void 0, void 0, function* () {
          if (!window._pwLoadFileFromCache)
            throw new Error("Load file from cache function missing.");
          return yield window._pwLoadFileFromCache(e);
        });
      }
      function r(e, t) {
        window._pwSetFileCache && window._pwSetFileCache(e, t);
      }
    },
    1545: (e, t, n) => {
      var o, i, r;
      n.r(t),
        n.d(t, {
          currentPath: () => Ra,
          currentSectionHash: () => xa,
          default: () => ja,
          navigateTo: () => Da,
        }),
        (function (e) {
          (e.Position = "position"),
            (e.Spacing = "spacing"),
            (e.Size = "size"),
            (e.Layout = "layout"),
            (e.Style = "style"),
            (e.Font = "font"),
            (e.Image = "image"),
            (e.Video = "video"),
            (e.Link = "link"),
            (e.Scene = "scene"),
            (e.ScrollSection = "scrollSection"),
            (e.Effects = "effects"),
            (e.Audio = "audio"),
            (e.AudioStyle = "audioStyle"),
            (e.Interactions = "interactions"),
            (e.RelativeOverlay = "relativeOverlay"),
            (e.LoadingBar = "loadingBar"),
            (e.States = "states"),
            (e.Anchor = "anchor"),
            (e.Embed = "embed");
        })(o || (o = {})),
        (function (e) {
          (e.Wrapper = "wrapper"),
            (e.Text = "text"),
            (e.TextNode = "textnode"),
            (e.Block = "block"),
            (e.Rows = "rows"),
            (e.Columns = "columns"),
            (e.Grid = "grid"),
            (e.Image = "image"),
            (e.Video = "video"),
            (e.Background = "background"),
            (e.Scene = "scene"),
            (e.LinkBox = "link"),
            (e.Audio = "audio"),
            (e.RelativeOverlay = "relativeOverlay"),
            (e.LoadingBar = "loadingBar"),
            (e.Anchor = "anchor"),
            (e.Embed = "embed");
        })(i || (i = {})),
        (function (e) {
          (e.Auto = ""), (e.Eager = "eager"), (e.Lazy = "lazy");
        })(r || (r = {}));
      const s = "pwb-loading-wrap",
        a = "pwb-body-wrap",
        c = "pwb-error-page-wrap";
      var l,
        u,
        d,
        f,
        p,
        h,
        m,
        g,
        y,
        v,
        b,
        w,
        _,
        S,
        E = n(5062);
      !(function (e) {
        (e[(e.Raycast = 1)] = "Raycast"),
          (e[(e.Helpers = 2)] = "Helpers"),
          (e[(e.HelpersRaycast = 3)] = "HelpersRaycast");
      })(l || (l = {})),
        (function (e) {
          (e[(e.Low = 512)] = "Low"),
            (e[(e.Normal = 1024)] = "Normal"),
            (e[(e.High = 2048)] = "High");
        })(u || (u = {})),
        (function (e) {
          (e[(e.Low = 256)] = "Low"),
            (e[(e.Normal = 512)] = "Normal"),
            (e[(e.High = 1024)] = "High");
        })(d || (d = {})),
        (function (e) {
          (e.Imported = "IMPORTED"),
            (e.Scene = "SCENE"),
            (e.Mesh = "MESH"),
            (e.Group = " GROUP"),
            (e.Light = "LIGHT"),
            (e.Camera = "CAMERA"),
            (e.Water = "Water"),
            (e.Html = "HTML");
        })(f || (f = {})),
        (function (e) {
          (e.Plane = "PLANE"),
            (e.Box = "BOX"),
            (e.Sphere = "SPHERE"),
            (e.Cylinder = "CYLINDER"),
            (e.Cone = "CONE"),
            (e.Torus = "TORUS");
        })(p || (p = {})),
        (function (e) {
          (e.Perspective = "PERSPECTIVE"), (e.Orthographic = "ORTHOGRAPHIC");
        })(h || (h = {})),
        (function (e) {
          (e.Directional = "DIRECTIONAL"),
            (e.Ambient = "AMBIENT"),
            (e.Spot = "SPOT"),
            (e.Point = "POINT");
        })(m || (m = {})),
        (function (e) {
          (e.Unlit = "UNLIT"),
            (e.Lit = "LIT"),
            (e.Physical = "PHYSICAL"),
            (e.Phong = "PHONG");
        })(g || (g = {})),
        (function (e) {
          (e.Front = "FRONT"), (e.Back = "BACK"), (e.Double = "DOUBLE");
        })(y || (y = {})),
        (function (e) {
          (e.Gltf = "GLTF"),
            (e.FBX = "FBX"),
            (e.Obj = "OBJ"),
            (e.Texture = "TEXTURE"),
            (e.VideoTexture = "VIDEO_TEXTURE"),
            (e.EXRTexture = "EXR_TEXTURE"),
            (e.HDRTexture = "HDR_TEXTURE"),
            (e.Environment = "ENVIRONMENT");
        })(v || (v = {})),
        (function (e) {
          (e[(e.Low = 256)] = "Low"),
            (e[(e.Normal = 512)] = "Normal"),
            (e[(e.High = 1024)] = "High");
        })(b || (b = {})),
        (function (e) {
          (e.Clamp = "Clamp"),
            (e.Repeat = "Repeat"),
            (e.MirroredRepeat = "MirroredRepeat");
        })(w || (w = {})),
        (function (e) {
          (e.Absolute = "ABSOLUTE"), (e.Relative = "RELATIVE");
        })(_ || (_ = {})),
        (function (e) {
          (e.Tilt = "TILT"), (e.Pan = "PAN");
        })(S || (S = {}));
      const O = !1,
        P = "imported_texture",
        T =
          (f.Group,
          f.Water,
          f.Scene,
          f.Mesh,
          p.Box,
          p.Plane,
          p.Sphere,
          p.Cylinder,
          p.Cone,
          p.Torus,
          f.Camera,
          h.Perspective,
          h.Orthographic,
          f.Light,
          m.Ambient,
          m.Directional,
          m.Point,
          m.Spot,
          ["opacity", "color", "aoMapIntensity"]),
        M = {
          [g.Unlit]: [...T, "reflectivity"],
          [g.Lit]: [
            ...T,
            "emissive",
            "roughness",
            "metalness",
            "displacementScale",
            "emissiveIntensity",
          ],
          [g.Physical]: [
            ...T,
            "emissive",
            "roughness",
            "metalness",
            "displacementScale",
            "emissiveIntensity",
            "attenuationDistance",
            "attenuationColor",
            "clearcoat",
            "clearcoatRoughness",
            "dispersion",
            "thickness",
            "transmission",
            "ior",
            "iridescence",
            "iridescenceIOR",
            "reflectivity",
            "specularIntensity",
            "specularColor",
            "sheen",
            "sheenColor",
            "sheenRoughness",
          ],
          [g.Phong]: [
            ...T,
            "emissive",
            "reflectivity",
            "displacementScale",
            "bumpScale",
            "emissive",
            "refractionRatio",
            "shininess",
            "specular",
            "emissiveIntensity",
          ],
        },
        R =
          (g.Unlit,
          new Set(M[g.Unlit]),
          g.Phong,
          new Set(M[g.Phong]),
          g.Lit,
          new Set(M[g.Lit]),
          g.Physical,
          new Set(M[g.Physical]),
          {
            MeshStandardMaterial: g.Lit,
            MeshPhysicalMaterial: g.Physical,
            MeshBasicMaterial: g.Unlit,
            MeshPhongMaterial: g.Phong,
          }),
        x = { [w.Clamp]: E.ghU, [w.Repeat]: E.GJx, [w.MirroredRepeat]: E.kTW },
        C = 768,
        A = 992;
      var k, D, I, j, N;
      !(function (e) {
        (e.External = "external"), (e.Internal = "internal");
      })(k || (k = {})),
        (function (e) {
          (e.Canvases = "canvases"),
            (e.Sections = "sections"),
            (e.Links = "links"),
            (e.ScrollAnimations = "scrollAnimations"),
            (e.Audio = "audio"),
            (e.AudioStyle = "audioStyle"),
            (e.Anchor = "anchor");
        })(D || (D = {})),
        (function (e) {
          (e.Interactions = "interactions"),
            (e.RelativeOverlays = "relativeOverlays"),
            (e.Anchors = "anchors");
        })(I || (I = {})),
        (function (e) {
          (e.Mobile = "mobile"), (e.Tablet = "tablet"), (e.Desktop = "desktop");
        })(j || (j = {})),
        (function (e) {
          (e.Native = "native"), (e.Smooth = "smooth");
        })(N || (N = {}));
      var L = n(9721),
        B = n(7417),
        F = n(9053),
        U = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, r) {
            function s(e) {
              try {
                c(o.next(e));
              } catch (e) {
                r(e);
              }
            }
            function a(e) {
              try {
                c(o.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, a);
            }
            c((o = o.apply(e, t || [])).next());
          });
        };
      const V = (e, t, n = "/") =>
          U(void 0, void 0, void 0, function* () {
            const o = `${(0, L.gZ)(n)}${e}`,
              i = yield (0, F.x)(o);
            if (!i) throw new Error(`Failed to fetch "${o}".`);
            const r = yield fetch(i),
              s = r.headers.get("content-type") || "";
            if (!s.includes(t))
              throw new Error(
                `Unexpected content type "${s}" for file "${o}".`
              );
            return r;
          }),
        H = (e, t) =>
          U(void 0, void 0, void 0, function* () {
            const n = (t) => {
              var n, o;
              const i =
                null === (n = e.devices[t]) || void 0 === n
                  ? void 0
                  : n.canvases;
              if (i)
                return null === (o = Object.values(i)[0]) || void 0 === o
                  ? void 0
                  : o.sceneId;
            };
            let o = n(t);
            for (; t !== j.Desktop && void 0 === o; )
              t === j.Mobile
                ? (t = j.Tablet)
                : t === j.Tablet && (t = j.Desktop),
                (o = n(t));
            if (!o || "None" === o) return null;
            const i = yield V(
              `${B.lx.SceneState}/${o}.json`,
              "application/json"
            );
            return yield i.json();
          }),
        z = (e) =>
          U(void 0, void 0, void 0, function* () {
            const t = yield V(`${B.lx.UIState}`, "application/json", e);
            return yield t.json();
          }),
        W = (e) =>
          U(void 0, void 0, void 0, function* () {
            const t = yield V(B.lx.Index, "text/html", e);
            return yield t.text();
          }),
        $ = (e) =>
          U(void 0, void 0, void 0, function* () {
            const t = yield V(B.lx.Styles, "text/css", e);
            return yield t.text();
          }),
        G = () =>
          U(void 0, void 0, void 0, function* () {
            const e = yield V(B.lx.ErrorPage, "text/html");
            return yield e.text();
          }),
        q = () =>
          U(void 0, void 0, void 0, function* () {
            const e = yield V(B.lx.ErrorPageStyles, "text/css");
            return yield e.text();
          });
      var Y = n(385),
        X = n(8938),
        K = n(4441);
      const J = new WeakMap(),
        Q = new WeakMap(),
        Z = Symbol("pointerMeta"),
        ee = {
          get(e, t) {
            if (t === Z) return J.get(e);
            let n = Q.get(e);
            n || ((n = new Map()), Q.set(e, n));
            const o = n.get(t);
            if (void 0 !== o) return o;
            const i = J.get(e),
              r = oe({ root: i.root, path: [...i.path, t] });
            return n.set(t, r), r;
          },
        },
        te = (e) => e[Z],
        ne = (e) => {
          const { root: t, path: n } = te(e);
          return { root: t, path: n };
        };
      function oe(e) {
        var t;
        const n = {
            root: e.root,
            path: null !== (t = e.path) && void 0 !== t ? t : [],
          },
          o = {};
        return J.set(o, n), new Proxy(o, ee);
      }
      const ie = oe,
        re = (e) => e && !!te(e);
      const se = (e, t, n) => {
        if (0 === t.length) return n(e);
        if (Array.isArray(e)) {
          let [o, ...i] = t;
          (o = parseInt(String(o), 10)), isNaN(o) && (o = 0);
          const r = e[o],
            s = se(r, i, n);
          if (r === s) return e;
          const a = [...e];
          return a.splice(o, 1, s), a;
        }
        if ("object" == typeof e && null !== e) {
          const [o, ...i] = t,
            r = e[o],
            s = se(r, i, n);
          if (r === s) return e;
          return Object.assign(Object.assign({}, e), { [o]: s });
        }
        {
          const [e, ...o] = t;
          return { [e]: se(void 0, o, n) };
        }
      };
      class ae {
        constructor() {
          this._head = void 0;
        }
        peek() {
          return this._head && this._head.data;
        }
        pop() {
          const e = this._head;
          if (e) return (this._head = e.next), e.data;
        }
        push(e) {
          const t = { next: this._head, data: e };
          this._head = t;
        }
      }
      function ce() {
        const e = new ae(),
          t = () => {};
        return {
          type: "Dataverse_discoveryMechanism",
          startIgnoringDependencies: () => {
            e.push(t);
          },
          stopIgnoringDependencies: () => {
            e.peek() !== t || e.pop();
          },
          reportResolutionStart: (n) => {
            const o = e.peek();
            o && o(n), e.push(t);
          },
          reportResolutionEnd: (t) => {
            e.pop();
          },
          pushCollector: (t) => {
            e.push(t);
          },
          popCollector: (t) => {
            if (e.peek() !== t)
              throw new Error("Popped collector is not on top of the stack");
            e.pop();
          },
        };
      }
      const {
          startIgnoringDependencies: le,
          stopIgnoringDependencies: ue,
          reportResolutionEnd: de,
          reportResolutionStart: fe,
          pushCollector: pe,
          popCollector: he,
        } = (function () {
          const e = "__dataverse_discoveryMechanism_sharedStack",
            t =
              "undefined" != typeof window ? window : void 0 !== n.g ? n.g : {};
          if (t) {
            const n = t[e];
            if (
              n &&
              "object" == typeof n &&
              "Dataverse_discoveryMechanism" === n.type
            )
              return n;
            {
              const n = ce();
              return (t[e] = n), n;
            }
          }
          return ce();
        })(),
        me = () => {};
      class ge {
        constructor(e, t) {
          (this._fn = e),
            (this._prismInstance = t),
            (this._didMarkDependentsAsStale = !1),
            (this._isFresh = !1),
            (this._cacheOfDendencyValues = new Map()),
            (this._dependents = new Set()),
            (this._dependencies = new Set()),
            (this._possiblyStaleDeps = new Set()),
            (this._scope = new be(this)),
            (this._lastValue = void 0),
            (this._forciblySetToStale = !1),
            (this._reactToDependencyGoingStale = (e) => {
              this._possiblyStaleDeps.add(e), this._markAsStale();
            });
          for (const e of this._dependencies)
            e._addDependent(this._reactToDependencyGoingStale);
          le(), this.getValue(), ue();
        }
        get hasDependents() {
          return this._dependents.size > 0;
        }
        removeDependent(e) {
          this._dependents.delete(e);
        }
        addDependent(e) {
          this._dependents.add(e);
        }
        destroy() {
          for (const e of this._dependencies)
            e._removeDependent(this._reactToDependencyGoingStale);
          we(this._scope);
        }
        getValue() {
          if (!this._isFresh) {
            const e = this._recalculate();
            (this._lastValue = e),
              (this._isFresh = !0),
              (this._didMarkDependentsAsStale = !1),
              (this._forciblySetToStale = !1);
          }
          return this._lastValue;
        }
        _recalculate() {
          let e;
          if (!this._forciblySetToStale && this._possiblyStaleDeps.size > 0) {
            let e = !1;
            le();
            for (const t of this._possiblyStaleDeps)
              if (this._cacheOfDendencyValues.get(t) !== t.getValue()) {
                e = !0;
                break;
              }
            if ((ue(), this._possiblyStaleDeps.clear(), !e))
              return this._lastValue;
          }
          const t = new Set();
          this._cacheOfDendencyValues.clear();
          const n = (e) => {
            t.add(e), this._addDependency(e);
          };
          pe(n), Se.push(this._scope);
          try {
            e = this._fn();
          } catch (e) {
            console.error(e);
          } finally {
            Se.pop() !== this._scope &&
              console.warn("The Prism hook stack has slipped. This is a bug.");
          }
          he(n);
          for (const e of this._dependencies)
            t.has(e) || this._removeDependency(e);
          (this._dependencies = t), le();
          for (const e of t) this._cacheOfDendencyValues.set(e, e.getValue());
          return ue(), e;
        }
        forceStale() {
          (this._forciblySetToStale = !0), this._markAsStale();
        }
        _markAsStale() {
          if (!this._didMarkDependentsAsStale) {
            (this._didMarkDependentsAsStale = !0), (this._isFresh = !1);
            for (const e of this._dependents) e(this._prismInstance);
          }
        }
        _addDependency(e) {
          this._dependencies.has(e) ||
            (this._dependencies.add(e),
            e._addDependent(this._reactToDependencyGoingStale));
        }
        _removeDependency(e) {
          this._dependencies.has(e) &&
            (this._dependencies.delete(e),
            e._removeDependent(this._reactToDependencyGoingStale));
        }
      }
      const ye = {};
      class ve {
        constructor(e) {
          (this._fn = e),
            (this.isPrism = !0),
            (this._state = { hot: !1, handle: void 0 });
        }
        get isHot() {
          return this._state.hot;
        }
        onChange(e, t, n = !1) {
          const o = () => {
            e.onThisOrNextTick(r);
          };
          let i = ye;
          const r = () => {
            const e = this.getValue();
            e !== i && ((i = e), t(e));
          };
          this._addDependent(o), n && ((i = this.getValue()), t(i));
          return () => {
            this._removeDependent(o), e.offThisOrNextTick(r), e.offNextTick(r);
          };
        }
        onStale(e) {
          const t = () => e();
          return (
            this._addDependent(t),
            () => {
              this._removeDependent(t);
            }
          );
        }
        keepHot() {
          return this.onStale(() => {});
        }
        _addDependent(e) {
          this._state.hot || this._goHot(), this._state.handle.addDependent(e);
        }
        _goHot() {
          const e = new ge(this._fn, this);
          this._state = { hot: !0, handle: e };
        }
        _removeDependent(e) {
          const t = this._state;
          if (!t.hot) return;
          const n = t.handle;
          n.removeDependent(e),
            n.hasDependents ||
              ((this._state = { hot: !1, handle: void 0 }), n.destroy());
        }
        getValue() {
          fe(this);
          const e = this._state;
          let t;
          return (
            (t = e.hot
              ? e.handle.getValue()
              : (function (e) {
                  const t = new Te();
                  let n;
                  Se.push(t);
                  try {
                    n = e();
                  } catch (e) {
                    console.error(e);
                  } finally {
                    Se.pop() !== t &&
                      console.warn(
                        "The Prism hook stack has slipped. This is a bug."
                      );
                  }
                  return n;
                })(this._fn)),
            de(this),
            t
          );
        }
      }
      class be {
        constructor(e) {
          (this._hotHandle = e),
            (this._refs = new Map()),
            (this.isPrismScope = !0),
            (this.subs = {}),
            (this.effects = new Map()),
            (this.memos = new Map());
        }
        ref(e, t) {
          const n = this._refs.get(e);
          if (void 0 !== n) return n;
          {
            const n = { current: t };
            return this._refs.set(e, n), n;
          }
        }
        effect(e, t, n) {
          let o = this.effects.get(e);
          void 0 === o &&
            ((o = { cleanup: me, deps: void 0 }), this.effects.set(e, o)),
            Ee(o.deps, n) &&
              (o.cleanup(),
              le(),
              (o.cleanup = _e(t, me).value),
              ue(),
              (o.deps = n));
        }
        memo(e, t, n) {
          let o = this.memos.get(e);
          return (
            void 0 === o &&
              ((o = { cachedValue: null, deps: void 0 }), this.memos.set(e, o)),
            Ee(o.deps, n) &&
              (le(), (o.cachedValue = _e(t, void 0).value), ue(), (o.deps = n)),
            o.cachedValue
          );
        }
        state(e, t) {
          const { value: n, setValue: o } = this.memo(
            "state/" + e,
            () => {
              const e = { current: t };
              return {
                value: e,
                setValue: (t) => {
                  (e.current = t), this._hotHandle.forceStale();
                },
              };
            },
            []
          );
          return [n.current, o];
        }
        sub(e) {
          return (
            this.subs[e] || (this.subs[e] = new be(this._hotHandle)),
            this.subs[e]
          );
        }
        cleanupEffects() {
          for (const e of this.effects.values()) _e(e.cleanup, void 0);
          this.effects.clear();
        }
        source(e, t) {
          return (
            this.effect(
              "$$source/blah",
              () =>
                e(() => {
                  this._hotHandle.forceStale();
                }),
              [e]
            ),
            t()
          );
        }
      }
      function we(e) {
        for (const t of Object.values(e.subs)) we(t);
        e.cleanupEffects();
      }
      function _e(e, t) {
        try {
          return { value: e(), ok: !0 };
        } catch (e) {
          return (
            setTimeout(function () {
              throw e;
            }),
            { value: t, ok: !1 }
          );
        }
      }
      const Se = new ae();
      function Ee(e, t) {
        if (void 0 === e || void 0 === t) return !0;
        const n = e.length;
        if (n !== t.length) return !0;
        for (let o = 0; o < n; o++) if (e[o] !== t[o]) return !0;
        return !1;
      }
      function Oe(e, t, n) {
        const o = Se.peek();
        if (!o)
          throw new Error("prism.memo() is called outside of a prism() call.");
        return o.memo(e, t, n);
      }
      const Pe = (e) => new ve(e);
      class Te {
        effect(e, t, n) {
          console.warn("prism.effect() does not run in cold prisms");
        }
        memo(e, t, n) {
          return t();
        }
        state(e, t) {
          return [t, () => {}];
        }
        ref(e, t) {
          return { current: t };
        }
        sub(e) {
          return new Te();
        }
        source(e, t) {
          return t();
        }
      }
      (Pe.ref = function (e, t) {
        const n = Se.peek();
        if (!n)
          throw new Error("prism.ref() is called outside of a prism() call.");
        return n.ref(e, t);
      }),
        (Pe.effect = function (e, t, n) {
          const o = Se.peek();
          if (!o)
            throw new Error(
              "prism.effect() is called outside of a prism() call."
            );
          return o.effect(e, t, n);
        }),
        (Pe.memo = Oe),
        (Pe.ensurePrism = function () {
          if (!Se.peek())
            throw new Error(
              "The parent function is called outside of a prism() call."
            );
        }),
        (Pe.state = function (e, t) {
          const n = Se.peek();
          if (!n)
            throw new Error(
              "prism.state() is called outside of a prism() call."
            );
          return n.state(e, t);
        }),
        (Pe.scope = function (e, t) {
          const n = Se.peek();
          if (!n)
            throw new Error(
              "prism.scope() is called outside of a prism() call."
            );
          const o = n.sub(e);
          Se.push(o);
          const i = _e(t, void 0).value;
          return Se.pop(), i;
        }),
        (Pe.sub = function (e, t, n) {
          return Oe(e, () => Pe(t), n).getValue();
        }),
        (Pe.inPrism = function () {
          return !!Se.peek();
        }),
        (Pe.source = function (e, t) {
          const n = Se.peek();
          if (!n)
            throw new Error(
              "prism.source() is called outside of a prism() call."
            );
          return n.source(e, t);
        });
      const Me = Pe;
      var Re;
      !(function (e) {
        (e[(e.Dict = 0)] = "Dict"),
          (e[(e.Array = 1)] = "Array"),
          (e[(e.Other = 2)] = "Other");
      })(Re || (Re = {}));
      const xe = (e) =>
          Array.isArray(e) ? Re.Array : (0, X.A)(e) ? Re.Dict : Re.Other,
        Ce = (e, t, n = xe(e)) =>
          (n === Re.Dict && "string" == typeof t) || (n === Re.Array && Ae(t))
            ? e[t]
            : void 0,
        Ae = (e) => {
          const t = "number" == typeof e ? e : parseInt(e, 10);
          return !isNaN(t) && t >= 0 && t < 1 / 0 && (0 | t) === t;
        };
      class ke {
        constructor(e, t) {
          (this._parent = e),
            (this._path = t),
            (this.children = new Map()),
            (this.identityChangeListeners = new Set());
        }
        addIdentityChangeListener(e) {
          this.identityChangeListeners.add(e);
        }
        removeIdentityChangeListener(e) {
          this.identityChangeListeners.delete(e), this._checkForGC();
        }
        removeChild(e) {
          this.children.delete(e), this._checkForGC();
        }
        getChild(e) {
          return this.children.get(e);
        }
        getOrCreateChild(e) {
          let t = this.children.get(e);
          return (
            t ||
              ((t = t = new ke(this, this._path.concat([e]))),
              this.children.set(e, t)),
            t
          );
        }
        _checkForGC() {
          this.identityChangeListeners.size > 0 ||
            this.children.size > 0 ||
            (this._parent && this._parent.removeChild((0, K.A)(this._path)));
        }
      }
      class De {
        constructor(e) {
          (this.$$isPointerToPrismProvider = !0),
            (this.pointer = ie({ root: this, path: [] })),
            (this.prism = this.pointerToPrism(this.pointer)),
            (this.onChangeByPointer = (e, t) => {
              const n = re(e) ? e : e(this.pointer),
                { path: o } = ne(n),
                i = this._getOrCreateScopeForPath(o);
              i.identityChangeListeners.add(t);
              return () => {
                i.identityChangeListeners.delete(t);
              };
            }),
            (this._currentState = e),
            (this._rootScope = new ke(void 0, []));
        }
        set(e) {
          const t = this._currentState;
          (this._currentState = e), this._checkUpdates(this._rootScope, t, e);
        }
        get() {
          return this._currentState;
        }
        getByPointer(e) {
          const t = re(e) ? e : e(this.pointer),
            n = ne(t).path;
          return this._getIn(n);
        }
        _getIn(e) {
          return 0 === e.length ? this.get() : (0, Y.A)(this.get(), e);
        }
        reduce(e) {
          this.set(e(this.get()));
        }
        reduceByPointer(e, t) {
          const n = re(e) ? e : e(this.pointer),
            o = ne(n).path,
            i = (function (e, t, n) {
              return 0 === t.length ? n(e) : se(e, t, n);
            })(this.get(), o, t);
          this.set(i);
        }
        setByPointer(e, t) {
          this.reduceByPointer(e, () => t);
        }
        _checkUpdates(e, t, n) {
          if (t === n) return;
          for (const t of e.identityChangeListeners) t(n);
          if (0 === e.children.size) return;
          const o = xe(t),
            i = xe(n);
          if (o !== Re.Other || o !== i)
            for (const [r, s] of e.children) {
              const e = Ce(t, r, o),
                a = Ce(n, r, i);
              this._checkUpdates(s, e, a);
            }
        }
        _getOrCreateScopeForPath(e) {
          let t = this._rootScope;
          for (const n of e) t = t.getOrCreateChild(n);
          return t;
        }
        onChange(e) {
          return this.onChangeByPointer(this.pointer, e);
        }
        pointerToPrism(e) {
          const { path: t } = ne(e),
            n = (t) => this.onChangeByPointer(e, t),
            o = () => this._getIn(t);
          return Me(() => Me.source(n, o));
        }
      }
      function Ie(e) {
        return !(!e || !e.isPrism || !0 !== e.isPrism);
      }
      const je = new WeakMap();
      const Ne = (e) => {
          const t = te(e);
          let n = je.get(t);
          if (!n) {
            const o = t.root;
            if (
              !(function (e) {
                return (
                  "object" == typeof e &&
                  null !== e &&
                  !0 === e.$$isPointerToPrismProvider
                );
              })(o)
            )
              throw new Error(
                "Cannot run pointerToPrism() on a pointer whose root is not an PointerToPrismProvider"
              );
            (n = o.pointerToPrism(e)), je.set(t, n);
          }
          return n;
        },
        Le = (e) => (re(e) ? Ne(e).getValue() : Ie(e) ? e.getValue() : e);
      class Be {
        get dormant() {
          return this._dormant;
        }
        constructor(e) {
          (this._conf = e),
            (this._ticking = !1),
            (this._dormant = !0),
            (this._numberOfDormantTicks = 0),
            (this.__ticks = 0),
            (this._scheduledForThisOrNextTick = new Set()),
            (this._scheduledForNextTick = new Set()),
            (this._timeAtCurrentTick = 0);
        }
        onThisOrNextTick(e) {
          this._scheduledForThisOrNextTick.add(e),
            this._dormant && this._goActive();
        }
        onNextTick(e) {
          this._scheduledForNextTick.add(e), this._dormant && this._goActive();
        }
        offThisOrNextTick(e) {
          this._scheduledForThisOrNextTick.delete(e);
        }
        offNextTick(e) {
          this._scheduledForNextTick.delete(e);
        }
        get time() {
          return this._ticking ? this._timeAtCurrentTick : performance.now();
        }
        _goActive() {
          var e, t;
          this._dormant &&
            ((this._dormant = !1),
            null ===
              (t =
                null === (e = this._conf) || void 0 === e
                  ? void 0
                  : e.onActive) ||
              void 0 === t ||
              t.call(e));
        }
        _goDormant() {
          var e, t;
          this._dormant ||
            ((this._dormant = !0),
            (this._numberOfDormantTicks = 0),
            null ===
              (t =
                null === (e = this._conf) || void 0 === e
                  ? void 0
                  : e.onDormant) ||
              void 0 === t ||
              t.call(e));
        }
        tick(e = performance.now()) {
          if (
            (this.__ticks++,
            !this._dormant &&
              0 === this._scheduledForNextTick.size &&
              0 === this._scheduledForThisOrNextTick.size &&
              (this._numberOfDormantTicks++, this._numberOfDormantTicks >= 180))
          )
            this._goDormant();
          else {
            (this._ticking = !0), (this._timeAtCurrentTick = e);
            for (const e of this._scheduledForNextTick)
              this._scheduledForThisOrNextTick.add(e);
            this._scheduledForNextTick.clear(),
              this._tick(0),
              (this._ticking = !1);
          }
        }
        _tick(e) {
          const t = this.time;
          if (
            (e > 10 && console.warn("_tick() recursing for 10 times"), e > 100)
          )
            throw new Error("Maximum recursion limit for _tick()");
          const n = this._scheduledForThisOrNextTick;
          this._scheduledForThisOrNextTick = new Set();
          for (const e of n) e(t);
          if (this._scheduledForThisOrNextTick.size > 0)
            return this._tick(e + 1);
        }
      }
      class Fe {
        constructor(e) {
          (this.$$isPointerToPrismProvider = !0),
            (this._currentPointerBox = new De(e)),
            (this.pointer = ie({ root: this, path: [] }));
        }
        setPointer(e) {
          this._currentPointerBox.set(e);
        }
        pointerToPrism(e) {
          const { path: t } = te(e);
          return Me(() => {
            const e = this._currentPointerBox.prism.getValue(),
              n = t.reduce((e, t) => e[t], e);
            return Le(n);
          });
        }
      }
      const Ue = new (class {
          constructor() {
            this.atom = new De({ projects: {} });
          }
          add(e, t) {
            this.atom.setByPointer((t) => t.projects[e], t);
          }
          get(e) {
            return this.atom.get().projects[e];
          }
          has(e) {
            return !!this.get(e);
          }
        })(),
        Ve = new WeakMap();
      function He(e) {
        return Ve.get(e);
      }
      function ze(e, t) {
        Ve.set(e, t);
      }
      const We = [];
      function $e(e, t) {
        return 0 === t.length ? e : (0, Y.A)(e, t);
      }
      class Ge {
        constructor() {
          this._values = {};
        }
        get(e, t) {
          if (this.has(e)) return this._values[e];
          {
            const n = t();
            return (this._values[e] = n), n;
          }
        }
        has(e) {
          return this._values.hasOwnProperty(e);
        }
      }
      var qe = n(6822);
      const Ye = new WeakMap();
      function Xe(e) {
        if (Ye.has(e)) return Ye.get(e);
        const t =
          "compound" === e.type
            ? (function (e) {
                const t = {};
                for (const [n, o] of Object.entries(e.props)) t[n] = Xe(o);
                return t;
              })(e)
            : "enum" === e.type
            ? (function (e) {
                const t = { $case: e.defaultCase };
                for (const [n, o] of Object.entries(e.cases)) t[n] = Xe(o);
                return t;
              })(e)
            : e.default;
        return Ye.set(e, t), t;
      }
      var Ke = n(5314),
        Je = n.n(Ke),
        Qe = n(7853);
      function Ze(e) {
        const t = new Map();
        return (n) => (t.has(n) || t.set(n, e(n)), t.get(n));
      }
      var et;
      function tt(e, t, n) {
        return Me(() => {
          const o = Le(t),
            i = Me.memo(
              "driver",
              () =>
                o
                  ? "BasicKeyframedTrack" === o.type
                    ? (function (e, t, n) {
                        return Me(() => {
                          const e = Me.ref("state", { started: !1 });
                          let o = e.current;
                          const i = n.getValue();
                          return (
                            (!o.started || i < o.validFrom || o.validTo <= i) &&
                              (e.current = o =
                                (function (e, t, n) {
                                  const o = et.getSortedKeyframesCached(
                                      n.keyframes
                                    ),
                                    i = t.getValue();
                                  if (0 === o.length)
                                    return {
                                      started: !0,
                                      validFrom: -1 / 0,
                                      validTo: 1 / 0,
                                      der: nt,
                                    };
                                  let r = 0;
                                  for (;;) {
                                    const e = o[r];
                                    if (!e) return ot.error;
                                    const n = r === o.length - 1;
                                    if (i < e.position)
                                      return 0 === r
                                        ? ot.beforeFirstKeyframe(e)
                                        : ot.error;
                                    if (e.position === i)
                                      return n
                                        ? ot.lastKeyframe(e)
                                        : ot.between(e, o[r + 1], t);
                                    if (r === o.length - 1)
                                      return ot.lastKeyframe(e);
                                    {
                                      const n = r + 1;
                                      if (o[n].position <= i) {
                                        r = n;
                                        continue;
                                      }
                                      return ot.between(e, o[r + 1], t);
                                    }
                                  }
                                })(0, n, t)),
                            o.der.getValue()
                          );
                        });
                      })(0, o, n)
                    : (e.logger.error("Track type not yet supported."),
                      Me(() => {}))
                  : Me(() => {}),
              [o]
            );
          return i.getValue();
        });
      }
      !(function (e) {
        (e.getSortedKeyframes = (e) => {
          const t = Object.values(e.byId);
          return t.sort((e, t) => e.position - t.position), (0, Qe.A)(t);
        }),
          (e.getSortedKeyframesCached = Ze(e.getSortedKeyframes)),
          (e.fromArray = (e) => {
            const t = {},
              n = {};
            for (const o of e) (t[o.id] = o), (n[o.id] = !0);
            return (0, Qe.A)({ byId: t, allIds: n });
          }),
          (e.fromSortedKeyframesCached = Ze(e.fromArray));
      })(et || (et = {}));
      const nt = Me(() => {});
      const ot = {
        beforeFirstKeyframe: (e) => ({
          started: !0,
          validFrom: -1 / 0,
          validTo: e.position,
          der: Me(() => ({ left: e.value, progression: 0 })),
        }),
        lastKeyframe: (e) => ({
          started: !0,
          validFrom: e.position,
          validTo: 1 / 0,
          der: Me(() => ({ left: e.value, progression: 0 })),
        }),
        between(e, t, n) {
          if (!e.connectedRight)
            return {
              started: !0,
              validFrom: e.position,
              validTo: t.position,
              der: Me(() => ({ left: e.value, progression: 0 })),
            };
          const o = (n) => (n - e.position) / (t.position - e.position);
          if (!e.type || "bezier" === e.type) {
            const i = new (Je())(
                e.handles[2],
                e.handles[3],
                t.handles[0],
                t.handles[1]
              ),
              r = Me(() => {
                const r = o(n.getValue()),
                  s = i.solveSimple(r);
                return { left: e.value, right: t.value, progression: s };
              });
            return {
              started: !0,
              validFrom: e.position,
              validTo: t.position,
              der: r,
            };
          }
          const i = Me(() => {
            const i = o(n.getValue()),
              r = Math.floor(i);
            return { left: e.value, right: t.value, progression: r };
          });
          return {
            started: !0,
            validFrom: e.position,
            validTo: t.position,
            der: i,
          };
        },
        error: { started: !0, validFrom: -1 / 0, validTo: 1 / 0, der: nt },
      };
      function it(e, t, n) {
        const o = n.get(e);
        if (o && o.override === t) return o.merged;
        const i = Object.assign({}, e);
        for (const o of Object.keys(t)) {
          const r = t[o],
            s = e[o];
          i[o] =
            "object" == typeof r && "object" == typeof s
              ? it(s, r, n)
              : void 0 === r
              ? s
              : r;
        }
        return n.set(e, { override: t, merged: i }), i;
      }
      function rt(e, t) {
        let n = e;
        for (const e of t) n = n[e];
        return n;
      }
      var st = n(7028);
      class at {
        get type() {
          return "Theatre_SheetObject_PublicAPI";
        }
        constructor(e) {
          (this._cache = new Ge()),
            (this._keepHotUntapDebounce = void 0),
            ze(this, e);
        }
        get props() {
          return He(this).propsP;
        }
        get sheet() {
          return He(this).sheet.publicApi;
        }
        get project() {
          return He(this).sheet.project.publicApi;
        }
        get address() {
          return Object.assign({}, He(this).address);
        }
        _valuesPrism() {
          return this._cache.get("_valuesPrism", () => {
            const e = He(this);
            return Me(() => Le(e.getValues().getValue()));
          });
        }
        onValuesChange(e, t) {
          return (function (e, t, n) {
            const o = n ? He(n).ticker : Qt();
            if (re(e)) {
              return Ne(e).onChange(o, t, !0);
            }
            if (Ie(e)) return e.onChange(o, t, !0);
            throw new Error(
              "Called onChange(p) where p is neither a pointer nor a prism."
            );
          })(this._valuesPrism(), e, t);
        }
        get value() {
          const e = this._valuesPrism();
          if (!e.isHot) {
            null != this._keepHotUntapDebounce &&
              this._keepHotUntapDebounce.flush();
            const t = e.keepHot();
            this._keepHotUntapDebounce = (0, st.A)(() => {
              t(), (this._keepHotUntapDebounce = void 0);
            }, 5e3);
          }
          return (
            this._keepHotUntapDebounce && this._keepHotUntapDebounce(),
            e.getValue()
          );
        }
        set initialValue(e) {
          He(this).setInitialValue(e);
        }
      }
      function ct(e) {
        return "compound" === e.type || "enum" === e.type;
      }
      function lt(e, t) {
        if (!e) return;
        const [n, ...o] = t;
        if (void 0 === n) return e;
        if (!ct(e)) return;
        return lt("enum" === e.type ? e.cases[n] : e.props[n], o);
      }
      const ut = Ze((e) => {
        if ("enum" === e.type) throw new Error("Not implemented yet for enums");
        for (const t in e.props) {
          const n = e.props[t];
          if (!ct(n)) return !0;
          if (ut(n)) return !0;
        }
        return !1;
      });
      class dt {
        get type() {
          return "Theatre_SheetObject";
        }
        constructor(e, t, n) {
          (this.sheet = e),
            (this.template = t),
            (this.nativeObject = n),
            (this.$$isPointerToPrismProvider = !0),
            (this._initialValue = new De({})),
            (this._cache = new Ge()),
            (this._logger = e._logger.named(
              "SheetObject",
              t.address.objectKey
            )),
            this._logger._trace("creating object"),
            (this._internalUtilCtx = {
              logger: this._logger.utilFor.internal(),
            }),
            (this.address = Object.assign(Object.assign({}, t.address), {
              sheetInstanceId: e.address.sheetInstanceId,
            })),
            (this.publicApi = new at(this));
        }
        getValues() {
          return this._cache.get("getValues()", () =>
            Me(() => {
              const e = it(
                Le(this.template.getDefaultValues()),
                Le(this._initialValue.pointer),
                Me.memo("withInitialCache", () => new WeakMap(), [])
              );
              let t,
                n = it(
                  e,
                  Le(this.template.getStaticValues()),
                  Me.memo("withStatics", () => new WeakMap(), [])
                );
              {
                const e = Me.memo("seq", () => this.getSequencedValues(), []),
                  o = Me.memo("withSeqsCache", () => new WeakMap(), []);
                t = Le(Le(e));
                n = it(n, t, o);
              }
              return ((e, t) => {
                const n = Me.memo(e, () => new De(t), []);
                return n.set(t), n;
              })("finalAtom", n).pointer;
            })
          );
        }
        getValueByPointer(e) {
          const t = Le(this.getValues()),
            { path: n } = ne(e);
          return Le(rt(t, n));
        }
        pointerToPrism(e) {
          const { path: t } = ne(e);
          return Me(() => {
            const e = Le(this.getValues());
            return Le(rt(e, t));
          });
        }
        getSequencedValues() {
          return Me(() => {
            const e = Me.memo(
                "tracksToProcess",
                () => this.template.getArrayOfValidSequenceTracks(),
                []
              ),
              t = Le(e),
              n = new De({}),
              o = Le(this.template.configPointer);
            return (
              Me.effect(
                "processTracks",
                () => {
                  const e = [];
                  for (const { trackId: i, pathToProp: r } of t) {
                    const t = this._trackIdToPrism(i),
                      s = lt(o, r),
                      a = s.deserializeAndSanitize,
                      c = s.interpolate,
                      l = () => {
                        const e = t.getValue();
                        if (!e) return n.setByPointer((e) => rt(e, r), void 0);
                        const o = a(e.left),
                          i = void 0 === o ? s.default : o;
                        if (void 0 === e.right)
                          return n.setByPointer((e) => rt(e, r), i);
                        const l = a(e.right),
                          u = void 0 === l ? s.default : l;
                        return n.setByPointer(
                          (e) => rt(e, r),
                          c(i, u, e.progression)
                        );
                      },
                      u = t.onStale(l);
                    l(), e.push(u);
                  }
                  return () => {
                    for (const t of e) t();
                  };
                },
                [o, ...t]
              ),
              n.pointer
            );
          });
        }
        _trackIdToPrism(e) {
          const t =
              this.template.project.pointers.historic.sheetsById[
                this.address.sheetId
              ].sequence.tracksByObject[this.address.objectKey].trackData[e],
            n = this.sheet.getSequence().positionPrism;
          return tt(this._internalUtilCtx, t, n);
        }
        get propsP() {
          return this._cache.get("propsP", () => ie({ root: this, path: [] }));
        }
        validateValue(e, t) {}
        setInitialValue(e) {
          this.validateValue(this.propsP, e), this._initialValue.set(e);
        }
      }
      function ft(e) {
        return function (t, n) {
          return e(t, n());
        };
      }
      var pt, ht, mt, gt;
      !(function (e) {
        (e[(e.GENERAL = 1)] = "GENERAL"),
          (e[(e.TODO = 2)] = "TODO"),
          (e[(e.TROUBLESHOOTING = 4)] = "TROUBLESHOOTING");
      })(pt || (pt = {})),
        (function (e) {
          (e[(e.INTERNAL = 8)] = "INTERNAL"),
            (e[(e.DEV = 16)] = "DEV"),
            (e[(e.PUBLIC = 32)] = "PUBLIC");
        })(ht || (ht = {})),
        (function (e) {
          (e[(e.TRACE = 64)] = "TRACE"),
            (e[(e.DEBUG = 128)] = "DEBUG"),
            (e[(e.WARN = 256)] = "WARN"),
            (e[(e.ERROR = 512)] = "ERROR");
        })(mt || (mt = {})),
        (function (e) {
          (e[(e.ERROR_PUBLIC = 545)] = "ERROR_PUBLIC"),
            (e[(e.ERROR_DEV = 529)] = "ERROR_DEV"),
            (e[(e._HMM = 524)] = "_HMM"),
            (e[(e._TODO = 522)] = "_TODO"),
            (e[(e._ERROR = 521)] = "_ERROR"),
            (e[(e.WARN_PUBLIC = 289)] = "WARN_PUBLIC"),
            (e[(e.WARN_DEV = 273)] = "WARN_DEV"),
            (e[(e._KAPOW = 268)] = "_KAPOW"),
            (e[(e._WARN = 265)] = "_WARN"),
            (e[(e.DEBUG_DEV = 145)] = "DEBUG_DEV"),
            (e[(e._DEBUG = 137)] = "_DEBUG"),
            (e[(e.TRACE_DEV = 81)] = "TRACE_DEV"),
            (e[(e._TRACE = 73)] = "_TRACE");
        })(gt || (gt = {}));
      const yt = {
        _hmm: vt(gt._HMM),
        _todo: vt(gt._TODO),
        _error: vt(gt._ERROR),
        errorDev: vt(gt.ERROR_DEV),
        errorPublic: vt(gt.ERROR_PUBLIC),
        _kapow: vt(gt._KAPOW),
        _warn: vt(gt._WARN),
        warnDev: vt(gt.WARN_DEV),
        warnPublic: vt(gt.WARN_PUBLIC),
        _debug: vt(gt._DEBUG),
        debugDev: vt(gt.DEBUG_DEV),
        _trace: vt(gt._TRACE),
        traceDev: vt(gt.TRACE_DEV),
      };
      function vt(e) {
        return Object.freeze({
          audience: bt(e, ht.INTERNAL)
            ? "internal"
            : bt(e, ht.DEV)
            ? "dev"
            : "public",
          category: bt(e, pt.TROUBLESHOOTING)
            ? "troubleshooting"
            : bt(e, pt.TODO)
            ? "todo"
            : "general",
          level: bt(e, mt.ERROR)
            ? mt.ERROR
            : bt(e, mt.WARN)
            ? mt.WARN
            : bt(e, mt.DEBUG)
            ? mt.DEBUG
            : mt.TRACE,
        });
      }
      function bt(e, t) {
        return (e & t) === t;
      }
      function wt(e, t) {
        return (
          ((t & ht.PUBLIC) === ht.PUBLIC ||
            ((t & ht.DEV) === ht.DEV
              ? e.dev
              : (t & ht.INTERNAL) === ht.INTERNAL && e.internal)) &&
          e.min <= t
        );
      }
      const _t = {
        loggingConsoleStyle: !0,
        loggerConsoleStyle: !0,
        includes: Object.freeze({ internal: !1, dev: !1, min: mt.WARN }),
        filtered: function () {},
        include: function () {
          return {};
        },
        create: null,
        creatExt: null,
        named(e, t, n) {
          return this.create({ names: [...e.names, { name: t, key: n }] });
        },
        style: {
          bold: void 0,
          italic: void 0,
          cssMemo: new Map([["", ""]]),
          collapseOnRE: /[a-z- ]+/g,
          color: void 0,
          collapsed(e) {
            if (e.length < 5) return e;
            const t = e.replace(this.collapseOnRE, "");
            return this.cssMemo.has(t) || this.cssMemo.set(t, this.css(e)), t;
          },
          css(e) {
            var t, n, o, i;
            const r = this.cssMemo.get(e);
            if (r) return r;
            let s = `color:${
              null !==
                (n =
                  null === (t = this.color) || void 0 === t
                    ? void 0
                    : t.call(this, e)) && void 0 !== n
                ? n
                : `hsl(${
                    (e.charCodeAt(0) + e.charCodeAt(e.length - 1)) % 360
                  }, 100%, 60%)`
            }`;
            return (
              (null === (o = this.bold) || void 0 === o ? void 0 : o.test(e)) &&
                (s += ";font-weight:600"),
              (null === (i = this.italic) || void 0 === i
                ? void 0
                : i.test(e)) && (s += ";font-style:italic"),
              this.cssMemo.set(e, s),
              s
            );
          },
        },
      };
      function St(e = console, t = {}) {
        const n = Object.assign(Object.assign({}, _t), {
            includes: Object.assign({}, _t.includes),
          }),
          o = { styled: Pt.bind(n, e), noStyle: Tt.bind(n, e) },
          i = Ot.bind(n);
        function r() {
          return n.loggingConsoleStyle && n.loggerConsoleStyle
            ? o.styled
            : o.noStyle;
        }
        return (
          (n.create = r()),
          {
            configureLogger(e) {
              var t;
              "console" === e
                ? ((n.loggerConsoleStyle = _t.loggerConsoleStyle),
                  (n.create = r()))
                : "console" === e.type
                ? ((n.loggerConsoleStyle =
                    null !== (t = e.style) && void 0 !== t
                      ? t
                      : _t.loggerConsoleStyle),
                  (n.create = r()))
                : "keyed" === e.type
                ? ((n.creatExt = (t) => e.keyed(t.names)), (n.create = i))
                : "named" === e.type &&
                  ((n.creatExt = Et.bind(null, e.named)), (n.create = i));
            },
            configureLogging(e) {
              var t, o, i, s, a;
              (n.includes.dev =
                null !== (t = e.dev) && void 0 !== t ? t : _t.includes.dev),
                (n.includes.internal =
                  null !== (o = e.internal) && void 0 !== o
                    ? o
                    : _t.includes.internal),
                (n.includes.min =
                  null !== (i = e.min) && void 0 !== i ? i : _t.includes.min),
                (n.include =
                  null !== (s = e.include) && void 0 !== s ? s : _t.include),
                (n.loggingConsoleStyle =
                  null !== (a = e.consoleStyle) && void 0 !== a
                    ? a
                    : _t.loggingConsoleStyle),
                (n.create = r());
            },
            getLogger: () => n.create({ names: [] }),
          }
        );
      }
      function Et(e, t) {
        const n = [];
        for (let { name: e, key: o } of t.names)
          n.push(null == o ? e : `${e} (${o})`);
        return e(n);
      }
      function Ot(e) {
        const t = Object.assign(
            Object.assign({}, this.includes),
            this.include(e)
          ),
          n = this.filtered,
          o = this.named.bind(this, e),
          i = this.creatExt(e),
          r = wt(t, gt._HMM),
          s = wt(t, gt._TODO),
          a = wt(t, gt._ERROR),
          c = wt(t, gt.ERROR_DEV),
          l = wt(t, gt.ERROR_PUBLIC),
          u = wt(t, gt._WARN),
          d = wt(t, gt._KAPOW),
          f = wt(t, gt.WARN_DEV),
          p = wt(t, gt.WARN_PUBLIC),
          h = wt(t, gt._DEBUG),
          m = wt(t, gt.DEBUG_DEV),
          g = wt(t, gt._TRACE),
          y = wt(t, gt.TRACE_DEV),
          v = r ? i.error.bind(i, yt._hmm) : n.bind(e, gt._HMM),
          b = s ? i.error.bind(i, yt._todo) : n.bind(e, gt._TODO),
          w = a ? i.error.bind(i, yt._error) : n.bind(e, gt._ERROR),
          _ = c ? i.error.bind(i, yt.errorDev) : n.bind(e, gt.ERROR_DEV),
          S = l ? i.error.bind(i, yt.errorPublic) : n.bind(e, gt.ERROR_PUBLIC),
          E = d ? i.warn.bind(i, yt._kapow) : n.bind(e, gt._KAPOW),
          O = u ? i.warn.bind(i, yt._warn) : n.bind(e, gt._WARN),
          P = f ? i.warn.bind(i, yt.warnDev) : n.bind(e, gt.WARN_DEV),
          T = p ? i.warn.bind(i, yt.warnPublic) : n.bind(e, gt.WARN_DEV),
          M = h ? i.debug.bind(i, yt._debug) : n.bind(e, gt._DEBUG),
          R = m ? i.debug.bind(i, yt.debugDev) : n.bind(e, gt.DEBUG_DEV),
          x = g ? i.trace.bind(i, yt._trace) : n.bind(e, gt._TRACE),
          C = y ? i.trace.bind(i, yt.traceDev) : n.bind(e, gt.TRACE_DEV),
          A = {
            _hmm: v,
            _todo: b,
            _error: w,
            errorDev: _,
            errorPublic: S,
            _kapow: E,
            _warn: O,
            warnDev: P,
            warnPublic: T,
            _debug: M,
            debugDev: R,
            _trace: x,
            traceDev: C,
            lazy: {
              _hmm: r ? ft(v) : v,
              _todo: s ? ft(b) : b,
              _error: a ? ft(w) : w,
              errorDev: c ? ft(_) : _,
              errorPublic: l ? ft(S) : S,
              _kapow: d ? ft(E) : E,
              _warn: u ? ft(O) : O,
              warnDev: f ? ft(P) : P,
              warnPublic: p ? ft(T) : T,
              _debug: h ? ft(M) : M,
              debugDev: m ? ft(R) : R,
              _trace: g ? ft(x) : x,
              traceDev: y ? ft(C) : C,
            },
            named: o,
            utilFor: {
              internal: () => ({
                debug: A._debug,
                error: A._error,
                warn: A._warn,
                trace: A._trace,
                named: (e, t) => A.named(e, t).utilFor.internal(),
              }),
              dev: () => ({
                debug: A.debugDev,
                error: A.errorDev,
                warn: A.warnDev,
                trace: A.traceDev,
                named: (e, t) => A.named(e, t).utilFor.dev(),
              }),
              public: () => ({
                error: A.errorPublic,
                warn: A.warnPublic,
                debug(e, t) {
                  A._warn(`(public "debug" filtered out) ${e}`, t);
                },
                trace(e, t) {
                  A._warn(`(public "trace" filtered out) ${e}`, t);
                },
                named: (e, t) => A.named(e, t).utilFor.public(),
              }),
            },
          };
        return A;
      }
      function Pt(e, t) {
        const n = Object.assign(
            Object.assign({}, this.includes),
            this.include(t)
          ),
          o = [];
        let i = "";
        for (let e = 0; e < t.names.length; e++) {
          const { name: n, key: r } = t.names[e];
          if (((i += ` %c${n}`), o.push(this.style.css(n)), null != r)) {
            const e = `%c#${r}`;
            (i += e), o.push(this.style.css(e));
          }
        }
        const r = this.filtered,
          s = this.named.bind(this, t),
          a = [i, ...o];
        return Mt(
          r,
          t,
          n,
          e,
          a,
          (function (e) {
            const t = e.slice(0);
            for (let e = 1; e < t.length; e++)
              t[e] += ";background-color:#e0005a;padding:2px;color:white";
            return t;
          })(a),
          s
        );
      }
      function Tt(e, t) {
        const n = Object.assign(
          Object.assign({}, this.includes),
          this.include(t)
        );
        let o = "";
        for (let e = 0; e < t.names.length; e++) {
          const { name: n, key: i } = t.names[e];
          (o += ` ${n}`), null != i && (o += `#${i}`);
        }
        const i = [o];
        return Mt(this.filtered, t, n, e, i, i, this.named.bind(this, t));
      }
      function Mt(e, t, n, o, i, r, s) {
        const a = wt(n, gt._HMM),
          c = wt(n, gt._TODO),
          l = wt(n, gt._ERROR),
          u = wt(n, gt.ERROR_DEV),
          d = wt(n, gt.ERROR_PUBLIC),
          f = wt(n, gt._WARN),
          p = wt(n, gt._KAPOW),
          h = wt(n, gt.WARN_DEV),
          m = wt(n, gt.WARN_PUBLIC),
          g = wt(n, gt._DEBUG),
          y = wt(n, gt.DEBUG_DEV),
          v = wt(n, gt._TRACE),
          b = wt(n, gt.TRACE_DEV),
          w = a ? o.error.bind(o, ...i) : e.bind(t, gt._HMM),
          _ = c ? o.error.bind(o, ...i) : e.bind(t, gt._TODO),
          S = l ? o.error.bind(o, ...i) : e.bind(t, gt._ERROR),
          E = u ? o.error.bind(o, ...i) : e.bind(t, gt.ERROR_DEV),
          O = d ? o.error.bind(o, ...i) : e.bind(t, gt.ERROR_PUBLIC),
          P = p ? o.warn.bind(o, ...r) : e.bind(t, gt._KAPOW),
          T = f ? o.warn.bind(o, ...i) : e.bind(t, gt._WARN),
          M = h ? o.warn.bind(o, ...i) : e.bind(t, gt.WARN_DEV),
          R = m ? o.warn.bind(o, ...i) : e.bind(t, gt.WARN_DEV),
          x = g ? o.info.bind(o, ...i) : e.bind(t, gt._DEBUG),
          C = y ? o.info.bind(o, ...i) : e.bind(t, gt.DEBUG_DEV),
          A = v ? o.debug.bind(o, ...i) : e.bind(t, gt._TRACE),
          k = b ? o.debug.bind(o, ...i) : e.bind(t, gt.TRACE_DEV),
          D = {
            _hmm: w,
            _todo: _,
            _error: S,
            errorDev: E,
            errorPublic: O,
            _kapow: P,
            _warn: T,
            warnDev: M,
            warnPublic: R,
            _debug: x,
            debugDev: C,
            _trace: A,
            traceDev: k,
            lazy: {
              _hmm: a ? ft(w) : w,
              _todo: c ? ft(_) : _,
              _error: l ? ft(S) : S,
              errorDev: u ? ft(E) : E,
              errorPublic: d ? ft(O) : O,
              _kapow: p ? ft(P) : P,
              _warn: f ? ft(T) : T,
              warnDev: h ? ft(M) : M,
              warnPublic: m ? ft(R) : R,
              _debug: g ? ft(x) : x,
              debugDev: y ? ft(C) : C,
              _trace: v ? ft(A) : A,
              traceDev: b ? ft(k) : k,
            },
            named: s,
            utilFor: {
              internal: () => ({
                debug: D._debug,
                error: D._error,
                warn: D._warn,
                trace: D._trace,
                named: (e, t) => D.named(e, t).utilFor.internal(),
              }),
              dev: () => ({
                debug: D.debugDev,
                error: D.errorDev,
                warn: D.warnDev,
                trace: D.traceDev,
                named: (e, t) => D.named(e, t).utilFor.dev(),
              }),
              public: () => ({
                error: D.errorPublic,
                warn: D.warnPublic,
                debug(e, t) {
                  D._warn(`(public "debug" filtered out) ${e}`, t);
                },
                trace(e, t) {
                  D._warn(`(public "trace" filtered out) ${e}`, t);
                },
                named: (e, t) => D.named(e, t).utilFor.public(),
              }),
            },
          };
        return D;
      }
      const Rt = St(console, {
        _debug: function () {},
        _error: function () {},
      });
      Rt.configureLogging({ dev: !0, min: mt.TRACE });
      const xt = Rt.getLogger()
          .named("Theatre.js (default logger)")
          .utilFor.dev(),
        Ct = new WeakMap();
      function At(e, t, n) {
        for (const [o, i] of Object.entries(t.props))
          if (!ct(i)) {
            const t = [...e, o];
            n.set(JSON.stringify(t), n.size), kt(t, i, n);
          }
        for (const [o, i] of Object.entries(t.props))
          if (ct(i)) {
            const t = [...e, o];
            n.set(JSON.stringify(t), n.size), kt(t, i, n);
          }
      }
      function kt(e, t, n) {
        if ("compound" === t.type) At(e, t, n);
        else {
          if ("enum" === t.type) throw new Error("Enums aren't supported yet");
          n.set(JSON.stringify(e), n.size);
        }
      }
      var Dt = n(2190);
      function It(e) {
        return (
          "object" == typeof e && null !== e && 0 === Object.keys(e).length
        );
      }
      class jt {
        get staticConfig() {
          return this._config.get();
        }
        get configPointer() {
          return this._config.pointer;
        }
        get _temp_actions() {
          return this._temp_actions_atom.get();
        }
        get _temp_actionsPointer() {
          return this._temp_actions_atom.pointer;
        }
        constructor(e, t, n, o, i) {
          (this.sheetTemplate = e),
            (this.type = "Theatre_SheetObjectTemplate"),
            (this._cache = new Ge()),
            (this.address = Object.assign(Object.assign({}, e.address), {
              objectKey: t,
            })),
            (this._config = new De(o)),
            (this._temp_actions_atom = new De(i)),
            (this.project = e.project),
            (this.pointerToSheetState =
              this.sheetTemplate.project.pointers.historic.sheetsById[
                this.address.sheetId
              ]),
            (this.pointerToStaticOverrides =
              this.pointerToSheetState.staticOverrides.byObject[
                this.address.objectKey
              ]);
        }
        createInstance(e, t, n) {
          return this._config.set(n), new dt(e, this, t);
        }
        reconfigure(e) {
          this._config.set(e);
        }
        _temp_setActions(e) {
          this._temp_actions_atom.set(e);
        }
        getDefaultValues() {
          return this._cache.get("getDefaultValues()", () =>
            Me(() =>
              (function (e) {
                return Xe(e);
              })(Le(this.configPointer))
            )
          );
        }
        getStaticValues() {
          return this._cache.get("getStaticValues", () =>
            Me(() => {
              var e;
              const t =
                null !== (e = Le(this.pointerToStaticOverrides)) && void 0 !== e
                  ? e
                  : {};
              return Le(this.configPointer).deserializeAndSanitize(t) || {};
            })
          );
        }
        getArrayOfValidSequenceTracks() {
          return this._cache.get("getArrayOfValidSequenceTracks", () =>
            Me(() => {
              const e =
                  this.project.pointers.historic.sheetsById[
                    this.address.sheetId
                  ],
                t = Le(
                  e.sequence.tracksByObject[this.address.objectKey]
                    .trackIdByPropPath
                );
              if (!t) return We;
              const n = [];
              if (!t) return We;
              const o = Le(this.configPointer),
                i = Object.entries(t);
              for (const [e, t] of i) {
                const i = Nt(e);
                if (!i) continue;
                const r = lt(o, i);
                r && !ct(r) && n.push({ pathToProp: i, trackId: t });
              }
              const r = (function (e) {
                const t = Ct.get(e);
                if (t) return t;
                const n = new Map();
                return Ct.set(e, n), At([], e, n), n;
              })(o);
              return (
                n.sort((e, t) => {
                  const n = e.pathToProp,
                    o = t.pathToProp;
                  return r.get(JSON.stringify(n)) > r.get(JSON.stringify(o))
                    ? 1
                    : -1;
                }),
                0 === n.length ? We : n
              );
            })
          );
        }
        getMapOfValidSequenceTracks_forStudio() {
          return this._cache.get("getMapOfValidSequenceTracks_forStudio", () =>
            Me(() => {
              const e = Le(this.getArrayOfValidSequenceTracks()),
                t = {};
              for (const { pathToProp: n, trackId: o } of e) (0, qe.A)(t, n, o);
              return t;
            })
          );
        }
        getStaticButNotSequencedOverrides() {
          return this._cache.get("getStaticButNotSequencedOverrides", () =>
            Me(() => {
              const e = Le(this.getStaticValues()),
                t = Le(this.getArrayOfValidSequenceTracks()),
                n = (0, Qe.A)(e);
              for (const { pathToProp: e } of t) {
                (0, Dt.A)(n, e);
                let t = e.slice(0, -1);
                for (; t.length > 0; ) {
                  if (!It($e(n, t))) break;
                  (0, Dt.A)(n, t), (t = t.slice(0, -1));
                }
              }
              return It(n) ? void 0 : n;
            })
          );
        }
        getDefaultsAtPointer(e) {
          const { path: t } = ne(e);
          return $e(this.getDefaultValues().getValue(), t);
        }
      }
      function Nt(e) {
        try {
          return JSON.parse(e);
        } catch (t) {
          return void xt.warn(
            `property ${JSON.stringify(e)} cannot be parsed. Skipping.`
          );
        }
      }
      const Lt = Ze((e) => JSON.stringify(e));
      Ze((e) => JSON.parse(e));
      n(2722);
      class Bt extends Error {}
      class Ft extends Bt {}
      var Ut = n(4225);
      function Vt() {
        let e, t;
        const n = new Promise((n, i) => {
            (e = (e) => {
              n(e), (o.status = "resolved");
            }),
              (t = (e) => {
                i(e), (o.status = "rejected");
              });
          }),
          o = { resolve: e, reject: t, promise: n, status: "pending" };
        return o;
      }
      const Ht = () => {};
      class zt {
        constructor() {
          (this._stopPlayCallback = Ht),
            (this._state = new De({ position: 0, playing: !1 })),
            (this.statePointer = this._state.pointer);
        }
        destroy() {}
        pause() {
          this._stopPlayCallback(),
            (this.playing = !1),
            (this._stopPlayCallback = Ht);
        }
        gotoPosition(e) {
          this._updatePositionInState(e);
        }
        _updatePositionInState(e) {
          this._state.setByPointer((e) => e.position, e);
        }
        getCurrentPosition() {
          return this._state.get().position;
        }
        get playing() {
          return this._state.get().playing;
        }
        set playing(e) {
          this._state.setByPointer((e) => e.playing, e);
        }
        play(e, t, n, o, i) {
          this.playing && this.pause(), (this.playing = !0);
          const r = t[1] - t[0];
          {
            const e = this.getCurrentPosition();
            e < t[0] || e > t[1]
              ? "normal" === o || "alternate" === o
                ? this._updatePositionInState(t[0])
                : ("reverse" !== o && "alternateReverse" !== o) ||
                  this._updatePositionInState(t[1])
              : "normal" === o || "alternate" === o
              ? e === t[1] && this._updatePositionInState(t[0])
              : e === t[0] && this._updatePositionInState(t[1]);
          }
          const s = Vt(),
            a = i.time,
            c = r * e;
          let l = this.getCurrentPosition() - t[0];
          ("reverse" !== o && "alternateReverse" !== o) ||
            (l = t[1] - this.getCurrentPosition());
          const u = (i) => {
            const u = Math.max(i - a, 0) / 1e3,
              f = Math.min(u * n + l, c);
            if (f !== c) {
              const e = Math.floor(f / r);
              let n = ((f / r) % 1) * r;
              if ("normal" !== o)
                if ("reverse" === o) n = r - n;
                else {
                  const t = e % 2 == 0;
                  "alternate" === o ? t || (n = r - n) : t && (n = r - n);
                }
              this._updatePositionInState(n + t[0]), d();
            } else {
              if ("normal" === o) this._updatePositionInState(t[1]);
              else if ("reverse" === o) this._updatePositionInState(t[0]);
              else {
                const n = (e - 1) % 2 == 0;
                "alternate" === o
                  ? n
                    ? this._updatePositionInState(t[1])
                    : this._updatePositionInState(t[0])
                  : n
                  ? this._updatePositionInState(t[0])
                  : this._updatePositionInState(t[1]);
              }
              (this.playing = !1), s.resolve(!0);
            }
          };
          this._stopPlayCallback = () => {
            i.offThisOrNextTick(u),
              i.offNextTick(u),
              this.playing && s.resolve(!1);
          };
          const d = () => i.onNextTick(u);
          return i.onThisOrNextTick(u), s.promise;
        }
        playDynamicRange(e, t) {
          this.playing && this.pause(), (this.playing = !0);
          const n = Vt(),
            o = e.keepHot();
          n.promise.then(o, o);
          let i = t.time;
          const r = (t) => {
            const n = Math.max(t - i, 0);
            i = t;
            const o = n / 1e3,
              r = this.getCurrentPosition(),
              a = e.getValue();
            if (r < a[0] || r > a[1]) this.gotoPosition(a[0]);
            else {
              let e = r + o;
              e > a[1] && (e = a[0] + (e - a[1])), this.gotoPosition(e);
            }
            s();
          };
          this._stopPlayCallback = () => {
            t.offThisOrNextTick(r), t.offNextTick(r), n.resolve(!1);
          };
          const s = () => t.onNextTick(r);
          return t.onThisOrNextTick(r), n.promise;
        }
      }
      const Wt = "__TheatreJS_CoreBundle",
        $t =
          (e) =>
          (...t) => {
            var n;
            switch (e) {
              case "success":
              case "info":
                xt.debug(t.slice(0, 2).join("\n"));
                break;
              case "warning":
                xt.warn(t.slice(0, 2).join("\n"));
            }
            return "undefined" != typeof window
              ? null === (n = window.__TheatreJS_Notifications) || void 0 === n
                ? void 0
                : n.notify[e](...t)
              : void 0;
          },
        Gt = {
          warning: $t("warning"),
          success: $t("success"),
          info: $t("info"),
          error: $t("error"),
        };
      "undefined" != typeof window &&
        (window.addEventListener("error", (e) => {
          Gt.error(
            "An error occurred",
            `<pre>${e.message}</pre>\n\nSee **console** for details.`
          );
        }),
        window.addEventListener("unhandledrejection", (e) => {
          Gt.error(
            "An error occurred",
            `<pre>${e.reason}</pre>\n\nSee **console** for details.`
          );
        }));
      class qt {
        constructor(e, t, n) {
          (this._decodedBuffer = e),
            (this._audioContext = t),
            (this._nodeDestination = n),
            (this._state = new De({ position: 0, playing: !1 })),
            (this._stopPlayCallback = Ht),
            (this.statePointer = this._state.pointer),
            (this._mainGain = this._audioContext.createGain()),
            this._mainGain.connect(this._nodeDestination);
        }
        playDynamicRange(e, t) {
          const n = Vt();
          let o;
          this._playing && this.pause(), (this._playing = !0);
          const i = () => {
              null == o || o(), (o = this._loopInRange(e.getValue(), t).stop);
            },
            r = e.onStale(i);
          return (
            i(),
            (this._stopPlayCallback = () => {
              null == o || o(), r(), n.resolve(!1);
            }),
            n.promise
          );
        }
        _loopInRange(e, t) {
          let n = this.getCurrentPosition();
          const o = e[1] - e[0];
          (n < e[0] || n > e[1] || n === e[1]) &&
            this._updatePositionInState(e[0]),
            (n = this.getCurrentPosition());
          const i = this._audioContext.createBufferSource();
          (i.buffer = this._decodedBuffer),
            i.connect(this._mainGain),
            (i.playbackRate.value = 1),
            (i.loop = !0),
            (i.loopStart = e[0]),
            (i.loopEnd = e[1]);
          const r = t.time;
          let s = n - e[0];
          i.start(0, n);
          const a = (t) => {
              let n = (((1 * (Math.max(t - r, 0) / 1e3) + s) / o) % 1) * o;
              this._updatePositionInState(n + e[0]), c();
            },
            c = () => t.onNextTick(a);
          t.onThisOrNextTick(a);
          return {
            stop: () => {
              i.stop(),
                i.disconnect(),
                t.offThisOrNextTick(a),
                t.offNextTick(a);
            },
          };
        }
        get _playing() {
          return this._state.get().playing;
        }
        set _playing(e) {
          this._state.setByPointer((e) => e.playing, e);
        }
        destroy() {}
        pause() {
          this._stopPlayCallback(),
            (this._playing = !1),
            (this._stopPlayCallback = Ht);
        }
        gotoPosition(e) {
          this._updatePositionInState(e);
        }
        _updatePositionInState(e) {
          this._state.reduce((t) =>
            Object.assign(Object.assign({}, t), { position: e })
          );
        }
        getCurrentPosition() {
          return this._state.get().position;
        }
        play(e, t, n, o, i) {
          this._playing && this.pause(), (this._playing = !0);
          let r = this.getCurrentPosition();
          const s = t[1] - t[0];
          if ("normal" !== o)
            throw new Ft(
              `Audio-controlled sequences can only be played in the "normal" direction. '${o}' given.`
            );
          (r < t[0] || r > t[1] || r === t[1]) &&
            this._updatePositionInState(t[0]),
            (r = this.getCurrentPosition());
          const a = Vt(),
            c = this._audioContext.createBufferSource();
          (c.buffer = this._decodedBuffer),
            c.connect(this._mainGain),
            (c.playbackRate.value = n),
            e > 1e3 &&
              (Gt.warning(
                "Can't play sequences with audio more than 1000 times",
                `The sequence will still play, but only 1000 times. The \`iterationCount: ${e}\` provided to \`sequence.play()\`\nis too high for a sequence with audio.\n\nTo fix this, either set \`iterationCount\` to a lower value, or remove the audio from the sequence.`,
                [
                  {
                    url: "https://www.theatrejs.com/docs/latest/manual/audio",
                    title: "Using Audio",
                  },
                  {
                    url: "https://www.theatrejs.com/docs/latest/api/core#sequence.attachaudio",
                    title: "Audio API",
                  },
                ]
              ),
              (e = 1e3)),
            e > 1 && ((c.loop = !0), (c.loopStart = t[0]), (c.loopEnd = t[1]));
          const l = i.time;
          let u = r - t[0];
          const d = s * e;
          c.start(0, r, d - u);
          const f = (e) => {
              const o = Math.max(e - l, 0) / 1e3,
                i = Math.min(o * n + u, d);
              if (i !== d) {
                let e = ((i / s) % 1) * s;
                this._updatePositionInState(e + t[0]), h();
              } else
                this._updatePositionInState(t[1]),
                  (this._playing = !1),
                  p(),
                  a.resolve(!0);
            },
            p = () => {
              c.stop(), c.disconnect();
            };
          this._stopPlayCallback = () => {
            p(),
              i.offThisOrNextTick(f),
              i.offNextTick(f),
              this._playing && a.resolve(!1);
          };
          const h = () => i.onNextTick(f);
          return i.onThisOrNextTick(f), a.promise;
        }
      }
      let Yt,
        Xt = 0;
      function Kt() {
        let e = null;
        const t = (function (e) {
          var t;
          const n = new Be({
              onActive() {
                var t;
                null === (t = null == e ? void 0 : e.start) ||
                  void 0 === t ||
                  t.call(e);
              },
              onDormant() {
                var t;
                null === (t = null == e ? void 0 : e.stop) ||
                  void 0 === t ||
                  t.call(e);
              },
            }),
            o = {
              tick: (e) => {
                n.tick(e);
              },
              id: Xt++,
              name:
                null !== (t = null == e ? void 0 : e.name) && void 0 !== t
                  ? t
                  : `CustomRafDriver-${Xt}`,
              type: "Theatre_RafDriver_PublicAPI",
            };
          return (
            ze(o, {
              type: "Theatre_RafDriver_PrivateAPI",
              publicApi: o,
              ticker: n,
              start: null == e ? void 0 : e.start,
              stop: null == e ? void 0 : e.stop,
            }),
            o
          );
        })({
          name: "DefaultCoreRafDriver",
          start: () => {
            if ("undefined" != typeof window) {
              const n = (o) => {
                t.tick(o), (e = window.requestAnimationFrame(n));
              };
              e = window.requestAnimationFrame(n);
            } else t.tick(0), setTimeout(() => t.tick(1), 0);
          },
          stop: () => {
            "undefined" != typeof window &&
              null !== e &&
              window.cancelAnimationFrame(e);
          },
        });
        return t;
      }
      function Jt() {
        return (
          Yt ||
            (function (e) {
              if (Yt)
                throw new Error("`setCoreRafDriver()` is already called.");
              const t = He(e);
              Yt = t;
            })(Kt()),
          Yt
        );
      }
      function Qt() {
        return Jt().ticker;
      }
      var Zt = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      class en {
        get type() {
          return "Theatre_Sequence_PublicAPI";
        }
        constructor(e) {
          ze(this, e);
        }
        play(e) {
          const t = He(this);
          if (t._project.isReady()) {
            const n = (null == e ? void 0 : e.rafDriver)
              ? He(e.rafDriver).ticker
              : Qt();
            return t.play(null != e ? e : {}, n);
          }
          {
            0;
            const e = Vt();
            return e.resolve(!0), e.promise;
          }
        }
        pause() {
          He(this).pause();
        }
        get position() {
          return He(this).position;
        }
        set position(e) {
          He(this).position = e;
        }
        __experimental_getKeyframes(e) {
          return He(this).getKeyframesOfSimpleProp(e);
        }
        attachAudio(e) {
          return Zt(this, void 0, void 0, function* () {
            const {
                audioContext: t,
                destinationNode: n,
                decodedBuffer: o,
                gainNode: i,
              } = yield (function (e) {
                return Zt(this, void 0, void 0, function* () {
                  function t() {
                    if (e.audioContext) return Promise.resolve(e.audioContext);
                    const t = new AudioContext();
                    return "running" === t.state || "undefined" == typeof window
                      ? Promise.resolve(t)
                      : new Promise((e) => {
                          const n = () => {
                              t.resume().catch((e) => {
                                console.error(e);
                              });
                            },
                            o = ["mousedown", "keydown", "touchstart"],
                            i = { capture: !0, passive: !1 };
                          o.forEach((e) => {
                            window.addEventListener(e, n, i);
                          }),
                            t.addEventListener("statechange", () => {
                              "running" === t.state &&
                                (o.forEach((e) => {
                                  window.removeEventListener(e, n, i);
                                }),
                                e(t));
                            });
                        });
                  }
                  function n() {
                    return Zt(this, void 0, void 0, function* () {
                      if (e.source instanceof AudioBuffer) return e.source;
                      const t = Vt();
                      if ("string" != typeof e.source)
                        throw new Error(
                          "Error validating arguments to sequence.attachAudio(). args.source must either be a string or an instance of AudioBuffer."
                        );
                      let n, i;
                      try {
                        n = yield fetch(e.source);
                      } catch (t) {
                        throw (
                          (console.error(t),
                          new Error(
                            `Could not fetch '${e.source}'. Network error logged above.`
                          ))
                        );
                      }
                      try {
                        i = yield n.arrayBuffer();
                      } catch (t) {
                        throw (
                          (console.error(t),
                          new Error(
                            `Could not read '${e.source}' as an arrayBuffer.`
                          ))
                        );
                      }
                      let r;
                      (yield o).decodeAudioData(i, t.resolve, t.reject);
                      try {
                        r = yield t.promise;
                      } catch (t) {
                        throw (
                          (console.error(t),
                          new Error(
                            `Could not decode ${e.source} as an audio file.`
                          ))
                        );
                      }
                      return r;
                    });
                  }
                  const o = t(),
                    i = n(),
                    [r, s] = yield Promise.all([o, i]),
                    a = e.destinationNode || r.destination,
                    c = r.createGain();
                  return (
                    c.connect(a),
                    {
                      audioContext: r,
                      decodedBuffer: s,
                      gainNode: c,
                      destinationNode: a,
                    }
                  );
                });
              })(e),
              r = new qt(o, t, i);
            return (
              He(this).replacePlaybackController(r),
              {
                audioContext: t,
                destinationNode: n,
                decodedBuffer: o,
                gainNode: i,
              }
            );
          });
        }
        get pointer() {
          return He(this).pointer;
        }
      }
      nn("Theatre_Project"), nn("Theatre_Sheet"), nn("Theatre_SheetTemplate");
      const tn = nn("Theatre_SheetObject");
      nn("Theatre_SheetObjectTemplate"),
        nn("Theatre_Project_PublicAPI"),
        nn("Theatre_Sheet_PublicAPI"),
        nn("Theatre_SheetObject_PublicAPI");
      function nn(e) {
        return (t) => "object" == typeof t && !!t && t.type === e;
      }
      var on = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      class rn {
        constructor(e, t, n, o, i) {
          (this._project = e),
            (this._sheet = t),
            (this._lengthD = n),
            (this._subUnitsPerUnitD = o),
            (this.pointer = ie({ root: this, path: [] })),
            (this.$$isPointerToPrismProvider = !0),
            (this.closestGridPosition = (e) => {
              const t = 1 / this.subUnitsPerUnit;
              return parseFloat((Math.round(e / t) * t).toFixed(3));
            }),
            (this._logger = e._logger
              .named("Sheet", t.address.sheetId)
              .named("Instance", t.address.sheetInstanceId)),
            (this.address = Object.assign(
              Object.assign({}, this._sheet.address),
              { sequenceName: "default" }
            )),
            (this.publicApi = new en(this)),
            (this._playbackControllerBox = new De(null != i ? i : new zt())),
            (this._prismOfStatePointer = Me(
              () => this._playbackControllerBox.prism.getValue().statePointer
            )),
            (this._positionD = Me(() => {
              const e = this._prismOfStatePointer.getValue();
              return Le(e.position);
            })),
            (this._positionFormatterD = Me(() => {
              const e = Le(this._subUnitsPerUnitD);
              return new sn(e);
            }));
        }
        pointerToPrism(e) {
          const { path: t } = ne(e);
          if (0 === t.length)
            return Me(() => ({
              length: Le(this.pointer.length),
              playing: Le(this.pointer.playing),
              position: Le(this.pointer.position),
            }));
          if (t.length > 1) return Me(() => {});
          const [n] = t;
          return "length" === n
            ? this._lengthD
            : "position" === n
            ? this._positionD
            : Me(
                "playing" === n
                  ? () => Le(this._prismOfStatePointer.getValue().playing)
                  : () => {}
              );
        }
        getKeyframesOfSimpleProp(e) {
          const { path: t, root: n } = ne(e);
          if (!tn(n))
            throw new Ft(
              "Argument prop must be a pointer to a SheetObject property"
            );
          const o = Le(
            this._project.pointers.historic.sheetsById[
              this._sheet.address.sheetId
            ].sequence.tracksByObject[n.address.objectKey]
          );
          if (!o) return [];
          const { trackData: i, trackIdByPropPath: r } = o,
            s = r[Lt(t)];
          if (!s) return [];
          const a = i[s];
          return a ? et.getSortedKeyframesCached(a.keyframes) : [];
        }
        get positionFormatter() {
          return this._positionFormatterD.getValue();
        }
        get prismOfStatePointer() {
          return this._prismOfStatePointer;
        }
        get length() {
          return this._lengthD.getValue();
        }
        get positionPrism() {
          return this._positionD;
        }
        get position() {
          return this._playbackControllerBox.get().getCurrentPosition();
        }
        get subUnitsPerUnit() {
          return this._subUnitsPerUnitD.getValue();
        }
        get positionSnappedToGrid() {
          return this.closestGridPosition(this.position);
        }
        set position(e) {
          let t = e;
          this.pause(), t > this.length && (t = this.length);
          const n = this.length;
          this._playbackControllerBox.get().gotoPosition(t > n ? n : t);
        }
        getDurationCold() {
          return this._lengthD.getValue();
        }
        get playing() {
          return Le(this._playbackControllerBox.get().statePointer.playing);
        }
        _makeRangeFromSequenceTemplate() {
          return Me(() => [0, Le(this._lengthD)]);
        }
        playDynamicRange(e, t) {
          return this._playbackControllerBox.get().playDynamicRange(e, t);
        }
        play(e, t) {
          return on(this, void 0, void 0, function* () {
            const n = this.length,
              o = e && e.range ? e.range : [0, n];
            const i =
              e && "number" == typeof e.iterationCount ? e.iterationCount : 1;
            const r = e && void 0 !== e.rate ? e.rate : 1;
            const s = e && e.direction ? e.direction : "normal";
            return yield this._play(i, [o[0], o[1]], r, s, t);
          });
        }
        _play(e, t, n, o, i) {
          return this._playbackControllerBox.get().play(e, t, n, o, i);
        }
        pause() {
          this._playbackControllerBox.get().pause();
        }
        replacePlaybackController(e) {
          this.pause();
          const t = this._playbackControllerBox.get();
          this._playbackControllerBox.set(e);
          const n = t.getCurrentPosition();
          t.destroy(), e.gotoPosition(n);
        }
      }
      class sn {
        constructor(e) {
          this._fps = e;
        }
        formatSubUnitForGrid(e) {
          const t = e % 1,
            n = 1 / this._fps;
          return Math.round(t / n) + "f";
        }
        formatFullUnitForGrid(e) {
          let t = e,
            n = "";
          if (t >= ln) {
            (n += Math.floor(t / ln) + "h"), (t %= ln);
          }
          if (t >= cn) {
            (n += Math.floor(t / cn) + "m"), (t %= cn);
          }
          if (t >= an) {
            (n += Math.floor(t / an) + "s"), (t %= an);
          }
          const o = 1 / this._fps;
          if (t >= o) {
            (n += Math.floor(t / o) + "f"), (t %= o);
          }
          return 0 === n.length ? "0s" : n;
        }
        formatForPlayhead(e) {
          let t = e,
            n = "";
          if (t >= ln) {
            const e = Math.floor(t / ln);
            (n += (0, Ut.A)(e.toString(), 2, "0") + "h"), (t %= ln);
          }
          if (t >= cn) {
            const e = Math.floor(t / cn);
            (n += (0, Ut.A)(e.toString(), 2, "0") + "m"), (t %= cn);
          } else n.length > 0 && (n += "00m");
          if (t >= an) {
            const e = Math.floor(t / an);
            (n += (0, Ut.A)(e.toString(), 2, "0") + "s"), (t %= an);
          } else n += "00s";
          const o = 1 / this._fps;
          if (t >= o) {
            const e = Math.round(t / o);
            (n += (0, Ut.A)(e.toString(), 2, "0") + "f"), (t %= o);
          } else if (t / o > 0.98) {
            const e = 1;
            (n += (0, Ut.A)(e.toString(), 2, "0") + "f"), (t %= o);
          } else n += "00f";
          return 0 === n.length ? "00s00f" : n;
        }
        formatBasic(e) {
          return e.toFixed(2) + "s";
        }
      }
      const an = 1,
        cn = 60 * an,
        ln = 60 * cn;
      var un = n(5434);
      function dn(e, { removeAlphaIfOpaque: t = !1 } = {}) {
        const n = ((255 * e.a) | 256).toString(16).slice(1);
        return `#${
          ((255 * e.r) | 256).toString(16).slice(1) +
          ((255 * e.g) | 256).toString(16).slice(1) +
          ((255 * e.b) | 256).toString(16).slice(1) +
          (t && "ff" === n ? "" : n)
        }`;
      }
      const fn = Ze((e) => {
        const t = Object.assign({}, e);
        return (
          Object.defineProperty(t, "toString", {
            value: () => dn(e),
            enumerable: !1,
            writable: !1,
            configurable: !1,
          }),
          t
        );
      });
      function pn(e) {
        function t(e) {
          return e >= 0.0031308
            ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
            : 12.92 * e;
        }
        return (function (e) {
          return Object.fromEntries(
            Object.entries(e).map(([e, t]) => [e, (0, un.A)(t, 0, 1)])
          );
        })({ r: t(e.r), g: t(e.g), b: t(e.b), a: e.a });
      }
      function hn(e) {
        function t(e) {
          return e >= 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
        }
        return { r: t(e.r), g: t(e.g), b: t(e.b), a: e.a };
      }
      function mn(e) {
        let t = 0.4122214708 * e.r + 0.5363325363 * e.g + 0.0514459929 * e.b,
          n = 0.2119034982 * e.r + 0.6806995451 * e.g + 0.1073969566 * e.b,
          o = 0.0883024619 * e.r + 0.2817188376 * e.g + 0.6299787005 * e.b,
          i = Math.cbrt(t),
          r = Math.cbrt(n),
          s = Math.cbrt(o);
        return {
          L: 0.2104542553 * i + 0.793617785 * r - 0.0040720468 * s,
          a: 1.9779984951 * i - 2.428592205 * r + 0.4505937099 * s,
          b: 0.0259040371 * i + 0.7827717662 * r - 0.808675766 * s,
          alpha: e.a,
        };
      }
      var gn = n(2854);
      function yn(e, t) {
        return e.length <= t ? e : e.substr(0, t - 3) + "...";
      }
      const vn = (e) =>
          "string" == typeof e
            ? `string("${yn(e, 10)}")`
            : "number" == typeof e
            ? `number(${yn(String(e), 10)})`
            : null === e
            ? "null"
            : void 0 === e
            ? "undefined"
            : "boolean" == typeof e
            ? String(e)
            : Array.isArray(e)
            ? "array"
            : "object" == typeof e
            ? "object"
            : "unknown",
        bn = Symbol("TheatrePropType_Basic");
      function wn(e) {
        return "object" == typeof e && !!e && "TheatrePropType" === e[bn];
      }
      function _n(e) {
        if ("number" == typeof e) return En(e);
        if ("boolean" == typeof e) return Cn(e);
        if ("string" == typeof e) return Dn(e);
        if ("object" == typeof e && e) {
          if (wn(e)) return e;
          if ((0, X.A)(e)) return Sn(e);
          throw new Ft(`This value is not a valid prop type: ${vn(e)}`);
        }
        throw new Ft(`This value is not a valid prop type: ${vn(e)}`);
      }
      const Sn = (e, t = {}) => {
          const n = (function (e) {
              const t = {};
              for (const n of Object.keys(e)) {
                const o = e[n];
                wn(o) ? (t[n] = o) : (t[n] = _n(o));
              }
              return t;
            })(e),
            o = new WeakMap();
          return {
            type: "compound",
            props: n,
            valueType: null,
            [bn]: "TheatrePropType",
            label: t.label,
            default: (0, gn.A)(n, (e) => e.default),
            deserializeAndSanitize: (e) => {
              if ("object" != typeof e || !e) return;
              if (o.has(e)) return o.get(e);
              const t = {};
              let i = !1;
              for (const [o, r] of Object.entries(n))
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                  const n = r.deserializeAndSanitize(e[o]);
                  null != n && ((i = !0), (t[o] = n));
                }
              return o.set(e, t), i ? t : void 0;
            },
          };
        },
        En = (e, t = {}) => {
          var n;
          return Object.assign(
            Object.assign(
              {
                type: "number",
                valueType: 0,
                default: e,
                [bn]: "TheatrePropType",
              },
              t || {}
            ),
            {
              label: t.label,
              nudgeFn: null !== (n = t.nudgeFn) && void 0 !== n ? n : jn,
              nudgeMultiplier:
                "number" == typeof t.nudgeMultiplier
                  ? t.nudgeMultiplier
                  : void 0,
              interpolate: Tn,
              deserializeAndSanitize: On(t.range),
            }
          );
        },
        On = (e) =>
          e
            ? (t) => {
                if ("number" == typeof t && isFinite(t))
                  return (0, un.A)(t, e[0], e[1]);
              }
            : Pn,
        Pn = (e) => ("number" == typeof e && isFinite(e) ? e : void 0),
        Tn = (e, t, n) => e + n * (t - e),
        Mn = (e = { r: 0, g: 0, b: 0, a: 1 }, t = {}) => {
          const n = {};
          for (const t of ["r", "g", "b", "a"])
            n[t] = Math.min(Math.max(e[t], 0), 1);
          return {
            type: "rgba",
            valueType: null,
            default: fn(n),
            [bn]: "TheatrePropType",
            label: t.label,
            interpolate: xn,
            deserializeAndSanitize: Rn,
          };
        },
        Rn = (e) => {
          if (!e) return;
          let t = !0;
          for (const n of ["r", "g", "b", "a"])
            (Object.prototype.hasOwnProperty.call(e, n) &&
              "number" == typeof e[n]) ||
              (t = !1);
          if (!t) return;
          const n = {};
          for (const t of ["r", "g", "b", "a"])
            n[t] = Math.min(Math.max(e[t], 0), 1);
          return fn(n);
        },
        xn = (e, t, n) => {
          const o = mn(hn(e)),
            i = mn(hn(t)),
            r = pn(
              (function (e) {
                let t = e.L + 0.3963377774 * e.a + 0.2158037573 * e.b,
                  n = e.L - 0.1055613458 * e.a - 0.0638541728 * e.b,
                  o = e.L - 0.0894841775 * e.a - 1.291485548 * e.b,
                  i = t * t * t,
                  r = n * n * n,
                  s = o * o * o;
                return {
                  r: 4.0767416621 * i - 3.3077115913 * r + 0.2309699292 * s,
                  g: -1.2684380046 * i + 2.6097574011 * r - 0.3413193965 * s,
                  b: -0.0041960863 * i - 0.7034186147 * r + 1.707614701 * s,
                  a: e.alpha,
                };
              })({
                L: (1 - n) * o.L + n * i.L,
                a: (1 - n) * o.a + n * i.a,
                b: (1 - n) * o.b + n * i.b,
                alpha: (1 - n) * o.alpha + n * i.alpha,
              })
            );
          return fn(r);
        },
        Cn = (e, t = {}) => {
          var n;
          return {
            type: "boolean",
            default: e,
            valueType: null,
            [bn]: "TheatrePropType",
            label: t.label,
            interpolate: null !== (n = t.interpolate) && void 0 !== n ? n : kn,
            deserializeAndSanitize: An,
          };
        },
        An = (e) => ("boolean" == typeof e ? e : void 0);
      function kn(e) {
        return e;
      }
      const Dn = (e, t = {}) => {
        var n;
        return {
          type: "string",
          default: e,
          valueType: null,
          [bn]: "TheatrePropType",
          label: t.label,
          interpolate: null !== (n = t.interpolate) && void 0 !== n ? n : kn,
          deserializeAndSanitize: In,
        };
      };
      function In(e) {
        return "string" == typeof e ? e : void 0;
      }
      const jn = ({ config: e, deltaX: t, deltaFraction: n, magnitude: o }) => {
        var i;
        const { range: r } = e;
        return e.nudgeMultiplier ||
          !r ||
          r.includes(1 / 0) ||
          r.includes(-1 / 0)
          ? t * o * (null !== (i = e.nudgeMultiplier) && void 0 !== i ? i : 1)
          : n * (r[1] - r[0]) * o;
      };
      function Nn(e, t, n) {
        const o = e
          .replace(/^[\s\/]*/, "")
          .replace(/[\s\/]*$/, "")
          .replace(/\s*\/\s*/g, " / ");
        return o;
      }
      new WeakMap();
      class Ln {
        get type() {
          return "Theatre_Sheet_PublicAPI";
        }
        constructor(e) {
          ze(this, e);
        }
        object(e, t, n) {
          const o = He(this),
            i = Nn(e, 0, Gt.warning),
            r = o.getObject(i),
            s =
              null == n
                ? void 0
                : n.__actions__THIS_API_IS_UNSTABLE_AND_WILL_CHANGE_IN_THE_NEXT_VERSION;
          if (r) return s && r.template._temp_setActions(s), r.publicApi;
          {
            const e = Sn(t);
            return o.createObject(i, null, e, s).publicApi;
          }
        }
        get sequence() {
          return He(this).getSequence().publicApi;
        }
        get project() {
          return He(this).project.publicApi;
        }
        get address() {
          return Object.assign({}, He(this).address);
        }
        detachObject(e) {
          const t = He(this),
            n = Nn(e, 0, Gt.warning);
          if (!t.getObject(n))
            return (
              Gt.warning(
                `Couldn't delete object "${n}"`,
                `There is no object with key "${n}".\n\nTo fix this, make sure you are calling \`sheet.deleteObject("${n}")\` with the correct key.`
              ),
              void console.warn(`Object key "${n}" does not exist.`)
            );
          t.deleteObject(n);
        }
      }
      var Bn = n(2727);
      class Fn {
        constructor(e, t) {
          (this.template = e),
            (this.instanceId = t),
            (this._objects = new De({})),
            (this.objectsP = this._objects.pointer),
            (this.type = "Theatre_Sheet"),
            (this._logger = e.project._logger.named("Sheet", t)),
            this._logger._trace("creating sheet"),
            (this.project = e.project),
            (this.address = Object.assign(Object.assign({}, e.address), {
              sheetInstanceId: this.instanceId,
            })),
            (this.publicApi = new Ln(this));
        }
        createObject(e, t, n, o = {}) {
          const i = this.template
            .getObjectTemplate(e, t, n, o)
            .createInstance(this, t, n);
          return this._objects.setByPointer((t) => t[e], i), i;
        }
        getObject(e) {
          return this._objects.get()[e];
        }
        deleteObject(e) {
          this._objects.reduce((t) => {
            const n = Object.assign({}, t);
            return delete n[e], n;
          });
        }
        getSequence() {
          if (!this._sequence) {
            const e = Me(() => {
                const e = Le(
                  this.project.pointers.historic.sheetsById[
                    this.address.sheetId
                  ].sequence.length
                );
                return Un(e);
              }),
              t = Me(() => {
                const e = Le(
                  this.project.pointers.historic.sheetsById[
                    this.address.sheetId
                  ].sequence.subUnitsPerUnit
                );
                return Vn(e);
              });
            this._sequence = new rn(this.template.project, this, e, t);
          }
          return this._sequence;
        }
      }
      const Un = (e) => ("number" == typeof e && isFinite(e) && e > 0 ? e : 10),
        Vn = (e) =>
          "number" == typeof e && (0, Bn.A)(e) && e >= 1 && e <= 1e3 ? e : 30;
      class Hn {
        constructor(e, t) {
          (this.project = e),
            (this.type = "Theatre_SheetTemplate"),
            (this._instances = new De({})),
            (this.instancesP = this._instances.pointer),
            (this._objectTemplates = new De({})),
            (this.objectTemplatesP = this._objectTemplates.pointer),
            (this.address = Object.assign(Object.assign({}, e.address), {
              sheetId: t,
            }));
        }
        getInstance(e) {
          let t = this._instances.get()[e];
          return (
            t ||
              ((t = new Fn(this, e)),
              this._instances.setByPointer((t) => t[e], t)),
            t
          );
        }
        getObjectTemplate(e, t, n, o) {
          let i = this._objectTemplates.get()[e];
          return (
            i ||
              ((i = new jt(this, e, t, n, o)),
              this._objectTemplates.setByPointer((t) => t[e], i)),
            i
          );
        }
      }
      const zn = { currentProjectStateDefinitionVersion: "0.4.0" };
      function Wn() {}
      function $n(e) {
        var t, n;
        const o = (
            null === (t = null == e ? void 0 : e.logging) || void 0 === t
              ? void 0
              : t.internal
          )
            ? null !== (n = e.logging.min) && void 0 !== n
              ? n
              : mt.WARN
            : 1 / 0,
          i = o <= mt.DEBUG,
          r = o <= mt.ERROR,
          s = St(void 0, {
            _debug: i
              ? console.debug.bind(
                  console,
                  "_coreLogger(TheatreInternalLogger) debug"
                )
              : Wn,
            _error: r
              ? console.error.bind(
                  console,
                  "_coreLogger(TheatreInternalLogger) error"
                )
              : Wn,
          });
        if (e) {
          const { logger: t, logging: n } = e;
          t && s.configureLogger(t),
            n ? s.configureLogging(n) : s.configureLogging({ dev: !1 });
        }
        return s.getLogger().named("Theatre");
      }
      class Gn {
        constructor(e, t = {}, n) {
          var o;
          (this.config = t),
            (this.publicApi = n),
            (this._sheetTemplates = new De({})),
            (this.sheetTemplatesP = this._sheetTemplates.pointer),
            (this.type = "Theatre_Project"),
            (this._logger = $n({ logging: { dev: !0 } }).named("Project", e)),
            this._logger.traceDev("creating project"),
            (this.address = { projectId: e });
          const i = new De({
            loadingState: { type: "loaded" },
            lastExportedObject: null,
          });
          t.state &&
            Object.values(t.state.sheetsById).forEach((e) =>
              Object.values(e.sequence.tracksByObject).forEach((e) =>
                Object.values(e.trackData).forEach((e) => {
                  e.keyframes = et.fromArray(e.keyframes);
                })
              )
            );
          const r = new De({
            historic:
              null !== (o = t.state) && void 0 !== o
                ? o
                : {
                    sheetsById: {},
                    definitionVersion: zn.currentProjectStateDefinitionVersion,
                    revisionHistory: [],
                  },
          });
          (this.diskStateAtom = r),
            (this._assetStorageReadyDeferred = Vt()),
            (this.assetStorage = {
              getAssetUrl: (e) => {
                var n;
                return `${
                  null === (n = t.assets) || void 0 === n ? void 0 : n.baseUrl
                }/${e}`;
              },
              createAsset: () => {
                throw new Error("Please wait for Project.ready to use assets.");
              },
            }),
            (this._pointerProxies = {
              historic: new Fe(r.pointer.historic),
              ephemeral: new Fe(i.pointer),
            }),
            (this.pointers = {
              historic: this._pointerProxies.historic.pointer,
              ephemeral: this._pointerProxies.ephemeral.pointer,
            }),
            Ue.add(e, this),
            (this._studioReadyDeferred = Vt()),
            this._studioReadyDeferred.resolve(void 0),
            this._assetStorageReadyDeferred.resolve(void 0),
            (this._readyPromise = Promise.all([
              this._studioReadyDeferred.promise,
              this._assetStorageReadyDeferred.promise,
            ]).then(() => {})),
            t.state ||
              ("undefined" == typeof window &&
                console.error(
                  `Argument config.state in Theatre.getProject("${e}", config) is empty. You can safely ignore this message if you're developing a Next.js/Remix project in development mode. But if you are shipping to your end-users, then you need to set config.state, otherwise your project's state will be empty and nothing will animate. Learn more at https://www.theatrejs.com/docs/latest/manual/projects#state`
                ));
        }
        attachToStudio() {
          throw new Error(
            "Studio has been removed! This function should not be called anymore"
          );
        }
        get isAttachedToStudio() {
          return (
            console.error(
              "Studio has been removed! This function shouldn't be called anymore"
            ),
            !1
          );
        }
        get ready() {
          return this._readyPromise;
        }
        isReady() {
          return (
            "resolved" === this._studioReadyDeferred.status &&
            "resolved" === this._assetStorageReadyDeferred.status
          );
        }
        getOrCreateSheet(e, t = "default") {
          let n = this._sheetTemplates.get()[e];
          return (
            n ||
              ((n = new Hn(this, e)),
              this._sheetTemplates.reduce((t) =>
                Object.assign(Object.assign({}, t), { [e]: n })
              )),
            n.getInstance(t)
          );
        }
      }
      class qn {
        get type() {
          return "Theatre_Project_PublicAPI";
        }
        constructor(e, t = {}) {
          ze(this, new Gn(e, t, this));
        }
        get ready() {
          return He(this).ready;
        }
        get isReady() {
          return He(this).isReady();
        }
        get address() {
          return Object.assign({}, He(this).address);
        }
        getAssetUrl(e) {
          if (this.isReady)
            return e.id ? He(this).assetStorage.getAssetUrl(e.id) : void 0;
          console.error(
            "Calling `project.getAssetUrl()` before `project.ready` is resolved, will always return `undefined`. Either use `project.ready.then(() => project.getAssetUrl())` or `await project.ready` before calling `project.getAssetUrl()`."
          );
        }
        sheet(e, t = "default") {
          const n = Nn(e, 0, Gt.warning);
          return He(this).getOrCreateSheet(n, t).publicApi;
        }
        setState(e) {
          He(this).diskStateAtom.setByPointer(
            He(this).diskStateAtom.pointer.historic.sheetsById,
            e
          );
        }
      }
      n(8792);
      const Yn = (e, t) => {
        ((e, t) => {
          if (
            Array.isArray(t) ||
            null == t ||
            t.definitionVersion !== zn.currentProjectStateDefinitionVersion
          )
            throw new Ft(
              `Error validating conf.state in Theatre.getProject(${JSON.stringify(
                e
              )}, conf). The state seems to be formatted in a way that is unreadable to Theatre.js. Read more at https://www.theatrejs.com/docs/latest/manual/projects#state`
            );
        })(e, t);
      };
      class Xn {
        constructor() {}
        get type() {
          return "Theatre_CoreBundle";
        }
        get version() {
          return process.env.THEATRE_VERSION;
        }
        getBitsForStudio(e, t) {
          throw new Error(
            "Studio has been removed! This function shouldn't be called anymore"
          );
        }
      }
      function Kn(e) {
        return `${e.uuid}`;
      }
      !(function () {
        if (
          "undefined" == typeof window &&
          !0 !== n.g.__THEATREJS__FORCE_CONNECT_CORE_AND_STUDIO
        )
          return;
        const e = "undefined" != typeof window ? window : n.g,
          t = e[Wt];
        if (void 0 !== t) {
          if ("object" == typeof t && t && "string" == typeof t.version)
            throw new Error(
              "It seems that the module '@theatre-local/core' is loaded more than once. This could have two possible causes:\n1. You might have two separate versions of Theatre.js in node_modules.\n2. Or this might be a bundling misconfiguration, in case you're using a bundler like Webpack/ESBuild/Rollup.\n\nNote that it **is okay** to import '@theatre-local/core' multiple times. But those imports should point to the same module."
            );
          console.warn(
            `The variable window.${Wt} seems to be already set by a module other than @theatre-local/core.`
          );
        }
        const o = new Xn();
        e[Wt] = o;
      })();
      const Jn = "DEFAULT_ANIMATION_SHEET_NAME",
        Qn = 10,
        Zn = [
          "color",
          "emissive",
          "specular",
          "specularColor",
          "attenuationColor",
          "sheenColor",
        ],
        eo = -911231231231232,
        to = { r: -1, g: -1, b: -1, a: 0.5 };
      function no(e, t) {
        let n = !0;
        const o = (function (e, t = {}) {
            const n = Ue.get(e);
            if (n) return n.publicApi;
            const o = $n().named("Project", e);
            return (
              t.state
                ? (Yn(e, t.state),
                  o._debug("deep validated config.state on disk"))
                : o._debug("no config.state"),
              new qn(e, t)
            );
          })(e, { state: t }),
          i = new Map();
        return {
          getAnimation: function (e) {
            const t = o.sheet(e);
            return {
              play: function () {
                t.sequence.play({ rate: 1 / Qn });
              },
              pause: function () {
                t.sequence.pause();
              },
              setPosition: function (e) {
                t.sequence.position = e;
              },
              animateObject3D: function (e) {
                if (i.has(e.uuid)) return;
                function o(e, t) {
                  t.x !== eo && (e.x = t.x),
                    t.y !== eo && (e.y = t.y),
                    t.z !== eo && (e.z = t.z);
                }
                const r = t
                  .object(Kn(e), {
                    position: Sn({ x: En(eo), y: En(eo), z: En(eo) }),
                    rotation: Sn({ x: En(eo), y: En(eo), z: En(eo) }),
                    scale: Sn({ x: En(eo), y: En(eo), z: En(eo) }),
                  })
                  .onValuesChange((t) => {
                    n &&
                      (o(e.position, t.position),
                      o(e.rotation, t.rotation),
                      o(e.scale, t.scale));
                  });
                i.set(e.uuid, r);
              },
              animateMaterial: function (e) {
                if (i.has(e.uuid)) return;
                const o = R[e.type],
                  r = M[o],
                  s = {};
                r.forEach((e) => {
                  Zn.includes(e) ? (s[e] = Mn(to)) : (s[e] = En(eo));
                });
                const a = t
                  .object(Kn(e), s, { reconfigure: !0 })
                  .onValuesChange((t) => {
                    if (n) for (const e in t) Zn.includes(e) ? i(e) : o(e);
                    function o(n, o) {
                      t[n] !== eo &&
                        void 0 !== e[n] &&
                        ((e[n] = o || t[n]),
                        "attenuationDistance" === n &&
                          0 === e[n] &&
                          (e[n] = 1 / 0));
                    }
                    function i(e) {
                      t[e].a !== to.a &&
                        o(e, new E.Q1f(String(dn(t[e])).slice(0, -2)));
                    }
                  });
                i.set(e.uuid, a);
              },
              removeObjectAnimation: function (e) {
                const n = i.get(e.uuid);
                n && (n(), t.detachObject(Kn(e)), i.delete(e.uuid));
              },
              animationSheet: t,
            };
          },
          setState: function (e) {
            o.setState(e);
          },
          setActive: function (e) {
            if (((n = e), e)) {
              const e = o.sheet(Jn).sequence.position;
              (o.sheet(Jn).sequence.position += e > 1e-5 ? -1e-5 : 1e-5),
                setTimeout(() => {
                  o.sheet(Jn).sequence.position = e;
                });
            }
          },
        };
      }
      var oo, io, ro;
      function so(e, t) {
        return {
          set: (n, o, i) => {
            const r = n[o] !== i,
              s = Reflect.set(n, o, i);
            return e.includes(o) && r && t(o), s;
          },
        };
      }
      function ao(e) {
        const t = e;
        function n(e, n) {
          const o = t[e],
            i = new Proxy(
              o,
              so(["x", "y", "z", "_x", "_y", "_z"], (e) => {
                t.dispatchEvent({ type: n, target: t, property: e });
              })
            );
          !(function (e, t, n) {
            Reflect.deleteProperty(e, t),
              Reflect.defineProperty(e, t, {
                value: n,
                configurable: !1,
                enumerable: !0,
                writable: !1,
              });
          })(t, e, i);
        }
        return (
          n("position", io.UpdatePosition),
          n("rotation", io.UpdateRotation),
          n("scale", io.UpdateScale),
          t
        );
      }
      function co(e) {
        return e.type === f.Light;
      }
      function lo(e) {
        return e.type === f.Mesh;
      }
      function uo(e) {
        return e.type === f.Scene;
      }
      function fo(e) {
        return e.type === f.Imported;
      }
      function po(e) {
        return e.type === f.Water;
      }
      function ho(e) {
        return (null == e ? void 0 : e.assetType) === v.VideoTexture;
      }
      function mo(e) {
        return e.type === g.Physical;
      }
      function go(e) {
        return e.type === f.Camera;
      }
      function yo(e) {
        return e.cameraType === h.Perspective;
      }
      function vo(e) {
        return e.cameraType === h.Orthographic;
      }
      function bo(e) {
        return e.lightType === m.Point;
      }
      function wo(e) {
        return e.lightType === m.Directional;
      }
      function _o(e) {
        return e.lightType === m.Ambient;
      }
      function So(e) {
        return e.lightType === m.Spot;
      }
      function Eo(e) {
        return "MeshBasicMaterial" === e.type;
      }
      function Oo(e) {
        return "MeshPhongMaterial" === e.type;
      }
      function Po(e) {
        return "MeshPhysicalMaterial" === e.type;
      }
      function To(e) {
        Object.keys(e).forEach((t) => {
          const n = e[t];
          !!n &&
            "object" == typeof n &&
            "dispose" in n &&
            "function" == typeof n.dispose &&
            n.dispose();
        }),
          e.dispose();
      }
      function Mo(e) {
        return e ? (e.userData.isPwObject ? e : Mo(e.parent)) : null;
      }
      function Ro(e, t) {
        return t ? e.set(t.x, t.y, t.z) : e.set(0, 0, 0);
      }
      function xo(e, t, n) {
        (e.wrapS = x[t.wrapS]),
          (e.wrapT = x[t.wrapT]),
          e.repeat.set(t.repeat.x, t.repeat.y),
          e.offset.set(t.offset.x, t.offset.y),
          e.center.set(t.center.x, t.center.y),
          e.image && (e.needsUpdate = !0),
          ho(t) &&
            ((n && ho(n) && n.loop === t.loop) || e.source.data.play(),
            (e.source.data.loop = t.loop));
      }
      !(function (e) {
        (e.MouseDown = "MOUSE_DOWN"),
          (e.MouseUp = "MOUSE_UP"),
          (e.MouseMove = "MOUSE_MOVE"),
          (e.Loaded = "LOADED"),
          (e.ResourcesLoaded = "RESOURCES_LOADED"),
          (e.SceneReady = "SCENE_READY");
      })(oo || (oo = {})),
        (function (e) {
          (e.UpdatePosition = "UPDATE_POSITION"),
            (e.UpdateRotation = "UPDATE_ROTATION"),
            (e.UpdateScale = "UPDATE_SCALE");
        })(io || (io = {})),
        (function (e) {
          e.Update = "UPDATE";
        })(ro || (ro = {}));
      const Co = new E.Pq0();
      function Ao(e) {
        const t = new Map();
        return (
          e.traverse((e) => {
            (e instanceof E.eaF || e instanceof E.ZLX) &&
              t.set(e.material.uuid, e.material);
          }),
          Array.from(t.values())
        );
      }
      new E.NRn();
      var ko = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      class Do {
        constructor(e, t) {
          this.usedBy = new Set();
          const { assetType: n, assetUrl: o } = e;
          (this.loaded = !1),
            (this.assetUrl = o),
            (this.assetType = n === v.Environment ? e.environmentAssetType : n),
            (this.loader = t);
        }
        getData() {
          return ko(this, void 0, void 0, function* () {
            if (this.loaded && this.data) return this.data;
            const e = yield this.loadAssetData(this.assetType, this.assetUrl);
            return (this.data = e), (this.loaded = !0), this.data;
          });
        }
        loadAssetData(e, t) {
          return ko(this, void 0, void 0, function* () {
            return yield this.loader.loadAsync(e, t);
          });
        }
        dispose() {
          if (this.data)
            switch (this.assetType) {
              case v.Texture:
              case v.HDRTexture:
              case v.EXRTexture:
                this.data.dispose();
                break;
              case v.Gltf:
                this.data.scenes.forEach((e) => {
                  e.traverse(function (e) {
                    e instanceof E.eaF &&
                      (e.geometry.dispose(), To(e.material));
                  });
                });
                break;
              case v.FBX:
              case v.Obj:
                this.data.traverse(function (e) {
                  e instanceof E.eaF && (e.geometry.dispose(), To(e.material));
                });
            }
        }
      }
      var Io = n(1358);
      const jo = {
          [w.Clamp]: E.ghU,
          [w.Repeat]: E.GJx,
          [w.MirroredRepeat]: E.kTW,
        },
        No = [
          v.Environment,
          v.Texture,
          v.HDRTexture,
          v.EXRTexture,
          v.Gltf,
          v.Obj,
          v.FBX,
          v.VideoTexture,
        ];
      class Lo {
        constructor(e, t) {
          const { uuid: n, assetUrl: o } = e;
          if (
            ((this.uuid = n),
            (this.assetUrl = o),
            t.usedBy.add(n),
            !No.includes(e.assetType))
          )
            throw new Error(`Asset type ${e.assetType} is not supported!`);
          this.assetInstance = t.getData().then((t) => {
            switch (e.assetType) {
              case v.HDRTexture:
              case v.EXRTexture:
              case v.Texture: {
                const {
                    center: n,
                    offset: o,
                    repeat: i,
                    wrapS: r = w.Clamp,
                    wrapT: s = w.Clamp,
                  } = e,
                  a = t.clone();
                return (
                  (a.center = new E.I9Y(n.x, n.y)),
                  (a.offset = new E.I9Y(o.x, o.y)),
                  (a.repeat = new E.I9Y(i.x, i.y)),
                  (a.wrapS = jo[r]),
                  (a.wrapT = jo[s]),
                  (a.colorSpace = E.er$),
                  (a.needsUpdate = !0),
                  a
                );
              }
              case v.VideoTexture: {
                const {
                    center: t,
                    offset: n,
                    repeat: i,
                    wrapS: r = w.Clamp,
                    wrapT: s = w.Clamp,
                    loop: a,
                  } = e,
                  c = document.createElement("video");
                c.setAttribute("id", "video"),
                  (c.crossOrigin = "anonymous"),
                  (c.style.display = "none"),
                  (c.playsInline = !0),
                  (c.autoplay = !0),
                  (c.muted = !0),
                  (c.loop = a),
                  (c.src = o),
                  document.body.append(c),
                  c.load(),
                  (c.preload = "auto"),
                  c.play();
                const l = new E.Nv2(c);
                return (
                  (l.center = new E.I9Y(t.x, t.y)),
                  (l.offset = new E.I9Y(n.x, n.y)),
                  (l.repeat = new E.I9Y(i.x, i.y)),
                  (l.wrapS = jo[r]),
                  (l.wrapT = jo[s]),
                  (l.colorSpace = E.er$),
                  (l.needsUpdate = !0),
                  new Promise((e) => {
                    c.oncanplay = () => {
                      e(l);
                    };
                  })
                );
              }
              case v.Environment: {
                const e = t.clone();
                e.mapping = E.wfO;
                const n = t.clone();
                return (
                  (n.mapping = E.uV5),
                  (e.needsUpdate = !0),
                  { reflection: e, refraction: n }
                );
              }
              case v.Gltf: {
                const e = new E.YJl(),
                  n = t;
                return (
                  n.scenes.forEach((t) => {
                    e.add(Io.o8(t));
                  }),
                  (e.userData = { isGLTF: !0 }),
                  {
                    model: e,
                    animations: n.animations.map((e) => e.clone()),
                    materials: Ao(e),
                  }
                );
              }
              case v.Obj: {
                const e = t.clone();
                return { model: e, materials: Ao(e) };
              }
              case v.FBX: {
                const e = Io.o8(t);
                return { model: e, materials: Ao(e) };
              }
              default:
                throw new Error(
                  "Resource type should be checked before the async code, otherwise error can't be caught!"
                );
            }
          });
        }
        dispose() {
          this.assetInstance.then((e) => {
            if (
              (e instanceof E.Nv2 &&
                (document.body.removeChild(e.source.data), e.dispose()),
              e instanceof E.gPd && e.dispose(),
              e instanceof E.YJl)
            ) {
              e.traverse(function (e) {
                e instanceof E.eaF && (e.geometry.dispose(), To(e.material));
              });
            }
          });
        }
      }
      function Bo(e, t) {
        const n = new Map(),
          o = new Map(),
          i = new Set();
        let r = !1;
        function s() {
          i.size > 0 ||
            r ||
            ((r = !0), t.dispatchEvent({ type: oo.ResourcesLoaded }));
        }
        function a(t) {
          const o = new Do(t, e);
          return n.set(t.assetUrl, o), o;
        }
        return {
          createResource: function (e) {
            const t = new Lo(e, n.get(e.assetUrl) || a(e));
            return (
              i.add(t),
              o.set(e.uuid, t),
              t.assetInstance.finally(() => {
                i.delete(t), s();
              }),
              t
            );
          },
          createAsset: a,
          getAsset: n.get.bind(n),
          deleteResource: function (e) {
            const t = o.get(e);
            if (!t) return;
            t.dispose(), o.delete(e);
            const i = n.get(t.assetUrl);
            i &&
              (i.usedBy.delete(t.uuid),
              0 === i.usedBy.size && (n.delete(t.assetUrl), i.dispose()));
          },
          dispose: function () {
            n.forEach((e) => {
              e.dispose();
            }),
              o.forEach((e) => {
                e.dispose();
              }),
              o.clear(),
              n.clear();
          },
          getResource: o.get.bind(o),
          checkIfResourceLoadingFinished: s,
        };
      }
      var Fo = n(8087),
        Uo = n(9511),
        Vo = n(3206),
        Ho = n(2701),
        zo = n(5837),
        Wo = n(8003),
        $o = n(9174),
        Go = n(9167);
      class qo extends E.aHM {
        loadAsync() {
          return Promise.resolve();
        }
        load() {}
      }
      var Yo,
        Xo = n(7469);
      !(function (e) {
        (e.Blur = "BLUR"),
          (e.DepthOfField = "DOF"),
          (e.Bloom = "BLOOM"),
          (e.Vignette = "VIGNETTE"),
          (e.Pixelation = "PIXELATION"),
          (e.BrightnessContrast = "BRIGHTNESS_CONTRAST"),
          (e.HueSaturation = "HUE_SATURATION"),
          (e.Noise = "NOISE"),
          (e.ColorDepth = "COLOR_DEPTH"),
          (e.ToneMapping = "TONE_MAPPING"),
          (e.SMAA = "SMAA");
      })(Yo || (Yo = {}));
      const Ko = [
        Yo.SMAA,
        Yo.DepthOfField,
        Yo.Bloom,
        Yo.Vignette,
        Yo.ToneMapping,
        Yo.BrightnessContrast,
        Yo.HueSaturation,
        Yo.ColorDepth,
        Yo.Noise,
        Yo.Pixelation,
      ];
      const Jo = (function () {
        const e = new Map();
        return (
          Ko.forEach((t, n) => {
            e.set(t, n);
          }),
          e
        );
      })();
      function Qo(e) {
        return e.type === Yo.Bloom;
      }
      function Zo(e) {
        return e.type === Yo.Vignette;
      }
      function ei(e) {
        return e.type === Yo.Noise;
      }
      function ti(e) {
        return e.type === Yo.SMAA;
      }
      function ni(e) {
        return e.type === Yo.DepthOfField;
      }
      function oi(e) {
        return e.type === Yo.Pixelation;
      }
      function ii(e) {
        return e.type === Yo.HueSaturation;
      }
      function ri(e) {
        return e.type === Yo.ColorDepth;
      }
      function si(e) {
        return e.type === Yo.BrightnessContrast;
      }
      function ai(e) {
        return e.type === Yo.ToneMapping;
      }
      function ci(e, t) {
        function n(e, t) {
          const { blendFunction: n, opacity: o, bits: i } = t;
          (e.bitDepth = i),
            (e.blendMode.blendFunction = n),
            e.blendMode.setOpacity(o);
        }
        return {
          updateEffect: function (o) {
            var i;
            const { type: r } = o,
              s = null === (i = e.get(r)) || void 0 === i ? void 0 : i.effect;
            if (!s)
              throw new Error(
                "Effect that you are trying to update doesn't exist!"
              );
            Qo(o) &&
              (function (e, t) {
                const {
                  blendFunction: n,
                  filter: o,
                  intensity: i,
                  luminanceSmoothing: r,
                  luminanceThreshold: s,
                  opacity: a,
                  radius: c,
                } = t;
                (e.luminanceMaterial.threshold = s),
                  (e.luminanceMaterial.smoothing = r),
                  (e.blendMode.blendFunction = n),
                  e.blendMode.setOpacity(a),
                  (e.mipmapBlurPass.radius = c),
                  (e.intensity = i),
                  (e.luminancePass.enabled = o),
                  (e.luminanceMaterial.needsUpdate = !0);
              })(s, o),
              Zo(o) &&
                (function (e, t) {
                  const {
                    blendFunction: n,
                    technique: o,
                    offset: i,
                    opacity: r,
                    darkness: s,
                  } = t;
                  (e.darkness = s),
                    (e.offset = i),
                    (e.technique = o),
                    (e.blendMode.blendFunction = n),
                    e.blendMode.setOpacity(r);
                })(s, o),
              ni(o) &&
                (function (e, t) {
                  const {
                    bokehScale: n,
                    focusRange: o,
                    focusDistance: i,
                    resolutionScale: r,
                    blendFunction: s,
                    opacity: a,
                  } = t;
                  (e.bokehScale = n),
                    (e.resolution.scale = r),
                    (e.cocMaterial.focusDistance = i),
                    (e.cocMaterial.focusRange = o),
                    (e.cocMaterial.needsUpdate = !0),
                    (e.blendMode.blendFunction = s),
                    e.blendMode.setOpacity(a);
                })(s, o),
              oi(o) &&
                (function (e, t) {
                  const { granularity: n } = t;
                  e.granularity = n;
                })(s, o),
              ii(o) &&
                (function (e, t) {
                  const {
                    blendFunction: n,
                    opacity: o,
                    hue: i,
                    saturation: r,
                  } = t;
                  (e.hue = i),
                    (e.saturation = r),
                    (e.blendMode.blendFunction = n),
                    e.blendMode.setOpacity(o);
                })(s, o),
              ri(o) && n(s, o),
              si(o) &&
                (function (e, t) {
                  const {
                    blendFunction: n,
                    opacity: o,
                    contrast: i,
                    brightness: r,
                  } = t;
                  (e.contrast = i),
                    (e.brightness = r),
                    (e.blendMode.blendFunction = n),
                    e.blendMode.setOpacity(o);
                })(s, o),
              ei(o) &&
                (function (e, t) {
                  const { blendFunction: n, opacity: o } = t;
                  (e.blendMode.blendFunction = n), e.blendMode.setOpacity(o);
                })(s, o),
              ri(o) && n(s, o),
              ti(o) &&
                (function (e, t) {
                  const {
                    edgeContrastFactor: n,
                    edgeMode: o,
                    edgeThreshold: i,
                    predicationMode: r,
                    predicationScale: s,
                    predicationStrength: a,
                    predicationThreshold: c,
                    preset: l,
                  } = t;
                  e.applyPreset(l);
                  const u = e.edgeDetectionMaterial;
                  (u.edgeDetectionMode = Number(o)),
                    (u.predicationMode = Number(r)),
                    (u.predicationScale = s),
                    (u.predicationStrength = a),
                    (u.predicationThreshold = c),
                    (u.edgeDetectionThreshold = i),
                    (u.localContrastAdaptationFactor = n),
                    (u.needsUpdate = !0);
                })(s, o),
              ai(o) &&
                (function (e, n) {
                  const {
                    adaptationRate: o,
                    averageLuminance: i,
                    exposure: r,
                    middleGrey: s,
                    minLuminance: a,
                    mode: c,
                    whitePoint: l,
                    resolution: u,
                    blendFunction: d,
                    opacity: f,
                  } = n;
                  (e.resolution = u),
                    (e.mode = Number(c)),
                    (e.adaptationRate = o),
                    e.uniforms.get("averageLuminance") &&
                      (e.uniforms.get("averageLuminance").value = i),
                    e.uniforms.get("middleGrey") &&
                      (e.uniforms.get("middleGrey").value = s),
                    e.uniforms.get("whitePoint") &&
                      (e.uniforms.get("whitePoint").value = l),
                    (e.adaptiveLuminanceMaterial.minLuminance = a),
                    (t.getRenderer().toneMappingExposure = r),
                    (e.blendMode.blendFunction = d),
                    e.blendMode.setOpacity(f);
                })(s, o);
          },
        };
      }
      function li(e, t, n) {
        const { updateEffect: o } = ci(e, t);
        return {
          updateEffect: o,
          createEffect: function (i) {
            var r;
            const { type: s, opacity: a } = i;
            if (null === (r = e.get(s)) || void 0 === r ? void 0 : r.effect)
              throw Error(
                `Trying to create an effect that's already added ${s}`
              );
            let c;
            if (
              (Qo(i) &&
                (c = (function (e) {
                  const {
                      filter: t,
                      intensity: n,
                      luminanceSmoothing: o,
                      luminanceThreshold: i,
                      radius: r,
                      blendFunction: s,
                    } = e,
                    a = new Xo.bv({
                      luminanceSmoothing: o,
                      luminanceThreshold: i,
                      intensity: n,
                      blendFunction: s,
                      mipmapBlur: !0,
                      radius: r,
                    });
                  return (a.luminancePass.enabled = !!t), a;
                })(i)),
              Zo(i) &&
                (c = (function (e) {
                  const {
                    offset: t,
                    darkness: n,
                    technique: o,
                    blendFunction: i,
                  } = e;
                  return new Xo.K1({
                    offset: t,
                    darkness: n,
                    technique: o,
                    blendFunction: i,
                  });
                })(i)),
              ei(i) &&
                (c = (function (e) {
                  const { blendFunction: t } = e;
                  return new Xo.i({ blendFunction: t });
                })(i)),
              ni(i) &&
                (c = (function (e) {
                  const {
                    bokehScale: t,
                    focusRange: n,
                    focusDistance: o,
                    resolutionScale: i,
                    blendFunction: r,
                  } = e;
                  return new Xo.kt(void 0, {
                    bokehScale: t,
                    focusRange: n,
                    focusDistance: o,
                    resolutionScale: i,
                    blendFunction: r,
                  });
                })(i)),
              oi(i) &&
                (c = (function (e) {
                  const { granularity: t } = e;
                  return new Xo.jz(t);
                })(i)),
              ii(i) &&
                (c = (function (e) {
                  const { hue: t, saturation: n, blendFunction: o } = e;
                  return new Xo.Ql({ blendFunction: o, hue: t, saturation: n });
                })(i)),
              ri(i) &&
                (c = (function (e) {
                  const { bits: t, blendFunction: n } = e;
                  return new Xo.ei({ blendFunction: n, bits: t });
                })(i)),
              si(i) &&
                (c = (function (e) {
                  const { brightness: t, contrast: n, blendFunction: o } = e;
                  return new Xo.lq({
                    blendFunction: o,
                    brightness: t,
                    contrast: n,
                  });
                })(i)),
              ti(i) &&
                (c = (function (e) {
                  const { edgeMode: t, predicationMode: n, preset: o } = e;
                  return new Xo.eF({
                    edgeDetectionMode: Number(t),
                    predicationMode: Number(n),
                    preset: o,
                  });
                })(i)),
              ai(i) &&
                (c = (function (e) {
                  const {
                      mode: n,
                      adaptationRate: o,
                      averageLuminance: i,
                      middleGrey: r,
                      minLuminance: s,
                      resolution: a,
                      whitePoint: c,
                      exposure: l,
                    } = e,
                    u = new Xo.i4({
                      mode: Number(n),
                      adaptationRate: o,
                      averageLuminance: i,
                      middleGrey: r,
                      minLuminance: s,
                      resolution: a,
                      whitePoint: c,
                    });
                  return (t.getRenderer().toneMappingExposure = l), u;
                })(i)),
              !c)
            )
              throw new Error(`Object type <${s}> is not supported!`);
            c.blendMode.setOpacity(a),
              c.initialize(t.getRenderer(), !0, E.ix0),
              e.set(s, { order: Jo.get(s), effect: c }),
              o(i),
              n();
          },
          deleteEffect: function (o) {
            var i;
            const r =
              null === (i = e.get(o)) || void 0 === i ? void 0 : i.effect;
            if (!r)
              throw Error(`Trying to delete an effect that doesn't exist ${o}`);
            o === Yo.ToneMapping && (t.getRenderer().toneMappingExposure = 1),
              e.delete(o),
              r.dispose(),
              n();
          },
        };
      }
      class ui extends Xo.Vu {
        disposeWithoutDisposingEffects() {
          for (const e of Object.keys(this)) {
            const t = this[e];
            (t instanceof E.nWS ||
              t instanceof E.imn ||
              t instanceof E.gPd ||
              t instanceof Xo.oF) &&
              this[e].dispose();
          }
          this.setEffects([]);
        }
      }
      var di;
      !(function (e) {
        (e[(e.PWObjects = 0)] = "PWObjects"),
          (e[(e.Effects = 1)] = "Effects"),
          (e[(e.Copy = 2)] = "Copy"),
          (e[(e.Helpers = 3)] = "Helpers");
      })(di || (di = {}));
      const fi = (function () {
          const e = [di.PWObjects, di.Effects, di.Copy, di.Helpers],
            t = new Map();
          return (
            e.forEach((e, n) => {
              t.set(e, n);
            }),
            t
          );
        })(),
        pi = [Yo.SMAA];
      function hi(e, t, n, o, i) {
        let r = 1,
          s = !1;
        const a = new Xo.s0(e, {
            alpha: !0,
            depthBuffer: !0,
            frameBufferType: E.ix0,
          }),
          c = new Xo.AH(),
          u = [],
          d = (e) =>
            fi.get(e) > fi.get(di.Effects)
              ? fi.get(e) + u.length - 1
              : fi.get(e),
          f = (e, t) => {
            a.addPass(e, d(t));
          };
        if ((f(c, di.PWObjects), Zi)) {
          const e = new Xo.AH();
          (e.selection = new Xo.LN(void 0, l.Helpers)),
            (e.clearPass.enabled = !1),
            (e.ignoreBackground = !0),
            (e.skipShadowMapUpdate = !0);
          const t = new Xo.nV();
          (c.renderToScreen = !1),
            (t.renderToScreen = !0),
            (e.renderToScreen = !0),
            f(e, di.Helpers),
            f(t, di.Copy);
        }
        const p = new Map(),
          { createEffect: h, updateEffect: m, deleteEffect: g } = li(p, a, y);
        function y() {
          u.forEach((e) => {
            a.removePass(e), e.disposeWithoutDisposingEffects();
          }),
            (u.length = 0);
          const [t, i] = [...p.entries()]
              .sort((e, t) => e[1].order - t[1].order)
              .reduce(
                (e, t) => (e[pi.includes(t[0]) ? 0 : 1].push(t[1].effect), e),
                [[], []]
              ),
            r = t.length > 0;
          if (
            (r && (a.multisampling = 0),
            (0 === i.length && 0 === t.length) ||
              !e.getContext().getContextAttributes())
          )
            return;
          const c = [[]];
          if ((r && t.forEach((e) => c[0].push(e)), s && i.length > 0)) {
            let e = !1,
              t = !1;
            r && c.push([]),
              i.forEach((n) => {
                const o = n.getFragmentShader(),
                  i = void 0 !== o && /mainUv/.test(o),
                  r = !!(n.getAttributes() & Xo.IF.CONVOLUTION),
                  s = () => {
                    c.push([n]), (t = !1), (e = !1);
                  };
                ((t || e) && r) || (t && i) ? s() : c[c.length - 1].push(n),
                  (e = e || i),
                  (t = t || r);
              });
          }
          c.forEach((e) => {
            const t = new ui(void 0, ...e);
            (t.mainCamera = n()),
              (t.mainScene = o()),
              f(t, di.Effects),
              u.push(t);
          });
        }
        function v() {
          const e = i(),
            o = n();
          if ((null == e ? void 0 : e.camera) && e.camera !== o) {
            const t = e.htmlElement.clientWidth / e.htmlElement.clientHeight;
            e.camera instanceof E.ubm &&
              ((e.camera.aspect = t), e.camera.updateProjectionMatrix()),
              e.camera instanceof E.qUd &&
                ((e.camera.left = -t),
                (e.camera.right = t),
                e.camera.updateProjectionMatrix());
          }
          if (o) {
            const e = t.x / t.y;
            o instanceof E.ubm && ((o.aspect = e), o.updateProjectionMatrix()),
              o instanceof E.qUd &&
                ((o.left = -e), (o.right = e), o.updateProjectionMatrix());
          }
        }
        return {
          createEffect: h,
          deleteEffect: g,
          updateEffect: m,
          setMainCamera: function (e) {
            a.setMainCamera(e);
          },
          setMainScene: function (e) {
            a.setMainScene(e);
          },
          setUsePostProcessing: function (e) {
            (s = e),
              s || pi.find((e) => p.has(e))
                ? y()
                : (u.forEach((e) => {
                    a.removePass(e), e.disposeWithoutDisposingEffects();
                  }),
                  (u.length = 0));
          },
          render: function (o) {
            const s = i(),
              l = n(),
              u = e.domElement.parentElement;
            if (!u)
              throw new Error(
                "Canvas parent element is not found! Cannot update canvas size"
              );
            var f, p, h;
            if (
              ((f = u.clientWidth),
              (p = u.clientHeight),
              (h = e.getPixelRatio()),
              (f === t.x && p === t.y && r === h) ||
                (t.set(f, p), (r = h), a.setSize(f, p, !1), v()),
              s && s.camera !== l)
            ) {
              const t = s.htmlElement.getBoundingClientRect(),
                n = u.getBoundingClientRect();
              a.render(o);
              const { width: i, height: r } = t,
                f = t.x - n.x,
                p = n.height - (t.y - n.y) - r;
              e.setViewport(f, p, i, r),
                e.setScissorTest(!0),
                e.setScissor(f, p, i, r),
                c.clearPass.setClearFlags(!1, !0, !0),
                a.setMainCamera(s.camera),
                (a.passes[d(di.Helpers)].enabled = !1),
                a.render(o),
                e.setViewport(0, 0, n.width, n.height),
                e.setScissorTest(!1),
                c.clearPass.setClearFlags(!0, !0, !0),
                (a.passes[d(di.Helpers)].enabled = !0),
                a.setMainCamera(l);
            } else a.render(o);
          },
          effects: p,
          dispose: function () {
            p.clear(),
              a.dispose(),
              u.forEach((e) => e.dispose()),
              (u.length = 0);
          },
          updateCameraProjectionMatrix: v,
          setMultiSampling: function (t) {
            a.multisampling = Math.min(t, e.capabilities.maxSamples);
          },
        };
      }
      var mi = n(2052),
        gi = n.n(mi),
        yi = n(7629),
        vi = n(20);
      function bi(e, t, n) {
        const o = new E.I9Y(),
          { easingDuration: i } = n,
          r = yi.Ay.quickTo(o, "x", { ease: "power2.out", duration: i });
        window.addEventListener("mousemove", a);
        const s = yi.Ay.quickTo(o, "y", {
          ease: "power2.out",
          duration: i,
          onUpdate: () => {
            if (n.type === S.Pan) {
              const { maxDistance: e } = n;
              t.position.set(o.x * e.x, o.y * e.y, 0);
            }
            if (
              (function (e) {
                return e.type === S.Tilt;
              })(n)
            ) {
              const { maxRotation: e } = n;
              (t.rotation.order = "YXZ"),
                t.rotation.set(o.y * e.x, -o.x * e.y, 0);
            }
          },
        });
        function a(t) {
          const n = e.getBoundingClientRect(),
            o = (0, vi.qE)((t.clientX - n.x) / n.width, 0, 1),
            i = (0, vi.qE)((t.clientY - n.y) / n.height, 0, 1);
          r(2 * o - 1), s(2 * -i + 1);
        }
        return {
          dispose: function () {
            r.tween.kill(),
              s.tween.kill(),
              (t.rotation.order = "XYZ"),
              window.removeEventListener("mousemove", a);
          },
        };
      }
      function wi(e) {
        let t,
          n = !1;
        const o = (function (e) {
            const t = new E.JeP({
              canvas: e,
              powerPreference: "high-performance",
              antialias: !0,
              depth: !0,
              alpha: !0,
            });
            return (
              (t.debug.checkShaderErrors = O),
              t.setSize(e.clientWidth, e.clientHeight, !1),
              (t.shadowMap.enabled = !0),
              (t.shadowMap.type = E.Wk7),
              t
            );
          })(e),
          i = (function (e) {
            const t = new E.BdL(e);
            t.compileCubemapShader();
            const n = new E.Z58(),
              o = new E.$p8(),
              i = new E.eaF(
                new E.Gu$(1).scale(1, 1, -1),
                new E.G_z({ transparent: !0, depthTest: !1 })
              ),
              r = new E.eaF(
                new E.Gu$(1).scale(1, 1, -1),
                new E.G_z({ depthTest: !1 })
              );
            return (
              n.add(r),
              n.add(i),
              n.add(o),
              {
                generateEnvironment: function (e, s, a, c, l, u) {
                  return (
                    r.material.color.set(a),
                    (o.intensity = l),
                    (i.material.map = e),
                    (i.material.opacity = c),
                    (i.rotation.y = s),
                    t.fromScene(n, u).texture
                  );
                },
              }
            );
          })(o),
          r = new E.I9Y();
        o.getSize(r);
        const s = new Map(),
          a = new Map();
        let c,
          l,
          u = !1;
        const d = new E.Qev();
        let f, p;
        const {
          effects: h,
          render: m,
          setMainCamera: g,
          setMainScene: y,
          createEffect: b,
          updateEffect: w,
          deleteEffect: _,
          setUsePostProcessing: S,
          setMultiSampling: P,
          updateCameraProjectionMatrix: T,
        } = hi(o, r, B, L, function () {
          return f;
        });
        const M = (function (e) {
            const t = new E.Tap(),
              n = new Vo.Y(),
              o = new Ho.H(),
              i = new qo(),
              r =
                Zi || "srcdoc" === window.location.pathname
                  ? "/_next/static/"
                  : "",
              s = new Fo.Z().setDecoderPath(`${r}/draco/`),
              a = new $o.p().setTranscoderPath(`${r}/basis/`);
            a.detectSupport(e);
            const c = new Uo.B()
                .setCrossOrigin("anonymous")
                .setDRACOLoader(s)
                .setKTX2Loader(a)
                .setMeshoptDecoder(Go.f),
              l = new zo.L(),
              u = new Wo.w(),
              d = {
                [v.Gltf]: c,
                [v.Texture]: t,
                [v.HDRTexture]: n,
                [v.EXRTexture]: o,
                [v.Obj]: l,
                [v.FBX]: u,
                [v.VideoTexture]: i,
                [v.Environment]: i,
              };
            return {
              load: function (e, t, n = () => {}) {
                const o = d[e];
                if (!o) throw new Error(`No loader for this asset type ${e}`);
                return o.load(t, n);
              },
              loadAsync: (e, t) => {
                const n = d[e];
                if (!n) throw new Error(`No loader for this asset type ${e}`);
                return n.loadAsync(t);
              },
              dispose: function () {
                s.dispose(), a.dispose();
              },
            };
          })(o),
          { load: R, loadAsync: x } = M,
          C = Bo(M, d),
          A = new Set(),
          k = new Set(),
          D = new E.zD7();
        function I() {
          if (!c || !l || !o)
            return void console.error(
              "Trying to render with uninitalized objects",
              { activeScene: c, activeCamera: l, renderer: o }
            );
          n && (null == t || t.update());
          const e = D.getDelta(),
            i = D.getElapsedTime();
          A.forEach((t) => t(c, l, e, i)),
            m(e),
            k.forEach((t) => t(c, l, e, i));
        }
        function j() {
          if (!o) throw Error("Renderer is undefined");
          o.setAnimationLoop(null);
        }
        function N(e) {
          A.delete(e);
        }
        function L() {
          return c;
        }
        function B() {
          return l;
        }
        const F = [
          "SpotLightHelper",
          "PointLightHelper",
          "DirectionalLightHelper",
          "CameraHelper",
        ];
        function U(e) {
          e.traverse((e) => {
            if (!F.includes(e.type) && e instanceof E.eaF) {
              const t = e;
              (t.material.wireframe = u),
                (t.material.transparent =
                  !u && t.material.userData.isTransparent);
            }
          });
        }
        return {
          objects: s,
          materials: a,
          renderer: o,
          canvas: e,
          canvasSize: r,
          effects: h,
          eventDispatcher: d,
          environmentGenerator: i,
          load: R,
          loadAsync: x,
          getActiveScene: L,
          setActiveScene: function (e) {
            (c = e), y(e);
          },
          getActiveCamera: B,
          setActiveCamera: function (t) {
            if (((l = t), g(t), l && l instanceof E.ubm && T(), !Zi)) {
              null == p || p.dispose();
              const n = t.userData.controls;
              n && (p = bi(e, t, n));
            }
          },
          setCameraPreview: function (e) {
            (f = e), f && f.camera instanceof E.ubm && T();
          },
          resourceManager: C,
          getResource: C.getResource,
          addOnRenderCallback: function (e) {
            return A.add(e), () => N(e);
          },
          removeOnRenderCallback: N,
          addAfterRenderCallback: function (e) {
            return (
              k.add(e),
              () =>
                (function (e) {
                  k.delete(e);
                })(e)
            );
          },
          createEffect: b,
          deleteEffect: _,
          updateEffect: w,
          start: function (e = !0) {
            if (!o) throw Error("Renderer is undefined");
            e && d.dispatchEvent({ type: oo.Loaded }), o.setAnimationLoop(I);
          },
          stop: j,
          render: I,
          dispose: function () {
            j(),
              M.dispose(),
              C.dispose(),
              s.forEach((e) => {
                e.isMesh && e.geometry.dispose();
              }),
              o.dispose();
          },
          setWireframe: function (e) {
            (u = e),
              s.forEach((e) => {
                U(e);
              });
          },
          setUsePostProcessing: S,
          setWireframeOnObject: U,
          showStatsPanel: function (e) {
            (n = !0),
              t || ((t = new (gi())()), (t.dom.style.position = "fixed")),
              t.begin(),
              t.showPanel(0),
              e.appendChild(t.dom);
          },
          hideStatsPanel: function () {
            var e;
            (n = !1),
              t &&
                (t.end(),
                null === (e = t.dom.parentElement) ||
                  void 0 === e ||
                  e.removeChild(t.dom));
          },
          setMultiSampling: P,
          attachToDOM: function (e) {
            e.appendChild(o.domElement), r.set(0, 0);
          },
        };
      }
      var _i = n(387);
      const Si = 30;
      function Ei(e) {
        const {
            canvas: t,
            eventDispatcher: n,
            getActiveCamera: o,
            getActiveScene: i,
          } = e,
          r = t.parentElement,
          s = new E.tBo();
        s.layers.set(l.Raycast), (s.firstHitOnly = !0);
        const a = (0, st.A)(
          function (e) {
            const t = { type: oo.MouseMove, data: d(e), mouseEvent: e };
            n.dispatchEvent(t);
          },
          Si,
          { maxWait: Si, leading: !0 }
        );
        function c(e) {
          if (4 === (void 0 !== e.buttons ? e.buttons : e.which)) return;
          const t = { type: oo.MouseDown, data: d(e), mouseEvent: e };
          n.dispatchEvent(t);
        }
        t.addEventListener("mousedown", c),
          t.addEventListener("mouseup", function (e) {
            const t = { type: oo.MouseUp, data: d(e), mouseEvent: e };
            n.dispatchEvent(t);
          }),
          t.addEventListener("mousemove", a);
        const u = new E.I9Y();
        function d(e) {
          const n = o(),
            a = i();
          if (!a || !n)
            return {
              distance: 0,
              object: null,
              x: 0,
              y: 0,
              point: null,
              ray: s.ray,
            };
          const c = r.getBoundingClientRect();
          (u.x = ((e.clientX - c.left) / t.clientWidth) * 2 - 1),
            (u.y = (-(e.clientY - c.top) / t.clientHeight) * 2 + 1),
            s.setFromCamera(u, n);
          let d = [];
          if (
            (Zi
              ? (s.layers.set(l.HelpersRaycast),
                (d = s.intersectObject(a)),
                d.length ||
                  (s.layers.set(l.Raycast), (d = s.intersectObject(a))))
              : (s.layers.set(l.Raycast), (d = s.intersectObject(a))),
            !d.length)
          )
            return {
              distance: 0,
              object: null,
              x: u.x,
              y: u.y,
              point: null,
              ray: s.ray,
            };
          const f = d[0];
          return {
            distance: f.distance,
            object: f.object,
            point: f.point,
            ray: s.ray,
            x: u.x,
            y: u.y,
          };
        }
        const f = new E.kn4(),
          p = new E.PPD(),
          h = new Set(),
          m = new E.NRn();
        return {
          dispose: function () {
            t.removeEventListener("mousedown", c),
              t.removeEventListener("mousemove", a);
          },
          getObjectPositionOnScreen: function (e) {
            const t = o(),
              n = new E.Pq0();
            return e.getWorldPosition(n), n.project(t);
          },
          getObjectIntersectionAtPointer: function (e, t, n, i) {
            i ? s.layers.set(i) : s.layers.enableAll();
            const r = o();
            if ((s.setFromCamera(t, r), s.intersectObject(e, n).length > 0))
              return s.intersectObject(e)[0];
          },
          getObjectsInScreenView: function (e, t) {
            const n = o(),
              r = i();
            return (
              n instanceof E.ubm &&
                (function (n) {
                  const { near: o, far: i, fov: r, aspect: s, zoom: a } = n;
                  let c = (o * Math.tan(0.5 * E.cj9.DEG2RAD * r)) / a,
                    l = 2 * c,
                    u = s * l,
                    d = -0.5 * u;
                  (c = -(e.y - 0.5) * l),
                    (l *= t.y - e.y),
                    (d = (e.x - 0.5) * u),
                    (u *= t.x - e.x),
                    f.makePerspective(d, d + u, c, c - l, o, i);
                })(n),
              n instanceof E.qUd &&
                (function (n) {
                  const {
                      near: o,
                      far: i,
                      left: r,
                      right: s,
                      top: a,
                      bottom: c,
                      zoom: l,
                    } = n,
                    u = (s - r) / (2 * l),
                    d = (a - c) / (2 * l),
                    p = (s + r) / 2,
                    h = (a + c) / 2;
                  let m = p - u,
                    g = p + u,
                    y = h + d,
                    v = h - d;
                  const b = y - v,
                    w = g - m;
                  (y -= e.y * b),
                    (v += (1 - t.y) * b),
                    (m += e.x * w),
                    (g -= (1 - t.x) * w),
                    f.makeOrthographic(m, g, y, v, o, i);
                })(n),
              f.multiply(n.matrixWorldInverse),
              p.setFromProjectionMatrix(f),
              h.clear(),
              r.traverseVisible((e) => {
                if (!e.userData.isCollider) return;
                if (!e.layers.isEnabled(l.Raycast)) return;
                const t = e;
                if (
                  (null === t.geometry.boundingBox &&
                    t.geometry.computeBoundingBox(),
                  m.copy(t.geometry.boundingBox).applyMatrix4(t.matrixWorld),
                  p.intersectsBox(m))
                ) {
                  const t = Mo(e);
                  if (!t) return;
                  h.has(t.uuid) || h.add(t.uuid);
                }
              }),
              [...h]
            );
          },
        };
      }
      function Oi() {
        return E.cj9.generateUUID();
      }
      (E.eaF.prototype.raycast = _i.zQ),
        (E.I46.prototype.raycast = _i.zQ),
        (E.ZLX.prototype.raycast = _i.zQ),
        (E.LoY.prototype.computeBoundsTree = _i.LO),
        (E.LoY.prototype.disposeBoundsTree = _i.je);
      m.Ambient, m.Directional, m.Point, m.Spot;
      E.hB5,
        y.Front,
        E.hsX,
        y.Back,
        E.$EB,
        y.Double,
        E.ghU,
        w.Clamp,
        E.GJx,
        w.Repeat,
        E.kTW,
        w.MirroredRepeat;
      g.Lit, g.Physical, g.Unlit, g.Phong;
      var Pi = n(2853);
      const Ti = { [y.Front]: E.hB5, [y.Back]: E.hsX, [y.Double]: E.$EB },
        Mi = {
          [g.Lit]: E._4j,
          [g.Unlit]: E.V9B,
          [g.Phong]: E.tXL,
          [g.Physical]: E.uSd,
        };
      function Ri(e) {
        const {
          resourceManager: t,
          materials: n,
          objects: o,
          getActiveScene: i,
          environmentGenerator: r,
        } = e;
        function s(e) {
          return n.get(e);
        }
        function a(e) {
          const t = Mi[e.type];
          if (!t) throw Error("Material type not supported");
          const o = (function (e, t) {
            const n = e;
            return new Proxy(
              e,
              so(Array.from(M[t]), (e) =>
                n.dispatchEvent({ type: ro.Update, property: e, target: n })
              )
            );
          })(new t(), e.type);
          return (o.uuid = e.uuid), n.set(e.uuid, o), c(e);
        }
        function c(t, o, s = !1) {
          var a, c, u, d, f, p, h, m, y;
          const {
              name: v,
              side: b,
              color: w,
              opacity: _,
              transparent: S,
              alphaTest: O,
              envMap: P,
              aoMapIntensity: T,
            } = t,
            M = n.get(t.uuid);
          if (!M) throw Error(`Material with ${t.uuid} does not exist`);
          s || (M.color.set(w), (M.opacity = _), (M.aoMapIntensity = T)),
            (M.name = v || ""),
            (M.side = Ti[b]),
            (M.transparent = S),
            (M.userData.isTransparent = S),
            (M.alphaTest = O);
          const R = [
            l(t, "map", null == o ? void 0 : o.map),
            l(t, "alphaMap", null == o ? void 0 : o.alphaMap),
            l(t, "aoMap", null == o ? void 0 : o.aoMap),
          ];
          if (
            ((null == o ? void 0 : o.envMap) &&
              o.envMap.uuid !== (null == P ? void 0 : P.uuid) &&
              e.resourceManager.deleteResource(o.envMap.uuid),
            P
              ? (
                  e.resourceManager.getResource(P.uuid) ||
                  e.resourceManager.createResource(P)
                ).assetInstance.then((e) => {
                  var t;
                  const n = e;
                  if (((M.userData.hasEnvMap = !0), Eo(M)))
                    M.envMap = n.reflection;
                  else if (Oo(M))
                    M.envMap = M.userData.useRefraction
                      ? n.refraction
                      : n.reflection;
                  else {
                    const {
                      intensity: e,
                      rotation: o,
                      opacity: i,
                      blurriness: s,
                    } = P;
                    null === (t = M.envMap) || void 0 === t || t.dispose();
                    const a = r.generateEnvironment(
                      n.reflection,
                      o,
                      "white",
                      i,
                      e,
                      s
                    );
                    M.envMap = a;
                  }
                })
              : (null === (a = M.envMap) || void 0 === a || a.dispose(),
                (M.envMap = null),
                (M.userData.hasEnvMap = !1)),
            t.type === g.Unlit)
          ) {
            if (!(M instanceof E.V9B)) throw Error("Material type mismatch");
            if (
              (s || (M.reflectivity = t.reflectivity),
              R.push(l(t, "specularMap", null == o ? void 0 : o.specularMap)),
              !P)
            ) {
              const t =
                null ===
                  (d =
                    null ===
                      (u =
                        null === (c = i()) || void 0 === c
                          ? void 0
                          : c.environment) || void 0 === u
                      ? void 0
                      : u.userData) || void 0 === d
                  ? void 0
                  : d.originalTextureUuid;
              t &&
                (null === (f = e.resourceManager.getResource(t)) ||
                  void 0 === f ||
                  f.assetInstance.then((e) => {
                    const t = e.reflection;
                    M.envMap = t;
                  }));
            }
          }
          if (
            (function (e) {
              return e.type === g.Lit;
            })(t) ||
            mo(t)
          ) {
            if (
              !(function (e) {
                return "MeshStandardMaterial" === e.type;
              })(M) &&
              !Po(M)
            )
              throw Error("Material type mismatch");
            const {
              flatShading: e,
              roughness: n,
              displacementScale: i,
              emissive: r,
              emissiveIntensity: a,
              metalness: c,
            } = t;
            if (
              (s ||
                ((M.metalness = c),
                (M.roughness = n),
                (M.emissiveIntensity = a),
                (M.displacementScale = i),
                M.emissive.set(r)),
              (M.flatShading = e),
              R.push(
                l(t, "metalnessMap", null == o ? void 0 : o.metalnessMap),
                l(t, "emissiveMap", null == o ? void 0 : o.emissiveMap),
                l(t, "normalMap", null == o ? void 0 : o.normalMap),
                l(t, "roughnessMap", null == o ? void 0 : o.roughnessMap),
                l(t, "displacementMap", null == o ? void 0 : o.displacementMap)
              ),
              mo(t) && Po(M))
            ) {
              const {
                ior: e,
                reflectivity: n,
                iridescence: i,
                iridescenceIOR: r,
                sheen: a,
                sheenColor: c,
                sheenRoughness: u,
                clearcoat: d,
                clearcoatRoughness: f,
                transmission: p,
                dispersion: h,
                thickness: m,
                attenuationColor: g,
                attenuationDistance: y,
                specularIntensity: v,
                specularColor: b,
              } = t;
              s ||
                ((M.ior = e),
                (M.reflectivity = n),
                (M.iridescence = i),
                (M.iridescenceIOR = r),
                (M.sheen = a),
                (M.sheenRoughness = u),
                M.sheenColor.set(c),
                (M.clearcoat = d),
                (M.clearcoatRoughness = f),
                (M.transmission = p),
                (M.dispersion = h),
                (M.thickness = m),
                M.attenuationColor.set(g),
                (M.attenuationDistance = 0 === y ? 1 / 0 : y),
                M.specularColor.set(b),
                (M.specularIntensity = v)),
                R.push(
                  l(t, "iridescenceMap", null == o ? void 0 : o.iridescenceMap)
                );
            }
          }
          if (
            (function (e) {
              return e.type === g.Phong;
            })(t)
          ) {
            if (!(M instanceof E.tXL)) throw Error("Material type mismatch");
            const {
              flatShading: n,
              bumpScale: r,
              displacementScale: a,
              emissive: c,
              emissiveIntensity: u,
              refractionRatio: d,
              useRefraction: f,
              shininess: g,
              reflectivity: v,
              specular: b,
            } = t;
            if (
              (s ||
                ((M.bumpScale = r),
                (M.reflectivity = v),
                (M.emissiveIntensity = u),
                (M.displacementScale = a),
                M.emissive.set(c),
                M.specular.set(b),
                (M.refractionRatio = d),
                (M.shininess = g)),
              (M.userData.useRefraction = f),
              (M.flatShading = n),
              R.push(
                l(t, "specularMap", null == o ? void 0 : o.specularMap),
                l(t, "emissiveMap", null == o ? void 0 : o.emissiveMap),
                l(t, "normalMap", null == o ? void 0 : o.normalMap),
                l(t, "bumpMap", null == o ? void 0 : o.bumpMap),
                l(t, "displacementMap", null == o ? void 0 : o.displacementMap)
              ),
              !P)
            ) {
              const t =
                null ===
                  (m =
                    null ===
                      (h =
                        null === (p = i()) || void 0 === p
                          ? void 0
                          : p.environment) || void 0 === h
                      ? void 0
                      : h.userData) || void 0 === m
                  ? void 0
                  : m.originalTextureUuid;
              t &&
                (null === (y = e.resourceManager.getResource(t)) ||
                  void 0 === y ||
                  y.assetInstance.then((e) => {
                    const t = e;
                    M.envMap = f ? t.refraction : t.reflection;
                  }));
            }
          }
          return (M.needsUpdate = !0), Promise.all(R);
        }
        const l = (e, i, r) => {
          var s, a;
          const c = e[i],
            l = n.get(e.uuid);
          if (!l) throw new Error(`Material with ${e.uuid} does not exist`);
          if (
            (r &&
              r.uuid !== (null == c ? void 0 : c.uuid) &&
              t.deleteResource(r.uuid),
            (0, Pi.A)(c, r))
          )
            return;
          if (!c) return void (l[i] = null);
          const u = (e) => {
            e ? (xo(e, c, r), (l[i] = e), (l.needsUpdate = !0)) : (l[i] = null);
          };
          if (c) {
            if (c.assetUrl !== P)
              return null ===
                (a = t.getResource(c.uuid) || t.createResource(c)) ||
                void 0 === a
                ? void 0
                : a.assetInstance.then((e) => {
                    u(e);
                  });
            {
              const t =
                null === (s = o.get(e.overrideObjectId)) || void 0 === s
                  ? void 0
                  : s.userData;
              if (!t) return;
              u(t.originalMaps[e.overrideMaterialIndex][i]);
            }
          }
        };
        return {
          dispose: function () {
            n.forEach((e) => To(e));
          },
          createMaterial: a,
          updateMaterial: c,
          getMaterial: s,
          deleteMaterial: function (e) {
            const t = n.get(e);
            if (!t)
              throw new Error(
                `Cannot delete material that does not exist! ${e}`
              );
            t.dispose(), n.delete(e);
          },
          replaceMaterial: function (e, t) {
            const o = n.get(t.uuid);
            if (!o) return;
            o.uuid = Oi();
            const r = i();
            a(e);
            const c = s(e.uuid);
            r.traverse((e) => {
              ("Mesh" === e.type ||
                (function (e) {
                  return "SkinnedMesh" === e.type;
                })(e)) &&
                e.material.uuid === o.uuid &&
                (e.material = c);
            }),
              o.dispose();
          },
        };
      }
      var xi = n(4428);
      function Ci(e) {
        let t = null;
        if (
          (function (e) {
            return e.type === p.Plane;
          })(e)
        ) {
          const {
            width: n,
            height: o,
            widthSegments: i,
            heightSegments: r,
          } = e;
          t = new E.bdM(n, o, i, r);
        }
        if (
          (function (e) {
            return e.type === p.Box;
          })(e)
        ) {
          const {
            width: n,
            height: o,
            depth: i,
            widthSegments: r,
            heightSegments: s,
            depthSegments: a,
          } = e;
          t = new E.iNn(n, o, i, r, s, a);
        }
        if (
          (function (e) {
            return e.type === p.Sphere;
          })(e)
        ) {
          const {
            radius: n,
            widthSegments: o,
            heightSegments: i,
            phiStart: r,
            phiLength: s,
            thetaStart: a,
            thetaLength: c,
          } = e;
          t = new E.Gu$(n, o, i, r, s, a, c);
        }
        if (
          (function (e) {
            return e.type === p.Cylinder;
          })(e)
        ) {
          const {
            radiusTop: n,
            radiusBottom: o,
            height: i,
            radialSegments: r,
            heightSegments: s,
            openEnded: a,
            thetaStart: c,
            thetaLength: l,
          } = e;
          t = new E.Ho_(n, o, i, r, s, a, c, l);
        }
        if (
          (function (e) {
            return e.type === p.Torus;
          })(e)
        ) {
          const {
            radius: n,
            tube: o,
            radialSegments: i,
            tubularSegments: r,
            arc: s,
          } = e;
          t = new E.O3Y(n, o, i, r, s);
        }
        if (
          (function (e) {
            return e.type === p.Cone;
          })(e)
        ) {
          const {
            radius: n,
            height: o,
            radialSegments: i,
            heightSegments: r,
            openEnded: s,
            thetaStart: a,
            thetaLength: c,
          } = e;
          t = new E.qFE(n, o, i, r, s, a, c);
        }
        if (!t) throw new Error("Unknown geometry type!");
        return (
          t.computeBoundsTree({
            maxLeafTris: 5,
            maxDepth: 18,
            strategy: xi.Q7,
          }),
          (t.uuid = e.uuid),
          t
        );
      }
      const Ai = 10;
      function ki(e, t) {
        const { environmentGenerator: n } = e;
        function o(t, n, o) {
          var i;
          const { intensity: r, color: s, castShadow: a, shadowQuality: c } = n;
          if (
            ((t.intensity = r),
            t.color.set(s),
            a &&
              (t.shadow &&
                ((t.shadow.mapSize.width = Number(c)),
                (t.shadow.mapSize.height = Number(c)),
                null === (i = t.shadow.map) || void 0 === i || i.dispose(),
                (t.shadow.map = null),
                (t.shadow.normalBias = 0.03),
                t.shadow.isDirectionalLightShadow &&
                  ((t.shadow.camera.top = Ai),
                  (t.shadow.camera.right = Ai),
                  (t.shadow.camera.left = -Ai),
                  (t.shadow.camera.bottom = -Ai)),
                (t.shadow.needsUpdate = !0)),
              _o(n) && (t.castShadow = !1)),
            bo(n))
          ) {
            const e = t,
              { decay: o, distance: i } = n;
            void 0 !== o && (e.decay = o), void 0 !== i && (e.distance = i);
          }
          if (So(n)) {
            const i = t,
              { decay: r, distance: s, penumbra: a, angle: c, map: l } = n;
            void 0 !== r && (i.decay = r),
              void 0 !== s && (i.distance = s),
              void 0 !== a && (i.penumbra = a),
              void 0 !== c && (i.angle = c),
              o &&
                So(o) &&
                o.map &&
                o.map.uuid !== (null == l ? void 0 : l.uuid) &&
                e.resourceManager.deleteResource(o.map.uuid),
              l
                ? (
                    e.resourceManager.getResource(l.uuid) ||
                    e.resourceManager.createResource(l)
                  ).assetInstance.then((e) => {
                    const t = e;
                    xo(t, l, null == o ? void 0 : o.map), (i.map = t);
                  })
                : (i.map = null);
          }
          if (wo(n)) {
            const e = t,
              { target: o } = n;
            o && Ro(e.target.position, o);
          }
        }
        function i(e, t) {
          var n, o;
          Ro(e.position, t.position),
            Ro(e.scale, t.scale),
            (n = e.rotation),
            (o = t.rotation),
            n.setFromVector3(Ro(Co, o));
        }
        return {
          updateObject: function (r, s, a = !1) {
            const c = e.objects.get(r.uuid);
            if (!c)
              throw new Error(
                "Objects that you are trying to update doesn't exist!"
              );
            (c.name = r.name),
              (c.visible = r.visible),
              (c.castShadow = r.castShadow),
              (c.receiveShadow = r.receiveShadow),
              a || i(c, r),
              fo(r) &&
                (function (n, o, i) {
                  var r;
                  const {
                    uuid: s,
                    object: a,
                    animation: c,
                    castShadow: l,
                    receiveShadow: u,
                  } = o;
                  if (
                    ((i && i.castShadow === l && i.receiveShadow === u) ||
                      n.traverse((e) => {
                        (e.castShadow = o.castShadow),
                          (e.receiveShadow = o.receiveShadow);
                      }),
                    (0, Pi.A)(null == i ? void 0 : i.animation, c))
                  )
                    return;
                  const { clipName: d } = c;
                  d
                    ? null === (r = e.getResource(a.uuid)) ||
                      void 0 === r ||
                      r.assetInstance.then((e) => {
                        var o;
                        if (a.assetType !== v.Gltf) return;
                        const r = e.animations;
                        (null == i ? void 0 : i.animation.clipName) &&
                          i.animation.clipName !== d &&
                          t.removeAnimation(i.uuid, i.animation.clipName);
                        const l = t.getAnimation(s, d);
                        if (l) t.updateAnimation(s, c), l.play();
                        else {
                          const e = r.find((e) => e.name === d),
                            i =
                              null ===
                                (o = n.children.find(
                                  (e) => !!e.userData.isGLTF
                                )) || void 0 === o
                                ? void 0
                                : o.children[0];
                          if (!e || !i)
                            throw Error(
                              `No animation clip with this name ${d} or root ${n}`
                            );
                          t.createAnimation(i, s, e, c).play();
                        }
                      })
                    : (null == i ? void 0 : i.animation.clipName) &&
                      t.removeAnimation(i.uuid, i.animation.clipName);
                })(c, r, s),
              co(r) && o(c, r, s),
              po(r) &&
                (function (e, t, n) {
                  const {
                    flowDirectionX: o,
                    flowDirectionY: i,
                    flowSpeed: r,
                    color: s,
                    quality: a,
                    useRefraction: c,
                    waveScale: l,
                    reflectivity: u,
                  } = t;
                  n && c !== n.useRefraction && e.setUseRefraction(c),
                    n && a !== n.quality && e.setResolution(t.quality),
                    n &&
                      s !== n.color &&
                      e.material.uniforms.color.value.set(s),
                    (e.material.uniforms.flowDirection.value.x = o),
                    (e.material.uniforms.flowDirection.value.y = i),
                    e.material.uniforms.flowDirection.value.normalize(),
                    (e.material.uniforms.reflectivity.value = u),
                    (e.material.uniforms.config.value.w = l),
                    (e.flowSpeed = r),
                    (e.material.needsUpdate = !0);
                })(c, r, s),
              uo(r) &&
                (function (t, i, r) {
                  var s;
                  const {
                    background: a,
                    environment: c,
                    ambientLight: l,
                    fog: u,
                    useEnvironmentAsBackground: d,
                    backgroundBlurriness: f,
                    multisampling: p,
                  } = i;
                  if (
                    ((t.backgroundBlurriness = f),
                    (null == r ? void 0 : r.environment) &&
                      r.environment.uuid !== (null == c ? void 0 : c.uuid) &&
                      e.resourceManager.deleteResource(r.environment.uuid),
                    c
                      ? (
                          e.resourceManager.getResource(c.uuid) ||
                          e.resourceManager.createResource(c)
                        ).assetInstance.then((o) => {
                          var i;
                          const r = o,
                            {
                              intensity: s,
                              rotation: l,
                              opacity: u,
                              blurriness: f,
                            } = c;
                          null === (i = t.environment) ||
                            void 0 === i ||
                            i.dispose();
                          const p = n.generateEnvironment(
                            r.reflection,
                            l,
                            "string" == typeof a ? a : "white",
                            u,
                            s,
                            f
                          );
                          (t.environment = p),
                            (p.userData.originalTextureUuid = c.uuid),
                            d && (t.background = r.reflection),
                            e.materials.forEach((e) => {
                              Eo(e) &&
                                !e.userData.hasEnvMap &&
                                (e.envMap = r.reflection),
                                Oo(e) &&
                                  !e.userData.hasEnvMap &&
                                  (e.envMap = e.userData.useRefraction
                                    ? r.refraction
                                    : r.reflection);
                            });
                        })
                      : (t.environment = null),
                    (null == r ? void 0 : r.background) &&
                      "string" != typeof r.background &&
                      r.background.uuid !== a.uuid &&
                      e.resourceManager.deleteResource(r.background.uuid),
                    !d || !c)
                  )
                    if (a)
                      if ("string" == typeof a) {
                        const e = t.background;
                        (null == e ? void 0 : e.isColor)
                          ? e.set(a)
                          : (t.background = new E.Q1f(a));
                      } else
                        null ===
                          (s =
                            e.resourceManager.getResource(a.uuid) ||
                            e.resourceManager.createResource(a)) ||
                          void 0 === s ||
                          s.assetInstance.then((e) => {
                            t.background = e.reflection;
                          });
                    else t.background = null;
                  const h = e.objects.get(l.uuid);
                  h && ((h.visible = l.visible), o(h, l)),
                    (null == p ? void 0 : p.enabled)
                      ? e.setMultiSampling(p.samples)
                      : e.setMultiSampling(0),
                    (null == u ? void 0 : u.enabled)
                      ? (t.fog = new E.jUj(
                          u.useBackgroundColor
                            ? "string" == typeof i.background
                              ? i.background
                              : "#FFFFFF"
                            : u.color,
                          u.near,
                          u.far
                        ))
                      : (null == u ? void 0 : u.enabled) || (t.fog = null);
                })(c, r, s),
              lo(r) &&
                (function (t, n, o) {
                  const { geometry: i } = n;
                  if (
                    ((null == o ? void 0 : o.geometry) &&
                      i !== (null == o ? void 0 : o.geometry) &&
                      (t.geometry = Ci(i)),
                    n.materialId !== (null == o ? void 0 : o.materialId))
                  ) {
                    const o = e.materials.get(n.materialId);
                    if (!o)
                      throw Error(
                        `Material with ${n.materialId} does not exist!`
                      );
                    t.material = o;
                  }
                })(c, r, s),
              go(r) &&
                (function (t, n) {
                  if (yo(n)) {
                    const { zoom: e, near: o, far: i, fov: r } = n,
                      s = t;
                    (s.zoom = e),
                      (s.near = o),
                      (s.far = i),
                      (s.fov = r),
                      s.updateProjectionMatrix();
                  }
                  if (vo(n)) {
                    const { zoom: o, near: i, far: r } = n,
                      s = t;
                    (s.zoom = o), (s.near = i), (s.far = r);
                    const a = e.canvasSize.x / e.canvasSize.y;
                    (s.left = -a), (s.right = a), s.updateProjectionMatrix();
                  }
                })(c.camera, r);
          },
        };
      }
      var Di = n(2445),
        Ii = n(739);
      const ji = 0.15,
        Ni = 0.075;
      class Li extends E.eaF {
        constructor(e, t) {
          var n;
          super(e),
            (this.isWater = !0),
            (this.textureMatrix = new E.kn4()),
            (this.clock = new E.zD7()),
            (this.useRefraction = !1),
            (this.clipBias = 0),
            (this.textureHeight = 512),
            (this.textureWidth = 512),
            (this.isWater = !0);
          const {
            flowSpeed: o = 0.03,
            textureHeight: i = 512,
            textureWidth: r = 512,
            clipBias: s = 0,
            flowDirection: a = new E.I9Y(1, 0),
            reflectivity: c = 0.02,
            scale: l = 1,
            flowMap: u,
            normalMap0: d,
            normalMap1: f,
            useRefraction: p = !1,
          } = t;
          (this.flowSpeed = o), (this.useRefraction = p);
          const h = new E.Q1f(t.color),
            m = Bi;
          (this.clipBias = s),
            (this.textureWidth = r),
            (this.textureHeight = i),
            (this.reflector = new Ii.J(e, {
              textureWidth: r,
              textureHeight: i,
              clipBias: s,
            })),
            (this.reflector.matrixAutoUpdate = !1),
            this.useRefraction &&
              ((this.refractor = new Di.N(e, {
                textureWidth: r,
                textureHeight: i,
                clipBias: s,
              })),
              (this.refractor.matrixAutoUpdate = !1)),
            (this.material = new E.BKk({
              uniforms: E.LlO.merge([E.fCn.fog, m.uniforms]),
              vertexShader: m.vertexShader,
              fragmentShader: m.fragmentShader,
              transparent: !0,
              fog: !0,
            })),
            void 0 !== u
              ? ((this.material.defines.USE_FLOWMAP = ""),
                (this.material.uniforms.tFlowMap = new E.nc$(u)))
              : (this.material.uniforms.flowDirection = new E.nc$(a)),
            this.useRefraction &&
              ((this.material.defines.USE_REFRACTION = ""),
              (this.material.uniforms.tRefractionMap.value =
                null === (n = this.refractor) || void 0 === n
                  ? void 0
                  : n.getRenderTarget().texture)),
            (d.wrapS = d.wrapT = E.GJx),
            (f.wrapS = f.wrapT = E.GJx),
            (this.material.uniforms.tReflectionMap.value =
              this.reflector.getRenderTarget().texture),
            (this.material.uniforms.tNormalMap0.value = d),
            (this.material.uniforms.tNormalMap1.value = f),
            (this.material.uniforms.color.value = h),
            (this.material.uniforms.reflectivity.value = c),
            (this.material.uniforms.textureMatrix.value = this.textureMatrix),
            (this.material.uniforms.config.value.x = 0),
            (this.material.uniforms.config.value.y = Ni),
            (this.material.uniforms.config.value.z = Ni),
            (this.material.uniforms.config.value.w = l),
            (this.onBeforeRender = function (e, t, n, o, i, r) {
              var s, a;
              this.updateTextureMatrix(n),
                this.updateFlow(),
                (this.visible = !1),
                this.reflector.matrixWorld.copy(this.matrixWorld),
                this.reflector.onBeforeRender(e, t, n, o, i, r),
                this.useRefraction &&
                  (null === (s = this.refractor) ||
                    void 0 === s ||
                    s.onBeforeRender(e, t, n, o, i, r),
                  null === (a = this.refractor) ||
                    void 0 === a ||
                    a.matrixWorld.copy(this.matrixWorld)),
                (this.visible = !0);
            });
        }
        updateTextureMatrix(e) {
          this.textureMatrix.set(
            0.5,
            0,
            0,
            0.5,
            0,
            0.5,
            0,
            0.5,
            0,
            0,
            0.5,
            0.5,
            0,
            0,
            0,
            1
          ),
            this.textureMatrix.multiply(e.projectionMatrix),
            this.textureMatrix.multiply(e.matrixWorldInverse),
            this.textureMatrix.multiply(this.matrixWorld);
        }
        setUseRefraction(e) {
          var t, n;
          this.useRefraction !== e &&
            (this.useRefraction
              ? ((this.material.defines.USE_REFRACTION = !1),
                null === (t = this.refractor) || void 0 === t || t.dispose())
              : ((this.refractor = new Di.N(this.geometry, {
                  textureWidth: this.textureWidth,
                  textureHeight: this.textureHeight,
                  clipBias: this.clipBias,
                })),
                (this.refractor.matrixAutoUpdate = !1),
                (this.material.defines.USE_REFRACTION = ""),
                (this.material.uniforms.tRefractionMap.value =
                  null === (n = this.refractor) || void 0 === n
                    ? void 0
                    : n.getRenderTarget().texture)),
            (this.useRefraction = e));
        }
        updateFlow() {
          const e = this.clock.getDelta(),
            t = this.material.uniforms.config;
          (t.value.x += this.flowSpeed * e),
            (t.value.y = t.value.x + Ni),
            t.value.x >= ji
              ? ((t.value.x = 0), (t.value.y = Ni))
              : t.value.y >= ji && (t.value.y = t.value.y - ji);
        }
        setResolution(e) {
          var t;
          this.reflector.getRenderTarget().setSize(e, e),
            null === (t = this.refractor) ||
              void 0 === t ||
              t.getRenderTarget().setSize(e, e);
        }
        dispose() {
          var e, t, n, o, i, r, s;
          this.reflector.dispose(),
            null === (e = this.refractor) || void 0 === e || e.dispose(),
            null ===
              (n =
                null === (t = this.material.uniforms.tNormalMap0) ||
                void 0 === t
                  ? void 0
                  : t.value) ||
              void 0 === n ||
              n.dispose(),
            null ===
              (i =
                null === (o = this.material.uniforms.tNormalMap1) ||
                void 0 === o
                  ? void 0
                  : o.value) ||
              void 0 === i ||
              i.dispose(),
            this.material.dispose(),
            null === (s = (r = this.geometry).disposeBoundsTree) ||
              void 0 === s ||
              s.call(r),
            this.geometry.dispose();
        }
      }
      const Bi = {
        uniforms: {
          color: { type: "c", value: null },
          reflectivity: { type: "f", value: 0 },
          tReflectionMap: { type: "t", value: null },
          tRefractionMap: { type: "t", value: null },
          tNormalMap0: { type: "t", value: null },
          tNormalMap1: { type: "t", value: null },
          textureMatrix: { type: "m4", value: null },
          config: { type: "v4", value: new E.IUQ() },
        },
        vertexShader:
          "#define GLSLIFY 1\n#include <common>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n\nuniform mat4 textureMatrix;\n\nvarying vec4 vCoord;\nvarying vec2 vUv;\nvarying vec3 vToEye;\n\nvoid main() {\n    vUv = uv;\n    vCoord = textureMatrix * vec4(position, 1.0);\n\n    vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n    vToEye = cameraPosition - worldPosition.xyz;\n\n    vec4 mvPosition = viewMatrix * worldPosition; // used in fog_vertex\n    gl_Position = projectionMatrix * mvPosition;\n\n    #include <logdepthbuf_vertex>\n    #include <fog_vertex>\n\n}",
        fragmentShader:
          "#define GLSLIFY 1\n#include <common>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n\nuniform sampler2D tReflectionMap;\n    #ifdef USE_REFRACTION\nuniform sampler2D tRefractionMap;\n    #endif\nuniform sampler2D tNormalMap0;\nuniform sampler2D tNormalMap1;\n\n\t\t#ifdef USE_FLOWMAP\nuniform sampler2D tFlowMap;\n\t\t#else\nuniform vec2 flowDirection;\n\t\t#endif\n\nuniform vec3 color;\nuniform float reflectivity;\nuniform vec4 config;\n\nvarying vec4 vCoord;\nvarying vec2 vUv;\nvarying vec3 vToEye;\n\nvoid main() {\n\n  #include <logdepthbuf_fragment>\n\n  float flowMapOffset0 = config.x;\n  float flowMapOffset1 = config.y;\n  float halfCycle = config.z;\n  float scale = config.w;\n\n  vec3 toEye = normalize(vToEye);\n\n\t\t\t// determine flow direction\n  vec2 flow;\n\t\t\t#ifdef USE_FLOWMAP\n  flow = texture2D(tFlowMap, vUv).rg * 2.0 - 1.0;\n\t\t\t#else\n  flow = flowDirection;\n\t\t\t#endif\n  flow.x *= -1.0;\n\n\t\t\t// sample normal maps (distort uvs with flowdata)\n  vec4 normalColor0 = texture2D(tNormalMap0, (vUv * scale) + flow * flowMapOffset0);\n  vec4 normalColor1 = texture2D(tNormalMap1, (vUv * scale) + flow * flowMapOffset1);\n\n\t\t\t// linear interpolate to get the final normal color\n  float flowLerp = abs(halfCycle - flowMapOffset0) / halfCycle;\n  vec4 normalColor = mix(normalColor0, normalColor1, flowLerp);\n\n\t\t\t// calculate normal vector\n  vec3 normal = normalize(vec3(normalColor.r * 2.0 - 1.0, normalColor.b, normalColor.g * 2.0 - 1.0));\n\n\t\t\t// calculate the fresnel term to blend reflection and refraction maps\n  float theta = max(dot(toEye, normal), 0.0);\n  float reflectance = reflectivity + (1.0 - reflectivity) * pow((1.0 - theta), 5.0);     \n\n\t\t\t// calculate final uv coords\n  vec3 coord = vCoord.xyz / vCoord.w;\n  vec2 uv = coord.xy + coord.z * normal.xz * 0.05;\n\n  vec4 reflectColor = texture2D(tReflectionMap, vec2(1.0 - uv.x, uv.y));\n      #ifdef USE_REFRACTION\n  vec4 refractColor = texture2D(tRefractionMap, uv);\n      #endif\n\n\t\t\t// multiply water color with the mix of both textures\n      #ifdef USE_REFRACTION\n  gl_FragColor = vec4(color, 1.0) * mix(refractColor, reflectColor, reflectance);\n      #else\n  gl_FragColor = vec4(color, reflectance) * reflectColor;\n      #endif\n\n  #include <tonemapping_fragment>\n  #include <tonemapping_fragment>\n  #include <fog_fragment>\n}\n",
      };
      class Fi extends E.YJl {
        constructor(e) {
          return (
            super(),
            (this.isCameraWrapper = !0),
            (this.camera = e),
            this.add(this.camera),
            this
          );
        }
      }
      const Ui = "https://files.peachworlds.com",
        Vi = `${Ui}/static/textures/water_normal_data_1_v_0_23_1.webp`,
        Hi = `${Ui}/static/textures/water_normal_data_2_v_0_23_1.webp`;
      function zi(e, t) {
        const { updateObject: n } = ki(e, t),
          { materials: o, objects: i } = e;
        function r(e, t) {
          var n;
          const o = i.get(e),
            r = i.get(t);
          if (!o) throw new Error("Cannot set parent relationship!");
          r ? r.add(o) : null === (n = o.parent) || void 0 === n || n.remove(o);
        }
        return {
          updateObject: n,
          createObject: function t(s, a) {
            let c = null;
            if (!s.uuid) throw new Error("Object must have a uuid!");
            if (i.has(s.uuid)) throw new Error("Object already exists!");
            if (
              ((function (e) {
                return e.type === f.Group;
              })(s) && (c = new E.YJl()),
              po(s) &&
                (c = (function (t) {
                  const {
                      flowDirectionX: n,
                      flowDirectionY: o,
                      flowSpeed: i,
                      color: r,
                      waveScale: s,
                      quality: a,
                    } = t,
                    c = new E.bdM(1, 1),
                    u = new Li(c, {
                      normalMap0: e.load(v.Texture, Vi),
                      normalMap1: e.load(v.Texture, Hi),
                      scale: s,
                      flowDirection: new E.I9Y(n, o),
                      flowSpeed: i,
                      textureHeight: a,
                      textureWidth: a,
                      color: r,
                    });
                  return (
                    (u.userData = { isCollider: !0 }),
                    u.layers.enable(l.Raycast),
                    u
                  );
                })(s)),
              co(s) &&
                (c = (function (e) {
                  if (bo(e)) return new E.HiM();
                  if (wo(e)) return new E.ZyN();
                  if (_o(e)) return new E.$p8();
                  if (So(e)) {
                    const e = new E.B69(),
                      t = new E.nCl();
                    return (
                      t.add(e), e.position.set(0, -1, 0), (t.target = e), t
                    );
                  }
                  throw new Error("Light type is not supported!");
                })(s)),
              lo(s) &&
                (c = (function (e) {
                  const { geometry: t, materialId: n } = e,
                    i = Ci(t),
                    r = new E.eaF();
                  if (!o.has(n))
                    throw new Error(`Material with uuid ${n} doesn't exist`);
                  return (
                    (r.material = o.get(n)),
                    (r.geometry = i),
                    (r.userData = { isCollider: !0 }),
                    r.layers.enable(l.Raycast),
                    r
                  );
                })(s)),
              fo(s) &&
                (c = (function (t) {
                  const { object: o } = t,
                    i = e.resourceManager.createResource(o);
                  switch (o.assetType) {
                    case v.Gltf:
                    case v.Obj:
                    case v.FBX: {
                      const e = new E.YJl();
                      return (
                        i.assetInstance.then((o) => {
                          const { model: i, materials: r } = o;
                          (e.userData.originalMaps = r.map((e) => {
                            const t = e;
                            return {
                              alphaMap: t.alphaMap,
                              aoMap: t.aoMap,
                              envMap: t.envMap,
                              metalnessMap: t.metalnessMap,
                              map: t.map,
                              emissiveMap: t.emissiveMap,
                              normalMap: t.normalMap,
                              roughnessMap: t.roughnessMap,
                              displacementMap: t.displacementMap,
                            };
                          })),
                            i.traverse((e) => {
                              if (e instanceof E.eaF) {
                                e.updateMatrixWorld(!0),
                                  e.geometry.computeBoundsTree({
                                    maxLeafTris: 5,
                                    strategy: xi.Q7,
                                  }),
                                  e.layers.enable(l.Raycast);
                                const t = { isCollider: !0 };
                                e.userData = Object.assign(
                                  Object.assign({}, e.userData),
                                  t
                                );
                              }
                            }),
                            e.add(i),
                            i
                              .getObjectsByProperty("isLight", !0)
                              .forEach((e) => {
                                e.removeFromParent();
                              }),
                            n(t);
                        }),
                        e
                      );
                    }
                    default:
                      throw Error(
                        `No imported object of this type ${o.assetType}`
                      );
                  }
                })(s)),
              uo(s) && (c = new E.Z58()),
              go(s) &&
                (c = (function (t) {
                  let n;
                  if (
                    (yo(t) &&
                      ((n = new E.ubm()),
                      (n.aspect = e.canvasSize.x / e.canvasSize.y)),
                    vo(t) && (n = new E.qUd()),
                    !n)
                  )
                    throw new Error("Camera type is not supported!");
                  const o = new Fi(n);
                  return (
                    n.updateProjectionMatrix(),
                    (n.userData.controls = t.controls),
                    o
                  );
                })(s)),
              !c)
            )
              throw new Error(`Object type <${s.type}> is not supported!`);
            const { name: u, uuid: d, visible: p = !0 } = s;
            (c.uuid = d),
              (c.visible = p),
              (c.userData = Object.assign(Object.assign({}, c.userData), {
                name: u,
                isPwObject: !0,
              }));
            const h = ao(c);
            i.set(s.uuid, h),
              n(s),
              a && r(s.uuid, a),
              uo(s) && t(s.ambientLight, s.uuid),
              e.setWireframeOnObject(c);
          },
          setParentRelationship: r,
          deleteObject: function (e) {
            var n, o;
            const r = i.get(e);
            if (!r)
              throw new Error(`Cannot delete object that does not exist! ${e}`);
            null === (n = r.parent) || void 0 === n || n.remove(r),
              r.dispose && r.dispose(),
              r instanceof E.Z58 &&
                (null === (o = r.environment) || void 0 === o || o.dispose()),
              t.removeObjectAnimations(r.uuid),
              i.delete(e);
          },
          getObject: function (e) {
            return i.get(e);
          },
        };
      }
      function Wi(e, t, n, o) {
        var i;
        const r = (function (e, t) {
            var n, o;
            const i = {};
            if (!e || !t) return i;
            const r = Object.values(j);
            for (const s of r) {
              const r =
                null ===
                  (o =
                    null === (n = e.devices[s]) || void 0 === n
                      ? void 0
                      : n.canvases) || void 0 === o
                  ? void 0
                  : o[t];
              r && (i[s] = r.cameraId);
            }
            return i;
          })(e, null === (i = t.parentElement) || void 0 === i ? void 0 : i.id),
          s = n.find((e) => e === r.desktop) || o,
          a = n.find((e) => e === r.tablet) || s;
        return {
          [j.Desktop]: s,
          [j.Tablet]: a,
          [j.Mobile]: n.find((e) => e === r.mobile) || a,
        };
      }
      function $i() {
        const e =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        return e < C ? j.Mobile : e < A ? j.Tablet : j.Desktop;
      }
      function Gi(e, t, n, o, i, r) {
        var s, a, c;
        const { pwObjects: l, defaultCameraId: u } = t,
          d = Wi(
            n,
            e,
            (function (e) {
              return e.filter((e) => go(e)).map((e) => e.uuid);
            })(Array.from(l.values())),
            u
          );
        let p,
          h = o(u);
        h ||
          l.forEach((e) => {
            h || e.type !== f.Camera || (h = o(e.uuid));
          });
        const m = {
            desktop:
              null === (s = o(d[j.Desktop]) || o(d[r]) || h) || void 0 === s
                ? void 0
                : s.camera,
            tablet:
              null === (a = o(d[j.Tablet]) || o(d[r]) || h) || void 0 === a
                ? void 0
                : a.camera,
            mobile:
              null === (c = o(d[j.Mobile]) || o(d[r]) || h) || void 0 === c
                ? void 0
                : c.camera,
          },
          g = () => {
            const e = $i();
            if (p === e) return;
            p = e;
            const t = m[e];
            i.getActiveCamera() !== t && i.setActiveCamera(t);
          };
        g(), window.addEventListener("resize", g);
        return {
          dispose: () => {
            window.removeEventListener("resize", g);
          },
          updateResponsiveCanvasCamera: g,
        };
      }
      function qi(e, t) {
        const n = Math.pow(10, t),
          o = Math.round(e * n) / n;
        return parseFloat(o.toFixed(Math.max(0, t)));
      }
      function Yi(e, t) {
        return Array.isArray(e) ? e : [e, ...t];
      }
      function Xi(e, ...t) {
        const n = Yi(e, t);
        if (0 === n.length)
          throw new Error("Cannot calculate the mean of an empty array");
        return (
          (function (e, ...t) {
            return Yi(e, t).reduce((e, t) => e + t, 0);
          })(n) / n.length
        );
      }
      const Ki = "RESOLUTION_FACTOR",
        Ji = [60, 75, 90, 120, 144, 165, 240];
      function Qi(
        e,
        {
          iterations: t = 15,
          ms: n = 1e3,
          threshold: o = 0.75,
          flipflops: i = 1 / 0,
          bounds: r = (e) => (e > 100 ? [60, 100] : [40, 60]),
          minResolutionFactor: s = 0.2,
          memoizeResolutionFactor: a = !0,
        }
      ) {
        const c = {
          fps: 0,
          index: 0,
          flipped: 0,
          refreshrate: Ji[0],
          fallback: !1,
          frames: [],
          averages: [],
          subscriptions: new Map(),
          subscribe: (e) => {
            const t = Symbol();
            return (
              c.subscriptions.set(t, e.current),
              () => {
                c.subscriptions.delete(t);
              }
            );
          },
        };
        if ((e.addOnRenderCallback(l), a)) {
          const t = Number(window.localStorage.getItem(Ki));
          !Number.isNaN(t) && t > s && e.renderer.setPixelRatio(t);
        }
        function l() {
          const { frames: a, averages: l } = c;
          if (c.fallback) return;
          if (l.length >= t)
            return void (
              O &&
              console.error(
                "PerformanceMonitorModule: averages.length >= iterations"
              )
            );
          a.push(performance.now());
          const f = a[a.length - 1] - a[0];
          if (f < n) return;
          if (
            ((c.fps = Math.round(1e3 / (f / a.length))),
            (c.frames = []),
            (l[c.index++ % t] = c.fps),
            l.length < t)
          )
            return;
          const [p, h] = r(c.refreshrate),
            m = l.filter((e) => e >= h),
            g = l.filter((e) => e < p),
            y = Xi(p, h),
            v = Xi(l);
          v > c.refreshrate &&
            (c.refreshrate = (function (e) {
              const t = Ji.findIndex((t) => t >= e);
              if (-1 === t) return Ji[Ji.length - 1];
              if (0 === t) return Ji[0];
              const n = Ji[t],
                o = Ji[t - 1];
              return Math.abs(o - e) >= Math.abs(n - e) || 1.1 * o <= e ? n : o;
            })(v));
          const b = Math.sqrt(v / y);
          m.length > t * o &&
            v > y &&
            (c.flipped++,
            (function (t) {
              if (t < 1)
                throw new Error(
                  "fpsDeltaFromTargetNorm should be greater than 1 when onIncline is called"
                );
              if (d() >= window.devicePixelRatio) return;
              const n = Math.min(
                window.devicePixelRatio,
                e.renderer.getPixelRatio() * t
              );
              u(n);
            })(b),
            c.subscriptions.forEach((e) => e.onIncline && e.onIncline(c))),
            g.length > t * o &&
              (c.flipped++,
              (function (t) {
                if (Math.sign(t) < 1)
                  throw new Error(
                    "fpsDeltaFromTargetNorm should less than 1 when onDecline is called"
                  );
                if (d() <= s) return;
                const n = Math.max(s, e.renderer.getPixelRatio() * t);
                u(n);
              })(b),
              c.subscriptions.forEach((e) => e.onDecline && e.onDecline(c))),
            c.flipped > i &&
              !c.fallback &&
              ((c.fallback = !0),
              c.subscriptions.forEach((e) => e.onFallback && e.onFallback(c)),
              O &&
                console.warn(
                  "Auto-resolution system disabled: max flipflops reached"
                )),
            (c.averages = []);
        }
        function u(t) {
          e.renderer.setPixelRatio(t),
            a && window.localStorage.setItem(Ki, t.toString());
        }
        function d() {
          return e.renderer.getPixelRatio();
        }
        return {
          api: c,
          dispose: function () {
            e.removeOnRenderCallback(l);
          },
        };
      }
      let Zi = !1;
      function er(e, t, n = !1) {
        Zi = n;
        const o = wi(e),
          i = Ei(o),
          r = (function (e) {
            const { getActiveScene: t } = e,
              n = new E.Iw4(t()),
              o = new Map();
            function i(e, t) {
              var n;
              const { clipName: i, loop: r, speed: s } = t;
              if (!i) return;
              const a =
                null === (n = o.get(e)) || void 0 === n ? void 0 : n.get(i);
              if (!a)
                throw Error(
                  `Animation with name ${i} and object id ${e} does not exist`
                );
              a.setLoop(r ? E.aMy : E.G3T, 1 / 0), a.reset(), (a.timeScale = s);
            }
            function r(e, t) {
              var i, r;
              const s =
                null === (i = o.get(e)) || void 0 === i ? void 0 : i.get(t);
              s &&
                ((s.enabled = !1),
                s.stop(),
                s.reset(),
                n.uncacheRoot(s.getRoot()),
                n.uncacheClip(s.getClip()),
                null === (r = o.get(e)) || void 0 === r || r.delete(t));
            }
            return {
              createAnimation: function (e, t, r, s) {
                const a = n.clipAction(r, e);
                return (
                  (a.clampWhenFinished = !0),
                  (a.blendMode = E.Ke9),
                  o.has(t) || o.set(t, new Map()),
                  o.get(t).set(r.name, a),
                  i(t, s),
                  a
                );
              },
              removeAnimation: r,
              removeObjectAnimations: function (e) {
                var t;
                null === (t = o.get(e)) ||
                  void 0 === t ||
                  t.forEach((t, n) => r(e, n));
              },
              updateAnimation: i,
              getAnimation: function (e, t) {
                var n;
                return null === (n = o.get(e)) || void 0 === n
                  ? void 0
                  : n.get(t);
              },
              update: function (e) {
                n.update(e);
              },
              dispose: function () {
                n.stopAllAction(), n.getRoot() && n.uncacheRoot(n.getRoot());
              },
            };
          })(o),
          s = Ri(o);
        let a;
        if (!n && (null == t ? void 0 : t.isReductionEnabled)) {
          const {
              fpsThresholdAbsolute: e = 60,
              minResolution: n = 0.1,
              fpsThresholdMode: i,
            } = t || {},
            r = window.location !== window.parent.location,
            s = i === _.Absolute ? e : 60;
          a = Qi(o, {
            memoizeResolutionFactor: !r,
            minResolutionFactor: 0.01 * (n || 100),
            flipflops: 8,
            threshold: 0.85,
            iterations: 5,
            ms: 1e3,
            bounds: (e) => {
              const t = Math.min(s, e);
              return [0.9 * t, 1.2 * t];
            },
          });
        }
        const {
            start: c,
            stop: l,
            eventDispatcher: u,
            addOnRenderCallback: d,
            removeOnRenderCallback: p,
            renderer: h,
            effects: m,
            setActiveCamera: g,
            setActiveScene: y,
            setCameraPreview: v,
            setWireframe: b,
            setUsePostProcessing: w,
            createEffect: S,
            updateEffect: O,
            deleteEffect: P,
            getResource: T,
            resourceManager: M,
            showStatsPanel: R,
            hideStatsPanel: x,
            addAfterRenderCallback: C,
            attachToDOM: A,
          } = o,
          {
            getMaterial: k,
            updateMaterial: D,
            createMaterial: I,
            deleteMaterial: j,
            replaceMaterial: N,
          } = s;
        d((e, t, n) => r.update(n));
        const {
            updateObject: L,
            createObject: B,
            getObject: F,
            deleteObject: U,
            setParentRelationship: V,
          } = zi(o, r),
          {
            getObjectIntersectionAtPointer: H,
            getObjectPositionOnScreen: z,
            getObjectsInScreenView: W,
          } = i,
          { getAnimation: $ } = r;
        function G(e, t, n) {
          const o = F(e);
          n.forEach((e) => D(e, void 0, !0));
          const i = (o) => {
            if (!o.userData.isPwObject || o.uuid === e) {
              if (o instanceof E.eaF || o instanceof E.ZLX) {
                const e = t.findIndex((e) => o.material.uuid === e);
                -1 !== e && (o.material = k(n[e].uuid));
              }
              o.children.forEach(i);
            }
          };
          o && i(o);
        }
        const q = (e, t) => (
          u.addEventListener(e, t), () => u.removeEventListener(e, t)
        );
        return {
          renderer: h,
          effects: m,
          core: o,
          setActiveCamera: g,
          setActiveScene: y,
          setCameraPreview: v,
          initializeClient: function (t, n, i) {
            const {
              pwObjects: r,
              pwMaterials: s,
              parents: a,
              usePostProcessing: c,
              effects: l,
            } = t;
            s.forEach((e) => I(e)),
              r.forEach((e) => B(e)),
              Array.from(a.entries()).forEach(([e, t]) => {
                V(e, t);
              }),
              Gi(e, t, n, F, o, i),
              r.forEach((e) => {
                o.getActiveScene() ||
                  e.type !== f.Scene ||
                  o.setActiveScene(F(e.uuid));
              }),
              r.forEach((e) => {
                fo(e) &&
                  e.materials &&
                  T(e.object.uuid).assetInstance.then((t) => {
                    var n;
                    e.materials &&
                      G(
                        e.uuid,
                        t.materials.map((e) => e.uuid),
                        null === (n = e.materials) || void 0 === n
                          ? void 0
                          : n.map((e) => s.get(e))
                      );
                  });
              });
            let d = !1;
            l.forEach((e) => {
              e.enabled && ((d = d || e.enabled), S(e));
            }),
              w(d && c),
              q(oo.ResourcesLoaded, () => {
                o.getActiveScene().traverse((e) => {
                  e.frustumCulled = !1;
                });
                const e = o.canvasSize.x,
                  t = o.canvasSize.y;
                o.renderer.setSize(1, 1, !1),
                  o.render(),
                  o.getActiveScene().traverse((e) => {
                    e.frustumCulled = !0;
                  }),
                  o.renderer.setSize(e, t, !1),
                  o.start(),
                  u.dispatchEvent({ type: oo.SceneReady }),
                  document.location.search.includes("debug") &&
                    R(document.body);
              }),
              M.checkIfResourceLoadingFinished();
          },
          listenTo: q,
          start: c,
          stop: l,
          dispose: function () {
            o.dispose(),
              i.dispose(),
              r.dispose(),
              s.dispose(),
              null == a || a.dispose();
          },
          updateObject: L,
          getObject: F,
          getResource: T,
          createEffect: S,
          updateEffect: O,
          deleteEffect: P,
          createObject: B,
          deleteObject: U,
          createMaterial: I,
          updateMaterial: D,
          deleteMaterial: j,
          replaceMaterial: N,
          replaceImportedMaterials: G,
          getImportedAnimation: $,
          setParentRelationship: V,
          addOnRenderCallback: d,
          removeOnRenderCallback: p,
          getObjectIntersectionAtPointer: H,
          getObjectPositionOnScreen: z,
          setWireframe: b,
          setUsePostProcessing: w,
          getMaterial: k,
          showStatsPanel: R,
          hideStatsPanel: x,
          addAfterRenderCallback: C,
          getObjectsInScreenView: W,
          attachToDOM: A,
        };
      }
      var tr = n(8274);
      const nr = { disposePageCallbacks: [] };
      function or(e) {
        nr.disposePageCallbacks.push(e);
      }
      function ir() {
        const e = nr.disposePageCallbacks;
        for (nr.disposePageCallbacks = []; e.length > 0; ) {
          const t = e.pop();
          if (t)
            try {
              t();
            } catch (e) {
              console.error("Router page dispose callback error:", e);
            }
        }
      }
      var rr = n(5803);
      const sr = Math.pow,
        ar = Math.sqrt,
        cr = Math.sin,
        lr = Math.cos,
        ur = Math.PI,
        dr = 1.70158,
        fr = 1.525 * dr,
        pr = dr + 1,
        hr = (2 * ur) / 3,
        mr = (2 * ur) / 4.5,
        gr = function (e) {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n
            ? t * e * e
            : e < 2 / n
            ? t * (e -= 1.5 / n) * e + 0.75
            : e < 2.5 / n
            ? t * (e -= 2.25 / n) * e + 0.9375
            : t * (e -= 2.625 / n) * e + 0.984375;
        },
        yr = {
          lenisDefault: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
          linear: (e) => e,
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return 1 - (1 - e) * (1 - e);
          },
          easeInOutQuad: function (e) {
            return e < 0.5 ? 2 * e * e : 1 - sr(-2 * e + 2, 2) / 2;
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return 1 - sr(1 - e, 3);
          },
          easeInOutCubic: function (e) {
            return e < 0.5 ? 4 * e * e * e : 1 - sr(-2 * e + 2, 3) / 2;
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return 1 - sr(1 - e, 4);
          },
          easeInOutQuart: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - sr(-2 * e + 2, 4) / 2;
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return 1 - sr(1 - e, 5);
          },
          easeInOutQuint: function (e) {
            return e < 0.5 ? 16 * e * e * e * e * e : 1 - sr(-2 * e + 2, 5) / 2;
          },
          easeInSine: function (e) {
            return 1 - lr((e * ur) / 2);
          },
          easeOutSine: function (e) {
            return cr((e * ur) / 2);
          },
          easeInOutSine: function (e) {
            return -(lr(ur * e) - 1) / 2;
          },
          easeInExpo: function (e) {
            return 0 === e ? 0 : sr(2, 10 * e - 10);
          },
          easeOutExpo: function (e) {
            return 1 === e ? 1 : 1 - sr(2, -10 * e);
          },
          easeInOutExpo: function (e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : e < 0.5
              ? sr(2, 20 * e - 10) / 2
              : (2 - sr(2, -20 * e + 10)) / 2;
          },
          easeInCirc: function (e) {
            return 1 - ar(1 - sr(e, 2));
          },
          easeOutCirc: function (e) {
            return ar(1 - sr(e - 1, 2));
          },
          easeInOutCirc: function (e) {
            return e < 0.5
              ? (1 - ar(1 - sr(2 * e, 2))) / 2
              : (ar(1 - sr(-2 * e + 2, 2)) + 1) / 2;
          },
          easeInBack: function (e) {
            return pr * e * e * e - dr * e * e;
          },
          easeOutBack: function (e) {
            return 1 + pr * sr(e - 1, 3) + dr * sr(e - 1, 2);
          },
          easeInOutBack: function (e) {
            return e < 0.5
              ? (sr(2 * e, 2) * (7.189819 * e - fr)) / 2
              : (sr(2 * e - 2, 2) * ((fr + 1) * (2 * e - 2) + fr) + 2) / 2;
          },
          easeInElastic: function (e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : -sr(2, 10 * e - 10) * cr((10 * e - 10.75) * hr);
          },
          easeOutElastic: function (e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : sr(2, -10 * e) * cr((10 * e - 0.75) * hr) + 1;
          },
          easeInOutElastic: function (e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : e < 0.5
              ? (-sr(2, 20 * e - 10) * cr((20 * e - 11.125) * mr)) / 2
              : (sr(2, -20 * e + 10) * cr((20 * e - 11.125) * mr)) / 2 + 1;
          },
          easeInBounce: function (e) {
            return 1 - gr(1 - e);
          },
          easeOutBounce: gr,
          easeInOutBounce: function (e) {
            return e < 0.5 ? (1 - gr(1 - 2 * e)) / 2 : (1 + gr(2 * e - 1)) / 2;
          },
        };
      const vr = new (class {
          constructor() {
            (this.lenis = null),
              (this.rafId = null),
              (this.attachScrollListener = (e) => {
                this.listeners.add(e);
              }),
              (this.detachScrollListener = (e) => {
                this.listeners.delete(e);
              }),
              (this.onScroll = () => {
                const e = this.listeners;
                for (const t of e)
                  try {
                    t();
                  } catch (e) {
                    console.error("Scroll listener callback error:", e);
                  }
              }),
              (this.overrideLenisSetScrollFunction = (e) => {
                e.setScroll = (t) => {
                  const n = e.velocity,
                    o = e.rootElement,
                    i =
                      n > 0
                        ? Math.ceil(t)
                        : n < 0
                        ? Math.floor(t)
                        : Math.round(t);
                  e.isHorizontal
                    ? (o.scrollLeft = Math.round(i))
                    : (o.scrollTop = Math.round(i));
                };
              }),
              (this.prepareLenisConfig = (e) => {
                const t = {
                    syncTouch: !tr.PG,
                    duration: 1.2,
                    easing: yr.lenisDefault,
                  },
                  n = null == e ? void 0 : e.easing;
                n in yr && (t.easing = yr[n]);
                const o = qi((null == e ? void 0 : e.duration) / 1e3, 3);
                o >= 0 && (t.duration = o);
                const i = qi(+e.speed / 100, 2);
                i > 0 && ((t.wheelMultiplier = i), (t.touchMultiplier = i)),
                  (t.infinite = !!(null == e ? void 0 : e.isInfinite)),
                  (this.lenisConfig = t);
              }),
              (this.prepareLenisRaf = () => {
                const e = (t) => {
                  this.lenis.raf(t), (this.rafId = requestAnimationFrame(e));
                };
                this.rafId = requestAnimationFrame(e);
              }),
              (this.reinitialize = (e) => {
                var t, n;
                const o = this.getDeviceSize(),
                  i =
                    null ===
                      (n =
                        null === (t = null == e ? void 0 : e.devices) ||
                        void 0 === t
                          ? void 0
                          : t[o]) || void 0 === n
                      ? void 0
                      : n.scrollSettings;
                window.scrollTo(0, 0),
                  (null == i ? void 0 : i.type) === N.Smooth
                    ? ((this.type = N.Smooth),
                      this.prepareLenisConfig(i),
                      (this.lenis = new rr.A(this.lenisConfig)),
                      this.overrideLenisSetScrollFunction(this.lenis),
                      this.lenis.on("scroll", this.onScroll),
                      this.prepareLenisRaf())
                    : ((this.type = N.Native),
                      window.addEventListener("scroll", this.onScroll)),
                  or(() => {
                    this.lenis && (this.lenis.destroy(), (this.lenis = null)),
                      this.rafId && cancelAnimationFrame(this.rafId),
                      window.removeEventListener("scroll", this.onScroll);
                  });
              }),
              (this.getDeviceSize = () => {
                const e =
                  window.innerWidth ||
                  document.documentElement.clientWidth ||
                  document.body.clientWidth;
                return e < C ? j.Mobile : e < A ? j.Tablet : j.Desktop;
              }),
              (this.getScrollParameters = () => {
                var e;
                let t, n, o;
                return (
                  this.type === N.Smooth && this.lenis
                    ? (({ height: t, scrollHeight: n } = this.lenis.dimensions),
                      (o = this.lenis.scroll))
                    : ((t = window.innerHeight),
                      (n = document.documentElement.scrollHeight),
                      (o =
                        (null ===
                          (e =
                            null === document || void 0 === document
                              ? void 0
                              : document.querySelector("html")) || void 0 === e
                          ? void 0
                          : e.scrollTop) || 0)),
                  { height: t, scrollHeight: n, scrolled: o }
                );
              }),
              (this.scrollToElement = (e, t, n) => {
                if (e)
                  if (this.type === N.Smooth) {
                    if (!this.lenis) return;
                    this.lenis.scrollTo(e, { offset: t, immediate: n });
                  } else {
                    const o =
                      e.getBoundingClientRect().top + t + window.scrollY;
                    window.scrollTo({
                      top: o,
                      behavior: n ? "auto" : "smooth",
                    });
                  }
              }),
              (this.type = N.Native),
              (this.listeners = new Set());
          }
        })(),
        br = "pwb-anchor";
      o.Anchor, o.Position, o.ScrollSection;
      var wr = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      const _r = {};
      function Sr(e, t, n) {
        return wr(this, void 0, void 0, function* () {
          if (!e) return;
          const o = document.getElementsByClassName("pwb-scene")[0];
          if (!o) return;
          const i = document.createElement("canvas");
          o.appendChild(i);
          const r = er(i, e.autoResolutionSettings);
          _r.builder = r;
          const {
              pwObjects: s,
              pwMaterials: a,
              parents: c,
              children: l,
              effects: u,
              pwObjectsUsingPwMaterial: d,
              sharedMaterials: f,
            } = e,
            p = Object.assign(Object.assign({}, e), {
              pwObjects: new Map(Object.entries(s)),
              pwMaterials: new Map(Object.entries(a)),
              parents: new Map(Object.entries(c)),
              children: new Map(Object.entries(l)),
              effects: new Map(Object.entries(u || {})),
              pwObjectsUsingPwMaterial: new Map(Object.entries(d || {})),
              sharedMaterials: new Set(f),
            });
          let h;
          const m = new Promise((e) => {
            h = e;
          });
          r.listenTo(oo.SceneReady, () => {
            null == h || h(void 0);
          }),
            r.initializeClient(p, t, n),
            yield m,
            tr.MR && r.showStatsPanel(document.body),
            or(() => {
              var e;
              null === (e = _r.builder) || void 0 === e || e.dispose(),
                (_r.builder = void 0);
            });
        });
      }
      function Er(e, t) {
        return wr(this, void 0, void 0, function* () {
          if (!e) return;
          const { builder: n } = _r;
          if (!n) return;
          window.scrollTo(0, 0), (_r.anchors = t[I.Anchors] || {});
          const o = no("default project");
          o.setState(e.sheetsById);
          const i = o.getAnimation(Jn),
            r = e.sheetsById[Jn].sequence;
          if (!r) return void console.error("No animation sheet state found!");
          const { tracksByObject: s = {}, unitType: a, lengthInUnits: c } = r;
          Object.keys(s).forEach((e) => {
            const t = n.getMaterial(e);
            if (t) return void i.animateMaterial(t);
            const o = n.getObject(e);
            o && i.animateObject3D(o);
          });
          const l = Array.from(document.getElementsByClassName(br));
          function u() {
            const {
              height: e,
              scrollHeight: t,
              scrolled: n,
            } = vr.getScrollParameters();
            if ("percentage" === a) {
              return (function (e, t, n, o) {
                const i = t + n,
                  r = o
                    .filter((e) => e.position > t)
                    .sort((e, t) => e.position - t.position);
                let s, a;
                for (const e of r) {
                  if (!(e.position <= i)) {
                    s = e;
                    break;
                  }
                  a = e;
                }
                let c = a ? a.position : t;
                c = Math.max(c, t);
                const l = a ? (null == a ? void 0 : a.percentage) : 0,
                  u = s ? s.position : e,
                  d = s ? (null == s ? void 0 : s.percentage) : 1;
                return c === u ? l : E.cj9.mapLinear(i, c, u, l, d);
              })(
                t,
                e,
                n,
                l.map((e) => {
                  var t, n;
                  return {
                    position: e.offsetTop,
                    percentage:
                      (null ===
                        (n =
                          null === (t = _r.anchors) || void 0 === t
                            ? void 0
                            : t[e.id]) || void 0 === n
                        ? void 0
                        : n.percentage) || 0,
                  };
                })
              );
            }
            return "dynamicViewPort" === a
              ? ((n / e) * 100) / c
              : (console.error(`Animation unit type: <${a}> not supported.`),
                0);
          }
          const d = () => {
            const e = u();
            i.setPosition(e);
          };
          vr.attachScrollListener(d),
            or(() => {
              vr.detachScrollListener(d);
            });
        });
      }
      var Or, Pr, Tr, Mr;
      function Rr(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
      }
      function xr(e) {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
      }
      !(function (e) {
        (e.UIOverlay = "uiOverlay"), (e.UIAudio = "uiAudio");
      })(Or || (Or = {})),
        (function (e) {
          (e.Play = "play"),
            (e.Pause = "pause"),
            (e.Stop = "stop"),
            (e.TogglePlayPause = "toggle_play_pause"),
            (e.TogglePlayStop = "toggle_play_stop");
        })(Pr || (Pr = {})),
        (function (e) {
          (e.Open = "open"),
            (e.Close = "close"),
            (e.ToggleOpenClose = "toggle_open_close");
        })(Tr || (Tr = {})),
        (function (e) {
          (e.MouseClick = "mouseClick"),
            (e.MouseEnter = "mouseEnter"),
            (e.MouseLeave = "mouseLeave");
        })(Mr || (Mr = {}));
      const Cr = {
        listeners: { [Or.UIOverlay]: new Set(), [Or.UIAudio]: new Set() },
      };
      function Ar(e, t) {
        Cr.listeners[e].add(t);
      }
      function kr(e, t) {
        Cr.listeners[e].delete(t);
      }
      function Dr(e, t) {
        !(function (e, t, n) {
          const o = Cr.listeners[e];
          for (const e of o)
            try {
              e(((i = t), JSON.parse(JSON.stringify(i))), n);
            } catch (e) {
              console.error("Interaction error:", e);
            }
          var i;
        })(e.type, e, t);
      }
      function Ir(e) {
        return [Or.UIAudio, Or.UIOverlay].includes(e.type) && !!e.id;
      }
      function jr(e) {
        return `pwb-ignore-click-ui-overlay-interaction-${e}`;
      }
      const Nr = {
        [Mr.MouseClick]: function (e) {
          const { el: t } = e,
            { actions: n, mouseCursor: o } = e.interaction;
          !(function (e) {
            const { el: t } = e,
              { actions: n } = e.interaction,
              o = new Set();
            for (const e of n) {
              if (e.type !== Or.UIOverlay) return;
              if (!e.id) return;
              o.add(jr(e.id));
            }
            for (const e of o) t.classList.add(e);
          })(e),
            o === B.si.Pointer && (t.style.cursor = "pointer"),
            t.addEventListener("click", (e) => {
              Rr(e), xr(e);
              for (const e of n) Dr(e, Mr.MouseClick);
            });
        },
        [Mr.MouseEnter]: function (e) {
          const { el: t } = e,
            { actions: n } = e.interaction;
          t.addEventListener("mouseenter", () => {
            for (const e of n) Dr(e, Mr.MouseEnter);
          });
        },
        [Mr.MouseLeave]: function (e) {
          const { el: t } = e,
            { actions: n } = e.interaction;
          t.addEventListener("mouseleave", () => {
            for (const e of n) Dr(e, Mr.MouseLeave);
          });
        },
      };
      function Lr(e) {
        const t = (function (e) {
          const t = [];
          if (!e) return t;
          const n = e[I.Interactions] || {};
          return (
            Object.entries(n).forEach(([e, n]) => {
              if (!n) return;
              const o = document.getElementById(e);
              if (o)
                for (const e of n) {
                  const n = e.actions.filter((e) => Ir(e));
                  n.length <= 0 ||
                    t.push({
                      el: o,
                      interaction: {
                        triggerType: e.triggerType,
                        mouseCursor: e.mouseCursor,
                        actions: n,
                      },
                    });
                }
            }),
            t
          );
        })(e);
        for (const e of t) Nr[e.interaction.triggerType](e);
      }
      const Br = {};
      function Fr() {
        if (Br.scrollSections) return Br.scrollSections;
        throw new Error(
          "ScrollSectionsModule needs to be initialized before the findAllScrollSections function can be called."
        );
      }
      function Ur(e) {
        Br.scrollSections = (function (e) {
          const t = new Map();
          if (!e) return t;
          const n = e.sections || {};
          return (
            Object.entries(n).forEach(([e, n]) => {
              if (!(null == n ? void 0 : n.hash)) return;
              const o = document.getElementById(e);
              if (!o) return;
              const { hash: i, offsetY: r } = n;
              t.set(e, { id: e, hash: i, offsetY: r || 0, el: o });
            }),
            t
          );
        })(e);
      }
      function Vr(e, t) {
        const n = new Map();
        if (!e) return n;
        const o = e.links || {};
        return (
          Object.entries(o).forEach(([e, o]) => {
            if (!o) return;
            const i = (function (e, t) {
              if (e.type === k.External) {
                if ("string" != typeof e.url) return;
                const t = e.url.trim();
                if (!t) return;
                return {
                  type: k.External,
                  url: (0, L.Pc)(t),
                  newTab: !!e.newTab,
                };
              }
              if (e.type === k.Internal) {
                if (!e.pageId) return;
                if (!e.pagePath) return;
                const n = !!e.newTab,
                  o = e.sectionId ? t.get(e.sectionId) : void 0;
                return {
                  type: k.Internal,
                  pageId: e.pageId,
                  pagePath: e.pagePath,
                  sectionId: e.sectionId,
                  sectionHash: e.sectionHash,
                  sectionEl: null == o ? void 0 : o.el,
                  sectionOffsetY: (null == o ? void 0 : o.offsetY) || 0,
                  newTab: n,
                  smoothScroll: !n && !!e.smoothScroll,
                };
              }
            })(o, t);
            i && n.set(e, i);
          }),
          n
        );
      }
      function Hr(e) {
        const t = window;
        return (n) => {
          Rr(n), xr(n);
          const o = e.url;
          n.ctrlKey || n.metaKey || e.newTab || tr.kr
            ? t.open(o, "_blank")
            : n.shiftKey
            ? t.open(o)
            : (t.location.href = o);
        };
      }
      function zr(e) {
        const t = window;
        return (n) => {
          Rr(n), xr(n);
          const o = e.newTab && tr.kr;
          if (e.newTab && !o) {
            const n = window.location.href,
              o = (0, L.sh)(n, e.pagePath, e.sectionHash);
            return void t.open(o, "_blank");
          }
          if (Ra() !== e.pagePath) return void Da(e.pagePath, e.sectionHash);
          const i = !e.smoothScroll && !o;
          vr.scrollToElement(e.sectionEl, e.sectionOffsetY, i);
        };
      }
      function Wr(e) {
        const t = Fr(),
          n = Vr(e, t);
        for (const [e, t] of n) {
          const n = document.getElementById(e);
          if (!n) continue;
          const o = t.type === k.External ? Hr(t) : zr(t);
          (n.style.cursor = "pointer"), n.addEventListener("click", o);
        }
        !(function (e) {
          const t = xa();
          if (!t) return;
          const n = Array.from(e.values()).find((e) => e.hash === t);
          n && vr.scrollToElement(n.el, n.offsetY, !0);
        })(t);
      }
      var $r,
        Gr,
        qr,
        Yr,
        Xr,
        Kr,
        Jr,
        Qr,
        Zr = n(9314),
        es = n(2407),
        ts = n(5450);
      function ns(e, t) {
        const n = t === $r.ScrollTransform;
        return {
          type: e,
          delay: 0,
          duration: 300,
          stiffness: n ? 500 : 400,
          damping: n ? 60 : 30,
          mass: 1,
        };
      }
      function os(e) {
        const t = {
          opacity: 1,
          scale: 1,
          rotateType: Gr.Rotate2D,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          offsetX: 0,
          offsetY: 0,
        };
        switch (e) {
          case Qr.Fade:
            return Object.assign(Object.assign({}, t), { opacity: 0 });
          case Qr.Scale:
            return Object.assign(Object.assign({}, t), { scale: 0.5 });
          case Qr.ScaleBottom:
            return Object.assign(Object.assign({}, t), {
              scale: 0.5,
              offsetY: 50,
            });
          case Qr.FlipHorizontal:
            return Object.assign(Object.assign({}, t), {
              rotateType: Gr.Rotate3D,
              rotateY: -180,
            });
          case Qr.FlipVertical:
            return Object.assign(Object.assign({}, t), {
              rotateType: Gr.Rotate3D,
              rotateX: -180,
            });
          case Qr.SlideTop:
            return Object.assign(Object.assign({}, t), {
              opacity: 0,
              offsetY: -150,
            });
          case Qr.SlideLeft:
            return Object.assign(Object.assign({}, t), {
              opacity: 0,
              offsetX: -150,
            });
          case Qr.SlideRight:
            return Object.assign(Object.assign({}, t), {
              opacity: 0,
              offsetX: 150,
            });
          case Qr.SlideBottom:
            return Object.assign(Object.assign({}, t), {
              opacity: 0,
              offsetY: 150,
            });
          default:
            return t;
        }
      }
      !(function (e) {
        (e.ScrollAnimation = "ScrollAnimation"),
          (e.ScrollTransform = "ScrollTransform");
      })($r || ($r = {})),
        (function (e) {
          (e.Rotate2D = "2d"), (e.Rotate3D = "3d");
        })(Gr || (Gr = {})),
        (function (e) {
          (e.Linear = "linear"),
            (e.EaseIn = "easeIn"),
            (e.EaseOut = "easeOut"),
            (e.EaseInOut = "easeInOut"),
            (e.CircIn = "circIn"),
            (e.CircOut = "circOut"),
            (e.CircInOut = "circInOut"),
            (e.BackIn = "backIn"),
            (e.BackOut = "backOut"),
            (e.BackInOut = "backInOut"),
            (e.Anticipate = "anticipate");
        })(qr || (qr = {})),
        (function (e) {
          e.Spring = "spring";
        })(Yr || (Yr = {})),
        (function (e) {
          (e.OnAppear = "appear"),
            (e.OnScroll = "scroll"),
            (e.ElementInView = "element"),
            (e.SectionInView = "section");
        })(Xr || (Xr = {})),
        (function (e) {
          (e.Down = "down"), (e.Up = "up");
        })(Kr || (Kr = {})),
        (function (e) {
          (e.Top = "top"), (e.Center = "center"), (e.Bottom = "bottom");
        })(Jr || (Jr = {})),
        (function (e) {
          (e.Fade = "fade"),
            (e.Scale = "scale"),
            (e.ScaleBottom = "scale_bottom"),
            (e.FlipHorizontal = "flip_horizontal"),
            (e.FlipVertical = "flip_vertical"),
            (e.SlideTop = "slide_top"),
            (e.SlideLeft = "slide_left"),
            (e.SlideRight = "slide_right"),
            (e.SlideBottom = "slide_bottom"),
            (e.Custom = "custom");
        })(Qr || (Qr = {}));
      Xr.ElementInView, Qr.Scale;
      var is;
      !(function (e) {
        (e.Initial = "initial"), (e.Entered = "entered"), (e.Exited = "exited");
      })(is || (is = {}));
      const rs = Object.values(Qr),
        ss = { lastScrollDirection: void 0 };
      function as(e) {
        return parseFloat((e / 1e3).toFixed(3));
      }
      function cs(e) {
        if (!e) return;
        const t = (function (e) {
            return {
              keyframe: os(e),
              transition: ns(Yr.Spring, $r.ScrollAnimation),
            };
          })(rs.find((t) => t === e) || Qr.Custom),
          n =
            "object" == typeof e
              ? {
                  keyframe: Object.assign(
                    Object.assign({}, t.keyframe),
                    e.keyframe
                  ),
                  transition: Object.assign(
                    Object.assign({}, t.transition),
                    e.transition
                  ),
                }
              : t;
        return {
          keyframe:
            ((i = n.keyframe),
            {
              opacity: i.opacity,
              scale: i.scale,
              rotateX: i.rotateX,
              rotateY: i.rotateY,
              rotateZ: i.rotateZ,
              x: i.offsetX,
              y: i.offsetY,
            }),
          transition:
            ((o = n.transition),
            o.type === Yr.Spring
              ? {
                  type: "spring",
                  delay: as(o.delay),
                  stiffness: o.stiffness,
                  damping: o.damping,
                  mass: o.mass,
                }
              : {
                  type: "tween",
                  ease: o.type,
                  delay: as(o.delay),
                  duration: as(o.duration),
                }),
        };
        var o, i;
      }
      function ls(e) {
        if (!e.type) return;
        const t = (function (e) {
            return {
              type: e,
              direction: Kr.Down,
              start: Jr.Top,
              replay: !0,
              clickThrough: !0,
            };
          })(e.type),
          n = Object.assign(Object.assign({}, t), e),
          o = n.type;
        if (o === Xr.OnAppear) {
          const e = cs(n.effectA);
          if (!e) return;
          return {
            type: Xr.OnAppear,
            effectA: e,
            clickThrough: n.clickThrough,
          };
        }
        if (o === Xr.OnScroll) {
          const e = cs(n.effectA);
          if (!e) return;
          return {
            type: Xr.OnScroll,
            direction: n.direction,
            replay: n.replay,
            effectA: e,
            clickThrough: n.clickThrough,
          };
        }
        if (o === Xr.ElementInView) {
          const e = cs(n.effectA),
            t = cs(n.effectB);
          if (!e && !t) return;
          return {
            type: Xr.ElementInView,
            start: n.start,
            replay: n.replay,
            effectA: e,
            effectB: t,
            clickThrough: n.clickThrough,
          };
        }
        if (o === Xr.SectionInView) {
          const e = Fr(),
            t = n.sectionId ? e.get(n.sectionId) : void 0;
          if (!t) return;
          const o = cs(n.effectA),
            i = cs(n.effectB);
          if (!o && !i) return;
          return {
            type: Xr.SectionInView,
            section: t,
            start: n.start,
            replay: n.replay,
            effectA: o,
            effectB: i,
            clickThrough: n.clickThrough,
          };
        }
      }
      function us(e) {
        const t = parseFloat(
            window.getComputedStyle(e).getPropertyValue("opacity")
          ),
          n = e.style.transform;
        let o = 1,
          i = 1,
          r = 0,
          s = 0,
          a = 0,
          c = 0,
          l = 0;
        isNaN(t) || (o *= t);
        const u = n.match(
          /(scale|rotateX|rotateY|rotateZ|translateX|translateY)\((.*?)\)/g
        );
        return (
          u &&
            u.forEach((e) => {
              const [t, n] = e.split("("),
                o = parseFloat(n);
              switch (t) {
                case "scale":
                  i *= o;
                  break;
                case "rotateX":
                  r += o;
                  break;
                case "rotateY":
                  s += o;
                  break;
                case "rotateZ":
                  a += o;
                  break;
                case "translateX":
                  c += o;
                  break;
                case "translateY":
                  l += o;
              }
            }),
          {
            opacity: o,
            scale: i,
            rotateX: r,
            rotateY: s,
            rotateZ: a,
            x: c,
            y: l,
          }
        );
      }
      function ds(e, t) {
        const { animation: n, state: o } = e,
          { currentState: i } = o;
        switch (n.type) {
          case Xr.OnAppear:
            if (t === is.Entered)
              return {
                keyframe: o.defaultKeyframe,
                transition: n.effectA.transition,
              };
            break;
          case Xr.OnScroll:
            if (t === is.Entered)
              return {
                keyframe: n.effectA.keyframe,
                transition: n.effectA.transition,
              };
            if (t === is.Initial)
              return {
                keyframe: o.defaultKeyframe,
                transition: n.effectA.transition,
              };
            break;
          case Xr.ElementInView:
          case Xr.SectionInView: {
            const e =
              t === is.Exited || i === is.Exited ? n.effectB : n.effectA;
            if (e) {
              return {
                keyframe: t === is.Entered ? o.defaultKeyframe : e.keyframe,
                transition: e.transition,
              };
            }
            break;
          }
        }
      }
      function fs(e) {
        const { state: t } = e,
          { currentState: n, desiredState: o } = t;
        if (n === o) return;
        const i = (function (e, t) {
          const n = [is.Initial, is.Entered, is.Exited],
            o = n.indexOf(e),
            i = n.indexOf(t);
          return i < o ? n[o - 1] : i > o ? n[o + 1] : e;
        })(n, o);
        return n !== i ? { nextState: i, effect: ds(e, i) } : void 0;
      }
      const ps = (e) => (t, n, o) => {
        e && n.opacity >= Number.EPSILON && (t.style.pointerEvents = "auto");
        const i = (0, Zr.i)(t, n, o);
        return (
          i.then(() => {
            e && n.opacity < Number.EPSILON && (t.style.pointerEvents = "none");
          }),
          i
        );
      };
      function hs(e) {
        const { state: t } = e,
          n = fs(e);
        if (!n) return;
        const { nextState: o, effect: i } = n;
        if (!i)
          return (t.currentState = o), (t.animationInProgress = !1), void hs(e);
        t.animationInProgress = !0;
        const r = t.isFirstAnimation
          ? Object.assign(Object.assign({}, i.transition), { velocity: 0 })
          : i.transition;
        t.isFirstAnimation = !1;
        const { el: s } = t,
          { keyframe: a } = i;
        ps(e.animation.clickThrough)(s, a, r).then(() => {
          (t.currentState = o), (t.animationInProgress = !1), hs(e);
        });
      }
      function ms(e) {
        const { state: t } = e;
        t.animationInProgress || hs(e);
      }
      function gs(e) {
        const { animation: t, state: n } = e,
          { el: o } = n;
        (o.style.opacity = `${t.effectA.keyframe.opacity}`),
          ps(t.clickThrough)(o, t.effectA.keyframe, { duration: 0 }),
          (0, es.l)(o, () => {
            (n.desiredState = is.Entered), ms(e);
          });
      }
      function ys(e) {
        switch (e) {
          case Jr.Top:
            return 0;
          case Jr.Center:
            return 0.5;
          case Jr.Bottom:
            return 1;
          default:
            return 0.5;
        }
      }
      function vs(e) {
        return (e.top + e.bottom) / 2;
      }
      function bs(e) {
        const { animation: t, state: n } = e,
          { el: o } = n;
        t.effectA &&
          ((o.style.opacity = `${t.effectA.keyframe.opacity}`),
          ps(t.clickThrough)(o, t.effectA.keyframe, { duration: 0 }));
        const i = (0, es.l)(
          o,
          (o) => {
            const r = vs(o.boundingClientRect);
            return (
              t.effectA && !t.replay && i(),
              (n.desiredState = is.Entered),
              ms(e),
              (o) => {
                t.replay || i();
                const s = vs(o.boundingClientRect) <= r;
                (n.desiredState = s ? is.Exited : is.Initial), ms(e);
              }
            );
          },
          { amount: ys(t.start) }
        );
      }
      function ws(e) {
        switch (e) {
          case Jr.Top:
            return "0px 0px -100% 0px";
          case Jr.Center:
            return "-50% 0px -50% 0px";
          case Jr.Bottom:
            return "-100% 0px 0px 0px";
          default:
            return "-50% 0px -50% 0px";
        }
      }
      function _s(e) {
        const { animation: t, state: n } = e,
          { el: o } = n;
        t.effectA &&
          ((o.style.opacity = `${t.effectA.keyframe.opacity}`),
          ps(t.clickThrough)(o, t.effectA.keyframe, { duration: 0 }));
        const i = t.section.el,
          r = (0, es.l)(
            i,
            (o) => {
              const i = vs(o.boundingClientRect);
              return (
                t.effectA && !t.replay && r(),
                (n.desiredState = is.Entered),
                ms(e),
                (o) => {
                  t.replay || r();
                  const s = vs(o.boundingClientRect) <= i;
                  (n.desiredState = s ? is.Exited : is.Initial), ms(e);
                }
              );
            },
            { amount: "some", root: document, margin: ws(t.start) }
          );
      }
      function Ss(e, t) {
        e.effectA && (e.effectA.keyframe.opacity *= t.defaultKeyframe.opacity),
          (e.type !== Xr.ElementInView && e.type !== Xr.SectionInView) ||
            (e.effectB &&
              (e.effectB.keyframe.opacity *= t.defaultKeyframe.opacity));
      }
      function Es(e) {
        const t = (function (e) {
            const t = new Map();
            if (!e) return t;
            const n = e.scrollAnimations || {};
            return (
              Object.entries(n).forEach(([e, n]) => {
                if (!n) return;
                const o = ls(n);
                o && t.set(e, o);
              }),
              t
            );
          })(e),
          n = (function (e) {
            const t = new Map();
            for (const [n] of e) {
              const e = document.getElementById(n);
              if (!e) continue;
              const o = us(e),
                i = {
                  isFirstAnimation: !0,
                  animationInProgress: !1,
                  desiredState: is.Initial,
                  currentState: is.Initial,
                  el: e,
                  defaultKeyframe: o,
                };
              t.set(n, i);
            }
            return t;
          })(t),
          o = new Map();
        for (const [e, i] of t) {
          const t = n.get(e);
          if (t)
            switch ((Ss(i, t), i.type)) {
              case Xr.OnAppear:
                gs({ animation: i, state: t });
                break;
              case Xr.OnScroll:
                o.set(e, { animation: i, state: t });
                break;
              case Xr.ElementInView:
                bs({ animation: i, state: t });
                break;
              case Xr.SectionInView:
                _s({ animation: i, state: t });
            }
        }
        let i;
        const r = (0, ts.W)((e) => {
          const t = i;
          if (((i = e), void 0 === t)) return;
          const n = ss.lastScrollDirection;
          e > t
            ? (ss.lastScrollDirection = Kr.Down)
            : e < t && (ss.lastScrollDirection = Kr.Up),
            ss.lastScrollDirection &&
              ss.lastScrollDirection !== n &&
              (function (e, t) {
                const n = [];
                for (const [o, i] of t) {
                  const { animation: t, state: r } = i,
                    s = t.direction === e,
                    a = r.desiredState === is.Initial;
                  s && a
                    ? ((r.desiredState = is.Entered),
                      ms(i),
                      t.replay || n.push(o))
                    : s || a || ((r.desiredState = is.Initial), ms(i));
                }
                for (const e of n) t.delete(e);
              })(ss.lastScrollDirection, o);
        });
        or(() => {
          r(), (ss.lastScrollDirection = void 0);
        });
      }
      var Os,
        Ps,
        Ts,
        Ms = n(8683);
      !(function (e) {
        (e.Upload = "upload"), (e.URL = "url");
      })(Os || (Os = {})),
        (function (e) {
          (e.Pause = "pause"), (e.Continue = "continue");
        })(Ps || (Ps = {})),
        (function (e) {
          (e.None = "none"),
            (e.PlayPause = "play_pause"),
            (e.Waveform = "waveform"),
            (e.Speaker = "speaker"),
            (e.Custom = "custom");
        })(Ts || (Ts = {}));
      const Rs = Os.Upload,
        xs = Ts.Waveform,
        Cs = B.si.Pointer,
        As = "#252627";
      Ts.PlayPause,
        Ts.Waveform,
        Ts.Speaker,
        Ts.PlayPause,
        Ts.Waveform,
        Ts.Speaker;
      function ks(e) {
        return e.playIconType || xs;
      }
      function Ds(e) {
        if (ks(e) !== Ts.None) return e.iconPlayUrl;
      }
      function Is(e) {
        if (ks(e) !== Ts.None) return e.iconPauseUrl;
      }
      function js(e, t) {
        const n = document.createElement("div");
        (n.style.width = "100%"), (n.style.height = "100%");
        return (
          ks(t) === Ts.Custom
            ? ((n.style.backgroundImage = `url("${encodeURI(e)}")`),
              (n.style.backgroundSize = "contain"),
              (n.style.backgroundPosition = "center"),
              (n.style.backgroundRepeat = "no-repeat"))
            : ((n.style.backgroundColor = (function (e) {
                return e.playIconColor || As;
              })(t)),
              (n.style.maskImage = `url("${encodeURI(e)}")`),
              (n.style.maskSize = "contain"),
              (n.style.maskPosition = "center"),
              (n.style.maskRepeat = "no-repeat")),
          n
        );
      }
      var Ns = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      let Ls = {
        loadPromise: void 0,
        loadingDone: !1,
        audios: void 0,
        onLeavePauseAudios: [],
        tabFocus: !0,
        documentVisibility: !0,
        audioFadeOut: !1,
      };
      function Bs(e, t) {
        var n;
        const o =
            (null === (n = null == e ? void 0 : e.audio) || void 0 === n
              ? void 0
              : n[t]) || {},
          i = (function (e) {
            return {
              sourceType: e,
              src: "",
              autoplay: !1,
              loop: !1,
              progress: 0,
              volume: 0.25,
              onLeave: Ps.Pause,
            };
          })((null == o ? void 0 : o.sourceType) || Rs);
        return Object.assign(Object.assign({}, i), o);
      }
      function Fs(e, t) {
        var n;
        const o =
            (null === (n = null == e ? void 0 : e.audioStyle) || void 0 === n
              ? void 0
              : n[t]) || {},
          i = {
            playCursor: Cs,
            playIconType: xs,
            playIconColor: As,
            iconPlayUrl: "",
            iconPauseUrl: "",
          };
        return Object.assign(Object.assign({}, i), o);
      }
      function Us(e) {
        var t, n;
        null === (t = e.iconDivEl) || void 0 === t || t.remove(),
          (e.iconDivEl = void 0);
        const o = !!(null === (n = e.howl) || void 0 === n
          ? void 0
          : n.playing());
        o && (e.playedOnce = !0);
        const i = o ? e.iconPauseBlobUrl : e.iconPlayBlobUrl;
        if (!i) return;
        const r = js(i, e.style);
        e.el.prepend(r), (e.iconDivEl = r);
      }
      function Vs(e) {
        var t, n;
        !!(null === (t = e.howl) || void 0 === t ? void 0 : t.playing()) ||
          null === (n = e.howl) ||
          void 0 === n ||
          n.play();
      }
      function Hs(e) {
        return Ns(this, void 0, void 0, function* () {
          e.iconPlayBlobUrl = yield (0, F.x)(Ds(e.style));
        });
      }
      function zs(e) {
        return Ns(this, void 0, void 0, function* () {
          e.iconPauseBlobUrl = yield (0, F.x)(Is(e.style));
        });
      }
      function Ws(e) {
        return Ns(this, void 0, void 0, function* () {
          const t = (function (e) {
            const t = new Map(),
              n = document.getElementsByClassName("pwb-audio");
            for (let o = 0; o < n.length; o++) {
              const i = n[o].id;
              if (!i) continue;
              const r = document.getElementById(i);
              r &&
                t.set(i, {
                  el: r,
                  attrs: Bs(e, i),
                  style: Fs(e, i),
                  playedOnce: !1,
                  isUnlocked: !1,
                  wasFadedOut: !1,
                  wasPausedByFadeOut: !1,
                });
            }
            return t;
          })(e);
          Ls.audios = t;
          const n = [];
          Array.from(t.values()).forEach((e) => {
            n.push(
              (function (e) {
                return Ns(this, void 0, void 0, function* () {
                  yield Promise.all([Hs(e), zs(e)]);
                });
              })(e)
            );
          }),
            yield Promise.all(n),
            (Ls.loadingDone = !0);
        });
      }
      function $s(e) {
        return Ns(this, void 0, void 0, function* () {
          Ls.loadPromise || (Ls.loadPromise = Ws(e)), yield Ls.loadPromise;
        });
      }
      function Gs(e) {
        if (!e) return;
        const t = (0, L.wj)(e).toLowerCase();
        return [
          "mp3",
          "opus",
          "ogg",
          "wav",
          "aac",
          "m4a",
          "m4b",
          "mp4",
          "webm",
        ].includes(t)
          ? [t]
          : void 0;
      }
      function qs(e) {
        var t, n;
        if ((Us(e), !e.playedOnce)) {
          if (e.attrs.progress > 0) {
            const o =
              ((null === (t = e.howl) || void 0 === t
                ? void 0
                : t.duration()) || 0) * e.attrs.progress;
            null === (n = e.howl) || void 0 === n || n.seek(o);
          }
          e.attrs.autoplay && Vs(e);
        }
      }
      function Ys(e) {
        if ((Us(e), e.attrs.src)) {
          const t = new Ms.Howl({
            src: [e.attrs.src],
            format: Gs(e.attrs.src),
            html5: !0,
            loop: e.attrs.loop,
            volume: e.attrs.volume,
            onplay: () => Us(e),
            onplayerror: () => Us(e),
            onend: () => Us(e),
            onpause: () => Us(e),
            onstop: () => Us(e),
            onload: () => {
              qs(e);
            },
            onunlock: () => {
              qs(e), (e.isUnlocked = !0);
            },
            onfade: () => {
              var t, n, o;
              const i =
                  (null === (t = e.howl) || void 0 === t
                    ? void 0
                    : t.volume()) || 0,
                r = !!(null === (n = e.howl) || void 0 === n
                  ? void 0
                  : n.playing());
              i <= 0 &&
                r &&
                e.wasFadedOut &&
                ((e.wasPausedByFadeOut = !0),
                null === (o = e.howl) || void 0 === o || o.pause());
            },
          });
          (e.howl = t),
            e.attrs.onLeave === Ps.Pause && Ls.onLeavePauseAudios.push(e);
        }
        const t = (function (e) {
            return (t) => {
              var n, o;
              Rr(t),
                xr(t),
                (!e.attrs.autoplay || e.playedOnce) &&
                  ((
                    null === (n = e.howl) || void 0 === n ? void 0 : n.playing()
                  )
                    ? null === (o = e.howl) || void 0 === o || o.pause()
                    : Vs(e));
            };
          })(e),
          { el: n } = e;
        e.style.playCursor === B.si.Pointer && (n.style.cursor = "pointer"),
          n.addEventListener("click", t);
      }
      function Xs() {
        const e = !Ls.documentVisibility;
        if (Ls.audioFadeOut !== e)
          if (((Ls.audioFadeOut = e), Ls.audioFadeOut))
            for (const e of Ls.onLeavePauseAudios) {
              (e.wasFadedOut = !1), (e.wasPausedByFadeOut = !1);
              const t = e.howl;
              if (!t) continue;
              t.playing() && ((e.wasFadedOut = !0), t.fade(t.volume(), 0, 1e3));
            }
          else
            for (const e of Ls.onLeavePauseAudios) {
              if (!e.wasFadedOut) continue;
              e.wasFadedOut = !1;
              const t = e.howl;
              t &&
                (t.fade(t.volume(), e.attrs.volume, 1e3),
                e.wasPausedByFadeOut && Vs(e));
            }
      }
      function Ks(e) {
        (Ls.tabFocus = e), Xs();
      }
      function Js(e, t) {
        if (!e.id) return;
        const { audios: n } = Ls;
        if (!n) return;
        const o = n.get(e.id);
        if (!o) return;
        if (!o.howl) return;
        if (!o.isUnlocked && t !== Mr.MouseClick) return;
        if (
          ((e.event !== Pr.Pause && e.event !== Pr.Stop) ||
            (o.attrs.autoplay = !1),
          o.attrs.autoplay && !o.playedOnce)
        )
          return;
        const i = !!o.howl.playing(),
          r = (function (e, t) {
            return e === Pr.TogglePlayPause
              ? t
                ? Pr.Pause
                : Pr.Play
              : e === Pr.TogglePlayStop
              ? t
                ? Pr.Stop
                : Pr.Play
              : e;
          })(e.event, i);
        i
          ? r === Pr.Pause
            ? o.howl.pause()
            : r === Pr.Stop && o.howl.stop()
          : r === Pr.Play
          ? o.howl.play()
          : r === Pr.Stop && o.howl.stop();
      }
      function Qs() {
        const { loadingDone: e, audios: t } = Ls;
        if (!e || !t)
          throw new Error(
            "UIAudioModule needs to be loaded before it can be initialized."
          );
        Array.from(t.values()).forEach((e) => {
          Ys(e);
        });
        const n = () => Ks(!0),
          o = () => Ks(!1);
        window.addEventListener("focus", n),
          window.addEventListener("blur", o),
          Ks(!!document.hasFocus());
        const i = () => {
          return (e = !document.hidden), (Ls.documentVisibility = e), void Xs();
          var e;
        };
        document.addEventListener("visibilitychange", i),
          i(),
          Ar(Or.UIAudio, Js);
        or(() => {
          var e;
          kr(Or.UIAudio, Js),
            document.removeEventListener("visibilitychange", i),
            window.removeEventListener("blur", o),
            window.removeEventListener("focus", n);
          const t = Array.from(Ls.audios ? Ls.audios.values() : []);
          for (const n of t)
            null === (e = n.howl) || void 0 === e || e.unload();
          Ls = {
            loadPromise: void 0,
            loadingDone: !1,
            audios: void 0,
            onLeavePauseAudios: [],
            tabFocus: !0,
            documentVisibility: !0,
            audioFadeOut: !1,
          };
        });
      }
      var Zs,
        ea,
        ta,
        na = n(2777);
      !(function (e) {
        (e.Top = "top"),
          (e.Right = "right"),
          (e.Bottom = "bottom"),
          (e.Left = "left");
      })(Zs || (Zs = {})),
        (function (e) {
          (e.Start = "start"), (e.Center = "center"), (e.End = "end");
        })(ea || (ea = {})),
        (function (e) {
          (e.Auto = "auto"), (e.Click = "click"), (e.None = "none");
        })(ta || (ta = {}));
      const oa = {
        [Zs.Top]: Zs.Bottom,
        [Zs.Bottom]: Zs.Top,
        [Zs.Left]: Zs.Right,
        [Zs.Right]: Zs.Left,
      };
      function ia(e) {
        const { position: t, align: n } = e,
          o = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto",
            transform: "none",
          };
        o[oa[t]] = "100%";
        const i = [Zs.Left, Zs.Right].includes(t);
        let r = i ? Zs.Top : Zs.Left;
        n === ea.End && (r = oa[r]);
        const s = n === ea.Center ? "50%" : "0px";
        o[r] = s;
        const a = [];
        n === ea.Center && a.push(i ? "translateY(-50%)" : "translateX(-50%)");
        const c = (function (e) {
          const { position: t, offsetOrthogonal: n, offsetParallel: o } = e,
            i = [Zs.Top, Zs.Left].includes(t) ? -1 : 1,
            r = [Zs.Top, Zs.Bottom].includes(t),
            s = [n * i, o];
          r && s.reverse();
          return { x: s[0], y: s[1] };
        })(e);
        return (
          c.x && a.push(`translateX(${c.x}px)`),
          c.y && a.push(`translateY(${c.y}px)`),
          a.length > 0 && (o.transform = a.join(" ")),
          o
        );
      }
      function ra(e, t, n) {
        const o = (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
        return 0 === o ? 0 : o > 0 ? 1 : 2;
      }
      function sa(e, t) {
        const n = t.x - e.x,
          o = t.y - e.y;
        return Math.sqrt(n * n + o * o);
      }
      function aa(e, t, n) {
        return (t.x - e.x) * (n.y - e.y) - (n.x - e.x) * (t.y - e.y);
      }
      function ca(e, t) {
        return (
          0 !==
          (function (e, t) {
            let n = 0;
            for (let o = 0; o < t.length; o++) {
              const i = t[o],
                r = t[(o + 1) % t.length];
              i.y <= e.y
                ? r.y > e.y && aa(i, r, e) > 0 && n++
                : r.y <= e.y && aa(i, r, e) < 0 && n--;
            }
            return n;
          })(e, t)
        );
      }
      var la,
        ua,
        da = function (e, t, n, o) {
          return new (n || (n = Promise))(function (i, r) {
            function s(e) {
              try {
                c(o.next(e));
              } catch (e) {
                r(e);
              }
            }
            function a(e) {
              try {
                c(o.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, a);
            }
            c((o = o.apply(e, t || [])).next());
          });
        };
      !(function (e) {
        (e.Relative = "relative"), (e.Fixed = "fixed");
      })(la || (la = {})),
        (function (e) {
          (e.Closed = "closed"), (e.Open = "open");
        })(ua || (ua = {}));
      const fa = { [ua.Closed]: ua.Open, [ua.Open]: ua.Closed },
        pa = { overlays: new Map() };
      function ha(e) {
        const t = [];
        if (!e) return t;
        const n = e[I.RelativeOverlays] || {};
        return (
          Object.entries(n).forEach(([e, n]) => {
            if (!n) return;
            const o = document.getElementById(e);
            if (!o) return;
            const i = {
                position: Zs.Bottom,
                align: ea.Center,
                offsetOrthogonal: 8,
                offsetParallel: 0,
                dismissType: ta.Auto,
              },
              r = Object.assign(Object.assign({}, i), n);
            t.push({
              id: e,
              el: o,
              type: la.Relative,
              desiredState: ua.Closed,
              currentState: ua.Closed,
              isAnimating: !1,
              isDisposed: !1,
              overlay: r,
            });
          }),
          t
        );
      }
      function ma(e) {
        return [
          { x: e.left, y: e.top },
          { x: e.right, y: e.top },
          { x: e.right, y: e.bottom },
          { x: e.left, y: e.bottom },
        ];
      }
      function ga(e) {
        const { el: t } = e,
          n = t.parentElement;
        if (!n) return;
        const o = (0, na.A)(
            (o) => {
              const r = (function (e) {
                if (e.length < 3) return;
                const t = [];
                let n = 0;
                for (let t = 1; t < e.length; t++)
                  (e[t].x < e[n].x || (e[t].x === e[n].x && e[t].y < e[n].y)) &&
                    (n = t);
                let o,
                  i = n;
                do {
                  t.push(e[i]), (o = (i + 1) % e.length);
                  for (let t = 0; t < e.length; t++) {
                    const n = ra(e[i], e[t], e[o]);
                    (2 == n || (0 == n && sa(e[i], e[t]) > sa(e[i], e[o]))) &&
                      (o = t);
                  }
                  i = o;
                } while (i != n);
                return t;
              })([
                ...ma(t.getBoundingClientRect()),
                ...ma(n.getBoundingClientRect()),
              ]);
              if (!r) return;
              ca({ x: o.clientX, y: o.clientY }, r) ||
                ((e.desiredState = ua.Closed), _a(e), i());
            },
            200,
            { leading: !0, trailing: !0 }
          ),
          i = () => {
            document.removeEventListener("mousemove", o),
              (e.disposeMouseMoveListenerCb = void 0);
          };
        return document.addEventListener("mousemove", o), i;
      }
      function ya(e, t) {
        return !!t && (!!t.classList.contains(e) || ya(e, t.parentElement));
      }
      function va(e) {
        const { el: t } = e,
          n = t.parentElement;
        if (!n) return;
        const o = jr(e.id),
          i = () => {
            (e.desiredState = ua.Closed), _a(e), a();
          },
          r = (e) => {
            const t = e.target;
            n.contains(t) || ya(o, t) || i();
          },
          s = (e) => {
            ("Escape" !== e.key && "Esc" !== e.key) || i();
          },
          a = () => {
            document.removeEventListener("mousedown", r),
              document.removeEventListener("touchstart", r),
              document.removeEventListener("keydown", s),
              (e.disposeClickAwayListenerCb = void 0);
          };
        return (
          document.addEventListener("mousedown", r),
          document.addEventListener("touchstart", r),
          document.addEventListener("keydown", s),
          a
        );
      }
      function ba(e) {
        var t, n;
        null === (t = e.disposeMouseMoveListenerCb) ||
          void 0 === t ||
          t.call(e),
          null === (n = e.disposeClickAwayListenerCb) ||
            void 0 === n ||
            n.call(e);
      }
      function wa(e) {
        return da(this, void 0, void 0, function* () {
          e.isAnimating = !0;
          const { el: t, desiredState: n } = e;
          n === ua.Open
            ? ((t.style.display = "block"),
              e.type === la.Relative &&
                (function (e) {
                  var t, n;
                  e.overlay.dismissType === ta.Auto &&
                    (null === (t = e.disposeMouseMoveListenerCb) ||
                      void 0 === t ||
                      t.call(e),
                    (e.disposeMouseMoveListenerCb = ga(e))),
                    [ta.Auto, ta.Click].includes(e.overlay.dismissType) &&
                      (null === (n = e.disposeClickAwayListenerCb) ||
                        void 0 === n ||
                        n.call(e),
                      (e.disposeClickAwayListenerCb = va(e)));
                })(e),
              yield (0, Zr.i)(
                t,
                { opacity: 1 },
                { type: "tween", ease: qr.EaseInOut, delay: 0, duration: 0.3 }
              ),
              (e.currentState = ua.Open))
            : (e.type === la.Relative && ba(e),
              yield (0, Zr.i)(
                t,
                { opacity: 0 },
                { type: "tween", ease: qr.EaseInOut, delay: 0, duration: 0.3 }
              ),
              (t.style.display = "none"),
              (e.currentState = ua.Closed)),
            (e.isAnimating = !1),
            _a(e);
        });
      }
      function _a(e) {
        e.isAnimating ||
          e.isDisposed ||
          (e.desiredState !== e.currentState && wa(e));
      }
      function Sa(e) {
        const { el: t, overlay: n } = e;
        (t.style.display = "none"),
          (t.style.opacity = "0"),
          (function (e, t) {
            const n = ia(t);
            for (const [t, o] of Object.entries(n)) e.style[t] = o;
          })(t, n);
        const o = t.parentElement;
        o &&
          ((o.style.cursor = "pointer"),
          t.style.cursor || (t.style.cursor = "auto"),
          o.addEventListener("click", (t) => {
            Rr(t), xr(t), (e.desiredState = ua.Open), _a(e);
          }),
          pa.overlays.set(e.id, e));
      }
      function Ea(e) {
        const { overlays: t } = pa,
          n = t.get(e.id);
        if (n) {
          switch (e.event) {
            case Tr.Open:
              n.desiredState = ua.Open;
              break;
            case Tr.Close:
              n.desiredState = ua.Closed;
              break;
            case Tr.ToggleOpenClose:
              n.desiredState = fa[n.desiredState];
          }
          _a(n);
        }
      }
      function Oa(e) {
        vr.reinitialize(e),
          Ur(e),
          Lr(e),
          (function (e) {
            const t = ha(e);
            for (const e of t) Sa(e);
            Ar(Or.UIOverlay, Ea),
              or(() => {
                kr(Or.UIOverlay, Ea);
                const e = Array.from(pa.overlays.values());
                for (const t of e)
                  (t.isDisposed = !0), t.type === la.Relative && ba(t);
                pa.overlays = new Map();
              });
          })(e),
          Wr(e),
          Es(e),
          Qs();
      }
      function Pa(e) {
        const t = document.getElementById(a);
        t.replaceWith(...t.childNodes);
        document.querySelector(`div#${s}`).remove(), Oa(e);
      }
      var Ta = function (e, t, n, o) {
        return new (n || (n = Promise))(function (i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      const Ma = {
        isInitialized: !1,
        isNavigating: !1,
        styleLoadedPaths: new Set(),
      };
      function Ra() {
        const { isInitialized: e, isNavigating: t } = Ma;
        if (e && !t) return Ma.currentPath;
      }
      function xa() {
        return Ma.currentSectionHash;
      }
      function Ca(e, t, n = !1) {
        (Ma.currentPath = e),
          (Ma.currentSectionHash = t || void 0),
          n || tr.kr || history.pushState({}, "", `${e}${t ? `#${t}` : ""}`);
      }
      function Aa() {
        return Ta(this, void 0, void 0, function* () {
          try {
            const [e, t] = yield Promise.all([G(), q()]),
              n = new DOMParser().parseFromString(e, "text/html"),
              o = n.getElementById(c);
            if (!o) throw new Error("Error page wrap not found.");
            ir(),
              document.body.replaceChildren(o),
              (document.title = n.title),
              Array.from(document.body.attributes).forEach((e) => {
                document.body.removeAttribute(e.name);
              });
            const i = document.createElement("style");
            (i.textContent = t), document.head.append(i);
          } catch (e) {
            console.error("Load error page error:", e);
          }
        });
      }
      const ka = () =>
        window.innerWidth < C
          ? j.Mobile
          : window.innerWidth < A
          ? j.Tablet
          : j.Desktop;
      function Da(e, t, n) {
        const { isInitialized: o, isNavigating: i } = Ma;
        o && !i
          ? ((Ma.isNavigating = !0),
            Ca(e, t, n),
            (function () {
              return Ta(this, void 0, void 0, function* () {
                const e = Ma.currentPath;
                if (!e) return;
                const [t, n, o] = yield Promise.all([W(e), $(e), z(e)]),
                  i = ka(),
                  r = yield H(o, i);
                ir();
                const c = new DOMParser().parseFromString(t, "text/html"),
                  l = c.getElementById(a);
                if (!l)
                  throw new Error(
                    "Failed loading a new page: page body wrap not found."
                  );
                const u = c.getElementById(s);
                if (!u)
                  throw new Error(
                    "Failed loading a new page: page loading wrap not found."
                  );
                if (
                  (document.body.replaceChildren(l, u),
                  (document.title = c.title),
                  window._pwExecLoadingPageJavascript(),
                  Array.from(document.body.attributes).forEach((e) => {
                    document.body.removeAttribute(e.name);
                  }),
                  Array.from(c.body.attributes).forEach((e) => {
                    document.body.setAttribute(e.name, e.value);
                  }),
                  !Ma.styleLoadedPaths.has(e))
                ) {
                  Ma.styleLoadedPaths.add(e);
                  const t = document.createElement("style");
                  (t.textContent = n), document.head.append(t);
                }
                const d = $s(o);
                if (r) {
                  const { engineState: e, animations: t } = r,
                    n = Sr(e, o, i);
                  yield Promise.all([d, n]), Er(t, o);
                } else yield d;
                Pa(o);
              });
            })()
              .then(() => {
                (Ma.isNavigating = !1), Ia();
              })
              .catch((e) => {
                console.error("Router navigation error:", e),
                  Aa().finally(() => {
                    (Ma.isNavigating = !1), Ia();
                  });
              }))
          : (Ma.nextNavigateTo = {
              path: e,
              sectionHash: t,
              omitHistoryPush: n,
            });
      }
      function Ia() {
        if (!Ma.nextNavigateTo) return;
        const { path: e, sectionHash: t } = Ma.nextNavigateTo;
        (Ma.nextNavigateTo = void 0), Da(e, t);
      }
      function ja() {
        const e = tr.xB,
          t = (0, L.f9)(window.location.hash, "#"),
          n = document.location.search || "";
        tr.kr || history.replaceState({}, "", `${e}${t ? `#${t}` : ""}${n}`),
          Ca(e, t, !0),
          (function () {
            return Ta(this, void 0, void 0, function* () {
              const e = Ma.currentPath;
              if (!e) return;
              Ma.styleLoadedPaths.add(e);
              const t = ka(),
                n = z(e),
                o = yield n,
                i = H(o, t),
                r = yield i,
                s = $s(o);
              if (r) {
                const { engineState: e, animations: n } = r,
                  i = Sr(e, o, t);
                yield Promise.all([s, i]), Er(n, o);
              } else yield s;
              Pa(o);
            });
          })()
            .then(() => {
              (Ma.isInitialized = !0), Ia();
            })
            .catch((e) => {
              console.error("Router initialization error:", e),
                Aa().finally(() => {
                  (Ma.isInitialized = !0), Ia();
                });
            }),
          window.addEventListener("popstate", () => {
            Da(
              window.location.pathname,
              (0, L.f9)(window.location.hash, "#"),
              !0
            );
          });
      }
    },
    7417: (e, t, n) => {
      var o, i;
      n.d(t, { lx: () => i, si: () => o }),
        (function (e) {
          (e.Default = "default"), (e.Pointer = "pointer");
        })(o || (o = {})),
        (function (e) {
          (e.SceneState = "scene-state"),
            (e.UIState = "ui-state.json"),
            (e.Index = "index.html"),
            (e.Styles = "styles.css"),
            (e.Favicon = "favicon.ico"),
            (e.MetaImage = "meta-image.jpg"),
            (e.ErrorPage = "error-page.html"),
            (e.ErrorPageStyles = "error-page-styles.css");
        })(i || (i = {}));
      i.Index, i.Styles, i.UIState, i.Favicon, i.MetaImage;
      var r;
      !(function (e) {
        (e.CUSTOM_DOMAIN_IS_MISSING = "CUSTOM_DOMAIN_IS_MISSING"),
          (e.DNS_RECORD_A_IS_MISSING = "DNS_RECORD_A_IS_MISSING"),
          (e.DNS_RECORD_CNAME_IS_MISSING = "DNS_RECORD_CNAME_IS_MISSING"),
          (e.DNS_RECORD_TXT_IS_MISSING = "DNS_RECORD_TXT_IS_MISSING"),
          (e.EXTRA_DNS_RECORD_IS_FOUND = "EXTRA_DNS_RECORD_IS_FOUND");
      })(r || (r = {}));
    },
  },
]);
