import { mockUserList } from "@/js/db/TestUserList";
import { mockGameList } from "@/js/db/TestGameList";
import { mockOwnershipList } from "@/js/db/TestOwnershipList";

// NOTE: Debug flag.
const isProduction = process.env.NODE_ENV === "production";
const isStaging = process.env.NODE_ENV === "staging";

let useTestData = isStaging ? false : true;

// NOTE: If this application is built by production mode, should NOT use test data.
if (isProduction) useTestData = false;

export { useTestData, mockUserList, mockGameList, mockOwnershipList };
