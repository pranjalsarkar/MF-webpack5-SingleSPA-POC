import singleSpaHtml from "single-spa-html";
import prod from "./prod";
import store from "store/store";

const template = `
<div
  class="product-images"
  style="display: grid; grid-template-columns: repeat(5, 20%);"
>
</div>
`;

const jsComponent = singleSpaHtml({
  template,
});

jsComponent.originalMount = jsComponent.mount;
jsComponent.mount = function (opts, props) {
  return jsComponent.originalMount(opts, props).then(() => {
    const el = document.querySelector(".product-images");
    const html = prod
      .map(
        (item, index) => `
<img src="${item.image}" style="max-width: 100%" data-index="${index}" data-foodName="${item.foodName}" />
<div>${item.foodName}-${item.price}</div>
          `
      )
      .join("");
    el.innerHTML = html;
    document.querySelectorAll(".product-images img").forEach((el) =>
      el.addEventListener("click", (evt) => {
        //console.log(evt.target.getAttribute('data-foodName'));
        //alert(evt.target.getAttribute('data-foodName'));
        store.image = parseInt(evt.target.getAttribute("data-index"));
      })
    );
  });
};

export const bootstrap = jsComponent.bootstrap;
export const mount = jsComponent.mount;
export const unmount = jsComponent.unmount;
