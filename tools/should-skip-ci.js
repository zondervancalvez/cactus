import { readFileSync } from "fs";

const SKIP_CACTI = "skip-cacti-ci";
const MaintainersFile = "MAINTAINERS.md";
//regular expression to get the maintainers in MAINTAINERS.md
const MAINTAINERS_REGEX = /\|\s*([A-Za-z\s]+)\s*\|\s*\[([^\]]+)\]\[[^\]]+\]\s*\|\s*([A-Za-z0-9_-]+|-)*/g;

const main = async () => {
  const markdownContent = readFileSync(MaintainersFile, "utf-8");

  const args = process.argv.slice(2);
  const pullReqUrl = args[0];
  const committerLogin = args[1];

  //Uncomment these lines for local machine testing purposes:
  //const pullReqUrl = "https://api.github.com/repos/zondervancalvez/cactus/pulls/7";
  //const committerLogin = "zondervancalvez";

  const fetchJsonFromUrl = async (url) => {
    const fetchResponse = await fetch(url);
    return fetchResponse.json();
  };

  let commitMessageList = [];
  const commitMessagesMetadata = await fetchJsonFromUrl(pullReqUrl + "/commits");

  commitMessagesMetadata.forEach((commitMessageMetadata) => {
    // get commit message body
    commitMessageList.push(commitMessageMetadata["commit"]["message"]);
    console.log(commitMessageList);
  });

  // Check if skip-ci is found in commit message
  const checkSkipCI = () => {
    for (let commitMessageListIndex in commitMessageList) {
      let commitMessage = commitMessageList[commitMessageListIndex];
      if (commitMessage.includes(SKIP_CACTI)) {
        console.log("Skip requested in commit message.");
        return true;
      } else {
        console.log("No skip request found.");
      }
      return false;
    }
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
      console.log("Committer is a trusted Maintainer.");
      return true;
    } else {
      console.log("Committer is not a Maintainer.");
      return false;
    }
  };

  // Main logic

  const shouldSkipCI = checkSkipCI();

  if (shouldSkipCI) {
    const isMaintainer = checkCommitterIsMaintainer();
    if (isMaintainer) {
      console.log("CI skipped as per request.");
      process.exit(1); // Exit successfully to skip CI
    } else {
      console.log("CI will not be skipped."); // Continue run CI
    }
  } else {
    console.log("No skip requested. Proceeding with CI.");
    process.exit(0); // Exit successfully to run CI
  }
};

// Run the main function
main();
