/* tslint:disable */
/* eslint-disable */

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_chunkgeneratorend_free: (a: number) => void;
  readonly chunkgeneratorend_new: (a: number) => number;
  readonly chunkgeneratorend_build_height_map: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_get_world_edition: (a: number) => number;
  readonly __wbg_set_world_edition: (a: number, b: number) => void;
  readonly __wbg_get_world_version: (a: number) => number;
  readonly __wbg_set_world_version: (a: number, b: number) => void;
  readonly __wbg_get_world_biome_size: (a: number, b: number) => void;
  readonly __wbg_set_world_biome_size: (a: number, b: number, c: number) => void;
  readonly __wbg_get_world_large_biomes: (a: number) => number;
  readonly __wbg_set_world_large_biomes: (a: number, b: number) => void;
  readonly world_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly __wbg_dungeonfinder_free: (a: number) => void;
  readonly dungeonfinder_new: (a: number) => number;
  readonly dungeonfinder_find: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbg_biomeprovider_free: (a: number) => void;
  readonly biomeprovider_new: (a: number) => number;
  readonly biomeprovider_get_ints0: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly biomeprovider_get_ints1: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbg_biomeproviderend_free: (a: number) => void;
  readonly biomeproviderend_new: (a: number) => number;
  readonly biomeproviderend_get_height_value: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly biomeproviderend_get_chunk_biome: (a: number, b: number, c: number) => number;
  readonly biomeproviderend_get_noise_biome: (a: number, b: number, c: number) => number;
  readonly biomeproviderend_get_chunk_area: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbg_biomeprovidernether_free: (a: number) => void;
  readonly biomeprovidernether_new: (a: number) => number;
  readonly biomeprovidernether_get_noise_biome: (a: number, b: number, c: number) => number;
  readonly biomeprovidernether_get_chunk_biome: (a: number, b: number, c: number) => number;
  readonly biomeprovidernether_get_chunk_area: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbg_multinoisebiomesource_free: (a: number) => void;
  readonly multinoisebiomesource_new: (a: number) => number;
  readonly multinoisebiomesource_get_noise_biome: (a: number, b: number, c: number, d: number) => number;
  readonly multinoisebiomesource_get_noise_biome_block: (a: number, b: number, c: number, d: number) => number;
  readonly multinoisebiomesource_get_noise_biome_at_height_type: (a: number, b: number, c: number, d: number) => number;
  readonly multinoisebiomesource_get_surface: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly multinoisebiomesource_get_surface_block: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly multinoisebiomesource_get_surface_area: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly multinoisebiomesource_get_noise_biome_area: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly multinoisebiomesource_get_noise_biome_area_at_height_type: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly multinoisebiomesource_find_spawn_position: (a: number, b: number) => void;
  readonly multinoisebiomesource_get_preliminary_surface_level: (a: number, b: number, c: number) => number;
  readonly multinoisebiomesource_get_noise_block: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbg_xoroshirorandom_free: (a: number) => void;
  readonly xoroshirorandom_new: (a: number, b: number, c: number, d: number) => number;
  readonly xoroshirorandom_new_from_seed: (a: number, b: number) => number;
  readonly xoroshirorandom_set_seed: (a: number, b: number, c: number) => void;
  readonly xoroshirorandom_next_int: (a: number, b: number) => number;
  readonly xoroshirorandom_next_long: (a: number, b: number) => void;
  readonly xoroshirorandom_next_float: (a: number) => number;
  readonly xoroshirorandom_next_double: (a: number) => number;
  readonly xoroshirorandom_skip_next_n: (a: number, b: number) => void;
  readonly xoroshirorandomworldgen_next_int: (a: number, b: number) => number;
  readonly xoroshirorandomworldgen_next_long: (a: number, b: number) => void;
  readonly xoroshirorandomworldgen_next_float: (a: number) => number;
  readonly xoroshirorandomworldgen_next_double: (a: number) => number;
  readonly xoroshirorandomworldgen_skip_next_n: (a: number, b: number) => void;
  readonly __wbg_oreveinfinder_free: (a: number) => void;
  readonly oreveinfinder_new: (a: number) => number;
  readonly oreveinfinder_find: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbg_cavefinder_free: (a: number) => void;
  readonly cavefinder_new: (a: number) => number;
  readonly cavefinder_find: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbg_lavafloodedcavefinder_free: (a: number) => void;
  readonly lavafloodedcavefinder_new: (a: number) => number;
  readonly lavafloodedcavefinder_find: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbg_lavalakehelper_free: (a: number) => void;
  readonly lavalakehelper_new: (a: number) => number;
  readonly lavalakehelper_test_feature_positions_java: (a: number, b: number) => number;
  readonly lavalakehelper_find_positions_bedrock: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbg_bedrockfeatureseedgenerator_free: (a: number) => void;
  readonly bedrockfeatureseedgenerator_new: (a: number, b: number, c: number) => number;
  readonly bedrockfeatureseedgenerator_get_seed_for_chunk: (a: number, b: number, c: number) => number;
  readonly xoroshirorandomworldgen_new_from_seed: (a: number, b: number) => number;
  readonly xoroshirorandomworldgen_set_seed: (a: number, b: number, c: number) => void;
  readonly xoroshirorandomworldgen_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_xoroshirorandomworldgen_free: (a: number) => void;
  readonly __wbg_world_free: (a: number) => void;
  readonly __wbindgen_export_0: (a: number, b: number) => number;
  readonly __wbindgen_export_1: (a: number, b: number, c: number, d: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
