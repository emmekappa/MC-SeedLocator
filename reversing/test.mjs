import {getResults, getSupportedPPois} from "./locator.mjs"

const cb3World = {
  edition: "Bedrock",
  bedrockVersion: 10210,
  config: {}
}

const params = {
  seed: "1675696067",
  platform: {
    cb3World: cb3World
  },
  tileSize: 128,
  tileScale: 2,
  biomeFilter: false,
  dimension: "overworld",
  pois: [
    "ancientCity", "spawn"
  ],
  showBiomes: false,
  biomeHeight: "depth0",
  showHeights: false
}

const tile = {
  "x": 128,
  "z": 128,
  "xL": 128,
  "zL": 128,
  "scale": 2
}

const availablePois = await getSupportedPPois(cb3World);
console.log(availablePois);

for (let x = -100; x < 100; x+=128) {
  for (let z = -100; z < 100; z+=128) {

    let result = await getResults({
      type: "check",
      params: params,
      tile: {x: x, z: z, xL: 128, zL: 128, scale: 2}
    })
    //console.log("Searching at", x, z, "resulting", result.poiResults);
    console.log(result.poiResults)
    // if (result.poiResults.ancientCity?.length > 0) {
    //   const value = result.poiResults.ancientCity;
    //   value[0][0] *= 16;
    //   value[0][1] *= 16;
    //   //console.log(value);
    // }
  }
}

function getPoiResults(result) {

}