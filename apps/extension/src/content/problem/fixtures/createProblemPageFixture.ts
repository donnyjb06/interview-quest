const createProblemDifficultyFixture = () => ` 
  <div class="text-caption text-difficulty-easy">Easy</div>
`;

const createProblemHeadingFixture = () => `
  <div class="text-title-large"><a href="problems/two-sum">1. Two Sum</a></div>
`;

const createProblemDescriptionFixture = () => `
  <p>
    Given an array of integers <code>nums</code>&nbsp;and an integer
    <code>target</code>, return
    <em>
      indices of the two numbers such that they add up to
      <code>target</code>
    </em>.
  </p>

  <p>
    You may assume that each input would have
    <strong><em>exactly</em> one solution</strong>, and you may not use the
    <em>same</em> element twice.
  </p>

  <p>You can return the answer in any order.</p>

  <p>&nbsp;</p>
`;

const createProblemExamplesFixture = () => `
    <pre>
  <strong>Input:</strong> nums = [2,7,11,15], target = 9
  <strong>Output:</strong> [0,1]
  <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
    </pre>

    <pre>
  <strong>Input:</strong> nums = [3,2,4], target = 6
  <strong>Output:</strong> [1,2]
    </pre>

    <pre>
  <strong>Input:</strong> nums = [3,3], target = 6
  <strong>Output:</strong> [0,1]
    </pre>
`;

const createProblemConstraintsFixture = () => `
  <ul>
    <li>
      <code>2 <= nums.length <= 10<sup>4</sup></code>
    </li>
    <li>
      <code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code>
    </li>
    <li>
      <code>-10<sup>9</sup> <= target <= 10<sup>9</sup></code>
    </li>

    <li>
      <strong>Only one valid answer exists.</strong>
    </li>
  </ul>
`;

const createProblemTopicsFixture = () => `
  <div class="overflow-hidden transition-all">
    <div class="mt-2 flex flex-wrap gap-1 pl-7">
      <div class="text-caption">Junior</div>
      <div class="text-caption">Array</div>
      <div class="text-caption">Hash Map</div>
    </div>
  </div>
`;

type ProblemPageFixture = {
  isDifficultyValid?: boolean;
  isMetaValid?: boolean;
  isDescriptionValid?: boolean;
  isConstraintsValid?: boolean;
  isExamplesValid?: boolean;
  isTopicsEmpty?: boolean;
};

export const createProblemPageFixture = ({
  isDifficultyValid = true,
  isMetaValid = true,
  isDescriptionValid = true,
  isConstraintsValid = true,
  isExamplesValid = true,
  isTopicsEmpty = false,
}: ProblemPageFixture = {}) => {
  return `
    ${isDifficultyValid && createProblemDifficultyFixture()}

    ${isMetaValid && createProblemHeadingFixture()}

    <div data-track-load="description_content">
    ${isDescriptionValid && createProblemDescriptionFixture()}

    ${isExamplesValid && createProblemExamplesFixture()}
    <p>&nbsp;</p>
    ${isConstraintsValid && createProblemConstraintsFixture()}
    </div>
    ${!isTopicsEmpty && createProblemTopicsFixture()}
    `;
};

export const buildValidProblemDetails = () => {
  return {
    id: "1",
    slug: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    difficulty: "EASY",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: null,
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
        explanation: null,
      },
    ],
    constraints: [
      "2 <= nums.length <= 104",
      "-109 <= nums[i] <= 109",
      "-109 <= target <= 109",
      "Only one valid answer exists.",
    ],
    topics: ["Junior", "Array", "Hash Map"],
  };
};
