import {getResults, getSupportedPPois} from "./locator.mjs"

const cb3World = {
  edition: "Bedrock",
  bedrockVersion: 10210,
  config: {}
};

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
    "ancientCity", "trialChamber"
  ],
  showBiomes: true,
  biomeHeight: "depth0",
  showHeights: true
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

for (let x = -200; x < 200; x += 128) {
  for (let z = -200; z < 200; z += 128) {

    let result = await getResults({
      type: "check",
      params: params,
      tile: {x: x, z: z, xL: 128, zL: 128, scale: 1}
    })
    console.log("Searching at", x, z);
    // console.log("resulting", result.poiResults);
    //console.log(JSON.stringify(result))
    if (result.poiResults.ancientCity?.length > 0) {
      const value = result.poiResults.ancientCity;
      value[0][0] *= 16;
      value[0][1] *= 16;
      value[0][0] += 8;
      value[0][1] += 8;
      console.log(value);
    }
  }
}

function getPoiResults(result) {

}