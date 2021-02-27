import DappLib from "@decentology/dappstarter-dapplib";
import DOM from "../../lib/components/shared/dom";
import "../../lib/components/shared/action-card.js";
import "../../lib/components/shared/action-button.js";
import "../../lib/components/widgets/text-widget.js";
import "../../lib/components/widgets/number-widget.js";
import "../../lib/components/widgets/account-widget.js";
import "../../lib/components/widgets/upload-widget.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("dapp-page")
export default class DappPage extends LitElement {
  @property()
  get;
  @property()
  post;
  @property()
  title;
  @property()
  category;
  @property()
  description;

  createRenderRoot() {
    return this;
  }
  constructor(args) {
    super(args);
  }


  render() {
    let content = html`
      <div class="container m-auto">
        <div class="row fadeIn mt-3 p-2 block">
          <h2 class="text-6xl">🎉 Defi Degener Wallets!</h2>
          <p class="mt-3">
            Welcome to my EtherPunk 2021 project!
          </p>
          <p class="mt-3">
            This project is using Matic blockchain <img class="logo" src="https://info.decentology.com/assets/blockchains/matic/matic-dappstarter.png"  alt="matic logo"/> with Covalent <img class="logo" src="https://www.covalenthq.com/static/images/covalent-logo.png"  alt="matic logo"/> API integrated.
          </p>
          <h3 class="mt-3 text-3xl">Main Functionalities</h3>
          <ul class="mt-3 ml-5 list-decimal">
            <li class="mt-3">Look up token balance in a wallet along with their fiat values. Both Ethereum and Matic network are supported.</li>
            <li class="mt-3">Upload and store local files on blockchain via IPFS (decentralized file storage).</i></li>
          </ul>
        </div>
      </div>
    `;
    return content;

  }
}
