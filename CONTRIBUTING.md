# Contributing to React UI

👍 Thanks for taking the time to contribute!

<br/><br/>

[What should I know before I get started?](#what-should-i-know-before-i-get-started)

[How can I contribute?](#how-can-i-contribute)

[How do I setup the project?](#how-do-i-setup-the-project)

<br/><br/>


#### What should I know before I get started?

<br/>

It's helpful to read the post about [old and new ideas in React UI](https://react-ui.dev/core-concepts/ideas) to understand the concepts used in the project.

<br/><br/>

#### How can I contribute?

<br/>

1. Bug fixes: If you spot a bug in the codebase or in the documentation, please feel free to report it or create a pull request to fix it.

2. Documentation: If you encounter a section of the documentation which is unclear or simply incomplete, please feel free to reach out

3. Components: React UI has a small set of core components. Contributions to [the ecosystem](https://react-ui.dev/ecosystem) are more than welcome.

4. Examples: If you are building a website/application with React UI or have a prototype based on the [CodeSandbox template](https://codesandbox.io/s/react-ui-template-302iq), please feel free to share it with me.

<br/><br/>

#### How do I setup the project

<br/>

1. Clone the repository

    Run this command on your terminal:

    ```
    git clone https://github.com/siddharthkp/react-ui.git
    ```

2. Run `yarn` to install dependencies.

    It's recommended to use [yarn](https://yarnpkg.com/) instead of npm because the project uses a `yarn.lock` file to make sure you get the exact version of dependencies as intended.

3. There are a few `packages` inside the repository. The interesting ones are:

    - packages/docs: This is the documentation site for React UI
    - packages/react-ui: This is the components package
    - packages/example: This is examples build with React UI

    Each of these have their own scripts inside `package.json`. For example, to work on the documentation website, you can run

    ```
    cd packages/docs
    yarn start
    ```

    You don't have to install dependencies again for each package. React UI uses [yarn workspaces(https://classic.yarnpkg.com/en/docs/workspaces/) - which means you can use the local version of react-ui package inside the documentation website.

<br/>

If you'd like to learn how to create a pull request, [this guide is really helpful](http://makeapullrequest.com).

<br/><br/>
