import {EventEmitter} from "events";
import {superComplexWasm} from "./inline_worker.mjs";

globalThis.emitter = new EventEmitter();
let CB3Libs = superComplexWasm();


var jsonStableStringify = function () {
  var a = function (a, d) {
    d || (d = {}), "function" == typeof d && (d = {cmp: d});
    var e = d.space || "";
    "number" == typeof e && (e = Array(e + 1).join(" "));
    var f = "boolean" == typeof d.cycles ? d.cycles : !1, g = d.replacer || function (a, b) {
      return b
    }, h = d.cmp && function (a) {
      return function (b) {
        return function (c, d) {
          var e = {key: c, value: b[c]}, f = {key: d, value: b[d]};
          return a(e, f)
        }
      }
    }(d.cmp), i = [];
    return function j(a, d, k, l) {
      var m = e ? "\n" + new Array(l + 1).join(e) : "", n = e ? ": " : ":";
      if (k && k.toJSON && "function" == typeof k.toJSON && (k = k.toJSON()), k = g.call(a, d, k), void 0 !== k) {
        if ("object" != typeof k || null === k) return JSON.stringify(k);
        if (b(k)) {
          for (var o = [], p = 0; p < k.length; p++) {
            var q = j(k, p, k[p], l + 1) || JSON.stringify(null);
            o.push(m + e + q)
          }
          return "[" + o.join(",") + m + "]"
        }
        if (-1 !== i.indexOf(k)) {
          if (f) return JSON.stringify("__cycle__");
          throw new TypeError("Converting circular structure to JSON")
        }
        i.push(k);
        for (var r = c(k).sort(h && h(k)), o = [], p = 0; p < r.length; p++) {
          var d = r[p], s = j(k, d, k[d], l + 1);
          if (s) {
            var t = JSON.stringify(d) + n + s;
            o.push(m + e + t)
          }
        }
        return i.splice(i.indexOf(k), 1), "{" + o.join(",") + m + "}"
      }
    }({"": a}, "", a, 0)
  }, b = Array.isArray || function (a) {
    return "[object Array]" === {}.toString.call(a)
  }, c = Object.keys || function (a) {
    var b = Object.prototype.hasOwnProperty || function () {
      return !0
    }, c = [];
    for (var d in a) b.call(a, d) && c.push(d);
    return c
  };
  return a
}();

let CB3SharedTaskManager = {
  create: function (a) {
    var b = {};
    return globalThis.emitter.addListener("message", function (c) {
      if ("sharedTaskResult" === c.data.type) {
        var d = c.data.key;
        if (!b[d]) return;
        b[d].onResult(c.data.result), delete b[d]
      } else if ("sharedTaskPerform" === c.data.type) {
        var d = c.data.key;
        if (!b[d]) return;
        b[d].performTask().then(function (c) {
          a.postMessage({type: "sharedTaskPerformResult", key: d, result: c}), b[d].onResult(c), delete b[d]
        }).catch(function (a) {
          throw a
        })
      }
    }), {
      handleTask: function (c, d) {
        if (b[c]) throw new Error("task already exists");
        return new Promise(function (e) {
          b[c] = {onResult: e, performTask: d}, a.postMessage({type: "sharedTaskGet", key: c})
        })
      }
    }
  }
};

function a(b, c) {
  if ("object" == typeof b && null != b && "object" == typeof c && null != c) {
    var d = [0, 0];
    for (var e in b) d[0]++;
    for (var e in c) d[1]++;
    if (d[0] - d[1] !== 0) return !1;
    for (var e in b) if (!(e in c && a(b[e], c[e]))) return !1;
    for (var e in c) if (!(e in b && a(c[e], b[e]))) return !1;
    return !0
  }
  return b === c
}

function b(a) {
  for (var b = 0, c = 0; b < a.length; b++) c = Math.imul(31, c) + a.charCodeAt(b) | 0;
  return c
}

function c(a, b, c) {
  if (a.getNoiseBiomeAreaAtHeightType) {
    var d = c.tileScale;
    if (!c.showBiomes) return null;
    if (b.sizeX % d !== 0 || b.sizeZ % d !== 0) throw new Error("Invalid biome scale : " + d + " for size " + b.sizeX + "*" + b.sizeZ);
    var e = c.biomeHeight || "depth0",
      f = a.getNoiseBiomeAreaAtHeightType(4 * b.x, 4 * b.z, b.sizeX / d, b.sizeZ / d, 4 * d, e),
      g = c.showHeights && "depth0" === e ? a.getSurfaceArea(4 * b.x, 4 * b.z, b.sizeX / d, b.sizeZ / d, 4 * d, "oceanFloor", "enhancedNoCaves").buffer : void 0;
    return {biomes: f.buffer, heights: g, scale: d}
  }
  if (!c.showBiomes) return null;
  for (var h = a.getInts(4 * b.x, 4 * b.z, 4 * b.sizeX, 4 * b.sizeZ, 63), i = new ArrayBuffer(b.sizeX * b.sizeZ), j = new Uint8Array(i), k = 0, l = 0; l < 4 * b.sizeZ; l += 4) for (var m = 0; m < 4 * b.sizeX; m += 4) {
    var n = (l * b.sizeX * 4 + m, h[(l + 2) * b.sizeX * 4 + (m + 2)]);
    j[k] = n, k++
  }
  return {biomes: i, scale: 1}
}

function d(a, b, c) {
  if (!c.showBiomes) return null;
  var d = a.getChunkArea(b.x, b.z, b.sizeX, b.sizeZ);
  return {biomes: d.buffer, scale: 1}
}

function finder(c) {
  if (!a(i, c)) {
    var d = Object.assign({}, c.platform.cb3World, {seed: CB3Libs.Long.fromString(c.seed)});
    h && (h[CB3Libs.Dimension.Overworld] && h[CB3Libs.Dimension.Overworld].free(), h[CB3Libs.Dimension.Nether] && h[CB3Libs.Dimension.Nether].free(), h[CB3Libs.Dimension.End] && h[CB3Libs.Dimension.End].free(), h = null), g && (g.free(), g = null), h = {}, h[CB3Libs.Dimension.Overworld] = CB3Libs.createBiomeProvider(d), h[CB3Libs.Dimension.Nether] = new CB3Libs.BiomeProviderNether(d), h[CB3Libs.Dimension.End] = new CB3Libs.BiomeProviderEnd(d);
    var e = b(jsonStableStringify(d));
    g = CB3Libs.createPoiFinder(d, h, {
      sharedTask: function (a, b) {
        return j.handleTask(e + "--" + a, b)
      }
    }), i = c
  }
}

export function getResults(a) {
  var b = a.tile, f = a.params;
  finder({seed: f.seed, platform: f.platform});
  var i = {x: b.x, z: b.z, sizeX: b.xL, sizeZ: b.zL};
  return g(i, f.pois).then(function (a) {
    var b = null, e = h[f.dimension];
    return f.dimension === CB3Libs.Dimension.Overworld ? b = c(e, i, f) : f.dimension === CB3Libs.Dimension.Nether ? b = d(e, i, f) : f.dimension === CB3Libs.Dimension.End && (b = d(e, i, f)), {
      biomes: b ? b.biomes : null,
      biomeScale: b ? b.scale : 1,
      heights: b ? b.heights : null,
      biomeFilter: f.biomeFilter,
      poiResults: a
    }
  })
}

var g = null, h = null, i = null, j = CB3SharedTaskManager.create(globalThis);
globalThis.emitter.addListener("message", function (a) {
  if ("check" === a.data.type) Promise.resolve().then(function () {
    return getResults(a.data)
  }).then(function (a) {
    postMessage({type: "check", results: a})
  }, function (a) {
    postMessage({
      type: "check", results: {
        error: !0, errorStr: a.toString(), errorStack: "string" == typeof a.stack ? a.stack.slice(0, 150) : ""
      }
    })
  }); else if ("getSupportedPois" === a.data.type) {
    var b = a.data.platform.cb3World, c = CB3Libs.getSupportedPois(b);
    c.push("biomes"), postMessage({type: "getSupportedPois", supportedPois: c, platform: a.data.platform})
  }
})

export function getSupportedPPois(cb3world) {
  let c = CB3Libs.getSupportedPois(cb3world);
  return c;
}
