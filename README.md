<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url] -->

<!-- [![MIT License][license-shield]][license-url]
[![Twitter][twitter-shield]][https://twitter.com/julianschoen]
[![LinkedIn][linkedin-shield]][https://www.linkedin.com/in/julianschoen/] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ntegrals/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">GPT-X</h3>

  <p align="center">
    Brings the power of GPT-4 to your terminal
    <br />
    <!-- <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »´</strong></a> -->
    <!-- <br /> -->
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</div>

## Features

    ✅ Code Review                      [Reviews a code file]
    ✅ Self Healing Code                [Runs a script in any language and fixes it upon a crash]
    ✅ Generate Unit Tests              [Generates unit tests for a code file]
    ✅ Convert Programming Language     [Converts a code file to another language]
    ✅ ELI5 Code                        [Generates an ELI5 explanation]
    ✅ Refactor Code                    [Refactors the code]
    ✅ Document Code                    [Adds documentation to the code]
    ✅ Best Practices                   [Converts the code to use the best practices]
    ✅ Reflexion                        [GPT reflects on it's answers to improve the output quality]
    🟨 Add new feature                  [Adds a new feature based on an input file]
    🟨 Increase context window          [Increase context window with vector embeddings]
    🟨 Process directories              [CLI can process directories and not only files]
    🟨 Provide examples                 [User can provide examples to better guide GPT-4]

## Installation

You need to have [Node.js](https://nodejs.org/en) installed.

1. Get an OpenAI API Key at [https://openai.com/](https://openai.com/)

   To do so...

   By default the model uses GPT-3.5...

   Optionally, you can request access to the GPT-4 API. The Magic CLI is much more powerful with GPT-4.

2. Install the CLI via npm
   ```sh
   npm install -g magic-cli
   ```
3. Add your OpenAI API key (It's only stored on your device)
   ```sh
   magic-cli -ak "sk-9jfoa..."
   ```

To verify that the installation worked, run:

```
magic-cli
```

<!-- USAGE EXAMPLES -->

## Usage

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

Run `magic-cli -h` to see all available commands

    Options:
    -v, --version                             output the current version
    -r, --review  <filePath>                  code review for a file
    -i, --improve  <filePath>                 refactor the code
    -b, --best  <filePath>                    convert the code to the best practices
    -f, --fix [filePath interpreter...]       fix the code recursively
    -l, --lang [filePath targetLanguage...]   convert the code to a different language
    -e, --eli5 <filePath>                     explain the code in simple terms
    -t, --test [filePath framework...]        generate unit tests for the code
    -d, --document <filePath>                 generate documentation for the code
    -x, --arbitraryFile [filePath prompt...]  accepts any instruction (prompt needs to be in quotes)
    -z, --arbitrary <prompt>                  accepts any instruction
    -o, --output [filePath]                   the output file path
    -s, --silent                              prevents logging the stream to the console
    -ak, --addkey [apiKey]                    add your OpenAI API key to the the environment
    -dk, --deletekey                          delete your OpenAI API key from the environment
    -pk, --printkey                           print your OpenAI API key
    -h, --help                                display help for command

## Contact

Hi! Thanks for checking out and using this library. If you are interested in discussing your project, require mentorship, consider hiring me, or just wanna chat - I'm happy to talk.

You can send me an email to get in touch: j.schoen@mail.com or message me on Twitter [@julianschoen](https://twitter.com/julianschoen)

If you'd just want to give something back, I've got a Buy Me A Coffee account:

[Buy Me A Coffee](https://www.buymeacoffee.com/ntegrals)
Thanks and have an awesome day 👋

<!-- Julian Schoen - [@julianschoen](https://twitter.com/julianschoen) - j.schoen@mail.com

Feel free to say thanks: [Buy Me A Coffee](https://www.buymeacoffee.com/ntegrals) -->

<!-- Disclaimer -->

## Disclaimer

Disclaimer This project, Auto-GPT, is an experimental application and is provided "as-is" without any warranty, express or implied. By using this software, you agree to assume all risks associated with its use, including but not limited to data loss, system failure, or any other issues that may arise.

The developers and contributors of this project do not accept any responsibility or liability for any losses, damages, or other consequences that may occur as a result of using this software. You are solely responsible for any decisions and actions taken based on the information provided by Auto-GPT.

Please note that the use of the GPT-4 language model can be expensive due to its token usage. By utilizing this project, you acknowledge that you are responsible for monitoring and managing your own token usage and the associated costs. It is highly recommended to check your OpenAI API usage regularly and set up any necessary limits or alerts to prevent unexpected charges.

As an autonomous experiment, Auto-GPT may generate content or take actions that are not in line with real-world business practices or legal requirements. It is your responsibility to ensure that any actions or decisions made based on the output of this software comply with all applicable laws, regulations, and ethical standards. The developers and contributors of this project shall not be held responsible for any consequences arising from the use of this software.

By using Auto-GPT, you agree to indemnify, defend, and hold harmless the developers, contributors, and any affiliated parties from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from your use of this software or your violation of these terms.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/demo.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
