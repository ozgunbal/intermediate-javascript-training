const JIRA_666 = {
  status: "Open",
  commitDone: false,
};
const task1 = (openTask) => {
  openTask.status = "In Progress";
  console.log("Labeled the issue as In Progress");
  return Promise.resolve(openTask);
};
const task2 = (notCommitted) => {
  notCommitted.commitDone = true;
  console.log("Commit the changes");
  return Promise.resolve(notCommitted);
};
const task3 = (committed) => {
  committed.status = "Resolved";
  console.log("Labeled the issue as Resolved");
  console.log(x);
  return Promise.resolve(committed);
};

task1(JIRA_666)
  .then((step1) => task2(step1))
  .then((step2) => task3(step2))
  .then((step3) => {
    if (step3.status == "Resolved") {
      console.log(step3);
      console.log("\\m/");
    }
  }).catch(err => console.log(err)) 

const makeStory = async (task) => {
  try {
    const workingOnIt = await task1(task);
    const committed = await task2(workingOnIt);
    const resolved = await task3(committed);
    if (resolved.status == "Resolved") {
      console.log(resolved);
      console.log("\\m/");
    }
    return resolved;
  } catch (error) {
    console.log(error);
  }
};

//makeStory(JIRA_666);