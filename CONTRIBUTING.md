## Contributing
Compression uses Packwiz for development. We need it in order to not push .jar files to Github - this breaks mod licenses.

This means you need to setup development environment and live environment separately - simply speaking, you are going to have an instance where you play with all the .jar files and the separate cloned repository that you will actually be editing.

### Resources
[Packwiz](https://packwiz.infra.link/)
[PrismLauncher](https://prismlauncher.org/)
[VSCode](https://code.visualstudio.com/)
[Git Guide - Git SCM Book](https://git-scm.com/book/en/v2)
[Packwiz Bootstrap Installer](https://github.com/packwiz/packwiz-installer-bootstrap/releases)

### Git
You will need a bit of knowledge on Git, especially on doing pull requests.
Here are some things you should know:
- When you fork the main repository, make a separate branch for every pull request and keep your main branch clean. This allows you to work on multiple features at a time, as well as easily merging upstream when you need.
- Try to keep your pull requests relatively small - this makes reviewing and merging process way easier. As a rule of thumb, keep them to a single feature/bugfix/addition.

### Packwiz
After you are done with the pull request, you should run:
```properties
packwiz refresh
```
This will update the indexes of all files you have added/removed.

### Testing changes
Download a packwiz bootstrap installer .jar first.
Then, you will need to create an instance with matching Minecraft and Forge version. pack.toml file in your development environment lists these versions.

Then, you will need to put the bootstrap installer in .minecraft folder, edit your instance and add this pre-launch command:
```properties
"$INST_JAVA" -jar packwiz-installer-bootstrap.jar [LINK]
```
[LINK] should be replaced with a direct link to raw version of pack.toml in your Github repository. It looks like this for our main branch: https://github.com/NyagiByte/Compression/blob/main/pack.toml

After that, select the right Java version and launch the instance. Packwiz will automatically download all mods and files in the instance for you. 