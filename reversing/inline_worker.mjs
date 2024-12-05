import {readFileSync} from "fs";

const wasmbin = readFileSync("./chunky.wasm");

export function superComplexWasm() {
  return function () {
    function a(d) {
      var e = c[d];
      if (void 0 !== e) return e.exports;
      var f = c[d] = {exports: {}};
      return b[d].call(f.exports, f, f.exports, a), f.exports
    }

    var b = {
      8926: function (a) {
        function b(a, b, c, d, e, f, g) {
          try {
            var h = a[f](g), i = h.value
          } catch (a) {
            return void c(a)
          }
          h.done ? b(i) : Promise.resolve(i).then(d, e)
        }

        a.exports = function (a) {
          return function () {
            var c = this, d = arguments;
            return new Promise(function (e, f) {
              function g(a) {
                b(i, e, f, g, h, "next", a)
              }

              function h(a) {
                b(i, e, f, g, h, "throw", a)
              }

              var i = a.apply(c, d);
              g(void 0)
            })
          }
        }
      }, 3913: function (a) {
        function b(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
          }
        }

        a.exports = function (a, c, d) {
          return c && b(a.prototype, c), d && b(a, d), a
        }
      }, 5318: function (a) {
        a.exports = function (a) {
          return a && a.__esModule ? a : {"default": a}
        }
      }, 7316: function (a) {
        a.exports = function (a, b) {
          if (null == a) return {};
          var c, d, e = {}, f = Object.keys(a);
          for (d = 0; d < f.length; d++) c = f[d], b.indexOf(c) >= 0 || (e[c] = a[c]);
          return e
        }
      }, 1553: function (a) {
        var b = function (a) {
          "use strict";

          function b(a, b, e, f) {
            var g = b && b.prototype instanceof d ? b : d, h = Object.create(g.prototype), j = new l(f || []);
            return h._invoke = function (a, b, d) {
              var e = v;
              return function (f, g) {
                if (e === x) throw new Error("Generator is already running");
                if (e === y) {
                  if ("throw" === f) throw g;
                  return n()
                }
                for (d.method = f, d.arg = g; ;) {
                  var h = d.delegate;
                  if (h) {
                    var j = i(h, d);
                    if (j) {
                      if (j === z) continue;
                      return j
                    }
                  }
                  if ("next" === d.method) d.sent = d._sent = d.arg; else if ("throw" === d.method) {
                    if (e === v) throw e = y, d.arg;
                    d.dispatchException(d.arg)
                  } else "return" === d.method && d.abrupt("return", d.arg);
                  e = x;
                  var k = c(a, b, d);
                  if ("normal" === k.type) {
                    if (e = d.done ? y : w, k.arg === z) continue;
                    return {value: k.arg, done: d.done}
                  }
                  "throw" === k.type && (e = y, d.method = "throw", d.arg = k.arg)
                }
              }
            }(a, e, j), h
          }

          function c(a, b, c) {
            try {
              return {type: "normal", arg: a.call(b, c)}
            } catch (a) {
              return {type: "throw", arg: a}
            }
          }

          function d() {
          }

          function e() {
          }

          function f() {
          }

          function g(a) {
            ["next", "throw", "return"].forEach(function (b) {
              a[b] = function (a) {
                return this._invoke(b, a)
              }
            })
          }

          function h(a, b) {
            function d(e, f, g, h) {
              var i = c(a[e], a, f);
              if ("throw" !== i.type) {
                var j = i.arg, k = j.value;
                return k && "object" == typeof k && q.call(k, "__await") ? b.resolve(k.__await).then(function (a) {
                  d("next", a, g, h)
                }, function (a) {
                  d("throw", a, g, h)
                }) : b.resolve(k).then(function (a) {
                  j.value = a, g(j)
                }, function (a) {
                  return d("throw", a, g, h)
                })
              }
              h(i.arg)
            }

            var e;
            this._invoke = function (a, c) {
              function f() {
                return new b(function (b, e) {
                  d(a, c, b, e)
                })
              }

              return e = e ? e.then(f, f) : f()
            }
          }

          function i(a, b) {
            var d = a.iterator[b.method];
            if (d === o) {
              if (b.delegate = null, "throw" === b.method) {
                if (a.iterator.return && (b.method = "return", b.arg = o, i(a, b), "throw" === b.method)) return z;
                b.method = "throw", b.arg = new TypeError("The iterator does not provide a 'throw' method")
              }
              return z
            }
            var e = c(d, a.iterator, b.arg);
            if ("throw" === e.type) return b.method = "throw", b.arg = e.arg, b.delegate = null, z;
            var f = e.arg;
            return f ? f.done ? (b[a.resultName] = f.value, b.next = a.nextLoc, "return" !== b.method && (b.method = "next", b.arg = o), b.delegate = null, z) : f : (b.method = "throw", b.arg = new TypeError("iterator result is not an object"), b.delegate = null, z)
          }

          function j(a) {
            var b = {tryLoc: a[0]};
            1 in a && (b.catchLoc = a[1]), 2 in a && (b.finallyLoc = a[2], b.afterLoc = a[3]), this.tryEntries.push(b)
          }

          function k(a) {
            var b = a.completion || {};
            b.type = "normal", delete b.arg, a.completion = b
          }

          function l(a) {
            this.tryEntries = [{tryLoc: "root"}], a.forEach(j, this), this.reset(!0)
          }

          function m(a) {
            if (a) {
              var b = a[s];
              if (b) return b.call(a);
              if ("function" == typeof a.next) return a;
              if (!isNaN(a.length)) {
                var c = -1, d = function e() {
                  for (; ++c < a.length;) if (q.call(a, c)) return e.value = a[c], e.done = !1, e;
                  return e.value = o, e.done = !0, e
                };
                return d.next = d
              }
            }
            return {next: n}
          }

          function n() {
            return {value: o, done: !0}
          }

          var o, p = Object.prototype, q = p.hasOwnProperty, r = "function" == typeof Symbol ? Symbol : {},
            s = r.iterator || "@@iterator", t = r.asyncIterator || "@@asyncIterator",
            u = r.toStringTag || "@@toStringTag";
          a.wrap = b;
          var v = "suspendedStart", w = "suspendedYield", x = "executing", y = "completed", z = {}, A = {};
          A[s] = function () {
            return this
          };
          var B = Object.getPrototypeOf, C = B && B(B(m([])));
          C && C !== p && q.call(C, s) && (A = C);
          var D = f.prototype = d.prototype = Object.create(A);
          return e.prototype = D.constructor = f, f.constructor = e, f[u] = e.displayName = "GeneratorFunction", a.isGeneratorFunction = function (a) {
            var b = "function" == typeof a && a.constructor;
            return !!b && (b === e || "GeneratorFunction" === (b.displayName || b.name))
          }, a.mark = function (a) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(a, f) : (a.__proto__ = f, u in a || (a[u] = "GeneratorFunction")), a.prototype = Object.create(D), a
          }, a.awrap = function (a) {
            return {__await: a}
          }, g(h.prototype), h.prototype[t] = function () {
            return this
          }, a.AsyncIterator = h, a.async = function (c, d, e, f, g) {
            void 0 === g && (g = Promise);
            var i = new h(b(c, d, e, f), g);
            return a.isGeneratorFunction(d) ? i : i.next().then(function (a) {
              return a.done ? a.value : i.next()
            })
          }, g(D), D[u] = "Generator", D[s] = function () {
            return this
          }, D.toString = function () {
            return "[object Generator]"
          }, a.keys = function (a) {
            var b = [];
            for (var c in a) b.push(c);
            return b.reverse(), function d() {
              for (; b.length;) {
                var c = b.pop();
                if (c in a) return d.value = c, d.done = !1, d
              }
              return d.done = !0, d
            }
          }, a.values = m, l.prototype = {
            constructor: l, reset: function (a) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = o, this.done = !1, this.delegate = null, this.method = "next", this.arg = o, this.tryEntries.forEach(k), !a) for (var b in this) "t" === b.charAt(0) && q.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = o)
            }, stop: function () {
              this.done = !0;
              var a = this.tryEntries[0].completion;
              if ("throw" === a.type) throw a.arg;
              return this.rval
            }, dispatchException: function (a) {
              function b(b, d) {
                return f.type = "throw", f.arg = a, c.next = b, d && (c.method = "next", c.arg = o), !!d
              }

              if (this.done) throw a;
              for (var c = this, d = this.tryEntries.length - 1; d >= 0; --d) {
                var e = this.tryEntries[d], f = e.completion;
                if ("root" === e.tryLoc) return b("end");
                if (e.tryLoc <= this.prev) {
                  var g = q.call(e, "catchLoc"), h = q.call(e, "finallyLoc");
                  if (g && h) {
                    if (this.prev < e.catchLoc) return b(e.catchLoc, !0);
                    if (this.prev < e.finallyLoc) return b(e.finallyLoc)
                  } else if (g) {
                    if (this.prev < e.catchLoc) return b(e.catchLoc, !0)
                  } else {
                    if (!h) throw new Error("try statement without catch or finally");
                    if (this.prev < e.finallyLoc) return b(e.finallyLoc)
                  }
                }
              }
            }, abrupt: function (a, b) {
              for (var c = this.tryEntries.length - 1; c >= 0; --c) {
                var d = this.tryEntries[c];
                if (d.tryLoc <= this.prev && q.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                  var e = d;
                  break
                }
              }
              e && ("break" === a || "continue" === a) && e.tryLoc <= b && b <= e.finallyLoc && (e = null);
              var f = e ? e.completion : {};
              return f.type = a, f.arg = b, e ? (this.method = "next", this.next = e.finallyLoc, z) : this.complete(f)
            }, complete: function (a, b) {
              if ("throw" === a.type) throw a.arg;
              return "break" === a.type || "continue" === a.type ? this.next = a.arg : "return" === a.type ? (this.rval = this.arg = a.arg, this.method = "return", this.next = "end") : "normal" === a.type && b && (this.next = b), z
            }, finish: function (a) {
              for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                var c = this.tryEntries[b];
                if (c.finallyLoc === a) return this.complete(c.completion, c.afterLoc), k(c), z
              }
            }, "catch": function (a) {
              for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                var c = this.tryEntries[b];
                if (c.tryLoc === a) {
                  var d = c.completion;
                  if ("throw" === d.type) {
                    var e = d.arg;
                    k(c)
                  }
                  return e
                }
              }
              throw new Error("illegal catch attempt")
            }, delegateYield: function (a, b, c) {
              return this.delegate = {
                iterator: m(a),
                resultName: b,
                nextLoc: c
              }, "next" === this.method && (this.arg = o), z
            }
          }, a
        }(a.exports);
        try {
          regeneratorRuntime = b
        } catch (a) {
          Function("r", "regeneratorRuntime = r")(b)
        }
      }, 7757: function (a, b, c) {
        a.exports = c(1553)
      }, 3668: function (a) {
        a.exports = function (a) {
          return atob(a)
        }
      }, 6452: function (a, b, c) {
        "use strict";
        var d, e, f, g, h, i;
        c.r(b), c.d(b, {
          BedrockVersion: function () {
            return f
          }, Dimension: function () {
            return g
          }, DungeonType: function () {
            return h
          }, Edition: function () {
            return d
          }, JavaVersion: function () {
            return e
          }, POI: function () {
            return i
          }
        }), function (a) {
          a.Java = "Java", a.Bedrock = "Bedrock"
        }(d || (d = {})), function (a) {
          a[a.V1_7 = 10070] = "V1_7", a[a.V1_8 = 10080] = "V1_8", a[a.V1_9 = 10090] = "V1_9", a[a.V1_10 = 10100] = "V1_10", a[a.V1_11 = 10110] = "V1_11", a[a.V1_12 = 10120] = "V1_12", a[a.V1_13 = 10130] = "V1_13", a[a.V1_14 = 10140] = "V1_14", a[a.V1_15 = 10150] = "V1_15", a[a.V1_16 = 10160] = "V1_16", a[a.V1_17 = 10170] = "V1_17", a[a.V1_18 = 10180] = "V1_18", a[a.V1_19 = 10190] = "V1_19", a[a.V1_19_3 = 10193] = "V1_19_3", a[a.V1_20 = 10200] = "V1_20", a[a.V1_21 = 10210] = "V1_21", a[a.V1_21_2 = 10212] = "V1_21_2", a[a.V1_21_4 = 10214] = "V1_21_4", a[a.V1_22 = 10220] = "V1_22"
        }(e || (e = {})), function (a) {
          a[a.V1_14 = 10140] = "V1_14", a[a.V1_16 = 10160] = "V1_16", a[a.V1_17 = 10170] = "V1_17", a[a.V1_18 = 10180] = "V1_18", a[a.V1_19 = 10190] = "V1_19", a[a.V1_20 = 10200] = "V1_20", a[a.V_1_20_60 = 10206] = "V_1_20_60", a[a.V1_21 = 10210] = "V1_21", a[a.V1_21_40 = 10214] = "V1_21_40", a[a.V1_21_50 = 10215] = "V1_21_50", a[a.V1_22 = 10220] = "V1_22"
        }(f || (f = {})), function (a) {
          a.Overworld = "overworld", a.Nether = "nether", a.End = "end"
        }(g || (g = {})), function (a) {
          a[a.ZOMBIE = 0] = "ZOMBIE", a[a.SPIDER = 1] = "SPIDER", a[a.SKELETON = 2] = "SKELETON"
        }(h || (h = {})), function (a) {
          a.BastionRemnant = "bastionRemnant", a.BuriedTreasure = "buriedTreasure", a.Dungeon = "dungeon", a.EndCity = "endCity", a.NetherFortress = "netherFortress", a.SlimeChunk = "slimeChunk", a.Stronghold = "stronghold", a.Village = "village", a.Mineshaft = "mineshaft", a.WoodlandMansion = "woodlandMansion", a.PillagerOutpost = "pillagerOutpost", a.OceanRuin = "oceanRuin", a.OceanMonument = "oceanMonument", a.Shipwreck = "shipwreck", a.DesertTemple = "desertTemple", a.JungleTemple = "jungleTemple", a.WitchHut = "witchHut", a.Igloo = "igloo", a.RuinedPortalOverworld = "ruinedPortalOverworld", a.RuinedPortalNether = "ruinedPortalNether", a.Spawn = "spawn", a.Fossil = "fossil", a.Ravine = "ravine", a.EndGateway = "endGateway", a.AmethystGeode = "amethystGeode", a.AncientCity = "ancientCity", a.ItemOverworld = "itemOverworld", a.OreVein = "oreVein", a.Cave = "cave", a.DesertWell = "desertWell", a.TrailRuin = "trailRuin", a.TrialChamber = "trialChamber", a.LavaPool = "lavaPool"
        }(i || (i = {}))
      }, 3523: function (a, b, c) {
        "use strict";
        b.m = void 0;
        var d = c(3121), e = c(3421), f = function () {
          function a(a, b) {
            this.gen = void 0;
            var c = e.toRustWorld(a);
            this.gen = new d.BedrockFeatureSeedGenerator(c, b)
          }

          var b = a.prototype;
          return b.getSeedForChunk = function (a, b) {
            return this.gen.get_seed_for_chunk(a, b)
          }, b.free = function () {
            this.gen.free()
          }, a
        }();
        b.m = f
      }, 7252: function (a, b, c) {
        "use strict";
        b.__esModule = !0, b.BiomeProviderEndRust = void 0;
        var d = c(3121), e = c(3421), f = function () {
          function a(a) {
            this.provider = void 0;
            var b = e.toRustWorld(a);
            this.provider = new d.BiomeProviderEnd(b)
          }

          var b = a.prototype;
          return b.getHeightValue = function (a, b, c, d) {
            return this.provider.get_height_value(a, b, c, d)
          }, b.getChunkBiome = function (a, b) {
            return this.provider.get_chunk_biome(a, b)
          }, b.getNoiseBiome = function (a, b) {
            return this.provider.get_noise_biome(a, b)
          }, b.getChunkArea = function (a, b, c, d) {
            return this.provider.get_chunk_area(a, b, c, d)
          }, b.free = function () {
            this.provider.free()
          }, a
        }();
        b.BiomeProviderEndRust = f
      }, 707: function (a, b, c) {
        "use strict";
        b.z = void 0;
        var d = c(3121), e = c(3421), f = function () {
          function a(a) {
            this.provider = void 0;
            var b = e.toRustWorld(a);
            this.provider = new d.BiomeProviderNether(b)
          }

          var b = a.prototype;
          return b.getChunkBiome = function (a, b) {
            return this.provider.get_chunk_biome(a, b)
          }, b.getNoiseBiome = function (a, b) {
            return this.provider.get_noise_biome(a, b)
          }, b.getChunkArea = function (a, b, c, d) {
            return this.provider.get_chunk_area(a, b, c, d)
          }, b.free = function () {
            this.provider.free()
          }, a
        }();
        b.z = f
      }, 194: function (a, b, c) {
        "use strict";
        b.__esModule = !0, b.BiomeProviderRust = void 0;
        var d = c(3121), e = c(3421), f = function () {
          function a(a) {
            this.provider = void 0;
            var b = e.toRustWorld(a);
            this.provider = new d.BiomeProvider(b)
          }

          var b = a.prototype;
          return b.getInts = function (a, b, c, d) {
            return this.provider.get_ints0(a, b, c, d)
          }, b.getInts1 = function (a, b, c, d) {
            return this.provider.get_ints1(a, b, c, d)
          }, b.free = function () {
            this.provider.free()
          }, a
        }();
        b.BiomeProviderRust = f
      }, 5924: function (a, b, c) {
        "use strict";
        b.r = void 0, c(9826), c(1539);
        var d = c(3121), e = c(3421), f = function () {
          function a(a) {
            this.rustFinder = void 0, this.rustFinder = new d.CaveFinder(e.toRustWorld(a))
          }

          var b = a.prototype;
          return b.find = function (a) {
            return this.rustFinder.find(a.x, a.z, a.sizeX, a.sizeZ)
          }, b.free = function () {
            this.rustFinder.free()
          }, a
        }();
        b.r = f
      }, 8293: function (a, b, c) {
        "use strict";
        b.__esModule = !0, b.ChunkGeneratorEndRust = void 0;
        var d = c(3121), e = c(3421), f = function () {
          function a(a) {
            this.chunkGen = void 0;
            var b = e.toRustWorld(a);
            this.chunkGen = new d.ChunkGeneratorEnd(b)
          }

          var b = a.prototype;
          return b.buildHeightmap = function (a, b) {
            return this.chunkGen.build_height_map(a, b)
          }, b.free = function () {
            this.chunkGen.free()
          }, a
        }();
        b.ChunkGeneratorEndRust = f
      }, 5951: function (a, b, c) {
        "use strict";
        b.__esModule = !0, b.DungeonFinderRust = void 0, c(9826), c(1539), c(1249);
        var d = c(6452), e = c(3121), f = c(3421), g = function () {
          function a(a) {
            this.rustFinder = void 0, this.rustFinder = new e.DungeonFinder(f.toRustWorld(a))
          }

          var b = a.prototype;
          return b.find = function (a) {
            return this.rustFinder.find(a.x, a.z, a.sizeX, a.sizeZ).map(function (a) {
              return [a.x, a.y, a.z, d.DungeonType[a.dungeon_type]]
            })
          }, b.free = function () {
            this.rustFinder.free()
          }, a
        }();
        b.DungeonFinderRust = g
      }, 5586: function (a, b, c) {
        "use strict";
        b.o = void 0, c(9826), c(1539);
        var d = c(3121), e = c(3421), f = function () {
          function a(a) {
            this.rustFinder = void 0, this.rustFinder = new d.LavaFloodedCaveFinder(e.toRustWorld(a))
          }

          var b = a.prototype;
          return b.find = function (a) {
            return this.rustFinder.find(a.x, a.z, a.sizeX, a.sizeZ)
          }, b.free = function () {
            this.rustFinder.free()
          }, a
        }();
        b.o = f
      }, 1900: function (a, b, c) {
        "use strict";
        b.d = void 0;
        var d = c(3121), e = c(3421), f = function () {
          function a(a) {
            this.helper = void 0, this.helper = new d.LavaLakeHelper(e.toRustWorld(a))
          }

          var b = a.prototype;
          return b.findPositionsBedrock = function (a, b, c, d) {
            return this.helper.find_positions_bedrock(a, b, c, d)
          }, b.testFeaturePositionsJava = function (a) {
            return this.helper.test_feature_positions_java(a)
          }, b.free = function () {
            this.helper.free()
          }, a
        }();
        b.d = f
      }, 8781: function (a, b, c) {
        "use strict";
        b.__esModule = !0, b.MultiNoiseBiomeSourceRust = void 0, b.isStone = function (a) {
          return a === d.Block.Stone || a === d.Block.DefaultCaveStone
        }, c(1038), c(8783);
        var d = c(3121);
        b.Block = d.Block;
        var e = c(3421), f = {
          caveDepth: d.HeightType.CAVE_DEPTH,
          worldSurface: d.HeightType.WORLD_SURFACE,
          oceanFloor: d.HeightType.OCEAN_FLOOR,
          bottom: d.HeightType.BOTTOM,
          depth0: d.HeightType.DEPTH0
        }, g = {
          fastApproximate: d.SurfaceCheckType.FAST_APPROXIMATE,
          enhanced: d.SurfaceCheckType.ENHANCED,
          enhancedNoCaves: d.SurfaceCheckType.ENHANCED_NOCAVES,
          topmostAccurate: d.SurfaceCheckType.TOPMOST_ACCURATE
        }, h = function () {
          function a(a) {
            this.provider = void 0;
            var b = e.toRustWorld(a);
            this.provider = new d.MultiNoiseBiomeSource(b)
          }

          var b = a.prototype;
          return b.getNoiseBiome = function (a, b, c) {
            return this.provider.get_noise_biome(a, b, c)
          }, b.getNoiseBiomeBlock = function (a, b, c) {
            return this.provider.get_noise_biome_block(a, b, c)
          }, b.getNoiseBiomeAtHeightType = function (a, b, c) {
            return this.provider.get_noise_biome_at_height_type(a, b, f[c])
          }, b.getSurface = function (a, b, c, d) {
            return this.provider.get_surface(a, b, f[c], g[d])
          }, b.getSurfaceBlock = function (a, b, c, d) {
            return this.provider.get_surface_block(a, b, f[c], g[d])
          }, b.getSurfaceArea = function (a, b, c, d, e, h, i) {
            return this.provider.get_surface_area(a, b, c, d, e, f[h], g[i])
          }, b.getNoiseBiomeArea = function (a, b, c, d, e, f, g) {
            return this.provider.get_noise_biome_area(a, b, c, d, e, f, g)
          }, b.getNoiseBiomeAreaAtHeightType = function (a, b, c, d, e, g) {
            return this.provider.get_noise_biome_area_at_height_type(a, b, c, d, e, f[g])
          }, b.findSpawnPosition = function () {
            return Array.from(this.provider.find_spawn_position())
          }, b.getPreliminarySurfaceLevel = function (a, b) {
            return Math.min(312, Math.max(-64, this.provider.get_preliminary_surface_level(a, b)))
          }, b.getNoiseBlock = function (a, b, c, d) {
            return this.provider.get_noise_block(a, b, c, d)
          }, b.free = function () {
            this.provider.free()
          }, a
        }();
        b.MultiNoiseBiomeSourceRust = h
      }, 5113: function (a, b, c) {
        "use strict";
        b.__esModule = !0, b.OreVeinFinderRust = void 0, c(9826), c(1539), c(1249);
        var d, e = c(3121), f = c(3421);
        !function (a) {
          a.IRON = "IRON", a.COPPER = "COPPER"
        }(d || (d = {}));
        var g = function () {
          function a(a) {
            this.rustFinder = void 0, this.rustFinder = new e.OreVeinFinder(f.toRustWorld(a))
          }

          var b = a.prototype;
          return b.find = function (a) {
            return this.rustFinder.find(a.x, a.z, a.sizeX, a.sizeZ).map(function (a) {
              return {
                min: a.min,
                max: a.max,
                reference: a.reference,
                count: a.count,
                type: a.vein_type === d.COPPER ? "copper" : "iron",
                oreCount: a.ore_count
              }
            })
          }, b.free = function () {
            this.rustFinder.free()
          }, a
        }();
        b.OreVeinFinderRust = g
      }, 3421: function (a, b, c) {
        "use strict";

        function d(a) {
          if ("function" != typeof WeakMap) return null;
          var b = new WeakMap, c = new WeakMap;
          return (d = function (a) {
            return a ? c : b
          })(a)
        }

        c(6992), c(1539), c(8783), c(4129), c(3948), c(5003), b.__esModule = !0, b.toRustWorld = function (a) {
          return new f.World(a.seed.low, a.seed.high, a.edition === e.Edition.Java ? f.Edition.Java : f.Edition.Bedrock, a.edition === e.Edition.Java ? a.javaVersion : a.bedrockVersion, a.config.biomeSize, !!a.config.largeBiomes)
        };
        var e = c(6452), f = function (a, b) {
          if (a && a.__esModule) return a;
          if (null === a || "object" != typeof a && "function" != typeof a) return {"default": a};
          var c = d(b);
          if (c && c.has(a)) return c.get(a);
          var e = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var g in a) if ("default" !== g && Object.prototype.hasOwnProperty.call(a, g)) {
            var h = f ? Object.getOwnPropertyDescriptor(a, g) : null;
            h && (h.get || h.set) ? Object.defineProperty(e, g, h) : e[g] = a[g]
          }
          return e.default = a, c && c.set(a, e), e
        }(c(3121))
      }, 3503: function (a, b, c) {
        "use strict";
        var d = c(5318);
        b.__esModule = !0, b.XoroshiroRandomRust = void 0, c(1038), c(8783);
        var e = c(3121), f = d(c(3720)), g = function () {
          function a(a) {
            this.rng = void 0, this.rng = a
          }

          a.fromLoHi = function (b, c) {
            return new a(new e.XoroshiroRandom(b.low, b.high, c.low, c.high))
          }, a.fromSeed = function (b) {
            return new a(e.XoroshiroRandom.new_from_seed(b.low, b.high))
          };
          var b = a.prototype;
          return b.setSeed = function (a) {
            this.rng.set_seed(a.low, a.high)
          }, b.nextInt = function (a) {
            return this.rng.next_int(a)
          }, b.nextLong = function () {
            var a = Array.from(this.rng.next_long());
            return f.default.fromBits(a[0], a[1])
          }, b.nextFloat = function () {
            return this.rng.next_float()
          }, b.nextDouble = function () {
            return this.rng.next_double()
          }, b.skipNextN = function (a) {
            return this.rng.skip_next_n(a)
          }, b.free = function () {
            this.rng.free()
          }, a
        }();
        b.XoroshiroRandomRust = g
      }, 9017: function (a, b, c) {
        "use strict";
        var d = c(5318);
        b.__esModule = !0, b.XoroshiroRandomWorldgenRust = void 0, c(1038), c(8783);
        var e = c(3121), f = d(c(3720)), g = function () {
          function a(a) {
            this.rng = void 0, this.rng = a
          }

          a.fromLoHi = function (b, c) {
            return new a(new e.XoroshiroRandomWorldgen(b.low, b.high, c.low, c.high))
          }, a.fromSeed = function (b) {
            return new a(e.XoroshiroRandomWorldgen.new_from_seed(b.low, b.high))
          };
          var b = a.prototype;
          return b.setSeed = function (a) {
            this.rng.set_seed(a.low, a.high)
          }, b.nextInt = function (a) {
            return this.rng.next_int(a)
          }, b.nextLong = function () {
            var a = Array.from(this.rng.next_long());
            return f.default.fromBits(a[0], a[1])
          }, b.nextFloat = function () {
            return this.rng.next_float()
          }, b.nextDouble = function () {
            return this.rng.next_double()
          }, b.skipNextN = function (a) {
            return this.rng.skip_next_n(a)
          }, b.free = function () {
            this.rng.free()
          }, a
        }();
        b.XoroshiroRandomWorldgenRust = g
      }, 855: function (a, b, c) {
        "use strict";
        b.P2 = b.c8 = b.cj = b.T5 = b.LX = b.tp = b.XC = b.gO = b.GR = b._w = void 0;
        var d = c(194);
        b.GR = d.BiomeProviderRust;
        var e = c(7252);
        b._w = e.BiomeProviderEndRust;
        var f = c(5951);
        b.tp = f.DungeonFinderRust;
        var g = c(8293);
        b.XC = g.ChunkGeneratorEndRust, c(3503).XoroshiroRandomRust;
        var h = c(9017);
        b.c8 = h.XoroshiroRandomWorldgenRust;
        var i = c(5113);
        b.cj = i.OreVeinFinderRust, i.Cluster;
        var j = c(8781);
        b.T5 = j.MultiNoiseBiomeSourceRust, b.LX = j.HeightType, b.gO = j.Block, b.P2 = j.isStone, j.SurfaceCheckType
      }, 3121: function (a, b, c) {
        "use strict";

        function d() {
          return null !== s && 0 !== s.byteLength || (s = new Uint8Array(p.memory.buffer)), s
        }

        function e(a, b) {
          return a >>>= 0, r.decode(d().subarray(a, a + b))
        }

        function f(a) {
          u === t.length && t.push(t.length + 1);
          var b = u;
          return u = t[b], t[b] = a, b
        }

        function g(a) {
          return t[a]
        }

        function h(a) {
          var b = g(a);
          return function (a) {
            132 > a || (t[a] = u, u = a)
          }(a), b
        }

        function i(a, b, c) {
          if (void 0 === c) {
            var e = w.encode(a), f = b(e.length, 1) >>> 0;
            return d().subarray(f, f + e.length).set(e), v = e.length, f
          }
          for (var g = a.length, h = b(g, 1) >>> 0, i = d(), j = 0; g > j; j++) {
            var k = a.charCodeAt(j);
            if (k > 127) break;
            i[h + j] = k
          }
          if (j !== g) {
            0 !== j && (a = a.slice(j)), h = c(h, g, g = j + 3 * a.length, 1) >>> 0;
            var l = d().subarray(h + j, h + g);
            h = c(h, g, j += x(a, l).written, 1) >>> 0
          }
          return v = j, h
        }

        function j() {
          return null !== y && 0 !== y.byteLength || (y = new Int32Array(p.memory.buffer)), y
        }

        function k(a, b) {
          if (!(a instanceof b)) throw new Error("expected instance of " + b.name);
          return a.ptr
        }

        function l(a, b) {
          return a >>>= 0, j().subarray(a / 4, a / 4 + b)
        }

        function m(a) {
          return null == a
        }

        function n(a, b) {
          return a >>>= 0, d().subarray(a / 1, a / 1 + b)
        }

        var o = c(5318)(c(3913));
        c(6992), c(1539), c(2472), c(2990), c(8927), c(3105), c(5035), c(4345), c(7174), c(2846), c(4731), c(7209), c(6319), c(8867), c(7789), c(3739), c(9368), c(4483), c(2056), c(3462), c(678), c(7462), c(3824), c(5021), c(2974), c(5016), c(3290), c(7042), c(5125), c(8309), c(3371), c(9826);
        var p, q = {};
        q.__wbindgen_placeholder__ = a.exports;
        var r = new TextDecoder("utf-8", {ignoreBOM: !0, fatal: !0});
        r.decode();
        var s = null, t = new Array(128).fill(void 0);
        t.push(void 0, null, !0, !1);
        var u = t.length, v = 0, w = new TextEncoder("utf-8"), x = "function" == typeof w.encodeInto ? function (a, b) {
          return w.encodeInto(a, b)
        } : function (a, b) {
          var c = w.encode(a);
          return b.set(c), {read: a.length, written: c.length}
        }, y = null;
        a.exports.Edition = Object.freeze({
          Java: 1,
          1: "Java",
          Bedrock: 2,
          2: "Bedrock"
        }), a.exports.Block = Object.freeze({
          Unset: 0,
          0: "Unset",
          DefaultCaveStone: 254,
          254: "DefaultCaveStone",
          Stone: 1,
          1: "Stone",
          Water: 9,
          9: "Water",
          Lava: 11,
          11: "Lava",
          Chest: 54,
          54: "Chest",
          Air: 255,
          255: "Air"
        }), a.exports.SurfaceCheckType = Object.freeze({
          FAST_APPROXIMATE: 1,
          1: "FAST_APPROXIMATE",
          ENHANCED_NOCAVES: 2,
          2: "ENHANCED_NOCAVES",
          ENHANCED: 3,
          3: "ENHANCED",
          TOPMOST_ACCURATE: 4,
          4: "TOPMOST_ACCURATE"
        }), a.exports.HeightType = Object.freeze({
          WORLD_SURFACE: 1,
          1: "WORLD_SURFACE",
          OCEAN_FLOOR: 2,
          2: "OCEAN_FLOOR",
          CAVE_DEPTH: 3,
          3: "CAVE_DEPTH",
          BOTTOM: 4,
          4: "BOTTOM",
          DEPTH0: 5,
          5: "DEPTH0"
        }), a.exports.Version = Object.freeze({
          V1_7: 10070,
          10070: "V1_7",
          V1_8: 10080,
          10080: "V1_8",
          V1_9: 10090,
          10090: "V1_9",
          V1_10: 10100,
          10100: "V1_10",
          V1_11: 10110,
          10110: "V1_11",
          V1_12: 10120,
          10120: "V1_12",
          V1_13: 10130,
          10130: "V1_13",
          V1_14: 10140,
          10140: "V1_14",
          V1_15: 10150,
          10150: "V1_15",
          V1_16: 10160,
          10160: "V1_16",
          V1_17: 10170,
          10170: "V1_17",
          V1_18: 10180,
          10180: "V1_18",
          V1_19: 10190,
          10190: "V1_19",
          V1_19_3: 10193,
          10193: "V1_19_3",
          V1_20: 10200,
          10200: "V1_20",
          V1_20_2: 10202,
          10202: "V1_20_2",
          V1_20_30: 10203,
          10203: "V1_20_30",
          V_1_20_60: 10206,
          10206: "V_1_20_60",
          V1_21: 10210,
          10210: "V1_21",
          V1_21_2: 10212,
          10212: "V1_21_2",
          V1_21_40_V1_21_4: 10214,
          10214: "V1_21_40_V1_21_4",
          V1_21_50: 10215,
          10215: "V1_21_50"
        });
        var z = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_bedrockfeatureseedgenerator_free(a >>> 0)
        }), A = function () {
          function a(a, b) {
            k(a, W);
            var c = a.__destroy_into_raw(), d = i(b, p.__wbindgen_malloc, p.__wbindgen_realloc), e = v,
              f = p.bedrockfeatureseedgenerator_new(c, d, e);
            return this.__wbg_ptr = f >>> 0, this
          }

          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, z.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_bedrockfeatureseedgenerator_free(a)
          }, b.get_seed_for_chunk = function (a, b) {
            return p.bedrockfeatureseedgenerator_get_seed_for_chunk(this.__wbg_ptr, a, b)
          }, a
        }();
        a.exports.BedrockFeatureSeedGenerator = A;
        var B = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_biomeprovider_free(a >>> 0)
        }), C = function () {
          function a(a) {
            k(a, W);
            var b = a.__destroy_into_raw(), c = p.biomeprovider_new(b);
            return this.__wbg_ptr = c >>> 0, this
          }

          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, B.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_biomeprovider_free(a)
          }, b.get_ints0 = function (a, b, c, d) {
            try {
              var e = p.__wbindgen_add_to_stack_pointer(-16);
              p.biomeprovider_get_ints0(e, this.__wbg_ptr, a, b, c, d);
              var f = j()[e / 4 + 0], g = j()[e / 4 + 1], h = l(f, g).slice();
              return p.__wbindgen_free(f, 4 * g, 4), h
            } finally {
              p.__wbindgen_add_to_stack_pointer(16)
            }
          }, b.get_ints1 = function (a, b, c, d) {
            try {
              var e = p.__wbindgen_add_to_stack_pointer(-16);
              p.biomeprovider_get_ints1(e, this.__wbg_ptr, a, b, c, d);
              var f = j()[e / 4 + 0], g = j()[e / 4 + 1], h = l(f, g).slice();
              return p.__wbindgen_free(f, 4 * g, 4), h
            } finally {
              p.__wbindgen_add_to_stack_pointer(16)
            }
          }, a
        }();
        a.exports.BiomeProvider = C;
        var D = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_biomeproviderend_free(a >>> 0)
        }), E = function () {
          function a(a) {
            k(a, W);
            var b = a.__destroy_into_raw(), c = p.biomeproviderend_new(b);
            return this.__wbg_ptr = c >>> 0, this
          }

          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, D.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_biomeproviderend_free(a)
          }, b.get_height_value = function (a, b, c, d) {
            return p.biomeproviderend_get_height_value(this.__wbg_ptr, a, b, c, d)
          }, b.get_chunk_biome = function (a, b) {
            return p.biomeproviderend_get_chunk_biome(this.__wbg_ptr, a, b)
          }, b.get_noise_biome = function (a, b) {
            return p.biomeproviderend_get_noise_biome(this.__wbg_ptr, a, b)
          }, b.get_chunk_area = function (a, b, c, d) {
            try {
              var e = p.__wbindgen_add_to_stack_pointer(-16);
              p.biomeproviderend_get_chunk_area(e, this.__wbg_ptr, a, b, c, d);
              var f = j()[e / 4 + 0], g = j()[e / 4 + 1], h = n(f, g).slice();
              return p.__wbindgen_free(f, 1 * g, 1), h
            } finally {
              p.__wbindgen_add_to_stack_pointer(16)
            }
          }, a
        }();
        a.exports.BiomeProviderEnd = E;
        var F = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_biomeprovidernether_free(a >>> 0)
        }), G = function () {
          function a(a) {
            k(a, W);
            var b = a.__destroy_into_raw(), c = p.biomeprovidernether_new(b);
            return this.__wbg_ptr = c >>> 0, this
          }

          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, F.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_biomeprovidernether_free(a)
          }, b.get_noise_biome = function (a, b) {
            return p.biomeprovidernether_get_noise_biome(this.__wbg_ptr, a, b)
          }, b.get_chunk_biome = function (a, b) {
            return p.biomeprovidernether_get_chunk_biome(this.__wbg_ptr, a, b)
          }, b.get_chunk_area = function (a, b, c, d) {
            try {
              var e = p.__wbindgen_add_to_stack_pointer(-16);
              p.biomeprovidernether_get_chunk_area(e, this.__wbg_ptr, a, b, c, d);
              var f = j()[e / 4 + 0], g = j()[e / 4 + 1], h = n(f, g).slice();
              return p.__wbindgen_free(f, 1 * g, 1), h
            } finally {
              p.__wbindgen_add_to_stack_pointer(16)
            }
          }, a
        }();
        a.exports.BiomeProviderNether = G;
        var H = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_cavefinder_free(a >>> 0)
        }), I = function () {
          function a(a) {
            k(a, W);
            var b = a.__destroy_into_raw(), c = p.cavefinder_new(b);
            return this.__wbg_ptr = c >>> 0, this
          }

          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, H.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_cavefinder_free(a)
          }, b.find = function (a, b, c, d) {
            return h(p.cavefinder_find(this.__wbg_ptr, a, b, c, d))
          }, a
        }();
        a.exports.CaveFinder = I;
        var J = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_chunkgeneratorend_free(a >>> 0)
        }), K = function () {
          function a(a) {
            k(a, W);
            var b = a.__destroy_into_raw(), c = p.chunkgeneratorend_new(b);
            return this.__wbg_ptr = c >>> 0, this
          }

          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, J.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_chunkgeneratorend_free(a)
          }, b.build_height_map = function (a, b) {
            try {
              var c = p.__wbindgen_add_to_stack_pointer(-16);
              p.chunkgeneratorend_build_height_map(c, this.__wbg_ptr, a, b);
              var d = j()[c / 4 + 0], e = j()[c / 4 + 1], f = l(d, e).slice();
              return p.__wbindgen_free(d, 4 * e, 4), f
            } finally {
              p.__wbindgen_add_to_stack_pointer(16)
            }
          }, a
        }();
        a.exports.ChunkGeneratorEnd = K;
        var L = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_dungeonfinder_free(a >>> 0)
        }), M = function () {
          function a(a) {
            k(a, W);
            var b = a.__destroy_into_raw(), c = p.dungeonfinder_new(b);
            return this.__wbg_ptr = c >>> 0, this
          }

          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, L.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_dungeonfinder_free(a)
          }, b.find = function (a, b, c, d) {
            return h(p.dungeonfinder_find(this.__wbg_ptr, a, b, c, d))
          }, a
        }();
        a.exports.DungeonFinder = M;
        var N = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_lavafloodedcavefinder_free(a >>> 0)
        }), O = function () {
          function a(a) {
            k(a, W);
            var b = a.__destroy_into_raw(), c = p.lavafloodedcavefinder_new(b);
            return this.__wbg_ptr = c >>> 0, this
          }

          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, N.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_lavafloodedcavefinder_free(a)
          }, b.find = function (a, b, c, d) {
            return h(p.lavafloodedcavefinder_find(this.__wbg_ptr, a, b, c, d))
          }, a
        }();
        a.exports.LavaFloodedCaveFinder = O;
        var P = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_lavalakehelper_free(a >>> 0)
        }), Q = function () {
          function a(a) {
            k(a, W);
            var b = a.__destroy_into_raw(), c = p.lavalakehelper_new(b);
            return this.__wbg_ptr = c >>> 0, this
          }

          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, P.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_lavalakehelper_free(a)
          }, b.test_feature_positions_java = function (a) {
            return h(p.lavalakehelper_test_feature_positions_java(this.__wbg_ptr, f(a)))
          }, b.find_positions_bedrock = function (a, b, c, d) {
            return h(p.lavalakehelper_find_positions_bedrock(this.__wbg_ptr, a, b, c, d))
          }, a
        }();
        a.exports.LavaLakeHelper = Q;
        var R = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_multinoisebiomesource_free(a >>> 0)
        }), S = function () {
          function a(a) {
            k(a, W);
            var b = a.__destroy_into_raw(), c = p.multinoisebiomesource_new(b);
            return this.__wbg_ptr = c >>> 0, this
          }

          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, R.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_multinoisebiomesource_free(a)
          }, b.get_noise_biome = function (a, b, c) {
            return p.multinoisebiomesource_get_noise_biome(this.__wbg_ptr, a, b, c)
          }, b.get_noise_biome_block = function (a, b, c) {
            return p.multinoisebiomesource_get_noise_biome_block(this.__wbg_ptr, a, b, c)
          }, b.get_noise_biome_at_height_type = function (a, b, c) {
            return p.multinoisebiomesource_get_noise_biome_at_height_type(this.__wbg_ptr, a, b, c)
          }, b.get_surface = function (a, b, c, d) {
            return p.multinoisebiomesource_get_surface(this.__wbg_ptr, a, b, c, d)
          }, b.get_surface_block = function (a, b, c, d) {
            return p.multinoisebiomesource_get_surface_block(this.__wbg_ptr, a, b, c, d)
          }, b.get_surface_area = function (a, b, c, d, e, f, g) {
            try {
              var h = p.__wbindgen_add_to_stack_pointer(-16);
              p.multinoisebiomesource_get_surface_area(h, this.__wbg_ptr, a, b, c, d, e, f, g);
              var i = j()[h / 4 + 0], k = j()[h / 4 + 1], m = l(i, k).slice();
              return p.__wbindgen_free(i, 4 * k, 4), m
            } finally {
              p.__wbindgen_add_to_stack_pointer(16)
            }
          }, b.get_noise_biome_area = function (a, b, c, d, e, f, g) {
            try {
              var h = p.__wbindgen_add_to_stack_pointer(-16);
              p.multinoisebiomesource_get_noise_biome_area(h, this.__wbg_ptr, a, b, c, d, e, f, g);
              var i = j()[h / 4 + 0], k = j()[h / 4 + 1], l = n(i, k).slice();
              return p.__wbindgen_free(i, 1 * k, 1), l
            } finally {
              p.__wbindgen_add_to_stack_pointer(16)
            }
          }, b.get_noise_biome_area_at_height_type = function (a, b, c, d, e, f) {
            try {
              var g = p.__wbindgen_add_to_stack_pointer(-16);
              p.multinoisebiomesource_get_noise_biome_area_at_height_type(g, this.__wbg_ptr, a, b, c, d, e, f);
              var h = j()[g / 4 + 0], i = j()[g / 4 + 1], k = n(h, i).slice();
              return p.__wbindgen_free(h, 1 * i, 1), k
            } finally {
              p.__wbindgen_add_to_stack_pointer(16)
            }
          }, b.find_spawn_position = function () {
            try {
              var a = p.__wbindgen_add_to_stack_pointer(-16);
              p.multinoisebiomesource_find_spawn_position(a, this.__wbg_ptr);
              var b = j()[a / 4 + 0], c = j()[a / 4 + 1], d = l(b, c).slice();
              return p.__wbindgen_free(b, 4 * c, 4), d
            } finally {
              p.__wbindgen_add_to_stack_pointer(16)
            }
          }, b.get_preliminary_surface_level = function (a, b) {
            return p.multinoisebiomesource_get_preliminary_surface_level(this.__wbg_ptr, a, b)
          }, b.get_noise_block = function (a, b, c, d) {
            return p.multinoisebiomesource_get_noise_block(this.__wbg_ptr, a, b, c, d)
          }, a
        }();
        a.exports.MultiNoiseBiomeSource = S;
        var T = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_oreveinfinder_free(a >>> 0)
        }), U = function () {
          function a(a) {
            k(a, W);
            var b = a.__destroy_into_raw(), c = p.oreveinfinder_new(b);
            return this.__wbg_ptr = c >>> 0, this
          }

          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, T.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_oreveinfinder_free(a)
          }, b.find = function (a, b, c, d) {
            return h(p.oreveinfinder_find(this.__wbg_ptr, a, b, c, d))
          }, a
        }();
        a.exports.OreVeinFinder = U;
        var V = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_world_free(a >>> 0)
        }), W = function () {
          function a(a, b, c, d, e, f) {
            var g = p.world_new(a, b, c, d, !m(e), m(e) ? 0 : e, f);
            return this.__wbg_ptr = g >>> 0, this
          }

          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, V.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_world_free(a)
          }, o.default(a, [{
            key: "edition", get: function () {
              return p.__wbg_get_world_edition(this.__wbg_ptr)
            }, set: function (a) {
              p.__wbg_set_world_edition(this.__wbg_ptr, a)
            }
          }, {
            key: "version", get: function () {
              return p.__wbg_get_world_version(this.__wbg_ptr)
            }, set: function (a) {
              p.__wbg_set_world_version(this.__wbg_ptr, a)
            }
          }, {
            key: "biome_size", get: function () {
              try {
                var a = p.__wbindgen_add_to_stack_pointer(-16);
                p.__wbg_get_world_biome_size(a, this.__wbg_ptr);
                var b = j()[a / 4 + 0], c = j()[a / 4 + 1];
                return 0 === b ? void 0 : c
              } finally {
                p.__wbindgen_add_to_stack_pointer(16)
              }
            }, set: function (a) {
              p.__wbg_set_world_biome_size(this.__wbg_ptr, !m(a), m(a) ? 0 : a)
            }
          }, {
            key: "large_biomes", get: function () {
              return 0 !== p.__wbg_get_world_large_biomes(this.__wbg_ptr)
            }, set: function (a) {
              p.__wbg_set_world_large_biomes(this.__wbg_ptr, a)
            }
          }]), a
        }();
        a.exports.World = W;
        var X = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_xoroshirorandom_free(a >>> 0)
        }), Y = function () {
          function a(a, b, c, d) {
            var e = p.xoroshirorandom_new(a, b, c, d);
            return this.__wbg_ptr = e >>> 0, this
          }

          a.__wrap = function (b) {
            b >>>= 0;
            var c = Object.create(a.prototype);
            return c.__wbg_ptr = b, X.register(c, c.__wbg_ptr, c), c
          };
          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, X.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_xoroshirorandom_free(a)
          }, a.new_from_seed = function (b, c) {
            var d = p.xoroshirorandom_new_from_seed(b, c);
            return a.__wrap(d)
          }, b.set_seed = function (a, b) {
            p.xoroshirorandom_set_seed(this.__wbg_ptr, a, b)
          }, b.next_int = function (a) {
            return p.xoroshirorandom_next_int(this.__wbg_ptr, a)
          }, b.next_long = function () {
            try {
              var a = p.__wbindgen_add_to_stack_pointer(-16);
              p.xoroshirorandom_next_long(a, this.__wbg_ptr);
              var b = j()[a / 4 + 0], c = j()[a / 4 + 1], d = l(b, c).slice();
              return p.__wbindgen_free(b, 4 * c, 4), d
            } finally {
              p.__wbindgen_add_to_stack_pointer(16)
            }
          }, b.next_float = function () {
            return p.xoroshirorandom_next_float(this.__wbg_ptr)
          }, b.next_double = function () {
            return p.xoroshirorandom_next_double(this.__wbg_ptr)
          }, b.skip_next_n = function (a) {
            p.xoroshirorandom_skip_next_n(this.__wbg_ptr, a)
          }, a
        }();
        a.exports.XoroshiroRandom = Y;
        var Z = "undefined" == typeof FinalizationRegistry ? {
          register: function () {
          }, unregister: function () {
          }
        } : new FinalizationRegistry(function (a) {
          return p.__wbg_xoroshirorandomworldgen_free(a >>> 0)
        }), $ = function () {
          function a(a, b, c, d) {
            var e = p.xoroshirorandom_new(a, b, c, d);
            return this.__wbg_ptr = e >>> 0, this
          }

          a.__wrap = function (b) {
            b >>>= 0;
            var c = Object.create(a.prototype);
            return c.__wbg_ptr = b, Z.register(c, c.__wbg_ptr, c), c
          };
          var b = a.prototype;
          return b.__destroy_into_raw = function () {
            var a = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Z.unregister(this), a
          }, b.free = function () {
            var a = this.__destroy_into_raw();
            p.__wbg_xoroshirorandomworldgen_free(a)
          }, a.new_from_seed = function (b, c) {
            var d = p.xoroshirorandom_new_from_seed(b, c);
            return a.__wrap(d)
          }, b.set_seed = function (a, b) {
            p.xoroshirorandom_set_seed(this.__wbg_ptr, a, b)
          }, b.next_int = function (a) {
            return p.xoroshirorandomworldgen_next_int(this.__wbg_ptr, a)
          }, b.next_long = function () {
            try {
              var a = p.__wbindgen_add_to_stack_pointer(-16);
              p.xoroshirorandomworldgen_next_long(a, this.__wbg_ptr);
              var b = j()[a / 4 + 0], c = j()[a / 4 + 1], d = l(b, c).slice();
              return p.__wbindgen_free(b, 4 * c, 4), d
            } finally {
              p.__wbindgen_add_to_stack_pointer(16)
            }
          }, b.next_float = function () {
            return p.xoroshirorandomworldgen_next_float(this.__wbg_ptr)
          }, b.next_double = function () {
            return p.xoroshirorandomworldgen_next_double(this.__wbg_ptr)
          }, b.skip_next_n = function (a) {
            p.xoroshirorandomworldgen_skip_next_n(this.__wbg_ptr, a)
          }, a
        }();
        a.exports.XoroshiroRandomWorldgen = $, a.exports.__wbindgen_json_parse = function (a, b) {
          return f(JSON.parse(e(a, b)))
        }, a.exports.__wbindgen_object_drop_ref = function (a) {
          h(a)
        }, a.exports.__wbindgen_json_serialize = function (a, b) {
          var c = g(b), d = i(JSON.stringify(void 0 === c ? null : c), p.__wbindgen_malloc, p.__wbindgen_realloc),
            e = v;
          j()[a / 4 + 1] = e, j()[a / 4 + 0] = d
        }, a.exports.__wbindgen_throw = function (a, b) {
          throw new Error(e(a, b))
        };

        var ab = new WebAssembly.Module(wasmbin), bb = new WebAssembly.Instance(ab, q);
        p = bb.exports, a.exports.__wasm = p

      }, 3099: function (a) {
        a.exports = function (a) {
          if ("function" != typeof a) throw TypeError(String(a) + " is not a function");
          return a
        }
      }, 6077: function (a, b, c) {
        var d = c(111);
        a.exports = function (a) {
          if (!d(a) && null !== a) throw TypeError("Can't set " + String(a) + " as a prototype");
          return a
        }
      }, 1223: function (a, b, c) {
        var d = c(5112), e = c(30), f = c(3070), g = d("unscopables"), h = Array.prototype;
        null == h[g] && f.f(h, g, {configurable: !0, value: e(null)}), a.exports = function (a) {
          h[g][a] = !0
        }
      }, 1530: function (a, b, c) {
        "use strict";
        var d = c(8710).charAt;
        a.exports = function (a, b, c) {
          return b + (c ? d(a, b).length : 1)
        }
      }, 5787: function (a) {
        a.exports = function (a, b, c) {
          if (!(a instanceof b)) throw TypeError("Incorrect " + (c ? c + " " : "") + "invocation");
          return a
        }
      }, 9670: function (a, b, c) {
        var d = c(111);
        a.exports = function (a) {
          if (!d(a)) throw TypeError(String(a) + " is not an object");
          return a
        }
      }, 4019: function (a) {
        a.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
      }, 260: function (a, b, c) {
        "use strict";
        var d, e = c(4019), f = c(9781), g = c(7854), h = c(111), i = c(6656), j = c(648), k = c(8880), l = c(1320),
          m = c(3070).f, n = c(9518), o = c(7674), p = c(5112), q = c(9711), r = g.Int8Array, s = r && r.prototype,
          t = g.Uint8ClampedArray, u = t && t.prototype, v = r && n(r), w = s && n(s), x = Object.prototype,
          y = x.isPrototypeOf, z = p("toStringTag"), A = q("TYPED_ARRAY_TAG"), B = e && !!o && "Opera" !== j(g.opera),
          C = !1, D = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
          }, E = function (a) {
            return h(a) && i(D, j(a))
          };
        for (d in D) g[d] || (B = !1);
        if ((!B || "function" != typeof v || v === Function.prototype) && (v = function () {
          throw TypeError("Incorrect invocation")
        }, B)) for (d in D) g[d] && o(g[d], v);
        if ((!B || !w || w === x) && (w = v.prototype, B)) for (d in D) g[d] && o(g[d].prototype, w);
        if (B && n(u) !== w && o(u, w), f && !i(w, z)) for (d in C = !0, m(w, z, {
          get: function () {
            return h(this) ? this[A] : void 0
          }
        }), D) g[d] && k(g[d], A, d);
        a.exports = {
          NATIVE_ARRAY_BUFFER_VIEWS: B, TYPED_ARRAY_TAG: C && A, aTypedArray: function (a) {
            if (E(a)) return a;
            throw TypeError("Target is not a typed array")
          }, aTypedArrayConstructor: function (a) {
            if (o) {
              if (y.call(v, a)) return a
            } else for (var b in D) if (i(D, d)) {
              var c = g[b];
              if (c && (a === c || y.call(c, a))) return a
            }
            throw TypeError("Target is not a typed array constructor")
          }, exportTypedArrayMethod: function (a, b, c) {
            if (f) {
              if (c) for (var d in D) {
                var e = g[d];
                e && i(e.prototype, a) && delete e.prototype[a]
              }
              w[a] && !c || l(w, a, c ? b : B && s[a] || b)
            }
          }, exportTypedArrayStaticMethod: function (a, b, c) {
            var d, e;
            if (f) {
              if (o) {
                if (c) for (d in D) (e = g[d]) && i(e, a) && delete e[a];
                if (v[a] && !c) return;
                try {
                  return l(v, a, c ? b : B && r[a] || b)
                } catch (a) {
                }
              }
              for (d in D) !(e = g[d]) || e[a] && !c || l(e, a, b)
            }
          }, isView: function (a) {
            var b = j(a);
            return "DataView" === b || i(D, b)
          }, isTypedArray: E, TypedArray: v, TypedArrayPrototype: w
        }
      }, 3331: function (a, b, c) {
        "use strict";
        var d = c(7854), e = c(9781), f = c(4019), g = c(8880), h = c(2248), i = c(7293), j = c(5787), k = c(9958),
          l = c(7466), m = c(7067), n = c(1179), o = c(9518), p = c(7674), q = c(8006).f, r = c(3070).f, s = c(1285),
          t = c(8003), u = c(9909), v = u.get, w = u.set, x = "ArrayBuffer", y = "DataView", z = "Wrong index",
          A = d.ArrayBuffer, B = A, C = d.DataView, D = C && C.prototype, E = Object.prototype, F = d.RangeError,
          G = n.pack, H = n.unpack, I = function (a) {
            return [255 & a]
          }, J = function (a) {
            return [255 & a, a >> 8 & 255]
          }, K = function (a) {
            return [255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255]
          }, L = function (a) {
            return a[3] << 24 | a[2] << 16 | a[1] << 8 | a[0]
          }, M = function (a) {
            return G(a, 23, 4)
          }, N = function (a) {
            return G(a, 52, 8)
          }, O = function (a, b) {
            r(a.prototype, b, {
              get: function () {
                return v(this)[b]
              }
            })
          }, P = function (a, b, c, d) {
            var e = m(c), f = v(a);
            if (e + b > f.byteLength) throw F(z);
            var g = v(f.buffer).bytes, h = e + f.byteOffset, i = g.slice(h, h + b);
            return d ? i : i.reverse()
          }, Q = function (a, b, c, d, e, f) {
            var g = m(c), h = v(a);
            if (g + b > h.byteLength) throw F(z);
            for (var i = v(h.buffer).bytes, j = g + h.byteOffset, k = d(+e), l = 0; b > l; l++) i[j + l] = k[f ? l : b - l - 1]
          };
        if (f) {
          if (!i(function () {
            A(1)
          }) || !i(function () {
            new A(-1)
          }) || i(function () {
            return new A, new A(1.5), new A(0 / 0), A.name != x
          })) {
            for (var R, S = (B = function (a) {
              return j(this, B), new A(m(a))
            }).prototype = A.prototype, T = q(A), U = 0; T.length > U;) (R = T[U++]) in B || g(B, R, A[R]);
            S.constructor = B
          }
          p && o(D) !== E && p(D, E);
          var V = new C(new B(2)), W = D.setInt8;
          V.setInt8(0, 2147483648), V.setInt8(1, 2147483649), !V.getInt8(0) && V.getInt8(1) || h(D, {
            setInt8: function (a, b) {
              W.call(this, a, b << 24 >> 24)
            }, setUint8: function (a, b) {
              W.call(this, a, b << 24 >> 24)
            }
          }, {unsafe: !0})
        } else B = function (a) {
          j(this, B, x);
          var b = m(a);
          w(this, {bytes: s.call(new Array(b), 0), byteLength: b}), e || (this.byteLength = b)
        }, C = function (a, b, c) {
          j(this, C, y), j(a, B, y);
          var d = v(a).byteLength, f = k(b);
          if (0 > f || f > d) throw F("Wrong offset");
          if (f + (c = void 0 === c ? d - f : l(c)) > d) throw F("Wrong length");
          w(this, {
            buffer: a,
            byteLength: c,
            byteOffset: f
          }), e || (this.buffer = a, this.byteLength = c, this.byteOffset = f)
        }, e && (O(B, "byteLength"), O(C, "buffer"), O(C, "byteLength"), O(C, "byteOffset")), h(C.prototype, {
          getInt8: function (a) {
            return P(this, 1, a)[0] << 24 >> 24
          }, getUint8: function (a) {
            return P(this, 1, a)[0]
          }, getInt16: function (a) {
            var b = P(this, 2, a, arguments.length > 1 ? arguments[1] : void 0);
            return (b[1] << 8 | b[0]) << 16 >> 16
          }, getUint16: function (a) {
            var b = P(this, 2, a, arguments.length > 1 ? arguments[1] : void 0);
            return b[1] << 8 | b[0]
          }, getInt32: function (a) {
            return L(P(this, 4, a, arguments.length > 1 ? arguments[1] : void 0))
          }, getUint32: function (a) {
            return L(P(this, 4, a, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
          }, getFloat32: function (a) {
            return H(P(this, 4, a, arguments.length > 1 ? arguments[1] : void 0), 23)
          }, getFloat64: function (a) {
            return H(P(this, 8, a, arguments.length > 1 ? arguments[1] : void 0), 52)
          }, setInt8: function (a, b) {
            Q(this, 1, a, I, b)
          }, setUint8: function (a, b) {
            Q(this, 1, a, I, b)
          }, setInt16: function (a, b) {
            Q(this, 2, a, J, b, arguments.length > 2 ? arguments[2] : void 0)
          }, setUint16: function (a, b) {
            Q(this, 2, a, J, b, arguments.length > 2 ? arguments[2] : void 0)
          }, setInt32: function (a, b) {
            Q(this, 4, a, K, b, arguments.length > 2 ? arguments[2] : void 0)
          }, setUint32: function (a, b) {
            Q(this, 4, a, K, b, arguments.length > 2 ? arguments[2] : void 0)
          }, setFloat32: function (a, b) {
            Q(this, 4, a, M, b, arguments.length > 2 ? arguments[2] : void 0)
          }, setFloat64: function (a, b) {
            Q(this, 8, a, N, b, arguments.length > 2 ? arguments[2] : void 0)
          }
        });
        t(B, x), t(C, y), a.exports = {ArrayBuffer: B, DataView: C}
      }, 1048: function (a, b, c) {
        "use strict";
        var d = c(7908), e = c(1400), f = c(7466), g = Math.min;
        a.exports = [].copyWithin || function (a, b) {
          var c = d(this), h = f(c.length), i = e(a, h), j = e(b, h), k = arguments.length > 2 ? arguments[2] : void 0,
            l = g((void 0 === k ? h : e(k, h)) - j, h - i), m = 1;
          for (i > j && j + l > i && (m = -1, j += l - 1, i += l - 1); l-- > 0;) j in c ? c[i] = c[j] : delete c[i], i += m, j += m;
          return c
        }
      }, 1285: function (a, b, c) {
        "use strict";
        var d = c(7908), e = c(1400), f = c(7466);
        a.exports = function (a) {
          for (var b = d(this), c = f(b.length), g = arguments.length, h = e(g > 1 ? arguments[1] : void 0, c), i = g > 2 ? arguments[2] : void 0, j = void 0 === i ? c : e(i, c); j > h;) b[h++] = a;
          return b
        }
      }, 8533: function (a, b, c) {
        "use strict";
        var d = c(2092).forEach, e = c(9341), f = c(9207), g = e("forEach"), h = f("forEach");
        a.exports = g && h ? [].forEach : function (a) {
          return d(this, a, arguments.length > 1 ? arguments[1] : void 0)
        }
      }, 8457: function (a, b, c) {
        "use strict";
        var d = c(9974), e = c(7908), f = c(3411), g = c(7659), h = c(7466), i = c(6135), j = c(1246);
        a.exports = function (a) {
          var b, c, k, l, m, n, o = e(a), p = "function" == typeof this ? this : Array, q = arguments.length,
            r = q > 1 ? arguments[1] : void 0, s = void 0 !== r, t = j(o), u = 0;
          if (s && (r = d(r, q > 2 ? arguments[2] : void 0, 2)), null == t || p == Array && g(t)) for (c = new p(b = h(o.length)); b > u; u++) n = s ? r(o[u], u) : o[u], i(c, u, n); else for (m = (l = t.call(o)).next, c = new p; !(k = m.call(l)).done; u++) n = s ? f(l, r, [k.value, u], !0) : k.value, i(c, u, n);
          return c.length = u, c
        }
      }, 1318: function (a, b, c) {
        var d = c(5656), e = c(7466), f = c(1400), g = function (a) {
          return function (b, c, g) {
            var h, i = d(b), j = e(i.length), k = f(g, j);
            if (a && c != c) {
              for (; j > k;) if ((h = i[k++]) != h) return !0
            } else for (; j > k; k++) if ((a || k in i) && i[k] === c) return a || k || 0;
            return !a && -1
          }
        };
        a.exports = {includes: g(!0), indexOf: g(!1)}
      }, 2092: function (a, b, c) {
        var d = c(9974), e = c(8361), f = c(7908), g = c(7466), h = c(5417), i = [].push, j = function (a) {
          var b = 1 == a, c = 2 == a, j = 3 == a, k = 4 == a, l = 6 == a, m = 5 == a || l;
          return function (n, o, p, q) {
            for (var r, s, t = f(n), u = e(t), v = d(o, p, 3), w = g(u.length), x = 0, y = q || h, z = b ? y(n, w) : c ? y(n, 0) : void 0; w > x; x++) if ((m || x in u) && (s = v(r = u[x], x, t), a)) if (b) z[x] = s; else if (s) switch (a) {
              case 3:
                return !0;
              case 5:
                return r;
              case 6:
                return x;
              case 2:
                i.call(z, r)
            } else if (k) return !1;
            return l ? -1 : j || k ? k : z
          }
        };
        a.exports = {forEach: j(0), map: j(1), filter: j(2), some: j(3), every: j(4), find: j(5), findIndex: j(6)}
      }, 6583: function (a, b, c) {
        "use strict";
        var d = c(5656), e = c(9958), f = c(7466), g = c(9341), h = c(9207), i = Math.min, j = [].lastIndexOf,
          k = !!j && 1 / [1].lastIndexOf(1, -0) < 0, l = g("lastIndexOf"), m = h("indexOf", {ACCESSORS: !0, 1: 0}),
          n = k || !l || !m;
        a.exports = n ? function (a) {
          if (k) return j.apply(this, arguments) || 0;
          var b = d(this), c = f(b.length), g = c - 1;
          for (arguments.length > 1 && (g = i(g, e(arguments[1]))), 0 > g && (g = c + g); g >= 0; g--) if (g in b && b[g] === a) return g || 0;
          return -1
        } : j
      }, 1194: function (a, b, c) {
        var d = c(7293), e = c(5112), f = c(7392), g = e("species");
        a.exports = function (a) {
          return f >= 51 || !d(function () {
            var b = [];
            return (b.constructor = {})[g] = function () {
              return {foo: 1}
            }, 1 !== b[a](Boolean).foo
          })
        }
      }, 9341: function (a, b, c) {
        "use strict";
        var d = c(7293);
        a.exports = function (a, b) {
          var c = [][a];
          return !!c && d(function () {
            c.call(null, b || function () {
              throw 1
            }, 1)
          })
        }
      }, 9207: function (a, b, c) {
        var d = c(9781), e = c(7293), f = c(6656), g = Object.defineProperty, h = {}, i = function (a) {
          throw a
        };
        a.exports = function (a, b) {
          if (f(h, a)) return h[a];
          b || (b = {});
          var c = [][a], j = !!f(b, "ACCESSORS") && b.ACCESSORS, k = f(b, 0) ? b[0] : i, l = f(b, 1) ? b[1] : void 0;
          return h[a] = !!c && !e(function () {
            if (j && !d) return !0;
            var a = {length: -1};
            j ? g(a, 1, {enumerable: !0, get: i}) : a[1] = 1, c.call(a, k, l)
          })
        }
      }, 3671: function (a, b, c) {
        var d = c(3099), e = c(7908), f = c(8361), g = c(7466), h = function (a) {
          return function (b, c, h, i) {
            d(c);
            var j = e(b), k = f(j), l = g(j.length), m = a ? l - 1 : 0, n = a ? -1 : 1;
            if (2 > h) for (; ;) {
              if (m in k) {
                i = k[m], m += n;
                break
              }
              if (m += n, a ? 0 > m : m >= l) throw TypeError("Reduce of empty array with no initial value")
            }
            for (; a ? m >= 0 : l > m; m += n) m in k && (i = c(i, k[m], m, j));
            return i
          }
        };
        a.exports = {left: h(!1), right: h(!0)}
      }, 5417: function (a, b, c) {
        var d = c(111), e = c(3157), f = c(5112)("species");
        a.exports = function (a, b) {
          var c;
          return e(a) && ("function" != typeof (c = a.constructor) || c !== Array && !e(c.prototype) ? d(c) && null === (c = c[f]) && (c = void 0) : c = void 0), new (void 0 === c ? Array : c)(0 === b ? 0 : b)
        }
      }, 3411: function (a, b, c) {
        var d = c(9670);
        a.exports = function (a, b, c, e) {
          try {
            return e ? b(d(c)[0], c[1]) : b(c)
          } catch (b) {
            var f = a.return;
            throw void 0 !== f && d(f.call(a)), b
          }
        }
      }, 7072: function (a, b, c) {
        var d = c(5112)("iterator"), e = !1;
        try {
          var f = 0, g = {
            next: function () {
              return {done: !!f++}
            }, "return": function () {
              e = !0
            }
          };
          g[d] = function () {
            return this
          }, Array.from(g, function () {
            throw 2
          })
        } catch (a) {
        }
        a.exports = function (a, b) {
          if (!b && !e) return !1;
          var c = !1;
          try {
            var f = {};
            f[d] = function () {
              return {
                next: function () {
                  return {done: c = !0}
                }
              }
            }, a(f)
          } catch (a) {
          }
          return c
        }
      }, 4326: function (a) {
        var b = {}.toString;
        a.exports = function (a) {
          return b.call(a).slice(8, -1)
        }
      }, 648: function (a, b, c) {
        var d = c(1694), e = c(4326), f = c(5112)("toStringTag"), g = "Arguments" == e(function () {
          return arguments
        }());
        a.exports = d ? e : function (a) {
          var b, c, d;
          return void 0 === a ? "Undefined" : null === a ? "Null" : "string" == typeof (c = function (a, b) {
            try {
              return a[b]
            } catch (a) {
            }
          }(b = Object(a), f)) ? c : g ? e(b) : "Object" == (d = e(b)) && "function" == typeof b.callee ? "Arguments" : d
        }
      }, 5631: function (a, b, c) {
        "use strict";
        var d = c(3070).f, e = c(30), f = c(2248), g = c(9974), h = c(5787), i = c(408), j = c(654), k = c(6340),
          l = c(9781), m = c(2423).fastKey, n = c(9909), o = n.set, p = n.getterFor;
        a.exports = {
          getConstructor: function (a, b, c, j) {
            var k = a(function (a, d) {
              h(a, k, b), o(a, {
                type: b,
                index: e(null),
                first: void 0,
                last: void 0,
                size: 0
              }), l || (a.size = 0), null != d && i(d, a[j], a, c)
            }), n = p(b), q = function (a, b, c) {
              var d, e, f = n(a), g = r(a, b);
              return g ? g.value = c : (f.last = g = {
                index: e = m(b, !0),
                key: b,
                value: c,
                previous: d = f.last,
                next: void 0,
                removed: !1
              }, f.first || (f.first = g), d && (d.next = g), l ? f.size++ : a.size++, "F" !== e && (f.index[e] = g)), a
            }, r = function (a, b) {
              var c, d = n(a), e = m(b);
              if ("F" !== e) return d.index[e];
              for (c = d.first; c; c = c.next) if (c.key == b) return c
            };
            return f(k.prototype, {
              clear: function () {
                for (var a = n(this), b = a.index, c = a.first; c;) c.removed = !0, c.previous && (c.previous = c.previous.next = void 0), delete b[c.index], c = c.next;
                a.first = a.last = void 0, l ? a.size = 0 : this.size = 0
              }, "delete": function (a) {
                var b = this, c = n(b), d = r(b, a);
                if (d) {
                  var e = d.next, f = d.previous;
                  delete c.index[d.index], d.removed = !0, f && (f.next = e), e && (e.previous = f), c.first == d && (c.first = e), c.last == d && (c.last = f), l ? c.size-- : b.size--
                }
                return !!d
              }, forEach: function (a) {
                for (var b, c = n(this), d = g(a, arguments.length > 1 ? arguments[1] : void 0, 3); b = b ? b.next : c.first;) for (d(b.value, b.key, this); b && b.removed;) b = b.previous
              }, has: function (a) {
                return !!r(this, a)
              }
            }), f(k.prototype, c ? {
              get: function (a) {
                var b = r(this, a);
                return b && b.value
              }, set: function (a, b) {
                return q(this, 0 === a ? 0 : a, b)
              }
            } : {
              add: function (a) {
                return q(this, a = 0 === a ? 0 : a, a)
              }
            }), l && d(k.prototype, "size", {
              get: function () {
                return n(this).size
              }
            }), k
          }, setStrong: function (a, b, c) {
            var d = b + " Iterator", e = p(b), f = p(d);
            j(a, b, function (a, b) {
              o(this, {type: d, target: a, state: e(a), kind: b, last: void 0})
            }, function () {
              for (var a = f(this), b = a.kind, c = a.last; c && c.removed;) c = c.previous;
              return a.target && (a.last = c = c ? c.next : a.state.first) ? "keys" == b ? {
                value: c.key,
                done: !1
              } : "values" == b ? {value: c.value, done: !1} : {
                value: [c.key, c.value],
                done: !1
              } : (a.target = void 0, {value: void 0, done: !0})
            }, c ? "entries" : "values", !c, !0), k(b)
          }
        }
      }, 9320: function (a, b, c) {
        "use strict";
        var d = c(2248), e = c(2423).getWeakData, f = c(9670), g = c(111), h = c(5787), i = c(408), j = c(2092),
          k = c(6656), l = c(9909), m = l.set, n = l.getterFor, o = j.find, p = j.findIndex, q = 0, r = function (a) {
            return a.frozen || (a.frozen = new s)
          }, s = function () {
            this.entries = []
          }, t = function (a, b) {
            return o(a.entries, function (a) {
              return a[0] === b
            })
          };
        s.prototype = {
          get: function (a) {
            var b = t(this, a);
            return b ? b[1] : void 0
          }, has: function (a) {
            return !!t(this, a)
          }, set: function (a, b) {
            var c = t(this, a);
            c ? c[1] = b : this.entries.push([a, b])
          }, "delete": function (a) {
            var b = p(this.entries, function (b) {
              return b[0] === a
            });
            return ~b && this.entries.splice(b, 1), !!~b
          }
        }, a.exports = {
          getConstructor: function (a, b, c, j) {
            var l = a(function (a, d) {
              h(a, l, b), m(a, {type: b, id: q++, frozen: void 0}), null != d && i(d, a[j], a, c)
            }), o = n(b), p = function (a, b, c) {
              var d = o(a), g = e(f(b), !0);
              return !0 === g ? r(d).set(b, c) : g[d.id] = c, a
            };
            return d(l.prototype, {
              "delete": function (a) {
                var b = o(this);
                if (!g(a)) return !1;
                var c = e(a);
                return !0 === c ? r(b).delete(a) : c && k(c, b.id) && delete c[b.id]
              }, has: function (a) {
                var b = o(this);
                if (!g(a)) return !1;
                var c = e(a);
                return !0 === c ? r(b).has(a) : c && k(c, b.id)
              }
            }), d(l.prototype, c ? {
              get: function (a) {
                var b = o(this);
                if (g(a)) {
                  var c = e(a);
                  return !0 === c ? r(b).get(a) : c ? c[b.id] : void 0
                }
              }, set: function (a, b) {
                return p(this, a, b)
              }
            } : {
              add: function (a) {
                return p(this, a, !0)
              }
            }), l
          }
        }
      }, 7710: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(7854), f = c(4705), g = c(1320), h = c(2423), i = c(408), j = c(5787), k = c(111),
          l = c(7293), m = c(7072), n = c(8003), o = c(9587);
        a.exports = function (a, b, c) {
          var p = -1 !== a.indexOf("Map"), q = -1 !== a.indexOf("Weak"), r = p ? "set" : "add", s = e[a],
            t = s && s.prototype, u = s, v = {}, w = function (a) {
              var b = t[a];
              g(t, a, "add" == a ? function (a) {
                return b.call(this, 0 === a ? 0 : a), this
              } : "delete" == a ? function (a) {
                return !(q && !k(a)) && b.call(this, 0 === a ? 0 : a)
              } : "get" == a ? function (a) {
                return q && !k(a) ? void 0 : b.call(this, 0 === a ? 0 : a)
              } : "has" == a ? function (a) {
                return !(q && !k(a)) && b.call(this, 0 === a ? 0 : a)
              } : function (a, c) {
                return b.call(this, 0 === a ? 0 : a, c), this
              })
            };
          if (f(a, "function" != typeof s || !(q || t.forEach && !l(function () {
            (new s).entries().next()
          })))) u = c.getConstructor(b, a, p, r), h.REQUIRED = !0; else if (f(a, !0)) {
            var x = new u, y = x[r](q ? {} : -0, 1) != x, z = l(function () {
              x.has(1)
            }), A = m(function (a) {
              new s(a)
            }), B = !q && l(function () {
              for (var a = new s, b = 5; b--;) a[r](b, b);
              return !a.has(-0)
            });
            A || ((u = b(function (b, c) {
              j(b, u, a);
              var d = o(new s, b, u);
              return null != c && i(c, d[r], d, p), d
            })).prototype = t, t.constructor = u), (z || B) && (w("delete"), w("has"), p && w("get")), (B || y) && w(r), q && t.clear && delete t.clear
          }
          return v[a] = u, d({global: !0, forced: u != s}, v), n(u, a), q || c.setStrong(u, a, p), u
        }
      }, 9920: function (a, b, c) {
        var d = c(6656), e = c(3887), f = c(1236), g = c(3070);
        a.exports = function (a, b) {
          for (var c = e(b), h = g.f, i = f.f, j = 0; j < c.length; j++) {
            var k = c[j];
            d(a, k) || h(a, k, i(b, k))
          }
        }
      }, 4964: function (a, b, c) {
        var d = c(5112)("match");
        a.exports = function (a) {
          var b = /./;
          try {
            "/./"[a](b)
          } catch (c) {
            try {
              return b[d] = !1, "/./"[a](b)
            } catch (a) {
            }
          }
          return !1
        }
      }, 8544: function (a, b, c) {
        var d = c(7293);
        a.exports = !d(function () {
          function a() {
          }

          return a.prototype.constructor = null, Object.getPrototypeOf(new a) !== a.prototype
        })
      }, 4994: function (a, b, c) {
        "use strict";
        var d = c(3383).IteratorPrototype, e = c(30), f = c(9114), g = c(8003), h = c(7497), i = function () {
          return this
        };
        a.exports = function (a, b, c) {
          var j = b + " Iterator";
          return a.prototype = e(d, {next: f(1, c)}), g(a, j, !1, !0), h[j] = i, a
        }
      }, 8880: function (a, b, c) {
        var d = c(9781), e = c(3070), f = c(9114);
        a.exports = d ? function (a, b, c) {
          return e.f(a, b, f(1, c))
        } : function (a, b, c) {
          return a[b] = c, a
        }
      }, 9114: function (a) {
        a.exports = function (a, b) {
          return {enumerable: !(1 & a), configurable: !(2 & a), writable: !(4 & a), value: b}
        }
      }, 6135: function (a, b, c) {
        "use strict";
        var d = c(7593), e = c(3070), f = c(9114);
        a.exports = function (a, b, c) {
          var g = d(b);
          g in a ? e.f(a, g, f(0, c)) : a[g] = c
        }
      }, 654: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(4994), f = c(9518), g = c(7674), h = c(8003), i = c(8880), j = c(1320), k = c(5112),
          l = c(1913), m = c(7497), n = c(3383), o = n.IteratorPrototype, p = n.BUGGY_SAFARI_ITERATORS,
          q = k("iterator"), r = "keys", s = "values", t = "entries", u = function () {
            return this
          };
        a.exports = function (a, b, c, k, n, v, w) {
          e(c, b, k);
          var x, y, z, A = function (a) {
              if (a === n && F) return F;
              if (!p && a in D) return D[a];
              switch (a) {
                case r:
                case s:
                case t:
                  return function () {
                    return new c(this, a)
                  }
              }
              return function () {
                return new c(this)
              }
            }, B = b + " Iterator", C = !1, D = a.prototype, E = D[q] || D["@@iterator"] || n && D[n],
            F = !p && E || A(n), G = "Array" == b && D.entries || E;
          if (G && (x = f(G.call(new a)), o !== Object.prototype && x.next && (l || f(x) === o || (g ? g(x, o) : "function" != typeof x[q] && i(x, q, u)), h(x, B, !0, !0), l && (m[B] = u))), n == s && E && E.name !== s && (C = !0, F = function () {
            return E.call(this)
          }), l && !w || D[q] === F || i(D, q, F), m[b] = F, n) if (y = {
            values: A(s),
            keys: v ? F : A(r),
            entries: A(t)
          }, w) for (z in y) (p || C || !(z in D)) && j(D, z, y[z]); else d({target: b, proto: !0, forced: p || C}, y);
          return y
        }
      }, 7235: function (a, b, c) {
        var d = c(857), e = c(6656), f = c(6061), g = c(3070).f;
        a.exports = function (a) {
          var b = d.Symbol || (d.Symbol = {});
          e(b, a) || g(b, a, {value: f.f(a)})
        }
      }, 9781: function (a, b, c) {
        var d = c(7293);
        a.exports = !d(function () {
          return 7 != Object.defineProperty({}, 1, {
            get: function () {
              return 7
            }
          })[1]
        })
      }, 317: function (a, b, c) {
        var d = c(7854), e = c(111), f = d.document, g = e(f) && e(f.createElement);
        a.exports = function (a) {
          return g ? f.createElement(a) : {}
        }
      }, 8324: function (a) {
        a.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        }
      }, 6833: function (a, b, c) {
        var d = c(8113);
        a.exports = /(iphone|ipod|ipad).*applewebkit/i.test(d)
      }, 8113: function (a, b, c) {
        var d = c(5005);
        a.exports = d("navigator", "userAgent") || ""
      }, 7392: function (a, b, c) {
        var d, e, f = c(7854), g = c(8113), h = f.process, i = h && h.versions, j = i && i.v8;
        j ? e = (d = j.split("."))[0] + d[1] : g && (!(d = g.match(/Edge\/(\d+)/)) || d[1] >= 74) && (d = g.match(/Chrome\/(\d+)/)) && (e = d[1]), a.exports = e && +e
      }, 748: function (a) {
        a.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
      }, 2109: function (a, b, c) {
        var d = c(7854), e = c(1236).f, f = c(8880), g = c(1320), h = c(3505), i = c(9920), j = c(4705);
        a.exports = function (a, b) {
          var c, k, l, m, n, o = a.target, p = a.global, q = a.stat;
          if (c = p ? d : q ? d[o] || h(o, {}) : (d[o] || {}).prototype) for (k in b) {
            if (m = b[k], l = a.noTargetGet ? (n = e(c, k)) && n.value : c[k], !j(p ? k : o + (q ? "." : "#") + k, a.forced) && void 0 !== l) {
              if (typeof m == typeof l) continue;
              i(m, l)
            }
            (a.sham || l && l.sham) && f(m, "sham", !0), g(c, k, m, a)
          }
        }
      }, 7293: function (a) {
        a.exports = function (a) {
          try {
            return !!a()
          } catch (a) {
            return !0
          }
        }
      }, 7007: function (a, b, c) {
        "use strict";
        c(4916);
        var d = c(1320), e = c(7293), f = c(5112), g = c(2261), h = c(8880), i = f("species"), j = !e(function () {
            var a = /./;
            return a.exec = function () {
              var a = [];
              return a.groups = {a: "7"}, a
            }, "7" !== "".replace(a, "$<a>")
          }), k = "$0" === "a".replace(/./, "$0"), l = f("replace"), m = !!/./[l] && "" === /./[l]("a", "$0"),
          n = !e(function () {
            var a = /(?:)/, b = a.exec;
            a.exec = function () {
              return b.apply(this, arguments)
            };
            var c = "ab".split(a);
            return 2 !== c.length || "a" !== c[0] || "b" !== c[1]
          });
        a.exports = function (a, b, c, l) {
          var o = f(a), p = !e(function () {
            var b = {};
            return b[o] = function () {
              return 7
            }, 7 != ""[a](b)
          }), q = p && !e(function () {
            var b = !1, c = /a/;
            return "split" === a && ((c = {}).constructor = {}, c.constructor[i] = function () {
              return c
            }, c.flags = "", c[o] = /./[o]), c.exec = function () {
              return b = !0, null
            }, c[o](""), !b
          });
          if (!p || !q || "replace" === a && (!j || !k || m) || "split" === a && !n) {
            var r = /./[o], s = c(o, ""[a], function (a, b, c, d, e) {
              return b.exec === g ? p && !e ? {done: !0, value: r.call(b, c, d)} : {
                done: !0,
                value: a.call(c, b, d)
              } : {done: !1}
            }, {REPLACE_KEEPS_$0: k, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: m}), t = s[0], u = s[1];
            d(String.prototype, a, t), d(RegExp.prototype, o, 2 == b ? function (a, b) {
              return u.call(a, this, b)
            } : function (a) {
              return u.call(a, this)
            })
          }
          l && h(RegExp.prototype[o], "sham", !0)
        }
      }, 6790: function (a, b, c) {
        "use strict";
        var d = c(3157), e = c(7466), f = c(9974), g = function (a, b, c, h, i, j, k, l) {
          for (var m, n = i, o = 0, p = !!k && f(k, l, 3); h > o;) {
            if (o in c) {
              if (m = p ? p(c[o], o, b) : c[o], j > 0 && d(m)) n = g(a, b, m, e(m.length), n, j - 1) - 1; else {
                if (n >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                a[n] = m
              }
              n++
            }
            o++
          }
          return n
        };
        a.exports = g
      }, 6677: function (a, b, c) {
        var d = c(7293);
        a.exports = !d(function () {
          return Object.isExtensible(Object.preventExtensions({}))
        })
      }, 9974: function (a, b, c) {
        var d = c(3099);
        a.exports = function (a, b, c) {
          if (d(a), void 0 === b) return a;
          switch (c) {
            case 0:
              return function () {
                return a.call(b)
              };
            case 1:
              return function (c) {
                return a.call(b, c)
              };
            case 2:
              return function (c, d) {
                return a.call(b, c, d)
              };
            case 3:
              return function (c, d, e) {
                return a.call(b, c, d, e)
              }
          }
          return function () {
            return a.apply(b, arguments)
          }
        }
      }, 5005: function (a, b, c) {
        var d = c(857), e = c(7854), f = function (a) {
          return "function" == typeof a ? a : void 0
        };
        a.exports = function (a, b) {
          return arguments.length < 2 ? f(d[a]) || f(e[a]) : d[a] && d[a][b] || e[a] && e[a][b]
        }
      }, 1246: function (a, b, c) {
        var d = c(648), e = c(7497), f = c(5112)("iterator");
        a.exports = function (a) {
          return null != a ? a[f] || a["@@iterator"] || e[d(a)] : void 0
        }
      }, 7854: function (a, b, c) {
        var d = function (a) {
          return a && a.Math == Math && a
        };
        a.exports = d("object" == typeof globalThis && globalThis) || d("object" == typeof window && window) || d("object" == typeof self && self) || d("object" == typeof c.g && c.g) || Function("return this")()
      }, 6656: function (a) {
        var b = {}.hasOwnProperty;
        a.exports = function (a, c) {
          return b.call(a, c)
        }
      }, 3501: function (a) {
        a.exports = {}
      }, 842: function (a, b, c) {
        var d = c(7854);
        a.exports = function (a, b) {
          var c = d.console;
          c && c.error && (1 === arguments.length ? c.error(a) : c.error(a, b))
        }
      }, 490: function (a, b, c) {
        var d = c(5005);
        a.exports = d("document", "documentElement")
      }, 4664: function (a, b, c) {
        var d = c(9781), e = c(7293), f = c(317);
        a.exports = !d && !e(function () {
          return 7 != Object.defineProperty(f("div"), "a", {
            get: function () {
              return 7
            }
          }).a
        })
      }, 1179: function (a) {
        var b = 1 / 0, c = Math.abs, d = Math.pow, e = Math.floor, f = Math.log, g = Math.LN2;
        a.exports = {
          pack: function (a, h, i) {
            var j, k, l, m = new Array(i), n = 8 * i - h - 1, o = (1 << n) - 1, p = o >> 1,
              q = 23 === h ? d(2, -24) - d(2, -77) : 0, r = 0 > a || 0 === a && 0 > 1 / a ? 1 : 0, s = 0;
            for ((a = c(a)) != a || a === b ? (k = a != a ? 1 : 0, j = o) : (j = e(f(a) / g), a * (l = d(2, -j)) < 1 && (j--, l *= 2), (a += j + p >= 1 ? q / l : q * d(2, 1 - p)) * l >= 2 && (j++, l /= 2), j + p >= o ? (k = 0, j = o) : j + p >= 1 ? (k = (a * l - 1) * d(2, h), j += p) : (k = a * d(2, p - 1) * d(2, h), j = 0)); h >= 8; m[s++] = 255 & k, k /= 256, h -= 8) ;
            for (j = j << h | k, n += h; n > 0; m[s++] = 255 & j, j /= 256, n -= 8) ;
            return m[--s] |= 128 * r, m
          }, unpack: function (a, c) {
            var e, f = a.length, g = 8 * f - c - 1, h = (1 << g) - 1, i = h >> 1, j = g - 7, k = f - 1, l = a[k--],
              m = 127 & l;
            for (l >>= 7; j > 0; m = 256 * m + a[k], k--, j -= 8) ;
            for (e = m & (1 << -j) - 1, m >>= -j, j += c; j > 0; e = 256 * e + a[k], k--, j -= 8) ;
            if (0 === m) m = 1 - i; else {
              if (m === h) return e ? 0 / 0 : l ? -1 / 0 : b;
              e += d(2, c), m -= i
            }
            return (l ? -1 : 1) * e * d(2, m - c)
          }
        }
      }, 8361: function (a, b, c) {
        var d = c(7293), e = c(4326), f = "".split;
        a.exports = d(function () {
          return !Object("z").propertyIsEnumerable(0)
        }) ? function (a) {
          return "String" == e(a) ? f.call(a, "") : Object(a)
        } : Object
      }, 9587: function (a, b, c) {
        var d = c(111), e = c(7674);
        a.exports = function (a, b, c) {
          var f, g;
          return e && "function" == typeof (f = b.constructor) && f !== c && d(g = f.prototype) && g !== c.prototype && e(a, g), a
        }
      }, 2788: function (a, b, c) {
        var d = c(5465), e = Function.toString;
        "function" != typeof d.inspectSource && (d.inspectSource = function (a) {
          return e.call(a)
        }), a.exports = d.inspectSource
      }, 2423: function (a, b, c) {
        var d = c(3501), e = c(111), f = c(6656), g = c(3070).f, h = c(9711), i = c(6677), j = h("meta"), k = 0,
          l = Object.isExtensible || function () {
            return !0
          }, m = function (a) {
            g(a, j, {value: {objectID: "O" + ++k, weakData: {}}})
          }, n = a.exports = {
            REQUIRED: !1, fastKey: function (a, b) {
              if (!e(a)) return "symbol" == typeof a ? a : ("string" == typeof a ? "S" : "P") + a;
              if (!f(a, j)) {
                if (!l(a)) return "F";
                if (!b) return "E";
                m(a)
              }
              return a[j].objectID
            }, getWeakData: function (a, b) {
              if (!f(a, j)) {
                if (!l(a)) return !0;
                if (!b) return !1;
                m(a)
              }
              return a[j].weakData
            }, onFreeze: function (a) {
              return i && n.REQUIRED && l(a) && !f(a, j) && m(a), a
            }
          };
        d[j] = !0
      }, 9909: function (a, b, c) {
        var d, e, f, g = c(8536), h = c(7854), i = c(111), j = c(8880), k = c(6656), l = c(6200), m = c(3501),
          n = h.WeakMap;
        if (g) {
          var o = new n, p = o.get, q = o.has, r = o.set;
          d = function (a, b) {
            return r.call(o, a, b), b
          }, e = function (a) {
            return p.call(o, a) || {}
          }, f = function (a) {
            return q.call(o, a)
          }
        } else {
          var s = l("state");
          m[s] = !0, d = function (a, b) {
            return j(a, s, b), b
          }, e = function (a) {
            return k(a, s) ? a[s] : {}
          }, f = function (a) {
            return k(a, s)
          }
        }
        a.exports = {
          set: d, get: e, has: f, enforce: function (a) {
            return f(a) ? e(a) : d(a, {})
          }, getterFor: function (a) {
            return function (b) {
              var c;
              if (!i(b) || (c = e(b)).type !== a) throw TypeError("Incompatible receiver, " + a + " required");
              return c
            }
          }
        }
      }, 7659: function (a, b, c) {
        var d = c(5112), e = c(7497), f = d("iterator"), g = Array.prototype;
        a.exports = function (a) {
          return void 0 !== a && (e.Array === a || g[f] === a)
        }
      }, 3157: function (a, b, c) {
        var d = c(4326);
        a.exports = Array.isArray || function (a) {
          return "Array" == d(a)
        }
      }, 4705: function (a, b, c) {
        var d = c(7293), e = /#|\.prototype\./, f = function (a, b) {
          var c = h[g(a)];
          return c == j || c != i && ("function" == typeof b ? d(b) : !!b)
        }, g = f.normalize = function (a) {
          return String(a).replace(e, ".").toLowerCase()
        }, h = f.data = {}, i = f.NATIVE = "N", j = f.POLYFILL = "P";
        a.exports = f
      }, 111: function (a) {
        a.exports = function (a) {
          return "object" == typeof a ? null !== a : "function" == typeof a
        }
      }, 1913: function (a) {
        a.exports = !1
      }, 7850: function (a, b, c) {
        var d = c(111), e = c(4326), f = c(5112)("match");
        a.exports = function (a) {
          var b;
          return d(a) && (void 0 !== (b = a[f]) ? !!b : "RegExp" == e(a))
        }
      }, 408: function (a, b, c) {
        var d = c(9670), e = c(7659), f = c(7466), g = c(9974), h = c(1246), i = c(3411), j = function (a, b) {
          this.stopped = a, this.result = b
        };
        (a.exports = function (a, b, c, k, l) {
          var m, n, o, p, q, r, s, t = g(b, c, k ? 2 : 1);
          if (l) m = a; else {
            if ("function" != typeof (n = h(a))) throw TypeError("Target is not iterable");
            if (e(n)) {
              for (o = 0, p = f(a.length); p > o; o++) if ((q = k ? t(d(s = a[o])[0], s[1]) : t(a[o])) && q instanceof j) return q;
              return new j(!1)
            }
            m = n.call(a)
          }
          for (r = m.next; !(s = r.call(m)).done;) if ("object" == typeof (q = i(m, t, s.value, k)) && q && q instanceof j) return q;
          return new j(!1)
        }).stop = function (a) {
          return new j(!0, a)
        }
      }, 3383: function (a, b, c) {
        "use strict";
        var d, e, f, g = c(9518), h = c(8880), i = c(6656), j = c(5112), k = c(1913), l = j("iterator"), m = !1;
        [].keys && ("next" in (f = [].keys()) ? (e = g(g(f))) !== Object.prototype && (d = e) : m = !0), null == d && (d = {}), k || i(d, l) || h(d, l, function () {
          return this
        }), a.exports = {IteratorPrototype: d, BUGGY_SAFARI_ITERATORS: m}
      }, 7497: function (a) {
        a.exports = {}
      }, 6130: function (a, b, c) {
        var d = c(4310), e = Math.abs, f = Math.pow, g = f(2, -52), h = f(2, -23), i = f(2, 127) * (2 - h),
          j = f(2, -126);
        a.exports = Math.fround || function (a) {
          var b, c, f = e(a), k = d(a);
          return j > f ? k * (f / j / h + 1 / g - 1 / g) * j * h : (c = (b = (1 + h / g) * f) - (b - f)) > i || c != c ? k * (1 / 0) : k * c
        }
      }, 4310: function (a) {
        a.exports = Math.sign || function (a) {
          return 0 == (a = +a) || a != a ? a : 0 > a ? -1 : 1
        }
      }, 5948: function (a, b, c) {
        var d, e, f, g, h, i, j, k, l = c(7854), m = c(1236).f, n = c(4326), o = c(261).set, p = c(6833),
          q = l.MutationObserver || l.WebKitMutationObserver, r = l.process, s = l.Promise, t = "process" == n(r),
          u = m(l, "queueMicrotask"), v = u && u.value;
        v || (d = function () {
          var a, b;
          for (t && (a = r.domain) && a.exit(); e;) {
            b = e.fn, e = e.next;
            try {
              b()
            } catch (a) {
              throw e ? g() : f = void 0, a
            }
          }
          f = void 0, a && a.enter()
        }, t ? g = function () {
          r.nextTick(d)
        } : q && !p ? (h = !0, i = document.createTextNode(""), new q(d).observe(i, {characterData: !0}), g = function () {
          i.data = h = !h
        }) : s && s.resolve ? (j = s.resolve(void 0), k = j.then, g = function () {
          k.call(j, d)
        }) : g = function () {
          o.call(l, d)
        }), a.exports = v || function (a) {
          var b = {fn: a, next: void 0};
          f && (f.next = b), e || (e = b, g()), f = b
        }
      }, 3366: function (a, b, c) {
        var d = c(7854);
        a.exports = d.Promise
      }, 133: function (a, b, c) {
        var d = c(7293);
        a.exports = !!Object.getOwnPropertySymbols && !d(function () {
          return !String(Symbol())
        })
      }, 8536: function (a, b, c) {
        var d = c(7854), e = c(2788), f = d.WeakMap;
        a.exports = "function" == typeof f && /native code/.test(e(f))
      }, 8523: function (a, b, c) {
        "use strict";
        var d = c(3099), e = function (a) {
          var b, c;
          this.promise = new a(function (a, d) {
            if (void 0 !== b || void 0 !== c) throw TypeError("Bad Promise constructor");
            b = a, c = d
          }), this.resolve = d(b), this.reject = d(c)
        };
        a.exports.f = function (a) {
          return new e(a)
        }
      }, 3929: function (a, b, c) {
        var d = c(7850);
        a.exports = function (a) {
          if (d(a)) throw TypeError("The method doesn't accept regular expressions");
          return a
        }
      }, 1574: function (a, b, c) {
        "use strict";
        var d = c(9781), e = c(7293), f = c(1956), g = c(5181), h = c(5296), i = c(7908), j = c(8361),
          k = Object.assign, l = Object.defineProperty;
        a.exports = !k || e(function () {
          if (d && 1 !== k({b: 1}, k(l({}, "a", {
            enumerable: !0, get: function () {
              l(this, "b", {value: 3, enumerable: !1})
            }
          }), {b: 2})).b) return !0;
          var a = {}, b = {}, c = Symbol(), e = "abcdefghijklmnopqrst";
          return a[c] = 7, e.split("").forEach(function (a) {
            b[a] = a
          }), 7 != k({}, a)[c] || f(k({}, b)).join("") != e
        }) ? function (a) {
          for (var b = i(a), c = arguments.length, e = 1, k = g.f, l = h.f; c > e;) for (var m, n = j(arguments[e++]), o = k ? f(n).concat(k(n)) : f(n), p = o.length, q = 0; p > q;) m = o[q++], d && !l.call(n, m) || (b[m] = n[m]);
          return b
        } : k
      }, 30: function (a, b, c) {
        var d, e = c(9670), f = c(6048), g = c(748), h = c(3501), i = c(490), j = c(317), k = c(6200)("IE_PROTO"),
          l = function () {
          }, m = function (a) {
            return "<script>" + a + "</script>"
          }, n = function () {
            try {
              d = document.domain && new ActiveXObject("htmlfile")
            } catch (a) {
            }
            var a, b;
            n = d ? function (a) {
              a.write(m("")), a.close();
              var b = a.parentWindow.Object;
              return a = null, b
            }(d) : ((b = j("iframe")).style.display = "none", i.appendChild(b), b.src = String("javascript:"), (a = b.contentWindow.document).open(), a.write(m("document.F=Object")), a.close(), a.F);
            for (var c = g.length; c--;) delete n.prototype[g[c]];
            return n()
          };
        h[k] = !0, a.exports = Object.create || function (a, b) {
          var c;
          return null !== a ? (l.prototype = e(a), c = new l, l.prototype = null, c[k] = a) : c = n(), void 0 === b ? c : f(c, b)
        }
      }, 6048: function (a, b, c) {
        var d = c(9781), e = c(3070), f = c(9670), g = c(1956);
        a.exports = d ? Object.defineProperties : function (a, b) {
          f(a);
          for (var c, d = g(b), h = d.length, i = 0; h > i;) e.f(a, c = d[i++], b[c]);
          return a
        }
      }, 3070: function (a, b, c) {
        var d = c(9781), e = c(4664), f = c(9670), g = c(7593), h = Object.defineProperty;
        b.f = d ? h : function (a, b, c) {
          if (f(a), b = g(b, !0), f(c), e) try {
            return h(a, b, c)
          } catch (a) {
          }
          if ("get" in c || "set" in c) throw TypeError("Accessors not supported");
          return "value" in c && (a[b] = c.value), a
        }
      }, 1236: function (a, b, c) {
        var d = c(9781), e = c(5296), f = c(9114), g = c(5656), h = c(7593), i = c(6656), j = c(4664),
          k = Object.getOwnPropertyDescriptor;
        b.f = d ? k : function (a, b) {
          if (a = g(a), b = h(b, !0), j) try {
            return k(a, b)
          } catch (a) {
          }
          return i(a, b) ? f(!e.f.call(a, b), a[b]) : void 0
        }
      }, 1156: function (a, b, c) {
        var d = c(5656), e = c(8006).f, f = {}.toString,
          g = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        a.exports.f = function (a) {
          return g && "[object Window]" == f.call(a) ? function (a) {
            try {
              return e(a)
            } catch (a) {
              return g.slice()
            }
          }(a) : e(d(a))
        }
      }, 8006: function (a, b, c) {
        var d = c(6324), e = c(748).concat("length", "prototype");
        b.f = Object.getOwnPropertyNames || function (a) {
          return d(a, e)
        }
      }, 5181: function (a, b) {
        b.f = Object.getOwnPropertySymbols
      }, 9518: function (a, b, c) {
        var d = c(6656), e = c(7908), f = c(6200), g = c(8544), h = f("IE_PROTO"), i = Object.prototype;
        a.exports = g ? Object.getPrototypeOf : function (a) {
          return a = e(a), d(a, h) ? a[h] : "function" == typeof a.constructor && a instanceof a.constructor ? a.constructor.prototype : a instanceof Object ? i : null
        }
      }, 6324: function (a, b, c) {
        var d = c(6656), e = c(5656), f = c(1318).indexOf, g = c(3501);
        a.exports = function (a, b) {
          var c, h = e(a), i = 0, j = [];
          for (c in h) !d(g, c) && d(h, c) && j.push(c);
          for (; b.length > i;) d(h, c = b[i++]) && (~f(j, c) || j.push(c));
          return j
        }
      }, 1956: function (a, b, c) {
        var d = c(6324), e = c(748);
        a.exports = Object.keys || function (a) {
          return d(a, e)
        }
      }, 5296: function (a, b) {
        "use strict";
        var c = {}.propertyIsEnumerable, d = Object.getOwnPropertyDescriptor, e = d && !c.call({1: 2}, 1);
        b.f = e ? function (a) {
          var b = d(this, a);
          return !!b && b.enumerable
        } : c
      }, 7674: function (a, b, c) {
        var d = c(9670), e = c(6077);
        a.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
          var a, b = !1, c = {};
          try {
            (a = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(c, []), b = c instanceof Array
          } catch (a) {
          }
          return function (c, f) {
            return d(c), e(f), b ? a.call(c, f) : c.__proto__ = f, c
          }
        }() : void 0)
      }, 4699: function (a, b, c) {
        var d = c(9781), e = c(1956), f = c(5656), g = c(5296).f, h = function (a) {
          return function (b) {
            for (var c, h = f(b), i = e(h), j = i.length, k = 0, l = []; j > k;) c = i[k++], d && !g.call(h, c) || l.push(a ? [c, h[c]] : h[c]);
            return l
          }
        };
        a.exports = {entries: h(!0), values: h(!1)}
      }, 288: function (a, b, c) {
        "use strict";
        var d = c(1694), e = c(648);
        a.exports = d ? {}.toString : function () {
          return "[object " + e(this) + "]"
        }
      }, 3887: function (a, b, c) {
        var d = c(5005), e = c(8006), f = c(5181), g = c(9670);
        a.exports = d("Reflect", "ownKeys") || function (a) {
          var b = e.f(g(a)), c = f.f;
          return c ? b.concat(c(a)) : b
        }
      }, 857: function (a, b, c) {
        var d = c(7854);
        a.exports = d
      }, 2534: function (a) {
        a.exports = function (a) {
          try {
            return {error: !1, value: a()}
          } catch (a) {
            return {error: !0, value: a}
          }
        }
      }, 9478: function (a, b, c) {
        var d = c(9670), e = c(111), f = c(8523);
        a.exports = function (a, b) {
          if (d(a), e(b) && b.constructor === a) return b;
          var c = f.f(a);
          return c.resolve(b), c.promise
        }
      }, 2248: function (a, b, c) {
        var d = c(1320);
        a.exports = function (a, b, c) {
          for (var e in b) d(a, e, b[e], c);
          return a
        }
      }, 1320: function (a, b, c) {
        var d = c(7854), e = c(8880), f = c(6656), g = c(3505), h = c(2788), i = c(9909), j = i.get, k = i.enforce,
          l = String(String).split("String");
        (a.exports = function (a, b, c, h) {
          var i = !!h && !!h.unsafe, j = !!h && !!h.enumerable, m = !!h && !!h.noTargetGet;
          "function" == typeof c && ("string" != typeof b || f(c, "name") || e(c, "name", b), k(c).source = l.join("string" == typeof b ? b : "")), a !== d ? (i ? !m && a[b] && (j = !0) : delete a[b], j ? a[b] = c : e(a, b, c)) : j ? a[b] = c : g(b, c)
        })(Function.prototype, "toString", function () {
          return "function" == typeof this && j(this).source || h(this)
        })
      }, 7651: function (a, b, c) {
        var d = c(4326), e = c(2261);
        a.exports = function (a, b) {
          var c = a.exec;
          if ("function" == typeof c) {
            var f = c.call(a, b);
            if ("object" != typeof f) throw TypeError("RegExp exec method returned something other than an Object or null");
            return f
          }
          if ("RegExp" !== d(a)) throw TypeError("RegExp#exec called on incompatible receiver");
          return e.call(a, b)
        }
      }, 2261: function (a, b, c) {
        "use strict";
        var d, e, f = c(7066), g = c(2999), h = RegExp.prototype.exec, i = String.prototype.replace, j = h,
          k = (d = /a/, e = /b*/g, h.call(d, "a"), h.call(e, "a"), 0 !== d.lastIndex || 0 !== e.lastIndex),
          l = g.UNSUPPORTED_Y || g.BROKEN_CARET, m = void 0 !== /()??/.exec("")[1];
        (k || m || l) && (j = function (a) {
          var b, c, d, e, g = this, j = l && g.sticky, n = f.call(g), o = g.source, p = 0, q = a;
          return j && (-1 === (n = n.replace("y", "")).indexOf("g") && (n += "g"), q = String(a).slice(g.lastIndex), g.lastIndex > 0 && (!g.multiline || g.multiline && "\n" !== a[g.lastIndex - 1]) && (o = "(?: " + o + ")", q = " " + q, p++), c = new RegExp("^(?:" + o + ")", n)), m && (c = new RegExp("^" + o + "$(?!\\s)", n)), k && (b = g.lastIndex), d = h.call(j ? c : g, q), j ? d ? (d.input = d.input.slice(p), d[0] = d[0].slice(p), d.index = g.lastIndex, g.lastIndex += d[0].length) : g.lastIndex = 0 : k && d && (g.lastIndex = g.global ? d.index + d[0].length : b), m && d && d.length > 1 && i.call(d[0], c, function () {
            for (e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (d[e] = void 0)
          }), d
        }), a.exports = j
      }, 7066: function (a, b, c) {
        "use strict";
        var d = c(9670);
        a.exports = function () {
          var a = d(this), b = "";
          return a.global && (b += "g"), a.ignoreCase && (b += "i"), a.multiline && (b += "m"), a.dotAll && (b += "s"), a.unicode && (b += "u"), a.sticky && (b += "y"), b
        }
      }, 2999: function (a, b, c) {
        "use strict";

        function d(a, b) {
          return RegExp(a, b)
        }

        var e = c(7293);
        b.UNSUPPORTED_Y = e(function () {
          var a = d("a", "y");
          return a.lastIndex = 2, null != a.exec("abcd")
        }), b.BROKEN_CARET = e(function () {
          var a = d("^r", "gy");
          return a.lastIndex = 2, null != a.exec("str")
        })
      }, 4488: function (a) {
        a.exports = function (a) {
          if (null == a) throw TypeError("Can't call method on " + a);
          return a
        }
      }, 3505: function (a, b, c) {
        var d = c(7854), e = c(8880);
        a.exports = function (a, b) {
          try {
            e(d, a, b)
          } catch (c) {
            d[a] = b
          }
          return b
        }
      }, 6340: function (a, b, c) {
        "use strict";
        var d = c(5005), e = c(3070), f = c(5112), g = c(9781), h = f("species");
        a.exports = function (a) {
          var b = d(a), c = e.f;
          g && b && !b[h] && c(b, h, {
            configurable: !0, get: function () {
              return this
            }
          })
        }
      }, 8003: function (a, b, c) {
        var d = c(3070).f, e = c(6656), f = c(5112)("toStringTag");
        a.exports = function (a, b, c) {
          a && !e(a = c ? a : a.prototype, f) && d(a, f, {configurable: !0, value: b})
        }
      }, 6200: function (a, b, c) {
        var d = c(2309), e = c(9711), f = d("keys");
        a.exports = function (a) {
          return f[a] || (f[a] = e(a))
        }
      }, 5465: function (a, b, c) {
        var d = c(7854), e = c(3505), f = "__core-js_shared__", g = d[f] || e(f, {});
        a.exports = g
      }, 2309: function (a, b, c) {
        var d = c(1913), e = c(5465);
        (a.exports = function (a, b) {
          return e[a] || (e[a] = void 0 !== b ? b : {})
        })("versions", []).push({
          version: "3.6.5",
          mode: d ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
      }, 6707: function (a, b, c) {
        var d = c(9670), e = c(3099), f = c(5112)("species");
        a.exports = function (a, b) {
          var c, g = d(a).constructor;
          return void 0 === g || null == (c = d(g)[f]) ? b : e(c)
        }
      }, 8710: function (a, b, c) {
        var d = c(9958), e = c(4488), f = function (a) {
          return function (b, c) {
            var f, g, h = String(e(b)), i = d(c), j = h.length;
            return 0 > i || i >= j ? a ? "" : void 0 : (f = h.charCodeAt(i)) < 55296 || f > 56319 || i + 1 === j || (g = h.charCodeAt(i + 1)) < 56320 || g > 57343 ? a ? h.charAt(i) : f : a ? h.slice(i, i + 2) : g - 56320 + (f - 55296 << 10) + 65536
          }
        };
        a.exports = {codeAt: f(!1), charAt: f(!0)}
      }, 261: function (a, b, c) {
        var d, e, f, g = c(7854), h = c(7293), i = c(4326), j = c(9974), k = c(490), l = c(317), m = c(6833),
          n = g.location, o = g.setImmediate, p = g.clearImmediate, q = g.process, r = g.MessageChannel, s = g.Dispatch,
          t = 0, u = {}, v = function (a) {
            if (u.hasOwnProperty(a)) {
              var b = u[a];
              delete u[a], b()
            }
          }, w = function (a) {
            return function () {
              v(a)
            }
          }, x = function (a) {
            v(a.data)
          }, y = function (a) {
            g.postMessage(a + "", n.protocol + "//" + n.host)
          };
        o && p || (o = function (a) {
          for (var b = [], c = 1; arguments.length > c;) b.push(arguments[c++]);
          return u[++t] = function () {
            ("function" == typeof a ? a : Function(a)).apply(void 0, b)
          }, d(t), t
        }, p = function (a) {
          delete u[a]
        }, "process" == i(q) ? d = function (a) {
          q.nextTick(w(a))
        } : s && s.now ? d = function (a) {
          s.now(w(a))
        } : r && !m ? (f = (e = new r).port2, e.port1.onmessage = x, d = j(f.postMessage, f, 1)) : !g.addEventListener || "function" != typeof postMessage || g.importScripts || h(y) || "file:" === n.protocol ? d = "onreadystatechange" in l("script") ? function (a) {
          k.appendChild(l("script")).onreadystatechange = function () {
            k.removeChild(this), v(a)
          }
        } : function (a) {
          setTimeout(w(a), 0)
        } : (d = y, g.addEventListener("message", x, !1))), a.exports = {set: o, clear: p}
      }, 1400: function (a, b, c) {
        var d = c(9958), e = Math.max, f = Math.min;
        a.exports = function (a, b) {
          var c = d(a);
          return 0 > c ? e(c + b, 0) : f(c, b)
        }
      }, 7067: function (a, b, c) {
        var d = c(9958), e = c(7466);
        a.exports = function (a) {
          if (void 0 === a) return 0;
          var b = d(a), c = e(b);
          if (b !== c) throw RangeError("Wrong length or index");
          return c
        }
      }, 5656: function (a, b, c) {
        var d = c(8361), e = c(4488);
        a.exports = function (a) {
          return d(e(a))
        }
      }, 9958: function (a) {
        var b = Math.ceil, c = Math.floor;
        a.exports = function (a) {
          return isNaN(a = +a) ? 0 : (a > 0 ? c : b)(a)
        }
      }, 7466: function (a, b, c) {
        var d = c(9958), e = Math.min;
        a.exports = function (a) {
          return a > 0 ? e(d(a), 9007199254740991) : 0
        }
      }, 7908: function (a, b, c) {
        var d = c(4488);
        a.exports = function (a) {
          return Object(d(a))
        }
      }, 4590: function (a, b, c) {
        var d = c(3002);
        a.exports = function (a, b) {
          var c = d(a);
          if (c % b) throw RangeError("Wrong offset");
          return c
        }
      }, 3002: function (a, b, c) {
        var d = c(9958);
        a.exports = function (a) {
          var b = d(a);
          if (0 > b) throw RangeError("The argument can't be less than 0");
          return b
        }
      }, 7593: function (a, b, c) {
        var d = c(111);
        a.exports = function (a, b) {
          if (!d(a)) return a;
          var c, e;
          if (b && "function" == typeof (c = a.toString) && !d(e = c.call(a))) return e;
          if ("function" == typeof (c = a.valueOf) && !d(e = c.call(a))) return e;
          if (!b && "function" == typeof (c = a.toString) && !d(e = c.call(a))) return e;
          throw TypeError("Can't convert object to primitive value")
        }
      }, 1694: function (a, b, c) {
        var d = {};
        d[c(5112)("toStringTag")] = "z", a.exports = "[object z]" === String(d)
      }, 9843: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(7854), f = c(9781), g = c(3832), h = c(260), i = c(3331), j = c(5787), k = c(9114),
          l = c(8880), m = c(7466), n = c(7067), o = c(4590), p = c(7593), q = c(6656), r = c(648), s = c(111),
          t = c(30), u = c(7674), v = c(8006).f, w = c(7321), x = c(2092).forEach, y = c(6340), z = c(3070),
          A = c(1236), B = c(9909), C = c(9587), D = B.get, E = B.set, F = z.f, G = A.f, H = Math.round,
          I = e.RangeError, J = i.ArrayBuffer, K = i.DataView, L = h.NATIVE_ARRAY_BUFFER_VIEWS, M = h.TYPED_ARRAY_TAG,
          N = h.TypedArray, O = h.TypedArrayPrototype, P = h.aTypedArrayConstructor, Q = h.isTypedArray,
          R = "BYTES_PER_ELEMENT", S = "Wrong length", T = function (a, b) {
            for (var c = 0, d = b.length, e = new (P(a))(d); d > c;) e[c] = b[c++];
            return e
          }, U = function (a, b) {
            F(a, b, {
              get: function () {
                return D(this)[b]
              }
            })
          }, V = function (a) {
            var b;
            return a instanceof J || "ArrayBuffer" == (b = r(a)) || "SharedArrayBuffer" == b
          }, W = function (a, b) {
            return Q(a) && "symbol" != typeof b && b in a && String(+b) == String(b)
          }, X = function (a, b) {
            return W(a, b = p(b, !0)) ? k(2, a[b]) : G(a, b)
          }, Y = function (a, b, c) {
            return !(W(a, b = p(b, !0)) && s(c) && q(c, "value")) || q(c, "get") || q(c, "set") || c.configurable || q(c, "writable") && !c.writable || q(c, "enumerable") && !c.enumerable ? F(a, b, c) : (a[b] = c.value, a)
          };
        f ? (L || (A.f = X, z.f = Y, U(O, "buffer"), U(O, "byteOffset"), U(O, "byteLength"), U(O, "length")), d({
          target: "Object",
          stat: !0,
          forced: !L
        }, {getOwnPropertyDescriptor: X, defineProperty: Y}), a.exports = function (a, b, c) {
          var f = a.match(/\d+$/)[0] / 8, h = a + (c ? "Clamped" : "") + "Array", i = "get" + a, k = "set" + a,
            p = e[h], q = p, r = q && q.prototype, z = {}, A = function (a, b) {
              F(a, b, {
                get: function () {
                  return function (a, b) {
                    var c = D(a);
                    return c.view[i](b * f + c.byteOffset, !0)
                  }(this, b)
                }, set: function (a) {
                  return function (a, b, d) {
                    var e = D(a);
                    c && (d = (d = H(d)) < 0 ? 0 : d > 255 ? 255 : 255 & d), e.view[k](b * f + e.byteOffset, d, !0)
                  }(this, b, a)
                }, enumerable: !0
              })
            };
          L ? g && (q = b(function (a, b, c, d) {
            return j(a, q, h), C(s(b) ? V(b) ? void 0 !== d ? new p(b, o(c, f), d) : void 0 !== c ? new p(b, o(c, f)) : new p(b) : Q(b) ? T(q, b) : w.call(q, b) : new p(n(b)), a, q)
          }), u && u(q, N), x(v(p), function (a) {
            a in q || l(q, a, p[a])
          }), q.prototype = r) : (q = b(function (a, b, c, d) {
            j(a, q, h);
            var e, g, i, k = 0, l = 0;
            if (s(b)) {
              if (!V(b)) return Q(b) ? T(q, b) : w.call(q, b);
              e = b, l = o(c, f);
              var p = b.byteLength;
              if (void 0 === d) {
                if (p % f) throw I(S);
                if ((g = p - l) < 0) throw I(S)
              } else if ((g = m(d) * f) + l > p) throw I(S);
              i = g / f
            } else i = n(b), e = new J(g = i * f);
            for (E(a, {buffer: e, byteOffset: l, byteLength: g, length: i, view: new K(e)}); i > k;) A(a, k++)
          }), u && u(q, N), r = q.prototype = t(O)), r.constructor !== q && l(r, "constructor", q), M && l(r, M, h), z[h] = q, d({
            global: !0,
            forced: q != p,
            sham: !L
          }, z), R in q || l(q, R, f), R in r || l(r, R, f), y(h)
        }) : a.exports = function () {
        }
      }, 3832: function (a, b, c) {
        var d = c(7854), e = c(7293), f = c(7072), g = c(260).NATIVE_ARRAY_BUFFER_VIEWS, h = d.ArrayBuffer,
          i = d.Int8Array;
        a.exports = !g || !e(function () {
          i(1)
        }) || !e(function () {
          new i(-1)
        }) || !f(function (a) {
          new i, new i(null), new i(1.5), new i(a)
        }, !0) || e(function () {
          return 1 !== new i(new h(2), 1, void 0).length
        })
      }, 7321: function (a, b, c) {
        var d = c(7908), e = c(7466), f = c(1246), g = c(7659), h = c(9974), i = c(260).aTypedArrayConstructor;
        a.exports = function (a) {
          var b, c, j, k, l, m, n = d(a), o = arguments.length, p = o > 1 ? arguments[1] : void 0, q = void 0 !== p,
            r = f(n);
          if (null != r && !g(r)) for (m = (l = r.call(n)).next, n = []; !(k = m.call(l)).done;) n.push(k.value);
          for (q && o > 2 && (p = h(p, arguments[2], 2)), c = e(n.length), j = new (i(this))(c), b = 0; c > b; b++) j[b] = q ? p(n[b], b) : n[b];
          return j
        }
      }, 9711: function (a) {
        var b = 0, c = Math.random();
        a.exports = function (a) {
          return "Symbol(" + String(void 0 === a ? "" : a) + ")_" + (++b + c).toString(36)
        }
      }, 3307: function (a, b, c) {
        var d = c(133);
        a.exports = d && !Symbol.sham && "symbol" == typeof Symbol.iterator
      }, 6061: function (a, b, c) {
        var d = c(5112);
        b.f = d
      }, 5112: function (a, b, c) {
        var d = c(7854), e = c(2309), f = c(6656), g = c(9711), h = c(133), i = c(3307), j = e("wks"), k = d.Symbol,
          l = i ? k : k && k.withoutSetter || g;
        a.exports = function (a) {
          return f(j, a) || (j[a] = h && f(k, a) ? k[a] : l("Symbol." + a)), j[a]
        }
      }, 2222: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(7293), f = c(3157), g = c(111), h = c(7908), i = c(7466), j = c(6135), k = c(5417),
          l = c(1194), m = c(5112), n = c(7392), o = m("isConcatSpreadable"), p = 9007199254740991,
          q = "Maximum allowed index exceeded", r = n >= 51 || !e(function () {
            var a = [];
            return a[o] = !1, a.concat()[0] !== a
          }), s = l("concat"), t = function (a) {
            if (!g(a)) return !1;
            var b = a[o];
            return void 0 !== b ? !!b : f(a)
          };
        d({target: "Array", proto: !0, forced: !r || !s}, {
          concat: function () {
            var a, b, c, d, e, f = h(this), g = k(f, 0), l = 0;
            for (a = -1, c = arguments.length; c > a; a++) if (t(e = -1 === a ? f : arguments[a])) {
              if (l + (d = i(e.length)) > p) throw TypeError(q);
              for (b = 0; d > b; b++, l++) b in e && j(g, l, e[b])
            } else {
              if (l >= p) throw TypeError(q);
              j(g, l++, e)
            }
            return g.length = l, g
          }
        })
      }, 3290: function (a, b, c) {
        var d = c(2109), e = c(1285), f = c(1223);
        d({target: "Array", proto: !0}, {fill: e}), f("fill")
      }, 7327: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(2092).filter, f = c(1194), g = c(9207), h = f("filter"), i = g("filter");
        d({target: "Array", proto: !0, forced: !h || !i}, {
          filter: function (a) {
            return e(this, a, arguments.length > 1 ? arguments[1] : void 0)
          }
        })
      }, 9826: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(2092).find, f = c(1223), g = c(9207), h = "find", i = !0, j = g(h);
        h in [] && Array(1).find(function () {
          i = !1
        }), d({target: "Array", proto: !0, forced: i || !j}, {
          find: function (a) {
            return e(this, a, arguments.length > 1 ? arguments[1] : void 0)
          }
        }), f(h)
      }, 4944: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(6790), f = c(7908), g = c(7466), h = c(9958), i = c(5417);
        d({target: "Array", proto: !0}, {
          flat: function () {
            var a = arguments.length ? arguments[0] : void 0, b = f(this), c = g(b.length), d = i(b, 0);
            return d.length = e(d, b, b, c, 0, void 0 === a ? 1 : h(a)), d
          }
        })
      }, 1038: function (a, b, c) {
        var d = c(2109), e = c(8457);
        d({
          target: "Array", stat: !0, forced: !c(7072)(function (a) {
            Array.from(a)
          })
        }, {from: e})
      }, 6699: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(1318).includes, f = c(1223);
        d({target: "Array", proto: !0, forced: !c(9207)("indexOf", {ACCESSORS: !0, 1: 0})}, {
          includes: function (a) {
            return e(this, a, arguments.length > 1 ? arguments[1] : void 0)
          }
        }), f("includes")
      }, 6992: function (a, b, c) {
        "use strict";
        var d = c(5656), e = c(1223), f = c(7497), g = c(9909), h = c(654), i = "Array Iterator", j = g.set,
          k = g.getterFor(i);
        a.exports = h(Array, "Array", function (a, b) {
          j(this, {type: i, target: d(a), index: 0, kind: b})
        }, function () {
          var a = k(this), b = a.target, c = a.kind, d = a.index++;
          return !b || d >= b.length ? (a.target = void 0, {value: void 0, done: !0}) : "keys" == c ? {
            value: d,
            done: !1
          } : "values" == c ? {value: b[d], done: !1} : {value: [d, b[d]], done: !1}
        }, "values"), f.Arguments = f.Array, e("keys"), e("values"), e("entries")
      }, 1249: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(2092).map, f = c(1194), g = c(9207), h = f("map"), i = g("map");
        d({target: "Array", proto: !0, forced: !h || !i}, {
          map: function (a) {
            return e(this, a, arguments.length > 1 ? arguments[1] : void 0)
          }
        })
      }, 7042: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(111), f = c(3157), g = c(1400), h = c(7466), i = c(5656), j = c(6135), k = c(5112),
          l = c(1194), m = c(9207), n = l("slice"), o = m("slice", {ACCESSORS: !0, 0: 0, 1: 2}), p = k("species"),
          q = [].slice, r = Math.max;
        d({target: "Array", proto: !0, forced: !n || !o}, {
          slice: function (a, b) {
            var c, d, k, l = i(this), m = h(l.length), n = g(a, m), o = g(void 0 === b ? m : b, m);
            if (f(l) && ("function" != typeof (c = l.constructor) || c !== Array && !f(c.prototype) ? e(c) && null === (c = c[p]) && (c = void 0) : c = void 0, c === Array || void 0 === c)) return q.call(l, n, o);
            for (d = new (void 0 === c ? Array : c)(r(o - n, 0)), k = 0; o > n; n++, k++) n in l && j(d, k, l[n]);
            return d.length = k, d
          }
        })
      }, 3792: function (a, b, c) {
        c(1223)("flat")
      }, 8309: function (a, b, c) {
        var d = c(9781), e = c(3070).f, f = Function.prototype, g = f.toString, h = /^\s*function ([^ (]*)/, i = "name";
        d && !(i in f) && e(f, i, {
          configurable: !0, get: function () {
            try {
              return g.call(this).match(h)[1]
            } catch (a) {
              return ""
            }
          }
        })
      }, 1532: function (a, b, c) {
        "use strict";
        var d = c(7710), e = c(5631);
        a.exports = d("Map", function (a) {
          return function () {
            return a(this, arguments.length ? arguments[0] : void 0)
          }
        }, e)
      }, 4755: function (a, b, c) {
        c(2109)({target: "Math", stat: !0}, {fround: c(6130)})
      }, 332: function (a, b, c) {
        var d = c(2109), e = c(7293), f = Math.imul;
        d({
          target: "Math", stat: !0, forced: e(function () {
            return -5 != f(4294967295, 5) || 2 != f.length
          })
        }, {
          imul: function (a, b) {
            var c = 65535, d = +a, e = +b, f = c & d, g = c & e;
            return 0 | f * g + ((c & d >>> 16) * g + f * (c & e >>> 16) << 16 >>> 0)
          }
        })
      }, 9601: function (a, b, c) {
        var d = c(2109), e = c(1574);
        d({target: "Object", stat: !0, forced: Object.assign !== e}, {assign: e})
      }, 9720: function (a, b, c) {
        var d = c(2109), e = c(4699).entries;
        d({target: "Object", stat: !0}, {
          entries: function (a) {
            return e(a)
          }
        })
      }, 3371: function (a, b, c) {
        var d = c(2109), e = c(6677), f = c(7293), g = c(111), h = c(2423).onFreeze, i = Object.freeze;
        d({
          target: "Object", stat: !0, forced: f(function () {
            i(1)
          }), sham: !e
        }, {
          freeze: function (a) {
            return i && g(a) ? i(h(a)) : a
          }
        })
      }, 8559: function (a, b, c) {
        var d = c(2109), e = c(408), f = c(6135);
        d({target: "Object", stat: !0}, {
          fromEntries: function (a) {
            var b = {};
            return e(a, function (a, c) {
              f(b, a, c)
            }, void 0, !0), b
          }
        })
      }, 5003: function (a, b, c) {
        var d = c(2109), e = c(7293), f = c(5656), g = c(1236).f, h = c(9781), i = e(function () {
          g(1)
        });
        d({target: "Object", stat: !0, forced: !h || i, sham: !h}, {
          getOwnPropertyDescriptor: function (a, b) {
            return g(f(a), b)
          }
        })
      }, 7941: function (a, b, c) {
        var d = c(2109), e = c(7908), f = c(1956);
        d({
          target: "Object", stat: !0, forced: c(7293)(function () {
            f(1)
          })
        }, {
          keys: function (a) {
            return f(e(a))
          }
        })
      }, 1539: function (a, b, c) {
        var d = c(1694), e = c(1320), f = c(288);
        d || e(Object.prototype, "toString", f, {unsafe: !0})
      }, 2479: function (a, b, c) {
        var d = c(2109), e = c(4699).values;
        d({target: "Object", stat: !0}, {
          values: function (a) {
            return e(a)
          }
        })
      }, 8674: function (a, b, c) {
        "use strict";
        var d, e, f, g, h = c(2109), i = c(1913), j = c(7854), k = c(5005), l = c(3366), m = c(1320), n = c(2248),
          o = c(8003), p = c(6340), q = c(111), r = c(3099), s = c(5787), t = c(4326), u = c(2788), v = c(408),
          w = c(7072), x = c(6707), y = c(261).set, z = c(5948), A = c(9478), B = c(842), C = c(8523), D = c(2534),
          E = c(9909), F = c(4705), G = c(5112), H = c(7392), I = G("species"), J = "Promise", K = E.get, L = E.set,
          M = E.getterFor(J), N = l, O = j.TypeError, P = j.document, Q = j.process, R = k("fetch"), S = C.f, T = S,
          U = "process" == t(Q), V = !!(P && P.createEvent && j.dispatchEvent), W = "unhandledrejection",
          X = F(J, function () {
            if (u(N) === String(N)) {
              if (66 === H) return !0;
              if (!U && "function" != typeof PromiseRejectionEvent) return !0
            }
            if (i && !N.prototype.finally) return !0;
            if (H >= 51 && /native code/.test(N)) return !1;
            var a = N.resolve(1), b = function (a) {
              a(function () {
              }, function () {
              })
            };
            return (a.constructor = {})[I] = b, !(a.then(function () {
            }) instanceof b)
          }), Y = X || !w(function (a) {
            N.all(a).catch(function () {
            })
          }), Z = function (a) {
            var b;
            return !(!q(a) || "function" != typeof (b = a.then)) && b
          }, $ = function (a, b, c) {
            if (!b.notified) {
              b.notified = !0;
              var d = b.reactions;
              z(function () {
                for (var a = b.value, e = 1 == b.state, f = 0; d.length > f;) {
                  var g, h, i, j = d[f++], k = e ? j.ok : j.fail, l = j.resolve, m = j.reject, n = j.domain;
                  try {
                    k ? (e || (2 === b.rejection && cb(o, b), b.rejection = 1), !0 === k ? g = a : (n && n.enter(), g = k(a), n && (n.exit(), i = !0)), g === j.promise ? m(O("Promise-chain cycle")) : (h = Z(g)) ? h.call(g, l, m) : l(g)) : m(a)
                  } catch (o) {
                    n && !i && n.exit(), m(o)
                  }
                }
                b.reactions = [], b.notified = !1, c && !b.rejection && ab(o, b)
              })
            }
          }, _ = function (a, b, c) {
            var d, e;
            V ? ((d = P.createEvent("Event")).promise = b, d.reason = c, d.initEvent(a, !1, !0), j.dispatchEvent(d)) : d = {
              promise: b,
              reason: c
            }, (e = j["on" + a]) ? e(d) : a === W && B("Unhandled promise rejection", c)
          }, ab = function (a, b) {
            y.call(j, function () {
              var c, d = b.value;
              if (bb(b) && (c = D(function () {
                U ? Q.emit("unhandledRejection", d, a) : _(W, a, d)
              }), b.rejection = U || bb(b) ? 2 : 1, c.error)) throw c.value
            })
          }, bb = function (a) {
            return 1 !== a.rejection && !a.parent
          }, cb = function (a, b) {
            y.call(j, function () {
              U ? Q.emit("rejectionHandled", a) : _("rejectionhandled", a, b.value)
            })
          }, db = function (a, b, c, d) {
            return function (e) {
              a(b, c, e, d)
            }
          }, eb = function (a, b, c, d) {
            b.done || (b.done = !0, d && (b = d), b.value = c, b.state = 2, $(a, b, !0))
          }, fb = function (a, b, c, d) {
            if (!b.done) {
              b.done = !0, d && (b = d);
              try {
                if (a === c) throw O("Promise can't be resolved itself");
                var e = Z(c);
                e ? z(function () {
                  var c = {done: !1};
                  try {
                    e.call(d, db(fb, a, c, b), db(eb, a, c, b))
                  } catch (d) {
                    eb(a, c, d, b)
                  }
                }) : (b.value = c, b.state = 1, $(a, b, !1))
              } catch (c) {
                eb(a, {done: !1}, c, b)
              }
            }
          };
        X && (N = function (a) {
          s(this, N, J), r(a), d.call(this);
          var b = K(this);
          try {
            a(db(fb, this, b), db(eb, this, b))
          } catch (a) {
            eb(this, b, a)
          }
        }, (d = function () {
          L(this, {type: J, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0})
        }).prototype = n(N.prototype, {
          then: function (a, b) {
            var c = M(this), d = S(x(this, N));
            return d.ok = "function" != typeof a || a, d.fail = "function" == typeof b && b, d.domain = U ? Q.domain : void 0, c.parent = !0, c.reactions.push(d), 0 != c.state && $(this, c, !1), d.promise
          }, "catch": function (a) {
            return this.then(void 0, a)
          }
        }), e = function () {
          var a = new d, b = K(a);
          this.promise = a, this.resolve = db(fb, a, b), this.reject = db(eb, a, b)
        }, C.f = S = function (a) {
          return a === N || a === f ? new e(a) : T(a)
        }, i || "function" != typeof l || (g = l.prototype.then, m(l.prototype, "then", function (a, b) {
          var c = this;
          return new N(function (a, b) {
            g.call(c, a, b)
          }).then(a, b)
        }, {unsafe: !0}), "function" == typeof R && h({global: !0, enumerable: !0, forced: !0}, {
          fetch: function () {
            return A(N, R.apply(j, arguments))
          }
        }))), h({global: !0, wrap: !0, forced: X}, {Promise: N}), o(N, J, !1, !0), p(J), f = k(J), h({
          target: J,
          stat: !0,
          forced: X
        }, {
          reject: function (a) {
            var b = S(this);
            return b.reject.call(void 0, a), b.promise
          }
        }), h({target: J, stat: !0, forced: i || X}, {
          resolve: function (a) {
            return A(i && this === f ? N : this, a)
          }
        }), h({target: J, stat: !0, forced: Y}, {
          all: function (a) {
            var b = this, c = S(b), d = c.resolve, e = c.reject, f = D(function () {
              var c = r(b.resolve), f = [], g = 0, h = 1;
              v(a, function (a) {
                var i = g++, j = !1;
                f.push(void 0), h++, c.call(b, a).then(function (a) {
                  j || (j = !0, f[i] = a, --h || d(f))
                }, e)
              }), --h || d(f)
            });
            return f.error && e(f.value), c.promise
          }, race: function (a) {
            var b = this, c = S(b), d = c.reject, e = D(function () {
              var e = r(b.resolve);
              v(a, function (a) {
                e.call(b, a).then(c.resolve, d)
              })
            });
            return e.error && d(e.value), c.promise
          }
        })
      }, 4916: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(2261);
        d({target: "RegExp", proto: !0, forced: /./.exec !== e}, {exec: e})
      }, 2023: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(3929), f = c(4488);
        d({target: "String", proto: !0, forced: !c(4964)("includes")}, {
          includes: function (a) {
            return !!~String(f(this)).indexOf(e(a), arguments.length > 1 ? arguments[1] : void 0)
          }
        })
      }, 8783: function (a, b, c) {
        "use strict";
        var d = c(8710).charAt, e = c(9909), f = c(654), g = "String Iterator", h = e.set, i = e.getterFor(g);
        f(String, "String", function (a) {
          h(this, {type: g, string: String(a), index: 0})
        }, function () {
          var a, b = i(this), c = b.string, e = b.index;
          return e >= c.length ? {value: void 0, done: !0} : (a = d(c, e), b.index += a.length, {value: a, done: !1})
        })
      }, 3123: function (a, b, c) {
        "use strict";
        var d = c(7007), e = c(7850), f = c(9670), g = c(4488), h = c(6707), i = c(1530), j = c(7466), k = c(7651),
          l = c(2261), m = c(7293), n = [].push, o = Math.min, p = 4294967295, q = !m(function () {
            return !RegExp(p, "y")
          });
        d("split", 2, function (a, b, c) {
          var d;
          return d = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (a, c) {
            var d = String(g(this)), f = void 0 === c ? p : c >>> 0;
            if (0 === f) return [];
            if (void 0 === a) return [d];
            if (!e(a)) return b.call(d, a, f);
            for (var h, i, j, k = [], m = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (a.sticky ? "y" : ""), o = 0, q = new RegExp(a.source, m + "g"); (h = l.call(q, d)) && !((i = q.lastIndex) > o && (k.push(d.slice(o, h.index)), h.length > 1 && h.index < d.length && n.apply(k, h.slice(1)), j = h[0].length, o = i, k.length >= f));) q.lastIndex === h.index && q.lastIndex++;
            return o === d.length ? !j && q.test("") || k.push("") : k.push(d.slice(o)), k.length > f ? k.slice(0, f) : k
          } : "0".split(void 0, 0).length ? function (a, c) {
            return void 0 === a && 0 === c ? [] : b.call(this, a, c)
          } : b, [function (b, c) {
            var e = g(this), f = null == b ? void 0 : b[a];
            return void 0 !== f ? f.call(b, e, c) : d.call(String(e), b, c)
          }, function (a, e) {
            var g = c(d, a, this, e, d !== b);
            if (g.done) return g.value;
            var l = f(a), m = String(this), n = h(l, RegExp), r = l.unicode,
              s = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (q ? "y" : "g"),
              t = new n(q ? l : "^(?:" + l.source + ")", s), u = void 0 === e ? p : e >>> 0;
            if (0 === u) return [];
            if (0 === m.length) return null === k(t, m) ? [m] : [];
            for (var v = 0, w = 0, x = []; w < m.length;) {
              t.lastIndex = q ? w : 0;
              var y, z = k(t, q ? m : m.slice(w));
              if (null === z || (y = o(j(t.lastIndex + (q ? 0 : w)), m.length)) === v) w = i(m, w, r); else {
                if (x.push(m.slice(v, w)), x.length === u) return x;
                for (var A = 1; A <= z.length - 1; A++) if (x.push(z[A]), x.length === u) return x;
                w = v = y
              }
            }
            return x.push(m.slice(v)), x
          }]
        }, !q)
      }, 6755: function (a, b, c) {
        "use strict";
        var d, e = c(2109), f = c(1236).f, g = c(7466), h = c(3929), i = c(4488), j = c(4964), k = c(1913),
          l = "".startsWith, m = Math.min, n = j("startsWith");
        e({
          target: "String",
          proto: !0,
          forced: !(!k && !n && (d = f(String.prototype, "startsWith"), d && !d.writable) || n)
        }, {
          startsWith: function (a) {
            var b = String(i(this));
            h(a);
            var c = g(m(arguments.length > 1 ? arguments[1] : void 0, b.length)), d = String(a);
            return l ? l.call(b, d, c) : b.slice(c, c + d.length) === d
          }
        })
      }, 1817: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(9781), f = c(7854), g = c(6656), h = c(111), i = c(3070).f, j = c(9920), k = f.Symbol;
        if (!(!e || "function" != typeof k || "description" in k.prototype && void 0 === k().description)) {
          var l = {}, m = function () {
            var a = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
              b = this instanceof m ? new k(a) : void 0 === a ? k() : k(a);
            return "" === a && (l[b] = !0), b
          };
          j(m, k);
          var n = m.prototype = k.prototype;
          n.constructor = m;
          var o = n.toString, p = "Symbol(test)" == String(k("test")), q = /^Symbol\((.*)\)[^)]+$/;
          i(n, "description", {
            configurable: !0, get: function () {
              var a = h(this) ? this.valueOf() : this, b = o.call(a);
              if (g(l, a)) return "";
              var c = p ? b.slice(7, -1) : b.replace(q, "$1");
              return "" === c ? void 0 : c
            }
          }), d({global: !0, forced: !0}, {Symbol: m})
        }
      }, 2165: function (a, b, c) {
        c(7235)("iterator")
      }, 2526: function (a, b, c) {
        "use strict";
        var d = c(2109), e = c(7854), f = c(5005), g = c(1913), h = c(9781), i = c(133), j = c(3307), k = c(7293),
          l = c(6656), m = c(3157), n = c(111), o = c(9670), p = c(7908), q = c(5656), r = c(7593), s = c(9114),
          t = c(30), u = c(1956), v = c(8006), w = c(1156), x = c(5181), y = c(1236), z = c(3070), A = c(5296),
          B = c(8880), C = c(1320), D = c(2309), E = c(6200), F = c(3501), G = c(9711), H = c(5112), I = c(6061),
          J = c(7235), K = c(8003), L = c(9909), M = c(2092).forEach, N = E("hidden"), O = "Symbol",
          P = H("toPrimitive"), Q = L.set, R = L.getterFor(O), S = Object.prototype, T = e.Symbol,
          U = f("JSON", "stringify"), V = y.f, W = z.f, X = w.f, Y = A.f, Z = D("symbols"), $ = D("op-symbols"),
          _ = D("string-to-symbol-registry"), ab = D("symbol-to-string-registry"), bb = D("wks"), cb = e.QObject,
          db = !cb || !cb.prototype || !cb.prototype.findChild, eb = h && k(function () {
            return 7 != t(W({}, "a", {
              get: function () {
                return W(this, "a", {value: 7}).a
              }
            })).a
          }) ? function (a, b, c) {
            var d = V(S, b);
            d && delete S[b], W(a, b, c), d && a !== S && W(S, b, d)
          } : W, fb = function (a, b) {
            var c = Z[a] = t(T.prototype);
            return Q(c, {type: O, tag: a, description: b}), h || (c.description = b), c
          }, gb = j ? function (a) {
            return "symbol" == typeof a
          } : function (a) {
            return Object(a) instanceof T
          }, hb = function (a, b, c) {
            a === S && hb($, b, c), o(a);
            var d = r(b, !0);
            return o(c), l(Z, d) ? (c.enumerable ? (l(a, N) && a[N][d] && (a[N][d] = !1), c = t(c, {enumerable: s(0, !1)})) : (l(a, N) || W(a, N, s(1, {})), a[N][d] = !0), eb(a, d, c)) : W(a, d, c)
          }, ib = function (a, b) {
            o(a);
            var c = q(b), d = u(c).concat(mb(c));
            return M(d, function (b) {
              h && !jb.call(c, b) || hb(a, b, c[b])
            }), a
          }, jb = function (a) {
            var b = r(a, !0), c = Y.call(this, b);
            return !(this === S && l(Z, b) && !l($, b) || (c || !l(this, b) || !l(Z, b) || l(this, N) && this[N][b]) && !c)
          }, kb = function (a, b) {
            var c = q(a), d = r(b, !0);
            if (c !== S || !l(Z, d) || l($, d)) {
              var e = V(c, d);
              return !e || !l(Z, d) || l(c, N) && c[N][d] || (e.enumerable = !0), e
            }
          }, lb = function (a) {
            var b = X(q(a)), c = [];
            return M(b, function (a) {
              l(Z, a) || l(F, a) || c.push(a)
            }), c
          }, mb = function (a) {
            var b = a === S, c = X(b ? $ : q(a)), d = [];
            return M(c, function (a) {
              !l(Z, a) || b && !l(S, a) || d.push(Z[a])
            }), d
          };
        i || (T = function () {
          if (this instanceof T) throw TypeError("Symbol is not a constructor");
          var a = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, b = G(a),
            c = function (a) {
              this === S && c.call($, a), l(this, N) && l(this[N], b) && (this[N][b] = !1), eb(this, b, s(1, a))
            };
          return h && db && eb(S, b, {configurable: !0, set: c}), fb(b, a)
        }, C(T.prototype, "toString", function () {
          return R(this).tag
        }), C(T, "withoutSetter", function (a) {
          return fb(G(a), a)
        }), A.f = jb, z.f = hb, y.f = kb, v.f = w.f = lb, x.f = mb, I.f = function (a) {
          return fb(H(a), a)
        }, h && (W(T.prototype, "description", {
          configurable: !0, get: function () {
            return R(this).description
          }
        }), g || C(S, "propertyIsEnumerable", jb, {unsafe: !0}))), d({
          global: !0,
          wrap: !0,
          forced: !i,
          sham: !i
        }, {Symbol: T}), M(u(bb), function (a) {
          J(a)
        }), d({target: O, stat: !0, forced: !i}, {
          "for": function (a) {
            var b = String(a);
            if (l(_, b)) return _[b];
            var c = T(b);
            return _[b] = c, ab[c] = b, c
          }, keyFor: function (a) {
            if (!gb(a)) throw TypeError(a + " is not a symbol");
            return l(ab, a) ? ab[a] : void 0
          }, useSetter: function () {
            db = !0
          }, useSimple: function () {
            db = !1
          }
        }), d({target: "Object", stat: !0, forced: !i, sham: !h}, {
          create: function (a, b) {
            return void 0 === b ? t(a) : ib(t(a), b)
          }, defineProperty: hb, defineProperties: ib, getOwnPropertyDescriptor: kb
        }), d({target: "Object", stat: !0, forced: !i}, {
          getOwnPropertyNames: lb,
          getOwnPropertySymbols: mb
        }), d({
          target: "Object", stat: !0, forced: k(function () {
            x.f(1)
          })
        }, {
          getOwnPropertySymbols: function (a) {
            return x.f(p(a))
          }
        }), U && d({
          target: "JSON", stat: !0, forced: !i || k(function () {
            var a = T();
            return "[null]" != U([a]) || "{}" != U({a: a}) || "{}" != U(Object(a))
          })
        }, {
          stringify: function (a, b) {
            for (var c, d = [a], e = 1; arguments.length > e;) d.push(arguments[e++]);
            return c = b, !n(b) && void 0 === a || gb(a) ? void 0 : (m(b) || (b = function (a, b) {
              return "function" == typeof c && (b = c.call(this, a, b)), gb(b) ? void 0 : b
            }), d[1] = b, U.apply(null, d))
          }
        }), T.prototype[P] || B(T.prototype, P, T.prototype.valueOf), K(T, O), F[N] = !0
      }, 2990: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(1048), f = d.aTypedArray;
        d.exportTypedArrayMethod("copyWithin", function (a, b) {
          return e.call(f(this), a, b, arguments.length > 2 ? arguments[2] : void 0)
        })
      }, 8927: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(2092).every, f = d.aTypedArray;
        d.exportTypedArrayMethod("every", function (a) {
          return e(f(this), a, arguments.length > 1 ? arguments[1] : void 0)
        })
      }, 3105: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(1285), f = d.aTypedArray;
        d.exportTypedArrayMethod("fill", function () {
          return e.apply(f(this), arguments)
        })
      }, 5035: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(2092).filter, f = c(6707), g = d.aTypedArray, h = d.aTypedArrayConstructor;
        d.exportTypedArrayMethod("filter", function (a) {
          for (var b = e(g(this), a, arguments.length > 1 ? arguments[1] : void 0), c = f(this, this.constructor), d = 0, i = b.length, j = new (h(c))(i); i > d;) j[d] = b[d++];
          return j
        })
      }, 7174: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(2092).findIndex, f = d.aTypedArray;
        d.exportTypedArrayMethod("findIndex", function (a) {
          return e(f(this), a, arguments.length > 1 ? arguments[1] : void 0)
        })
      }, 4345: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(2092).find, f = d.aTypedArray;
        d.exportTypedArrayMethod("find", function (a) {
          return e(f(this), a, arguments.length > 1 ? arguments[1] : void 0)
        })
      }, 4197: function (a, b, c) {
        c(9843)("Float32", function (a) {
          return function (b, c, d) {
            return a(this, b, c, d)
          }
        })
      }, 2846: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(2092).forEach, f = d.aTypedArray;
        d.exportTypedArrayMethod("forEach", function (a) {
          e(f(this), a, arguments.length > 1 ? arguments[1] : void 0)
        })
      }, 4731: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(1318).includes, f = d.aTypedArray;
        d.exportTypedArrayMethod("includes", function (a) {
          return e(f(this), a, arguments.length > 1 ? arguments[1] : void 0)
        })
      }, 7209: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(1318).indexOf, f = d.aTypedArray;
        d.exportTypedArrayMethod("indexOf", function (a) {
          return e(f(this), a, arguments.length > 1 ? arguments[1] : void 0)
        })
      }, 5125: function (a, b, c) {
        c(9843)("Int32", function (a) {
          return function (b, c, d) {
            return a(this, b, c, d)
          }
        })
      }, 6319: function (a, b, c) {
        "use strict";
        var d = c(7854), e = c(260), f = c(6992), g = c(5112)("iterator"), h = d.Uint8Array, i = f.values, j = f.keys,
          k = f.entries, l = e.aTypedArray, m = e.exportTypedArrayMethod, n = h && h.prototype[g],
          o = !!n && ("values" == n.name || null == n.name), p = function () {
            return i.call(l(this))
          };
        m("entries", function () {
          return k.call(l(this))
        }), m("keys", function () {
          return j.call(l(this))
        }), m("values", p, !o), m(g, p, !o)
      }, 8867: function (a, b, c) {
        "use strict";
        var d = c(260), e = d.aTypedArray, f = d.exportTypedArrayMethod, g = [].join;
        f("join", function () {
          return g.apply(e(this), arguments)
        })
      }, 7789: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(6583), f = d.aTypedArray;
        d.exportTypedArrayMethod("lastIndexOf", function () {
          return e.apply(f(this), arguments)
        })
      }, 3739: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(2092).map, f = c(6707), g = d.aTypedArray, h = d.aTypedArrayConstructor;
        d.exportTypedArrayMethod("map", function (a) {
          return e(g(this), a, arguments.length > 1 ? arguments[1] : void 0, function (a, b) {
            return new (h(f(a, a.constructor)))(b)
          })
        })
      }, 4483: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(3671).right, f = d.aTypedArray;
        d.exportTypedArrayMethod("reduceRight", function (a) {
          return e(f(this), a, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        })
      }, 9368: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(3671).left, f = d.aTypedArray;
        d.exportTypedArrayMethod("reduce", function (a) {
          return e(f(this), a, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        })
      }, 2056: function (a, b, c) {
        "use strict";
        var d = c(260), e = d.aTypedArray, f = d.exportTypedArrayMethod, g = Math.floor;
        f("reverse", function () {
          for (var a, b = this, c = e(b).length, d = g(c / 2), f = 0; d > f;) a = b[f], b[f++] = b[--c], b[c] = a;
          return b
        })
      }, 3462: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(7466), f = c(4590), g = c(7908), h = c(7293), i = d.aTypedArray;
        d.exportTypedArrayMethod("set", function (a) {
          i(this);
          var b = f(arguments.length > 1 ? arguments[1] : void 0, 1), c = this.length, d = g(a), h = e(d.length), j = 0;
          if (h + b > c) throw RangeError("Wrong length");
          for (; h > j;) this[b + j] = d[j++]
        }, h(function () {
          new Int8Array(1).set({})
        }))
      }, 678: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(6707), f = c(7293), g = d.aTypedArray, h = d.aTypedArrayConstructor,
          i = d.exportTypedArrayMethod, j = [].slice;
        i("slice", function (a, b) {
          for (var c = j.call(g(this), a, b), d = e(this, this.constructor), f = 0, i = c.length, k = new (h(d))(i); i > f;) k[f] = c[f++];
          return k
        }, f(function () {
          new Int8Array(1).slice()
        }))
      }, 7462: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(2092).some, f = d.aTypedArray;
        d.exportTypedArrayMethod("some", function (a) {
          return e(f(this), a, arguments.length > 1 ? arguments[1] : void 0)
        })
      }, 3824: function (a, b, c) {
        "use strict";
        var d = c(260), e = d.aTypedArray, f = d.exportTypedArrayMethod, g = [].sort;
        f("sort", function (a) {
          return g.call(e(this), a)
        })
      }, 5021: function (a, b, c) {
        "use strict";
        var d = c(260), e = c(7466), f = c(1400), g = c(6707), h = d.aTypedArray;
        d.exportTypedArrayMethod("subarray", function (a, b) {
          var c = h(this), d = c.length, i = f(a, d);
          return new (g(c, c.constructor))(c.buffer, c.byteOffset + i * c.BYTES_PER_ELEMENT, e((void 0 === b ? d : f(b, d)) - i))
        })
      }, 2974: function (a, b, c) {
        "use strict";
        var d = c(7854), e = c(260), f = c(7293), g = d.Int8Array, h = e.aTypedArray, i = e.exportTypedArrayMethod,
          j = [].toLocaleString, k = [].slice, l = !!g && f(function () {
            j.call(new g(1))
          });
        i("toLocaleString", function () {
          return j.apply(l ? k.call(h(this)) : h(this), arguments)
        }, f(function () {
          return [1, 2].toLocaleString() != new g([1, 2]).toLocaleString()
        }) || !f(function () {
          g.prototype.toLocaleString.call([1, 2])
        }))
      }, 5016: function (a, b, c) {
        "use strict";
        var d = c(260).exportTypedArrayMethod, e = c(7293), f = c(7854).Uint8Array, g = f && f.prototype || {},
          h = [].toString, i = [].join;
        e(function () {
          h.call({})
        }) && (h = function () {
          return i.call(this)
        });
        var j = g.toString != h;
        d("toString", h, j)
      }, 2472: function (a, b, c) {
        c(9843)("Uint8", function (a) {
          return function (b, c, d) {
            return a(this, b, c, d)
          }
        })
      }, 4129: function (a, b, c) {
        "use strict";
        var d, e = c(7854), f = c(2248), g = c(2423), h = c(7710), i = c(9320), j = c(111), k = c(9909).enforce,
          l = c(8536), m = !e.ActiveXObject && "ActiveXObject" in e, n = Object.isExtensible, o = function (a) {
            return function () {
              return a(this, arguments.length ? arguments[0] : void 0)
            }
          }, p = a.exports = h("WeakMap", o, i);
        if (l && m) {
          d = i.getConstructor(o, "WeakMap", !0), g.REQUIRED = !0;
          var q = p.prototype, r = q.delete, s = q.has, t = q.get, u = q.set;
          f(q, {
            "delete": function (a) {
              if (j(a) && !n(a)) {
                var b = k(this);
                return b.frozen || (b.frozen = new d), r.call(this, a) || b.frozen.delete(a)
              }
              return r.call(this, a)
            }, has: function (a) {
              if (j(a) && !n(a)) {
                var b = k(this);
                return b.frozen || (b.frozen = new d), s.call(this, a) || b.frozen.has(a)
              }
              return s.call(this, a)
            }, get: function (a) {
              if (j(a) && !n(a)) {
                var b = k(this);
                return b.frozen || (b.frozen = new d), s.call(this, a) ? t.call(this, a) : b.frozen.get(a)
              }
              return t.call(this, a)
            }, set: function (a, b) {
              if (j(a) && !n(a)) {
                var c = k(this);
                c.frozen || (c.frozen = new d), s.call(this, a) ? u.call(this, a, b) : c.frozen.set(a, b)
              } else u.call(this, a, b);
              return this
            }
          })
        }
      }, 4747: function (a, b, c) {
        var d = c(7854), e = c(8324), f = c(8533), g = c(8880);
        for (var h in e) {
          var i = d[h], j = i && i.prototype;
          if (j && j.forEach !== f) try {
            g(j, "forEach", f)
          } catch (a) {
            j.forEach = f
          }
        }
      }, 3948: function (a, b, c) {
        var d = c(7854), e = c(8324), f = c(6992), g = c(8880), h = c(5112), i = h("iterator"), j = h("toStringTag"),
          k = f.values;
        for (var l in e) {
          var m = d[l], n = m && m.prototype;
          if (n) {
            if (n[i] !== k) try {
              g(n, i, k)
            } catch (a) {
              n[i] = k
            }
            if (n[j] || g(n, j, l), e[l]) for (var o in f) if (n[o] !== f[o]) try {
              g(n, o, f[o])
            } catch (a) {
              n[o] = f[o]
            }
          }
        }
      }, 8294: function (a, b, c) {
        "use strict";
        !function (a) {
          function b() {
          }

          function c() {
          }

          var d = String.fromCharCode, e = {}.toString, f = e.call(a.SharedArrayBuffer), g = e(), h = a.Uint8Array,
            i = h || Array, j = h ? ArrayBuffer : i, k = j.isView || function (a) {
              return a && "length" in a
            }, l = e.call(j.prototype);
          j = c.prototype;
          var m = a.TextEncoder, n = new (h ? Uint16Array : i)(32);
          b.prototype.decode = function (a) {
            if (!k(a)) {
              var b = e.call(a);
              if (b !== l && b !== f && b !== g) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
              a = h ? new i(a) : a || []
            }
            for (var c, j, m, o = b = "", p = 0, q = 0 | a.length, r = q - 32 | 0, s = 0, t = 0, u = 0, v = -1; q > p;) {
              for (c = r >= p ? 32 : q - p | 0; c > u; p = p + 1 | 0, u = u + 1 | 0) {
                switch ((j = 255 & a[p]) >> 4) {
                  case 15:
                    if (2 != (m = 255 & a[p = p + 1 | 0]) >> 6 || j > 247) {
                      p = p - 1 | 0;
                      break
                    }
                    s = (7 & j) << 6 | 63 & m, t = 5, j = 256;
                  case 14:
                    s <<= 6, s |= (15 & j) << 6 | 63 & (m = 255 & a[p = p + 1 | 0]), t = 2 == m >> 6 ? t + 4 | 0 : 24, j = j + 256 & 768;
                  case 13:
                  case 12:
                    s <<= 6, s |= (31 & j) << 6 | 63 & (m = 255 & a[p = p + 1 | 0]), t = t + 7 | 0, q > p && 2 == m >> 6 && s >> t && 1114112 > s ? (j = s, 0 <= (s = s - 65536 | 0) && (v = 55296 + (s >> 10) | 0, j = 56320 + (1023 & s) | 0, 31 > u ? (n[u] = v, u = u + 1 | 0, v = -1) : (m = v, v = j, j = m))) : (p = p - (j >>= 8) - 1 | 0, j = 65533), s = t = 0, c = r >= p ? 32 : q - p | 0;
                  default:
                    n[u] = j;
                    continue;
                  case 11:
                  case 10:
                  case 9:
                  case 8:
                }
                n[u] = 65533
              }
              if (o += d(n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11], n[12], n[13], n[14], n[15], n[16], n[17], n[18], n[19], n[20], n[21], n[22], n[23], n[24], n[25], n[26], n[27], n[28], n[29], n[30], n[31]), 32 > u && (o = o.slice(0, u - 32 | 0)), q > p) {
                if (n[0] = v, u = ~v >>> 31, v = -1, o.length < b.length) continue
              } else -1 !== v && (o += d(v));
              b += o, o = ""
            }
            return b
          }, j.encode = function (a) {
            var b, c = 0 | (a = void 0 === a ? "" : "" + a).length, d = new i(8 + (c << 1) | 0), e = 0, f = !h;
            for (b = 0; c > b; b = b + 1 | 0, e = e + 1 | 0) {
              var g = 0 | a.charCodeAt(b);
              if (127 >= g) d[e] = g; else {
                if (2047 >= g) d[e] = 192 | g >> 6; else {
                  a:{
                    if (g >= 55296) if (56319 >= g) {
                      var j = 0 | a.charCodeAt(b = b + 1 | 0);
                      if (j >= 56320 && 57343 >= j) {
                        if (65535 < (g = (g << 10) + j - 56613888 | 0)) {
                          d[e] = 240 | g >> 18, d[e = e + 1 | 0] = 128 | g >> 12 & 63, d[e = e + 1 | 0] = 128 | g >> 6 & 63, d[e = e + 1 | 0] = 128 | 63 & g;
                          continue
                        }
                        break a
                      }
                      g = 65533
                    } else 57343 >= g && (g = 65533);
                    !f && e > b << 1 && (e - 7 | 0) > b << 1 && (f = !0, (j = new i(3 * c)).set(d), d = j)
                  }
                  d[e] = 224 | g >> 12, d[e = e + 1 | 0] = 128 | g >> 6 & 63
                }
                d[e = e + 1 | 0] = 128 | 63 & g
              }
            }
            return h ? d.subarray(0, e) : d.slice(0, e)
          }, m || (a.TextDecoder = b, a.TextEncoder = c)
        }("" + void 0 == typeof c.g ? "" + void 0 == typeof self ? this : self : c.g)
      }, 5375: function (a) {
        "use strict";
        a.exports = Math.imul || function (a, b) {
          var c = 65535 & a, d = 65535 & b;
          return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0
        }
      }, 3720: function (a) {
        function b(a, b, c) {
          this.low = 0 | a, this.high = 0 | b, this.unsigned = !!c
        }

        function c(a) {
          return !0 === (a && a.__isLong__)
        }

        function d(a, b) {
          var c, d, e;
          return b ? (e = 0 <= (a >>>= 0) && 256 > a) && (d = k[a]) ? d : (c = f(a, 0 > (0 | a) ? -1 : 0, !0), e && (k[a] = c), c) : (e = -128 <= (a |= 0) && 128 > a) && (d = j[a]) ? d : (c = f(a, 0 > a ? -1 : 0, !1), e && (j[a] = c), c)
        }

        function e(a, b) {
          if (isNaN(a)) return b ? r : q;
          if (b) {
            if (0 > a) return r;
            if (a >= n) return w
          } else {
            if (-o >= a) return x;
            if (a + 1 >= o) return v
          }
          return 0 > a ? e(-a, b).neg() : f(a % m | 0, a / m | 0, b)
        }

        function f(a, c, d) {
          return new b(a, c, d)
        }

        function g(a, b, c) {
          if (0 === a.length) throw Error("empty string");
          if ("NaN" === a || "Infinity" === a || "+Infinity" === a || "-Infinity" === a) return q;
          if ("number" == typeof b ? (c = b, b = !1) : b = !!b, (c = c || 10) < 2 || c > 36) throw RangeError("radix");
          var d;
          if ((d = a.indexOf("-")) > 0) throw Error("interior hyphen");
          if (0 === d) return g(a.substring(1), b, c).neg();
          for (var f = e(l(c, 8)), h = q, i = 0; i < a.length; i += 8) {
            var j = Math.min(8, a.length - i), k = parseInt(a.substring(i, i + j), c);
            if (8 > j) {
              var m = e(l(c, j));
              h = h.mul(m).add(e(k))
            } else h = (h = h.mul(f)).add(e(k))
          }
          return h.unsigned = b, h
        }

        function h(a, b) {
          return "number" == typeof a ? e(a, b) : "string" == typeof a ? g(a, b) : f(a.low, a.high, "boolean" == typeof b ? b : a.unsigned)
        }

        a.exports = b;
        var i = null;
        try {
          i = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
        } catch (a) {
        }
        b.prototype.__isLong__, Object.defineProperty(b.prototype, "__isLong__", {value: !0}), b.isLong = c;
        var j = {}, k = {};
        b.fromInt = d, b.fromNumber = e, b.fromBits = f;
        var l = Math.pow;
        b.fromString = g, b.fromValue = h;
        var m = 4294967296, n = m * m, o = n / 2, p = d(1 << 24), q = d(0);
        b.ZERO = q;
        var r = d(0, !0);
        b.UZERO = r;
        var s = d(1);
        b.ONE = s;
        var t = d(1, !0);
        b.UONE = t;
        var u = d(-1);
        b.NEG_ONE = u;
        var v = f(-1, 2147483647, !1);
        b.MAX_VALUE = v;
        var w = f(-1, -1, !0);
        b.MAX_UNSIGNED_VALUE = w;
        var x = f(0, -2147483648, !1);
        b.MIN_VALUE = x;
        var y = b.prototype;
        y.toInt = function () {
          return this.unsigned ? this.low >>> 0 : this.low
        }, y.toNumber = function () {
          return this.unsigned ? (this.high >>> 0) * m + (this.low >>> 0) : this.high * m + (this.low >>> 0)
        }, y.toString = function (a) {
          if ((a = a || 10) < 2 || a > 36) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative()) {
            if (this.eq(x)) {
              var b = e(a), c = this.div(b), d = c.mul(b).sub(this);
              return c.toString(a) + d.toInt().toString(a)
            }
            return "-" + this.neg().toString(a)
          }
          for (var f = e(l(a, 6), this.unsigned), g = this, h = ""; ;) {
            var i = g.div(f), j = (g.sub(i.mul(f)).toInt() >>> 0).toString(a);
            if ((g = i).isZero()) return j + h;
            for (; j.length < 6;) j = "0" + j;
            h = "" + j + h
          }
        }, y.getHighBits = function () {
          return this.high
        }, y.getHighBitsUnsigned = function () {
          return this.high >>> 0
        }, y.getLowBits = function () {
          return this.low
        }, y.getLowBitsUnsigned = function () {
          return this.low >>> 0
        }, y.getNumBitsAbs = function () {
          if (this.isNegative()) return this.eq(x) ? 64 : this.neg().getNumBitsAbs();
          for (var a = 0 != this.high ? this.high : this.low, b = 31; b > 0 && 0 == (a & 1 << b); b--) ;
          return 0 != this.high ? b + 33 : b + 1
        }, y.isZero = function () {
          return 0 === this.high && 0 === this.low
        }, y.eqz = y.isZero, y.isNegative = function () {
          return !this.unsigned && this.high < 0
        }, y.isPositive = function () {
          return this.unsigned || this.high >= 0
        }, y.isOdd = function () {
          return 1 == (1 & this.low)
        }, y.isEven = function () {
          return 0 == (1 & this.low)
        }, y.equals = function (a) {
          return c(a) || (a = h(a)), (this.unsigned === a.unsigned || this.high >>> 31 != 1 || a.high >>> 31 != 1) && this.high === a.high && this.low === a.low
        }, y.eq = y.equals, y.notEquals = function (a) {
          return !this.eq(a)
        }, y.neq = y.notEquals, y.ne = y.notEquals, y.lessThan = function (a) {
          return this.comp(a) < 0
        }, y.lt = y.lessThan, y.lessThanOrEqual = function (a) {
          return this.comp(a) <= 0
        }, y.lte = y.lessThanOrEqual, y.le = y.lessThanOrEqual, y.greaterThan = function (a) {
          return this.comp(a) > 0
        }, y.gt = y.greaterThan, y.greaterThanOrEqual = function (a) {
          return this.comp(a) >= 0
        }, y.gte = y.greaterThanOrEqual, y.ge = y.greaterThanOrEqual, y.compare = function (a) {
          if (c(a) || (a = h(a)), this.eq(a)) return 0;
          var b = this.isNegative(), d = a.isNegative();
          return b && !d ? -1 : !b && d ? 1 : this.unsigned ? a.high >>> 0 > this.high >>> 0 || a.high === this.high && a.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(a).isNegative() ? -1 : 1
        }, y.comp = y.compare, y.negate = function () {
          return !this.unsigned && this.eq(x) ? x : this.not().add(s)
        }, y.neg = y.negate, y.add = function (a) {
          c(a) || (a = h(a));
          var b = this.high >>> 16, d = 65535 & this.high, e = this.low >>> 16, g = 65535 & this.low, i = a.high >>> 16,
            j = 65535 & a.high, k = a.low >>> 16, l = 0, m = 0, n = 0, o = 0;
          return n += (o += g + (65535 & a.low)) >>> 16, m += (n += e + k) >>> 16, l += (m += d + j) >>> 16, l += b + i, f((n &= 65535) << 16 | (o &= 65535), (l &= 65535) << 16 | (m &= 65535), this.unsigned)
        }, y.subtract = function (a) {
          return c(a) || (a = h(a)), this.add(a.neg())
        }, y.sub = y.subtract, y.multiply = function (a) {
          if (this.isZero()) return q;
          if (c(a) || (a = h(a)), i) return f(i.mul(this.low, this.high, a.low, a.high), i.get_high(), this.unsigned);
          if (a.isZero()) return q;
          if (this.eq(x)) return a.isOdd() ? x : q;
          if (a.eq(x)) return this.isOdd() ? x : q;
          if (this.isNegative()) return a.isNegative() ? this.neg().mul(a.neg()) : this.neg().mul(a).neg();
          if (a.isNegative()) return this.mul(a.neg()).neg();
          if (this.lt(p) && a.lt(p)) return e(this.toNumber() * a.toNumber(), this.unsigned);
          var b = this.high >>> 16, d = 65535 & this.high, g = this.low >>> 16, j = 65535 & this.low, k = a.high >>> 16,
            l = 65535 & a.high, m = a.low >>> 16, n = 65535 & a.low, o = 0, r = 0, s = 0, t = 0;
          return s += (t += j * n) >>> 16, r += (s += g * n) >>> 16, s &= 65535, r += (s += j * m) >>> 16, o += (r += d * n) >>> 16, r &= 65535, o += (r += g * m) >>> 16, r &= 65535, o += (r += j * l) >>> 16, o += b * n + d * m + g * l + j * k, f((s &= 65535) << 16 | (t &= 65535), (o &= 65535) << 16 | (r &= 65535), this.unsigned)
        }, y.mul = y.multiply, y.divide = function (a) {
          if (c(a) || (a = h(a)), a.isZero()) throw Error("division by zero");
          var b, d, g;
          if (i) return this.unsigned || -2147483648 !== this.high || -1 !== a.low || -1 !== a.high ? f((this.unsigned ? i.div_u : i.div_s)(this.low, this.high, a.low, a.high), i.get_high(), this.unsigned) : this;
          if (this.isZero()) return this.unsigned ? r : q;
          if (this.unsigned) {
            if (a.unsigned || (a = a.toUnsigned()), a.gt(this)) return r;
            if (a.gt(this.shru(1))) return t;
            g = r
          } else {
            if (this.eq(x)) return a.eq(s) || a.eq(u) ? x : a.eq(x) ? s : (b = this.shr(1).div(a).shl(1)).eq(q) ? a.isNegative() ? s : u : (d = this.sub(a.mul(b)), g = b.add(d.div(a)));
            if (a.eq(x)) return this.unsigned ? r : q;
            if (this.isNegative()) return a.isNegative() ? this.neg().div(a.neg()) : this.neg().div(a).neg();
            if (a.isNegative()) return this.div(a.neg()).neg();
            g = q
          }
          for (d = this; d.gte(a);) {
            b = Math.max(1, Math.floor(d.toNumber() / a.toNumber()));
            for (var j = Math.ceil(Math.log(b) / Math.LN2), k = 48 >= j ? 1 : l(2, j - 48), m = e(b), n = m.mul(a); n.isNegative() || n.gt(d);) n = (m = e(b -= k, this.unsigned)).mul(a);
            m.isZero() && (m = s), g = g.add(m), d = d.sub(n)
          }
          return g
        }, y.div = y.divide, y.modulo = function (a) {
          return c(a) || (a = h(a)), i ? f((this.unsigned ? i.rem_u : i.rem_s)(this.low, this.high, a.low, a.high), i.get_high(), this.unsigned) : this.sub(this.div(a).mul(a))
        }, y.mod = y.modulo, y.rem = y.modulo, y.not = function () {
          return f(~this.low, ~this.high, this.unsigned)
        }, y.and = function (a) {
          return c(a) || (a = h(a)), f(this.low & a.low, this.high & a.high, this.unsigned)
        }, y.or = function (a) {
          return c(a) || (a = h(a)), f(this.low | a.low, this.high | a.high, this.unsigned)
        }, y.xor = function (a) {
          return c(a) || (a = h(a)), f(this.low ^ a.low, this.high ^ a.high, this.unsigned)
        }, y.shiftLeft = function (a) {
          return c(a) && (a = a.toInt()), 0 == (a &= 63) ? this : 32 > a ? f(this.low << a, this.high << a | this.low >>> 32 - a, this.unsigned) : f(0, this.low << a - 32, this.unsigned)
        }, y.shl = y.shiftLeft, y.shiftRight = function (a) {
          return c(a) && (a = a.toInt()), 0 == (a &= 63) ? this : 32 > a ? f(this.low >>> a | this.high << 32 - a, this.high >> a, this.unsigned) : f(this.high >> a - 32, this.high >= 0 ? 0 : -1, this.unsigned)
        }, y.shr = y.shiftRight, y.shiftRightUnsigned = function (a) {
          if (c(a) && (a = a.toInt()), 0 == (a &= 63)) return this;
          var b = this.high;
          return 32 > a ? f(this.low >>> a | b << 32 - a, b >>> a, this.unsigned) : f(32 === a ? b : b >>> a - 32, 0, this.unsigned)
        }, y.shru = y.shiftRightUnsigned, y.shr_u = y.shiftRightUnsigned, y.toSigned = function () {
          return this.unsigned ? f(this.low, this.high, !1) : this
        }, y.toUnsigned = function () {
          return this.unsigned ? this : f(this.low, this.high, !0)
        }, y.toBytes = function (a) {
          return a ? this.toBytesLE() : this.toBytesBE()
        }, y.toBytesLE = function () {
          var a = this.high, b = this.low;
          return [255 & b, b >>> 8 & 255, b >>> 16 & 255, b >>> 24, 255 & a, a >>> 8 & 255, a >>> 16 & 255, a >>> 24]
        }, y.toBytesBE = function () {
          var a = this.high, b = this.low;
          return [a >>> 24, a >>> 16 & 255, a >>> 8 & 255, 255 & a, b >>> 24, b >>> 16 & 255, b >>> 8 & 255, 255 & b]
        }, b.fromBytes = function (a, c, d) {
          return d ? b.fromBytesLE(a, c) : b.fromBytesBE(a, c)
        }, b.fromBytesLE = function (a, c) {
          return new b(a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24, a[4] | a[5] << 8 | a[6] << 16 | a[7] << 24, c)
        }, b.fromBytesBE = function (a, c) {
          return new b(a[4] << 24 | a[5] << 16 | a[6] << 8 | a[7], a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3], c)
        }
      }, 7996: function (a) {
        var b = function (a) {
          null == a && (a = (new Date).getTime()), this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), this.mti = this.N + 1, a.constructor == Array ? this.init_by_array(a, a.length) : this.init_seed(a)
        };
        b.prototype.init_seed = function (a) {
          for (this.mt[0] = a >>> 0, this.mti = 1; this.mti < this.N; this.mti++) a = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30, this.mt[this.mti] = (1812433253 * ((4294901760 & a) >>> 16) << 16) + 1812433253 * (65535 & a) + this.mti, this.mt[this.mti] >>>= 0
        }, b.prototype.init_by_array = function (a, b) {
          var c, d, e;
          for (this.init_seed(19650218), c = 1, d = 0, e = this.N > b ? this.N : b; e; e--) {
            var f = this.mt[c - 1] ^ this.mt[c - 1] >>> 30;
            this.mt[c] = (this.mt[c] ^ (1664525 * ((4294901760 & f) >>> 16) << 16) + 1664525 * (65535 & f)) + a[d] + d, this.mt[c] >>>= 0, d++, ++c >= this.N && (this.mt[0] = this.mt[this.N - 1], c = 1), d >= b && (d = 0)
          }
          for (e = this.N - 1; e; e--) f = this.mt[c - 1] ^ this.mt[c - 1] >>> 30, this.mt[c] = (this.mt[c] ^ (1566083941 * ((4294901760 & f) >>> 16) << 16) + 1566083941 * (65535 & f)) - c, this.mt[c] >>>= 0, ++c >= this.N && (this.mt[0] = this.mt[this.N - 1], c = 1);
          this.mt[0] = 2147483648
        }, b.prototype.random_int = function () {
          var a, b = new Array(0, this.MATRIX_A);
          if (this.mti >= this.N) {
            var c;
            for (this.mti == this.N + 1 && this.init_seed(5489), c = 0; c < this.N - this.M; c++) a = this.mt[c] & this.UPPER_MASK | this.mt[c + 1] & this.LOWER_MASK, this.mt[c] = this.mt[c + this.M] ^ a >>> 1 ^ b[1 & a];
            for (; c < this.N - 1; c++) a = this.mt[c] & this.UPPER_MASK | this.mt[c + 1] & this.LOWER_MASK, this.mt[c] = this.mt[c + (this.M - this.N)] ^ a >>> 1 ^ b[1 & a];
            a = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK, this.mt[this.N - 1] = this.mt[this.M - 1] ^ a >>> 1 ^ b[1 & a], this.mti = 0
          }
          return a = this.mt[this.mti++], a ^= a >>> 11, a ^= a << 7 & 2636928640, a ^= a << 15 & 4022730752, (a ^= a >>> 18) >>> 0
        }, b.prototype.random_int31 = function () {
          return this.random_int() >>> 1
        }, b.prototype.random_incl = function () {
          return this.random_int() * (1 / 4294967295)
        }, b.prototype.random = function () {
          return this.random_int() * (1 / 4294967296)
        }, b.prototype.random_excl = function () {
          return (this.random_int() + .5) * (1 / 4294967296)
        }, b.prototype.random_long = function () {
          return (67108864 * (this.random_int() >>> 5) + (this.random_int() >>> 6)) * (1 / 9007199254740992)
        }, a.exports = b
      }, 4079: function (a) {
        "use strict";
        a.exports = JSON.parse('{"pools":[{"rolls":{"min":2,"max":4},"entries":[{"type":"item","name":"minecraft:diamond","functions":[{"function":"set_count","count":{"min":1,"max":3}}],"weight":5},{"type":"item","name":"minecraft:iron_ingot","functions":[{"function":"set_count","count":{"min":1,"max":5}}],"weight":15},{"type":"item","name":"minecraft:gold_ingot","functions":[{"function":"set_count","count":{"min":2,"max":7}}],"weight":15},{"type":"item","name":"minecraft:emerald","functions":[{"function":"set_count","count":{"min":1,"max":3}}],"weight":15},{"type":"item","name":"minecraft:bone","functions":[{"function":"set_count","count":{"min":4,"max":6}}],"weight":25},{"type":"item","name":"minecraft:spider_eye","functions":[{"function":"set_count","count":{"min":1,"max":3}}],"weight":25},{"type":"item","name":"minecraft:rotten_flesh","functions":[{"function":"set_count","count":{"min":3,"max":7}}],"weight":25},{"type":"item","name":"minecraft:saddle","weight":20},{"type":"item","name":"minecraft:horsearmoriron","weight":15},{"type":"item","name":"minecraft:horsearmorgold","weight":10},{"type":"item","name":"minecraft:horsearmordiamond","weight":5},{"type":"item","name":"minecraft:book","weight":20,"functions":[{"function":"enchant_randomly"}]},{"type":"item","name":"minecraft:golden_apple","weight":20},{"type":"item","name":"minecraft:appleEnchanted","weight":2},{"type":"empty","weight":15}]},{"rolls":4,"entries":[{"type":"item","name":"minecraft:bone","weight":10,"functions":[{"function":"set_count","count":{"min":1,"max":8}}]},{"type":"item","name":"minecraft:gunpowder","weight":10,"functions":[{"function":"set_count","count":{"min":1,"max":8}}]},{"type":"item","name":"minecraft:rotten_flesh","weight":10,"functions":[{"function":"set_count","count":{"min":1,"max":8}}]},{"type":"item","name":"minecraft:string","weight":10,"functions":[{"function":"set_count","count":{"min":1,"max":8}}]},{"type":"item","name":"minecraft:sand","weight":10,"functions":[{"function":"set_count","count":{"min":1,"max":8}}]}]}]}')
      }, 9129: function (a) {
        "use strict";
        a.exports = JSON.parse('{"type":"minecraft:chest","pools":[{"bonus_rolls":0,"entries":[{"type":"minecraft:item","functions":[{"add":false,"count":{"type":"minecraft:uniform","max":3,"min":1},"function":"minecraft:set_count"}],"name":"minecraft:diamond","weight":5},{"type":"minecraft:item","functions":[{"add":false,"count":{"type":"minecraft:uniform","max":5,"min":1},"function":"minecraft:set_count"}],"name":"minecraft:iron_ingot","weight":15},{"type":"minecraft:item","functions":[{"add":false,"count":{"type":"minecraft:uniform","max":7,"min":2},"function":"minecraft:set_count"}],"name":"minecraft:gold_ingot","weight":15},{"type":"minecraft:item","functions":[{"add":false,"count":{"type":"minecraft:uniform","max":3,"min":1},"function":"minecraft:set_count"}],"name":"minecraft:emerald","weight":15},{"type":"minecraft:item","functions":[{"add":false,"count":{"type":"minecraft:uniform","max":6,"min":4},"function":"minecraft:set_count"}],"name":"minecraft:bone","weight":25},{"type":"minecraft:item","functions":[{"add":false,"count":{"type":"minecraft:uniform","max":3,"min":1},"function":"minecraft:set_count"}],"name":"minecraft:spider_eye","weight":25},{"type":"minecraft:item","functions":[{"add":false,"count":{"type":"minecraft:uniform","max":7,"min":3},"function":"minecraft:set_count"}],"name":"minecraft:rotten_flesh","weight":25},{"type":"minecraft:item","name":"minecraft:saddle","weight":20},{"type":"minecraft:item","name":"minecraft:iron_horse_armor","weight":15},{"type":"minecraft:item","name":"minecraft:golden_horse_armor","weight":10},{"type":"minecraft:item","name":"minecraft:diamond_horse_armor","weight":5},{"type":"minecraft:item","functions":[{"function":"minecraft:enchant_randomly"}],"name":"minecraft:book","weight":20},{"type":"minecraft:item","name":"minecraft:golden_apple","weight":20},{"type":"minecraft:item","name":"minecraft:enchanted_golden_apple","weight":2},{"type":"minecraft:empty","weight":15}],"rolls":{"type":"minecraft:uniform","max":4,"min":2}},{"bonus_rolls":0,"entries":[{"type":"minecraft:item","functions":[{"add":false,"count":{"type":"minecraft:uniform","max":8,"min":1},"function":"minecraft:set_count"}],"name":"minecraft:bone","weight":10},{"type":"minecraft:item","functions":[{"add":false,"count":{"type":"minecraft:uniform","max":8,"min":1},"function":"minecraft:set_count"}],"name":"minecraft:gunpowder","weight":10},{"type":"minecraft:item","functions":[{"add":false,"count":{"type":"minecraft:uniform","max":8,"min":1},"function":"minecraft:set_count"}],"name":"minecraft:rotten_flesh","weight":10},{"type":"minecraft:item","functions":[{"add":false,"count":{"type":"minecraft:uniform","max":8,"min":1},"function":"minecraft:set_count"}],"name":"minecraft:string","weight":10},{"type":"minecraft:item","functions":[{"add":false,"count":{"type":"minecraft:uniform","max":8,"min":1},"function":"minecraft:set_count"}],"name":"minecraft:sand","weight":10}],"rolls":4},{"bonus_rolls":0,"entries":[{"type":"minecraft:empty","weight":6},{"type":"minecraft:item","functions":[{"add":false,"count":2,"function":"minecraft:set_count"}],"name":"minecraft:dune_armor_trim_smithing_template"}],"rolls":1}]}')
      }
    }, c = {};
    a.n = function (b) {
      var c = b && b.__esModule ? function () {
        return b.default
      } : function () {
        return b
      };
      return a.d(c, {a: c}), c
    }, a.d = function (b, c) {
      for (var d in c) a.o(c, d) && !a.o(b, d) && Object.defineProperty(b, d, {enumerable: !0, get: c[d]})
    }, a.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")()
      } catch (a) {
        if ("object" == typeof window) return window
      }
    }(), a.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
    }, a.r = function (a) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(a, "__esModule", {value: !0})
    };
    var d = {};
    return function () {
      "use strict";

      function b(a) {
        return zc[a.id] = a, null != a.parent && (Ac[a.parent] = a.id), a
      }

      function c(a, b, c, d, e) {
        var f = d ? a.seed.add(d) : a.seed;
        if ("java" === e || a.edition === xc.Edition.Java && "bedrock" !== e) {
          var g = new mc(f), h = gc.fromInt(b).multiply(g.nextLong()), i = gc.fromInt(c).multiply(g.nextLong());
          return g.setSeed(h.xor(i).xor(f)), g
        }
        var j = new rc(f), k = gc.fromInt(b).multiply(j.nextInt()), l = gc.fromInt(c).multiply(j.nextInt());
        return j.setSeed(k.xor(l).xor(f)), j
      }

      function e(a) {
        return a >= 0 ? Math.floor(a) : Math.ceil(a)
      }

      function f(a) {
        a.low = -1 & -a.low, a.high = ~a.high, 0 === a.low && (a.high = a.high + 1 & -1)
      }

      function g(a, b) {
        var c = a.high >>> 16, d = 65535 & a.high, e = a.low >>> 16, f = 65535 & a.low, g = b.high >>> 16,
          h = 65535 & b.high, i = b.low >>> 16, j = 0, k = 0, l = 0, m = 0;
        l += (m += f + (65535 & b.low)) >>> 16, m &= 65535, k += (l += e + i) >>> 16, l &= 65535, j += (k += d + h) >>> 16, k &= 65535, j += c + g, j &= 65535, a.low = l << 16 | m, a.high = j << 16 | k
      }

      function h(a, b) {
        var c, d, e, g, h, i, j, k, l, m, n, o;
        return a.isZero() ? void 0 : sc ? (a.low = sc.mul(a.low, a.high, b.low, b.high), void (a.high = sc.get_high())) : void (0 !== a.low || a.high !== -je ? 0 !== b.low || b.high !== -je ? (o = !1, a.high < 0 && (f(a), o = !o), b.high < 0 && (b = b.negate(), o = !o), c = 65535 & a.low, d = a.low >>> 16, e = 65535 & a.high, g = a.high >>> 16, k = l = m = n = 0, l += (k += c * (h = 65535 & b.low)) >>> 16, k &= 65535, m += (l += d * h) >>> 16, l &= 65535, m += (l += c * (i = b.low >>> 16)) >>> 16, l &= 65535, n += (m += e * h) >>> 16, m &= 65535, n += (m += d * i) >>> 16, m &= 65535, n += (m += c * (j = 65535 & b.high)) >>> 16, m &= 65535, n += g * h + e * i + d * j + c * (b.high >>> 16), n &= 65535, a.low = k | l << 16, a.high = m | n << 16, o && f(a)) : 0 == (1 & a.low) && (a.high = 0) : 0 == (1 & b.low) && (a.high = 0))
      }

      function i(a, b, c, d, e) {
        var f = gc.fromNumber(b);
        h(f, ke);
        var i = gc.fromNumber(c);
        h(i, le), g(f, i), g(f, a.seed), g(f, gc.fromNumber(d));
        var j = e;
        return null == j && (j = a.edition === xc.Edition.Bedrock ? "bedrock" : "java"), "bedrock" === j ? new rc(f) : new mc(f)
      }

      function j(a, b) {
        var c = b.x, d = b.z;
        return c >= a.x && c < a.x + a.sizeX && d >= a.z && d < a.z + a.sizeZ
      }

      function k(a, b) {
        void 0 === b && (b = {});
        var c = b, d = c.x0, e = void 0 === d ? 0 : d, f = c.x1, g = void 0 === f ? 0 : f, h = c.z0,
          i = void 0 === h ? 0 : h, j = c.z1, k = void 0 === j ? 0 : j;
        return {x: a.x + e, z: a.z + i, sizeX: a.sizeX - e + g, sizeZ: a.sizeZ - i + k}
      }

      function l(a, b) {
        var c = m({x: a.x, z: a.z}, b), d = m({x: a.x + a.sizeX - 1, z: a.z + a.sizeZ - 1}, b);
        return {x: c.x, z: c.z, sizeX: d.x - c.x + 1, sizeZ: d.z - c.z + 1}
      }

      function m(a, b) {
        return {x: Math.floor(a.x / b), z: Math.floor(a.z / b)}
      }

      function n(a, b) {
        for (var c = a.z; c < a.z + a.sizeZ; c++) for (var d = a.x; d < a.x + a.sizeX; d++) b(d, c)
      }

      function o() {
        return p.apply(this, arguments)
      }

      function p() {
        return (p = uc()(wc().mark(function a(b, c) {
          var d, e;
          return wc().wrap(function (a) {
            for (; ;) switch (a.prev = a.next) {
              case 0:
                d = b.z;
              case 1:
                if (!(d < b.z + b.sizeZ)) {
                  a.next = 12;
                  break
                }
                e = b.x;
              case 3:
                if (!(e < b.x + b.sizeX)) {
                  a.next = 9;
                  break
                }
                return a.next = 6, c(e, d);
              case 6:
                e++, a.next = 3;
                break;
              case 9:
                d++, a.next = 1;
                break;
              case 12:
              case"end":
                return a.stop()
            }
          }, a)
        }))).apply(this, arguments)
      }

      function q(a, b) {
        var c = [];
        return n(a, function (a, d) {
          b(a, d) && c.push([a, d])
        }), c
      }

      function r(a, b) {
        var c = a.reduce(function (a, c) {
          var d = b(c), e = function (a, b) {
            return a + "," + b
          }(d[0], d[1]);
          return a[e] || (a[e] = []), a[e].push(c), a
        }, {});
        return Object.entries(c).map(function (a) {
          var b = a[0], c = a[1], d = b.split(",").map(function (a) {
            return parseInt(a, 10)
          });
          return [d[0], d[1], c]
        })
      }

      function s(a, b, c) {
        return r(a.filter(function (a) {
          var d = c(a);
          return j(b, {x: d[0], z: d[1]})
        }), c)
      }

      function t(a, b, c, d) {
        var e = u(a, Math.floor(b / d.spacing), Math.floor(c / d.spacing), d), f = e.rng, g = e.chunkX, h = e.chunkZ;
        return {rng: f, isFeatureChunk: g === b && h === c}
      }

      function u(a, b, c, d) {
        var f, g, h = i(a, b, c, d.salt, d.forceRngType);
        return d.linearSeparation ? (f = h.nextInt(d.spacing - d.separation), g = h.nextInt(d.spacing - d.separation)) : (f = e((h.nextInt(d.spacing - d.separation) + h.nextInt(d.spacing - d.separation)) / 2), g = e((h.nextInt(d.spacing - d.separation) + h.nextInt(d.spacing - d.separation)) / 2)), {
          chunkX: b * d.spacing + f,
          chunkZ: c * d.spacing + g,
          rng: h
        }
      }

      function v(a, b, c, d, e, f, g) {
        return function () {
          var h = uc()(wc().mark(function i(h) {
            var m, n, p, q, s;
            return wc().wrap(function (i) {
              for (; ;) switch (i.prev = i.next) {
                case 0:
                  return m = [], n = e ? k(h, e) : h, p = l(n, b.spacing), i.next = 5, o(p, function () {
                    var e = uc()(wc().mark(function f(e, g) {
                      var h, i, k, l, o;
                      return wc().wrap(function (f) {
                        for (; ;) switch (f.prev = f.next) {
                          case 0:
                            if (h = u(a, e, g, b), i = h.chunkX, k = h.chunkZ, l = h.rng, j(n, {x: i, z: k})) {
                              f.next = 3;
                              break
                            }
                            return f.abrupt("return");
                          case 3:
                            return f.next = 5, c(i, k, l);
                          case 5:
                            if (o = f.sent) {
                              f.next = 8;
                              break
                            }
                            return f.abrupt("return");
                          case 8:
                            m.push(d ? [i, k, d(i, k, l, o)] : [i, k]);
                          case 9:
                          case"end":
                            return f.stop()
                        }
                      }, f)
                    }));
                    return function () {
                      return e.apply(this, arguments)
                    }
                  }());
                case 5:
                  if (f) {
                    i.next = 7;
                    break
                  }
                  return i.abrupt("return", m);
                case 7:
                  if (q = m.map(function (a) {
                    return a[2]
                  }).filter(Boolean), s = r(q, f).filter(function (a) {
                    return j(h, {x: a[0], z: a[1]})
                  }), g) {
                    i.next = 11;
                    break
                  }
                  return i.abrupt("return", s);
                case 11:
                  return i.abrupt("return", s.map(function (a) {
                    return [a[0], a[1], a[2][0]]
                  }));
                case 12:
                case"end":
                  return i.stop()
              }
            }, i)
          }));
          return function () {
            return h.apply(this, arguments)
          }
        }()
      }

      function w() {
        return x.apply(this, arguments)
      }

      function x() {
        return (x = uc()(wc().mark(function a(b, c, d) {
          var e;
          return wc().wrap(function (a) {
            for (; ;) switch (a.prev = a.next) {
              case 0:
                return a.next = 2, v(b, c, uc()(wc().mark(function f() {
                  return wc().wrap(function (a) {
                    for (; ;) switch (a.prev = a.next) {
                      case 0:
                        return a.abrupt("return", !0);
                      case 1:
                      case"end":
                        return a.stop()
                    }
                  }, f)
                })))(d);
              case 2:
                return e = a.sent, a.abrupt("return", e.length > 0);
              case 4:
              case"end":
                return a.stop()
            }
          }, a)
        }))).apply(this, arguments)
      }

      function y(a) {
        return "ocean" === a.category ? "ocean" : a.temperature < .2 ? "cold" : a.temperature < 1 ? "medium" : "warm"
      }

      function z(a) {
        return [rd.id, sd.id, Bc.id, td.id, Lc.id, ud.id, vd.id, Zc.id, wd.id, xd.id].includes(a)
      }

      function A(a) {
        return [rd.id, sd.id, Bc.id, td.id, Lc.id].includes(a)
      }

      function B(a, b) {
        if (a === b) return !0;
        if (a === ld.id || a === md.id) return b === ld.id || b === md.id;
        var c = C(a), d = C(b);
        return null != c && null != d && (c === d || "none" !== c.category && "none" !== d.category && c.category === d.category)
      }

      function C(a) {
        return a >= 0 && a <= zc.length ? zc[a] : Bc
      }

      function D(a, b, c, d, e, f, g) {
        for (var h = b >> 2, i = c >> 2, j = d >> 2, k = e >> 2, l = null, m = 0, n = -k; k >= n; n++) for (var o = -k; k >= o; o++) {
          var p = h + o, q = j + n;
          f(C(a.getNoiseBiome(p, i, q))) && (null != l && 0 !== g.nextInt(m + 1) || (l = [p << 2, c, q << 2]), m += 1)
        }
        return l
      }

      function E(a) {
        return function (b, c, d, e) {
          for (var f = b - d >> 2, g = c - d >> 2, h = (b + d >> 2) - f + 1, i = (c + d >> 2) - g + 1, j = a(f, g, h, i), k = 0; h * i > k; ++k) {
            var l = C(j[k]);
            if (!e.includes(l)) return !1
          }
          return !0
        }
      }

      function F(a, b, c) {
        var d = a.javaVersion >= xc.JavaVersion.V1_18 ? ne.c8.fromSeed(a.seed) : new mc(a.seed),
          e = d.nextLong().or(hc().ONE), f = d.nextLong().or(hc().ONE);
        return d.free(), hc().fromNumber(b).multiply(e).add(hc().fromNumber(c).multiply(f)).xor(a.seed)
      }

      function G(a) {
        return a.edition === xc.Edition.Java && a.javaVersion >= xc.JavaVersion.V1_18 || a.edition === xc.Edition.Bedrock && a.bedrockVersion >= xc.BedrockVersion.V1_18
      }

      function H(a, b, c) {
        return new rc(I(a, b, c))
      }

      function I(a, b, c) {
        return J(a)(b, c)
      }

      function J(a) {
        var b = new rc(a.seed), c = 1 | b.nextInt(), d = 1 | b.nextInt(), e = a.seed.toInt();
        return function (a, b) {
          return e ^ Math.imul(d, b) + Math.imul(c, a)
        }
      }

      function K(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = new Array(b); b > c; c++) d[c] = a[c];
        return d
      }

      function L(a, b, d, e, f, g, h, i, j) {
        var k = c(a, d, e, void 0, "java"), l = "number" == typeof f ? f : null == f ? void 0 : f({rng: k}),
          m = Ge[k.nextInt(Ge.length)], n = He(i, k), o = n[0], p = n[2], q = m(p[0] - 1, p[1] - 1, p[2] - 1),
          r = [0, 0];
        if (j) {
          if (g) throw new Error("not supported");
          var s = m(j[0], 0, j[1]);
          r = [-s[0], -s[2]]
        }
        var t, u = r[0] + (16 * d + 16 * d + q[0]) / 2 | 0, v = r[1] + (16 * e + 16 * e + q[2]) / 2 | 0;
        if (g && (l = l + b.getSurfaceBlock(u, v, g.heightType, g.surfaceCheckType) + 1), "all" === h) t = !0; else {
          var w = Fe(b.getNoiseBiome(u >> 2, l >> 2, v >> 2));
          t = "function" == typeof h ? h(w) : h.includes(w)
        }
        var x = l - 1 + q[1] / 2 | 0;
        return !!t && {key: o, x: u, y: x, z: v}
      }

      function M(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = new Array(b); b > c; c++) d[c] = a[c];
        return d
      }

      function N(a, b, d, e) {
        if (a.edition === xc.Edition.Java && a.javaVersion >= xc.JavaVersion.V1_18) return c(a, b, d).nextInt(5) >= 2;
        var f = a.edition === xc.Edition.Bedrock ? 6 : 5;
        return e.nextInt(f) >= 2
      }

      function O() {
        return O = uc()(wc().mark(function a(b, d) {
          var e, f;
          return wc().wrap(function (a) {
            for (; ;) switch (a.prev = a.next) {
              case 0:
                return e = d.nether, f = Ie(b, d, xc.POI.BastionRemnant), a.abrupt("return", v(b, {
                  spacing: b.edition === xc.Edition.Bedrock ? 30 : 27,
                  separation: 4,
                  salt: 30084232,
                  linearSeparation: !0
                }, function () {
                  var a = uc()(wc().mark(function d(a, g, h) {
                    var i, j;
                    return wc().wrap(function (d) {
                      for (; ;) switch (d.prev = d.next) {
                        case 0:
                          if (b.edition !== xc.Edition.Java) {
                            d.next = 15;
                            break
                          }
                          if (!(b.javaVersion >= xc.JavaVersion.V1_18)) {
                            d.next = 6;
                            break
                          }
                          return i = f(a, g), d.abrupt("return", !!i && {type: i});
                        case 6:
                          if (N(b, a, g, h)) {
                            d.next = 8;
                            break
                          }
                          return d.abrupt("return", !1);
                        case 8:
                          if (Ke.includes(e.getBiomeAtChunk(a, g))) {
                            d.next = 10;
                            break
                          }
                          return d.abrupt("return", !1);
                        case 10:
                          return (j = c(b, a, g)).nextInt(4), d.abrupt("return", {type: ["units", "hoglin_stable", "treasure", "bridge"][j.nextInt(4)]});
                        case 13:
                          d.next = 21;
                          break;
                        case 15:
                          if (N(b, a, g, h)) {
                            d.next = 17;
                            break
                          }
                          return d.abrupt("return", !1);
                        case 17:
                          if (e.areBiomesViable(16 * a + 8, 16 * g + 8, 2, Ke)) {
                            d.next = 19;
                            break
                          }
                          return d.abrupt("return", !1);
                        case 19:
                          return h.nextInt(4), d.abrupt("return", {type: ["bridge", "treasure", "hoglin_stable", "units"][h.nextInt(4)]});
                        case 21:
                        case"end":
                          return d.stop()
                      }
                    }, d)
                  }));
                  return function () {
                    return a.apply(this, arguments)
                  }
                }(), function (a, b, c, d) {
                  return d
                }));
              case 3:
              case"end":
                return a.stop()
            }
          }, a)
        })), O.apply(this, arguments)
      }

      function P() {
        return (P = uc()(wc().mark(function a(b, c) {
          return wc().wrap(function (a) {
            for (; ;) switch (a.prev = a.next) {
              case 0:
                if (b.edition !== xc.Edition.Java) {
                  a.next = 2;
                  break
                }
                return a.abrupt("return", R(b, c.overworld));
              case 2:
                return a.abrupt("return", Q(b, c.overworld));
              case 3:
              case"end":
                return a.stop()
            }
          }, a)
        }))).apply(this, arguments)
      }

      function Q(a, b) {
        return v(a, {salt: 16842397, spacing: 4, separation: 2, linearSeparation: !1}, function () {
          var c = uc()(wc().mark(function d(c, e) {
            var f, g;
            return wc().wrap(function (d) {
              for (; ;) switch (d.prev = d.next) {
                case 0:
                  if (!(a.bedrockVersion >= xc.BedrockVersion.V1_18)) {
                    d.next = 6;
                    break
                  }
                  return f = b.noise(), g = f.getPreliminarySurfaceLevel(4 * c, 4 * e), d.abrupt("return", Ne(f, 16 * c + 8, g, 16 * e + 8, 3, Re));
                case 6:
                  return d.abrupt("return", b.legacy().areBiomesViable(16 * c + 8, 16 * e + 8, 3, Re));
                case 7:
                case"end":
                  return d.stop()
              }
            }, d)
          }));
          return function () {
            return c.apply(this, arguments)
          }
        }())
      }

      function R(a, b) {
        return function () {
          var c = uc()(wc().mark(function d(c) {
            var e;
            return wc().wrap(function (d) {
              for (; ;) switch (d.prev = d.next) {
                case 0:
                  return e = [], n(c, function (c, d) {
                    if (!(i(a, c, d, 10387320).nextFloat() >= .01)) {
                      var f = a.javaVersion >= xc.JavaVersion.V1_18 ? Le(b.noise(), c, d, "oceanFloor") : b.legacy().getBiomeForStructure(c, d);
                      Se.includes(f) && e.push([c, d])
                    }
                  }), d.abrupt("return", e);
                case 3:
                case"end":
                  return d.stop()
              }
            }, d)
          }));
          return function () {
            return c.apply(this, arguments)
          }
        }()
      }

      function S(a) {
        return function () {
          var b = uc()(wc().mark(function c(b) {
            return wc().wrap(function (c) {
              for (; ;) switch (c.prev = c.next) {
                case 0:
                  return c.abrupt("return", function () {
                    var c = uc()(wc().mark(function d(c) {
                      return wc().wrap(function (d) {
                        for (; ;) switch (d.prev = d.next) {
                          case 0:
                            return d.abrupt("return", q(c, function (c, d) {
                              return a(b, c, d)
                            }));
                          case 1:
                          case"end":
                            return d.stop()
                        }
                      }, d)
                    }));
                    return function () {
                      return c.apply(this, arguments)
                    }
                  }());
                case 1:
                case"end":
                  return c.stop()
              }
            }, c)
          }));
          return function () {
            return b.apply(this, arguments)
          }
        }()
      }

      function T(a, b) {
        var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
        if (c) return (c = c.call(a)).next.bind(c);
        if (Array.isArray(a) || (c = function (a, b) {
          if (a) {
            if ("string" == typeof a) return U(a, b);
            var c = Object.prototype.toString.call(a).slice(8, -1);
            return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? U(a, b) : void 0
          }
        }(a)) || b && a && "number" == typeof a.length) {
          c && (a = c);
          var d = 0;
          return function () {
            return d >= a.length ? {done: !0} : {done: !1, value: a[d++]}
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }

      function U(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = new Array(b); b > c; c++) d[c] = a[c];
        return d
      }

      function V(a, b, d, e, f) {
        var g = d.getBiomeAtChunk(e, f);
        return !![pd, od].includes(g) && function (a, b, d, e) {
          var f = e.buildHeightmap(b, d),
            g = (a.edition === xc.Edition.Java ? a.javaVersion >= xc.JavaVersion.V1_19 ? c(a, b, d) : new mc(gc.fromNumber(b).add(gc.fromNumber(d).mul(10387313))) : new rc(10387313 * d + b)).nextInt(4),
            h = 5, i = 5;
          1 === g ? h = -5 : 2 === g ? (h = -5, i = -5) : 3 === g && (i = -5);
          var j = f[bf(7, 7)], k = f[bf(7, 7 + i)], l = f[bf(7 + h, 7)], m = f[bf(7 + h, 7 + i)];
          return Math.min(j, k, l, m) + (a.edition === xc.Edition.Bedrock ? 1 : 0)
        }(a, e, f, b) >= 60
      }

      function W(a) {
        var b = {hasShip: !1};
        return X("TOWER_GENERATOR", 1, a, b), b.hasShip
      }

      function X(a, b, c, d) {
        return !(b > 8 || d.hasShip || !cf[a](b, c, d) || (c.nextInt(), 0))
      }

      function Y(a, b, c, d) {
        if (a.edition === xc.Edition.Java) {
          if (a.javaVersion >= xc.JavaVersion.V1_18) {
            var e = b.noise();
            return hf.includes(Le(e, c, d, "oceanFloor")) && Ne(e, 16 * c + 9, 63, 16 * d + 9, 29, jf)
          }
          if (a.javaVersion >= xc.JavaVersion.V1_13) {
            var f = b.legacy();
            return f.areBiomesViable(16 * c + 9, 16 * d + 9, 16, hf) && f.areBiomesViable(16 * c + 9, 16 * d + 9, 29, jf)
          }
          if (a.javaVersion >= xc.JavaVersion.V1_9) {
            var g = b.legacy();
            return g.areBiomesViable(16 * c + 8, 16 * d + 8, 16, [Zc]) && g.areBiomesViable(16 * c + 8, 16 * d + 8, 29, gf)
          }
          var h = b.legacy();
          return h.getBiomeGenAt(16 * c + 8, 16 * d + 8, 1, 1)[0] === Zc && h.areBiomesViable(16 * c + 8, 16 * d + 8, 29, gf)
        }
        if (a.bedrockVersion >= xc.BedrockVersion.V1_18) {
          var i = b.noise(), j = i.getPreliminarySurfaceLevel(4 * c, 4 * d);
          return Ne(i, 16 * c + 8, j, 16 * d + 8, 16, hf) && Ne(i, 16 * c + 8, j, 16 * d + 8, 29, jf)
        }
        var k = b.legacy();
        return k.areBiomesViable(16 * c + 8, 16 * d + 8, 16, hf) && k.areBiomesViable(16 * c + 8, 16 * d + 8, 29, jf)
      }

      function Z() {
        return $.apply(this, arguments)
      }

      function $() {
        return ($ = uc()(wc().mark(function a(b, c, d, e, f, g) {
          var h, i, j, k;
          return wc().wrap(function (a) {
            for (; ;) switch (a.prev = a.next) {
              case 0:
                if (h = [_c, Rc, Qc].includes(e), i = h ? 10 : 20, b.bedrockVersion >= xc.BedrockVersion.V1_18 ? Ne(c.noise(), 16 * f + 8, c.noise().getPreliminarySurfaceLevel(4 * f, 4 * g), 16 * g + 8, i, [e]) : c.legacy().areBiomesViable(8 + (f << 4), 8 + (g << 4), i, [e])) {
                  a.next = 5;
                  break
                }
                return a.abrupt("return", !1);
              case 5:
                return a.next = 7, lf.create(b, {overworld: c}, d);
              case 7:
                return j = a.sent, a.next = 10, j({x: f - 5, z: g - 5, sizeX: 10, sizeZ: 10});
              case 10:
                return k = a.sent, a.abrupt("return", k.length < 1);
              case 12:
              case"end":
                return a.stop()
            }
          }, a)
        }))).apply(this, arguments)
      }

      function _(a, b, c, d, e) {
        var f = tf(a) ? Le(b.noise(), c, d, "worldSurface") : uf(a) ? Me(b.noise(), 16 * c + 8, b.noise().getPreliminarySurfaceLevel(4 * c, 4 * d), 16 * d + 8) : b.legacy().getBiomeForStructure(c, d);
        return !!e.includes(f) && f
      }

      function ab() {
        return bb.apply(this, arguments)
      }

      function bb() {
        return bb = uc()(wc().mark(function a(b, c, d, e, f) {
          var g, h, i, j, k, l, m, n;
          return wc().wrap(function (a) {
            for (; ;) switch (a.prev = a.next) {
              case 0:
                if (g = vf[b](c), h = g.allowedBiomes, i = g.checkBiome, j = g.checkChunk, k = pf()(g, qf), l = Object.assign({linearSeparation: !0}, k), m = i || _, n = function () {
                  var a = uc()(wc().mark(function b(a, f) {
                    var g;
                    return wc().wrap(function (b) {
                      for (; ;) switch (b.prev = b.next) {
                        case 0:
                          if (g = m(c, d, a, f, h)) {
                            b.next = 3;
                            break
                          }
                          return b.abrupt("return", !1);
                        case 3:
                          if (b.t0 = !j, b.t0) {
                            b.next = 8;
                            break
                          }
                          return b.next = 7, j(c, d, e, g, a, f);
                        case 7:
                          b.t0 = b.sent;
                        case 8:
                          return b.abrupt("return", b.t0);
                        case 9:
                        case"end":
                          return b.stop()
                      }
                    }, b)
                  }));
                  return function () {
                    return a.apply(this, arguments)
                  }
                }(), !f) {
                  a.next = 6;
                  break
                }
                return a.abrupt("return", v(c, l, n, f));
              case 6:
                return a.abrupt("return", v(c, l, n));
              case 7:
              case"end":
                return a.stop()
            }
          }, a)
        })), bb.apply(this, arguments)
      }

      function cb(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = new Array(b); b > c; c++) d[c] = a[c];
        return d
      }

      function db(a) {
        return {
          spacing: a.javaVersion >= xc.JavaVersion.V1_18 ? 34 : 32,
          separation: 8,
          salt: 10387312,
          linearSeparation: !0
        }
      }

      function eb() {
        return eb = uc()(wc().mark(function a(b, d) {
          var e, f;
          return wc().wrap(function (a) {
            for (; ;) switch (a.prev = a.next) {
              case 0:
                if (b.edition !== xc.Edition.Java) {
                  a.next = 7;
                  break
                }
                if (e = db(b), !(b.javaVersion >= xc.JavaVersion.V1_18)) {
                  a.next = 6;
                  break
                }
                return a.abrupt("return", v(b, e, function () {
                  var a = uc()(wc().mark(function c(a, e) {
                    return wc().wrap(function (c) {
                      for (; ;) switch (c.prev = c.next) {
                        case 0:
                          return c.abrupt("return", gb(b, d.overworld, a, e));
                        case 1:
                        case"end":
                          return c.stop()
                      }
                    }, c)
                  }));
                  return function () {
                    return a.apply(this, arguments)
                  }
                }(), function (a, b, c, d) {
                  return d
                }));
              case 6:
                return a.abrupt("return", v(b, e, function () {
                  var a = uc()(wc().mark(function c(a, e) {
                    return wc().wrap(function (c) {
                      for (; ;) switch (c.prev = c.next) {
                        case 0:
                          return c.abrupt("return", fb(b, d.overworld, a, e));
                        case 1:
                        case"end":
                          return c.stop()
                      }
                    }, c)
                  }));
                  return function () {
                    return a.apply(this, arguments)
                  }
                }(), function (a, d, e, f) {
                  if (!0 === f) return {type: null, zombie: null};
                  if (b.javaVersion < xc.JavaVersion.V1_15) return {type: null, zombie: null};
                  var g = Tf(f), h = c(b, a, d);
                  h.nextIntVoid(4);
                  var i = He(Uf[g], h);
                  return {type: g, zombie: Vf(i[0])}
                }));
              case 7:
                return f = d.overworld, a.abrupt("return", v(b, {
                  spacing: b.bedrockVersion >= xc.BedrockVersion.V1_18 ? 34 : 27,
                  separation: b.bedrockVersion >= xc.BedrockVersion.V1_18 ? 8 : 10,
                  salt: 10387312,
                  linearSeparation: !1
                }, function () {
                  var a = uc()(wc().mark(function c(a, d) {
                    return wc().wrap(function (c) {
                      for (; ;) switch (c.prev = c.next) {
                        case 0:
                          return c.abrupt("return", b.bedrockVersion >= xc.BedrockVersion.V1_18 ? Oe(f.noise(), 16 * a + 8, f.noise().getPreliminarySurfaceLevel(4 * a, 4 * d), 16 * d + 8, 2, Qf) : f.legacy().areBiomesViable(16 * a + 8, 16 * d + 8, 2, Qf));
                        case 1:
                        case"end":
                          return c.stop()
                      }
                    }, c)
                  }));
                  return function () {
                    return a.apply(this, arguments)
                  }
                }(), function (a, c, d, e) {
                  var g = "boolean" != typeof e ? e : b.bedrockVersion >= xc.BedrockVersion.V1_18 ? Me(f.noise(), 16 * a + 8, f.noise().getPreliminarySurfaceLevel(4 * a, 4 * c), 16 * c + 8) : f.legacy().getBiomeForStructure(a, c);
                  d.nextInt(4);
                  var h = b.bedrockVersion >= xc.BedrockVersion.V1_18 ? .02 : .2;
                  return {type: Tf(g), zombie: d.nextDouble() < h}
                }));
              case 9:
              case"end":
                return a.stop()
            }
          }, a)
        })), eb.apply(this, arguments)
      }

      function fb(a, b, c, d) {
        var e = Pf[a.javaVersion], f = b.legacy();
        if (a.javaVersion < xc.JavaVersion.V1_13) return f.areBiomesViable(16 * c + 8, 16 * d + 8, 0, e);
        var g = f.getBiomeForStructure(c, d);
        return !!e.includes(g) && g
      }

      function gb(a, b, c, d) {
        for (var e = Pf[a.javaVersion], f = b.noise(), g = 0, h = ["plains", "desert", "savanna", "snowy", "taiga"]; g < h.length; g++) {
          var i = h[g], j = Rf[i].filter(function (a) {
            return e.includes(a)
          });
          if (!(j.length < 1)) {
            var k = L(a, f, c, d, 0, {heightType: "worldSurface", surfaceCheckType: "topmostAccurate"}, j, Uf[i]);
            if (k) return {type: i, zombie: Vf(k.key)}
          }
        }
        return !1
      }

      function hb() {
        return ib.apply(this, arguments)
      }

      function ib() {
        return (ib = uc()(wc().mark(function a(b, c, d) {
          return wc().wrap(function (a) {
            for (; ;) switch (a.prev = a.next) {
              case 0:
                if (b.edition !== xc.Edition.Bedrock) {
                  a.next = 4;
                  break
                }
                return a.next = 3, mb(b, c, d);
              case 3:
                return a.abrupt("return", a.sent);
              case 4:
                if (!(b.javaVersion >= xc.JavaVersion.V1_9)) {
                  a.next = 6;
                  break
                }
                return a.abrupt("return", kb(b, c));
              case 6:
                return a.abrupt("return", lb(b, c.legacy()));
              case 7:
              case"end":
                return a.stop()
            }
          }, a)
        }))).apply(this, arguments)
      }

      function jb(a, b) {
        return a.edition === xc.Edition.Bedrock ? function (a, b) {
          var c = 200, d = 150;
          return function (b) {
            var e = [];
            return n(b, function (b, f) {
              var g, h, i, j, k, l, m, n, o, p, q, r;
              e.push.apply(e, (h = f, i = (g = b) * c + Math.floor(100), j = h * c + Math.floor(100), k = 97858791 + (Math.imul(-1683231919, i) - Math.imul(1100435783, j) + a.seed.toInt() | 0) | 0, l = new rc(k), m = c * g + c - d, n = c * h + c - d, o = c * g + d, p = c * h + d, q = l.nextIntRange(m, o), r = l.nextIntRange(n, p), l.nextFloat() < .25 ? [[q, r]] : []))
            }), e
          }(l(b, c)).filter(function (a) {
            var c = a[0], d = a[1];
            return j(b, {x: c, z: d})
          })
        }(a, b) : []
      }

      function kb(a, b) {
        for (var c = new mc(a.seed), d = 3.141592653589793 * c.nextDouble() * 2, f = [], g = 0, h = 0, i = 3, j = 0; 128 > j; ++j) {
          var k = 128 + 32 * g * 6 + 32 * (c.nextDouble() - .5) * 2.5, l = Math.round(Math.cos(d) * k),
            m = Math.round(Math.sin(d) * k),
            n = a.javaVersion >= xc.JavaVersion.V1_18 ? D(b.noise(), 8 + (l << 4), 0, 8 + (m << 4), 112, function (b) {
              return _f[a.javaVersion].includes(b)
            }, a.javaVersion >= xc.JavaVersion.V1_19_3 ? new mc(c.nextLong()) : c) : b.legacy().findBiomePosition(8 + (l << 4), 8 + (m << 4), 112, _f[a.javaVersion], c);
          null != n && (l = n[0] >> 4, m = n[2] >> 4), f.push([l, m]), d += 6.283185307179586 / i, (h += 1) === i && (h = 0, i += e(2 * i / (1 + ++g)), i = Math.min(i, 128 - j), d += 3.141592653589793 * c.nextDouble() * 2)
        }
        return f
      }

      function lb(a, b) {
        for (var c = new mc(a.seed), d = 3.141592653589793 * c.nextDouble() * 2, e = 1, f = [], g = 3, h = 0; 3 > h; ++h) {
          var i = 32 * (1.25 * e + c.nextDouble()) * e, j = Math.round(Math.cos(d) * i),
            k = Math.round(Math.sin(d) * i),
            l = b.findBiomePosition(8 + (j << 4), 8 + (k << 4), 112, _f[a.javaVersion], c);
          null != l && (j = l[0] >> 4, k = l[2] >> 4), f.push([j, k]), d += 6.283185307179586 * e / g, h === g && (e += 2 + c.nextInt(5), g += 1 + c.nextInt(2))
        }
        return f
      }

      function mb() {
        return nb.apply(this, arguments)
      }

      function nb() {
        return (nb = uc()(wc().mark(function a(b, c, d) {
          var e, f, g, h, i, j, k, l, m, n, o, p;
          return wc().wrap(function (a) {
            for (; ;) switch (a.prev = a.next) {
              case 0:
                return e = 3, f = [], a.next = 4, Kf.create(b, {overworld: c}, d);
              case 4:
                g = a.sent, h = new rc(b.seed), i = h.nextFloat() * Math.PI * 2, j = h.nextInt(16) + 40, k = 0;
              case 9:
                if (!(e > k)) {
                  a.next = 33;
                  break
                }
                l = Math.floor(j * Math.cos(i)), m = Math.floor(j * Math.sin(i)), n = !1, o = l - 8;
              case 14:
                if (!(l + 8 > o)) {
                  a.next = 30;
                  break
                }
                p = m - 8;
              case 16:
                if (!(m + 8 > p)) {
                  a.next = 27;
                  break
                }
                return a.next = 19, g({x: o, z: p, sizeX: 1, sizeZ: 1});
              case 19:
                if (!(a.sent.length > 0)) {
                  a.next = 24;
                  break
                }
                return f[k++] = [o, p], n = !0, a.abrupt("break", 30);
              case 24:
                p++, a.next = 16;
                break;
              case 27:
                o++, a.next = 14;
                break;
              case 30:
                n ? (i += .6 * Math.PI, j += 8) : (i += .25 * Math.PI, j += 4), a.next = 9;
                break;
              case 33:
                return a.abrupt("return", f);
              case 34:
              case"end":
                return a.stop()
            }
          }, a)
        }))).apply(this, arguments)
      }

      function ob(a, b, c, d) {
        var e = a.edition === xc.Edition.Java ? ag : bg;
        if (a.edition === xc.Edition.Java && a.javaVersion >= xc.JavaVersion.V1_18) {
          var f = b.noise().getNoiseBiomeAtHeightType(16 * c + 7 >> 2, 16 * d + 7 >> 2, "worldSurface");
          return e.includes(Fe(f))
        }
        if (a.edition === xc.Edition.Bedrock && a.bedrockVersion >= xc.BedrockVersion.V1_18) return Ne(b.noise(), 16 * c + 8, b.noise().getPreliminarySurfaceLevel(4 * c, 4 * d), 16 * d + 8, 32, e);
        var g = a.edition !== xc.Edition.Bedrock && a.javaVersion >= xc.JavaVersion.V1_13 ? 9 : 8;
        return b.legacy().areBiomesViable(16 * c + g, 16 * d + g, 32, e)
      }

      function pb(a, b, c, d) {
        return a.bedrockVersion >= xc.BedrockVersion.V1_18 ? Ne(b.noise(), 16 * c + 8, b.noise().getPreliminarySurfaceLevel(4 * c, 4 * d), 16 * d + 8, 0, fg) : b.legacy().areBiomesViable(16 * c + 8, 16 * d + 8, 0, eg)
      }

      function qb() {
        return rb.apply(this, arguments)
      }

      function rb() {
        return (rb = uc()(wc().mark(function a(b, c, d, e, f) {
          var g, h, i, j, k;
          return wc().wrap(function (a) {
            for (; ;) switch (a.prev = a.next) {
              case 0:
                if (g = e >> 4, h = f >> 4, i = gc.fromNumber(g ^ h << 4).xor(b.seed), (j = new mc(i)).nextIntVoid(), 0 === j.nextInt(5)) {
                  a.next = 7;
                  break
                }
                return a.abrupt("return", !1);
              case 7:
                if (sb(b, c, e, f)) {
                  a.next = 9;
                  break
                }
                return a.abrupt("return", !1);
              case 9:
                if (k = {x: e - 10, z: f - 10, sizeX: 21, sizeZ: 21}, !(b.javaVersion >= xc.JavaVersion.V1_16)) {
                  a.next = 16;
                  break
                }
                return a.next = 13, w(b, db(b), k);
              case 13:
                return a.abrupt("return", !a.sent);
              case 16:
                return a.next = 18, d(k);
              case 18:
                return a.t0 = a.sent.length, a.abrupt("return", a.t0 <= 0);
              case 20:
              case"end":
                return a.stop()
            }
          }, a)
        }))).apply(this, arguments)
      }

      function sb(a, b, c, d) {
        return a.javaVersion >= xc.JavaVersion.V1_18 ? !!L(a, b.noise(), c, d, 0, {
          heightType: "worldSurface",
          surfaceCheckType: "topmostAccurate"
        }, dg, [["outpost", 1, [16, 30, 16]]]) : dg.includes(b.getBiomeForStructure(c, d))
      }

      function tb(a, b) {
        if (a.bedrockVersion >= xc.BedrockVersion.V1_18) {
          var c = b.noise().findSpawnPosition();
          return [c[0], c[2]]
        }
        for (var d = 40, e = function () {
          for (var a = b.legacy().getBiomeArea(d, 0, d + 40, 40), c = 1; 9 > c; c++) for (var e = 1; 9 > e; e++) if ([[d + 4 * e + 0, 4 * c + 0], [d + 4 * e - 4, 4 * c + 0], [d + 4 * e + 4, 4 * c + 0], [d + 4 * e + 0, 4 * c - 4], [d + 4 * e + 0, 4 * c + 4]].every(function (b) {
            return ng.includes(a(b[0], b[1]))
          })) return {v: [d + 4 * e, 4 * c]};
          d += 40
        }; 2e4 > d;) {
          var f = e();
          if ("object" == typeof f) return f.v
        }
        return [0, 0]
      }

      function ub(a, b) {
        var c = new mc(a.seed);
        if (a.javaVersion >= xc.JavaVersion.V1_18) {
          var d = b.noise().findSpawnPosition();
          return [d[0], d[2]]
        }
        var e = b.legacy().findBiomePosition(0, 0, 256, ng, c) || [0, 0, 0];
        return [e[0], e[2]]
      }

      function vb(a, b, c, d) {
        var e = b.add(c);
        return g(e, hc().fromNumber(1e4 * d)), a.javaVersion >= xc.JavaVersion.V1_18 ? ne.c8.fromSeed(e) : new mc(e)
      }

      function wb(a, b, c, d) {
        var e = d.decorationStepOrdinal, f = d.featureIndex, g = d.feature, h = function (a) {
          var b = a;
          return b.decorator ? b.decorator : b.placement.reverse()
        }(d), i = [16 * b, 0, 16 * c], j = vb(a, F(a, i[0], i[2]), f, e), k = [], l = {random: j};
        return h.reduce(function (a, b) {
          return function (c, d, e) {
            b(c, d, function (b) {
              return a(b, d, e)
            })
          }
        }, function (a) {
          return k.push(g(a, l))
        })(i, l, function (a) {
          var b = g(a, l);
          k.push(b)
        }), j.free(), k
      }

      function xb(a, b, c) {
        return a.nextInt(c - b + 1) + b
      }

      function yb(a, b) {
        return function () {
          var c = uc()(wc().mark(function d(c) {
            var e;
            return wc().wrap(function (d) {
              for (; ;) switch (d.prev = d.next) {
                case 0:
                  return e = [], n(c, function (c, d) {
                    var f = wb(a, c, d, {
                      decorationStepOrdinal: 3,
                      featureIndex: 0,
                      placement: [pg({chance: 64}), function (a, b, c) {
                        var d = b.random, e = a[0] + d.nextInt(16), f = a[2] + d.nextInt(16);
                        c([e, a[1], f])
                      }, sg.uniform({minInclusive: 0, maxInclusive: 319}), tg({provider: b, allowedBiomes: xg})],
                      feature: ug(b)
                    }), g = wb(a, c, d, {
                      decorationStepOrdinal: 3,
                      featureIndex: 1,
                      placement: [pg({chance: 64}), function (a, b, c) {
                        var d = b.random, e = a[0] + d.nextInt(16), f = a[2] + d.nextInt(16);
                        c([e, a[1], f])
                      }, sg.uniform({minInclusive: -64, maxInclusive: -8}), tg({provider: b, allowedBiomes: xg})],
                      feature: ug(b)
                    }), h = [];
                    f.length > 0 && h.push([].concat(f[0][0], ["coal"])), g.length > 0 && h.push([].concat(g[0][0], ["diamond"])), h.length > 0 && e.push([c, d, h])
                  }), d.abrupt("return", e);
                case 3:
                case"end":
                  return d.stop()
              }
            }, d)
          }));
          return function () {
            return c.apply(this, arguments)
          }
        }()
      }

      function zb(a, b) {
        return function () {
          var c = uc()(wc().mark(function d(c) {
            var e, f;
            return wc().wrap(function (d) {
              for (; ;) switch (d.prev = d.next) {
                case 0:
                  return e = [], f = b.getNoiseBiomeArea(4 * c.x + 2, 4 * c.z + 2, 4 * (c.x + c.sizeX) - 2, 4 * (c.z + c.sizeZ) - 2), n(c, function (b, c) {
                    var d = f(4 * b + 2, 4 * c + 2).id, g = yg[d];
                    null != g && wb(a, b, c, {
                      decorationStepOrdinal: 3,
                      featureIndex: g + 2,
                      decorator: [pg({chance: 64})],
                      feature: function (a) {
                        return [a]
                      }
                    }).length > 0 && e.push([b, c, void 0])
                  }), d.abrupt("return", e);
                case 4:
                case"end":
                  return d.stop()
              }
            }, d)
          }));
          return function () {
            return c.apply(this, arguments)
          }
        }()
      }

      function Ab(a, b) {
        var c = a.bedrockVersion >= xc.BedrockVersion.V1_18,
          d = new vg.m(a, "minecraft:desert_or_swamp_after_surface_fossil_feature"),
          e = c ? new vg.m(a, "minecraft:desert_or_swamp_after_surface_fossil_deepslate_feature") : null,
          f = function () {
            var a = uc()(wc().mark(function f(a) {
              var g, h;
              return wc().wrap(function (f) {
                for (; ;) switch (f.prev = f.next) {
                  case 0:
                    return g = [], h = c ? null : b.legacy().getBiomeArea(16 * a.x, 16 * a.z, 16 * (a.x + a.sizeX), 16 * (a.z + a.sizeZ)), n(a, function (a, c) {
                      var f = h ? h(16 * a + 15, 16 * c + 15) : Me(b.noise(), 16 * a, 0, 16 * c);
                      if (zg.includes(f)) {
                        var i = [], j = d.getSeedForChunk(a, c);
                        if (new rc(j).nextInt(64) < 1 && i.push([null, null, null, "coal"]), e) {
                          var k = e.getSeedForChunk(a, c);
                          new rc(k).nextInt(64) < 1 && i.push([null, null, null, "diamond"])
                        }
                        i.length > 0 && g.push([a, c, i])
                      }
                    }), f.abrupt("return", g);
                  case 4:
                  case"end":
                    return f.stop()
                }
              }, f)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }();
        return f.free = function () {
          d.free(), null == e || e.free()
        }, f
      }

      function Bb(a) {
        return function () {
          var b = uc()(wc().mark(function d(b) {
            var e;
            return wc().wrap(function (d) {
              for (; ;) switch (d.prev = d.next) {
                case 0:
                  return e = [], n(b, function (b, d) {
                    var f = [], g = c(a, b, d, 2);
                    if (g.nextFloat() < .01) {
                      var h = Cb(g, b, d);
                      f.push(h)
                    }
                    f.length > 0 && e.push([b, d, f])
                  }), d.abrupt("return", e);
                case 3:
                case"end":
                  return d.stop()
              }
            }, d)
          }));
          return function () {
            return b.apply(this, arguments)
          }
        }()
      }

      function Cb(a, b, c) {
        var d = 16 * b + a.nextInt(16), e = Ag(a, 10, 67), f = 16 * c + a.nextInt(16);
        a.nextFloat(), a.nextFloat();
        var g = function (a) {
          return 0 + 4 * a.nextFloat() + 2 * a.nextFloat()
        }(a);
        return {x: d, y: e, z: f, thickness: g, isUnderwater: !1, isMegaRavine: !1}
      }

      function Db(a, b) {
        return function () {
          var d = uc()(wc().mark(function e(d) {
            var f, g;
            return wc().wrap(function (e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  return f = [], g = b.getNoiseBiomeArea(4 * (d.x - 8), 4 * (d.z - 8), 4 * (d.x + d.sizeX + 8), 4 * (d.z + d.sizeZ + 8)), n(d, function (b, d) {
                    var e = [], h = c(a, b, d, 1);
                    if (h.nextFloat() < .02) {
                      var i = Eb(h, b, d, !1);
                      e.push(i)
                    }
                    var j = c(a, b, d, 0);
                    j.nextFloat() < .02 && "ocean" === g(4 * b, 4 * d).category && e.push(Eb(j, b, d, !0)), e.length > 0 && f.push([b, d, e])
                  }), e.abrupt("return", f);
                case 4:
                case"end":
                  return e.stop()
              }
            }, e)
          }));
          return function () {
            return d.apply(this, arguments)
          }
        }()
      }

      function Eb(a, b, c, d) {
        var e = 16 * b + a.nextInt(16), f = a.nextInt(a.nextInt(40) + 8) + 20, g = 16 * c + a.nextInt(16);
        return a.nextFloat(), a.nextFloat(), {
          x: e,
          y: f,
          z: g,
          thickness: 2 * (2 * a.nextFloat() + a.nextFloat()),
          isUnderwater: d,
          isMegaRavine: !1
        }
      }

      function Fb(a, b) {
        var c = J(a);
        return function () {
          var d = uc()(wc().mark(function e(d) {
            var f;
            return wc().wrap(function (e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  return f = [], n(d, function (d, e) {
                    var g = new rc(c(d, e));
                    if (0 === g.nextInt(150)) {
                      var h = g.nextInt(16) + 16 * d, i = g.nextInt(40), j = g.nextInt(i + 8) + 20;
                      g.nextInt();
                      var k = g.nextInt(16) + 16 * e;
                      g.nextFloat(), g.nextFloat();
                      var l = 3 * g.nextFloat() + 3 * g.nextFloat(), m = g.nextFloat() < .05;
                      m && (l *= 2);
                      var n = "ocean" === (a.bedrockVersion < xc.BedrockVersion.V1_18 ? b.legacy().getBiomeGenAt(h, k, 1, 1)[0] : Le(b.noise(), d, e, "oceanFloor")).category;
                      (!n || a.bedrockVersion < xc.BedrockVersion.V1_18) && f.push([d, e, [{
                        x: h,
                        y: j,
                        z: k,
                        thickness: l,
                        isMegaRavine: m,
                        isUnderwater: n
                      }]])
                    }
                  }), e.abrupt("return", f);
                case 3:
                case"end":
                  return e.stop()
              }
            }, e)
          }));
          return function () {
            return d.apply(this, arguments)
          }
        }()
      }

      function Gb(a, b) {
        var c = {}, d = {}, e = function (c, e, f) {
          if (null != b && !f) return b;
          var g = c >> 4, h = e >> 4, i = function (b, c) {
            var e = b + "-" + c;
            return d[e] || (d[e] = a.buildHeightmap(b, c)), d[e]
          }(g, h);
          return i[16 * (c - 16 * g) + (e - 16 * h)]
        };
        return {
          setBlock: function (a, b, d) {
            c[a + "-" + b + "-" + d] = !0
          }, hasBlock: function (a, b, d) {
            return b <= e(a, d) || !!c[a + "-" + b + "-" + d]
          }, getHeight: e, resetBlocks: function () {
            c = {}
          }
        }
      }

      function Hb(a, b, c) {
        a.setBlock(c[0], c[1], c[2]), Kb(a, c, c, b, 0)
      }

      function Ib(a, b, c) {
        return !(1 !== c && a.hasBlock(b[0] + 1, b[1], b[2]) || 3 !== c && a.hasBlock(b[0] - 1, b[1], b[2]) || 2 !== c && a.hasBlock(b[0], b[1], b[2] + 1) || 0 !== c && a.hasBlock(b[0], b[1], b[2] - 1))
      }

      function Jb(a, b) {
        return 0 === b ? [a[0], a[1], a[2] - 1] : 1 === b ? [a[0] + 1, a[1], a[2]] : 2 === b ? [a[0], a[1], a[2] + 1] : [a[0] - 1, a[1], a[2]]
      }

      function Kb(a, b, c, d, e) {
        var f = d.nextInt(4) + 1;
        0 === e && (f += 1);
        for (var g = 0; f > g; g++) {
          var h = [b[0], b[1] + g + 1, b[2]];
          if (!Ib(a, h)) return;
          a.setBlock(h[0], h[1], h[2]), a.setBlock(h[0], h[1] - 1, h[2])
        }
        var i = 0;
        if (4 > e) {
          var j = d.nextInt(4);
          0 === e && (j += 1);
          for (var k = 0; j > k; k++) {
            var l = d.nextInt(4), m = Jb([b[0], b[1] + f, b[2]], l);
            if (!(Math.abs(m[0] - c[0]) >= 8 || Math.abs(m[2] - c[2]) >= 8 || a.hasBlock(m[0], m[1], m[2]) || a.hasBlock(m[0], m[1] - 1, m[2])) && Ib(a, m, Dg[l])) {
              i = 1, a.setBlock(m[0], m[1], m[2]);
              var n = Jb(m, Dg[l]);
              a.setBlock(n[0], n[1], n[2]), Kb(a, m, c, d, e + 1)
            }
          }
        }
        0 === i && a.setBlock(b[0], b[1] + 1, b[2])
      }

      function Lb(a, b) {
        return function () {
          var c = uc()(wc().mark(function d(c) {
            var e;
            return wc().wrap(function (d) {
              for (; ;) switch (d.prev = d.next) {
                case 0:
                  return e = [], n(c, function (c, d) {
                    var f = wb(a, c, d, {
                      decorationStepOrdinal: 4,
                      featureIndex: 0,
                      placement: [pg({chance: 700}), function (a, b, c) {
                        var d = b.random, e = a[0] + d.nextInt(16), f = a[2] + d.nextInt(16);
                        c([e, a[1], f])
                      }, tg({provider: b, allowedBiomes: [pd]})],
                      feature: function (a) {
                        return [a]
                      }
                    });
                    f.length < 1 || e.push([c, d, [{x: f[0][0][0], z: f[0][0][2]}]])
                  }), d.abrupt("return", e);
                case 3:
                case"end":
                  return d.stop()
              }
            }, d)
          }));
          return function () {
            return c.apply(this, arguments)
          }
        }()
      }

      function Mb(a, b) {
        return function () {
          var c = uc()(wc().mark(function d(c) {
            var e;
            return wc().wrap(function (d) {
              for (; ;) switch (d.prev = d.next) {
                case 0:
                  return e = [], n(c, function (c, d) {
                    var f = wb(a, c, d, {
                      decorationStepOrdinal: 4,
                      featureIndex: 13,
                      decorator: a.javaVersion >= xc.JavaVersion.V1_17 ? [function (a, b, c) {
                        var d = b.random, e = a[0] + d.nextInt(16), f = a[2] + d.nextInt(16);
                        c([e, a[1], f])
                      }, pg({chance: 700})] : [function (a, b, c) {
                        var d = b.random;
                        0 === d.nextInt(700) && c([a[0] + d.nextInt(16), 0, a[2] + d.nextInt(16)])
                      }],
                      feature: function (a) {
                        return [a]
                      }
                    });
                    f.length < 1 || b.getNoiseBiome(4 * c + 2, 0, 4 * d + 2) === pd.id && e.push([c, d, [{
                      x: f[0][0][0],
                      z: f[0][0][2]
                    }]])
                  }), d.abrupt("return", e);
                case 3:
                case"end":
                  return d.stop()
              }
            }, d)
          }));
          return function () {
            return c.apply(this, arguments)
          }
        }()
      }

      function Nb(a, b) {
        var c = new _e(a), d = function () {
          var d = uc()(wc().mark(function e(d) {
            var f, g, h;
            return wc().wrap(function (e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  return f = [], g = J(a), h = Gb(c), n(k(d, {x0: -1, z0: -1}), function (c, d) {
                    if (b.getBiomeAtChunk(c, d) === pd) {
                      h.resetBlocks();
                      var e = g(c, d), i = new rc(e);
                      a.bedrockVersion >= xc.BedrockVersion.V1_18 && i.nextInt();
                      for (var j = i.nextInt(5), k = 0; j > k; k++) {
                        var l = 16 * c + 8 + i.nextInt(16), m = 16 * d + 8 + i.nextInt(16), n = h.getHeight(l, m) + 1;
                        0 >= n || Hb(h, i, [l, n, m])
                      }
                      if (0 === i.nextInt(700)) {
                        var o = 16 * c + 8 + i.nextInt(16), p = 16 * d + 8 + i.nextInt(16);
                        h.getHeight(o, p, !0) <= 0 || f.push({x: o, z: p})
                      }
                    }
                  }), e.abrupt("return", r(f, function (a) {
                    return [a.x >> 4, a.z >> 4]
                  }).filter(function (a) {
                    return j(d, {x: a[0], z: a[1]})
                  }));
                case 6:
                case"end":
                  return e.stop()
              }
            }, e)
          }));
          return function () {
            return d.apply(this, arguments)
          }
        }();
        return d.free = function () {
          c.free()
        }, d
      }

      function Ob(a, b) {
        return function () {
          var c = uc()(wc().mark(function d(c) {
            var e, f, g;
            return wc().wrap(function (d) {
              for (; ;) switch (d.prev = d.next) {
                case 0:
                  return e = k(c, {
                    x0: -1,
                    z0: -1
                  }), f = [], g = a.javaVersion < xc.JavaVersion.V1_18 ? b.legacy().getNoiseBiomeArea(4 * e.x + 2, 4 * e.z + 2, 4 * (e.x + e.sizeX) - 2, 4 * (e.z + e.sizeZ) - 2) : null, n(e, function (b, c) {
                    var d, e = null == g ? void 0 : g(4 * b + 2, 4 * c + 2).id, h = wb(a, b, c, {
                      decorationStepOrdinal: 2,
                      featureIndex: null == e || a.javaVersion >= xc.JavaVersion.V1_18 ? 2 : Gg(e),
                      decorator: [sg.uniform({
                        minInclusive: a.javaVersion >= xc.JavaVersion.V1_18 ? -58 : 6,
                        maxInclusive: a.javaVersion >= xc.JavaVersion.V1_18 ? 30 : 46
                      }), function (a, b, c) {
                        var d = b.random, e = a[0] + d.nextInt(16), f = a[2] + d.nextInt(16);
                        c([e, a[1], f])
                      }, pg({chance: a.javaVersion >= xc.JavaVersion.V1_18 ? 24 : 53})],
                      feature: (d = {x: 4, y: 4, z: 4}, function (a) {
                        var b = d.x, c = void 0 === b ? 0 : b, e = d.y, f = void 0 === e ? 0 : e, g = d.z,
                          h = void 0 === g ? 0 : g;
                        return [[a[0] + c, a[1] + f, a[2] + h]]
                      })
                    });
                    h.length > 0 && f.push(h[0][0])
                  }), d.abrupt("return", s(f, c, function (a) {
                    return [a[0] >> 4, a[2] >> 4]
                  }));
                case 5:
                case"end":
                  return d.stop()
              }
            }, d)
          }));
          return function () {
            return c.apply(this, arguments)
          }
        }()
      }

      function Pb(a) {
        var b = new vg.m(a, "minecraft:overworld_amethyst_geode_feature"),
          c = a.bedrockVersion >= xc.BedrockVersion.V1_18 ? 24 : 53,
          d = a.bedrockVersion >= xc.BedrockVersion.V1_18 ? [-58, 30] : [6, 47], e = function () {
            var a = uc()(wc().mark(function e(a) {
              var f;
              return wc().wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                  case 0:
                    return f = [], n(a, function (a, e) {
                      var g = b.getSeedForChunk(a, e), h = new rc(g);
                      if (h.nextInt(c) < 1) {
                        var i = Bg(h, d[0], d[1]);
                        f.push([16 * a + 4, i + 4, 16 * e + 4])
                      }
                    }), e.abrupt("return", s(f, a, function (a) {
                      return [a[0] >> 4, a[2] >> 4]
                    }));
                  case 3:
                  case"end":
                    return e.stop()
                }
              }, e)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }();
        return e.free = function () {
          b.free()
        }, e
      }

      function Qb(a, b) {
        var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
        if (c) return (c = c.call(a)).next.bind(c);
        if (Array.isArray(a) || (c = function (a, b) {
          if (a) {
            if ("string" == typeof a) return Rb(a, b);
            var c = Object.prototype.toString.call(a).slice(8, -1);
            return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? Rb(a, b) : void 0
          }
        }(a)) || b && a && "number" == typeof a.length) {
          c && (a = c);
          var d = 0;
          return function () {
            return d >= a.length ? {done: !0} : {done: !1, value: a[d++]}
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }

      function Rb(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = new Array(b); b > c; c++) d[c] = a[c];
        return d
      }

      function Sb(a) {
        for (var b, c = a.world, d = a.lootTableKey, e = a.randomSeed, f = Kg(c, d), g = c.edition === xc.Edition.Java ? new mc(e) : new rc(e), h = [], i = Qb(f.pools); !(b = i()).done;) {
          var j = b.value, k = j.entries.reduce(function (a, b) {
            var c;
            return a + (null != (c = b.weight) ? c : 1)
          }, 0);
          if (!(0 >= k || j.entries.length < 1)) {
            var l = null;
            c.edition === xc.Edition.Bedrock && g.nextFloat(), "number" == typeof j.rolls ? (c.edition === xc.Edition.Bedrock && g.nextInt(), l = j.rolls) : l = Ub(j.rolls.min, j.rolls.max, g);
            for (var m = 0; l > m; m++) if (c.edition === xc.Edition.Java && 1 === j.entries.length) "item" === j.entries[0].type && h.push(Tb(j.entries[0], g, c)); else for (var n, o = g.nextInt(k), p = Qb(j.entries); !(n = p()).done;) {
              var q, r = n.value;
              if ((o -= null != (q = r.weight) ? q : 1) < 0) {
                "item" === r.type && h.push(Tb(r, g, c));
                break
              }
            }
          }
        }
        return h
      }

      function Tb(a, b, c) {
        return (a.functions || []).reduce(function (a, d) {
          return function (a, b, c, d) {
            if ("set_data" === b.function) return a;
            if ("set_count" === b.function) return d.edition === xc.Edition.Bedrock && b.count.min === b.count.max && c.nextInt(1), Object.assign({}, a, {count: Ub(b.count.min, b.count.max, c)});
            if ("enchant_randomly" === b.function) {
              if (d.edition === xc.Edition.Bedrock) return c.nextInt(), Object.assign({}, a, {enchantment: "unknown"});
              var e = function (a, b) {
                var c = Lg;
                if ("book" === b) return c;
                var d = Mg[b];
                if (!d) throw new Error("Enchantments for " + b + " unknown");
                return d.map(function (a) {
                  return c[a]
                })
              }(0, a.name), f = e[c.nextInt(e.length)], g = f.name, h = Ub(f.minLevel, f.maxLevel, c);
              return {name: "book" === a.name ? "enchanted_book" : a.name, count: 1, enchantment: {name: g, level: h}}
            }
            throw new Error("Function " + b.function + " not implemented")
          }(a, d, b, c)
        }, {name: a.name, count: 1})
      }

      function Ub(a, b, c) {
        var d = Math.floor(a), e = Math.floor(b);
        return d >= e ? d : c.nextInt(e - d + 1) + d
      }

      function Vb(a, b) {
        var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
        if (c) return (c = c.call(a)).next.bind(c);
        if (Array.isArray(a) || (c = function (a, b) {
          if (a) {
            if ("string" == typeof a) return Wb(a, b);
            var c = Object.prototype.toString.call(a).slice(8, -1);
            return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? Wb(a, b) : void 0
          }
        }(a)) || b && a && "number" == typeof a.length) {
          c && (a = c);
          var d = 0;
          return function () {
            return d >= a.length ? {done: !0} : {done: !1, value: a[d++]}
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }

      function Wb(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = new Array(b); b > c; c++) d[c] = a[c];
        return d
      }

      function Xb(a, b) {
        for (var c = b[0], d = b[1] + 1, e = b[2], f = null; (f = a.getNoiseBlock(c, d, e, !1)) === ne.gO.Air;) d -= 1;
        if (!ne.P2(f)) return null;
        for (var g = -2; 2 >= g; g++) for (var h = -2; 2 >= h; h++) if (a.getNoiseBlock(c + g, d - 1, e + h, !1) === ne.gO.Air && a.getNoiseBlock(c + g, d - 2, e + h, !1) === ne.gO.Air) return null;
        return d
      }

      function Yb(a, b) {
        return function () {
          var c = uc()(wc().mark(function d(c) {
            var e;
            return wc().wrap(function (d) {
              for (; ;) switch (d.prev = d.next) {
                case 0:
                  return e = [], n(c, function (c, d) {
                    var f = wb(a, c, d, {
                      decorationStepOrdinal: 4,
                      featureIndex: 2,
                      placement: [pg({chance: 1e3}), function (a, b, c) {
                        var d = b.random, e = a[0] + d.nextInt(16), f = a[2] + d.nextInt(16);
                        c([e, a[1], f])
                      }, Tg({provider: b, heightType: "oceanFloor"}), tg({provider: b, allowedBiomes: [Dc]})],
                      feature: function (a) {
                        return [a]
                      }
                    });
                    if (!(f.length < 1)) {
                      var g = Xb(b, f[0][0]);
                      if (null != g) {
                        var h = [f[0][0][0], g, f[0][0][2]];
                        e.push([c, d, h])
                      }
                    }
                  }), d.abrupt("return", e);
                case 3:
                case"end":
                  return d.stop()
              }
            }, d)
          }));
          return function () {
            return c.apply(this, arguments)
          }
        }()
      }

      function Zb(a, b) {
        var c = b.noise(), d = new vg.m(a, "minecraft:desert_after_surface_desert_well_feature"),
          e = function (a, b, d) {
            return Me(c, a, b, d) === Dc
          }, f = function () {
            var a = uc()(wc().mark(function b(a) {
              var f;
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    return f = [], n(a, function (a, b) {
                      if (e(16 * a + 8, 128, 16 * b + 8)) {
                        var g = d.getSeedForChunk(a, b), h = new rc(g);
                        if (!(h.nextInt(500) >= 1)) {
                          var i = 16 * b + Bg(h, 0, 16), j = 16 * a + Bg(h, 0, 16);
                          if (e(j, 128, i)) {
                            var k = c.getSurfaceBlock(j, i, "oceanFloor", "topmostAccurate"), l = Xb(c, [j, k, i]);
                            null != l && f.push([a, b, [j, l, i]])
                          }
                        }
                      }
                    }), b.abrupt("return", f);
                  case 3:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }();
        return f.free = function () {
          d.free()
        }, f
      }

      function $b() {
        return _b.apply(this, arguments)
      }

      function _b() {
        return _b = uc()(wc().mark(function a(b, c, d) {
          var e, f;
          return wc().wrap(function (a) {
            for (; ;) switch (a.prev = a.next) {
              case 0:
                return e = k(c, {x1: 1, z1: 1}), a.next = 3, Xe(function () {
                  var a = uc()(wc().mark(function b(a) {
                    var c;
                    return wc().wrap(function (b) {
                      for (; ;) switch (b.prev = b.next) {
                        case 0:
                          return c = d.findPositionsBedrock(a.x, a.z, a.sizeX, a.sizeZ), b.abrupt("return", r(c, function (a) {
                            return [a[0] >> 4, a[2] >> 4]
                          }));
                        case 2:
                        case"end":
                          return b.stop()
                      }
                    }, b)
                  }));
                  return function () {
                    return a.apply(this, arguments)
                  }
                }(), 20)(e);
              case 3:
                return f = a.sent, a.abrupt("return", f.reduce(function (a, b) {
                  return a.push.apply(a, b[2]), a
                }, []));
              case 5:
              case"end":
                return a.stop()
            }
          }, a)
        })), _b.apply(this, arguments)
      }

      function ac() {
        return bc.apply(this, arguments)
      }

      function bc() {
        return bc = uc()(wc().mark(function a(b, c, d, e) {
          var f, g;
          return wc().wrap(function (a) {
            for (; ;) switch (a.prev = a.next) {
              case 0:
                return f = k(c, {x0: -1, z0: -1}), a.next = 3, Xe(function () {
                  var a = uc()(wc().mark(function c(a) {
                    var f, g;
                    return wc().wrap(function (c) {
                      for (; ;) switch (c.prev = c.next) {
                        case 0:
                          if (f = [], n(a, function (a, c) {
                            var d = wb(b, a, c, {
                              decorationStepOrdinal: 1,
                              featureIndex: 0,
                              placement: [pg({chance: 9}), function (a, b, c) {
                                var d = b.random, e = a[0] + d.nextInt(16), f = a[2] + d.nextInt(16);
                                c([e, a[1], f])
                              }, sg.uniform({minInclusive: 0, maxInclusive: 319}), tg({
                                provider: e,
                                disallowedBiomes: [fe]
                              })],
                              feature: function (a) {
                                return [a]
                              }
                            }).flat();
                            f.push.apply(f, d)
                          }), !(f.length < 1)) {
                            c.next = 4;
                            break
                          }
                          return c.abrupt("return", []);
                        case 4:
                          return g = d.testFeaturePositionsJava(f), c.abrupt("return", r(g, function (a) {
                            return [a[0] >> 4, a[2] >> 4]
                          }));
                        case 6:
                        case"end":
                          return c.stop()
                      }
                    }, c)
                  }));
                  return function () {
                    return a.apply(this, arguments)
                  }
                }(), 20)(f);
              case 3:
                return g = a.sent, a.abrupt("return", g.reduce(function (a, b) {
                  return a.push.apply(a, b[2]), a
                }, []));
              case 5:
              case"end":
                return a.stop()
            }
          }, a)
        })), bc.apply(this, arguments)
      }

      a.r(d), a.d(d, {
        AncientCityFinder: function () {
          return Ig
        }, BastionRemnantFinder: function () {
          return Je
        }, BedrockRandom: function () {
          return rc
        }, BedrockVersion: function () {
          return xc.BedrockVersion
        }, BiomeProvider: function () {
          return ec.BiomeProvider
        }, BiomeProviderEnd: function () {
          return oe
        }, BiomeProviderLegacy: function () {
          return re
        }, BiomeProviderMultiNoise: function () {
          return ne.T5
        }, BiomeProviderNether: function () {
          return qe
        }, BiomeTags: function () {
          return Ce
        }, Biomes: function () {
          return cc
        }, BuriedTreasureFinder: function () {
          return Qe
        }, DesertTempleFinder: function () {
          return wf
        }, Dimension: function () {
          return xc.Dimension
        }, DungeonFinder: function () {
          return Ze
        }, DungeonType: function () {
          return xc.DungeonType
        }, Edition: function () {
          return xc.Edition
        }, EndCityFinder: function () {
          return af
        }, EndGatewayFinder: function () {
          return Eg
        }, FossilOverworldFinder: function () {
          return wg
        }, HeightType: function () {
          return ne.LX
        }, IglooFinder: function () {
          return zf
        }, ItemOverworldFinder: function () {
          return Og
        }, JavaRandom: function () {
          return mc
        }, JavaVersion: function () {
          return xc.JavaVersion
        }, JungleTempleFinder: function () {
          return xf
        }, LavaPoolFinder: function () {
          return bh
        }, Long: function () {
          return gc
        }, MineshaftFinder: function () {
          return Ye
        }, NetherFortressFinder: function () {
          return ff
        }, OceanMonumentFinder: function () {
          return lf
        }, OceanRuinFinder: function () {
          return mg
        }, OreVeinFinder: function () {
          return Qg
        }, POI: function () {
          return xc.POI
        }, PillagerOutpostFinder: function () {
          return gg
        }, RavineFinder: function () {
          return Cg
        }, RuinedPortalNetherFinder: function () {
          return nf
        }, RuinedPortalOverworldFinder: function () {
          return mf
        }, ShipwreckFinder: function () {
          return Af
        }, SlimeChunkFinder: function () {
          return Df
        }, SpawnFinder: function () {
          return og
        }, StrongholdFinder: function () {
          return Wf
        }, VillageFinder: function () {
          return Kf
        }, WitchHutFinder: function () {
          return yf
        }, WoodlandMansionFinder: function () {
          return cg
        }, biomeList: function () {
          return Ee
        }, createBiomeProvider: function () {
          return te
        }, createPoiFinder: function () {
          return eh
        }, createRngStructureFeatureBedrockSeed: function () {
          return J
        }, getBiomeById: function () {
          return Fe
        }, getSupportedPois: function () {
          return dh
        }, matchesBiome: function () {
          return De
        }, rngLargeFeature: function () {
          return c
        }, rngLargeFeatureWithSalt: function () {
          return i
        }, rngStructureFeatureBedrock: function () {
          return H
        }, rngStructureFeatureBedrockSeed: function () {
          return I
        }, seedDecoration: function () {
          return F
        }, supportsCaveBiomes: function () {
          return se
        }, types: function () {
          return xc
        }, utils: function () {
          return dc
        }
      });
      var cc = {};
      a.r(cc), a.d(cc, {
        badlands: function () {
          return kd
        }, bambooJungle: function () {
          return Td
        }, basaltDeltas: function () {
          return Yd
        }, beach: function () {
          return Rc
        }, biomeList: function () {
          return zc
        }, birchForest: function () {
          return ad
        }, cherryGrove: function () {
          return he
        }, coldOcean: function () {
          return td
        }, crimsonForest: function () {
          return Wd
        }, darkForest: function () {
          return cd
        }, deepColdOcean: function () {
          return wd
        }, deepDark: function () {
          return fe
        }, deepFrozenOcean: function () {
          return xd
        }, deepLukewarmOcean: function () {
          return vd
        }, deepOcean: function () {
          return Zc
        }, desert: function () {
          return Dc
        }, dripstoneCaves: function () {
          return Zd
        }, endBarrens: function () {
          return qd
        }, endHighlands: function () {
          return pd
        }, endMidlands: function () {
          return od
        }, erodedBadlands: function () {
          return Qd
        }, flowerForest: function () {
          return Bd
        }, forest: function () {
          return Fc
        }, frozenOcean: function () {
          return Lc
        }, frozenPeaks: function () {
          return ce
        }, frozenRiver: function () {
          return Mc
        }, grove: function () {
          return ae
        }, iceSpikes: function () {
          return Ed
        }, jaggedPeaks: function () {
          return de
        }, jungle: function () {
          return Wc
        }, legacyBadlandsPlateau: function () {
          return md
        }, legacyBambooJungleHills: function () {
          return Ud
        }, legacyBirchForestHills: function () {
          return bd
        }, legacyDarkForestHills: function () {
          return Jd
        }, legacyDeepWarmOcean: function () {
          return ud
        }, legacyDesertHills: function () {
          return Sc
        }, legacyDesertLakes: function () {
          return zd
        }, legacyGiantSpruceTaigaHills: function () {
          return Md
        }, legacyGiantTreeTaigaHills: function () {
          return gd
        }, legacyJungleHills: function () {
          return Xc
        }, legacyModifiedBadlandsPlateau: function () {
          return Sd
        }, legacyModifiedGravellyMountains: function () {
          return Nd
        }, legacyModifiedJungle: function () {
          return Fd
        }, legacyModifiedJungleEdge: function () {
          return Gd
        }, legacyModifiedWoodedBadlandsPlateau: function () {
          return Rd
        }, legacyMountainEdge: function () {
          return Vc
        }, legacyMushroomFieldsShore: function () {
          return Qc
        }, legacyShatteredSavannaPlateau: function () {
          return Pd
        }, legacySnowyMountains: function () {
          return Oc
        }, legacySnowyTaigaHills: function () {
          return ed
        }, legacySnowyTaigaMountains: function () {
          return Kd
        }, legacySwampHills: function () {
          return Dd
        }, legacyTaigaHills: function () {
          return Uc
        }, legacyTaigaMountains: function () {
          return Cd
        }, legacyTallBirchHills: function () {
          return Id
        }, legacyWoodedMountains: function () {
          return hd
        }, lukeWarmOcean: function () {
          return sd
        }, lushCaves: function () {
          return $d
        }, mangroveSwamp: function () {
          return ge
        }, meadow: function () {
          return _d
        }, mushroomFields: function () {
          return Pc
        }, mutatedBiomeMap: function () {
          return Ac
        }, netherWastes: function () {
          return Jc
        }, ocean: function () {
          return Bc
        }, oldGrowthBirchForest: function () {
          return Hd
        }, oldGrowthPineTaiga: function () {
          return fd
        }, oldGrowthSpruceTaiga: function () {
          return Ld
        }, paleGarden: function () {
          return ie
        }, plains: function () {
          return Cc
        }, river: function () {
          return Ic
        }, savanna: function () {
          return id
        }, savannaPlateau: function () {
          return jd
        }, smallEndIslands: function () {
          return nd
        }, snowyBeach: function () {
          return _c
        }, snowyPlains: function () {
          return Nc
        }, snowySlopes: function () {
          return be
        }, snowyTaiga: function () {
          return dd
        }, soulSandValley: function () {
          return Vd
        }, sparseJungle: function () {
          return Yc
        }, stonyPeaks: function () {
          return ee
        }, stonyShore: function () {
          return $c
        }, sunflowerPlains: function () {
          return yd
        }, swamp: function () {
          return Hc
        }, taiga: function () {
          return Gc
        }, theEnd: function () {
          return Kc
        }, warmOcean: function () {
          return rd
        }, warpedForest: function () {
          return Xd
        }, windsweptForest: function () {
          return Tc
        }, windsweptGravellyHills: function () {
          return Ad
        }, windsweptHills: function () {
          return Ec
        }, windsweptSavanna: function () {
          return Od
        }, woodedBadlands: function () {
          return ld
        }
      });
      var dc = {};
      a.r(dc), a.d(dc, {
        areBiomesSimilar: function () {
          return B
        }, findBiomeHorizontal: function () {
          return D
        }, getBiomeById: function () {
          return C
        }, getTempCategory: function () {
          return y
        }, isOcean: function () {
          return z
        }, isShallowOcean: function () {
          return A
        }
      });
      var ec = {};
      a.r(ec), a.d(ec, {
        I: function () {
          return te
        }
      }), a(8294);
      var fc, gc = a(3720), hc = a.n(gc), ic = gc.fromString("25214903917"), jc = gc.fromInt(11),
        kc = gc.ONE.shiftLeft(53).toNumber(), lc = gc.ONE.shiftLeft(48).subtract(gc.ONE), mc = function () {
          function a(a) {
            void 0 === a && (a = gc.ZERO), this.seed = gc.ONE, this.setSeed(a)
          }

          var b = a.prototype;
          return b.setSeed = function (a) {
            this.seed = a.xor(ic).and(lc)
          }, b.getSeed = function () {
            return this.seed
          }, b.restoreSeed = function (a) {
            this.seed = a
          }, b.nextInt = function (a) {
            if (null == a) return this._next(32);
            var b, c, d = gc.fromInt(a), e = d.toNumber();
            if (d.and(d.negate()).equals(d)) return d.multiply(gc.fromInt(this._next(31))).shiftRight(31).toInt();
            do b = (c = this._next(31)) % e; while (0 > c - b + e - 1);
            return b
          }, b.nextIntVoid = function (a) {
            if (void 0 !== a) {
              var b, c, d = gc.fromInt(a), e = d.toNumber();
              if (d.and(d.negate()).equals(d)) this._nextVoid(); else do b = (c = this._next(31)) % e; while (0 > c - b + e - 1)
            } else this._nextVoid()
          }, b.nextLong = function () {
            return gc.fromInt(this._next(32)).shiftLeft(32).add(gc.fromInt(this._next(32)))
          }, b.nextLongVoid = function () {
            this._nextVoid(), this._nextVoid()
          }, b.nextFloat = function () {
            return this._next(24) / (1 << 24)
          }, b.nextFloatVoid = function () {
            this._nextVoid()
          }, b.nextDouble = function () {
            return gc.fromInt(this._next(26)).shiftLeft(27).add(gc.fromInt(this._next(27))).toNumber() / kc
          }, b.nextDoubleVoid = function () {
            this._nextVoid(), this._nextVoid()
          }, b.nextBoolean = function () {
            return 0 !== this._next(1)
          }, b._next = function (a) {
            return this.seed = this.seed.multiply(ic).add(jc).and(lc), this.seed.shiftRightUnsigned(48 - a).toInt()
          }, b._nextVoid = function () {
            this.seed = this.seed.multiply(ic).add(jc).and(lc)
          }, b.consumeCount = function (a) {
            for (var b = 0; a > b; ++b) this._nextVoid()
          }, b.free = function () {
          }, a
        }(),
        nc = (a(4755), a(6992), a(1539), a(4197), a(2990), a(8927), a(3105), a(5035), a(4345), a(7174), a(2846), a(4731), a(7209), a(6319), a(8867), a(7789), a(3739), a(9368), a(4483), a(2056), a(3462), a(678), a(7462), a(3824), a(5021), a(2974), a(5016), a(7996)),
        oc = a.n(nc), pc = Math.fround || (fc = new Float32Array(1), function (a) {
          return fc[0] = a, fc[0]
        }), qc = gc.fromNumber(4294967295), rc = function () {
          function a(a) {
            this.rng = void 0, this.rng = new (oc())("number" == typeof a ? a : a.toInt())
          }

          var b = a.prototype;
          return b.setSeed = function (a) {
            this.rng.init_seed("number" == typeof a ? a : a.toInt())
          }, b.nextInt = function (a) {
            return null == a ? this.rng.random_int() >>> 1 : (b = this.rng.random_int(), gc.fromInt(b).and(qc).toNumber() % a);
            var b
          }, b.nextIntRaw = function () {
            return this.rng.random_int()
          }, b.nextIntRange = function (a, b) {
            return b > a ? a + this.nextInt(b - a) : a
          }, b.nextFloat = function () {
            return pc(this.rng.random())
          }, b.nextDouble = function () {
            return this.rng.random()
          }, b.nextBoolean = function () {
            return 0 != (134217728 & this.rng.random_int())
          }, a
        }();
      rc.INSTANCE = new rc(0);
      var sc, tc = a(8926), uc = a.n(tc), vc = a(7757), wc = a.n(vc), xc = (a(6699), a(2023), a(6452)), yc = "none",
        zc = [], Ac = {}, Bc = b({
          id: 0,
          key: "ocean",
          name: "Ocean",
          category: "ocean",
          temperature: .5,
          precipitation: "rain",
          depth: -1,
          rgb: [0, 0, 112],
          dimension: xc.Dimension.Overworld
        }), Cc = b({
          id: 1,
          key: "plains",
          name: "Plains",
          category: "plains",
          temperature: .8,
          precipitation: "rain",
          depth: .125,
          rgb: [141, 179, 96],
          dimension: xc.Dimension.Overworld
        }), Dc = b({
          id: 2,
          key: "desert",
          name: "Desert",
          category: "desert",
          temperature: 2,
          precipitation: "none",
          depth: .125,
          rgb: [250, 148, 24],
          dimension: xc.Dimension.Overworld
        }), Ec = b({
          id: 3,
          key: "windswept_hills",
          name: "Windswept Hills",
          oldNames: ["Mountains"],
          category: "extreme_hills",
          temperature: .2,
          precipitation: "rain",
          depth: 1,
          rgb: [96, 96, 96],
          dimension: xc.Dimension.Overworld
        }), Fc = b({
          id: 4,
          key: "forest",
          name: "Forest",
          category: "forest",
          temperature: .7,
          precipitation: "rain",
          depth: .1,
          rgb: [5, 102, 33],
          dimension: xc.Dimension.Overworld
        }), Gc = b({
          id: 5,
          key: "taiga",
          name: "Taiga",
          category: "taiga",
          temperature: .25,
          precipitation: "rain",
          depth: .2,
          rgb: [11, 102, 89],
          dimension: xc.Dimension.Overworld
        }), Hc = b({
          id: 6,
          key: "swamp",
          name: "Swamp",
          category: "swamp",
          temperature: .8,
          precipitation: "rain",
          depth: -.2,
          rgb: [7, 249, 178],
          dimension: xc.Dimension.Overworld
        }), Ic = b({
          id: 7,
          key: "river",
          name: "River",
          category: "river",
          temperature: .5,
          precipitation: "rain",
          depth: -.5,
          rgb: [0, 0, 255],
          dimension: xc.Dimension.Overworld
        }), Jc = b({
          id: 8,
          key: "nether_wastes",
          name: "Nether Wastes",
          category: "nether",
          temperature: 2,
          precipitation: "none",
          depth: .1,
          rgb: [191, 59, 59],
          climates: [{temperature: 0, humidity: 0, altitude: 0, weirdness: 0, offset: 0}],
          dimension: xc.Dimension.Nether
        }), Kc = b({
          id: 9,
          key: "the_end",
          name: "The End",
          category: "the_end",
          temperature: .5,
          precipitation: "none",
          depth: .1,
          rgb: [128, 128, 255],
          dimension: xc.Dimension.End
        }), Lc = b({
          id: 10,
          key: "frozen_ocean",
          name: "Frozen Ocean",
          category: "ocean",
          temperature: 0,
          precipitation: "snow",
          depth: -1,
          rgb: [112, 112, 214],
          dimension: xc.Dimension.Overworld
        }), Mc = b({
          id: 11,
          key: "frozen_river",
          name: "Frozen River",
          category: "river",
          temperature: 0,
          precipitation: "snow",
          depth: -.5,
          rgb: [160, 160, 255],
          dimension: xc.Dimension.Overworld
        }), Nc = b({
          id: 12,
          key: "snowy_plains",
          name: "Snowy Plains",
          oldNames: ["Snowy Tundra"],
          category: "icy",
          temperature: 0,
          precipitation: "snow",
          depth: .125,
          rgb: [255, 255, 255],
          dimension: xc.Dimension.Overworld
        }), Oc = b({
          id: 13,
          name: "Snowy Mountains",
          category: "icy",
          temperature: 0,
          precipitation: "snow",
          depth: .45,
          rgb: [160, 160, 160],
          dimension: xc.Dimension.Overworld
        }), Pc = b({
          id: 14,
          key: "mushroom_fields",
          name: "Mushroom Fields",
          category: "mushroom",
          temperature: .9,
          precipitation: "rain",
          depth: .2,
          rgb: [255, 0, 255],
          dimension: xc.Dimension.Overworld
        }), Qc = b({
          id: 15,
          name: "Mushroom Fields Shore",
          category: "mushroom",
          temperature: .9,
          precipitation: "rain",
          depth: 0,
          rgb: [160, 0, 255],
          dimension: xc.Dimension.Overworld
        }), Rc = b({
          id: 16,
          key: "beach",
          name: "Beach",
          category: "beach",
          temperature: .8,
          precipitation: "rain",
          depth: 0,
          rgb: [250, 222, 85],
          dimension: xc.Dimension.Overworld
        }), Sc = b({
          id: 17,
          name: "Desert Hills",
          category: "desert",
          temperature: 2,
          precipitation: "none",
          depth: .45,
          rgb: [210, 95, 18],
          dimension: xc.Dimension.Overworld
        }), Tc = b({
          id: 18,
          key: "windswept_forest",
          name: "Windswept Forest",
          oldNames: ["Wooded Hills"],
          category: "forest",
          temperature: .7,
          precipitation: "rain",
          depth: .45,
          rgb: [34, 85, 28],
          dimension: xc.Dimension.Overworld
        }), Uc = b({
          id: 19,
          name: "Taiga Hills",
          category: "taiga",
          temperature: .25,
          precipitation: "rain",
          depth: .45,
          rgb: [22, 57, 51],
          dimension: xc.Dimension.Overworld
        }), Vc = b({
          id: 20,
          name: "Mountain Edge",
          category: "extreme_hills",
          temperature: .2,
          precipitation: "rain",
          depth: .8,
          rgb: [114, 120, 154],
          dimension: xc.Dimension.Overworld
        }), Wc = b({
          id: 21,
          key: "jungle",
          name: "Jungle",
          category: "jungle",
          temperature: .95,
          precipitation: "rain",
          depth: .1,
          rgb: [83, 123, 9],
          dimension: xc.Dimension.Overworld
        }), Xc = b({
          id: 22,
          name: "Jungle Hills",
          category: "jungle",
          temperature: .95,
          precipitation: "rain",
          depth: .45,
          rgb: [44, 66, 5],
          dimension: xc.Dimension.Overworld
        }), Yc = b({
          id: 23,
          key: "sparse_jungle",
          name: "Sparse Jungle",
          oldNames: ["Jungle Edge"],
          category: "jungle",
          temperature: .95,
          precipitation: "rain",
          depth: .1,
          rgb: [98, 139, 23],
          dimension: xc.Dimension.Overworld
        }), Zc = b({
          id: 24,
          key: "deep_ocean",
          name: "Deep Ocean",
          category: "ocean",
          temperature: .5,
          precipitation: "rain",
          depth: -1.8,
          rgb: [0, 0, 48],
          dimension: xc.Dimension.Overworld
        }), $c = b({
          id: 25,
          key: "stony_shore",
          name: "Stony Shore",
          oldNames: ["Stone Shore"],
          category: "none",
          temperature: .2,
          precipitation: "rain",
          depth: .1,
          rgb: [162, 162, 132],
          dimension: xc.Dimension.Overworld
        }), _c = b({
          id: 26,
          key: "snowy_beach",
          name: "Snowy Beach",
          category: "beach",
          temperature: .05,
          precipitation: "snow",
          depth: 0,
          rgb: [250, 240, 192],
          dimension: xc.Dimension.Overworld
        }), ad = b({
          id: 27,
          key: "birch_forest",
          name: "Birch Forest",
          category: "forest",
          temperature: .6,
          precipitation: "rain",
          depth: .1,
          rgb: [48, 116, 68],
          dimension: xc.Dimension.Overworld
        }), bd = b({
          id: 28,
          name: "Birch Forest Hills",
          category: "forest",
          temperature: .6,
          precipitation: "rain",
          depth: .45,
          rgb: [31, 95, 50],
          dimension: xc.Dimension.Overworld
        }), cd = b({
          id: 29,
          key: "dark_forest",
          name: "Dark Forest",
          category: "forest",
          temperature: .7,
          precipitation: "rain",
          depth: .1,
          rgb: [64, 81, 26],
          dimension: xc.Dimension.Overworld
        }), dd = b({
          id: 30,
          key: "snowy_taiga",
          name: "Snowy Taiga",
          category: "taiga",
          temperature: -.5,
          precipitation: "snow",
          depth: .2,
          rgb: [49, 85, 74],
          dimension: xc.Dimension.Overworld
        }), ed = b({
          id: 31,
          name: "Snowy Taiga Hills",
          category: "taiga",
          temperature: -.5,
          precipitation: "snow",
          depth: .45,
          rgb: [36, 63, 54],
          dimension: xc.Dimension.Overworld
        }), fd = b({
          id: 32,
          key: "old_growth_pine_taiga",
          name: "Old Growth Pine Taiga",
          oldNames: ["Giant Tree Taiga"],
          category: "taiga",
          temperature: .3,
          precipitation: "rain",
          depth: .2,
          rgb: [89, 102, 81],
          dimension: xc.Dimension.Overworld
        }), gd = b({
          id: 33,
          name: "Giant Tree Taiga Hills",
          category: "taiga",
          temperature: .3,
          precipitation: "rain",
          depth: .45,
          rgb: [69, 79, 62],
          dimension: xc.Dimension.Overworld
        }), hd = b({
          id: 34,
          name: "Wooded Mountains",
          category: "extreme_hills",
          temperature: .2,
          precipitation: "rain",
          depth: 1,
          rgb: [80, 112, 80],
          dimension: xc.Dimension.Overworld
        }), id = b({
          id: 35,
          key: "savanna",
          name: "Savanna",
          category: "savanna",
          temperature: 1.2,
          precipitation: "none",
          depth: .125,
          rgb: [189, 178, 95],
          dimension: xc.Dimension.Overworld
        }), jd = b({
          id: 36,
          key: "savanna_plateau",
          name: "Savanna Plateau",
          category: "savanna",
          temperature: 1,
          precipitation: "none",
          depth: 1.5,
          rgb: [167, 157, 100],
          dimension: xc.Dimension.Overworld
        }), kd = b({
          id: 37,
          key: "badlands",
          name: "Badlands",
          category: "mesa",
          temperature: 2,
          precipitation: "none",
          depth: .1,
          rgb: [217, 69, 21],
          dimension: xc.Dimension.Overworld
        }), ld = b({
          id: 38,
          key: "wooded_badlands",
          name: "Wooded Badlands",
          oldNames: ["Wooded Badlands Plateau"],
          category: "mesa",
          temperature: 2,
          precipitation: "none",
          depth: 1.5,
          rgb: [176, 151, 101],
          dimension: xc.Dimension.Overworld
        }), md = b({
          id: 39,
          name: "Badlands Plateau",
          category: "mesa",
          temperature: 2,
          precipitation: "none",
          depth: 1.5,
          rgb: [202, 140, 101],
          dimension: xc.Dimension.Overworld
        }), nd = b({
          id: 40,
          key: "small_end_islands",
          name: "Small End Islands",
          category: "the_end",
          temperature: .5,
          precipitation: "none",
          depth: .1,
          rgb: [0, 0, 42],
          dimension: xc.Dimension.End
        }), od = b({
          id: 41,
          key: "end_midlands",
          name: "End Midlands",
          category: "the_end",
          temperature: .5,
          precipitation: "none",
          depth: .1,
          rgb: [235, 248, 182],
          dimension: xc.Dimension.End
        }), pd = b({
          id: 42,
          key: "end_highlands",
          name: "End Highlands",
          category: "the_end",
          temperature: .5,
          precipitation: "none",
          depth: .1,
          rgb: [195, 189, 137],
          dimension: xc.Dimension.End
        }), qd = b({
          id: 43,
          key: "end_barrens",
          name: "End Barrens",
          category: "the_end",
          temperature: .5,
          precipitation: "none",
          depth: .1,
          rgb: [144, 144, 114],
          dimension: xc.Dimension.End
        }), rd = b({
          id: 44,
          key: "warm_ocean",
          name: "Warm Ocean",
          category: "ocean",
          temperature: .5,
          precipitation: "rain",
          depth: -1,
          rgb: [0, 0, 172],
          dimension: xc.Dimension.Overworld
        }), sd = b({
          id: 45,
          key: "lukewarm_ocean",
          name: "Lukewarm Ocean",
          category: "ocean",
          temperature: .5,
          precipitation: "rain",
          depth: -1,
          rgb: [0, 0, 144],
          dimension: xc.Dimension.Overworld
        }), td = b({
          id: 46,
          key: "cold_ocean",
          name: "Cold Ocean",
          category: "ocean",
          temperature: .5,
          precipitation: "rain",
          depth: -1,
          rgb: [32, 32, 112],
          dimension: xc.Dimension.Overworld
        }), ud = b({
          id: 47,
          key: "deep_warm_ocean",
          name: "Deep Warm Ocean",
          category: "ocean",
          temperature: .5,
          precipitation: "rain",
          depth: -1.8,
          rgb: [0, 0, 80],
          dimension: xc.Dimension.Overworld
        }), vd = b({
          id: 48,
          key: "deep_lukewarm_ocean",
          name: "Deep Lukewarm Ocean",
          category: "ocean",
          temperature: .5,
          precipitation: "rain",
          depth: -1.8,
          rgb: [0, 0, 64],
          dimension: xc.Dimension.Overworld
        }), wd = b({
          id: 49,
          key: "deep_cold_ocean",
          name: "Deep Cold Ocean",
          category: "ocean",
          temperature: .5,
          precipitation: "rain",
          depth: -1.8,
          rgb: [32, 32, 56],
          dimension: xc.Dimension.Overworld
        }), xd = b({
          id: 50,
          key: "deep_frozen_ocean",
          name: "Deep Frozen Ocean",
          category: "ocean",
          temperature: .5,
          precipitation: "rain",
          depth: -1.8,
          rgb: [64, 64, 144],
          dimension: xc.Dimension.Overworld
        }), yd = b({
          id: 129,
          name: "Sunflower Plains",
          key: "sunflower_plains",
          category: "plains",
          temperature: .8,
          precipitation: "rain",
          depth: .125,
          rgb: [181, 219, 136],
          parent: Cc.id,
          dimension: xc.Dimension.Overworld
        }), zd = b({
          id: 130,
          name: "Desert Lakes",
          category: "desert",
          temperature: 2,
          precipitation: "none",
          depth: .125,
          rgb: [255, 188, 64],
          parent: Dc.id,
          dimension: xc.Dimension.Overworld
        }), Ad = b({
          id: 131,
          key: "windswept_gravelly_hills",
          name: "Windswept Gravelly Hills",
          oldNames: ["Gravelly Mountains"],
          category: "extreme_hills",
          temperature: .2,
          precipitation: "rain",
          depth: 1,
          rgb: [136, 136, 136],
          parent: Ec.id,
          dimension: xc.Dimension.Overworld
        }), Bd = b({
          id: 132,
          key: "flower_forest",
          name: "Flower Forest",
          category: "forest",
          temperature: .7,
          precipitation: "rain",
          depth: .1,
          rgb: [45, 142, 73],
          parent: Fc.id,
          dimension: xc.Dimension.Overworld
        }), Cd = b({
          id: 133,
          name: "Taiga Mountains",
          category: "taiga",
          temperature: .25,
          precipitation: "rain",
          depth: .3,
          rgb: [51, 142, 129],
          parent: Gc.id,
          dimension: xc.Dimension.Overworld
        }), Dd = b({
          id: 134,
          name: "Swamp Hills",
          category: "swamp",
          temperature: .8,
          precipitation: "rain",
          depth: -.1,
          rgb: [47, 255, 218],
          parent: Hc.id,
          dimension: xc.Dimension.Overworld
        }), Ed = b({
          id: 140,
          key: "ice_spikes",
          name: "Ice Spikes",
          category: "icy",
          temperature: 0,
          precipitation: "snow",
          depth: .425,
          rgb: [180, 220, 220],
          parent: Nc.id,
          dimension: xc.Dimension.Overworld
        }), Fd = b({
          id: 149,
          name: "Modified Jungle",
          category: "jungle",
          temperature: .95,
          precipitation: "rain",
          depth: .2,
          rgb: [123, 163, 49],
          parent: Wc.id,
          dimension: xc.Dimension.Overworld
        }), Gd = b({
          id: 151,
          name: "Modified Jungle Edge",
          category: "jungle",
          temperature: .95,
          precipitation: "rain",
          depth: .2,
          rgb: [138, 179, 63],
          parent: Yc.id,
          dimension: xc.Dimension.Overworld
        }), Hd = b({
          id: 155,
          key: "old_growth_birch_forest",
          name: "Old Growth Birch Forest",
          oldNames: ["Tall Birch Forest"],
          category: "forest",
          temperature: .6,
          precipitation: "rain",
          depth: .2,
          rgb: [88, 156, 108],
          parent: ad.id,
          dimension: xc.Dimension.Overworld
        }), Id = b({
          id: 156,
          name: "Tall Birch Hills",
          category: "forest",
          temperature: .6,
          precipitation: "rain",
          depth: .55,
          rgb: [71, 135, 90],
          parent: bd.id,
          dimension: xc.Dimension.Overworld
        }), Jd = b({
          id: 157,
          name: "Dark Forest Hills",
          category: "forest",
          temperature: .7,
          precipitation: "rain",
          depth: .2,
          rgb: [104, 121, 66],
          parent: cd.id,
          dimension: xc.Dimension.Overworld
        }), Kd = b({
          id: 158,
          name: "Snowy Taiga Mountains",
          category: "taiga",
          temperature: -.5,
          precipitation: "snow",
          depth: .3,
          rgb: [89, 125, 114],
          parent: dd.id,
          dimension: xc.Dimension.Overworld
        }), Ld = b({
          id: 160,
          key: "old_growth_spruce_taiga",
          name: "Old Growth Spruce Taiga",
          oldNames: ["Giant Spruce Taiga"],
          category: "taiga",
          temperature: .25,
          precipitation: "rain",
          depth: .2,
          rgb: [129, 142, 121],
          parent: fd.id,
          dimension: xc.Dimension.Overworld
        }), Md = b({
          id: 161,
          name: "Giant Spruce Taiga Hills",
          category: "taiga",
          temperature: .25,
          precipitation: "rain",
          depth: .2,
          rgb: [109, 119, 102],
          parent: gd.id,
          dimension: xc.Dimension.Overworld
        }), Nd = b({
          id: 162,
          name: "Gravelly Mountains+",
          category: "extreme_hills",
          temperature: .2,
          precipitation: "rain",
          depth: 1,
          rgb: [120, 152, 120],
          parent: hd.id,
          dimension: xc.Dimension.Overworld
        }), Od = b({
          id: 163,
          key: "windswept_savanna",
          name: "Windswept Savanna",
          oldNames: ["Shattered Savanna"],
          category: "savanna",
          temperature: 1.1,
          precipitation: "none",
          depth: .3625,
          rgb: [229, 218, 135],
          parent: id.id,
          dimension: xc.Dimension.Overworld
        }), Pd = b({
          id: 164,
          name: "Shattered Savanna Plateau",
          category: "savanna",
          temperature: 1,
          precipitation: "none",
          rgb: [207, 197, 140],
          depth: 1.05,
          parent: jd.id,
          dimension: xc.Dimension.Overworld
        }), Qd = b({
          id: 165,
          key: "eroded_badlands",
          name: "Eroded Badlands",
          category: "mesa",
          temperature: 2,
          precipitation: "none",
          depth: .1,
          rgb: [255, 109, 61],
          parent: kd.id,
          dimension: xc.Dimension.Overworld
        }), Rd = b({
          id: 166,
          name: "Modified Wooded Badlands Plateau",
          category: "mesa",
          temperature: 2,
          precipitation: "none",
          depth: .45,
          rgb: [216, 191, 141],
          parent: ld.id,
          dimension: xc.Dimension.Overworld
        }), Sd = b({
          id: 167,
          name: "Modified Badlands Plateau",
          category: "mesa",
          temperature: 2,
          precipitation: "none",
          depth: .45,
          rgb: [242, 180, 141],
          parent: md.id,
          dimension: xc.Dimension.Overworld
        }), Td = b({
          id: 168,
          key: "bamboo_jungle",
          name: "Bamboo Jungle",
          category: "jungle",
          temperature: .95,
          precipitation: "rain",
          depth: .1,
          rgb: [118, 142, 20],
          dimension: xc.Dimension.Overworld
        }), Ud = b({
          id: 169,
          name: "Bamboo Jungle Hills",
          category: "jungle",
          temperature: .95,
          precipitation: "rain",
          depth: .45,
          rgb: [59, 71, 10],
          dimension: xc.Dimension.Overworld
        }), Vd = b({
          id: 170,
          key: "soul_sand_valley",
          name: "Soul Sand Valley",
          category: "nether",
          temperature: 2,
          precipitation: "none",
          depth: .1,
          rgb: [94, 56, 48],
          climates: [{temperature: 0, humidity: -.5, altitude: 0, weirdness: 0, offset: 0}],
          dimension: xc.Dimension.Nether
        }), Wd = b({
          id: 171,
          key: "crimson_forest",
          name: "Crimson Forest",
          category: "nether",
          temperature: 2,
          precipitation: "none",
          depth: .1,
          rgb: [221, 8, 8],
          climates: [{temperature: .4, humidity: 0, altitude: 0, weirdness: 0, offset: 0}],
          dimension: xc.Dimension.Nether
        }), Xd = b({
          id: 172,
          key: "warped_forest",
          name: "Warped Forest",
          category: "nether",
          temperature: 2,
          precipitation: "none",
          depth: .1,
          rgb: [73, 144, 123],
          climates: [{temperature: 0, humidity: .5, altitude: 0, weirdness: 0, offset: .375}],
          dimension: xc.Dimension.Nether
        }), Yd = b({
          id: 173,
          key: "basalt_deltas",
          name: "Basalt Deltas",
          category: "nether",
          temperature: 2,
          precipitation: "none",
          depth: .1,
          rgb: [64, 54, 54],
          climates: [{temperature: -.5, humidity: 0, altitude: 0, weirdness: 0, offset: .175}],
          dimension: xc.Dimension.Nether
        }), Zd = b({
          id: 174,
          key: "dripstone_caves",
          name: "Dripstone Caves",
          category: "none",
          temperature: .8,
          precipitation: "rain",
          depth: 0,
          rgb: [193, 165, 143],
          dimension: xc.Dimension.Overworld
        }), $d = b({
          id: 175,
          key: "lush_caves",
          name: "Lush Caves",
          category: "none",
          temperature: .5,
          precipitation: "rain",
          depth: 0,
          rgb: [223, 150, 52],
          dimension: xc.Dimension.Overworld
        }), _d = b({
          id: 177,
          key: "meadow",
          name: "Meadow",
          category: "mountain",
          temperature: .5,
          precipitation: "rain",
          depth: 0,
          rgb: [140, 164, 112],
          dimension: xc.Dimension.Overworld
        }), ae = b({
          id: 178,
          key: "grove",
          name: "Grove",
          category: "forest",
          temperature: -.2,
          precipitation: "snow",
          depth: 0,
          rgb: [223, 236, 229],
          dimension: xc.Dimension.Overworld
        }), be = b({
          id: 179,
          key: "snowy_slopes",
          name: "Snowy Slopes",
          category: "mountain",
          temperature: -.3,
          precipitation: "snow",
          depth: 0,
          rgb: [218, 241, 241],
          dimension: xc.Dimension.Overworld
        }), ce = b({
          id: 180,
          key: "frozen_peaks",
          name: "Frozen Peaks",
          category: "mountain",
          temperature: -.7,
          precipitation: "snow",
          depth: 0,
          rgb: [234, 251, 251],
          dimension: xc.Dimension.Overworld
        }), de = b({
          id: 181,
          key: "jagged_peaks",
          name: "Jagged Peaks",
          category: "mountain",
          temperature: -.7,
          precipitation: "snow",
          depth: 0,
          rgb: [227, 236, 237],
          dimension: xc.Dimension.Overworld
        }), ee = b({
          id: 182,
          key: "stony_peaks",
          name: "Stony Peaks",
          category: "mountain",
          temperature: 1,
          precipitation: "rain",
          depth: 0,
          rgb: [209, 209, 209],
          dimension: xc.Dimension.Overworld
        }), fe = b({
          id: 183,
          key: "deep_dark",
          name: "Deep Dark",
          category: "none",
          temperature: .8,
          precipitation: "rain",
          depth: 0,
          rgb: [0, 0, 0],
          dimension: xc.Dimension.Overworld
        }), ge = b({
          id: 184,
          key: "mangrove_swamp",
          name: "Mangrove Swamp",
          category: "none",
          temperature: .8,
          precipitation: "rain",
          depth: 0,
          rgb: [36, 196, 142],
          dimension: xc.Dimension.Overworld
        }), he = b({
          id: 185,
          key: "cherry_grove",
          name: "Cherry Grove",
          category: "mountain",
          temperature: .5,
          precipitation: yc,
          depth: 0,
          rgb: [247, 185, 220],
          dimension: xc.Dimension.Overworld
        }), ie = b({
          id: 186,
          key: "pale_garden",
          name: "Pale Garden",
          category: "forest",
          temperature: .7,
          precipitation: yc,
          depth: 0,
          rgb: [108, 111, 150],
          dimension: xc.Dimension.Overworld
        });
      a(7327), a(1249), a(2472);
      try {
        sc = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
      } catch (cc) {
      }
      var je = 2147483648, ke = gc.fromString("341873128712"), le = gc.fromString("132897987541");
      a(4916), a(3123), a(9720);
      var me = function (a) {
        return function (b) {
          return b.edition === xc.Edition.Java ? null == a.java || "boolean" == typeof a.java ? !!a.java : Array.isArray(a.java) ? b.javaVersion >= a.java[0] && b.javaVersion <= a.java[1] : b.javaVersion === a.java : null == a.bedrock || "boolean" == typeof a.bedrock ? !!a.bedrock : Array.isArray(a.bedrock) ? b.bedrockVersion >= a.bedrock[0] && b.bedrockVersion <= a.bedrock[1] : b.bedrockVersion === a.bedrock
        }
      };
      a(7042), a(8309), a(1038), a(8783), a(2526), a(1817), a(2165), a(3948);
      var ne = a(855), oe = function () {
        function a(a) {
          this.provider = void 0, this.provider = new ne._w(a)
        }

        a.getBiome = function (b, c, d) {
          return new a(b).getBiomeAtChunk(c, d)
        };
        var b = a.prototype;
        return b.getHeightValue = function (a, b, c, d) {
          return this.provider.getHeightValue(a, b, c, d)
        }, b.getBiomeAtChunk = function (a, b) {
          return C(this.provider.getChunkBiome(a, b))
        }, b.getNoiseBiome = function (a, b, c) {
          return this.provider.getNoiseBiome(a, c)
        }, b.getChunkArea = function (a, b, c, d) {
          return this.provider.getChunkArea(a, b, c, d)
        }, b.free = function () {
          this.provider.free()
        }, a
      }(), pe = a(707), qe = function () {
        function a(a) {
          this.world = void 0, this.provider = void 0, this.areBiomesViable = E(this.getInts.bind(this)), this.world = a, this.provider = new pe.z(a)
        }

        var b = a.prototype;
        return b.getNoiseBiome = function (a, b, c) {
          return this.provider.getNoiseBiome(a, c)
        }, b.getApproxSurface = function () {
          throw new Error("getApproxSurface not implemented for nether")
        }, b.getSurfaceBlock = function () {
          throw new Error("getTopmostOccupiedBlock not implemented for nether")
        }, b.getBiomeAtChunk = function (a, b) {
          return C(this.provider.getChunkBiome(a, b))
        }, b.getChunkArea = function (a, b, c, d) {
          return this.provider.getChunkArea(a, b, c, d)
        }, b.getInts = function (a, b, c, d) {
          if (this.world.edition !== xc.Edition.Bedrock) throw new Error("method is only meant to be used with Bedrock Edition");
          for (var e = [], f = 0; d > f; f++) for (var g = 0; c > g; g++) e.push(this.getNoiseBiome(a + g, 0, b + f));
          return e
        }, b.free = function () {
          this.provider.free()
        }, a
      }();
      a(9601);
      var re = function () {
          function a(a) {
            var b = this;
            this.world = a, this.provider = void 0, this.areBiomesViable = E(function () {
              var a;
              return (a = b.provider).getInts.apply(a, arguments)
            }), this.provider = new ne.GR(a)
          }

          var b = a.prototype;
          return b.getBiomeGenAt = function (a, b, c, d) {
            this.assertBedrockOrJava115OrLess();
            for (var e = [], f = this.provider.getInts1(a, b, c, d), g = 0; c * d > g; ++g) e[g] = C(f[g]);
            return e
          }, b.getInts = function (a, b, c, d) {
            return this.provider.getInts(a, b, c, d)
          }, b.getInts1 = function (a, b, c, d) {
            return this.assertBedrockOrJava115OrLess(), this.provider.getInts1(a, b, c, d)
          }, b.findBiomePosition = function (a, b, c, d, f) {
            for (var g = a - c >> 2, h = b - c >> 2, i = (a + c >> 2) - g + 1, j = (b + c >> 2) - h + 1, k = this.provider.getInts(g, h, i, j), l = null, m = 0, n = 0; i * j > n; ++n) {
              var o = g + n % i << 2, p = h + e(n / i) << 2, q = C(k[n]);
              if (d.includes(q)) {
                var r = null == l;
                r || (r = 0 === f.nextInt(m + 1)), r && (l = [o, 0, p]), (r || this.world.edition === xc.Edition.Bedrock || this.world.javaVersion >= xc.JavaVersion.V1_13) && ++m
              }
            }
            return l
          }, b.assertJava116Plus = function () {
            if (this.world.edition !== xc.Edition.Java || this.world.javaVersion < xc.JavaVersion.V1_16) throw new Error("method is only meant to be used with Java 1.16+")
          }, b.assertBedrockOrJava115OrLess = function () {
            if (this.world.edition === xc.Edition.Java && this.world.javaVersion >= xc.JavaVersion.V1_16) throw new Error("method should not be used with Java 1.16+")
          }, b.getNoiseBiome = function (a, b) {
            return this.assertJava116Plus(), C(this.provider.getInts(a, b, 1, 1)[0])
          }, b.getBiomeForStructure = function (a, b) {
            return this.world.edition === xc.Edition.Bedrock || this.world.javaVersion < xc.JavaVersion.V1_13 ? this.getBiomeGenAt(16 * a + 8, 16 * b + 8, 1, 1)[0] : this.world.javaVersion < xc.JavaVersion.V1_16 ? this.getBiomeGenAt(16 * a + 9, 16 * b + 9, 1, 1)[0] : this.getNoiseBiome(2 + (a << 2), 2 + (b << 2))
          }, b._getBiomeArea = function (a, b, c, d, e) {
            var f = c - a + 1, g = e(a, b, f, d - b + 1);
            return function (e, h) {
              if (a > e || e > c || b > h || h > d) throw new Error("biome access out of bounds");
              return C(g[e - a + (h - b) * f])
            }
          }, b.getNoiseBiomeArea = function (a, b, c, d) {
            return this._getBiomeArea(a, b, c, d, this.provider.getInts.bind(this.provider))
          }, b.getBiomeArea = function (a, b, c, d) {
            return this.assertBedrockOrJava115OrLess(), this._getBiomeArea(a, b, c, d, this.provider.getInts1.bind(this.provider))
          }, b.free = function () {
            this.provider.free()
          }, a
        }(), se = function (a) {
          return G(a)
        }, te = function (a) {
          if (G(a)) {
            var b = Object.assign(new ne.T5(a), {
              legacy: function () {
                throw new Error("Wrong biome provider")
              }, noise: function () {
                return b
              }
            });
            return b
          }
          var c = Object.assign(new re(a), {
            legacy: function () {
              return c
            }, noise: function () {
              throw new Error("Wrong biome provider")
            }
          });
          return c
        }, ue = (a(2222), [Wc.id, Td.id, Yc.id]), ve = [xd.id, wd.id, Zc.id, vd.id],
        we = [].concat(ve, [Lc.id, Bc.id, td.id, sd.id, rd.id]), xe = [Rc.id, _c.id], ye = [Ic.id, Mc.id],
        ze = [Gc.id, dd.id, fd.id, Ld.id], Ae = [Fc.id, Bd.id, ad.id, Hd.id, cd.id, ae.id, ie.id],
        Be = [kd.id, Qd.id, ld.id], Ce = {
          IS_HILL: [Ec.id, Tc.id, Ad.id],
          IS_DEEP_OCEAN: ve,
          IS_OCEAN: we,
          IS_BADLANDS: Be,
          IS_MOUNTAIN: [_d.id, ce.id, de.id, ee.id, be.id],
          IS_JUNGLE: ue,
          IS_BEACH: xe,
          IS_RIVER: ye,
          IS_TAIGA: ze,
          IS_FOREST: Ae
        }, De = function (a, b) {
          return a.reduce(function (a, b) {
            return a.concat(b)
          }, []).includes(b)
        };
      a(332);
      var Ee = zc, Fe = C, Ge = [function (a, b, c) {
        return [a, b, c]
      }, function (a, b, c) {
        return [-c, b, a]
      }, function (a, b, c) {
        return [-a, b, -c]
      }, function (a, b, c) {
        return [c, b, -a]
      }], He = function (a, b) {
        for (var c, d = a.reduce(function (a, b) {
          return a + b[1]
        }, 0), e = b.nextInt(d), f = function (a, b) {
          var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
          if (c) return (c = c.call(a)).next.bind(c);
          if (Array.isArray(a) || (c = function (a, b) {
            if (a) {
              if ("string" == typeof a) return K(a, b);
              var c = Object.prototype.toString.call(a).slice(8, -1);
              return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? K(a, b) : void 0
            }
          }(a)) || b && a && "number" == typeof a.length) {
            c && (a = c);
            var d = 0;
            return function () {
              return d >= a.length ? {done: !0} : {done: !1, value: a[d++]}
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }(a); !(c = f()).done;) {
          var g = c.value;
          if ((e -= g[1]) < 0) return g
        }
        throw new Error("Unable to find structure")
      }, Ie = function (a, b, d) {
        return (e = [{
          poi: xc.POI.NetherFortress, weight: 2, canGenerate: function () {
            return !0
          }
        }, {
          poi: xc.POI.BastionRemnant, weight: 3, canGenerate: function (c, d) {
            return function (a, b, c, d) {
              var e = L(a, b, c, d, 33, null, Ke, [["units", 1, [46, 24, 46]], ["hoglin_stable", 1, [30, 24, 48]], ["treasure", 1, [38, 48, 38]], ["bridge", 1, [16, 32, 32]]]);
              return !!e && e.key
            }(a, b[xc.Dimension.Nether], c, d)
          }
        }], function (a, b) {
          var d = e.reduce(function (a, b) {
            return a + b.weight
          }, 0);
          return function (f, g) {
            for (var h = c(a, f, g), i = [].concat(e), j = d, k = function () {
              for (var a, c = h.nextInt(j), d = i[0], e = function (a, b) {
                var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
                if (c) return (c = c.call(a)).next.bind(c);
                if (Array.isArray(a) || (c = function (a, b) {
                  if (a) {
                    if ("string" == typeof a) return M(a, b);
                    var c = Object.prototype.toString.call(a).slice(8, -1);
                    return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? M(a, b) : void 0
                  }
                }(a)) || b && a && "number" == typeof a.length) {
                  c && (a = c);
                  var d = 0;
                  return function () {
                    return d >= a.length ? {done: !0} : {done: !1, value: a[d++]}
                  }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }(i); !(a = e()).done;) {
                var k = a.value;
                if ((c -= k.weight) < 0) {
                  d = k;
                  break
                }
              }
              var l = d.canGenerate(f, g);
              return l ? {v: d.poi === b && l} : (j -= d.weight, void (i = i.filter(function (a) {
                return a !== d
              })))
            }; i.length > 0;) {
              var l = k();
              if ("object" == typeof l) return l.v
            }
            return !1
          }
        })(a, d);
        var e
      }, Je = {
        supportsWorld: me({
          java: [xc.JavaVersion.V1_16, xc.JavaVersion.V1_22],
          bedrock: [xc.BedrockVersion.V1_16, xc.BedrockVersion.V1_22]
        }), create: function () {
          return O.apply(this, arguments)
        }
      }, Ke = [Wd, Jc, Vd, Xd], Le = function (a, b, c, d) {
        return Fe(a.getNoiseBiomeAtHeightType(4 * b + 2, 4 * c + 2, d))
      }, Me = function (a, b, c, d) {
        return Fe(a.getNoiseBiomeBlock(b, c, d))
      }, Ne = function (a, b, c, d, e, f) {
        return !!Oe(a, b, c, d, e, f)
      }, Oe = function (a, b, c, d, e, f) {
        for (var g, h, i = f.map(function (a) {
          return a.id
        }), j = b - e, k = c - e, l = d - e, m = b + e, n = c + e, o = d + e, p = Math.floor((m - j + 4) / 4), q = j + 4 * Math.floor(p / 2), r = Math.floor((n - k + 4) / 4), s = k + 4 * Math.floor(r / 2), t = Math.floor((o - l + 4) / 4), u = l + 4 * Math.floor(t / 2), v = k; n >= v; v += 4) for (var w = j; m >= w; w += 4) for (var x = l; o >= x; x += 4) {
          var y = a.getNoiseBiomeBlock(w, v, x);
          if (!i.includes(y)) return !1;
          w === q && v === s && x == u && (h = Fe(y))
        }
        return null != (g = h) ? g : Fe(a.getNoiseBiomeBlock(b, c, d))
      }, Pe = function (a, b, c, d, e) {
        var f = function (a, b, c, d, e) {
          return [[b, c], [b + d, c], [b, c + e], [b + d, c + e]].map(function (b) {
            return a.getSurfaceBlock(b[0], b[1], "worldSurface", "topmostAccurate")
          })
        }(a, 16 * b, 16 * c, d, e);
        return Math.min.apply(Math, f)
      }, Qe = {
        supportsWorld: me({
          java: [xc.JavaVersion.V1_13, xc.JavaVersion.V1_22],
          bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
        }), create: function () {
          return P.apply(this, arguments)
        }
      }, Re = [Rc, _c, $c, Qc], Se = [Rc, _c];
      a(9826), a(4747);
      var Te, Ue, Ve, We, Xe = function (a, b) {
          return function () {
            var c = uc()(wc().mark(function d(c) {
              var e, f;
              return wc().wrap(function (d) {
                for (; ;) switch (d.prev = d.next) {
                  case 0:
                    if (!(c.sizeX <= b && c.sizeZ <= b)) {
                      d.next = 2;
                      break
                    }
                    return d.abrupt("return", a(c));
                  case 2:
                    return e = l(c, b), f = [], d.next = 6, o(e, function () {
                      var c = uc()(wc().mark(function d(c, e) {
                        var g;
                        return wc().wrap(function (d) {
                          for (; ;) switch (d.prev = d.next) {
                            case 0:
                              return d.next = 2, a({x: c * b, z: e * b, sizeX: b, sizeZ: b});
                            case 2:
                              g = d.sent, f.push.apply(f, g);
                            case 4:
                            case"end":
                              return d.stop()
                          }
                        }, d)
                      }));
                      return function () {
                        return c.apply(this, arguments)
                      }
                    }());
                  case 6:
                    return d.abrupt("return", f.filter(function (a) {
                      return j(c, {x: a[0], z: a[1]})
                    }));
                  case 7:
                  case"end":
                    return d.stop()
                }
              }, d)
            }));
            return function () {
              return c.apply(this, arguments)
            }
          }()
        }, Ye = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_7, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
          }), create: S(function (a, b, d) {
            return a.edition === xc.Edition.Bedrock ? function (a, b, d) {
              var e = c(a, b, d);
              return e.nextInt(), !(e.nextFloat() >= .004) && e.nextInt(80) < Math.max(Math.abs(b), Math.abs(d))
            }(a, b, d) : function (a, b, d) {
              var e = c(a, b, d);
              if (a.javaVersion < xc.JavaVersion.V1_13 && e.nextIntVoid(), e.nextDouble() >= .004) return !1;
              if (a.javaVersion >= xc.JavaVersion.V1_13) return !0;
              var f = Math.max(Math.abs(b), Math.abs(d));
              return f >= 80 || e.nextInt(80) < f
            }(a, b, d)
          })
        }, Ze = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_13, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_16, xc.BedrockVersion.V1_22]
          }), create: (Te = uc()(wc().mark(function fh(a) {
            var b, c, d, e;
            return wc().wrap(function (f) {
              for (; ;) switch (f.prev = f.next) {
                case 0:
                  if (b = new ne.tp(a), a.edition !== xc.Edition.Bedrock) {
                    f.next = 8;
                    break
                  }
                  return f.next = 4, $e(a);
                case 4:
                  f.t1 = f.sent, f.t0 = [f.t1], f.next = 9;
                  break;
                case 8:
                  f.t0 = [];
                case 9:
                  return c = f.t0, d = Xe(function () {
                    var a = uc()(wc().mark(function c(a) {
                      var d;
                      return wc().wrap(function (c) {
                        for (; ;) switch (c.prev = c.next) {
                          case 0:
                            return d = b.find(a), c.abrupt("return", r(d, function (a) {
                              return [a[0] >> 4, a[2] >> 4]
                            }));
                          case 2:
                          case"end":
                            return c.stop()
                        }
                      }, c)
                    }));
                    return function () {
                      return a.apply(this, arguments)
                    }
                  }(), 16), e = function () {
                    var a = uc()(wc().mark(function b(a) {
                      var e, f, g, h;
                      return wc().wrap(function (b) {
                        for (; ;) switch (b.prev = b.next) {
                          case 0:
                            return b.next = 2, d(a);
                          case 2:
                            e = b.sent, f = T(c);
                          case 4:
                            if ((g = f()).done) {
                              b.next = 11;
                              break
                            }
                            return h = g.value, b.next = 8, h(a, e);
                          case 8:
                            e = b.sent;
                          case 9:
                            b.next = 4;
                            break;
                          case 11:
                            return b.abrupt("return", e);
                          case 12:
                          case"end":
                            return b.stop()
                        }
                      }, b)
                    }));
                    return function () {
                      return a.apply(this, arguments)
                    }
                  }(), e.free = function () {
                    c.forEach(function (a) {
                      return null == a.free ? void 0 : a.free()
                    }), b.free()
                  }, f.abrupt("return", e);
                case 14:
                case"end":
                  return f.stop()
              }
            }, fh)
          })), function () {
            return Te.apply(this, arguments)
          })
        }, $e = function () {
          var a = uc()(wc().mark(function b(a) {
            var c, d;
            return wc().wrap(function (b) {
              for (; ;) switch (b.prev = b.next) {
                case 0:
                  return b.next = 2, Ye.create(a);
                case 2:
                  return c = b.sent, d = function () {
                    var a = uc()(wc().mark(function b(a, d) {
                      var e;
                      return wc().wrap(function (b) {
                        for (; ;) switch (b.prev = b.next) {
                          case 0:
                            return b.next = 2, c(k(a, {x0: -7, z0: -7, x1: 6, z1: 6}));
                          case 2:
                            return e = b.sent, d = d.filter(function (a) {
                              return a[2] = a[2].filter(function (a) {
                                var b = a[0] - 8 >> 4, c = a[2] - 8 >> 4;
                                return !e.find(function (a) {
                                  return Math.sqrt((b - a[0]) * (b - a[0]) + (c - a[1]) * (c - a[1])) < 6
                                })
                              }), a[2].length > 0
                            }), b.abrupt("return", d);
                          case 5:
                          case"end":
                            return b.stop()
                        }
                      }, b)
                    }));
                    return function () {
                      return a.apply(this, arguments)
                    }
                  }(), d.free = function () {
                    null == c.free || c.free()
                  }, b.abrupt("return", d);
                case 6:
                case"end":
                  return b.stop()
              }
            }, b)
          }));
          return function () {
            return a.apply(this, arguments)
          }
        }(), _e = function () {
          function a(a) {
            this.chunkGen = void 0, this.chunkGen = new ne.XC(a)
          }

          var b = a.prototype;
          return b.buildHeightmap = function (a, b) {
            return this.chunkGen.buildHeightmap(a, b)
          }, b.free = function () {
            this.chunkGen.free()
          }, a
        }(), af = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_13, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, d) {
              var e, f, g;
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    return e = d.end, f = new _e(a), g = v(a, {
                      spacing: 20,
                      separation: 11,
                      salt: 10387313,
                      linearSeparation: !1
                    }, function () {
                      var b = uc()(wc().mark(function c(b, d) {
                        return wc().wrap(function (c) {
                          for (; ;) switch (c.prev = c.next) {
                            case 0:
                              return c.abrupt("return", V(a, f, e, b, d));
                            case 1:
                            case"end":
                              return c.stop()
                          }
                        }, c)
                      }));
                      return function () {
                        return b.apply(this, arguments)
                      }
                    }(), function (b, d, e) {
                      if (a.edition === xc.Edition.Java) {
                        var f = c(a, b, d);
                        return f.nextInt(4), {hasShip: W(f)}
                      }
                      return {hasShip: W(e)}
                    }), g.free = function () {
                      f.free()
                    }, b.abrupt("return", g);
                  case 5:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        }, bf = function (a, b) {
          return 16 * a + b
        }, cf = {
          TOWER_GENERATOR: function (a, b, c) {
            b.nextInt(2), b.nextInt(2);
            for (var d = 0 === b.nextInt(3), e = 1 + b.nextInt(3), f = 0; e > f; f++) f >= e - 1 || !b.nextBoolean() || (d = !0);
            if (d) for (var g = 0; 4 > g; g++) b.nextBoolean() && X("TOWER_BRIDGE_GENERATOR", a + 1, b, c); else if (7 !== a) return X("FAT_TOWER_GENERATOR", a + 1, b, c);
            return !0
          }, TOWER_BRIDGE_GENERATOR: function (a, b, c) {
            for (var d = b.nextInt(4) + 1, e = 0; d > e; e++) b.nextBoolean() || b.nextBoolean();
            if (c.hasShip || 0 !== b.nextInt(10 - a)) {
              if (!X("HOUSE_TOWER_GENERATOR", a + 1, b, c)) return !1
            } else b.nextInt(8), b.nextInt(10), c.hasShip = !0;
            return !0
          }, HOUSE_TOWER_GENERATOR: function (a, b, c) {
            if (a > 8) return !1;
            var d = b.nextInt(3);
            return 1 !== d && 2 !== d || X("TOWER_GENERATOR", a + 1, b, c), !0
          }, FAT_TOWER_GENERATOR: function (a, b, c) {
            for (var d = 0; 2 > d && 0 !== b.nextInt(3); d++) for (var e = 0; 4 > e; e++) b.nextBoolean() && X("TOWER_BRIDGE_GENERATOR", a + 1, b, c);
            return !0
          }
        }, df = function (a) {
          return function () {
            var b = uc()(wc().mark(function c(b) {
              return wc().wrap(function (c) {
                for (; ;) switch (c.prev = c.next) {
                  case 0:
                    return c.abrupt("return", q(b, function (b, c) {
                      var d = b >> 4, e = c >> 4, f = hc().fromNumber(d ^ e << 4).xor(a.seed),
                        g = a.edition === xc.Edition.Bedrock ? new rc(f) : new mc(f);
                      return g.nextInt(), 0 === g.nextInt(3) && b === 4 + (d << 4) + g.nextInt(8) && c === 4 + (e << 4) + g.nextInt(8)
                    }));
                  case 1:
                  case"end":
                    return c.stop()
                }
              }, c)
            }));
            return function () {
              return b.apply(this, arguments)
            }
          }()
        }, ef = function (a, b) {
          var c = Ie(a, b, xc.POI.NetherFortress);
          return v(a, {
            spacing: a.edition === xc.Edition.Bedrock ? 30 : 27,
            separation: 4,
            salt: 30084232,
            linearSeparation: !0
          }, function () {
            var b = uc()(wc().mark(function d(b, e, f) {
              return wc().wrap(function (d) {
                for (; ;) switch (d.prev = d.next) {
                  case 0:
                    if (!(a.edition === xc.Edition.Java && a.javaVersion >= xc.JavaVersion.V1_18)) {
                      d.next = 2;
                      break
                    }
                    return d.abrupt("return", !!c(b, e));
                  case 2:
                    return d.abrupt("return", f.nextInt(a.edition === xc.Edition.Bedrock ? 6 : 5) < 2);
                  case 3:
                  case"end":
                    return d.stop()
                }
              }, d)
            }));
            return function () {
              return b.apply(this, arguments)
            }
          }())
        }, ff = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_7, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c) {
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    if (!(a.edition === xc.Edition.Java && a.javaVersion < xc.JavaVersion.V1_16 || a.edition === xc.Edition.Bedrock && a.bedrockVersion < xc.BedrockVersion.V1_16)) {
                      b.next = 2;
                      break
                    }
                    return b.abrupt("return", df(a));
                  case 2:
                    return b.abrupt("return", ef(a, c));
                  case 3:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        }, gf = [Bc, Zc, Ic, Lc, Mc], hf = [wd, xd, vd, Zc, ud], jf = [Bc, Lc, Zc, rd, sd, td, ud, vd, wd, xd, Ic, Mc],
        kf = {spacing: 32, separation: 5, salt: 10387313, linearSeparation: !1}, lf = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_8, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c) {
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    return b.abrupt("return", v(a, kf, function () {
                      var b = uc()(wc().mark(function d(b, e) {
                        return wc().wrap(function (d) {
                          for (; ;) switch (d.prev = d.next) {
                            case 0:
                              return d.abrupt("return", Y(a, c.overworld, b, e));
                            case 1:
                            case"end":
                              return d.stop()
                          }
                        }, d)
                      }));
                      return function () {
                        return b.apply(this, arguments)
                      }
                    }()));
                  case 1:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        }, mf = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_16, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_16, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a) {
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    return b.abrupt("return", v(a, {
                      spacing: 40,
                      separation: 15,
                      salt: a.edition === xc.Edition.Bedrock ? 40552231 : 34222645,
                      linearSeparation: !0
                    }, uc()(wc().mark(function c() {
                      return wc().wrap(function (a) {
                        for (; ;) switch (a.prev = a.next) {
                          case 0:
                            return a.abrupt("return", !0);
                          case 1:
                          case"end":
                            return a.stop()
                        }
                      }, c)
                    }))));
                  case 1:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        }, nf = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_16, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_16, xc.BedrockVersion.V1_22]
          }), create: (Ue = uc()(wc().mark(function gh(a) {
            return wc().wrap(function (b) {
              for (; ;) switch (b.prev = b.next) {
                case 0:
                  return b.abrupt("return", v(a, a.edition === xc.Edition.Java && a.javaVersion >= xc.JavaVersion.V1_18 ? {
                    spacing: 40,
                    separation: 15,
                    salt: 34222645,
                    linearSeparation: !0
                  } : {
                    spacing: 25,
                    separation: 10,
                    salt: a.edition === xc.Edition.Bedrock ? 40552231 : 34222645,
                    linearSeparation: !0
                  }, uc()(wc().mark(function c() {
                    return wc().wrap(function (a) {
                      for (; ;) switch (a.prev = a.next) {
                        case 0:
                          return a.abrupt("return", !0);
                        case 1:
                        case"end":
                          return a.stop()
                      }
                    }, c)
                  }))));
                case 1:
                case"end":
                  return b.stop()
              }
            }, gh)
          })), function () {
            return Ue.apply(this, arguments)
          })
        }, of = a(7316), pf = a.n(of), qf = ["allowedBiomes", "checkBiome", "checkChunk"];
      !function (a) {
        a.DESERT_TEMPLE = "DESERT_TEMPLE", a.JUNGLE_TEMPLE = "JUNGLE_TEMPLE", a.WITCH_HUT = "WITCH_HUT", a.IGLOO = "IGLOO", a.SHIPWRECK = "SHIPWRECK"
      }(We || (We = {}));
      var rf, sf = function (a) {
        return a.edition === xc.Edition.Java && a.javaVersion >= xc.JavaVersion.V1_13
      }, tf = function (a) {
        return a.edition === xc.Edition.Java && a.javaVersion >= xc.JavaVersion.V1_18
      }, uf = function (a) {
        return a.edition === xc.Edition.Bedrock && a.bedrockVersion >= xc.BedrockVersion.V1_18
      }, vf = ((Ve = {})[We.SHIPWRECK] = function (a) {
        return a.edition === xc.Edition.Bedrock ? Object.assign({}, uf(a) ? {spacing: 24, separation: 4} : {
          spacing: 10,
          separation: 5,
          linearSeparation: !1
        }, {
          salt: 165745295, allowedBiomes: [Rc, _c, Qc, Bc, Zc, td, wd, sd, vd, Lc, xd, rd], checkChunk: function () {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; b > d; d++) c[d - 1] = arguments[d];
            return Z.apply(void 0, [a].concat(c))
          }
        }) : Object.assign({}, function (a) {
          return a.edition === xc.Edition.Java && a.javaVersion >= xc.JavaVersion.V1_16
        }(a) ? {spacing: 24, separation: 4} : {spacing: 16, separation: 8}, {
          salt: sf(a) ? 165745295 : 14357617,
          checkBiome: tf(a) ? function (a, b, c, d, e) {
            var f = [Rc, _c], g = e.filter(function (a) {
              return !f.includes(a)
            }), h = Le(b.noise(), c, d, "worldSurface");
            if (f.includes(h)) return h;
            var i = Le(b.noise(), c, d, "oceanFloor");
            return !!g.includes(i) && i
          } : void 0,
          allowedBiomes: [Rc, _c, Lc, Bc, td, sd, rd, xd, wd, Zc, vd, ud]
        })
      }, Ve[We.DESERT_TEMPLE] = function (a) {
        return {
          spacing: 32, separation: 8, salt: 14357617, allowedBiomes: [Dc, Sc], checkChunk: tf(a) ? function () {
            var a = uc()(wc().mark(function b(a, c, d, e, f, g) {
              return wc().wrap(function (a) {
                for (; ;) switch (a.prev = a.next) {
                  case 0:
                    return a.abrupt("return", Pe(c.noise(), f, g, 21, 21) >= 63);
                  case 1:
                  case"end":
                    return a.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }() : void 0
        }
      }, Ve[We.JUNGLE_TEMPLE] = function (a) {
        return {
          spacing: 32,
          separation: 8,
          salt: sf(a) ? 14357619 : 14357617,
          allowedBiomes: [Wc, Xc].concat(a.edition !== xc.Edition.Bedrock ? [Td, Ud] : []),
          checkChunk: tf(a) ? function () {
            var a = uc()(wc().mark(function b(a, c, d, e, f, g) {
              return wc().wrap(function (a) {
                for (; ;) switch (a.prev = a.next) {
                  case 0:
                    return a.abrupt("return", Pe(c.noise(), f, g, 12, 15) >= 63);
                  case 1:
                  case"end":
                    return a.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }() : void 0
        }
      }, Ve[We.IGLOO] = function (a) {
        return {spacing: 32, separation: 8, salt: sf(a) ? 14357618 : 14357617, allowedBiomes: [Nc, dd, be]}
      }, Ve[We.WITCH_HUT] = function (a) {
        return {
          spacing: 32,
          separation: 8,
          salt: sf(a) ? 14357620 : 14357617,
          allowedBiomes: a.edition === xc.Edition.Java ? [Hc] : [Hc, Dd]
        }
      }, Ve), wf = {
        supportsWorld: me({
          java: [xc.JavaVersion.V1_7, xc.JavaVersion.V1_22],
          bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
        }), create: function (a, b, c) {
          return ab(We.DESERT_TEMPLE, a, b.overworld, c)
        }
      }, xf = {
        supportsWorld: me({
          java: [xc.JavaVersion.V1_7, xc.JavaVersion.V1_22],
          bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
        }), create: function (a, b, c) {
          return ab(We.JUNGLE_TEMPLE, a, b.overworld, c)
        }
      }, yf = {
        supportsWorld: me({
          java: [xc.JavaVersion.V1_7, xc.JavaVersion.V1_22],
          bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
        }), create: function (a, b, c) {
          return ab(We.WITCH_HUT, a, b.overworld, c)
        }
      }, zf = {
        supportsWorld: me({
          java: [xc.JavaVersion.V1_9, xc.JavaVersion.V1_22],
          bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
        }), create: function (a, b, d) {
          return ab(We.IGLOO, a, b.overworld, d, function (b, d) {
            if (a.edition === xc.Edition.Bedrock) {
              var e = H(a, b, d);
              return e.nextInt(), {hasBasement: e.nextDouble() >= .5}
            }
            if (a.javaVersion < xc.JavaVersion.V1_13) return {hasBasement: null};
            var f = c(a, b, d);
            return f.nextInt(4), {hasBasement: f.nextDouble() < .5}
          })
        }
      }, Af = {
        supportsWorld: me({
          java: [xc.JavaVersion.V1_13, xc.JavaVersion.V1_22],
          bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
        }), create: function (a, b, c) {
          return ab(We.SHIPWRECK, a, b.overworld, c)
        }
      }, Bf = a(5375), Cf = a.n(Bf), Df = {
        supportsWorld: me({
          java: [xc.JavaVersion.V1_7, xc.JavaVersion.V1_22],
          bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
        }), create: S(function (a, b, c) {
          return a.edition === xc.Edition.Bedrock ? function (a, b) {
            return 0 === new rc(Cf()(a, 522133279) ^ b).nextInt(10)
          }(b, c) : function (a, b, c) {
            var d = a.add(gc.fromInt(Cf()(Cf()(b, b), Ef))).add(gc.fromInt(Cf()(b, Ff))).add(gc.fromInt(Cf()(c, c)).multiply(Gf)).add(gc.fromInt(Cf()(c, Hf))).xor(If);
            return 0 === new mc(d).nextInt(10)
          }(a.seed, b, c)
        })
      }, Ef = 4987142, Ff = 5947611, Gf = gc.fromInt(4392871), Hf = 389711, If = gc.fromInt(987234911);
      a(7941), a(6755);
      var Jf, Kf = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_7, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
          }), create: function () {
            return eb.apply(this, arguments)
          }
        }, Lf = [Cc, Dc, id], Mf = [Cc, Dc, id, Gc], Nf = [Cc, Dc, id, Gc, Nc], Of = [Dc, Cc, _d, id, Nc, Gc],
        Pf = ((rf = {})[xc.JavaVersion.V1_7] = Lf, rf[xc.JavaVersion.V1_8] = Lf, rf[xc.JavaVersion.V1_9] = Lf, rf[xc.JavaVersion.V1_10] = Mf, rf[xc.JavaVersion.V1_11] = Mf, rf[xc.JavaVersion.V1_12] = Mf, rf[xc.JavaVersion.V1_13] = Mf, rf[xc.JavaVersion.V1_14] = Nf, rf[xc.JavaVersion.V1_15] = Nf, rf[xc.JavaVersion.V1_16] = Nf, rf[xc.JavaVersion.V1_17] = Nf, rf[xc.JavaVersion.V1_18] = Of, rf[xc.JavaVersion.V1_19] = Of, rf[xc.JavaVersion.V1_19_3] = Of, rf[xc.JavaVersion.V1_20] = Of, rf[xc.JavaVersion.V1_21] = Of, rf[xc.JavaVersion.V1_21_2] = Of, rf[xc.JavaVersion.V1_21_4] = Of, rf[xc.JavaVersion.V1_22] = Of, rf),
        Qf = [Cc, yd, id, Nc, Gc, Uc, dd, ed, Dc, _d],
        Rf = {desert: [Dc], plains: [Cc, yd, _d], savanna: [id], snowy: [Nc], taiga: [Gc, Uc, dd, ed]},
        Sf = Object.keys(Rf), Tf = function (a) {
          for (var b, c = function (a, b) {
            var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
            if (c) return (c = c.call(a)).next.bind(c);
            if (Array.isArray(a) || (c = function (a, b) {
              if (a) {
                if ("string" == typeof a) return cb(a, b);
                var c = Object.prototype.toString.call(a).slice(8, -1);
                return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? cb(a, b) : void 0
              }
            }(a)) || b && a && "number" == typeof a.length) {
              c && (a = c);
              var d = 0;
              return function () {
                return d >= a.length ? {done: !0} : {done: !1, value: a[d++]}
              }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }(Sf); !(b = c()).done;) {
            var d = b.value;
            if (Rf[d].includes(a)) return d
          }
          throw new Error("Unexpected biome for village: " + a.id)
        }, Uf = {
          desert: [["desert_meeting_point_1", 98, [17, 6, 9]], ["desert_meeting_point_2", 98, [12, 6, 12]], ["desert_meeting_point_3", 49, [15, 6, 15]], ["zombie/desert_meeting_point_1", 2, [17, 6, 9]], ["zombie/desert_meeting_point_2", 2, [12, 6, 12]], ["zombie/desert_meeting_point_3", 1, [15, 6, 15]]],
          plains: [["plains_fountain_01", 50, [9, 4, 9]], ["plains_meeting_point_1", 50, [10, 7, 10]], ["plains_meeting_point_2", 50, [8, 5, 15]], ["plains_meeting_point_3", 50, [11, 9, 11]], ["zombie/plains_fountain_01", 1, [9, 6, 9]], ["zombie/plains_meeting_point_1", 1, [10, 7, 10]], ["zombie/plains_meeting_point_2", 1, [8, 5, 15]], ["zombie/plains_meeting_point_3", 1, [11, 9, 11]]],
          savanna: [["savanna_meeting_point_1", 100, [14, 5, 12]], ["savanna_meeting_point_2", 50, [11, 6, 11]], ["savanna_meeting_point_3", 150, [9, 6, 11]], ["savanna_meeting_point_4", 150, [9, 6, 9]], ["zombie/savanna_meeting_point_1", 2, [14, 6, 12]], ["zombie/savanna_meeting_point_2", 1, [11, 6, 11]], ["zombie/savanna_meeting_point_3", 3, [9, 6, 11]], ["zombie/savanna_meeting_point_4", 3, [9, 6, 9]]],
          snowy: [["snowy_meeting_point_1", 100, [12, 8, 8]], ["snowy_meeting_point_2", 50, [11, 5, 9]], ["snowy_meeting_point_3", 150, [7, 7, 7]], ["zombie/snowy_meeting_point_1", 2, [12, 8, 8]], ["zombie/snowy_meeting_point_2", 1, [11, 6, 9]], ["zombie/snowy_meeting_point_3", 3, [7, 7, 7]]],
          taiga: [["taiga_meeting_point_1", 49, [22, 3, 18]], ["taiga_meeting_point_2", 49, [9, 7, 9]], ["zombie/taiga_meeting_point_1", 1, [22, 6, 18]], ["zombie/taiga_meeting_point_2", 1, [9, 7, 9]]]
        }, Vf = function (a) {
          return a.startsWith("zombie/")
        }, Wf = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_7, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c, d) {
              var e;
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    return b.next = 2, d.sharedTask("StrongholdFinder.staticStrongholds", function () {
                      return hb(a, c.overworld, d)
                    });
                  case 2:
                    return e = b.sent, b.abrupt("return", function () {
                      var b = uc()(wc().mark(function c(b) {
                        return wc().wrap(function (c) {
                          for (; ;) switch (c.prev = c.next) {
                            case 0:
                              return c.abrupt("return", [].concat(e.filter(function (a) {
                                var c = a[0], d = a[1];
                                return j(b, {x: c, z: d})
                              }), jb(a, b)));
                            case 1:
                            case"end":
                              return c.stop()
                          }
                        }, c)
                      }));
                      return function () {
                        return b.apply(this, arguments)
                      }
                    }());
                  case 4:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        },
        Xf = [Cc, Dc, Ec, Fc, Gc, Nc, Oc, Pc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, $c, ad, bd, cd, dd, ed, fd, gd, hd, id, jd, kd, ld, md, yd, zd, Ad, Bd, Cd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd],
        Yf = [].concat(Xf, [Qc]), Zf = [].concat(Yf, [Td, Ud]),
        $f = [Cc, Dc, Ec, Fc, Gc, Nc, Pc, Tc, Wc, Yc, ad, cd, dd, fd, id, jd, kd, ld, yd, Ad, Bd, Ed, Hd, Ld, Od, Qd, Td, Zd, $d, _d, ae, be, ce, de, ee, ie],
        _f = ((Jf = {})[xc.JavaVersion.V1_7] = Xf, Jf[xc.JavaVersion.V1_8] = Xf, Jf[xc.JavaVersion.V1_9] = Xf, Jf[xc.JavaVersion.V1_10] = Xf, Jf[xc.JavaVersion.V1_11] = Xf, Jf[xc.JavaVersion.V1_12] = Xf, Jf[xc.JavaVersion.V1_13] = Yf, Jf[xc.JavaVersion.V1_14] = Zf, Jf[xc.JavaVersion.V1_15] = Zf, Jf[xc.JavaVersion.V1_16] = Yf, Jf[xc.JavaVersion.V1_17] = Yf, Jf[xc.JavaVersion.V1_18] = $f, Jf[xc.JavaVersion.V1_19] = $f, Jf[xc.JavaVersion.V1_19_3] = $f, Jf[xc.JavaVersion.V1_20] = $f, Jf[xc.JavaVersion.V1_21] = $f, Jf[xc.JavaVersion.V1_21_2] = $f, Jf[xc.JavaVersion.V1_21_4] = $f, Jf[xc.JavaVersion.V1_22] = $f, Jf),
        ag = [cd, Jd], bg = [cd, Jd, $d, Zd], cg = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_11, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c) {
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    return b.abrupt("return", v(a, {
                      spacing: 80,
                      separation: 20,
                      linearSeparation: !1,
                      salt: 10387319
                    }, function () {
                      var b = uc()(wc().mark(function d(b, e) {
                        return wc().wrap(function (d) {
                          for (; ;) switch (d.prev = d.next) {
                            case 0:
                              return d.abrupt("return", ob(a, c.overworld, b, e));
                            case 1:
                            case"end":
                              return d.stop()
                          }
                        }, d)
                      }));
                      return function () {
                        return b.apply(this, arguments)
                      }
                    }()));
                  case 1:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        }, dg = [Cc, Dc, Gc, Nc, id, ae, _d, ce, de, ee, be, he], eg = [Cc, yd, id, Nc, Gc, Uc, ed, Dc],
        fg = [].concat(eg, [dd, _d, ce, de, ee, be, ae, he]), gg = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_14, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c, d) {
              var e;
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    if (a.edition !== xc.Edition.Bedrock) {
                      b.next = 2;
                      break
                    }
                    return b.abrupt("return", v(a, {
                      spacing: 80,
                      separation: 24,
                      salt: 165745296,
                      linearSeparation: !1
                    }, function () {
                      var b = uc()(wc().mark(function d(b, e) {
                        return wc().wrap(function (d) {
                          for (; ;) switch (d.prev = d.next) {
                            case 0:
                              return d.abrupt("return", pb(a, c.overworld, b, e));
                            case 1:
                            case"end":
                              return d.stop()
                          }
                        }, d)
                      }));
                      return function () {
                        return b.apply(this, arguments)
                      }
                    }()));
                  case 2:
                    return b.next = 4, Kf.create(a, c, d);
                  case 4:
                    return e = b.sent, b.abrupt("return", v(a, {
                      spacing: 32,
                      separation: 8,
                      salt: 165745296,
                      linearSeparation: !0
                    }, function () {
                      var b = uc()(wc().mark(function d(b, f) {
                        return wc().wrap(function (d) {
                          for (; ;) switch (d.prev = d.next) {
                            case 0:
                              return d.next = 2, qb(a, c.overworld, e, b, f);
                            case 2:
                              return d.abrupt("return", d.sent);
                            case 3:
                            case"end":
                              return d.stop()
                          }
                        }, d)
                      }));
                      return function () {
                        return b.apply(this, arguments)
                      }
                    }()));
                  case 6:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        };
      a(1532);
      var hg, ig, jg, kg = {warm: [vd, ud, sd, rd], cold: [td, wd, xd, Zc, Lc, Bc]},
        lg = new Map([[Lc, {type: "cold", largeProbability: .3, clusterProbability: .25}], [Bc, {
          type: "cold",
          largeProbability: .3,
          clusterProbability: .25
        }], [Zc, {type: "cold", largeProbability: .5, clusterProbability: .4}], [rd, {
          type: "warm",
          largeProbability: .3,
          clusterProbability: .5
        }], [ud, {type: "warm", largeProbability: .3, clusterProbability: .5}], [sd, {
          type: "warm",
          largeProbability: .3,
          clusterProbability: .5
        }], [vd, {type: "warm", largeProbability: .3, clusterProbability: .5}], [td, {
          type: "cold",
          largeProbability: .3,
          clusterProbability: .25
        }], [wd, {type: "cold", largeProbability: .5, clusterProbability: .4}], [xd, {
          type: "cold",
          largeProbability: .5,
          clusterProbability: .4
        }]]), mg = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_16, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_16, xc.BedrockVersion.V1_22]
          }), create: function (a, b, d) {
            return uc()(wc().mark(function e() {
              var f;
              return wc().wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                  case 0:
                    if (a.edition !== xc.Edition.Bedrock) {
                      e.next = 6;
                      break
                    }
                    return e.next = 3, lf.create(a, b, d);
                  case 3:
                    e.t0 = e.sent, e.next = 7;
                    break;
                  case 6:
                    e.t0 = null;
                  case 7:
                    return f = e.t0, e.abrupt("return", v(a, a.edition === xc.Edition.Java || a.bedrockVersion >= xc.BedrockVersion.V1_18 ? {
                      spacing: 20,
                      separation: 8,
                      linearSeparation: !0,
                      salt: 14357621
                    } : {spacing: 12, separation: 7, linearSeparation: !1, salt: 14357621}, function () {
                      var c = uc()(wc().mark(function d(c, e) {
                        var g, h, i, j, k;
                        return wc().wrap(function (d) {
                          for (; ;) switch (d.prev = d.next) {
                            case 0:
                              if (a.edition !== xc.Edition.Bedrock) {
                                d.next = 22;
                                break
                              }
                              return d.next = 3, f({x: c - 5, z: e - 5, sizeX: 10, sizeZ: 10});
                            case 3:
                              if (!(d.sent.length >= 1)) {
                                d.next = 6;
                                break
                              }
                              return d.abrupt("return", !1);
                            case 6:
                              if (g = [].concat(kg.cold, kg.warm), !(a.bedrockVersion >= xc.BedrockVersion.V1_18)) {
                                d.next = 15;
                                break
                              }
                              if (i = b.overworld.noise(), j = i.getPreliminarySurfaceLevel(4 * c, 4 * e), h = Oe(i, 16 * c + 8, j, 16 * e + 8, 0, g)) {
                                d.next = 13;
                                break
                              }
                              return d.abrupt("return", !1);
                            case 13:
                              d.next = 19;
                              break;
                            case 15:
                              if (b.overworld.legacy().areBiomesViable(16 * c + 8, 16 * e + 8, 0, g)) {
                                d.next = 18;
                                break
                              }
                              return d.abrupt("return", !1);
                            case 18:
                              h = b.overworld.legacy().getBiomeForStructure(c, e);
                            case 19:
                              return d.abrupt("return", !![].concat(kg.cold, kg.warm).includes(h) && h);
                            case 22:
                              return k = a.javaVersion >= xc.JavaVersion.V1_18 ? Le(b.overworld.noise(), c, e, "oceanFloor") : b.overworld.legacy().getBiomeForStructure(c, e), d.abrupt("return", !![].concat(kg.cold, kg.warm).includes(k) && k);
                            case 24:
                            case"end":
                              return d.stop()
                          }
                        }, d)
                      }));
                      return function () {
                        return c.apply(this, arguments)
                      }
                    }(), function (b, d, e, f) {
                      var g = a.edition === xc.Edition.Bedrock ? lg.get(f) : {
                        type: kg.cold.includes(f) ? "cold" : "warm",
                        largeProbability: .3,
                        clusterProbability: .9
                      };
                      if (!g) throw new Error("Unexpected biome");
                      var h = a.edition === xc.Edition.Bedrock ? t(a, b + 4, d + 4, kf).rng : c(a, b, d);
                      h.nextInt(4);
                      var i = h.nextFloat() <= g.largeProbability, j = 0;
                      if (i && (h.nextInt(), h.nextFloat() <= g.clusterProbability)) {
                        for (var k = 0; 16 > k; k++) h.nextInt();
                        j = 4 + h.nextInt(5)
                      }
                      return {type: g.type, isLarge: i, clusterSize: j}
                    }));
                  case 9:
                  case"end":
                    return e.stop()
                }
              }, e)
            }))()
          }
        }, ng = (a(8674), a(8559), a(2479), [Wc, Xc, Cc, Fc, Tc, Gc, Uc]), og = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_7, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_14, xc.BedrockVersion.V1_22]
          }), create: function (a, b) {
            return uc()(wc().mark(function c() {
              var d, e, f;
              return wc().wrap(function (c) {
                for (; ;) switch (c.prev = c.next) {
                  case 0:
                    return d = b.overworld, e = a.edition === xc.Edition.Java ? ub(a, d) : tb(a, d), f = {
                      x: e[0] >> 4,
                      z: e[1] >> 4
                    }, c.abrupt("return", function () {
                      var a = uc()(wc().mark(function b(a) {
                        return wc().wrap(function (b) {
                          for (; ;) switch (b.prev = b.next) {
                            case 0:
                              if (!j(a, f)) {
                                b.next = 2;
                                break
                              }
                              return b.abrupt("return", [[f.x, f.z, {x: e[0], z: e[1]}]]);
                            case 2:
                              return b.abrupt("return", []);
                            case 3:
                            case"end":
                              return b.stop()
                          }
                        }, b)
                      }));
                      return function () {
                        return a.apply(this, arguments)
                      }
                    }());
                  case 4:
                  case"end":
                    return c.stop()
                }
              }, c)
            }))()
          }
        }, pg = function (a) {
          return function (b, c, d) {
            c.random.nextFloat() < 1 / a.chance && d(b)
          }
        }, qg = function (a) {
          return function (b) {
            var c = a.minInclusive, d = a.maxInclusive;
            return c > d ? d : b.nextInt(d - c + 1) + c
          }
        }, rg = function (a) {
          return function (b) {
            return c = a(b), function (a, b, d) {
              var e = c(b.random);
              d([a[0], e, a[2]])
            };
            var c
          }
        }, sg = {
          uniform: rg(qg), triangle: rg(function (a) {
            return function (b) {
              var c = a.minInclusive, d = a.maxInclusive, e = a.plateau, f = void 0 === e ? 0 : e;
              if (c > d) return d;
              var g = d - c;
              if (f >= g) return xb(b, c, d);
              var h = Math.floor((g - f) / 2);
              return c + xb(b, 0, g - h) + xb(b, 0, h)
            }
          }), range_8_8_nether: rg(function () {
            return qg({minInclusive: 8, maxInclusive: 119})
          })
        }, tg = function (a) {
          var b = a.provider, c = a.allowedBiomes, d = a.disallowedBiomes;
          return function (a, e, f) {
            var g = Fe(b.getNoiseBiome(a[0] >> 2, a[1] >> 2, a[2] >> 2));
            c && !c.includes(g) || d && d.includes(g) || f(a)
          }
        }, ug = function (a) {
          return function (b, c) {
            var d = c.random;
            d.nextInt(4), d.nextInt(4);
            var e = Math.min(b[1], a.getSurfaceBlock(b[0], b[2], "oceanFloor", "topmostAccurate")),
              f = Math.max(e - 15 - d.nextInt(10), -54);
            return [[b[0], f, b[2]]]
          }
        }, vg = a(3523), wg = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_16, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_16, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c) {
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    if (a.edition !== xc.Edition.Java) {
                      b.next = 6;
                      break
                    }
                    if (!(a.javaVersion >= xc.JavaVersion.V1_18)) {
                      b.next = 5;
                      break
                    }
                    return b.abrupt("return", yb(a, c.overworld.noise()));
                  case 5:
                    return b.abrupt("return", zb(a, c.overworld.legacy()));
                  case 6:
                    return b.abrupt("return", Ab(a, c.overworld));
                  case 7:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        }, xg = [Dc, Hc, ge], yg = ((hg = {})[Dc.id] = 0, hg[Hc.id] = 0, hg[Dd.id] = 1, hg), zg = [Dc, Hc],
        Ag = function (a, b, c) {
          return a.nextInt(c - b + 1) + b
        }, Bg = function (a, b, c) {
          return Ag(a, b, c - 1)
        }, Cg = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_16, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_16, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c) {
              var d;
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    if (d = c.overworld, a.edition !== xc.Edition.Java) {
                      b.next = 7;
                      break
                    }
                    if (!(a.javaVersion >= xc.JavaVersion.V1_18)) {
                      b.next = 6;
                      break
                    }
                    return b.abrupt("return", Bb(a));
                  case 6:
                    return b.abrupt("return", Db(a, d.legacy()));
                  case 7:
                    return b.abrupt("return", Fb(a, d));
                  case 8:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        }, Dg = ((ig = {})[0] = 2, ig[2] = 0, ig[1] = 3, ig[3] = 1, ig), Eg = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_16, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_16, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c) {
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    if (a.edition !== xc.Edition.Java) {
                      b.next = 6;
                      break
                    }
                    if (!(a.javaVersion >= xc.JavaVersion.V1_18)) {
                      b.next = 5;
                      break
                    }
                    return b.abrupt("return", Lb(a, c.end));
                  case 5:
                    return b.abrupt("return", Mb(a, c.end));
                  case 6:
                    return b.abrupt("return", Nb(a, c.end));
                  case 7:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        }, Fg = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_17, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_17, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c) {
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    if (a.edition !== xc.Edition.Java) {
                      b.next = 2;
                      break
                    }
                    return b.abrupt("return", Ob(a, c.overworld));
                  case 2:
                    return b.abrupt("return", Pb(a));
                  case 3:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        }, Gg = function (a) {
          return [Lc.id, xd.id].includes(a) ? 2 : 0
        },
        Hg = [["city_center_1", 1, [18, 31, 41]], ["city_center_2", 1, [18, 31, 41]], ["city_center_3", 1, [18, 31, 41]]],
        Ig = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_19, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_19, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c) {
              var d;
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    return d = c.overworld.noise(), b.abrupt("return", v(a, {
                      spacing: 24,
                      separation: 8,
                      salt: 20083232,
                      linearSeparation: a.edition !== xc.Edition.Bedrock
                    }, function () {
                      var b = uc()(wc().mark(function e(b, f) {
                        return wc().wrap(function (e) {
                          for (; ;) switch (e.prev = e.next) {
                            case 0:
                              if (a.edition !== xc.Edition.Java) {
                                e.next = 2;
                                break
                              }
                              return e.abrupt("return", !!L(a, c.overworld.noise(), b, f, -27, null, [fe], Hg, [13, 20]));
                            case 2:
                              return e.abrupt("return", d.getNoiseBiomeBlock(16 * b, -27, 16 * f) === fe.id);
                            case 3:
                            case"end":
                              return e.stop()
                          }
                        }, e)
                      }));
                      return function () {
                        return b.apply(this, arguments)
                      }
                    }()));
                  case 2:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        }, Jg = function hh(a, b) {
          if (Array.isArray(a)) for (var c = 0; c < a.length; c++) "string" == typeof a[c] ? a[c] = b(a[c]) : hh(a[c], b);
          if ("object" == typeof a && null !== a) for (var d = a, e = 0, f = Object.entries(a); e < f.length; e++) {
            var g = f[e], h = g[0], i = g[1];
            "string" == typeof i ? d[h] = b(i) : hh(d[h], b)
          }
        }, Kg = function (b, c) {
          var d = function (b, c) {
            if ("desert_pyramid" === c && b.edition === xc.Edition.Java && b.javaVersion >= xc.JavaVersion.V1_18) return a(9129);
            if ("desert_pyramid" === c && b.edition === xc.Edition.Bedrock && b.bedrockVersion >= xc.BedrockVersion.V1_18) return a(4079);
            throw new Error("Loot table " + c + " not found")
          }(b, c);
          return Jg(d, function (a) {
            return a.startsWith("minecraft:") ? a.slice("minecraft:".length) : a
          }), d
        }, Lg = [{name: "protection", category: "ARMOR", minLevel: 1, maxLevel: 4}, {
          name: "fire_protection",
          category: "ARMOR",
          minLevel: 1,
          maxLevel: 4
        }, {name: "feather_falling", category: "ARMOR_FEET", minLevel: 1, maxLevel: 4}, {
          name: "blast_protection",
          category: "ARMOR",
          minLevel: 1,
          maxLevel: 4
        }, {name: "projectile_protection", category: "ARMOR", minLevel: 1, maxLevel: 4}, {
          name: "respiration",
          category: "ARMOR_HEAD",
          minLevel: 1,
          maxLevel: 3
        }, {name: "aqua_affinity", category: "ARMOR_HEAD", minLevel: 1, maxLevel: 1}, {
          name: "thorns",
          category: "ARMOR_CHEST",
          minLevel: 1,
          maxLevel: 3
        }, {name: "depth_strider", category: "ARMOR_FEET", minLevel: 1, maxLevel: 3}, {
          name: "frost_walker",
          category: "ARMOR_FEET",
          minLevel: 1,
          maxLevel: 2
        }, {name: "binding_curse", category: "WEARABLE", minLevel: 1, maxLevel: 1}, {
          name: "sharpness",
          category: "WEAPON",
          minLevel: 1,
          maxLevel: 5
        }, {name: "smite", category: "WEAPON", minLevel: 1, maxLevel: 5}, {
          name: "bane_of_arthropods",
          category: "WEAPON",
          minLevel: 1,
          maxLevel: 5
        }, {name: "knockback", category: "WEAPON", minLevel: 1, maxLevel: 2}, {
          name: "fire_aspect",
          category: "WEAPON",
          minLevel: 1,
          maxLevel: 2
        }, {name: "looting", category: "WEAPON", minLevel: 1, maxLevel: 3}, {
          name: "sweeping",
          category: "WEAPON",
          minLevel: 1,
          maxLevel: 3
        }, {name: "efficiency", category: "DIGGER", minLevel: 1, maxLevel: 5}, {
          name: "silk_touch",
          category: "DIGGER",
          minLevel: 1,
          maxLevel: 1
        }, {name: "unbreaking", category: "BREAKABLE", minLevel: 1, maxLevel: 3}, {
          name: "fortune",
          category: "DIGGER",
          minLevel: 1,
          maxLevel: 3
        }, {name: "power", category: "BOW", minLevel: 1, maxLevel: 5}, {
          name: "punch",
          category: "BOW",
          minLevel: 1,
          maxLevel: 2
        }, {name: "flame", category: "BOW", minLevel: 1, maxLevel: 1}, {
          name: "infinity",
          category: "BOW",
          minLevel: 1,
          maxLevel: 1
        }, {name: "luck_of_the_sea", category: "FISHING_ROD", minLevel: 1, maxLevel: 3}, {
          name: "lure",
          category: "FISHING_ROD",
          minLevel: 1,
          maxLevel: 3
        }, {name: "loyalty", category: "TRIDENT", minLevel: 1, maxLevel: 3}, {
          name: "impaling",
          category: "TRIDENT",
          minLevel: 1,
          maxLevel: 5
        }, {name: "riptide", category: "TRIDENT", minLevel: 1, maxLevel: 3}, {
          name: "channeling",
          category: "TRIDENT",
          minLevel: 1,
          maxLevel: 1
        }, {name: "multishot", category: "CROSSBOW", minLevel: 1, maxLevel: 1}, {
          name: "quick_charge",
          category: "CROSSBOW",
          minLevel: 1,
          maxLevel: 3
        }, {name: "piercing", category: "CROSSBOW", minLevel: 1, maxLevel: 4}, {
          name: "mending",
          category: "BREAKABLE",
          minLevel: 1,
          maxLevel: 1
        }, {name: "vanishing_curse", category: "VANISHABLE", minLevel: 1, maxLevel: 1}], Mg = {
          golden_sword: [11, 12, 13, 14, 15, 16, 17, 20, 35, 36],
          golden_axe: [11, 12, 13, 18, 19, 20, 21, 35, 36],
          golden_hoe: [18, 19, 20, 21, 35, 36],
          golden_shovel: [18, 19, 20, 21, 35, 36],
          golden_pickaxe: [18, 19, 20, 21, 35, 36],
          golden_boots: [0, 1, 2, 3, 4, 7, 8, 9, 10, 20, 35, 36],
          golden_chestplate: [0, 1, 3, 4, 7, 10, 20, 35, 36],
          golden_helmet: [0, 1, 3, 4, 5, 6, 7, 10, 20, 35, 36],
          golden_leggings: [0, 1, 3, 4, 7, 10, 20, 35, 36]
        }, Ng = {enchanted_golden_apple: ["enchanted_golden_apple", "appleEnchanted"]}, Og = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_18, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_18, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c, d) {
              var e, f;
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    return b.next = 2, wf.create(a, c, d);
                  case 2:
                    return e = b.sent, f = Pg(a), b.abrupt("return", function () {
                      var b = uc()(wc().mark(function c(b) {
                        var d, g, h, i, j;
                        return wc().wrap(function (c) {
                          for (; ;) switch (c.prev = c.next) {
                            case 0:
                              return c.next = 2, e(b);
                            case 2:
                              for (d = c.sent, g = [], h = Vb(d); !(i = h()).done;) j = i.value, k = f(j).map(function (b) {
                                return Sb({world: a, lootTableKey: "desert_pyramid", randomSeed: b})
                              }), k.reduce(function (a, b) {
                                return a.concat(b)
                              }, []).find(function (a) {
                                return Ng.enchanted_golden_apple.includes(a.name)
                              }) && g.push([].concat(j, [[{item: "enchanted_golden_apple"}]]));
                              return c.abrupt("return", g);
                            case 6:
                            case"end":
                              return c.stop()
                          }
                          var k
                        }, c)
                      }));
                      return function () {
                        return b.apply(this, arguments)
                      }
                    }());
                  case 5:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        }, Pg = function (a) {
          if (a.edition === xc.Edition.Bedrock) {
            var b = J(a);
            return function (a) {
              var c = new rc(b(a[0], a[1]));
              return c.nextInt(), [hc().fromInt(c.nextInt()), hc().fromInt(c.nextInt()), hc().fromInt(c.nextInt()), hc().fromInt(c.nextInt())]
            }
          }
          return function (b) {
            var c = F(a, 16 * b[0], 16 * b[1]), d = vb(a, c, a.javaVersion >= xc.JavaVersion.V1_19_3 ? 1 : 3, 4);
            return d.nextInt(3), [d.nextLong(), d.nextLong(), d.nextLong(), d.nextLong()]
          }
        }, Qg = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_18, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_18, xc.BedrockVersion.V1_22]
          }), create: function (a) {
            return uc()(wc().mark(function b() {
              var c, d;
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    return c = new ne.cj(a), d = function () {
                      var a = uc()(wc().mark(function b(a) {
                        var d;
                        return wc().wrap(function (b) {
                          for (; ;) switch (b.prev = b.next) {
                            case 0:
                              return d = c.find(a), b.abrupt("return", r(d, function (a) {
                                return [a.reference[0] >> 4, a.reference[2] >> 4]
                              }));
                            case 2:
                            case"end":
                              return b.stop()
                          }
                        }, b)
                      }));
                      return function () {
                        return a.apply(this, arguments)
                      }
                    }(), d.free = function () {
                      return c.free()
                    }, b.abrupt("return", d);
                  case 4:
                  case"end":
                    return b.stop()
                }
              }, b)
            }))()
          }
        }, Rg = a(5924), Sg = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_18, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_18, xc.BedrockVersion.V1_22]
          }), create: function (a) {
            return uc()(wc().mark(function b() {
              var c, d;
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    return c = new Rg.r(a), d = function () {
                      var a = uc()(wc().mark(function b(a) {
                        var d;
                        return wc().wrap(function (b) {
                          for (; ;) switch (b.prev = b.next) {
                            case 0:
                              return d = c.find(a), b.abrupt("return", r(d, function (a) {
                                return [a.reference.pos[0] >> 4, a.reference.pos[2] >> 4]
                              }));
                            case 2:
                            case"end":
                              return b.stop()
                          }
                        }, b)
                      }));
                      return function () {
                        return a.apply(this, arguments)
                      }
                    }(), d.free = function () {
                      return c.free()
                    }, b.abrupt("return", d);
                  case 4:
                  case"end":
                    return b.stop()
                }
              }, b)
            }))()
          }
        }, Tg = function (a) {
          var b = a.provider, c = a.heightType;
          return function (a, d, e) {
            e([a[0], b.getSurfaceBlock(a[0], a[2], c, "topmostAccurate"), a[2]])
          }
        }, Ug = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_18, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_18, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c) {
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    if (a.edition !== xc.Edition.Java) {
                      b.next = 2;
                      break
                    }
                    return b.abrupt("return", Yb(a, c.overworld.noise()));
                  case 2:
                    return b.abrupt("return", Zb(a, c.overworld));
                  case 3:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        },
        Vg = [["tower_1", 1, [5, 13, 5]], ["tower_2", 1, [5, 13, 5]], ["tower_3", 1, [7, 13, 7]], ["tower_4", 1, [7, 13, 7]], ["tower_5", 1, [7, 13, 7]]],
        Wg = [Gc, dd, fd, Ld, Hd, Wc], Xg = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_20, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_20, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c) {
              var d, e;
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    return d = c.overworld.noise(), e = a.edition === xc.Edition.Bedrock && a.bedrockVersion >= xc.BedrockVersion.V_1_20_60, b.abrupt("return", v(a, {
                      spacing: 34,
                      separation: 8,
                      salt: 83469867,
                      linearSeparation: a.edition === xc.Edition.Java || e,
                      forceRngType: e ? "java" : void 0
                    }, function () {
                      var b = uc()(wc().mark(function f(b, g) {
                        var h, i, j;
                        return wc().wrap(function (f) {
                          for (; ;) switch (f.prev = f.next) {
                            case 0:
                              if (a.edition !== xc.Edition.Java && !e) {
                                f.next = 5;
                                break
                              }
                              if (!(h = L(a, c.overworld.noise(), b, g, -15, {
                                heightType: "worldSurface",
                                surfaceCheckType: "topmostAccurate"
                              }, Wg, Vg))) {
                                f.next = 4;
                                break
                              }
                              return f.abrupt("return", [h.x, h.y + 10, h.z]);
                            case 4:
                            case 9:
                              return f.abrupt("return", !1);
                            case 5:
                              if (i = d.getPreliminarySurfaceLevel(4 * b, 4 * g), j = Fe(d.getNoiseBiomeBlock(16 * b, i - 20, 16 * g)), !Wg.includes(j)) {
                                f.next = 9;
                                break
                              }
                              return f.abrupt("return", [16 * b + 8, null, 16 * g + 8]);
                            case 10:
                            case"end":
                              return f.stop()
                          }
                        }, f)
                      }));
                      return function () {
                        return b.apply(this, arguments)
                      }
                    }(), function (a, b, c, d) {
                      return d
                    }));
                  case 3:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        }, Yg = function (a) {
          return a !== fe
        }, Zg = [["end_1", 1, [19, 20, 19]], ["end_2", 1, [19, 20, 19]]], $g = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_21, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_21, xc.BedrockVersion.V1_22]
          }), create: function (a, b) {
            return uc()(wc().mark(function c() {
              return wc().wrap(function (c) {
                for (; ;) switch (c.prev = c.next) {
                  case 0:
                    return c.abrupt("return", v(a, {
                      spacing: 34,
                      separation: 12,
                      linearSeparation: !0,
                      salt: 94251327,
                      forceRngType: "java"
                    }, function () {
                      var c = uc()(wc().mark(function d(c, e) {
                        return wc().wrap(function (d) {
                          for (; ;) switch (d.prev = d.next) {
                            case 0:
                              return d.abrupt("return", L(a, b.overworld.noise(), c, e, function (a) {
                                var b = a.rng;
                                return Ag(b, -40, -20)
                              }, null, Yg, Zg));
                            case 1:
                            case"end":
                              return d.stop()
                          }
                        }, d)
                      }));
                      return function () {
                        return c.apply(this, arguments)
                      }
                    }(), function (a, b, c, d) {
                      return [d.x, d.y, d.z]
                    }, {x0: 0, z0: 0, x1: 1, z1: 1}, function (a) {
                      return [a[0] >> 4, a[2] >> 4]
                    }, !0));
                  case 1:
                  case"end":
                    return c.stop()
                }
              }, c)
            }))()
          }
        }, _g = (a(4944), a(3792), a(5586)), ah = a(1900), bh = {
          supportsWorld: me({
            java: [xc.JavaVersion.V1_18, xc.JavaVersion.V1_22],
            bedrock: [xc.BedrockVersion.V1_18, xc.BedrockVersion.V1_22]
          }), create: function () {
            var a = uc()(wc().mark(function b(a, c) {
              var d, e, f;
              return wc().wrap(function (b) {
                for (; ;) switch (b.prev = b.next) {
                  case 0:
                    return d = new _g.o(a), e = new ah.d(a), f = function () {
                      var b = uc()(wc().mark(function f(b) {
                        var g, h, i;
                        return wc().wrap(function (f) {
                          for (; ;) switch (f.prev = f.next) {
                            case 0:
                              if (g = d.find(b), a.edition !== xc.Edition.Bedrock) {
                                f.next = 7;
                                break
                              }
                              return f.next = 4, $b(a, b, e);
                            case 4:
                              f.t0 = f.sent, f.next = 10;
                              break;
                            case 7:
                              return f.next = 9, ac(a, b, e, c.overworld.noise());
                            case 9:
                              f.t0 = f.sent;
                            case 10:
                              return h = f.t0, i = [].concat(g.map(function (a) {
                                return {type: "cave", pos: a.reference.pos, count: a.count}
                              }), h.map(function (a) {
                                return {type: "undergroundLake", pos: a}
                              })), f.abrupt("return", r(i, function (a) {
                                return [a.pos[0] >> 4, a.pos[2] >> 4]
                              }).filter(function (a) {
                                return j(b, {x: a[0], z: a[1]})
                              }));
                            case 13:
                            case"end":
                              return f.stop()
                          }
                        }, f)
                      }));
                      return function () {
                        return b.apply(this, arguments)
                      }
                    }(), f.free = function () {
                      d.free(), e.free()
                    }, b.abrupt("return", f);
                  case 5:
                  case"end":
                    return b.stop()
                }
              }, b)
            }));
            return function () {
              return a.apply(this, arguments)
            }
          }()
        },
        ch = ((jg = {})[xc.POI.BuriedTreasure] = Qe, jg[xc.POI.Dungeon] = Ze, jg[xc.POI.NetherFortress] = ff, jg[xc.POI.BastionRemnant] = Je, jg[xc.POI.EndCity] = af, jg[xc.POI.SlimeChunk] = Df, jg[xc.POI.Stronghold] = Wf, jg[xc.POI.Village] = Kf, jg[xc.POI.Mineshaft] = Ye, jg[xc.POI.WoodlandMansion] = cg, jg[xc.POI.PillagerOutpost] = gg, jg[xc.POI.OceanRuin] = mg, jg[xc.POI.OceanMonument] = lf, jg[xc.POI.Shipwreck] = Af, jg[xc.POI.DesertTemple] = wf, jg[xc.POI.JungleTemple] = xf, jg[xc.POI.WitchHut] = yf, jg[xc.POI.Igloo] = zf, jg[xc.POI.RuinedPortalOverworld] = mf, jg[xc.POI.RuinedPortalNether] = nf, jg[xc.POI.Spawn] = og, jg[xc.POI.Fossil] = wg, jg[xc.POI.Ravine] = Cg, jg[xc.POI.EndGateway] = Eg, jg[xc.POI.AmethystGeode] = Fg, jg[xc.POI.AncientCity] = Ig, jg[xc.POI.ItemOverworld] = Og, jg[xc.POI.OreVein] = Qg, jg[xc.POI.Cave] = Sg, jg[xc.POI.DesertWell] = Ug, jg[xc.POI.TrailRuin] = Xg, jg[xc.POI.TrialChamber] = $g, jg[xc.POI.LavaPool] = bh, jg),
        dh = function (a) {
          return Object.entries(ch).filter(function (b) {
            return b[0], b[1].supportsWorld(a)
          }).map(function (a) {
            return a[0]
          })
        }, eh = function (a, b, c) {
          var d = "idle", e = {}, f = function () {
            var f = uc()(wc().mark(function g(f, h) {
              var i;
              return wc().wrap(function (g) {
                for (; ;) switch (g.prev = g.next) {
                  case 0:
                    if ("idle" === d) {
                      g.next = 2;
                      break
                    }
                    throw new Error("illegal state for finding pois: " + d);
                  case 2:
                    return d = "running", g.prev = 3, g.next = 6, Promise.all(h.map(function () {
                      var d = uc()(wc().mark(function g(d) {
                        return wc().wrap(function (g) {
                          for (; ;) switch (g.prev = g.next) {
                            case 0:
                              if (e[d]) {
                                g.next = 6;
                                break
                              }
                              if (ch[d].supportsWorld(a)) {
                                g.next = 3;
                                break
                              }
                              return g.abrupt("return", [d, []]);
                            case 3:
                              return g.next = 5, ch[d].create(a, b, c);
                            case 5:
                              e[d] = g.sent;
                            case 6:
                              return g.t0 = d, g.next = 9, e[d](f);
                            case 9:
                              return g.t1 = g.sent, g.abrupt("return", [g.t0, g.t1]);
                            case 11:
                            case"end":
                              return g.stop()
                          }
                        }, g)
                      }));
                      return function () {
                        return d.apply(this, arguments)
                      }
                    }()));
                  case 6:
                    return i = g.sent, g.abrupt("return", Object.fromEntries(i));
                  case 8:
                    return g.prev = 8, d = "idle", g.finish(8);
                  case 11:
                  case"end":
                    return g.stop()
                }
              }, g, null, [[3, , 8, 11]])
            }));
            return function () {
              return f.apply(this, arguments)
            }
          }();
          return f.free = function () {
            if ("idle" !== d) throw new Error("illegal state freeing pois: " + d);
            Object.values(e).forEach(function (a) {
              a.free && a.free()
            }), d = "freed"
          }, f
        }
    }(), d
  }();
}