import { readFileSync } from "fs";
import { execSync } from "child_process";
//A new tag exclusively for MAINTAINERS that allows skipping the CI check
const SKIP_CACTI = "skip-cacti-ci";
const MaintainersFile = "MAINTAINERS.md";
//regular expression to get the maintainers in MAINTAINERS.md
const NAMES_REGEX = /\|\s*([A-Za-z\s]+)\s*/;
const LINKS_REGEX = /\|\s*\[([^\]]+)\]\[[^\]]+\]\s*/;
const TAGS_REGEX = /\|\s*([A-Za-z0-9_-]+|-)*\s*/;
const MAINTAINERS_REGEX = new RegExp(
  NAMES_REGEX.source + LINKS_REGEX.source + TAGS_REGEX.source,
  "g",
);

const main = async () => {
  const markdownContent = readFileSync(MaintainersFile, "utf-8");

  // Get the author of the commit message
  const committerLogin = execSync("git log -1 | grep Author | cut -d' ' -f2")
    .toString()
    .trim();

  let commitMessage = [];
  try {
    // Get the latest commit message
    commitMessage = execSync("git log -1 --pretty=%B").toString().trim();
    console.log("Latest commit message:\n", commitMessage);
  } catch (error) {
    console.error("Error fetching commit message:\n", error.message);
  }

  // Check if skip-ci is found in commit message
  const checkSkipCI = () => {
    if (commitMessage.includes(SKIP_CACTI)) {
      console.log("Skip requested in commit message.");
      return true;
    } else {
      console.log("No skip request found.");
    }
    return false;
  };

  // Function to extract active maintainers
  const extractMaintainers = (maintainerMetaData) => {
    let match;
    const maintainers = [];
    while ((match = MAINTAINERS_REGEX.exec(maintainerMetaData)) !== null) {
      const github = match[2];
      maintainers.push(github);
    }
    return maintainers;
  };
  // Get the maintainers
  const activeMaintainers = extractMaintainers(markdownContent);
  activeMaintainers.forEach((maintainers) => {
    maintainers;
  });

  // Check if committer is a trusted maintainer
  const checkCommitterIsMaintainer = () => {
    if (activeMaintainers.includes(committerLogin)) {
      console.log("The author of this PR is an active maintainer.");
      return true;
    } else {
      console.log(
        "CI will not be skipped. \nThe author of this PR is not an active maintainer.\nPlease refer to https://github.com/hyperledger/cacti/blob/main/MAINTAINERS.md for the list of active maintainers.",
      );
      return false;
    }
  };

  // Main logic

  const shouldSkipCI = checkSkipCI();

  if (shouldSkipCI) {
    const isMaintainer = checkCommitterIsMaintainer();
    if (isMaintainer) {
      console.log(
        "Exit with an error code so as to pause the dependent workflows. CI skipped as per request.",
      );
      process.exit(1); // Exit successfully to skip CI
    }
  } else {
    console.log("No skip requested. Proceeding with CI.");
    process.exit(0); // Exit successfully to run CI
  }
};

// Run the main function
main();
