import ora from "ora";

export class Spinner {
  private spinner: ora.Ora;

  constructor(loadingMessage: string = "Thinking...") {
    this.spinner = ora(loadingMessage).start();
  }

  public success(text: string) {
    this.spinner.succeed(text);
  }

  public fail(text: string) {
    this.spinner.fail(text);
  }

  public info(text: string) {
    this.spinner.info(text);
  }

  public warn(text: string) {
    this.spinner.warn(text);
  }

  public stop() {
    this.spinner.stop();
  }
}
