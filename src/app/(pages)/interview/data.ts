export const mindsetDeveloper = [
  {
    title: "Introduce yourself",
    content: [
      "Who → Experience → Recent Project → Skills → Motivation",
      "Hi, I’m Huy currently I’m working at Equix technology company.\n\n  I have over six years of experience as a Frontend Developer, mainly working with React.js.\n\n In my recent project, I was developing enterprise banking applications for Techcombank\n\n I focus on building reusable components, integrating REST APIs, optimizing performance.\n\n I'm interested in joining Finative team because I'd like to continue working on digital banking projects continuing to expand my knowleage and resovle problem skills."
    ]
  },
  {
    title: "When a user reports that the application is slow, how would you investigate and handle the issue ?",
    content: [
      "1. Identify → 2. Analyze → 3. Optimize",
     "I first identify whether the issue is related to rendering, network, or JavaScript execution.\n\nThen I use Chrome DevTools to analyze\n\nFinally, I optimize the appropriate layer instead of guessing."
    ]
  },
  {
    title: "How would you optimize the bundle size ?",
    content: [
     "I reduce the initial bundle size through:\n\n- Tree shaking\n\n- Code splitting\n- Dynamic imports\n\n- Bundle analysis"
    ]
  },
  {
    title: "What happens when you call setState in React?",
    content: [
      "When setState is called, React does not update the state immediately. Instead, it schedules an update, re-renders the component with the new state, compares the new Virtual DOM with the previous one, updates the real DOM if needed."
    ]
  },
  {
    title: "Explain the event loop in JavaScript?",
    content: [
      "JavaScript is single-threaded and uses the Event Loop to handle asynchronous tasks without blocking the Call Stack."
    ]
  },
  {
    title: "How do you prevent incorrect data updates when receiving multiple WebSocket events ?",
    content: [
      "I use a stable unique key and immutable updates."
    ]
  },
  {
    title: "The WebSocket connection is lost for 30 seconds. After reconnecting, how do you ensure that no data is missing ?",
    content: [
      "I would not assume reconnecting is enough. After reconnecting, I would resubscribe and synchronize the latest state through an API if missed events cannot be replayed."
    ]
  },
  {
    title: "The API returns data in a format that is different from what the frontend needs. What would you do ?",
    content: [
      "I would introduce a mapping or adapter layer between the API response and the UI model. This prevents components from being tightly coupled to the backend response structure."
    ]
  },
  {
    title: "The bug only occurs for some users. What would you do ?",
    content: [
      "I would identify what is different between affected and unaffected users, such as permissions, roles, data, browser, feature flags, configuration, or network conditions."
    ]
  },
  {
    title: "The bug only occurs in production but not locally. How would you debug it ?",
    content: [
      "I would compare production and local environments, including logs, API versions, environment variables, build configuration, feature flags, and browser behavior. I would reproduce the production conditions before changing the code."
    ]
  },
  {
    title: "The designer provides a prototype, but the UX is not suitable for the application's performance. What would you do ?",
    content: [
      "I would not change the design silently. I would discuss the UX requirement and technical constraints with Design and Product, explain the trade-offs, and propose alternatives when necessary."
    ]
  },
  {
    title: "Would you choose solution A, which is faster but harder to maintain, or solution B, which is slower but has a cleaner architecture ?",
    content: [
      "I would evaluate business impact, performance, complexity, maintenance cost, team capability, deadline, and scalability. Then I would clearly communicate the trade-offs before making the decision."
    ]
  },
  {
    title: "You encounter a bug but don't know the root cause. What would you do ?",
    content: [
      "Reproduce → Collect → Narrow → Solve.",
      "I don't want to guess the root cause. First, I reproduce the issue, collect evidence, narrow down the scope, and then evaluate possible solutions."
    ]
  },
  {
    title: "What would you do if another Senior Developer disagreed with your solution ?",
    content: [
      "Listen → Compare → Validate.",
      "I focus on the trade-offs rather than defending my solution. I would understand the concern, compare alternatives, and use data or a prototype to validate the decision."
    ]
  },
  {
    title: "Tell me about the most challenging technical problem you have ever solved ?",
    content: [
      "Situation → Action → Result",
      "One of the most challenging projects I worked on was optimizing a financial dashboard that had performance issues due to inefficient state management and excessive re-renders.\n\nI used React DevTools to find the bottlenecks, improved state management with Redux Toolkit, applied React.memo, useMemo, and useCallback, and worked with the backend team to reduce unnecessary API calls.\n\nAs a result, page load time improved by around 60%, the UI became much smoother, and the solution became a pattern we reused in later features."
    ]
  },
];