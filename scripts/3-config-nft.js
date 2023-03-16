import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xA1eCE25228D42224C886f7701AF6b3621bc0678d", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Governance DAO Authentication Token",
        description: "This NFT will give you access to GovernanceDAO!",
        image: readFileSync("scripts/assets/supply.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();