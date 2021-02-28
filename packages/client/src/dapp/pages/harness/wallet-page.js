import "../components/page-panel.js";
import "../../../lib/components/shared/action-card.js";
import "../components/page-body.js";
import "../../../lib/components/widgets/account-widget.js";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("wallet-page")
export default class WalletPage extends LitElement {
  @property()
  category;
  @property()
  description;
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


  render() {
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>> ACCESS CONTROL: ADMINISTRATOR ROLE  <<<<<<<<<<<<<<<<<<<<<<<<<<*/

    let content = html`
      <page-body
        title="${this.title}"
        category="${this.category}"
        description="${this.description}"
      >
        <h4>Powered by: <img src="https://www.covalenthq.com/static/images/covalent-logo.png" alt="Covalent Logo" class="logo"></h4>
        <br />
        <br />
        <action-card
            title="Get Wallet Info" description="Get Wallet token balance using its public address"
            action="getWalletBalance" method="get" fields="id chain">

          <number-widget
              field="id" label="wallet address" placeholder="Input your wallet address">
          </number-widget>
          <number-widget
              field="chain" label="ChainId" placeholder="137 for Matic and 1 for Ethereum">
          </number-widget>
        </action-card>
      </page-body>
      <page-panel id="resultPanel"></page-panel>
    `;

    return content;
  }
}

