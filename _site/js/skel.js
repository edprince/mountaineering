var skel = function() {
    var e = "config",
        t = "breakpoints",
        n = "iterate",
        r = "stateId",
        i = "elements",
        s = "getElementsByClassName",
        o = "stateElements",
        u = "getElementsByTagName",
        a = !1,
        f = "length",
        l = "parentNode",
        c = null,
        h = "gutters",
        p = "insertBefore",
        d = "push",
        v = " 0 0 ",
        m = "getCachedElement",
        g = "className",
        y = "!important",
        b = "object",
        w = "cacheNewElement",
        E = "newInline",
        S = "grid",
        x = "config_breakpoint",
        T = "orientationChange",
        N = "locations",
        C = "parseMeasurement",
        k = "createElement",
        L = "match",
        A = "newElement",
        O = "deviceType",
        M = "padding-top:0!important",
        _ = "substring",
        D = !0,
        P = "viewport",
        H = "cache",
        B = "_skel_isReversed",
        j = "}",
        F = "head",
        I = "containers",
        q = "vars",
        R = "indexOf",
        U = "replace",
        z = "padding-top:",
        W = "matchesMedia",
        X = "extend",
        V = "events",
        $ = "isArray",
        J = "onorientationchange",
        K = ":first-child>:first-child {",
        Q = "DOMReady",
        G = "getComputedStyle",
        Y = "addEventListener",
        Z = "^head",
        et = "{display:none!important}",
        tt = "padding:",
        nt = "registerLocation",
        rt = "hasOwnProperty",
        it = "defaults",
        st = "documentElement",
        ot = "IEVersion",
        ut = "attachElements",
        at = "horizontal",
        ft = "plugins",
        lt = "attachElement",
        ct = "DOMContentLoaded",
        ht = "text/css",
        pt = "_skel_attach",
        dt = "initial-scale=1",
        vt = "states",
        mt = "firstChild",
        gt = ":first-child>*{",
        yt = "placeholder",
        bt = "removeEventListener",
        wt = ">*{",
        Et = "(min-width: ",
        St = ".row",
        xt = "resize",
        Tt = "media",
        Nt = "applyRowTransforms",
        Ct = "attached",
        kt = "vertical",
        Lt = "normalize",
        At = "change",
        Ot = ".row.uniform",
        Mt = "html",
        _t = "collapse",
        Dt = "forceDefaultState",
        Pt = "_skel_placeholder",
        Ht = "nextSibling",
        Bt = "min-height",
        jt = "max-height",
        Ft = "querySelectorAll",
        It = "prototype",
        qt = "max-width",
        Rt = "innerHTML",
        Ut = "min-width",
        zt = "domready",
        Wt = "android",
        Xt = ".\\3$1 ",
        Vt = "priority",
        $t = "readyState",
        Jt = "onresize",
        Kt = "isStatic",
        Qt = "href",
        Gt = {
            breakpoints: [],
            breakpointList: [],
            cache: {
                elements: {},
                states: {},
                stateElements: {}
            },
            config: {
                breakpoints: {
                    "*": {
                        href: a,
                        media: ""
                    }
                },
                containers: 1140,
                defaultState: c,
                events: {},
                grid: {
                    collapse: a,
                    gutters: {
                        vertical: 40,
                        horizontal: 0
                    }
                },
                plugins: {},
                pollOnce: a,
                preload: a,
                reset: Lt,
                RTL: a,
                viewport: {
                    width: "device-width"
                }
            },
            css: {
                bm: "*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}",
                n: 'html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}',
                r: "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}"
            },
            defaults: {
                breakpoint: {
                    config: c,
                    elements: c,
                    test: c
                },
                config_breakpoint: {
                    containers: "100%",
                    grid: {},
                    href: a,
                    media: "",
                    viewport: {}
                }
            },
            events: [],
            forceDefaultState: a,
            isInit: a,
            isStatic: a,
            locations: {
                body: c,
                head: c,
                html: c
            },
            me: c,
            plugins: {},
            sd: "/",
            stateId: "",
            vars: {},
            DOMReady: c,
            getElementsByClassName: c,
            indexOf: c,
            isArray: c,
            iterate: c,
            matchesMedia: c,
            extend: function(e, t) {
                var r;
                Gt[n](t, function(n) {
                    Gt[$](t[n]) ? (Gt[$](e[n]) || (e[n] = []), Gt[X](e[n], t[n])) : typeof t[n] == b ? (typeof e[n] != b && (e[n] = {}), Gt[X](e[n], t[n])) : e[n] = t[n]
                })
            },
            getArray: function(e) {
                return Gt[$](e) ? e : [e]
            },
            getLevel: function(e) {
                return typeof e == "boolean" ? e ? 100 : 0 : parseInt(e)
            },
            parseMeasurement: function(e) {
                var t, n;
                if (typeof e != "string") t = [e, "px"];
                else if (e == "fluid") t = [100, "%"];
                else {
                    var n;
                    n = e[L](/([0-9\.]+)([^\s]*)/), n[f] < 3 || !n[2] ? t = [parseFloat(e), "px"] : t = [parseFloat(n[1]), n[2]]
                }
                return t
            },
            canUse: function(e) {
                return Gt[t][e] && Gt[t][e].test()
            },
            hasActive: function(e) {
                var t = a;
                return Gt[n](e, function(n) {
                    t = t || Gt.isActive(e[n])
                }), t
            },
            isActive: function(e) {
                return Gt[R](Gt[r], Gt.sd + e) !== -1
            },
            useActive: function(e) {
                if (typeof e !== b) return e;
                var t = c;
                return Gt[n](e, function(n) {
                    if (t !== c) return;
                    Gt.isActive(n) && (t = e[n])
                }), t
            },
            wasActive: function(e) {
                return Gt[R](Gt[q].lastStateId, Gt.sd + e) !== -1
            },
            applyRowTransforms: function(t) {
                var r, i, o, u = Gt.getLevel(t[e][S][_t]);
                Gt[e].RTL && (Gt.unreverseRows(), u > 0 && Gt.reverseRows(u)), i = "_skel_cell_important_placeholder", r = Gt[s]("skel-cell-important"), r && r[f] > 0 && Gt[n](r, function(t) {
                    if (t === f) return;
                    var n = r[t],
                        s, o = n[l],
                        c;
                    if (!o) return;
                    o[g][L](/no-collapse/) ? c = 101 : o[g][L](/collapse-at-([0-9])/) ? c = parseInt(RegExp.$1) : c = 0;
                    if (u > 0 && c <= u) {
                        if (n[rt](i) && n[i] !== a) return;
                        s = Gt[e].RTL ? Ht : "previousSibling", o = n[s];
                        while (o && o.nodeName == "#text") o = o[s];
                        if (!o) return;
                        n[l][p](n, n[l][mt]), n[i] = o
                    } else n[rt](i) || (n[i] = a), o = n[i], o !== a && (n[l][p](n, o[Ht]), n[i] = a)
                })
            },
            reverseRows: function(e) {
                var t = Gt[s]("row");
                Gt[n](t, function(n) {
                    if (n === f) return;
                    var r = t[n];
                    if (r[B] || e > 0 && r[g][L](/\bcollapse-at-([0-9])\b/) && parseInt(RegExp.$1) >= e) return;
                    var i = r.children,
                        s;
                    for (s = 1; s < i[f]; s++) r[p](i[s], i[0]);
                    r[B] = D
                })
            },
            unreverseRows: function() {
                var e = Gt[s]("row");
                Gt[n](e, function(t) {
                    if (t === f) return;
                    var n = e[t];
                    if (!n[B]) return;
                    var r = n.children,
                        i;
                    for (i = 1; i < r[f]; i++) n[p](r[i], r[0]);
                    n[B] = a
                })
            },
            bind: function(e, t) {
                Gt[V][e] || (Gt[V][e] = []), Gt[V][e][d](t), e == At && Gt.isInit && t()
            },
            change: function(e) {
                Gt.bind(At, e)
            },
            trigger: function(e) {
                if (!Gt[V][e] || Gt[V][e][f] == 0) return;
                var t;
                Gt[n](Gt[V][e], function(t) {
                    Gt[V][e][t]()
                })
            },
            registerLocation: function(e, t) {
                e == F ? t[pt] = function(e, t) {
                    t ? this[p](e, this[mt]) : this === Gt.me[l] ? this[p](e, Gt.me) : this.appendChild(e)
                } : t[pt] = function(e, t) {
                    t ? this[p](e, this[mt]) : this.appendChild(e)
                }, Gt[N][e] = t
            },
            addCachedElementToBreakpoint: function(e, n) {
                Gt[t][e] && Gt[t][e][i][d](n)
            },
            addCachedElementToState: function(e, t) {
                Gt[H][o][e] ? Gt[H][o][e][d](t) : Gt[H][o][e] = [t]
            },
            attachElement: function(e) {
                var t, n = e.location,
                    r = a;
                return e[Ct] ? D : (n[0] == "^" && (n = n[_](1), r = D), n in Gt[N] ? (t = Gt[N][n], t[pt](e[b], r), e[Ct] = D, e.onAttach && e.onAttach(), D) : a)
            },
            attachElements: function(e) {
                var t = [],
                    r = [],
                    i, s, o;
                Gt[n](e, function(n) {
                    t[e[n][Vt]] || (t[e[n][Vt]] = []), t[e[n][Vt]][d](e[n])
                }), Gt[n](t, function(e) {
                    if (t[e][f] == 0) return;
                    Gt[n](t[e], function(n) {
                        Gt[lt](t[e][n]) || r[d](t[e][n])
                    })
                }), r[f] > 0 && Gt[Q](function() {
                    Gt[n](r, function(e) {
                        Gt[lt](r[e])
                    })
                })
            },
            cacheElement: function(e) {
                return Gt[H][i][e.id] = e, e
            },
            cacheNewElement: function(e, t, n, r) {
                var i;
                return t[l] && t[l].removeChild(t), i = Gt[A](e, t, n, r), Gt.cacheElement(i)
            },
            detachAllElements: function(e) {
                var t, r, s = {};
                Gt[n](e, function(t) {
                    s[e[t].id] = D
                }), Gt[n](Gt[H][i], function(e) {
                    if (e in s) return;
                    Gt.detachElement(e)
                })
            },
            detachElement: function(e) {
                var t = Gt[H][i][e],
                    n;
                if (!t[Ct]) return;
                n = t[b];
                if (!n[l] || n[l] && !n[l].tagName) return;
                n[l].removeChild(n), t[Ct] = a, t.onDetach && t.onDetach()
            },
            getCachedElement: function(e) {
                return Gt[H][i][e] ? Gt[H][i][e] : c
            },
            newElement: function(e, t, n, r) {
                return {
                    id: e,
                    object: t,
                    location: n,
                    priority: r,
                    attached: a
                }
            },
            changeState: function(s) {
                var u, l, c, p, g, b, T, N;
                Gt[q].lastStateId = Gt[r], Gt[r] = s;
                if (!Gt[H][vt][Gt[r]]) {
                    Gt[H][vt][Gt[r]] = {
                        config: {},
                        elements: [],
                        values: {}
                    }, c = Gt[H][vt][Gt[r]], Gt[r] === Gt.sd ? u = [] : u = Gt[r][_](1).split(Gt.sd), Gt[X](c[e], Gt[it][x]), Gt[n](u, function(n) {
                        Gt[X](c[e], Gt[t][u[n]][e])
                    }), p = [], b = "mV" + Gt[r], c[e][P].content ? T = c[e][P].content : (c[e][P].scalable === a ? p[d]("user-scalable=no") : p[d]("user-scalable=yes"), c[e][P].width ? p[d]("width=" + c[e][P].width) : p[d](dt), T = p.join(",")), (g = Gt[m](b)) || (g = Gt[w](b, Gt.newMeta(P, T), Z, 4)), c[i][d](g);
                    var k, L;
                    p = Gt[C](c[e][I]), k = p[0], L = p[1], c.values[I] = k + L, b = "iC" + c.values[I];
                    if (!(g = Gt[m](b))) {
                        var A, O, D;
                        A = k * .75 + L, O = k + L, D = k * 1.25 + L, g = Gt[w](b, Gt[E]("body{min-width:" + O + j + ".container{margin-left:auto;margin-right:auto;width:" + O + j + ".container.small{width:" + A + j + ".container.large{width:100%;max-width:" + D + ";min-width:" + O + j), F, 3)
                    }
                    c[i][d](g), b = "iGG" + c[e][S][h][kt] + "_" + c[e][S][h][at];
                    if (!(g = Gt[m](b))) {
                        var B, W, V, $, J, G, Y;
                        p = Gt[C](c[e][S][h][kt]), B = p[0], W = p[1], V = B + W, $ = B / 2 + W, J = B / 4 + W, G = B * 1.5 + W, Y = B * 2 + W;
                        var nt, rt, st, ot, ft, lt, ct;
                        p = Gt[C](c[e][S][h][at]), nt = p[0], rt = p[1], st = nt + rt, ot = nt / 2 + rt, ft = nt / 4 + rt, lt = nt * 1.5 + rt, ct = nt * 2 + rt, g = Gt[w]("iGG" + c[e][S][h][kt] + "_" + c[e][S][h][at], Gt[E](".row>*{padding-left:" + V + j + ".row+.row>*{padding:" + st + v + V + j + ".row{margin-left:-" + V + j + ".row+.row.uniform>*{padding:" + V + v + V + j + ".row.flush>*{padding-left:0}" + ".row+.row.flush>*{padding:0}" + ".row.flush{margin-left:0}" + ".row+.row.uniform.flush>*{padding:0}" + ".row.half>*{padding-left:" + $ + j + ".row+.row.half>*{padding:" + ot + v + $ + j + ".row.half{margin-left:-" + $ + j + ".row+.row.uniform.half>*{padding:" + $ + v + $ + j + ".row.quarter>*{padding-left:" + J + j + ".row+.row.quarter>*{padding:" + ft + v + J + j + ".row.quarter{margin-left:-" + J + j + ".row+.row.uniform.quarter>*{padding:" + J + v + J + j + ".row.oneandhalf>*{padding-left:" + G + j + ".row+.row.oneandhalf>*{padding:" + lt + v + G + j + ".row.oneandhalf{margin-left:-" + G + j + ".row+.row.uniform.oneandhalf>*{padding:" + G + v + G + j + ".row.double>*{padding-left:" + Y + j + ".row+.row.double>*{padding:" + ct + v + Y + j + ".row.double{margin-left:-" + Y + j + ".row+.row.uniform.double>*{padding:" + Y + v + Y + j), F, 3)
                    }
                    c[i][d](g);
                    if (c[e][S][_t]) {
                        var ht = Gt.getLevel(c[e][S][_t]),
                            pt, mt;
                        b = "iGC" + ht + "-" + c.values[I];
                        if (!(g = Gt[m](b))) {
                            T = ":not(.no-collapse)";
                            switch (ht) {
                                case 4:
                                    break;
                                case 3:
                                    T += ":not(.collapse-at-4)";
                                    break;
                                case 2:
                                    T += ":not(.collapse-at-4):not(.collapse-at-3)";
                                    break;
                                case 1:
                                    T += ":not(.collapse-at-4):not(.collapse-at-3):not(.collapse-at-2)"
                            }
                            p = Gt[C](c[e][S][h][kt]), pt = p[0] + p[1], p = Gt[C](c[e][S][h][at]), mt = p[0] + p[1], g = Gt[w](b, Gt[E](".row>*{padding-left:" + pt + y + j + ".row>*:first-child{" + M + j + ".row+.row>*{" + tt + mt + v + pt + y + j + ".row+.row.uniform>*{" + tt + pt + v + pt + y + j + ".row{" + "margin-left:-" + pt + y + j + St + T + wt + "float:none!important;" + "width:100%!important;" + "margin-left:0!important" + j + ".row:not(.flush)" + T + gt + z + mt + y + j + ".row.uniform:not(.flush)" + T + gt + z + pt + y + j + St + T + K + M + j + Ot + T + K + M + j + St + T + wt + z + mt + j + Ot + T + wt + z + pt + j + St + T + ">*:first-child{" + "padding-top:0" + j + ".row+.row" + T + wt + tt + mt + v + pt + j + ".row+.row.uniform" + T + wt + tt + pt + v + pt + j + ".row.flush>*{" + "padding:0!important" + j + ".row.flush{" + "margin-left:0px!important" + j + ".container{" + "max-width:none!important;" + "min-width:0!important;" + "width:" + c[e][I] + y + j), F, 3)
                        }
                        c[i][d](g)
                    }
                    b = "iCd" + Gt[r];
                    if (!(g = Gt[m](b))) {
                        T = [], N = [], Gt[n](Gt[t], function(e) {
                            Gt[R](u, e) !== -1 ? T[d](".not-" + e) : N[d](".only-" + e)
                        });
                        var yt = (T[f] > 0 ? T.join(",") + et : "") + (N[f] > 0 ? N.join(",") + et : "");
                        g = Gt[w](b, Gt[E](yt[U](/\.([0-9])/, Xt)), F, 3), c[i][d](g)
                    }
                    Gt[n](u, function(r) {
                        Gt[t][u[r]][e][Qt] && (b = "ss" + u[r], (g = Gt[m](b)) || (g = Gt[w](b, Gt.newStyleSheet(Gt[t][u[r]][e][Qt]), F, 5)), c[i][d](g)), Gt[t][u[r]][i][f] > 0 && Gt[n](Gt[t][u[r]][i], function(e) {
                            c[i][d](Gt[t][u[r]][i][e])
                        })
                    }), Gt[H][o][Gt[r]] && (Gt[n](Gt[H][o][Gt[r]], function(e) {
                        c[i][d](Gt[H][o][Gt[r]][e])
                    }), Gt[H][o][Gt[r]] = [])
                } else c = Gt[H][vt][Gt[r]];
                Gt.detachAllElements(c[i]), Gt[ut](c[i]), Gt[Q](function() {
                    Gt[Nt](c)
                }), Gt[q].state = Gt[H][vt][Gt[r]], Gt[q][r] = Gt[r], Gt.trigger(At)
            },
            getStateId: function() {
                if (Gt[Dt] && Gt[e].defaultState) return Gt[e].defaultState;
                var r = "";
                return Gt[n](Gt[t], function(e) {
                    Gt[t][e].test() && (r += Gt.sd + e)
                }), r
            },
            poll: function() {
                var e = "";
                e = Gt.getStateId(), e === "" && (e = Gt.sd), e !== Gt[r] && (Gt[Kt] ? Gt.changeState(e) : (Gt[N][Mt][g] = Gt[N][Mt][g][U](Gt[r][_](1)[U](new RegExp(Gt.sd, "g"), " "), ""), Gt.changeState(e), Gt[N][Mt][g] = Gt[N][Mt][g] + " " + Gt[r][_](1)[U](new RegExp(Gt.sd, "g"), " "), Gt[N][Mt][g].charAt(0) == " " && (Gt[N][Mt][g] = Gt[N][Mt][g][_](1))))
            },
            updateState: function() {
                var e, s, u, a, l = [];
                if (Gt[r] == Gt.sd) return;
                e = Gt[r][_](1).split(Gt.sd), Gt[n](e, function(o) {
                    s = Gt[t][e[o]];
                    if (s[i][f] == 0) return;
                    Gt[n](s[i], function(e) {
                        Gt[H][vt][Gt[r]][i][d](s[i][e]), l[d](s[i][e])
                    })
                }), Gt[H][o][Gt[r]] && (Gt[n](Gt[H][o][Gt[r]], function(e) {
                    Gt[H][vt][Gt[r]][i][d](Gt[H][o][Gt[r]][e]), l[d](Gt[H][o][Gt[r]][e])
                }), Gt[H][o][Gt[r]] = []), l[f] > 0 && Gt[ut](l)
            },
            newDiv: function(e) {
                var t = document[k]("div");
                return t[Rt] = e, t
            },
            newInline: function(e) {
                var t;
                return t = document[k]("style"), t.type = ht, t[Rt] = e, t
            },
            newMeta: function(e, t) {
                var n = document[k]("meta");
                return n.name = e, n.content = t, n
            },
            newStyleSheet: function(e) {
                var t = document[k]("link");
                return t.rel = "stylesheet", t.type = ht, t[Qt] = e, t
            },
            initPlugin: function(t, n) {
                typeof n == b && Gt[X](t[e], n), t.init && t.init()
            },
            registerPlugin: function(e, t) {
                if (!t) return a;
                Gt[ft][e] = t, t._ = this, t.register && t.register()
            },
            init: function(t, r) {
                Gt.initConfig(t), Gt.initElements(), Gt.initEvents(), Gt.poll(), r && typeof r == b && (Gt[e][ft] = r), Gt[n](Gt[ft], function(t) {
                    Gt.initPlugin(Gt[ft][t], t in Gt[e][ft] ? Gt[e][ft][t] : c)
                }), Gt.isInit = D
            },
            initAPI: function() {
                var e, t, r = navigator.userAgent;
                Gt[q][ot] = 99, e = "other", r[L](/Firefox/) ? e = "firefox" : r[L](/Chrome/) ? e = "chrome" : r[L](/Safari/) && !r[L](/Chrome/) ? e = "safari" : r[L](/(OPR|Opera)/) ? e = "opera" : r[L](/MSIE ([0-9]+)/) ? (e = "ie", Gt[q][ot] = RegExp.$1) : r[L](/Trident\/.+rv:([0-9]+)/) && (e = "ie", Gt[q][ot] = RegExp.$1), Gt[q].browser = e, Gt[q][O] = "other", t = {
                    ios: "(iPad|iPhone|iPod)",
                    android: "Android",
                    mac: "Macintosh",
                    wp: "Windows Phone",
                    windows: "Windows NT"
                }, Gt[n](t, function(e) {
                    r[L](new RegExp(t[e], "g")) && (Gt[q][O] = e)
                });
                switch (Gt[q][O]) {
                    case "ios":
                        r[L](/([0-9_]+) like Mac OS X/), e = parseFloat(RegExp.$1[U]("_", ".")[U]("_", ""));
                        break;
                    case Wt:
                        r[L](/Android ([0-9\.]+)/), e = parseFloat(RegExp.$1);
                        break;
                    case "mac":
                        r[L](/Mac OS X ([0-9_]+)/), e = parseFloat(RegExp.$1[U]("_", ".")[U]("_", ""));
                        break;
                    case "wp":
                        r[L](/IEMobile\/([0-9\.]+)/), e = parseFloat(RegExp.$1);
                        break;
                    case "windows":
                        r[L](/Windows NT ([0-9\.]+)/), e = parseFloat(RegExp.$1);
                        break;
                    default:
                        e = 99
                }
                Gt[q].deviceVersion = e, Gt[q].isTouch = Gt[q][O] == "wp" ? navigator.msMaxTouchPoints > 0 : "ontouchstart" in window, Gt[q].isMobile = Gt[q][O] == "wp" || Gt[q][O] == Wt || Gt[q][O] == "ios"
            },
            initConfig: function(r) {
                var s = [],
                    o = [];
                typeof r == b && (r[t] && (Gt[e][t] = {}), Gt[X](Gt[e], r)), S in Gt[e] && h in Gt[e][S] && typeof Gt[e][S][h] != b && (Gt[e][S][h] = {
                    vertical: Gt[e][S][h],
                    horizontal: Gt[e][S][h]
                }), Gt[X](Gt[it][x][S], Gt[e][S]), Gt[it][x][I] = Gt[e][I], Gt[n](Gt[e][t], function(n) {
                    var r, s = {},
                        u, a;
                    Gt[X](s, Gt[e][t][n]), Qt in s || (s[Qt] = Gt[it][x][Qt]), Tt in s || (s[Tt] = Gt[it][x][Tt]), "range" in s && (u = s.range, u == "*" ? a = "" : u.charAt(0) == "-" ? a = "(max-width: " + parseInt(u[_](1)) + "px)" : u.charAt(u[f] - 1) == "-" ? a = Et + parseInt(u[_](0, u[f] - 1)) + "px)" : Gt[R](u, "-") != -1 && (u = u.split("-"), a = Et + parseInt(u[0]) + "px) and (max-width: " + parseInt(u[1]) + "px)"), s[Tt] = a), S in s && h in s[S] && typeof s[S][h] != b && (s[S][h] = {
                        vertical: s[S][h],
                        horizontal: s[S][h]
                    }), Gt[e][t][n] = s, r = {}, Gt[X](r, Gt[it].breakpoint), r[e] = Gt[e][t][n], r.test = function() {
                        return Gt[W](s[Tt])
                    }, r[i] = [], Gt[e].preload && r[e][Qt] && o[d](r[e][Qt]), Gt[t][n] = r, Gt.breakpointList[d](n)
                }), "*" in Gt[e][t] && (Gt[Kt] = D, Gt[e][t]["*"][P] = Gt[e][P]), Gt[n](Gt[e][V], function(t) {
                    Gt.bind(t, Gt[e][V][t])
                }), o[f] > 0 && window.location.protocol != "file:" && Gt[Q](function() {
                    var e, t = document[u](F)[0],
                        r = new XMLHttpRequest;
                    Gt[n](o, function(e) {
                        r.open("GET", o[e], a), r.send("")
                    })
                })
            },
            initElements: function() {
                var t = [];
                t[d](Gt[A]("mV", Gt.newMeta(P, dt), Z, 1));
                switch (Gt[e].reset) {
                    case "full":
                        t[d](Gt[A]("iR", Gt[E](Gt.css.r), Z, 2));
                        break;
                    case Lt:
                        t[d](Gt[A]("iN", Gt[E](Gt.css.n), Z, 2))
                }
                t[d](Gt[A]("iBM", Gt[E](Gt.css.bm), Z, 1)), t[d](Gt[A]("iG", Gt[E](".\\31 2u{width:100%}.\\31 1u{width:91.6666666667%}.\\31 0u{width:83.3333333333%}.\\39 u{width:75%}.\\38 u{width:66.6666666667%}.\\37 u{width:58.3333333333%}.\\36 u{width:50%}.\\35 u{width:41.6666666667%}.\\34 u{width:33.3333333333%}.\\33 u{width:25%}.\\32 u{width:16.6666666667%}.\\31 u{width:8.3333333333%}.\\-11u{margin-left:91.6666666667%}.\\-10u{margin-left:83.3333333333%}.\\-9u{margin-left:75%}.\\-8u{margin-left:66.6666666667%}.\\-7u{margin-left:58.3333333333%}.\\-6u{margin-left:50%}.\\-5u{margin-left:41.6666666667%}.\\-4u{margin-left:33.3333333333%}.\\-3u{margin-left:25%}.\\-2u{margin-left:16.6666666667%}.\\-1u{margin-left:8.3333333333%}"), F, 3)), t[d](Gt[A]("iGR", Gt[E](".row>*{float:left}.row:after{content:'';display:block;clear:both;height:0}.row:first-child>*{padding-top:0!important}.row.uniform>*>:first-child{margin-top:0}.row.uniform>*>:last-child{margin-bottom:0}"), F, 3)), Gt[ut](t)
            },
            initEvents: function() {
                var t;
                !Gt[e].pollOnce && !Gt[Kt] && (Gt.bind(xt, function() {
                    Gt.poll()
                }), Gt.bind(T, function() {
                    Gt.poll()
                })), Gt[q][O] == "ios" && Gt[Q](function() {
                    Gt.bind(T, function() {
                        var e = document[u]("input");
                        Gt[n](e, function(t) {
                            e[t][Pt] = e[t][yt], e[t][yt] = ""
                        }), window.setTimeout(function() {
                            Gt[n](e, function(t) {
                                e[t][yt] = e[t][Pt]
                            })
                        }, 100)
                    })
                }), window[Jt] && Gt.bind(xt, window[Jt]), window[Jt] = function() {
                    Gt.trigger(xt)
                }, window[J] && Gt.bind(T, window[J]), window[J] = function() {
                    Gt.trigger(T)
                }
            },
            initUtilityMethods: function() {
                document[Y] ? ! function(e, t) {
                    Gt[Q] = t()
                }(zt, function() {
                    function e(e) {
                        s = 1;
                        while (e = t.shift()) e()
                    }
                    var t = [],
                        n, r = document,
                        i = ct,
                        s = /^loaded|^c/.test(r[$t]);
                    return r[Y](i, n = function() {
                            r[bt](i, n), e()
                        }),
                        function(e) {
                            s ? e() : t[d](e)
                        }
                }) : ! function(e, t) {
                    Gt[Q] = t()
                }(zt, function(e) {
                    function t(e) {
                        p = 1;
                        while (e = n.shift()) e()
                    }
                    var n = [],
                        r, i = !1,
                        s = document,
                        o = s[st],
                        u = o.doScroll,
                        a = ct,
                        f = Y,
                        l = "onreadystatechange",
                        c = $t,
                        h = u ? /^loaded|^c/ : /^loaded|c/,
                        p = h.test(s[c]);
                    return s[f] && s[f](a, r = function() {
                        s[bt](a, r, i), t()
                    }, i), u && s.attachEvent(l, r = function() {
                        /^c/.test(s[c]) && (s.detachEvent(l, r), t())
                    }), e = u ? function(t) {
                        self != top ? p ? t() : n[d](t) : function() {
                            try {
                                o.doScroll("left")
                            } catch (n) {
                                return setTimeout(function() {
                                    e(t)
                                }, 50)
                            }
                            t()
                        }()
                    } : function(e) {
                        p ? e() : n[d](e)
                    }
                }), document[s] ? Gt[s] = function(e) {
                    return document[s](e)
                } : Gt[s] = function(e) {
                    var t = document;
                    return t[Ft] ? t[Ft](("." + e[U](" ", " ."))[U](/\.([0-9])/, Xt)) : []
                }, Array[It][R] ? Gt[R] = function(e, t) {
                    return e[R](t)
                } : Gt[R] = function(e, t) {
                    if (typeof e == "string") return e[R](t);
                    var n, r = t ? t : 0,
                        i;
                    if (!this) throw new TypeError;
                    i = this[f];
                    if (i === 0 || r >= i) return -1;
                    r < 0 && (r = i - Math.abs(r));
                    for (n = r; n < i; n++)
                        if (this[n] === e) return n;
                    return -1
                }, Array[$] ? Gt[$] = function(e) {
                    return Array[$](e)
                } : Gt[$] = function(e) {
                    return Object[It].toString.call(e) === "[object Array]"
                }, Object.keys ? Gt[n] = function(e, t) {
                    if (!e) return [];
                    var n, r = Object.keys(e);
                    for (n = 0; r[n]; n++) t(r[n])
                } : Gt[n] = function(e, t) {
                    if (!e) return [];
                    var n;
                    for (n in e) Object[It][rt].call(e, n) && t(n)
                }, window.matchMedia ? Gt[W] = function(e) {
                    return e == "" ? D : window.matchMedia(e).matches
                } : window.styleMedia || window[Tt] ? Gt[W] = function(e) {
                    if (e == "") return D;
                    var t = window.styleMedia || window[Tt];
                    return t.matchMedium(e || "all")
                } : window[G] ? Gt[W] = function(e) {
                    if (e == "") return D;
                    var t = document[k]("style"),
                        n = document[u]("script")[0],
                        r = c;
                    t.type = ht, t.id = "matchmediajs-test", n[l][p](t, n), r = G in window && window[G](t, c) || t.currentStyle;
                    var i = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                    return t.styleSheet ? t.styleSheet.cssText = i : t.textContent = i, r.width === "1px"
                } : (Gt[Dt] = D, Gt[W] = function(e) {
                    if (e == "") return D;
                    var t, n, r, i, s = {
                            "min-width": c,
                            "max-width": c
                        },
                        o = a;
                    n = e.split(/\s+and\s+/);
                    for (i in n) t = n[i], t.charAt(0) == "(" && (t = t[_](1, t[f] - 1), r = t.split(/:\s+/), r[f] == 2 && (s[r[0][U](/^\s+|\s+$/g, "")] = parseInt(r[1]), o = D));
                    if (!o) return a;
                    var u = document[st].clientWidth,
                        l = document[st].clientHeight;
                    return s[Ut] !== c && u < s[Ut] || s[qt] !== c && u > s[qt] || s[Bt] !== c && l < s[Bt] || s[jt] !== c && l > s[jt] ? a : D
                })
            },
            preInit: function() {
                var e = document[u]("script");
                Gt.me = e[e[f] - 1], Gt.initUtilityMethods(), Gt.initAPI(), Gt[nt](Mt, document[u](Mt)[0]), Gt[nt](F, document[u](F)[0]), Gt[Q](function() {
                    Gt[nt]("body", document[u]("body")[0])
                }), Gt[q][ot] >= 10 && Gt[lt](Gt[A]("msie-viewport-fix", Gt[E]("@-ms-viewport{width:device-width;}"), Z, 1))
            }
        };
    return Gt.preInit(), Gt[q][ot] < 9 && (Gt[Nt] = function(e) {}, Gt[E] = function(e) {
        var t;
        return t = document[k]("span"), t[Rt] = '&nbsp;<style type="text/css">' + e + "</style>", t
    }), Gt
}();
